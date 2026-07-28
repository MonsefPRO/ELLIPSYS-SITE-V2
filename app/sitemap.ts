import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogPosts";

const BASE = "https://ellipsys-solutions.com";

// Parse les dates FR du blog ("14 Avril 2026") → Date
const MOIS: Record<string, number> = {
  janvier: 0, fevrier: 1, février: 1, mars: 2, avril: 3, mai: 4, juin: 5,
  juillet: 6, aout: 7, août: 7, septembre: 8, octobre: 9, novembre: 10,
  decembre: 11, décembre: 11,
};
function parseFrDate(str: string): Date {
  const m = str.trim().toLowerCase().match(/(\d{1,2})\s+([a-zéû]+)\s+(\d{4})/);
  if (m && MOIS[m[2]] !== undefined) {
    return new Date(Number(m[3]), MOIS[m[2]], Number(m[1]));
  }
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Pages principales ──
  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/devis", priority: 0.95, changeFrequency: "monthly" },
    { path: "/tarifs", priority: 0.95, changeFrequency: "monthly" },
    { path: "/nettoyage-panneaux-photovoltaiques", priority: 0.95, changeFrequency: "weekly" },

    // Prestations
    { path: "/prestations", priority: 0.9, changeFrequency: "monthly" },
    { path: "/prestations/nettoyage-solaire", priority: 0.95, changeFrequency: "monthly" },
    { path: "/prestations/traitement-toiture", priority: 0.95, changeFrequency: "monthly" },
    { path: "/prestations/nettoyage-facade", priority: 0.95, changeFrequency: "monthly" },
    { path: "/prestations/thermographie", priority: 0.9, changeFrequency: "monthly" },
    { path: "/prestations/nuisibles", priority: 0.9, changeFrequency: "monthly" },
    { path: "/prestations/prises-de-vues", priority: 0.85, changeFrequency: "monthly" },
    { path: "/prestations/patrimoine", priority: 0.85, changeFrequency: "monthly" },

    // Entreprise
    { path: "/expertise", priority: 0.9, changeFrequency: "monthly" },
    { path: "/realisations", priority: 0.9, changeFrequency: "monthly" },
    { path: "/a-propos", priority: 0.7, changeFrequency: "monthly" },
    { path: "/methode", priority: 0.7, changeFrequency: "monthly" },
    { path: "/valeurs", priority: 0.6, changeFrequency: "monthly" },
    { path: "/partenaires", priority: 0.6, changeFrequency: "monthly" },
    { path: "/politique-confidentialite", priority: 0.3, changeFrequency: "yearly" },
    { path: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" },

    // Secteurs
    { path: "/domaines", priority: 0.85, changeFrequency: "monthly" },
    { path: "/secteurs/energie-solaire", priority: 0.85, changeFrequency: "monthly" },
    { path: "/secteurs/industrie-logistique", priority: 0.85, changeFrequency: "monthly" },
    { path: "/secteurs/immobilier-syndics", priority: 0.85, changeFrequency: "monthly" },
    { path: "/secteurs/monuments-historiques", priority: 0.8, changeFrequency: "monthly" },
    { path: "/secteurs/haute-exigence", priority: 0.8, changeFrequency: "monthly" },
    { path: "/secteurs/maritime-plaisance", priority: 0.8, changeFrequency: "monthly" },
    { path: "/secteurs/collectivites", priority: 0.8, changeFrequency: "monthly" },
    { path: "/secteurs/particuliers", priority: 0.8, changeFrequency: "monthly" },

    // SEO local
    { path: "/zone-intervention", priority: 0.8, changeFrequency: "monthly" },
    // Villes à contenu local enrichi (climat, bâti, communes, FAQ propres)
    { path: "/intervention/montpellier", priority: 0.9, changeFrequency: "monthly" },
    { path: "/intervention/nimes", priority: 0.85, changeFrequency: "monthly" },
    { path: "/intervention/beziers", priority: 0.85, changeFrequency: "monthly" },
    { path: "/intervention/sete", priority: 0.85, changeFrequency: "monthly" },
    { path: "/intervention/perpignan", priority: 0.85, changeFrequency: "monthly" },
    { path: "/intervention/toulouse", priority: 0.8, changeFrequency: "monthly" },
    { path: "/intervention/marseille", priority: 0.8, changeFrequency: "monthly" },
    { path: "/intervention/avignon", priority: 0.8, changeFrequency: "monthly" },
    // Villes hors zone Occitanie : conservées mais non prioritaires — elles
    // captaient des impressions parisiennes sans jamais convertir.
    { path: "/intervention/paris", priority: 0.5, changeFrequency: "yearly" },
    { path: "/intervention/lyon", priority: 0.5, changeFrequency: "yearly" },

    // Blog (index)
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = pages.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  // ── Articles de blog (ajoutés automatiquement depuis lib/blogPosts.ts) ──
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: parseFrDate(post.date),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticEntries, ...blogEntries];
}
