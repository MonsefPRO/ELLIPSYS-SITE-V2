import type { Metadata } from "next";
import Link from "next/link";
import { Sun, Building2, MapPin, Clock, Target, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio de nos interventions par drone : Avant / Apres | Ellipsys",
  description: "Decouvrez nos derniers chantiers en images. Des resultats concrets avant/apres pour resoudre les problematiques d'acces complexes.",
};

export default function RealisationsPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">
      <section className="relative bg-slate-900 text-white py-20 lg:py-24 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/hero%20realisations.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-[#0e2f52]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            Nos Realisations : <span className="text-brand-orange-500">Le Resultat Avant Tout</span>
          </h1>
          <p className="text-xl text-slate-300 font-light border-l-4 border-brand-orange-500 pl-4 mx-auto max-w-3xl">
            La preuve de notre ingenierie par l&apos;image.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-24">

          {/* CHANTIER 1 : SOLAIRE */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
            <div className="grid grid-cols-2 h-64 md:h-96">
              <div className="relative bg-slate-300 border-r-4 border-white">
                <div className="absolute inset-0 bg-[url('/images/avant%20apres%20solaire.jpg')] bg-cover bg-center grayscale opacity-80"></div>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest shadow-md">AVANT</div>
              </div>
              <div className="relative bg-slate-200">
                <div className="absolute inset-0 bg-[url('/images/apres%20solaire.jpg')] bg-cover bg-center saturate-150"></div>
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest shadow-md">APRES</div>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Sun className="w-8 h-8 text-brand-orange-500" />
                <h2 className="text-3xl font-bold text-[#0e2f52]">Nettoyage Ferme Solaire (5 Hectares)</h2>
              </div>
              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-slate-100">
                <div className="flex items-center gap-2 text-slate-600"><MapPin className="w-5 h-5 text-slate-400" /> Herault (34)</div>
                <div className="flex items-center gap-2 text-slate-600"><Clock className="w-5 h-5 text-slate-400" /> Duree : 48 Heures</div>
                <div className="flex items-center gap-2 text-slate-600"><Target className="w-5 h-5 text-slate-400" /> Outil : Robot Rony</div>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                <strong>Le defi :</strong> Une centrale au sol fortement encrassee par la poussiere agricole environnante, provoquant une chute de rendement de pres de 12%.<br /><br />
                <strong>Notre action :</strong> Passage du robot terrestre a chenilles avec brosses souples rotatives et eau osmosee. Zero produit chimique utilise. Gain de rendement documente et valide par l&apos;exploitant des la remise en route.
              </p>
              <Link href="/prestations/nettoyage-solaire" className="inline-flex items-center gap-2 font-bold text-brand-orange-500 hover:gap-4 transition-all">
                Decouvrir l&apos;expertise solaire <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* CHANTIER 2 : FACADE */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
            <div className="grid grid-cols-2 h-64 md:h-96">
              <div className="relative bg-slate-300 border-r-4 border-white">
                <div className="absolute inset-0 bg-[url('/images/avant%20facade.jpg')] bg-cover bg-center grayscale opacity-80"></div>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest shadow-md">AVANT</div>
              </div>
              <div className="relative bg-slate-200">
                <div className="absolute inset-0 bg-[url('/images/apres%20facade.jpg')] bg-cover bg-center saturate-150"></div>
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest shadow-md">APRES</div>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-brand-orange-500" />
                <h2 className="text-3xl font-bold text-[#0e2f52]">Entretien Batiment Logistique</h2>
              </div>
              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-slate-100">
                <div className="flex items-center gap-2 text-slate-600"><MapPin className="w-5 h-5 text-slate-400" /> Gard (30)</div>
                <div className="flex items-center gap-2 text-slate-600"><Clock className="w-5 h-5 text-slate-400" /> Duree : 1 Journee</div>
                <div className="flex items-center gap-2 text-slate-600"><Target className="w-5 h-5 text-slate-400" /> Outil : Drone Chronos</div>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                <strong>Le defi :</strong> Elimination complete de la pollution carbonee et des traces rouges (algues) sur un bardage industriel de 15m de haut, fonctionnant en 3x8.<br /><br />
                <strong>Notre action :</strong> Pulverisation d&apos;un traitement choc par drone. Aucun montage d&apos;echafaudage ni blocage des quais de chargement logistique.
              </p>
              <Link href="/prestations/nettoyage-facade" className="inline-flex items-center gap-2 font-bold text-brand-orange-500 hover:gap-4 transition-all">
                {"Decouvrir l'expertise facades"} <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
