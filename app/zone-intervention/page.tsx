import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Globe, ChevronRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos zones d'intervention | France entiere | Ellipsys",
  description: "Nos equipes techniques et unites mobiles couvrent la France entiere. Littoral, montagne, metropole industrielle — meme exigence de qualite partout.",
};

const regions = [
  { name: "Occitanie", desc: "Siege operationnel — interventions rapides", primary: true },
  { name: "Provence-Alpes-Cote d'Azur", desc: "Littoral mediterraneen & sites industriels", primary: true },
  { name: "Nouvelle-Aquitaine", desc: "Facade atlantique, zones viticoles", primary: false },
  { name: "Ile-de-France", desc: "Region parisienne, tertiaire & industrie", primary: false },
  { name: "Auvergne-Rhone-Alpes", desc: "Sites industriels & montagnards", primary: false },
  { name: "Hauts-de-France", desc: "Plateformes logistiques & industrie lourde", primary: false },
  { name: "Grand Est", desc: "Sites industriels & energetiques", primary: false },
  { name: "Autres regions", desc: "Intervention sur devis — tout le territoire", primary: false },
];

const engagements = [
  "Intervention dans les 48h pour les urgences (frelons)",
  "Deploiement planifie sous 1 a 2 semaines pour les chantiers",
  "Unites mobiles equipees, sans dependance logistique locale",
  "Meme protocole qualite quel que soit l'emplacement",
];

const environnements = [
  {
    emoji: "🌊",
    title: "Environnement littoral",
    desc: "Vents forts, embruns salins, corrosion acceleree. Nos drones resistent aux conditions meteo difficiles. Protocoles de dessalage specifiques.",
  },
  {
    emoji: "🏔️",
    title: "Zone de montagne",
    desc: "Accessibilite reduite, enneigement, gel. Nos unites mobiles atteignent des sites isoles. Calendrier d'intervention adapte aux saisons.",
  },
  {
    emoji: "🏭",
    title: "Metropole industrielle",
    desc: "Contraintes de securite, plans de prevention, acces reglements. Expertise en zones ATEX et sites occupes.",
  },
];

export default function ZoneInterventionPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Secteur.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-[#0e2f52]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Globe className="w-12 h-12 text-brand-orange-400 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
            Nos zones d&apos;<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-red-400">intervention</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            {"Nos equipes techniques et nos unites mobiles sont strategiquement reparties pour vous garantir une couverture d'intervention homogene et rapide sur l'ensemble du territoire national."}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Partout en France, meme exigence</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {"Que votre site se trouve sur un littoral venteux, en zone de montagne ou au coeur d'une metropole industrielle, nous garantissons la meme exigence de qualite."}
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                {"Nos unites mobiles permettent de deployer rapidement les equipements necessaires, sans surcout disproportionne lie a l'eloignement pour les chantiers d'envergure."}
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
                <h3 className="text-xl font-bold text-slate-900">Couverture regionale</h3>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Tous les environnements</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{"Nos equipements s'adaptent a toutes les configurations geographiques et climatiques."}</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">{"Votre site est-il dans notre zone ?"}</h2>
          <p className="text-slate-300 mb-10 text-lg">La reponse est presque toujours oui. Partagez-nous l&apos;adresse et nous vous confirmons la faisabilite.</p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            Verifier la disponibilite <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
