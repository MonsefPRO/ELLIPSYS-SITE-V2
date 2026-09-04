import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devis Gratuit Nettoyage par Drone, Réponse 24h",
  description: "Demandez votre devis gratuit pour nettoyage par drone : panneaux solaires, façades, toitures, frelons, thermographie. Réponse sous 24h. France entière et international.",
  alternates: {
    canonical: "https://ellipsys-solutions.com/devis",
  },
  openGraph: {
    url: "https://ellipsys-solutions.com/devis",
  },
};

export default function DevisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
