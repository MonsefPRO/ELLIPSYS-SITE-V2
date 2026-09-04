// Helper Google Ads / GTM, Consent Mode v2 + conversion "generate_lead"
// Utilisé par CookieBanner (consentement) et la page /devis (conversion lead).
//
// Principe : on ne hardcode AUCUN ID de conversion Google Ads ici.
// On pousse un événement propre "generate_lead" dans le dataLayer.
// La balise de conversion Google Ads se configure ensuite côté GTM
// (déclencheur = événement personnalisé "generate_lead"), sans redéploiement.

type GtagArgs = unknown[];

function pushGtag(...args: GtagArgs) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...a: GtagArgs) => void };
  // Si le shim gtag du layout existe, on l'utilise (pousse `arguments` comme Google).
  if (typeof w.gtag === "function") {
    w.gtag(...args);
    return;
  }
  // Fallback : push direct dans le dataLayer.
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(args);
}

/**
 * Met à jour le consentement Google (Consent Mode v2).
 * Appelé quand l'utilisateur accepte/refuse le bandeau cookies.
 */
export function updateAdsConsent(granted: boolean) {
  const v = granted ? "granted" : "denied";
  pushGtag("consent", "update", {
    ad_storage: v,
    ad_user_data: v,
    ad_personalization: v,
    analytics_storage: v,
  });
}

// Valeur de lead estimée par service (€), sert au value-based bidding plus tard.
// Basée sur le panier moyen réel de chaque prestation.
const LEAD_VALUE: Record<string, number> = {
  toiture: 2500,        // démoussage + hydrofuge, toiture ~100 m²
  facade: 2000,         // nettoyage / ravalement façade
  solaire: 400,         // nettoyage panneaux résidentiel
  thermographie: 600,
  nuisibles: 250,
  imagerie: 500,
  autre: 800,
};

export interface LeadParams {
  service: string;
  serviceLabel: string;
  clientType: string;
  city?: string;
  email?: string;
  phone?: string;
}

/**
 * Pousse la conversion "generate_lead" dans le dataLayer après un devis envoyé.
 * Inclut les données pour les Enhanced Conversions (email/téléphone),
 * que Google hashe automatiquement côté GTM avant envoi (uniquement si consentement).
 */
export function pushLeadConversion(p: LeadParams) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "generate_lead",
    currency: "EUR",
    value: LEAD_VALUE[p.service] ?? 800,
    lead_service: p.service,
    lead_service_label: p.serviceLabel,
    lead_client_type: p.clientType,
    lead_city: p.city || "",
    // Enhanced Conversions for Leads, données fournies par l'utilisateur.
    // GTM/Google Ads les hashe (SHA-256) avant transmission. Jamais en clair côté Google.
    enhanced_conversion_data: {
      email: p.email || "",
      phone_number: p.phone || "",
    },
  });
}
