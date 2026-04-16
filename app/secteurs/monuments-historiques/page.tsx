import type { Metadata } from "next";
import Link from "next/link";
import { Landmark, Scale, CheckCircle2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Entretien Monuments Historiques et Batiments Classes par Drone | Ellipsys",
  description: "Methodes douces conformes ABF pour monuments historiques et batiments classes. Respect de l'article L.621-31 du Code du patrimoine. Etude de faisabilite gratuite.",
};

export default function MonumentsPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Drone.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-[#0e2f52]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 text-brand-orange-400 font-bold text-sm mb-6 uppercase tracking-wider">Expertise Sectorielle</div>
          <h1 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            Monuments Historiques et <span className="text-brand-orange-500">Batiments Classes</span>
          </h1>
          <p className="text-xl lg:text-2xl font-light text-slate-300 border-l-4 border-brand-orange-500 pl-4 mx-auto max-w-3xl">
            {"Preserver le patrimoine avec des methodes adaptees aux materiaux les plus fragiles."}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="prose prose-lg text-slate-600 max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Landmark className="w-8 h-8 text-brand-orange-500" /> Respect des materiaux fragiles
              </h2>
              <p>
                Les edifices classes ou inscrits au titre des Monuments Historiques exigent une approche radicalement differente. Nos drones et methodes de pulverisation a tres basse pression permettent de nettoyer pierre de taille, enduits traditionnels, toitures en ardoise ou lauze sans aucun contact mecanique agressif.
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                <Scale className="w-8 h-8 text-brand-orange-500" /> Cadre legal ABF & article L.621-31
              </h2>
              <p>
                {"Nos protocoles d'intervention sont concus pour respecter scrupuleusement les prescriptions des Architectes des Batiments de France (ABF). Nous vous accompagnons dans les demarches administratives (declaration prealable, autorisations specifiques) conformement a l'article L.621-31 du Code du patrimoine."}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">{"Notre engagement patrimonial :"}</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Zero pression mecanique forte", desc: "Pulverisation douce preservant l'integrite des materiaux anciens." },
                  { title: "Produits homologues ABF", desc: "Agents fongicides neutres compatibles avec les prescriptions patrimoniales." },
                  { title: "Diagnostic prealable", desc: "Analyse de fragilite et de porosite avant toute intervention." },
                  { title: "Dossier de suivi", desc: "Documentation complete pour votre dossier patrimonial." },
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
              <Shield className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Etude de faisabilite gratuite</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {"Chaque monument est unique. Nous realisons une etude de faisabilite gratuite pour evaluer les contraintes techniques, reglementaires et les methodes adaptees a votre edifice."}
              </p>
              <Link href="/devis" className="block w-full text-center bg-[#0e2f52] text-white py-4 rounded-xl font-bold shadow-md hover:bg-slate-800 transition-colors">
                Etude de faisabilite gratuite
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
