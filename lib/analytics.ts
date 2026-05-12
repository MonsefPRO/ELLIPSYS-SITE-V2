// Helper analytics côté client (browser).
// Wrapper sur PostHog + sécurités : no-op si PostHog non chargé ou opt-out.

"use client";

import posthog from "posthog-js";

type PropValue = string | number | boolean | null | undefined;

/**
 * Capture un événement custom côté client.
 * Safe à appeler — ne throw jamais, ne casse pas si PostHog non chargé.
 */
export function track(event: string, properties?: Record<string, PropValue>): void {
  try {
    if (typeof window === "undefined") return;
    // posthog.capture est safe même si init n'a pas eu lieu (queue interne)
    posthog.capture(event, properties);
  } catch (err) {
    // silencieux — analytics ne doit jamais casser l'app
    if (process.env.NODE_ENV === "development") {
      console.warn(`[analytics] track('${event}') failed:`, err);
    }
  }
}

/**
 * Identifie un visiteur (typiquement avec son email après soumission d'un formulaire).
 * Relie sa session anonyme à son profil pour le suivi multi-sessions.
 */
export function identify(email: string, properties?: Record<string, PropValue>): void {
  try {
    if (typeof window === "undefined" || !email) return;
    posthog.identify(email, properties);
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[analytics] identify failed:`, err);
    }
  }
}

/**
 * Reset l'identité (à appeler en cas de "déconnexion" — rare sur un site vitrine).
 */
export function resetIdentity(): void {
  try {
    if (typeof window === "undefined") return;
    posthog.reset();
  } catch {
    // silent
  }
}

// ─── Liste des événements custom (centralisée pour cohérence) ───────────────
// Utiliser ces constantes plutôt que des strings libres dans le code = évite les typos.
export const Events = {
  // Devis
  DEVIS_PAGE_VIEWED: "devis_page_viewed",
  DEVIS_CLIENT_TYPE_SELECTED: "devis_client_type_selected", // pro / particulier
  DEVIS_SERVICE_SELECTED: "devis_service_selected",
  DEVIS_PREFILLED_FROM_URL: "devis_prefilled_from_url",    // arrivée depuis ADS / cold outreach avec params
  DEVIS_FORM_STARTED: "devis_form_started",      // 1er focus sur le formulaire
  DEVIS_SUBMITTED: "devis_submitted",            // succès envoi
  DEVIS_SUBMIT_FAILED: "devis_submit_failed",

  // Newsletter
  NEWSLETTER_SIGNUP_STARTED: "newsletter_signup_started",
  NEWSLETTER_SIGNUP_SUBMITTED: "newsletter_signup_submitted",
  NEWSLETTER_SIGNUP_FAILED: "newsletter_signup_failed",

  // Lead magnet
  LEAD_MAGNET_VIEWED: "lead_magnet_viewed",
  LEAD_MAGNET_SUBMITTED: "lead_magnet_submitted",

  // CTAs / clics
  PHONE_CLICKED: "phone_clicked",
  EMAIL_CLICKED: "email_clicked",
  WHATSAPP_CLICKED: "whatsapp_clicked",
  CTA_DEVIS_CLICKED: "cta_devis_clicked",

  // UX / navigation
  LANGUAGE_SWITCHED: "language_switched",
  COOKIE_CONSENT_ACCEPTED: "cookie_consent_accepted",
  COOKIE_CONSENT_DECLINED: "cookie_consent_declined",

  // Service pages
  SERVICE_PAGE_VIEWED: "service_page_viewed",
} as const;
