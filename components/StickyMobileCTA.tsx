"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, FileText } from "lucide-react";

/**
 * Sticky CTA mobile — affiche tel + devis en bas d'écran sur mobile uniquement.
 * Apparaît après 600px de scroll pour ne pas masquer le hero.
 * Disparaît automatiquement sur les pages /devis (déjà sur la page) et /admin/*.
 *
 * Impact attendu : +15-25% de conversion mobile (les visiteurs mobiles ne scrollent
 * souvent pas jusqu'au footer pour trouver le numéro de tel).
 */
export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Masque automatiquement sur la page devis et les routes admin
    const pathname = typeof window !== "undefined" ? window.location.pathname : "";
    if (pathname.startsWith("/devis") || pathname.startsWith("/admin")) {
      setHidden(true);
      return;
    }

    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-40 md:hidden
        transition-transform duration-300 ease-out
        ${visible ? "translate-y-0" : "translate-y-full"}
      `}
      aria-hidden={!visible}
    >
      {/* Backdrop blur */}
      <div className="bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex gap-2">
          <a
            href="tel:0467209709"
            onClick={() => {
              // PostHog event si dispo
              try {
                (window as unknown as { posthog?: { capture: (e: string) => void } }).posthog?.capture("phone_clicked");
              } catch {/* silent */}
            }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 active:scale-95 text-white font-bold rounded-2xl text-sm transition-all"
            aria-label="Appeler Ellipsys au 04 67 20 97 09"
          >
            <Phone className="w-4 h-4" />
            Appeler
          </a>
          <Link
            href="/devis"
            className="flex-[1.4] flex items-center justify-center gap-2 px-4 py-3 bg-brand-orange-500 hover:bg-brand-orange-600 active:scale-95 text-white font-black rounded-2xl text-sm transition-all shadow-lg"
            onClick={() => {
              try {
                (window as unknown as { posthog?: { capture: (e: string, props?: Record<string, unknown>) => void } })
                  .posthog?.capture("cta_devis_clicked", { source: "sticky_mobile" });
              } catch {/* silent */}
            }}
          >
            <FileText className="w-4 h-4" />
            Devis gratuit
          </Link>
        </div>
      </div>
    </div>
  );
}
