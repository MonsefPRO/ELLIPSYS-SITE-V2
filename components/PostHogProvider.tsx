"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

export default function PostHogProvider() {
  useEffect(() => {
    posthog.init("phc_ALRnDPcuJmXLj9cdid2fGJgLX8t5Buqeu6hfg5aGyuEU", {
      api_host: "https://eu.i.posthog.com",
      defaults: "2026-01-30",
      // Désactivé par défaut : s'active uniquement si l'utilisateur accepte les cookies
      opt_out_capturing_by_default: true,
      // Charge le script PostHog de manière différée pour ne pas bloquer le rendu
      loaded: (ph) => {
        const consent = localStorage.getItem("ellipsys_cookie_consent");
        if (consent === "accepted") ph.opt_in_capturing();
      },
    });
  }, []);
  return null;
}
