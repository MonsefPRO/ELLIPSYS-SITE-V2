"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Globe, CheckCircle2, ShieldCheck } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

interface Props { isEn: boolean }

export function HeroContent({ isEn }: Props) {
  return (
    <>
      {/* ── Texte central ── */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center pb-24">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/15 border border-white/25 text-white text-sm font-semibold mb-8 backdrop-blur-sm shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-brand-orange-400 shrink-0 animate-pulse" />
          {isEn
            ? "Our services are available to all client profiles, from private individuals to large enterprises"
            : "Nos services s'adressent à tout type de clientèle, du particulier au professionnel"}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22, ease }}
          className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight max-w-5xl leading-tight drop-shadow-xl"
        >
          {isEn ? "European" : "Expert"}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-red-400">
            {isEn ? "Expert" : "Européen"}
          </span>
          {isEn
            ? " : Cleaning, Inspection, Maintenance"
            : " : Nettoyage, Inspection, Maintenance"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.38, ease }}
          className="text-sm md:text-base text-slate-100 mb-5 max-w-2xl font-medium leading-relaxed drop-shadow-md"
        >
          {isEn
            ? "Ellipsys deploys high-precision tailored solutions to clean, inspect and protect your assets."
            : "Ellipsys déploie des solutions sur mesure de haute précision pour nettoyer, inspecter et protéger votre patrimoine."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52, ease }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <Link
            href="/devis"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 active:scale-[0.98] transition-transform shadow-xl flex items-center justify-center gap-2"
          >
            {isEn ? "Request a Free Quote" : "Demander un devis gratuit"} <ChevronRight className="w-5 h-5" />
          </Link>
          <Link
            href="/expertise"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 active:scale-[0.98] transition-all shadow-lg flex items-center justify-center"
          >
            {isEn ? "Our Technology Fleet" : "Notre parc technologique"}
          </Link>
        </motion.div>
      </div>

      {/* ── Bandeau bas ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease }}
        className="absolute bottom-0 left-0 w-full bg-[#0e2f52]/90 backdrop-blur-lg border-t border-white/10 py-4 hidden md:block z-20"
      >
        <div className="container mx-auto px-4 text-slate-300 flex justify-between text-sm">
          <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-brand-orange-400" /> France · Europe</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-orange-400" /> {isEn ? "No Scaffolding · No Work Platforms" : "Sans Échafaudage · Sans Nacelles"}</div>
          <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-orange-400" /> {isEn ? "DGAC / EASA Certified" : "Certifiés DGAC / EASA"}</div>
        </div>
      </motion.div>
    </>
  );
}
