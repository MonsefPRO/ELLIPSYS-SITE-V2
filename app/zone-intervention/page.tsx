import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Globe, ChevronRight, CheckCircle2 } from "lucide-react";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Service Areas | All of France | Ellipsys",
  description: "Our technical teams and mobile units cover the whole of France. Coastline, mountains, industrial cities — the same quality standards everywhere.",
};

export default async function ZoneInterventionPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const regions = isEn
    ? [
        { name: "Occitanie", desc: "Operational HQ — rapid interventions", primary: true },
        { name: "Provence-Alpes-Côte d'Azur", desc: "Mediterranean coast & industrial sites", primary: true },
        { name: "Nouvelle-Aquitaine", desc: "Atlantic coast, wine-growing areas", primary: false },
        { name: "Île-de-France", desc: "Greater Paris, tertiary & industry", primary: false },
        { name: "Auvergne-Rhône-Alpes", desc: "Industrial & mountain sites", primary: false },
        { name: "Hauts-de-France", desc: "Logistics platforms & heavy industry", primary: false },
        { name: "Grand Est", desc: "Industrial & energy sites", primary: false },
        { name: "Other regions", desc: "Nationwide — quote on request", primary: false },
      ]
    : [
        { name: "Occitanie", desc: "Siège opérationnel — interventions rapides", primary: true },
        { name: "Provence-Alpes-Côte d'Azur", desc: "Littoral méditerranéen & sites industriels", primary: true },
        { name: "Nouvelle-Aquitaine", desc: "Façade atlantique, zones viticoles", primary: false },
        { name: "Ile-de-France", desc: "Region parisienne, tertiaire & industrie", primary: false },
        { name: "Auvergne-Rhone-Alpes", desc: "Sites industriels & montagnards", primary: false },
        { name: "Hauts-de-France", desc: "Plateformes logistiques & industrie lourde", primary: false },
        { name: "Grand Est", desc: "Sites industriels & énergétiques", primary: false },
        { name: "Autres régions", desc: "Intervention sur devis — tout le territoire", primary: false },
      ];

  const engagements = isEn
    ? [
        <><strong>Intervention within 48h</strong> for emergencies (hornets)</>,
        "Planned deployment within 1 to 2 weeks for projects",
        "Self-sufficient mobile units, no local logistic dependency",
        "Same quality protocol regardless of location",
      ]
    : [
        <><strong>Intervention dans les 48h</strong> pour les urgences (frelons)</>,
        "Déploiement planifié sous 1 à 2 semaines pour les chantiers",
        "Unités mobiles équipées, sans dépendance logistique locale",
        "Même protocole qualité quel que soit l'emplacement",
      ];

  const environnements = isEn
    ? [
        { emoji: "🌊", title: "Coastal Environments", desc: <>Strong winds, salt spray, accelerated corrosion. Our drones withstand harsh weather conditions. Specific <strong>desalination protocols</strong> applied.</> },
        { emoji: "🏔️", title: "Mountain Areas", desc: "Restricted access, snowfall, frost. Our mobile units reach isolated sites. Intervention schedule adapted to seasonal conditions." },
        { emoji: "🏭", title: "Industrial Cities", desc: <>Safety constraints, prevention plans, regulated access. <strong>ATEX zone expertise</strong> and occupied site experience.</> },
      ]
    : [
        { emoji: "🌊", title: "Environnement littoral", desc: <>Vents forts, embruns salins, corrosion accélérée. Nos drones résistent aux conditions météo difficiles. <strong>Protocoles de dessalage</strong> spécifiques.</> },
        { emoji: "🏔️", title: "Zone de montagne", desc: "Accessibilité réduite, enneigement, gel. Nos unités mobiles atteignent des sites isolés. Calendrier d'intervention adapté aux saisons." },
        { emoji: "🏭", title: "Metropole industrielle", desc: <>Contraintes de sécurité, plans de prévention, accès réglementés. <strong>Expertise en zones ATEX</strong> et sites occupés.</> },
      ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Secteur.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-[#0e2f52]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Globe className="w-12 h-12 text-brand-orange-400 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
            {isEn ? "Our Service" : "Nos zones d'"}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-red-400">{isEn ? "Areas" : "intervention"}</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            {isEn
              ? "Our technical teams and mobile units are strategically positioned to guarantee consistent, rapid coverage across the entire national territory."
              : "Nos équipes techniques et nos unités mobiles sont stratégiquement réparties pour vous garantir une couverture d'intervention homogène et rapide sur l'ensemble du territoire national."}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {isEn ? "Across France, the same standards" : "Partout en France, même exigence"}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {isEn
                  ? <>Whether your site is on a windy coastline, in a mountain area or at the heart of an industrial city, we guarantee the same <strong>quality standards</strong>.</>
                  : <>Que votre site se trouve sur un littoral venteux, en zone de montagne ou au cœur d&apos;une métropole industrielle, nous garantissons la même <strong>exigence de qualité</strong>.</>}
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                {isEn
                  ? <>Our <strong>mobile units</strong> allow rapid deployment of all necessary equipment, without disproportionate costs linked to distance for large-scale projects.</>
                  : <>Nos <strong>unités mobiles</strong> permettent de déployer rapidement les équipements nécessaires, sans surcoût disproportionné lié à l&apos;éloignement pour les chantiers d&apos;envergure.</>}
              </p>
              <div className="space-y-3">
                {engagements.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-brand-orange-500" />
                <h3 className="text-xl font-bold text-slate-900">{isEn ? "Regional Coverage" : "Couverture régionale"}</h3>
              </div>
              <div className="space-y-2">
                {regions.map((region, i) => (
                  <div key={i} className={`flex items-center justify-between p-3 rounded-xl border text-sm transition-colors ${region.primary ? "bg-brand-orange-50 border-brand-orange-200 shadow-sm" : "bg-white border-slate-100"}`}>
                    <div className="flex items-center gap-2">
                      <MapPin className={`w-4 h-4 ${region.primary ? "text-brand-orange-500" : "text-slate-400"}`} />
                      <span className={`font-medium ${region.primary ? "text-slate-900" : "text-slate-700"}`}>{region.name}</span>
                    </div>
                    <span className={`text-xs ${region.primary ? "text-brand-orange-600" : "text-slate-400"}`}>{region.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{isEn ? "All Environments" : "Tous les environnements"}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {isEn
                ? "Our equipment adapts to all geographical and climatic configurations."
                : "Nos équipements s'adaptent à toutes les configurations géographiques et climatiques."}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {environnements.map((env, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center hover:bg-white hover:shadow-md transition-all">
                <span className="text-4xl mb-4 block">{env.emoji}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{env.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{env.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0e2f52] via-[#1a3d65] to-[#0e2f52] text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isEn ? "Is your site within our area?" : "Votre site est-il dans notre zone ?"}
          </h2>
          <p className="text-slate-300 mb-10 text-lg">
            {isEn
              ? "The answer is almost always yes. Share the address and we will confirm feasibility."
              : "La réponse est presque toujours oui. Partagez-nous l'adresse et nous vous confirmons la faisabilité."}
          </p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            {isEn ? "Check Availability" : "Vérifier la disponibilité"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
