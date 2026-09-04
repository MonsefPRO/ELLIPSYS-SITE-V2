import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Bloc de maillage interne contextuel.
 *
 * Objectif SEO : les liens du header/footer sont du « boilerplate » présent sur
 * toutes les pages, Google les dévalue fortement pour juger l'importance d'une
 * page. Ce qui transmet réellement du « jus » et débloque l'indexation, c'est un
 * lien CONTEXTUEL, dans le corps d'une page forte et thématiquement pertinente.
 *
 * On l'utilise pour pointer, depuis les pages piliers déjà indexées, vers les
 * pages à faire indexer (landing pages locales, tarifs, zone d'intervention).
 * Anchor text descriptif = signal de pertinence pour la requête cible.
 */
export type LienUtile = { href: string; label: string; sub?: string };

export function LiensUtiles({
  titre = "À consulter également",
  liens,
}: {
  titre?: string;
  liens: LienUtile[];
}) {
  if (!liens?.length) return null;

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-xl font-bold text-slate-900 mb-6">{titre}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {liens.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-start gap-3 bg-white rounded-2xl border border-slate-200 p-5 hover:border-brand-orange-400 hover:shadow-md transition-all"
            >
              <div className="flex-1">
                <span className="block font-bold text-slate-900 group-hover:text-brand-orange-600 transition-colors">
                  {l.label}
                </span>
                {l.sub && <span className="block text-sm text-slate-500 mt-1">{l.sub}</span>}
              </div>
              <ArrowRight className="w-5 h-5 text-brand-orange-500 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
