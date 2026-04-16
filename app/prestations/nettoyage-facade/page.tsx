import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Nettoyage de facades et bardages industriels par drone | Ellipsys",
  description: "Redonnez de l'eclat a vos batiments commerciaux sans bloquer votre activite grace au nettoyage de facades par drone.",
};

export default function FacadesPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">

      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Bannerindustrie.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-[#0e2f52]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            Nettoyage de Facades et <span className="text-brand-orange-500">Bardages Industriels par Drone</span>
          </h1>
          <p className="text-xl lg:text-2xl font-light text-slate-300 border-l-4 border-brand-orange-500 pl-4 mx-auto max-w-3xl">
            Redonnez de l&apos;eclat a vos batiments commerciaux sans bloquer votre activite.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-12">
            <div className="prose prose-lg text-slate-600 max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Restauration Esthetique Multisupports</h2>
              <p>
                Les facades d&apos;immeubles, les bardages commerciaux et les entrepots logistiques s&apos;encrassent rapidement sous l&apos;effet de la pollution carbonee. Notre drone Chronos permet l&apos;application de traitements en basse ou en haute pression (jusqu&apos;a 110 bars) sur des surfaces inaccessibles en etablissant un strict perimetre de securite au sol.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{"L'impact direct sur vos facades et bardages :"}</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block mb-1">Perturbation Minimale :</strong>
                    {"Pas de nacelle bloquant l'entree de votre magasin ou de votre entrepot. L'intervention est rapide, ciblee, et limite fortement la gene pour vos clients ou vos operations logistiques."}
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block mb-1">Prevention des Dommages Structurels :</strong>
                    {"Les algues et lichens qui proliferent sur vos murs secretent des acides organiques qui attaquent chimiquement vos enduits. Notre nettoyage regulier elimine cette menace a la source, prolongeant la vie de la facade."}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 sticky top-28">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">{"L'avis de l'expert Ellipsys :"}</h3>
              <p className="italic text-sm text-slate-600 leading-relaxed mb-8">
                {"Le nettoyage regulier des bardages industriels n'est pas qu'une question esthetique. Les pollutions carbonees et les micro-organismes attaquent chimiquement les enduits. Intervenir en prevention avec notre drone Chronos permet d'eviter des renovations lourdes, sans jamais stopper vos operations logistiques."}
              </p>
              <Link href="/devis" className="block w-full text-center bg-[#0e2f52] text-white py-4 rounded-xl font-bold shadow-md hover:bg-slate-800 transition-colors">
                Demander un chiffrage
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
