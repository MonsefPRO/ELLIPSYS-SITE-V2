"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

interface Props {
  quote: string;
  author?: string;
}

export default function ExpertQuoteSide({ quote, author = "— Expert Ellipsys Solutions" }: Props) {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!closed) setShow(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [closed]);

  return (
    <>
      {/* Sentinel invisible — placé là où était l'ancien bloc devis */}
      <div ref={sentinelRef} className="h-px w-full" aria-hidden="true" />

      {/* Carte flottante — visible uniquement xl+ */}
      <div
        role="complementary"
        aria-label="Avis de l'expert"
        className={[
          "fixed right-6 top-1/3 z-40 w-72 hidden xl:block",
          "transition-all duration-500 ease-out",
          show && !closed
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-28 pointer-events-none",
        ].join(" ")}
      >
        <div className="bg-[#0e2f52]/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl border border-white/10 relative">
          {/* Bouton fermer */}
          <button
            onClick={() => { setClosed(true); setShow(false); }}
            className="absolute top-2.5 right-2.5 text-white/40 hover:text-white/80 transition-colors p-1 rounded-full hover:bg-white/10"
            aria-label="Fermer"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Label */}
          <div className="flex items-center gap-1.5 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 shrink-0" />
            <span className="text-brand-orange-400 text-xs font-black tracking-widest uppercase">
              Avis Expert
            </span>
          </div>

          {/* Citation */}
          <p className="text-white text-sm font-medium italic leading-relaxed">
            &ldquo;{quote}&rdquo;
          </p>

          {/* Auteur */}
          <p className="text-brand-orange-400/70 text-xs font-bold mt-3 tracking-wide">
            {author}
          </p>
        </div>
      </div>
    </>
  );
}
