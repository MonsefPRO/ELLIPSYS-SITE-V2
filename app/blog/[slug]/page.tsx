import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ChevronRight, Phone } from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blogPosts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="flex flex-col min-h-screen pt-24 bg-slate-50">

      {/* ── HERO ── */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e2f52]/60 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end container mx-auto px-4 max-w-4xl pb-10">
          <div className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-bold mb-4 ${post.badge}`}>
            {post.category}
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-white leading-tight max-w-3xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-5 mt-4 text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime} de lecture</span>
          </div>
        </div>
      </section>

      {/* ── CORPS ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">

            {/* Article */}
            <article>
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-orange-500 transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>

              {/* Excerpt mis en avant */}
              <div className="bg-brand-orange-50 border-l-4 border-brand-orange-400 rounded-r-xl p-5 mb-10 text-slate-700 text-base leading-relaxed italic">
                {post.excerpt}
              </div>

              {/* Contenu HTML */}
              <div
                className="prose prose-slate prose-lg max-w-none
                  prose-headings:font-black prose-headings:text-[#0e2f52]
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                  prose-p:leading-relaxed prose-p:text-slate-600
                  prose-li:text-slate-600 prose-li:leading-relaxed
                  prose-strong:text-slate-800
                  prose-a:text-brand-orange-500 prose-a:no-underline hover:prose-a:underline
                  prose-ul:my-4 prose-ol:my-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* CTA inline */}
              <div className="mt-12 p-8 bg-[#0e2f52] rounded-3xl text-white">
                <h3 className="text-xl font-black mb-2">Vous avez un projet similaire ?</h3>
                <p className="text-slate-300 text-sm mb-6">Nos experts répondent sous 24h avec un devis détaillé et sans engagement.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/devis" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange-500 hover:bg-brand-orange-400 rounded-xl font-bold text-sm transition-colors">
                    Demander un devis gratuit <ChevronRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:0467209709" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-bold text-sm transition-colors">
                    <Phone className="w-4 h-4" /> 04 67 20 97 09
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28">

              {/* À propos */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">À propos d'Ellipsys</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Spécialiste de la maintenance extérieure par drone et robotique en France. Nettoyage de panneaux solaires, toitures, façades, thermographie et destruction de nuisibles.
                </p>
                <Link href="/expertise" className="inline-flex items-center gap-1 text-sm font-bold text-brand-orange-500 mt-4 hover:gap-2 transition-all">
                  Notre flotte <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Nos prestations */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Nos prestations</p>
                <ul className="space-y-2">
                  {[
                    { label: "Nettoyage solaire", href: "/prestations/nettoyage-solaire" },
                    { label: "Traitement toiture", href: "/prestations/traitement-toiture" },
                    { label: "Nettoyage façades", href: "/prestations/nettoyage-facade" },
                    { label: "Thermographie", href: "/prestations/thermographie" },
                    { label: "Urgence nuisibles", href: "/prestations/nuisibles" },
                    { label: "Prises de vues", href: "/prestations/prises-de-vues" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-orange-500 transition-colors">
                        <ChevronRight className="w-3 h-3 text-brand-orange-400 shrink-0" /> {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact rapide */}
              <div className="bg-brand-orange-500 rounded-2xl p-6 text-white">
                <p className="font-black text-lg mb-1">Devis gratuit</p>
                <p className="text-orange-100 text-sm mb-4">Réponse garantie sous 24h</p>
                <a href="tel:0467209709" className="flex items-center gap-2 font-bold text-lg">
                  <Phone className="w-5 h-5" /> 04 67 20 97 09
                </a>
              </div>
            </aside>
          </div>

          {/* Articles liés */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-xl font-black text-[#0e2f52] mb-8">Articles liés</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all group flex flex-col">
                  <div className="h-44 relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${r.image}')` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-bold ${r.badge}`}>{r.category}</span>
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-sm font-bold text-slate-900 mb-2 line-clamp-3 group-hover:text-brand-orange-500 transition-colors leading-snug flex-grow">
                      {r.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-brand-orange-500 font-bold mt-3">
                      Lire <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
