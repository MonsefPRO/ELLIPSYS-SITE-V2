"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

const NAV = {
  fr: {
    home: "Accueil",
    services: "Nos Solutions",
    servicesOverview: "➔ Vue d'ensemble des solutions",
    solar: "Nettoyage Parc Photovoltaïque",
    roof: "Entretien Toitures",
    facade: "Façades & Bardages",
    thermal: "Thermographie",
    pests: "Éradication Nuisibles",
    aerial: "Captation & Imagerie",
    sectors: "Secteurs",
    sectorsOverview: "➔ Vue d'ensemble des secteurs",
    industry: "Industrie, Logistique & Datacenters",
    highDemand: "Secteurs à Haute Exigence",
    realEstate: "Immobilier & Syndics",
    heritage: "Monuments Historiques (ABF)",
    solar2: "Acteurs de l'Énergie Solaire",
    marine: "Milieu Maritime & Plaisance",
    collectivites: "Collectivités & Espace Public",
    expertise: "Notre Expertise",
    news: "Actualités",
    blog: "Blog & Actus",
    portfolio: "Nos Réalisations",
    values: "Nos Valeurs",
    cta: "Devis gratuit",
  },
  en: {
    home: "Home",
    services: "Our Services",
    servicesOverview: "➔ All Services",
    solar: "Solar Farm Cleaning",
    roof: "Roof Treatment",
    facade: "Facades & Cladding",
    thermal: "Thermal Imaging",
    pests: "Pest Eradication",
    aerial: "Aerial Imaging",
    sectors: "Industries",
    sectorsOverview: "➔ All Industries",
    industry: "Industry, Logistics & Datacenters",
    highDemand: "High-Demand Sectors",
    realEstate: "Real Estate & Property Managers",
    heritage: "Listed Heritage Buildings",
    solar2: "Solar Energy Operators",
    marine: "Marine & Leisure",
    collectivites: "Local Authorities & Public Spaces",
    expertise: "Technology & Fleet",
    news: "Insights",
    blog: "Blog & News",
    portfolio: "Our Portfolio",
    values: "Our Values",
    cta: "Request a Quote",
  },
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const { language } = useLanguage();
  const n = NAV[language];

  function toggleSection(section: string) {
    setOpenSection(prev => prev === section ? null : section);
  }

  function closeMobile() {
    setIsMobileMenuOpen(false);
    setOpenSection(null);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Ellipsys Solutions" className="h-16 w-auto" />
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/" className="text-base font-bold text-[#0e2f52] hover:text-brand-orange-500 transition-colors">
              {n.home}
            </Link>

            {/* Dropdown Solutions */}
            <div className="relative group">
              <button className="text-base font-bold text-[#0e2f52] hover:text-brand-orange-500 transition-colors flex items-center gap-1 py-8">
                {n.services} <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-b-xl border-t-4 border-brand-orange-500 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/prestations" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] border-b border-slate-100 hover:text-brand-orange-500">{n.servicesOverview}</Link>
                <Link href="/prestations/nettoyage-solaire" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{n.solar}</Link>
                <Link href="/prestations/traitement-toiture" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{n.roof}</Link>
                <Link href="/prestations/nettoyage-facade" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{n.facade}</Link>
                <Link href="/prestations/thermographie" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{n.thermal}</Link>
                <Link href="/prestations/nuisibles" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{n.pests}</Link>
                <Link href="/prestations/prises-de-vues" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{n.aerial}</Link>
              </div>
            </div>

            {/* Dropdown Secteurs */}
            <div className="relative group">
              <button className="text-base font-bold text-[#0e2f52] hover:text-brand-orange-500 transition-colors flex items-center gap-1 py-8">
                {n.sectors} <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-b-xl border-t-4 border-brand-orange-500 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/domaines" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] border-b border-slate-100 hover:text-brand-orange-500">{n.sectorsOverview}</Link>
                <Link href="/secteurs/industrie-logistique" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{n.industry}</Link>
                <Link href="/secteurs/haute-exigence" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{n.highDemand}</Link>
                <Link href="/secteurs/immobilier-syndics" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{n.realEstate}</Link>
                <Link href="/secteurs/monuments-historiques" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{n.heritage}</Link>
                <Link href="/secteurs/energie-solaire" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{n.solar2}</Link>
                <Link href="/secteurs/maritime-plaisance" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{n.marine}</Link>
                <Link href="/secteurs/collectivites" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{n.collectivites}</Link>
              </div>
            </div>

            <Link href="/expertise" className="text-base font-bold text-[#0e2f52] hover:text-brand-orange-500 transition-colors">
              {n.expertise}
            </Link>

            {/* Dropdown Actualités */}
            <div className="relative group">
              <button className="text-base font-bold text-[#0e2f52] hover:text-brand-orange-500 transition-colors flex items-center gap-1 py-8">
                {n.news} <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-xl border-t-4 border-brand-orange-500 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/blog" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{n.blog}</Link>
                <Link href="/realisations" className="block px-6 py-3 text-sm font-bold text-[#0e2f52] hover:bg-slate-50 hover:text-brand-orange-500">{n.portfolio}</Link>
              </div>
            </div>

            <Link href="/valeurs" className="text-base font-bold text-[#0e2f52] hover:text-brand-orange-500 transition-colors">
              {n.values}
            </Link>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Link href="/devis" className="px-7 py-3.5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-sm hover:scale-105 transition-transform shadow-lg flex items-center gap-2">
              {n.cta}
            </Link>
          </div>

          {/* Burger Mobile */}
          <button className="lg:hidden p-2 text-[#0e2f52]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* ── MENU MOBILE ─────────────────────────────────────────── */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col divide-y divide-slate-100">

            {/* Language switcher */}
            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-slate-400 text-sm font-medium">Language</span>
              <LanguageSwitcher />
            </div>

            {/* Accueil */}
            <Link href="/" onClick={closeMobile} className="px-5 py-4 text-base font-bold text-[#0e2f52]">
              {n.home}
            </Link>

            {/* Accordion — Nos Solutions */}
            <div>
              <button
                onClick={() => toggleSection("services")}
                className="w-full flex items-center justify-between px-5 py-4 text-base font-bold text-[#0e2f52]"
              >
                {n.services}
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openSection === "services" ? "rotate-180 text-brand-orange-500" : ""}`} />
              </button>
              {openSection === "services" && (
                <div className="bg-slate-50 border-t border-slate-100 divide-y divide-slate-100">
                  <Link href="/prestations" onClick={closeMobile} className="block px-8 py-3 text-sm font-bold text-brand-orange-500">{n.servicesOverview}</Link>
                  <Link href="/prestations/nettoyage-solaire" onClick={closeMobile} className="block px-8 py-3 text-sm font-semibold text-slate-700">{n.solar}</Link>
                  <Link href="/prestations/traitement-toiture" onClick={closeMobile} className="block px-8 py-3 text-sm font-semibold text-slate-700">{n.roof}</Link>
                  <Link href="/prestations/nettoyage-facade" onClick={closeMobile} className="block px-8 py-3 text-sm font-semibold text-slate-700">{n.facade}</Link>
                  <Link href="/prestations/thermographie" onClick={closeMobile} className="block px-8 py-3 text-sm font-semibold text-slate-700">{n.thermal}</Link>
                  <Link href="/prestations/nuisibles" onClick={closeMobile} className="block px-8 py-3 text-sm font-semibold text-slate-700">{n.pests}</Link>
                  <Link href="/prestations/prises-de-vues" onClick={closeMobile} className="block px-8 py-3 text-sm font-semibold text-slate-700">{n.aerial}</Link>
                </div>
              )}
            </div>

            {/* Accordion — Secteurs */}
            <div>
              <button
                onClick={() => toggleSection("sectors")}
                className="w-full flex items-center justify-between px-5 py-4 text-base font-bold text-[#0e2f52]"
              >
                {n.sectors}
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openSection === "sectors" ? "rotate-180 text-brand-orange-500" : ""}`} />
              </button>
              {openSection === "sectors" && (
                <div className="bg-slate-50 border-t border-slate-100 divide-y divide-slate-100">
                  <Link href="/domaines" onClick={closeMobile} className="block px-8 py-3 text-sm font-bold text-brand-orange-500">{n.sectorsOverview}</Link>
                  <Link href="/secteurs/industrie-logistique" onClick={closeMobile} className="block px-8 py-3 text-sm font-semibold text-slate-700">{n.industry}</Link>
                  <Link href="/secteurs/haute-exigence" onClick={closeMobile} className="block px-8 py-3 text-sm font-semibold text-slate-700">{n.highDemand}</Link>
                  <Link href="/secteurs/immobilier-syndics" onClick={closeMobile} className="block px-8 py-3 text-sm font-semibold text-slate-700">{n.realEstate}</Link>
                  <Link href="/secteurs/monuments-historiques" onClick={closeMobile} className="block px-8 py-3 text-sm font-semibold text-slate-700">{n.heritage}</Link>
                  <Link href="/secteurs/energie-solaire" onClick={closeMobile} className="block px-8 py-3 text-sm font-semibold text-slate-700">{n.solar2}</Link>
                  <Link href="/secteurs/maritime-plaisance" onClick={closeMobile} className="block px-8 py-3 text-sm font-semibold text-slate-700">{n.marine}</Link>
                  <Link href="/secteurs/collectivites" onClick={closeMobile} className="block px-8 py-3 text-sm font-semibold text-slate-700">{n.collectivites}</Link>
                </div>
              )}
            </div>

            {/* Accordion — Actualités */}
            <div>
              <button
                onClick={() => toggleSection("news")}
                className="w-full flex items-center justify-between px-5 py-4 text-base font-bold text-[#0e2f52]"
              >
                {n.news}
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openSection === "news" ? "rotate-180 text-brand-orange-500" : ""}`} />
              </button>
              {openSection === "news" && (
                <div className="bg-slate-50 border-t border-slate-100 divide-y divide-slate-100">
                  <Link href="/blog" onClick={closeMobile} className="block px-8 py-3 text-sm font-semibold text-slate-700">{n.blog}</Link>
                  <Link href="/realisations" onClick={closeMobile} className="block px-8 py-3 text-sm font-semibold text-slate-700">{n.portfolio}</Link>
                </div>
              )}
            </div>

            {/* Liens directs */}
            <Link href="/expertise" onClick={closeMobile} className="px-5 py-4 text-base font-bold text-[#0e2f52]">
              {n.expertise}
            </Link>
            <Link href="/valeurs" onClick={closeMobile} className="px-5 py-4 text-base font-bold text-[#0e2f52]">
              {n.values}
            </Link>

            {/* CTA */}
            <div className="px-5 py-5">
              <Link href="/devis" onClick={closeMobile} className="w-full block bg-gradient-to-r from-brand-orange-500 to-red-600 text-white py-4 rounded-xl text-center font-bold shadow-lg text-base">
                {n.cta}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
