import type { Metadata } from "next";
import { BlogTabs } from "@/components/BlogTabs";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Blog Drone & Maintenance : Conseils, Réglementation, Innovations | Ellipsys",
  description: "Articles experts sur le nettoyage par drone, la thermographie, la réglementation DGAC/EASA, l'entretien de panneaux solaires et la destruction de nids de frelons.",
};

export default async function BlogPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">

      {/* BANNIERE */}
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-cover bg-center" style={{ backgroundImage: `url('/images/bannerblog.png')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/50 text-brand-orange-400 font-medium text-base mb-6">
              {isEn ? "Blog · Social Media · Innovations" : "Blog · Réseaux Sociaux · Innovations"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "News & Content" : "Actualités & Contenus"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-amber-400">
                Ellipsys
              </span>
            </h1>
            <p className="text-xl text-brand-orange-300 font-semibold mb-4 italic">
              {isEn
                ? "Expert insights, technical innovations and our latest social media posts."
                : "Conseils d'experts, innovations techniques et nos derniers posts sur les réseaux."}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENU AVEC ONGLETS */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <BlogTabs />
        </div>
      </section>

    </main>
  );
}
