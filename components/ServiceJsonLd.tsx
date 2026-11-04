// Service en données structurées, rattaché à l'entité du layout par son @id :
// une seule entreprise pour Google et les moteurs IA.
const BASE = "https://ellipsys-solutions.com";

export default function ServiceJsonLd({ name, serviceType, path, description }: { name: string; serviceType: string; path: string; description: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    url: `${BASE}${path}`,
    description,
    provider: { "@id": `${BASE}/#business` },
    areaServed: { "@type": "Country", name: "France" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
