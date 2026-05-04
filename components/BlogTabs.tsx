"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Instagram, Facebook, Linkedin, Music2 } from "lucide-react";

const articles = [
  {
    image: "/images/drone-toiture-intervention.png",
    category: "Toiture & Traitement",
    date: "14 Avril 2026",
    readTime: "5 min",
    title: "Démoussage de toiture : pourquoi le karcher haute pression est une erreur coûteuse",
    excerpt: "Le nettoyage haute pression fragilise les tuiles et annule les garanties fabricant. Découvrez pourquoi nos traitements certibiocides sans pression sont la seule méthode professionnelle validée par les assureurs.",
    href: "/blog/demoussage-toiture-karcher-erreur",
    badge: "bg-slate-100 text-slate-700",
  },
  {
    image: "/images/solairebanner.png",
    category: "Énergie Solaire",
    date: "10 Avril 2026",
    readTime: "6 min",
    title: "Pluies de sable saharien : quel impact réel sur le rendement de vos panneaux solaires ?",
    excerpt: "Les épisodes de sable saharien peuvent réduire la production d'un parc photovoltaïque de 8 à 15%. Nous analysons les données et expliquons comment un nettoyage à l'eau osmosée restaure le rendement nominal.",
    href: "/blog/sable-saharien-panneaux-solaires-rendement",
    badge: "bg-amber-50 text-amber-600",
  },
  {
    image: "/images/thermographie-banner.png",
    category: "Thermographie",
    date: "5 Avril 2026",
    readTime: "7 min",
    title: "Décret Tertiaire : comment la thermographie drone vous aide à atteindre vos objectifs de -40%",
    excerpt: "Le Décret Tertiaire impose une réduction de 40% de la consommation énergétique des bâtiments de plus de 1000m² d'ici 2030. La thermographie par drone est l'outil de diagnostic le plus rapide et le plus précis.",
    href: "/blog/thermographie-drone-decret-tertiaire",
    badge: "bg-blue-50 text-blue-600",
  },
  {
    image: "/images/bannerfrelons.png",
    category: "Nuisibles & Sécurité",
    date: "1 Avril 2026",
    readTime: "4 min",
    title: "Frelon asiatique : comment neutraliser un nid en grande hauteur sans aucun risque ?",
    excerpt: "Le frelon asiatique (Vespa velutina) est une espèce invasive classée dangereuse. Nos drones Certibiocide permettent d'intervenir sur des nids en toiture ou sous corniche sans aucune mise en danger.",
    href: "/blog/frelon-asiatique-nid-hauteur-drone",
    badge: "bg-red-50 text-red-600",
  },
  {
    image: "/images/Barda.png",
    category: "Facades & Bardages",
    date: "25 Mars 2026",
    readTime: "5 min",
    title: "Nettoyage de façade industrielle : pourquoi le drone remplace l'échafaudage en 2026",
    excerpt: "Échafaudage, nacelle, alpinisme industriel : chaque méthode traditionnelle implique des coûts logistiques et des risques humains énormes. Découvrez comment le drone Chronos nettoie un bardage de 15 mètres en une journée.",
    href: "/blog/nettoyage-facade-drone-vs-echafaudage",
    badge: "bg-emerald-50 text-emerald-600",
  },
  {
    image: "/images/3s.png",
    category: "Réglementation DGAC",
    date: "18 Mars 2026",
    readTime: "8 min",
    title: "Scénarios STS-01 et STS-02 : tout comprendre sur la réglementation européenne des drones",
    excerpt: "Depuis janvier 2024, les vols de drones en zone peuplée sont soumis aux scénarios européens STS. Nous détaillons les obligations déclaratives, les zones d'exclusion et comment Ellipsys gère l'intégralité de ces démarches.",
    href: "/blog/reglementation-drone-sts-01-sts-02",
    badge: "bg-orange-50 text-orange-600",
  },
];

const CURATOR_SCRIPT = "https://cdn.curator.io/published/f93c919d-6d31-4894-a325-2c72f8109036.js";

export function BlogTabs() {
  const [tab, setTab] = useState<"articles" | "social">("articles");

  // Charge le script Curator au montage du composant (div toujours présente dans le DOM)
  useEffect(() => {
    if (document.querySelector(`script[src="${CURATOR_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.charset = "UTF-8";
    script.async = true;
    script.src = CURATOR_SCRIPT;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* ONGLETS */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-slate-100 rounded-2xl p-1 gap-1">
          <button
            onClick={() => setTab("articles")}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              tab === "articles"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            📝 Articles
          </button>
          <button
            onClick={() => setTab("social")}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              tab === "social"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            📲 Réseaux Sociaux
          </button>
        </div>
      </div>

      {/* ARTICLES */}
      {tab === "articles" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <Link
              key={i}
              href={article.href}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col"
            >
              <div className="h-52 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${article.badge}`}>
                  {article.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime} de lecture</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug line-clamp-3 group-hover:text-brand-orange-500 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-sm font-bold text-brand-orange-500">
                  Lire l&apos;article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* RÉSEAUX SOCIAUX — toujours dans le DOM pour que Curator s'initialise correctement */}
      <div style={{ display: tab === "social" ? "block" : "none" }}>
        {/* Boutons profils */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { href: "https://www.instagram.com/ellipsysolutionsdrone/", label: "Instagram", icon: Instagram, cls: "bg-gradient-to-r from-purple-500 to-pink-500 text-white" },
            { href: "https://www.facebook.com/profile.php?id=61588550468356&sk=reels_tab", label: "Facebook", icon: Facebook, cls: "bg-blue-600 text-white" },
            { href: "https://www.tiktok.com/@ellipsyssolutions", label: "TikTok", icon: Music2, cls: "bg-black text-white" },
            { href: "https://www.linkedin.com/company/110797987", label: "LinkedIn", icon: Linkedin, cls: "bg-sky-700 text-white" },
          ].map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold ${p.cls} hover:scale-105 transition-transform shadow-sm`}
            >
              <p.icon className="w-4 h-4" />
              {p.label}
            </a>
          ))}
        </div>

        {/* Widget Curator.io — posts réels */}
        <div id="curator-feed-default-feed-layout">
          <a href="https://curator.io" target="_blank" rel="noopener noreferrer" className="crt-logo crt-tag">
            Powered by Curator.io
          </a>
        </div>
      </div>
    </>
  );
}
