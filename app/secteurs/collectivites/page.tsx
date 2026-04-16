import type { Metadata } from "next";
import Link from "next/link";
import { Building2, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Entretien Batiments Publics et Espaces Collectifs par Drone | Ellipsys",
  description: "Nettoyage sans emprise au sol pour collectivites. Continuite de la voirie, securite ecoles, urgences frelons dans les parcs publics.",
};

export default function CollectivitesPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Drone.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-[#0e2f52]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 text-brand-orange-400 font-bold text-sm mb-6 uppercase tracking-wider">Expertise Sectorielle</div>
          <h1 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            Collectivites & <span className="text-brand-orange-500">Espace Public</span>
          </h1>
          <p className="text-xl lg:text-2xl font-light text-slate-300 border-l-4 border-brand-orange-500 pl-4 mx-auto max-w-3xl">
            {"Interventions sans emprise au sol pour preserver la continuite du service public."}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="prose prose-lg text-slate-600 max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-brand-orange-500" /> {"Respect des infrastructures publiques"}
              </h2>
              <p>
                {"Les batiments et espaces publics font face a des contraintes specifiques : acces du public, securite des usagers, continuite du service. Notre approche aerienne par drone eliminate le besoin d'emprise au sol (balisage, nacelles, echafaudages), permettant d'intervenir sur les batiments publics sans perturber la circulation pietons ou vehicules."}
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-brand-orange-500" /> Urgences frelons dans les espaces publics
              </h2>
              <p>
                {"Un nid de frelons asiatiques dans un parc, une ecole ou un stade constitue une urgence sanitaire engageant la responsabilite de la collectivite. Notre equipe intervient en urgence avec notre drone qualifie, neutralisant le nid sans evacuation de zone et sans mise en danger des intervenants."}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">{"Nos interventions pour les collectivites :"}</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Zero emprise au sol", desc: "Aucune barricade, aucune nacelle bloquant la circulation." },
                  { title: "Securite ecoles", desc: "Interventions hors horaires scolaires ou sans evacuation." },
                  { title: "Continuite voirie", desc: "Acces pietons et vehicules maintenu pendant l'intervention." },
                  { title: "Urgences frelons parcs", desc: "Intervention rapide sur nids inaccessibles dans espaces verts." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-6 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-slate-600 text-sm"><strong>{item.title} : </strong>{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-slate-100 rounded-xl border border-slate-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-500 leading-relaxed italic">
                Nous sommes references sur les plateformes de marches publics. Nos devis sont etablis dans le respect des procedures Appel d&apos;Offres.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 sticky top-28">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Appel d&apos;offres & marches publics</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {"Nous repondons aux consultations publiques et pouvons fournir l'ensemble des documents necessaires (KBIS, assurances, certifications)."}
              </p>
              <Link href="/devis" className="block w-full text-center bg-[#0e2f52] text-white py-4 rounded-xl font-bold shadow-md hover:bg-slate-800 transition-colors">
                Nous contacter (Appel d&apos;offres)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
