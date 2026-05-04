"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

export default function PostHogProvider() {
  useEffect(() => {
    // Clé publique PostHog — NEXT_PUBLIC_ = exposée au navigateur par design
    const key  = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
                 ?? "phc_yseG7ZZT4GQPyMUGdNhaVCaTSNyAexgSdKLX3haiqSN6";
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";

    posthog.init(key, {
      api_host: host,
      defaults: "2026-01-30",
      capture_pageview: true,
      capture_pageleave: true,
      session_recording: { maskAllInputs: true },
      // RGPD : tracking désactivé par défaut, activé si l'utilisateur a accepté les cookies
      opt_out_capturing_by_default: true,
      loaded: (ph) => {
        const consent = localStorage.getItem("ellipsys_cookie_consent");
        if (consent === "accepted") ph.opt_in_capturing();
      },
    });

    // Réactive le tracking si l'utilisateur accepte plus tard
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
