"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Instagram, Facebook, Linkedin, Music2, ExternalLink } from "lucide-react";

const articles = [
  {
    image: "/images/Frelondrone.png",
    category: "Nuisibles & Sécurité",
    date: "5 Septembre 2026",
    readTime: "6 min",
    title: "Nid de frelons asiatiques en hauteur : pourquoi septembre est le mois le plus dangereux",
    excerpt: "En septembre-octobre, les nids de frelons asiatiques atteignent leur taille maximale et la colonie devient bien plus agressive. Pourquoi il faut agir vite — mais jamais soi-même — et comment un drone détruit un nid en grande hauteur sans aucun risque.",
    href: "/blog/frelon-asiatique-septembre-mois-dangereux",
    badge: "bg-red-50 text-red-600",
  },
  {
    image: "/images/drone-toiture-intervention.png",
    category: "Toiture & Traitement",
    date: "8 Septembre 2026",
    readTime: "6 min",
    title: "Démoussage de toiture : pourquoi l'automne est le meilleur moment pour agir",
    excerpt: "Les premières pluies d'automne réveillent mousses et lichens sur les tuiles. Attendre l'hiver, c'est risquer les infiltrations. Pourquoi agir maintenant, et comment on démousse par drone sans jamais monter sur votre toit.",
    href: "/blog/demoussage-toiture-automne-bon-moment",
    badge: "bg-slate-100 text-slate-700",
  },
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
    excerpt: "Les épisodes de sable saharien peuvent réduire la production d'un parc photovoltaïque de 8 à 15%. Nous analysons les données et expliquons comment un nettoyage professionnel adapté restaure le rendement nominal.",
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

export function BlogTabs() {
  const [tab, setTab] = useState<"articles" | "social">("articles");

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

      {/* RÉSEAUX SOCIAUX */}
      {tab === "social" && (
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-slate-500 mb-10">
            Nos chantiers en photos et en vidéos : avant/après, coulisses des interventions drone et robot. Suivez-nous sur le réseau de votre choix 👇
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { href: "https://www.instagram.com/ellipsysolutionsdrone/", label: "Instagram", handle: "@ellipsysolutionsdrone", desc: "Avant/après et vidéos de chantiers", icon: Instagram, cls: "from-purple-500 to-pink-500" },
              { href: "https://www.linkedin.com/company/110797987", label: "LinkedIn", handle: "Ellipsys Solutions Drones", desc: "Actualités B2B et réalisations", icon: Linkedin, cls: "from-sky-600 to-blue-700" },
              { href: "https://www.tiktok.com/@ellipsyssolutions", label: "TikTok", handle: "@ellipsyssolutions", desc: "Les interventions les plus spectaculaires", icon: Music2, cls: "from-slate-800 to-black" },
              { href: "https://www.facebook.com/profile.php?id=61588550468356", label: "Facebook", handle: "Ellipsys Solutions", desc: "Toute notre actualité en vidéo", icon: Facebook, cls: "from-blue-500 to-blue-700" },
            ].map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all p-6 flex items-center gap-5"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.cls} flex items-center justify-center shrink-0 shadow-md`}>
                  <p.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-grow min-w-0">
                  <p className="font-black text-slate-900">{p.label}</p>
                  <p className="text-xs text-brand-orange-500 font-bold mb-1 truncate">{p.handle}</p>
                  <p className="text-xs text-slate-500">{p.desc}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-brand-orange-500 transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
