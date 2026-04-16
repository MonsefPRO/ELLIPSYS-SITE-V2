import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Scale, Sun, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Actualites et Blog Drone : Maintenance, Reglementation et Thermographie | Ellipsys",
  description: "Restez informes de nos innovations techniques, des evolutions reglementaires europeennes et decouvrez nos guides de bonnes pratiques de maintenance.",
};

const articles = [
  {
    icon: BookOpen,
    category: "Maintenance Batiment",
    title: "Comprendre la norme ISO 14001 pour le nettoyage de vos toitures industrielles.",
    href: "#",
  },
  {
    icon: Scale,
    category: "Reglementation",
    title: "Tout savoir sur les scenarios europeens STS-01 et STS-02 pour l'inspection en milieu urbain.",
    href: "#",
  },
  {
    icon: Sun,
    category: "Energie Solaire",
    title: "L'impact des pluies de sables sahariens sur le rendement de vos panneaux solaires.",
    href: "#",
  },
];

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">

      <section className="bg-[#0e2f52] text-white py-20 text-center px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            Le Blog de l&apos;Ingenierie et de l&apos;<span className="text-brand-orange-500">Inspection par Drone</span>
          </h1>
          <p className="text-xl lg:text-2xl font-light text-slate-300 border-l-4 border-brand-orange-500 pl-4 mx-auto max-w-3xl">
            Restez informes de nos innovations techniques et des evolutions reglementaires.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{"L'espace d'information de nos experts"}</h2>
            <p className="text-slate-600 leading-relaxed">
              {"Decouvrez regulierement nos nouveaux articles, etudes de cas et guides de bonnes pratiques pour optimiser la maintenance de vos infrastructures. Cet espace vous permet egalement de suivre l'evolution de la reglementation europeenne (EASA/DGAC) et de decouvrir les dernieres innovations de notre parc robotique."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <Link
                key={i}
                href={article.href}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col"
              >
                <div className="h-48 bg-slate-100 relative flex items-center justify-center">
                  <article.icon className="w-12 h-12 text-slate-300 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="text-xs font-bold text-brand-orange-500 uppercase tracking-wider mb-3">{article.category}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{article.title}</h3>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-[#0e2f52] font-bold text-sm">
                    Lire l&apos;article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
