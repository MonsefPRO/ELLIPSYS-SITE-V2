"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Zap } from "lucide-react";

const news = [
  {
    tag: "Nouveau Chantier",
    location: "Aimargues (30)",
    text: "Démoussage de Toiture — Résultat Avant/Après",
    href: "/realisations",
  },
  {
    tag: "Réalisation",
    location: "Montpellier (34)",
    text: "Nettoyage Vitrages Façades — Scutum",
    href: "/realisations",
  },
];

type Phase = "visible" | "out" | "in";

export function NewsTickerBanner() {
  const [idx, setIdx]     = useState(0);
  const [phase, setPhase] = useState<Phase>("visible");

  const goTo = useCallback((i: number) => {
    if (i === idx) return;
    setPhase("out");
    setTimeout(() => {
      setIdx(i);
      setPhase("in");
      setTimeout(() => setPhase("visible"), 400);
    }, 340);
  }, [idx]);

  const next = useCallback(() => {
    setPhase("out");
    setTimeout(() => {
      setIdx((i) => (i + 1) % news.length);
      setPhase("in");
      setTimeout(() => setPhase("visible"), 400);
    }, 340);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const item = news[idx];

  const transform =
    phase === "out"  ? "perspective(800px) rotateX(-75deg) translateY(-4px) scale(0.97)" :
    phase === "in"   ? "perspective(800px) rotateX(55deg)  translateY(4px)  scale(0.97)" :
                       "perspective(800px) rotateX(0deg)   translateY(0px)  scale(1)";

  const opacity = phase === "visible" ? 1 : 0;

  return (
    <div className="absolute bottom-[52px] left-0 right-0 z-20 hidden md:flex justify-center pb-3 pointer-events-none">

      {/* Gradient border wrapper */}
      <div className="pointer-events-auto p-px rounded-2xl bg-gradient-to-r from-brand-orange-500/40 via-white/10 to-brand-orange-500/20 shadow-2xl shadow-black/50">
        <div className="flex items-stretch bg-[#080f1e]/90 backdrop-blur-2xl rounded-[15px] overflow-hidden">

          {/* LEFT — live label */}
          <div className="flex items-center gap-2.5 px-5 py-3 border-r border-white/8 shrink-0 bg-brand-orange-500/5">
            <Zap className="w-3 h-3 text-brand-orange-400 fill-brand-orange-400 shrink-0" />
            <span className="text-[9px] font-black tracking-[0.22em] uppercase text-brand-orange-400 whitespace-nowrap">
              Actus
            </span>
            {/* Live dot */}
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
          </div>

          {/* CENTER — 3-D animated content */}
          <div className="px-5 py-3" style={{ minWidth: 0 }}>
            <div style={{ height: "1.35rem", perspective: "800px" }}>
              <Link
                href={item.href}
                className="group"
                style={{
                  transformOrigin: "50% 50%",
                  transform,
                  opacity,
                  transition:
                    phase === "out"
                      ? "transform 0.30s cubic-bezier(0.6,0,0.8,0.4), opacity 0.24s ease"
                      : phase === "in"
                      ? "none"
                      : "transform 0.42s cubic-bezier(0.1,0.8,0.3,1), opacity 0.30s ease",
                  willChange: "transform, opacity",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  whiteSpace: "nowrap",
                }}
              >
                {/* Tag */}
                <span className="inline-flex items-center px-2 py-0.5 bg-gradient-to-r from-brand-orange-500/25 to-amber-500/15 border border-brand-orange-500/35 text-brand-orange-300 text-[9px] font-black rounded-full uppercase tracking-widest shrink-0">
                  {item.tag}
                </span>

                {/* Location */}
                <span className="flex items-center gap-1 text-slate-500 text-[11px] shrink-0">
                  <MapPin className="w-2.5 h-2.5" />
                  {item.location}
                </span>

                {/* Separator */}
                <span className="w-px h-3 bg-white/10 shrink-0" />

                {/* Text */}
                <span className="text-slate-100 text-[13px] font-semibold tracking-tight group-hover:text-white transition-colors">
                  {item.text}
                </span>

                {/* Arrow */}
                <ArrowRight className="w-3 h-3 text-brand-orange-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </Link>
            </div>
          </div>

          {/* RIGHT — dot indicators */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-l border-white/8 shrink-0">
            {news.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-400 ${
                  i === idx
                    ? "w-5 h-1.5 bg-gradient-to-r from-brand-orange-500 to-amber-400 shadow-sm shadow-brand-orange-500/50"
                    : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Actualité ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
