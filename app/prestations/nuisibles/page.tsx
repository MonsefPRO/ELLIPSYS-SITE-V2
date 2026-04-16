import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Crosshair, Zap, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Destruction de nids de frelons en grande hauteur et eradication de nuisibles par drone | Ellipsys",
  description: "La solution d'urgence optimale pour les nids inaccessibles. Risque humain controle, retrait du nid et intervention rapide.",
};

export default function FrelonsPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">

      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Nuisibles.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-[#0e2f52]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            Destruction de Nids de Frelons en <span className="text-brand-orange-500">Grande Hauteur</span>
          </h1>
          <p className="text-xl lg:text-2xl font-light text-slate-300 border-l-4 border-brand-orange-500 pl-4 mx-auto max-w-3xl">
            {"La solution d'urgence optimale pour les nids inaccessibles."}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">La Revolution Securitaire contre les Frelons Asiatiques</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                {"Un nid de frelons haut perche dans un arbre ou sous une corniche represente un danger vital. Les methodes classiques sont lentes, couteuses, et creent des vibrations provoquant des attaques massives."}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, color: "text-emerald-500", title: "Risque Humain Controle", desc: "Telepilotes a distance. Risque de chute et de piqures supprime." },
                  { icon: Zap, color: "text-brand-orange-500", title: "Acces Facilite", desc: "Atteinte de cibles a plus de 50 metres avec stabilite." },
                  { icon: Crosshair, color: "text-blue-500", title: "Precision Chirurgicale", desc: "Visee et lanceurs de billes insecticides declenchables a distance." },
                  { icon: Clock, color: "text-amber-500", title: "Rapidite d'action", desc: "Intervention moyenne de 1 a 2 heures pour un retour a la normale." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <item.icon className={`w-8 h-8 ${item.color} shrink-0`} />
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{"Une methode d'eradication radicale :"}</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Maitrise d'une Urgence Sanitaire (Certibiocide)",
                    desc: "Un nid de frelons asiatiques engage directement votre responsabilite. Le traitement neutralise la menace a la source."
                  },
                  {
                    title: "Eradication et Retrait du Nid",
                    desc: "Apres l'injection securisee du produit biocide, nous procedons a l'enlevement physique minutieux du nid."
                  },
                  {
                    title: "Conformite Reglementaire (DGAC/EASA)",
                    desc: "Nos pilotes operent sous le strict controle de la DGAC pour un survol en zone habitee en toute legalite."
                  }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <div className="text-slate-600 text-sm leading-relaxed">
                      <strong className="text-slate-900 block mb-1">{item.title} :</strong>{item.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 sticky top-28">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">{"L'avis de l'expert Ellipsys :"}</h3>
              <p className="italic text-sm text-slate-600 leading-relaxed mb-8">
                {"Face a un nid de frelons asiatiques en grande hauteur, l'improvisation est fatale. Notre protocole garantit une securite totale : le telepilote opere a distance, le produit biocide est injecte avec une precision chirurgicale, et nous procedons toujours au retrait de la structure pour une eradication definitive."}
              </p>
              <Link href="/devis" className="block w-full text-center bg-red-600 text-white py-4 rounded-xl font-bold shadow-md hover:bg-red-700 transition-colors">
                Signaler une urgence
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
