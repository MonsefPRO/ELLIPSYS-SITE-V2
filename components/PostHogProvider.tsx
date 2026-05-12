"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

export default function PostHogProvider() {
  useEffect(() => {
    // Clé publique PostHog — NEXT_PUBLIC_ = exposée au navigateur par design
    const key  = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

    // Si pas de clé configurée → on ne fait rien (évite crash + log inutile)
    if (!key) {
      if (process.env.NODE_ENV === "development") {
        console.info("[PostHog] NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN absent — tracking désactivé.");
      }
      return;
    }

    posthog.init(key, {
      api_host: host,
      defaults: "2026-01-30",
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true,
      session_recording: {
        maskAllInputs: true,        // par sécurité, on masque les champs (RGPD)
        maskInputOptions: { password: true },
      },
      // RGPD : tracking désactivé par défaut, activé après opt-in cookie
      opt_out_capturing_by_default: true,
      persistence: "localStorage+cookie",
      loaded: (ph) => {
        const consent = typeof window !== "undefined" ? localStorage.getItem("ellipsys_cookie_consent") : null;
        if (consent === "accepted") ph.opt_in_capturing();
      },
    });

    // Réactive le tracking si l'utilisateur accepte les cookies plus tard
    const handleConsent = (e: StorageEvent) => {
      if (e.key === "ellipsys_cookie_consent") {
        if (e.newValue === "accepted") posthog.opt_in_capturing();
        else posthog.opt_out_capturing();
      }
    };
    window.addEventListener("storage", handleConsent);
    return () => window.removeEventListener("storage", handleConsent);
  }, []);

  return null;
}
