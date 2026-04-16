import type { Metadata } from "next";
import Link from "next/link";
import { Sun, Zap, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Maintenance Parcs Solaires : Nettoyage Robot & Drone pour Acteurs du Solaire | Ellipsys",
  description: "Solution hybride Robot Rony + Drone Chronos pour la maintenance de parcs photovoltaiques. 500 m2/h, pentes 35%, eau osmosee. Gain de rendement mesurable.",
};

export default function SolaireSecteurPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Energie%20Solaiire.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-amber-950/80"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm mb-6 uppercase tracking-wider">Expertise Sectorielle</div>
          <h1 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            {"Acteurs de l'"}<span className="text-amber-400">Energie Solaire</span>
          </h1>
          <p className="text-xl lg:text-2xl font-light text-slate-300 border-l-4 border-amber-400 pl-4 mx-auto max-w-3xl">
            {"Maximisez le rendement de vos parcs photovoltaiques avec notre solution hybride Robot + Drone."}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Zap className="w-8 h-8 text-amber-500" /> {"L'equation mathematique de l'encrassement"}
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {"Selon l'AIE PVPS, un encrassement naturel reduit la production de 4 a 7% par an. Lors des episodes de sables sahariens, la perte grimpe jusqu'a 30%. Sur un parc de 1 MWc, cela represente des milliers d'euros de revenus perdus chaque mois. Notre intervention se rentabilise en quelques semaines."}
              </p>
            </div>

            <div className="prose prose-lg text-slate-600 max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Sun className="w-8 h-8 text-amber-500" /> Solution hybride Robot Rony + Drone Chronos
              </h2>
              <p>
                Notre <strong>Robot Rony</strong> (7 kg, brosses rotatives souples, eau osmosee) nettoie jusqu&apos;a <strong>500 m² par heure</strong> sur des pentes allant jusqu&apos;a 35%. Pour les surfaces fragmentees, inaccessibles ou les toitures fragiles, notre drone Chronos prend le relais avec une pulverisation aerienne homogene.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Vos avantages operateurs :</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "500 m2/h", desc: "Cadence de nettoyage du Robot Rony sur terrain plat." },
                  { title: "Pentes jusqu'a 35%", desc: "Adaptation automatique aux configurations de terrain." },
                  { title: "Eau osmosee", desc: "0,5 a 2 L/m2 seulement, contre 15 a 25 L en manuel." },
                  { title: "Contrats annuels", desc: "1 a 2 passages programmes pour un rendement optimise toute l'annee." },
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
                <strong>Mentions legales :</strong> Les gains de rendement mentionnes sont des moyennes constatees. Les resultats reels dependent des conditions meteorologiques et du tarif d&apos;achat de l&apos;electricite. Ils ne constituent pas une garantie contractuelle absolue.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 sticky top-28">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">{"Chiffrez l'entretien de votre parc"}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {"Indiquez-nous la superficie de votre parc, sa topologie et la frequence souhaitee. Nous vous proposons un contrat de maintenance sur-mesure."}
              </p>
              <Link href="/devis" className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-xl font-bold shadow-md transition-colors">
                {"Chiffrer l'entretien du parc"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
