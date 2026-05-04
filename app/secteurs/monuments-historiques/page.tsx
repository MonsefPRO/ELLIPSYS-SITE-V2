import type { Metadata } from "next";
import Link from "next/link";
import { Landmark, Scale, ShieldCheck, FileText, ChevronRight } from "lucide-react";
import ExpertQuoteSide from "@/components/ExpertQuoteSide";
import AccordionSection from "@/components/AccordionSection";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Entretien Monuments Historiques et Bâtiments Classés par Drone | Ellipsys",
  description: "Méthodes douces conformes ABF pour monuments historiques et bâtiments classés. Respect de l'article L.621-31 du Code du patrimoine. Étude de faisabilité gratuite.",
};

const IMG = {
  intro:  `/images/histob1.png`,
  detail: `/images/legalbloc.png`,
};

export default async function MonumentsPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const stats = [
    { value: "ABF",      label: isEn ? "Compliance — Architects of Buildings of France" : "Conformité Architectes des Bâtiments de France" },
    { value: "0",        label: isEn ? "Mechanical contact on materials" : "Contact mécanique sur les matériaux" },
    { value: "< 15 bars", label: isEn ? "Maximum pressure in conservation mode" : "Pression maximale en mode conservation" },
    { value: "L.621-31", label: isEn ? "Compliance — Heritage Code" : "Conformité Code du Patrimoine" },
  ];

  const features = [
    {
      icon: Landmark, color: "text-brand-orange-500", bg: "bg-brand-orange-50",
      title: isEn ? "No strong mechanical pressure" : "Aucune pression mécanique forte",
      desc: isEn ? "Gentle misting that preserves the integrity of ancient materials. Our fine nebulisation approach respects the crystalline structure of century-old materials." : "Pulvérisation douce préservant l'intégrité des matériaux anciens. Notre approche par nébulisation fine respecte la structure cristalline des matériaux centenaires.",
    },
    {
      icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50",
      title: isEn ? "ABF-approved products" : "Produits homologués ABF",
      desc: isEn ? "Neutral fungicidal agents compatible with heritage conservation prescriptions. All our products are selected for their compatibility with ABF requirements." : "Agents fongicides neutres compatibles avec les prescriptions patrimoniales. Tous nos produits sont sélectionnés pour leur compatibilité avec les exigences ABF.",
    },
    {
      icon: Scale, color: "text-blue-500", bg: "bg-blue-50",
      title: isEn ? "Preliminary diagnosis" : "Diagnostic préalable",
      desc: isEn ? "Fragility and porosity analysis before any intervention. Each monument is unique — our free preliminary study assesses technical constraints." : "Analyse de fragilite et de porosite avant toute intervention. Chaque monument est unique — notre étude préalable gratuite évalue les contraintes techniques.",
    },
    {
      icon: FileText, color: "text-purple-600", bg: "bg-purple-50",
      title: isEn ? "Monitoring dossier" : "Dossier de suivi",
      desc: isEn ? "Complete documentation for your heritage dossier. We support you through administrative procedures in accordance with Article L.621-31." : "Documentation complète pour votre dossier patrimonial. Nous vous accompagnons dans les démarches administratives conformément à l'article L.621-31.",
    },
  ];

  const avantages = [
    {
      title: isEn ? "No mechanical pressure — preservation of ancient materials" : "Aucune pression mécanique — préservation des matériaux anciens",
      desc: isEn ? "Listed or registered Historic Monument buildings require a radically different approach. Our drones and very low-pressure spray methods allow cleaning of ashlar, traditional renders, slate or lauze roofing without any aggressive mechanical contact." : "Les édifices classés ou inscrits au titre des Monuments Historiques exigent une approche radicalement différente. Nos drones et méthodes de pulvérisation à très basse pression permettent de nettoyer pierre de taille, enduits traditionnels, toitures en ardoise ou lauze sans aucun contact mécanique agressif.",
    },
    {
      title: isEn ? "ABF-approved products — guaranteed compliance" : "Produits homologués ABF — conformité garantie",
      desc: isEn ? "Neutral fungicidal agents compatible with heritage conservation prescriptions. All our products are selected for their compatibility with the requirements of the Architects of Buildings of France, guaranteeing the legality and reversibility of each intervention." : "Agents fongicides neutres compatibles avec les prescriptions patrimoniales. Tous nos produits sont sélectionnés pour leur compatibilité avec les exigences des Architectes des Bâtiments de France, garantissant la légalité et la réversibilité de chaque intervention.",
    },
    {
      title: isEn ? "Free preliminary diagnosis — fragility and porosity analysis" : "Diagnostic préalable gratuit — analyse de fragilité et porosité",
      desc: isEn ? "Each monument is unique. We carry out a free feasibility study to assess the technical and regulatory constraints and the methods best suited to your building before any intervention." : "Chaque monument est unique. Nous réalisons une étude de faisabilité gratuite pour évaluer les contraintes techniques, réglementaires et les méthodes adaptées à votre édifice avant toute intervention.",
    },
    {
      title: isEn ? "Complete monitoring dossier — compliance with Article L.621-31" : "Dossier de suivi complet — conformité article L.621-31",
      desc: isEn ? "Our intervention protocols are designed to strictly comply with the prescriptions of the Architects of Buildings of France (ABF). We support you through the administrative procedures (prior declaration, specific authorisations) in accordance with Article L.621-31 of the Heritage Code." : "Nos protocoles d'intervention sont conçus pour respecter scrupuleusement les prescriptions des Architectes des Bâtiments de France (ABF). Nous vous accompagnons dans les démarches administratives (déclaration préalable, autorisations spécifiques) conformément à l'article L.621-31 du Code du patrimoine.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      {/* BANNIÈRE */}
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-[url('/images/secteur-monuments.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/50 text-brand-orange-400 font-medium text-base mb-6">
              {isEn ? "Heritage · ABF · Listed Buildings" : "Patrimoine · ABF · Bâtiments Classés"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Historic Monuments and" : "Monuments Historiques et"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-amber-400">
                {isEn ? "Listed Buildings" : "Bâtiments Classés"}
              </span>
            </h1>
            <p className="text-xl text-brand-orange-300 font-semibold mb-4 italic">
              {isEn ? "Preserving heritage with methods adapted to the most fragile materials." : "Préserver le patrimoine avec des méthodes adaptées aux matériaux les plus fragiles."}
            </p>
          </div>
        </div>
      </section>

      <ExpertQuoteSide quote={isEn ? "The drone is a revolution for heritage buildings: millimetric precision, no mechanical contact, no scaffolding, no risk of alteration to century-old materials. We intervene where no one else can." : "Le drone est une révolution pour le patrimoine : une précision millimétrique, sans contact mécanique, sans échafaudage, sans risque d'altération pour les matériaux centenaires. Nous intervenons là où personne d'autre ne peut le faire."} />

      {/* SECTION 1 : INTRO IMAGE SPLIT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[440px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.intro}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-bold backdrop-blur-sm">
                  {isEn ? "Listed heritage · ABF · L.621-31" : "Patrimoine classé · ABF · L.621-31"}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white text-xs font-semibold">{isEn ? "Historic monument — drone intervention with no mechanical contact on materials" : "Monument historique — intervention drone sans contact mécanique sur les matériaux"}</p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange-100 text-brand-orange-700 text-xs font-black uppercase tracking-widest mb-5">
                <Landmark className="w-3.5 h-3.5" /> {isEn ? "Respect for fragile materials" : "Respect des matériaux fragiles"}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {isEn ? "Respect for Fragile Materials" : "Respect des matériaux fragiles"}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isEn
                  ? <>Listed or registered Historic Monument buildings require a radically different approach. Our drones and very low-pressure spray methods allow cleaning of ashlar, traditional renders, slate or lauze roofing <strong>without any aggressive mechanical contact</strong>.</>
                  : <>Les édifices classés ou inscrits au titre des Monuments Historiques exigent une approche radicalement différente. Nos drones et méthodes de pulvérisation à très basse pression permettent de nettoyer pierre de taille, enduits traditionnels, toitures en ardoise ou lauze <strong>sans aucun contact mécanique</strong> agressif.</>}
              </p>
              <div className="bg-[#0e2f52]/5 border border-[#0e2f52]/20 rounded-2xl p-5 flex items-start gap-4">
                <span className="text-brand-orange-500 text-4xl font-bold leading-none -mt-1 select-none shrink-0">&ldquo;</span>
                <div>
                  <p className="text-xs font-black text-brand-orange-500 uppercase tracking-widest mb-2">{isEn ? "Expert Opinion" : "Avis Expert"}</p>
                  <p className="text-slate-700 text-sm leading-relaxed italic">{isEn ? "The drone is a revolution for heritage buildings: millimetric precision, no mechanical contact, no scaffolding, no risk of alteration to century-old materials. We intervene where no one else can." : "Le drone est une révolution pour le patrimoine : une précision millimétrique, sans contact mécanique, sans échafaudage, sans risque d'altération pour les matériaux centenaires. Nous intervenons là où personne d'autre ne peut le faire."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BARRE DE STATS */}
      <section className="py-10 bg-[#0e2f52]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="border-r border-white/10 last:border-0 px-4">
                <p className="text-3xl font-black text-brand-orange-400 mb-1">{s.value}</p>
                <p className="text-slate-300 text-xs leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 : ENGAGEMENT PATRIMONIAL */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{isEn ? "Our heritage commitment:" : "Notre engagement patrimonial :"}</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">{isEn ? "Methods designed to preserve the authenticity of every stone, render, and ornament." : "Des méthodes pensées pour préserver l'authenticité de chaque pierre, chaque enduit, chaque ornement."}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-3xl p-7 border border-slate-100 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${f.bg} rounded-2xl flex items-center justify-center mb-5`}>
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="font-black text-slate-900 text-base mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* ABF section avec image */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-64">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.detail}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-white text-xs font-semibold">{isEn ? "Architectural heritage — low-pressure treatment preserving material integrity" : "Patrimoine architectural — traitement basse pression préservant l'intégrité des matériaux"}</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <Scale className="w-6 h-6 text-brand-orange-500" /> {isEn ? "ABF legal framework & Article L.621-31" : "Cadre légal ABF & article L.621-31"}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {isEn
                  ? <>Our intervention protocols are designed to strictly comply with the prescriptions of the Architects of Buildings of France (<strong>ABF</strong>). We support you through the administrative procedures (prior declaration, specific authorisations) in accordance with Article <strong>L.621-31</strong> of the Heritage Code.</>
                  : <>Nos protocoles d&apos;intervention sont conçus pour respecter scrupuleusement les prescriptions des Architectes des Bâtiments de France (<strong>ABF</strong>). Nous vous accompagnons dans les démarches administratives (déclaration préalable, autorisations spécifiques) conformément à l&apos;article <strong>L.621-31</strong> du Code du patrimoine.</>}
              </p>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl">
                <p className="text-amber-800 text-sm font-semibold"><strong>{isEn ? "Free feasibility study:" : "Étude de faisabilité gratuite :"}</strong> {isEn ? "Each monument is unique. We carry out a free feasibility study to assess the technical and regulatory constraints and the methods best suited to your building." : "Chaque monument est unique. Nous réalisons une étude de faisabilité gratuite pour évaluer les contraintes techniques, réglementaires et les méthodes adaptées à votre édifice."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDÉON */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            {isEn ? "Why Ellipsys for your heritage building?" : "Pourquoi Ellipsys pour votre patrimoine ?"}
          </h2>
          <AccordionSection items={avantages} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-slate-900 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Landmark className="w-10 h-10 text-brand-orange-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">{isEn ? "Free feasibility study" : "Étude de faisabilité gratuite"}</h2>
          <p className="text-slate-300 mb-10 text-lg">
            {isEn ? "Each monument is unique. We freely assess the technical and regulatory constraints of your building." : "Chaque monument est unique. Nous évaluons gratuitement les contraintes techniques et réglementaires de votre édifice."}
          </p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            {isEn ? "Free feasibility study" : "Étude de faisabilité gratuite"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
