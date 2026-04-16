import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Shield, CheckCircle2, AlertCircle, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Entretien de Toitures : Démoussage et Protection Hydrofuge | Ellipsys",
  description: "Démoussage aérien Certibiocide et hydrofuge par drone ou perche télescopique. Sans échafaudage, conforme CARSAT et ABF. Intervention en toute sécurité sur toitures sensibles.",
};

const demoussageFeatures = [
  {
    title: "Traitement Certibiocide Homologué",
    desc: "Nos produits biocides sont agréés et appliqués par des opérateurs certifiés Certibiocide. Ils éliminent mousses, lichens et algues à la racine pour une efficacité durable.",
  },
  {
    title: "Zéro Pression, Zéro Dommage",
    desc: "Contrairement au karcher haute pression qui arrache les granulats et endommage l'étanchéité, notre méthode douce préserve l'intégrité de votre couverture.",
  },
  {
    title: "Compatibilité Monuments Historiques (ABF)",
    desc: "Notre approche sans contact mécanique agressif est validée pour les toitures classées ou situées en zone ABF (Architectes des Bâtiments de France).",
  },
  {
    title: "Sans Échafaudage, Sans Interruption",
    desc: "Le recours aux drones et aux perches télescopiques élimine le besoin d'échafaudage, préservant l'activité des occupants et réduisant les coûts d'intervention.",
  },
];

const hydrofugeFeatures = [
  {
    title: "Film Protecteur Invisible et Respirant",
    desc: "Le traitement hydrofuge crée une barrière imperméable à l'eau liquide tout en restant perméable à la vapeur d'eau, évitant les problèmes de condensation.",
  },
  {
    title: "Résistance aux UV et au Gel",
    desc: "Nos produits sont formulés pour résister aux cycles de gel-dégel et aux rayonnements UV, garantissant une protection longue durée (5 à 10 ans selon support).",
  },
  {
    title: "Application Aérienne Homogène",
    desc: "La pulvérisation par drone assure une couverture parfaitement uniforme, y compris sur les zones inaccessibles ou à forte inclinaison.",
  },
];

export default function TraitementToiturePage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Toiture.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e2f52] via-[#0e2f52]/85 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/20 border border-slate-400/50 text-slate-200 font-medium text-base mb-6">
              Toiture · Démoussage · Hydrofuge
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              Entretien de Toitures :{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-blue-300">
                Démoussage et Protection Hydrofuge
              </span>
            </h1>
            <p className="text-xl text-slate-300 font-semibold mb-4 italic">
              {"Protégez votre patrimoine sans mise en danger, sans échafaudage, sans interruption."}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/devis" className="px-8 py-4 bg-gradient-to-r from-slate-500 to-blue-700 text-white rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                Demander un diagnostic toiture <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DÉMOUSSAGE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Démoussage Aérien de Précision</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              La mousse et les lichens retiennent l&apos;humidité, accélèrent la dégradation des matériaux de couverture et peuvent obstruer vos évacuations. Notre traitement <strong>Certibiocide homologué</strong> éradique ces organismes à la source, appliqué par drone ou perche télescopique selon la configuration de votre toiture.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-5 mb-12">
            {demoussageFeatures.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HYDROFUGE */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Droplets className="w-10 h-10 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Protection Hydrofuge Longue Durée</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Après le démoussage, l&apos;application d&apos;un <strong>traitement hydrofuge pénétrant</strong> scelle les pores du matériau de couverture, repoussant l&apos;eau et prévenant le retour des organismes. Un investissement préventif qui repousse les rénovations lourdes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-5">
            {hydrofugeFeatures.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARSAT + ABF */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Conformité et Sécurité</h2>
          <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
            {"Nos interventions sont conçues pour satisfaire aux exigences réglementaires les plus strictes, que votre bâtiment soit industriel, résidentiel ou classé."}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <Shield className="w-8 h-8 text-[#0e2f52] mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Conformité CARSAT</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                En supprimant tout travail en hauteur pour le personnel d&apos;intervention, nous vous déchargez intégralement des obligations légales du donneur d&apos;ordre (Plan de Prévention, PPSPS) et des responsabilités civiles et pénales associées, en accord avec les directives de la CARSAT.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <Shield className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compatibilité ABF & Monuments</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nos méthodes sans pression mécanique forte et nos produits biocides homologués sont adaptés aux matériaux fragiles ou anciens. Nous intervenons sur des toitures en ardoise, tuiles canal, zinc et autres matériaux patrimoniaux, en coordination avec les exigences des Architectes des Bâtiments de France.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 p-5 bg-slate-100 rounded-xl border border-slate-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-500 leading-relaxed italic">
              <strong>Mentions légales :</strong> Les durées de protection mentionnées sont des estimations moyennes basées sur les conditions normales d&apos;utilisation. Les résultats réels dépendent du type de support, des conditions météorologiques locales et de l&apos;exposition. Ils ne constituent pas une garantie contractuelle absolue.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-slate-800 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Shield className="w-10 h-10 text-slate-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">Protégez votre toiture, préservez votre patrimoine</h2>
          <p className="text-slate-300 mb-10 text-lg">{"Un diagnostic gratuit pour évaluer l'état de votre couverture et les traitements adaptés."}</p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-slate-500 to-blue-700 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            Demander un diagnostic toiture <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
