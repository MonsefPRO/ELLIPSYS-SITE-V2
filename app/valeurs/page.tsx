import type { Metadata } from "next";
import { ShieldAlert, Target, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos valeurs : Securite, Rigueur, Bienveillance | Ellipsys",
  description: "Decouvrez les engagements d'Ellipsys Solutions : securite absolue, rigueur d'ingenierie et bienveillance environnementale dans nos interventions par drone.",
};

export default function ValeursPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Secteur.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-[#0e2f52]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
            Nos engagements : <span className="text-brand-orange-500">Securite, Rigueur, Bienveillance</span>
          </h1>
          <p className="text-xl text-slate-300 mb-0 leading-relaxed max-w-3xl mx-auto font-light">
            {"L'ADN d'Ellipsys Solutions repose sur trois piliers fondamentaux qui guident chacune de nos interventions techniques."}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center shrink-0">
              <ShieldAlert className="w-8 h-8 text-red-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">SECURITE (Zero risque de chute)</h2>
              <h3 className="text-brand-orange-500 font-bold mb-4">Une priorite de chaque instant. Pour nos equipes, pour votre site et pour le public.</h3>
              <p className="text-slate-600 leading-relaxed">
                Les etudes de la CARSAT demontrent que pres de la moitie des accidents graves dans le batiment surviennent lors d&apos;interventions courtes en hauteur. En substituant le travail en toiture par nos technologies robotiques et aeriennes (pilotees depuis le sol), nous supprimons integralement ce risque. Nous appliquons strictement les principes generaux de prevention de l&apos;INRS et de la FFB.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">RIGUEUR</h2>
              <h3 className="text-brand-orange-500 font-bold mb-4">{"Cette valeur fondamentale s'applique a l'ensemble de la societe et a chacun de nos collaborateurs."}</h3>
              <p className="text-slate-600 leading-relaxed">
                {"Depuis notre premiere prise de contact jusqu'a la conclusion et la documentation de votre chantier, cette exigence globale se traduit par une evaluation precise de vos besoins, l'application de protocoles stricts (declaration prefectorale, etablissement d'un perimetre d'exclusion des tiers au sol), et une execution milimetree garantissant une efficacite optimale tout en preservant l'integrite de votre bati."}
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
              <HeartHandshake className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">BIENVEILLANCE</h2>
              <h3 className="text-brand-orange-500 font-bold mb-4">{"Une demarche de Responsabilite Societale des Entreprises (RSE)."}</h3>
              <p className="text-slate-600 leading-relaxed">
                {"Ellipsys Solutions s'engage dans une demarche RSE fondee sur les 16 principes-cadres des Nations Unies. Nous appliquons au quotidien notre charte ethique : protection de l'environnement (produits biodegradables, eau osmosee), garantie d'un cadre de travail sain, et prevention de toute forme de corruption (loi Sapin 2) dans nos relations professionnelles."}
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
