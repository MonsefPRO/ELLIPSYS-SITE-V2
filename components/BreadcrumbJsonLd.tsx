// Fil d'Ariane en données structurées (schema.org BreadcrumbList) : Google
// l'affiche à la place de l'URL brute dans ses résultats.
const BASE = "https://ellipsys-solutions.com";

export default function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Accueil", path: "" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${BASE}${it.path}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
