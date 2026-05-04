// ============================================================
// SECTEUR : INDUSTRIE LOGISTIQUE
// Fichier : app/secteurs/industrie-logistique/page.tsx
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import { Factory, Server, CheckCircle2 } from "lucide-react";
import ExpertQuoteSide from "@/components/ExpertQuoteSide";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Nettoyage Drone pour Industrie, Logistique & Datacenters | Ellipsys",
  description: "Entretien extérieur sans interruption de production (Uptime). Nettoyage de bardages et optimisation PUE pour Datacenters (Free Cooling).",
};

export default async function IndustriePage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const benefits = isEn ? [
    { title: "Zero interruption", desc: "Maintenance carried out during your normal operating hours." },
    { title: "CARSAT compliance", desc: "No maintenance personnel exposed to work at height." },
    { title: "PUE optimisation", desc: "Cleaning of external cooling circuits." },
    { title: "Prevention plan included", desc: "Intervention validated by your HSE managers." },
  ] : [
    { title: "Aucune interruption", desc: "Maintenance réalisée pendant vos heures de fonctionnement normales." },
    { title: "Sécurité CARSAT", desc: "Aucun personnel de maintenance exposé au travail en grande hauteur." },
    { title: "Optimisation PUE", desc: "Nettoyage des circuits de refroidissement exterieurs." },
    { title: "Plan de prevention inclus", desc: "Intervention validee par vos responsables HSE." },
  ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-cover bg-center" style={{ backgroundImage: `url('/images/indusbanner.png')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/50 text-brand-orange-400 font-medium text-base mb-6">
              {isEn ? "Industry · Logistics · Datacentres" : "Industrie · Logistique · Datacenters"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Industry, Logistics &" : "Industrie, Logistique &"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-amber-400">
                {isEn ? "Datacentres" : "Datacenters"}
              </span>
            </h1>
            <p className="text-xl text-brand-orange-300 font-semibold mb-4 italic">
              {isEn ? "Guaranteeing your operational continuity (Uptime) without compromise." : "Garantir votre continuité d'activité (Uptime) sans compromis."}
            </p>
          </div>
        </div>
      </section>

      <ExpertQuoteSide quote={isEn ? "Stopping a production line carries an exorbitant cost. Our technology operates without ever interrupting your operational continuity — that is our number-one operational commitment." : "L'arrêt d'une ligne de production a un coût exorbitant. Notre technologie intervient sans jamais interrompre votre continuité d'activité — c'est notre engagement opérationnel numéro un."} />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="prose prose-lg text-slate-600 max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Factory className="w-8 h-8 text-brand-orange-500" /> {isEn ? "Industry & Logistics" : "Industrie & Logistique"}
              </h2>
              <p>
                {isEn
                  ? <>Stopping a production line or blocking a loading dock carries an exorbitant cost. That is why we clean your vast industrial cladding and roof surfaces by drone, <strong>without ever interrupting your operations</strong>.</>
                  : <>L&apos;arrêt d&apos;une ligne de production ou le blocage d&apos;un quai de chargement a un coût exorbitant. C&apos;est pourquoi nous nettoyons vos vastes surfaces de bardages et de toitures industrielles par drone, <strong>sans jamais interrompre votre activité</strong>.</>}
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                <Server className="w-8 h-8 text-brand-orange-500" /> {isEn ? "Critical Datacentre Challenges" : "Enjeux critiques des Datacenters"}
              </h2>
              <p>
                {isEn
                  ? <>For Datacentres, we address a critical issue: <strong>soiling</strong> of cooling systems (<strong>Free Cooling</strong>) by dust or pollen drastically increases the <strong>PUE</strong> (Power Usage Effectiveness). Our precision exterior cleaning delivers massive energy savings.</>
                  : <>Pour les Datacenters, nous maîtrisons un enjeu critique : l&apos;<strong>encrassement</strong> des systèmes de refroidissement (<strong>Free Cooling</strong>) par la poussière ou le pollen augmente drastiquement le <strong>PUE</strong> (Power Usage Effectiveness). Notre nettoyage extérieur de précision permet des économies d&apos;énergie massives.</>}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                {isEn ? "Your industrial benefits:" : "Vos bénéfices industriels :"}
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {benefits.map((item, i) => (
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
              <h3 className="font-bold text-slate-900 mb-4 text-lg">
                {isEn ? "Let us discuss your operational constraints" : "Discutons de vos contraintes"}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {isEn
                  ? <>We are accustomed to strict <strong>Prevention Plans</strong> (PDP) and secured sites. Our teams operate under the supervision of your HSE managers.</>
                  : <>Nous sommes habitués aux <strong>Plans de Prévention</strong> stricts (PDP) et aux sites sécurisés. Nos équipes opèrent sous la supervision de vos responsables HSE.</>}
              </p>
              <Link href="/devis" className="block w-full text-center bg-[#0e2f52] text-white py-4 rounded-xl font-bold shadow-md hover:bg-slate-800 transition-colors">
                {isEn ? "Contact our technical team" : "Contacter notre bureau d'études"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
