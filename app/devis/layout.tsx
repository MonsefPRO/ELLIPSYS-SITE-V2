import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devis Gratuit Nettoyage par Drone, Réponse 24h",
  description: "Demandez votre devis gratuit de nettoyage par drone : panneaux solaires, façades, toitures, frelons, thermographie. Réponse sous 24 h.",
  alternates: {
    canonical: "https://ellipsys-solutions.com/devis",
  },
  openGraph: {
    url: "https://ellipsys-solutions.com/devis",
    images: [{ url: "/images/accueil.png", alt: "Devis gratuit de nettoyage par drone, Ellipsys Solutions" }],
  },
};

export default function DevisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
