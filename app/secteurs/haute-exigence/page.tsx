import type { Metadata } from "next";
import Link from "next/link";
import { TestTube, Plane } from "lucide-react";

export const metadata: Metadata = {
  title: "Nettoyage Secteurs Haute Exigence : Pharma, Agro, Aeronautique | Ellipsys",
  description: "Proprete exterieure repondant aux normes NF EN 1672-2. Nettoyage par drone pour l'industrie pharmaceutique, agroalimentaire et aeronautique.",
};

export default function HauteExigencePage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Thermographie.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-[#0e2f52]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 text-brand-orange-400 font-bold text-sm mb-6 uppercase tracking-wider">Expertise Sectorielle</div>
          <h1 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">Secteurs a <span className="text-brand-orange-500">Haute Exigence</span></h1>
          <p className="text-xl lg:text-2xl font-light text-slate-300 border-l-4 border-brand-orange-500 pl-4 mx-auto max-w-3xl">Des protocoles sur-mesure pour l&apos;Agroalimentaire, la Pharma et l&apos;Aeronautique.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="prose prose-lg text-slate-600 max-w-none">
              <p className="lead text-xl text-slate-900 font-semibold mb-8">Dans les environnements sensibles, la proprete exterieure est un standard d&apos;exigence incontournable pour eviter les contaminations croisees.</p>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><TestTube className="w-8 h-8 text-brand-orange-500" /> Pharma & Agroalimentaire</h2>
              <p>Nous imposons une maitrise stricte des risques de contamination. Nos interventions respectent les directives liees a la norme <strong>NF EN 1672-2</strong> en garantissant l&apos;hygiene et la nettoyabilite parfaite de vos infrastructures exterieures (silos, toitures, systemes de ventilation).</p>
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-3"><Plane className="w-8 h-8 text-brand-orange-500" /> Aeronautique</h2>
              <p>Nous garantissons un nettoyage de precision de vos infrastructures (batiments d&apos;assemblage, entrepots, hangars aeronautiques), repondant aux normes de proprete et de securite strictes (FOD - Foreign Object Debris) exigees par le secteur.</p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 sticky top-28">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Rigueur documentaire</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">Nous fournissons les Fiches de Donnees de Securite (FDS) de nos produits biocides ou utilisons de l&apos;eau pure osmosee pour respecter vos process qualite.</p>
              <Link href="/devis" className="block w-full text-center bg-[#0e2f52] text-white py-4 rounded-xl font-bold shadow-md hover:bg-slate-800 transition-colors">Planifier une intervention</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
