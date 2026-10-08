"use client";

import { useState, useEffect } from "react";
import { updateAdsConsent } from "../lib/gtag";

const COOKIE_KEY = "ellipsys_cookie_consent";
type ConsentState = "accepted" | "refused" | null;

export function CookieBanner() {
  const [consent, setConsent]       = useState<ConsentState>(null);
  const [visible, setVisible]       = useState(false);
  const [leaving, setLeaving]       = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY) as ConsentState | null;
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    } else {
      setConsent(stored);
      // Visiteur récurrent : on réapplique son choix (Google + PostHog).
      updateAdsConsent(stored === "accepted");
      if (stored === "accepted") activateAnalytics();
    }
  }, []);

  function activateAnalytics() {
    if (typeof window !== "undefined" && (window as any).posthog) {
      (window as any).posthog.opt_in_capturing();
    }
  }

  function handle(choice: "accepted" | "refused") {
    setLeaving(true);
    setTimeout(() => {
      setConsent(choice);
      setVisible(false);
      localStorage.setItem(COOKIE_KEY, choice);
      // Consent Mode v2 : on informe Google du choix (pub + analytics).
      updateAdsConsent(choice === "accepted");
      if (choice === "accepted") activateAnalytics();
    }, 350);
  }

  if (!visible || consent !== null) return null;

  // Barre fine et discrète : l'ancienne carte masquait ~40 % de l'écran mobile
  // à l'arrivée, au détriment des demandes de devis. Même choix, même logique.
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#060d1a]/95 backdrop-blur border-t border-white/10"
      style={{
        opacity: leaving ? 0 : 1,
        transform: leaving ? "translateY(16px)" : "translateY(0)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <p className="flex-1 text-slate-300 text-xs leading-snug">
          Mesure d&apos;audience anonyme (PostHog), activée seulement avec votre accord.{" "}
          <a href="/politique-confidentialite" className="text-brand-orange-400 underline underline-offset-2 hover:text-brand-orange-300">
            En savoir plus
          </a>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => handle("refused")}
            className="flex-1 sm:flex-none px-4 py-1.5 rounded-lg border border-white/15 text-slate-300 text-xs font-medium hover:bg-white/10 hover:text-white transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={() => handle("accepted")}
            className="flex-1 sm:flex-none px-4 py-1.5 rounded-lg bg-brand-orange-500 text-white text-xs font-bold hover:bg-brand-orange-600 transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
