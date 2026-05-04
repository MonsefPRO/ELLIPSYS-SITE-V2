"use client";

import Link from "next/link";
import { MapPin, Mail, Phone, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import NewsletterSection from "./NewsletterSection";

const FOOTER = {
  fr: {
    desc: "Spécialiste de l'entretien extérieur technique et des interventions en accès difficile pour les professionnels, collectivités et particuliers.",
    col2: "Nos Solutions",
    col3: "L'Entreprise",
    col4: "Déploiement",
    solar: "Nettoyage Solaire",
    roof: "Entretien Toitures",
    facade: "Façades & Bardages",
    thermal: "Thermographie",
    pests: "Urgence Nuisibles",
    aerial: "Captation & Imagerie",
    expertise: "Notre Expertise",
    sectors: "Secteurs d'intervention",
    portfolio: "Nos Réalisations",
    blog: "Blog & Actus",
    values: "Nos Valeurs",
    partners: "Partenaires",
    europe: "Europe sur étude",
    legal: "Mentions légales & CGV",
    privacy: "Politique de confidentialité",
    rights: "Tous droits réservés.",
  },
  en: {
    desc: "Specialist in technical exterior maintenance and hard-to-access interventions for businesses, local authorities and private clients.",
    col2: "Our Services",
    col3: "Company",
    col4: "Service Areas",
    solar: "Solar Panel Cleaning",
    roof: "Roof Treatment",
    facade: "Facades & Cladding",
    thermal: "Thermal Imaging",
    pests: "Pest Emergency",
    aerial: "Aerial Imaging",
    expertise: "Technology & Fleet",
    sectors: "Sectors",
    portfolio: "Our Portfolio",
    blog: "Blog & News",
    values: "Our Values",
    partners: "Partners",
    europe: "Europe on request",
    legal: "Legal Notice & T&C",
    privacy: "Privacy Policy",
    rights: "All rights reserved.",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const f = FOOTER[language];

  return (
    <footer className="bg-[#0e2f52] text-slate-300 border-t border-slate-800">
      <NewsletterSection />
      <div className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">

          {/* Colonne 1 : Marque */}
          <div className="md:col-span-2">
            <span className="text-3xl font-black text-white tracking-tight mb-6 block">
              ELLIPSYS <span className="text-brand-orange-500 text-sm font-bold uppercase tracking-widest">Solutions</span>
            </span>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 pr-4">{f.desc}</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange-500 shrink-0" />
                <span>{"Siège : 42, place de la Lucque, 30470 Aimargues"}<br />{"Bureaux : 159 Rue de Thor, 34000 Montpellier"}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange-500 shrink-0" />
                <span className="text-white font-bold">04 67 20 97 09</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange-500 shrink-0" />
                <a href="mailto:contact@ellipsys-group.com" className="hover:text-white transition-colors">contact@ellipsys-group.com</a>
              </li>
            </ul>
          </div>

          {/* Colonne 2 : Solutions */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{f.col2}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/prestations/nettoyage-solaire" className="hover:text-brand-orange-400 transition-colors">{f.solar}</Link></li>
              <li><Link href="/prestations/traitement-toiture" className="hover:text-brand-orange-400 transition-colors">{f.roof}</Link></li>
              <li><Link href="/prestations/nettoyage-facade" className="hover:text-brand-orange-400 transition-colors">{f.facade}</Link></li>
              <li><Link href="/prestations/thermographie" className="hover:text-brand-orange-400 transition-colors">{f.thermal}</Link></li>
              <li><Link href="/prestations/nuisibles" className="hover:text-brand-orange-400 transition-colors">{f.pests}</Link></li>
              <li><Link href="/prestations/prises-de-vues" className="hover:text-brand-orange-400 transition-colors">{f.aerial}</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Entreprise */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{f.col3}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/expertise" className="hover:text-brand-orange-400 transition-colors">{f.expertise}</Link></li>
              <li><Link href="/domaines" className="hover:text-brand-orange-400 transition-colors">{f.sectors}</Link></li>
              <li><Link href="/realisations" className="hover:text-brand-orange-400 transition-colors">{f.portfolio}</Link></li>
              <li><Link href="/blog" className="hover:text-brand-orange-400 transition-colors">{f.blog}</Link></li>
              <li><Link href="/valeurs" className="hover:text-brand-orange-400 transition-colors">{f.values}</Link></li>
              <li><Link href="/partenaires" className="hover:text-brand-orange-400 transition-colors">{f.partners}</Link></li>
            </ul>
          </div>

          {/* Colonne 4 : Déploiement */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{f.col4}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/intervention/montpellier" className="flex items-center gap-1 hover:text-brand-orange-400 transition-colors"><ChevronRight className="w-3 h-3" /> Montpellier</Link></li>
              <li><Link href="/intervention/nimes" className="flex items-center gap-1 hover:text-brand-orange-400 transition-colors"><ChevronRight className="w-3 h-3" /> Nîmes</Link></li>
              <li><Link href="/intervention/marseille" className="flex items-center gap-1 hover:text-brand-orange-400 transition-colors"><ChevronRight className="w-3 h-3" /> Marseille</Link></li>
              <li><Link href="/intervention/paris" className="flex items-center gap-1 hover:text-brand-orange-400 transition-colors"><ChevronRight className="w-3 h-3" /> Paris</Link></li>
              <li><Link href="/intervention/lyon" className="flex items-center gap-1 hover:text-brand-orange-400 transition-colors"><ChevronRight className="w-3 h-3" /> Lyon</Link></li>
              <li><Link href="/intervention/toulouse" className="flex items-center gap-1 hover:text-brand-orange-400 transition-colors"><ChevronRight className="w-3 h-3" /> Toulouse</Link></li>
              <li><span className="flex items-center gap-1 text-white font-bold mt-2"><ChevronRight className="w-3 h-3 text-brand-orange-500" /> {f.europe}</span></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Ellipsys Solutions. {f.rights}</p>
          <div className="flex gap-6">
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">{f.legal}</Link>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">{f.privacy}</Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
