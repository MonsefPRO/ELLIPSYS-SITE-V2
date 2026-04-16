import type { Metadata } from "next";
import Link from "next/link";
import { Home, Sun, Bug, Droplets, CheckCircle2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Prestations exterieures pour l'Habitat Particulier | Ellipsys",
  description: "Demoussage toiture, nettoyage facades, panneaux solaires et destruction de nids de frelons pour particuliers. Sans Javel, biodegradable, devis clair, rapport photo.",
};

export default function ParticuliersPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">
      <section className="relative text-white py-20 lg:py-32 overflow-hidden text-center px-4 bg-gradient-to-br from-emerald-900 via-[#0e2f52] to-[#0e2f52]">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm mb-6 uppercase tracking-wider">Expertise Sectorielle</div>
          <h1 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            {"Prestations exterieures pour"} <span className="text-emerald-400">{"l'Habitat"}</span>
          </h1>
          <p className="text-xl lg:text-2xl font-light text-slate-300 border-l-4 border-emerald-400 pl-4 mx-auto max-w-3xl">
            {"Des solutions professionnelles pour entretenir et valoriser votre maison."}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Nos 4 services pour les particuliers</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Home,
                color: "text-slate-700",
                bg: "bg-slate-50",
                border: "border-slate-200",
                title: "Demoussage & Hydrofuge Toiture",
                desc: "Traitement Certibiocide homologue et protection hydrofuge pour eliminer mousses et lichens. Methode douce sans karcher haute pression qui endommage les tuiles.",
                href: "/prestations/traitement-toiture",
              },
              {
                icon: Droplets,
                color: "text-blue-600",
                bg: "bg-blue-50",
                border: "border-blue-200",
                title: "Nettoyage de Facades",
                desc: "Restauration esthetique de vos facades par drone ou perche telescopique. Aucune nacelle, aucun echafaudage, aucune nuisance pour vos voisins.",
                href: "/prestations/nettoyage-facade",
              },
              {
                icon: Sun,
                color: "text-amber-500",
                bg: "bg-amber-50",
                border: "border-amber-200",
                title: "Panneaux Solaires",
                desc: "Nettoyage a l'eau osmosee de vos panneaux photovoltaiques pour restaurer leur rendement nominal. Gain de 4 a 7% de production mesurable.",
                href: "/prestations/nettoyage-solaire",
              },
              {
                icon: Bug,
                color: "text-red-600",
                bg: "bg-red-50",
                border: "border-red-200",
                title: "Urgence Frelons",
                desc: "Destruction de nids de frelons asiatiques en grande hauteur par drone Certibiocide. Intervention rapide, retrait du nid garanti, risque zero pour vous.",
                href: "/prestations/nuisibles",
              },
            ].map((service, i) => (
              <Link key={i} href={service.href} className={`group flex flex-col p-8 rounded-3xl border ${service.bg} ${service.border} hover:shadow-md transition-shadow`}>
                <service.icon className={`w-10 h-10 ${service.color} mb-5`} />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{service.desc}</p>
                <span className={`mt-4 text-sm font-semibold ${service.color} group-hover:underline`}>En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Nos garanties pour les particuliers</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Sans Javel ni produits agressifs",
              "Produits biodegradables homologues",
              "Devis clair et sans surprise",
              "Rapport photo avant/apres fourni",
              "Pas de nacelle ni d'echafaudage",
              "Intervenants certifies Certibiocide",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-emerald-900 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">{"Votre maison merite le meilleur entretien"}</h2>
          <p className="text-slate-300 mb-10">Devis gratuit sous 24h. Intervention possible des la semaine suivante.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-colors shadow-lg">
              Demander un devis gratuit
            </Link>
            <a href="tel:0467209709" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-colors border border-white/30">
              <Phone className="w-5 h-5" /> 04 67 20 97 09
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
