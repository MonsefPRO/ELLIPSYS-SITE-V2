import type { Metadata } from "next";
import Link from "next/link";
import { TestTube, Plane, ShieldCheck, FileText, ChevronRight } from "lucide-react";
import ExpertQuoteSide from "@/components/ExpertQuoteSide";
import AccordionSection from "@/components/AccordionSection";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Nettoyage Secteurs Haute Exigence : Pharma, Agro, Aeronautique | Ellipsys",
  description: "Proprete exterieure repondant aux normes NF EN 1672-2. Nettoyage par drone pour l'industrie pharmaceutique, agroalimentaire et aeronautique.",
};

const IMG = {
  intro:    `/images/hauteexegenceB1.png`,
  facility: `/images/hauteexib2.png`,
};

export default async function HauteExigencePage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const stats = [
    { value: "NF EN 1672-2", label: isEn ? "Applicable standard Pharma / Food" : "Norme applicable Pharma / Agroalimentaire" },
    { value: "FOD",           label: isEn ? "Aeronautics cleanliness standard" : "Standard de propreté Aéronautique" },
    { value: "0 kg",          label: isEn ? "Pressure on your fragile structures" : "Pression sur vos structures fragiles" },
    { value: "SDS",           label: isEn ? "Safety Data Sheet provided" : "Fiche de Données de Sécurité fournie" },
  ];

  const features = [
    {
      icon: TestTube, color: "text-blue-500", bg: "bg-blue-50",
      title: isEn ? "Pharma & Food Industry" : "Pharma & Agroalimentaire",
      desc: isEn ? "Our interventions comply with the directives linked to the NF EN 1672-2 standard by guaranteeing the hygiene and perfect cleanability of your external infrastructure (silos, roofs, ventilation systems)." : "Nos interventions respectent les directives liées à la norme NF EN 1672-2 en garantissant l'hygiène et la nettoyabilité parfaite de vos infrastructures extérieures (silos, toitures, systèmes de ventilation).",
    },
    {
      icon: Plane, color: "text-slate-600", bg: "bg-slate-100",
      title: isEn ? "Aeronautics" : "Aéronautique",
      desc: isEn ? "We guarantee precision cleaning of your infrastructure (assembly buildings, warehouses, aeronautical hangars), meeting the strict FOD — Foreign Object Debris standards required by the sector." : "Nous garantissons un nettoyage de précision de vos infrastructures (bâtiments d'assemblage, entrepôts, hangars aéronautiques), répondant aux normes FOD - Foreign Object Debris exigées par le secteur.",
    },
    {
      icon: FileText, color: "text-emerald-600", bg: "bg-emerald-50",
      title: isEn ? "Documentary rigour" : "Rigueur Documentaire",
      desc: isEn ? "We provide Safety Data Sheets (SDS) for our biocide products or use pure osmosed water to comply with your quality processes." : "Nous fournissons les Fiches de Données de Sécurité (FDS) de nos produits biocides ou utilisons de l'eau pure osmosée pour respecter vos process qualité.",
    },
    {
      icon: ShieldCheck, color: "text-brand-orange-500", bg: "bg-brand-orange-50",
      title: isEn ? "Zero Cross-Contamination" : "Aucune Contamination Croisée",
      desc: isEn ? "All our protocols are designed to operate without introducing foreign objects into your sensitive production zones. Our teams are trained in access procedures for regulated sites." : "L'ensemble de nos protocoles est conçu pour opérer sans introduire de corps étrangers dans vos zones de production sensibles. Nos équipes sont formées aux procédures d'accès aux sites réglementés.",
    },
  ];

  const avantages = [
    {
      title: isEn ? "Strict contamination risk control (NF EN 1672-2)" : "Maîtrise stricte des risques de contamination (NF EN 1672-2)",
      desc: isEn ? "We enforce strict contamination risk control. Our interventions comply with the directives linked to the NF EN 1672-2 standard by guaranteeing the hygiene and perfect cleanability of your external infrastructure (silos, roofs, ventilation systems)." : "Nous imposons une maitrise stricte des risques de contamination. Nos interventions respectent les directives liees a la norme NF EN 1672-2 en garantissant l'hygiene et la nettoyabilite parfaite de vos infrastructures exterieures (silos, toitures, systemes de ventilation).",
    },
    {
      title: isEn ? "FOD compliance for Aeronautics" : "Conformité FOD pour l'Aéronautique",
      desc: isEn ? "We guarantee precision cleaning of your infrastructure (assembly buildings, warehouses, aeronautical hangars), meeting the strict cleanliness and safety standards (FOD — Foreign Object Debris) required by the sector." : "Nous garantissons un nettoyage de precision de vos infrastructures (batiments d'assemblage, entrepots, hangars aeronautiques), repondant aux normes de proprete et de securite strictes (FOD - Foreign Object Debris) exigees par le secteur.",
    },
    {
      title: isEn ? "Safety Data Sheet provided after each intervention" : "Fiche de Données de Sécurité fournie à l'issue de chaque intervention",
      desc: isEn ? "We provide Safety Data Sheets (SDS) for our biocide products or use pure osmosed water to comply with your quality processes. Complete documentation is delivered immediately after each intervention." : "Nous fournissons les Fiches de Donnees de Securite (FDS) de nos produits biocides ou utilisons de l'eau pure osmosee pour respecter vos process qualite. La documentation complète est remise immédiatement après chaque intervention.",
    },
    {
      title: isEn ? "No ground footprint — guaranteed continuity of your operations" : "Aucune emprise au sol — continuité de vos activités garantie",
      desc: isEn ? "Our aerial drone approach eliminates the need for ground marking, cherry pickers or scaffolding, allowing logistics flows and site access to be maintained throughout the works." : "Notre approche aérienne par drone élimine le besoin de balisage au sol, de nacelles ou d'échafaudages, permettant de maintenir les flux logistiques et les accès de votre site pendant toute la durée des travaux.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      {/* BANNIÈRE */}
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-cover bg-center" style={{ backgroundImage: `url('/images/hauteexiban.png')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/50 text-brand-orange-400 font-medium text-base mb-6">
              {isEn ? "Pharma · Food Industry · Aeronautics" : "Pharma · Agroalimentaire · Aeronautique"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "High-Demand" : "Secteurs a"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-amber-400">
                {isEn ? "Sectors" : "Haute Exigence"}
              </span>
            </h1>
            <p className="text-xl text-brand-orange-300 font-semibold mb-4 italic">
              {isEn ? "Bespoke protocols for Food Industry, Pharma and Aeronautics." : "Des protocoles sur-mesure pour l'Agroalimentaire, la Pharma et l'Aeronautique."}
            </p>
          </div>
        </div>
      </section>

      <ExpertQuoteSide quote={isEn ? "In sensitive environments, exterior cleanliness is not optional — it is an unavoidable regulatory standard. Our products and protocols are selected to meet the strictest standards of the sector." : "Dans les environnements sensibles, la proprete exterieure n'est pas une option — c'est un standard reglementaire incontournable. Nos produits et protocoles sont selectionnes pour repondre aux normes les plus strictes du secteur."} />

      {/* SECTION 1 : INTRO IMAGE SPLIT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[440px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.intro}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-xs font-bold backdrop-blur-sm">
                  NF EN 1672-2 · FOD Standard
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white text-xs font-semibold">{isEn ? "High-demand industrial environment — protocols compliant with sector standards" : "Environnement industriel à haute exigence — protocoles conformes aux normes sectorielles"}</p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange-100 text-brand-orange-700 text-xs font-black uppercase tracking-widest mb-5">
                <TestTube className="w-3.5 h-3.5" /> {isEn ? "Regulatory cleanliness" : "Propreté réglementaire"}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {isEn ? "In sensitive environments, exterior cleanliness is an unavoidable standard to prevent cross-contamination." : "Dans les environnements sensibles, la proprete exterieure est un standard d'exigence incontournable pour eviter les contaminations croisees."}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isEn
                  ? <>We enforce strict <strong>cross-contamination</strong> risk control. Our interventions comply with the directives linked to the <strong>NF EN 1672-2</strong> standard by guaranteeing the hygiene and perfect cleanability of your external infrastructure (silos, roofs, ventilation systems).</>
                  : <>Nous imposons une maîtrise stricte des risques de <strong>contamination croisée</strong>. Nos interventions respectent les directives liées à la norme <strong>NF EN 1672-2</strong> en garantissant l&apos;hygiène et la nettoyabilité parfaite de vos infrastructures extérieures (silos, toitures, systèmes de ventilation).</>}
              </p>
              <div className="bg-[#0e2f52]/5 border border-[#0e2f52]/20 rounded-2xl p-5 flex items-start gap-4">
                <span className="text-brand-orange-500 text-4xl font-bold leading-none -mt-1 select-none shrink-0">&ldquo;</span>
                <div>
                  <p className="text-xs font-black text-brand-orange-500 uppercase tracking-widest mb-2">{isEn ? "Expert Opinion" : "Avis Expert"}</p>
                  <p className="text-slate-700 text-sm leading-relaxed italic">{isEn ? "In sensitive environments, exterior cleanliness is not optional — it is an unavoidable regulatory standard. Our products and protocols are selected to meet the strictest standards of the sector." : "Dans les environnements sensibles, la proprete exterieure n'est pas une option — c'est un standard reglementaire incontournable. Nos produits et protocoles sont selectionnes pour repondre aux normes les plus strictes du secteur."}</p>
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

      {/* SECTION 2 : PROTOCOLES PAR SECTEUR */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{isEn ? "Protocols tailored to each sector" : "Protocoles adaptés à chaque secteur"}</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">{isEn ? "A bespoke approach to meet the regulatory requirements of each industry." : "Une approche sur-mesure pour répondre aux exigences réglementaires de chaque industrie."}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
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

          {/* Aero section complémentaire avec image */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mt-4">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-64">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.facility}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-white text-xs font-semibold">{isEn ? "High-demand industrial site — maintenance compliant with sector standards" : "Site industriel à haute exigence — entretien conforme aux normes sectorielles"}</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <Plane className="w-6 h-6 text-brand-orange-500" /> {isEn ? "Aeronautics" : "Aeronautique"}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {isEn
                  ? <>We guarantee precision cleaning of your infrastructure (assembly buildings, warehouses, aeronautical hangars), meeting the strict cleanliness and safety standards (<strong>FOD</strong> - Foreign Object Debris) required by the sector.</>
                  : <>Nous garantissons un nettoyage de précision de vos infrastructures (bâtiments d&apos;assemblage, entrepôts, hangars aéronautiques), répondant aux normes de propreté et de sécurité strictes (<strong>FOD</strong> - Foreign Object Debris) exigées par le secteur.</>}
              </p>
              <div className="p-4 bg-slate-800 rounded-2xl">
                <p className="text-xs text-slate-300 leading-relaxed italic font-medium">{isEn ? <>Documentary rigour: We provide Safety Data Sheets (<strong>SDS</strong>) for our biocide products or use <strong>pure osmosed water</strong> to comply with your quality processes.</> : <>Rigueur documentaire : Nous fournissons les Fiches de Données de Sécurité (<strong>FDS</strong>) de nos produits biocides ou utilisons de l&apos;<strong>eau pure osmosée</strong> pour respecter vos process qualité.</>}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDÉON */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            {isEn ? "Why Ellipsys for your regulated sites?" : "Pourquoi Ellipsys pour vos sites réglementés ?"}
          </h2>
          <AccordionSection items={avantages} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-slate-900 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <TestTube className="w-10 h-10 text-brand-orange-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">{isEn ? "Schedule an intervention on your site" : "Planifier une intervention sur votre site"}</h2>
          <p className="text-slate-300 mb-10 text-lg">
            {isEn ? "We provide SDS for our biocide products or use pure osmosed water to comply with your quality processes." : "Nous fournissons les FDS de nos produits biocides ou utilisons de l'eau pure osmosee pour respecter vos process qualite."}
          </p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            {isEn ? "Schedule an intervention" : "Planifier une intervention"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
