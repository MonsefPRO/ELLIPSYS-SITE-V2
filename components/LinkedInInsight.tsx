"use client";

import { useEffect } from "react";

// LinkedIn Insight Tag — retargeting + base pour campagnes LinkedIn Conversion.
// RGPD : ne se charge QUE si l'utilisateur a accepté les cookies (comme PostHog/GTM).
// Le Partner ID vient de NEXT_PUBLIC_LINKEDIN_PARTNER_ID (à renseigner une fois le
// compte LinkedIn Ads activé → Campaign Manager > Ressources du compte > Insight Tag).
// Tant que la variable est absente, le composant ne fait rien.

const CONSENT_KEY = "ellipsys_cookie_consent";

declare global {
  interface Window {
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
    lintrk?: ((a: string, b?: unknown) => void) & { q?: unknown[][] };
  }
}

function loadInsightTag(partnerId: string) {
  if (typeof window === "undefined") return;
  // Déjà chargé ? on ne recharge pas.
  if (document.getElementById("linkedin-insight-tag")) return;

  window._linkedin_partner_id = partnerId;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(partnerId);

  if (!window.lintrk) {
    const lintrk = function (a: string, b?: unknown) {
      (window.lintrk!.q as unknown[][]).push([a, b]);
    } as Window["lintrk"];
    lintrk!.q = [];
    window.lintrk = lintrk;
  }

  const script = document.createElement("script");
  script.id = "linkedin-insight-tag";
  script.async = true;
  script.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  document.head.appendChild(script);
}

export default function LinkedInInsight() {
  useEffect(() => {
    const partnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
    if (!partnerId) return; // pas configuré → on ne fait rien

    // Charge si déjà consenti
    if (localStorage.getItem(CONSENT_KEY) === "accepted") {
      loadInsightTag(partnerId);
    }

    // Réagit si l'utilisateur accepte plus tard (changement dans un autre onglet/bandeau)
    const onConsent = (e: StorageEvent) => {
      if (e.key === CONSENT_KEY && e.newValue === "accepted") {
        loadInsightTag(partnerId);
      }
    };
    window.addEventListener("storage", onConsent);
    return () => window.removeEventListener("storage", onConsent);
  }, []);

  return null;
}
