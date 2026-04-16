"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-4 border-[#0e2f52] flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-brand-orange-500 -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-[#0e2f52] tracking-tight leading-none">ELLIPSYS</span>
              <span className="text-[11px] font-bold text-brand-orange-500 uppercase tracking-widest mt-1">Solutions</span>
            </div>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/" className="text-base font-bold text-[#0e2f52] hover:text-brand-orange-500 transition-colors">
              Accueil
            </Link>

            {/* Dropdown Solutions */}
            <div className="relative group">
              <button className="text-base font-bold text-[#0e2f52] hover:text-brand-orange-500 transition-colors flex items-center gap-1 py-8">
                Nos Solutions <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-b-xl border-t-4 border-brand-orange-500 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/prestations/nettoyage-solaire" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">Nettoyage Solaire</Link>
                <Link href="/prestations/traitement-toiture" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">Entretien Toitures</Link>
                <Link href="/prestations/nettoyage-facade" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{"Façades & Bardages"}</Link>
                <Link href="/prestations/thermographie" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">Thermographie</Link>
                <Link href="/prestations/nuisibles" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{"Éradication Nuisibles"}</Link>
                <Link href="/prestations/prises-de-vues" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{"Imagerie & FPV"}</Link>
              </div>
            </div>

            {/* Dropdown Secteurs */}
            <div className="relative group">
              <button className="text-base font-bold text-[#0e2f52] hover:text-brand-orange-500 transition-colors flex items-center gap-1 py-8">
                Secteurs <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-b-xl border-t-4 border-brand-orange-500 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/domaines" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] border-b border-slate-100 hover:text-brand-orange-500">{"➔ Vue d'ensemble des secteurs"}</Link>
                <Link href="/secteurs/industrie-logistique" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{"Industrie, Logistique & Datacenters"}</Link>
                <Link href="/secteurs/haute-exigence" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{"Secteurs à Haute Exigence"}</Link>
                <Link href="/secteurs/immobilier-syndics" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{"Immobilier & Syndics"}</Link>
                <Link href="/secteurs/monuments-historiques" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">Monuments Historiques (ABF)</Link>
                <Link href="/secteurs/energie-solaire" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{"Acteurs de l'Énergie Solaire"}</Link>
                <Link href="/secteurs/maritime-plaisance" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{"Milieu Maritime & Plaisance"}</Link>
                <Link href="/secteurs/collectivites" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{"Collectivités & Espace Public"}</Link>
              </div>
            </div>

            <Link href="/expertise" className="text-base font-bold text-[#0e2f52] hover:text-brand-orange-500 transition-colors">
              Notre Expertise
            </Link>

            {/* Dropdown Actualités */}
            <div className="relative group">
              <button className="text-base font-bold text-[#0e2f52] hover:text-brand-orange-500 transition-colors flex items-center gap-1 py-8">
                {"Actualités"} <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-xl border-t-4 border-brand-orange-500 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/blog" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{"Blog & Actus"}</Link>
                <Link href="/realisations" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">Nos Réalisations</Link>
              </div>
            </div>

            <Link href="/valeurs" className="text-base font-bold text-[#0e2f52] hover:text-brand-orange-500 transition-colors">
              Nos Valeurs
            </Link>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <Link href="/devis" className="px-7 py-3.5 bg-brand-orange-500 text-white rounded-xl font-bold text-sm hover:bg-brand-orange-600 transition-colors shadow-lg flex items-center gap-2">
              Devis gratuit
            </Link>
          </div>

          {/* Burger Mobile */}
          <button className="lg:hidden p-2 text-[#0e2f52]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl h-screen overflow-y-auto pb-24">
          <div className="flex flex-col p-6 space-y-2 text-xl font-bold">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-3 border-b border-gray-50 text-[#0e2f52]">Accueil</Link>

            <div className="py-2 border-b border-gray-50">
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-2 mt-2">Nos Solutions</p>
              <div className="pl-4 space-y-3">
                <Link href="/prestations/nettoyage-solaire" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-[#0e2f52] text-base font-bold hover:text-brand-orange-500">Nettoyage Solaire</Link>
                <Link href="/prestations/traitement-toiture" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-[#0e2f52] text-base font-bold hover:text-brand-orange-500">Entretien Toitures</Link>
                <Link href="/prestations/nettoyage-facade" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-[#0e2f52] text-base font-bold hover:text-brand-orange-500">{"Façades & Bardages"}</Link>
                <Link href="/prestations/thermographie" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-[#0e2f52] text-base font-bold hover:text-brand-orange-500">Thermographie</Link>
                <Link href="/prestations/nuisibles" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-[#0e2f52] text-base font-bold hover:text-brand-orange-500">Nuisibles</Link>
                <Link href="/prestations/prises-de-vues" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-[#0e2f52] text-base font-bold hover:text-brand-orange-500">{"Imagerie & FPV"}</Link>
              </div>
            </div>

            <div className="py-2 border-b border-gray-50">
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-2 mt-2">Secteurs</p>
              <div className="pl-4 space-y-3">
                <Link href="/domaines" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-[#0e2f52] text-base font-bold hover:text-brand-orange-500">Vue ensemble</Link>
                <Link href="/secteurs/industrie-logistique" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-[#0e2f52] text-base font-bold hover:text-brand-orange-500">Industrie</Link>
                <Link href="/secteurs/energie-solaire" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-[#0e2f52] text-base font-bold hover:text-brand-orange-500">{"Énergie Solaire"}</Link>
                <Link href="/secteurs/immobilier-syndics" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-[#0e2f52] text-base font-bold hover:text-brand-orange-500">Syndics</Link>
                <Link href="/secteurs/monuments-historiques" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-[#0e2f52] text-base font-bold hover:text-brand-orange-500">Patrimoine</Link>
                <Link href="/secteurs/maritime-plaisance" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-[#0e2f52] text-base font-bold hover:text-brand-orange-500">Maritime</Link>
                <Link href="/secteurs/collectivites" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-[#0e2f52] text-base font-bold hover:text-brand-orange-500">{"Collectivités"}</Link>
              </div>
            </div>

            <Link href="/expertise" onClick={() => setIsMobileMenuOpen(false)} className="py-3 border-b border-gray-50 text-[#0e2f52]">Notre Expertise</Link>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="py-3 border-b border-gray-50 text-[#0e2f52]">Blog</Link>
            <Link href="/realisations" onClick={() => setIsMobileMenuOpen(false)} className="py-3 border-b border-gray-50 text-[#0e2f52]">{"Réalisations"}</Link>
            <Link href="/valeurs" onClick={() => setIsMobileMenuOpen(false)} className="py-3 border-b border-gray-50 text-[#0e2f52]">Nos Valeurs</Link>

            <div className="pt-6">
              <Link href="/devis" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-brand-orange-500 text-white py-4 rounded-xl text-center shadow-lg font-bold block">
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
