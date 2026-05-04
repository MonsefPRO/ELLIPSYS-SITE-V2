"use client";

import { useState, useEffect } from "react";
import { Cookie, ShieldCheck, BarChart2 } from "lucide-react";

const COOKIE_KEY = "ellipsys_cookie_consent";
type ConsentState = "accepted" | "refused" | null;

export function CookieBanner() {
  const [consent, setConsent]       = useState<ConsentState>(null);
  const [visible, setVisible]       = useState(false);
  const [leaving, setLeaving]       = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY) as ConsentState | null;
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    } else {
      setConsent(stored);
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
      if (choice === "accepted") activateAnalytics();
    }, 350);
  }

  if (!visible || consent !== null) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6`}
      style={{
        opacity: leaving ? 0 : 1,
        transform: leaving ? "translateY(16px)" : "translateY(0)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="p-px rounded-2xl bg-gradient-to-r from-brand-orange-500/50 via-white/10 to-brand-orange-500/30 shadow-2xl shadow-black/60">
          <div className="bg-[#060d1a] backdrop-blur-2xl rounded-[15px] overflow-hidden">
            <div className="h-0.5 w-full bg-gradient-to-r from-brand-orange-500 via-amber-400 to-brand-orange-500 opacity-80" />
            <div className="p-5 md:p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-5">

                {/* Icône */}
                <div className="shrink-0 hidden md:flex w-11 h-11 rounded-xl bg-brand-orange-500/15 border border-brand-orange-500/30 items-center justify-center">
                  <Cookie className="w-5 h-5 text-brand-orange-400" />
                </div>

                {/* Texte */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Cookie className="w-4 h-4 text-brand-orange-400 md:hidden shrink-0" />
                    <p className="text-white font-bold text-sm">Ellipsys utilise des cookies</p>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed mb-3">
                    Nous utilisons des cookies de mesure d&apos;audience (PostHog) pour améliorer notre site et mieux comprendre comment nos visiteurs interagissent avec nos services. Aucune donnée personnelle n&apos;est vendue ni transmise à des tiers.{" "}
                    <button
                      onClick={() => setShowDetail((v) => !v)}
                      className="text-brand-orange-400 underline underline-offset-2 hover:text-brand-orange-300 transition-colors"
                    >
                      {showDetail ? "Masquer les détails" : "En savoir plus"}
                    </button>
                  </p>

                  {showDetail && (
                    <div className="mb-4 grid sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white text-xs font-bold mb-0.5">Cookies essentiels</p>
                          <p className="text-slate-500 text-xs">Nécessaires au bon fonctionnement du site. Toujours actifs — ne requièrent pas de consentement.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                        <BarChart2 className="w-4 h-4 text-brand-orange-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white text-xs font-bold mb-0.5">Cookies analytiques</p>
                          <p className="text-slate-500 text-xs">PostHog — mesure d&apos;audience anonymisée. Pages vues, sources de trafic. Activés uniquement avec votre accord.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <p className="text-slate-600 text-[10px]">
                    Conforme RGPD · Directive ePrivacy ·{" "}
                    <a href="/politique-confidentialite" className="text-slate-500 hover:text-slate-400 underline underline-offset-2 transition-colors">
                      Politique de confidentialité
                    </a>
                  </p>
                </div>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 md:min-w-[160px]">
                  <button
                    onClick={() => handle("accepted")}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange-500 to-amber-500 text-white text-sm font-bold hover:from-brand-orange-400 hover:to-amber-400 transition-all shadow-lg shadow-brand-orange-500/30 whitespace-nowrap"
                  >
                    Tout accepter
                  </button>
                  <button
                    onClick={() => handle("refused")}
                    className="px-5 py-2.5 rounded-xl bg-white/6 border border-white/10 text-slate-400 text-sm font-medium hover:bg-white/10 hover:text-white transition-all whitespace-nowrap"
                  >
                    Refuser
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
