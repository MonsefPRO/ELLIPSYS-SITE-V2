import type { Metadata } from "next";
import Link from "next/link";
import { Waves, Shield, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Nettoyage et Dessalage d'Infrastructures Maritimes et Portuaires | Ellipsys",
  description: "Protocole de dessalage par drone pour infrastructures navales et portuaires. Evacuation des chlorures, protection contre la corrosion marine.",
};

export default function MaritimePage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Drone.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-[#0e2f52]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 text-brand-orange-400 font-bold text-sm mb-6 uppercase tracking-wider">Expertise Sectorielle</div>
          <h1 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            Milieu Maritime & <span className="text-brand-orange-500">Plaisance</span>
          </h1>
          <p className="text-xl lg:text-2xl font-light text-slate-300 border-l-4 border-brand-orange-500 pl-4 mx-auto max-w-3xl">
            {"Protegez vos infrastructures contre l'agressivite de l'environnement cotier."}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="prose prose-lg text-slate-600 max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Waves className="w-8 h-8 text-brand-orange-500" /> {"L'agressivite de l'environnement cotier"}
              </h2>
              <p>
                {"Le sel marin, les embruns et l'humidite chronique constituent une menace permanente pour les structures metalliques, beton et composites. La corrosion cotiere agit de maniere invisible et acceleree. Nos protocoles de dessalage par drone permettent d'evacuer les chlorures accumules avant qu'ils n'attaquent les structures portantes."}
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                <Shield className="w-8 h-8 text-brand-orange-500" /> Protocole dessalage et protection
              </h2>
              <p>
                {"Notre intervention combine un rinçage a l'eau douce osmosee sous faible pression pour evacuer les depots de chlorures, suivi d'un traitement protecteur adapte au type de materiau (metal, beton arme, composite). Une inspection thermographique peut completer l'intervention pour detecter les zones d'humidite residuelle."}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Infrastructures couvertes :</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Capitaineries et hangars portuaires", desc: "Nettoyage de facades et toitures exposees aux embruns." },
                  { title: "Pontons et structures metalliques", desc: "Dessalage regulier pour prevenir la corrosion acceleree." },
                  { title: "Panneaux solaires en zone cotiere", desc: "Frequence de nettoyage adaptee a la salinite locale." },
                  { title: "Batiments de plaisance", desc: "Entretien saisonnier des infrastructures nautiques." },
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
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Planifier un dessalage</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {"En milieu cotier, la frequence d'intervention est cle. Contactez-nous pour etablir un plan de maintenance adapte a l'exposition de vos infrastructures."}
              </p>
              <Link href="/devis" className="block w-full text-center bg-[#0e2f52] text-white py-4 rounded-xl font-bold shadow-md hover:bg-slate-800 transition-colors">
                Planifier un dessalage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
