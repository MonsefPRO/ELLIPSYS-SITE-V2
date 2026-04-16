// ============================================================
// SECTEUR : INDUSTRIE LOGISTIQUE
// Fichier : app/secteurs/industrie-logistique/page.tsx
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Factory, Server, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Nettoyage Drone pour Industrie, Logistique & Datacenters | Ellipsys",
  description: "Entretien exterieur sans interruption de production (Uptime). Nettoyage de bardages et optimisation PUE pour Datacenters (Free Cooling).",
};

export default function IndustriePage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Bannerindustrie.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-[#0e2f52]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 text-brand-orange-400 font-bold text-sm mb-6 uppercase tracking-wider">
            Expertise Sectorielle
          </div>
          <h1 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            Industrie, Logistique & <span className="text-brand-orange-500">Datacenters</span>
          </h1>
          <p className="text-xl lg:text-2xl font-light text-slate-300 border-l-4 border-brand-orange-500 pl-4 mx-auto max-w-3xl">
            {"Garantir votre continuite d'activite (Uptime) sans compromis."}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="prose prose-lg text-slate-600 max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Factory className="w-8 h-8 text-brand-orange-500" /> Industrie & Logistique
              </h2>
              <p>
                {"L'arret d'une ligne de production ou le blocage d'un quai de chargement a un cout exorbitant. C'est pourquoi nous nettoyons vos vastes surfaces de bardages et de toitures industrielles par drone, sans jamais interrompre votre activite."}
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                <Server className="w-8 h-8 text-brand-orange-500" /> Enjeux critiques des Datacenters
              </h2>
              <p>
                {"Pour les Datacenters, nous maitrrisons un enjeu critique : l'encrassement des systemes de refroidissement (Free Cooling) par la poussiere ou le pollen augmente drastiquement le PUE (Power Usage Effectiveness). Notre nettoyage exterieur de precision permet des economies d'energie massives."}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Vos benefices industriels :</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Zero interruption", desc: "Maintenance realisee pendant vos heures de fonctionnement normales." },
                  { title: "Securite CARSAT", desc: "Aucun personnel de maintenance expose au travail en grande hauteur." },
                  { title: "Optimisation PUE", desc: "Nettoyage des circuits de refroidissement exterieurs." },
                  { title: "Plan de prevention inclus", desc: "Intervention validee par vos responsables HSE." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-6 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-slate-600 text-sm"><strong>{item.title} : </strong>{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 sticky top-28">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Discutons de vos contraintes</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {"Nous sommes habitues aux Plans de Prevention stricts (PDP) et aux sites securises. Nos equipes operent sous la supervision de vos responsables HSE."}
              </p>
              <Link href="/devis" className="block w-full text-center bg-[#0e2f52] text-white py-4 rounded-xl font-bold shadow-md hover:bg-slate-800 transition-colors">
                {"Contacter notre bureau d'etudes"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
