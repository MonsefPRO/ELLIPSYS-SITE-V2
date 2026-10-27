import type { Metadata } from "next";
import Link from "next/link";

// Page 404 : renvoie le visiteur vers les pages qui convertissent plutôt que
// de le laisser repartir sur Google.
export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

const liens = [
  { href: "/prestations/nettoyage-solaire", label: "Nettoyage de panneaux solaires" },
  { href: "/prestations/traitement-toiture", label: "Démoussage et hydrofuge de toiture" },
  { href: "/prestations/nettoyage-facade", label: "Nettoyage de façades et bardages" },
  { href: "/prestations/thermographie", label: "Thermographie par drone" },
  { href: "/realisations", label: "Nos réalisations" },
  { href: "/blog", label: "Articles et guides" },
];

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-slate-50 flex items-center">
      <div className="container mx-auto px-4 max-w-3xl py-20 text-center">
        <p className="text-brand-orange-500 font-black tracking-widest text-sm mb-4">ERREUR 404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0e2f52] mb-4">Cette page n&apos;existe pas ou a été déplacée</h1>
        <p className="text-slate-600 mb-10">Voici les pages les plus consultées. Pour un chiffrage, notre équipe répond sous 24 h.</p>
        <ul className="grid sm:grid-cols-2 gap-3 mb-10 text-left">
          {liens.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="block bg-white border border-slate-200 rounded-xl px-5 py-4 font-semibold text-[#0e2f52] hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/devis" className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-colors">Demander un devis</Link>
          <Link href="/" className="border border-[#0e2f52] text-[#0e2f52] font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors">Retour à l&apos;accueil</Link>
        </div>
      </div>
    </section>
  );
}
