import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « démoussage toiture
 * Béziers ». Maillée uniquement avec les autres pages cachées.
 */
const URL = "https://ellipsys-solutions.com/demoussage-toiture-beziers";

export const metadata: Metadata = {
  title: "Démoussage de toiture à Béziers, par drone",
  description:
    "Démoussage de toiture par drone à Béziers et dans le Biterrois : tuiles canal préservées, sans échafaudage ni personne sur le toit. Devis sous 24 h.",
  alternates: { canonical: URL },
};

export default function Page() {
  return (
    <LandingPage
      url={URL}
      service="toiture"
      serviceLabel="Démoussage de toiture"
      h1Texte="Démoussage de toiture à Béziers"
      h1={
        <>
          Démoussage de toiture à Béziers,{" "}
          <span className="text-brand-orange-400">sans monter sur vos tuiles</span>
        </>
      }
      accroche="Air marin chargé de sel, humidité du vent de sud-est : dans le Biterrois, les tuiles canal se couvrent vite de mousses et de lichens. Nous les traitons par drone, sans échafaudage et sans que personne ne circule sur la couverture."
      heroImage="/images/Toiture.webp"
      heroAlt="Drone appliquant un traitement sur une toiture en tuiles"
      badgeZone="Béziers · Hérault · Occitanie"
      pointsCles={[
        "Sans échafaudage ni nacelle",
        "Personne ne marche sur les tuiles",
        "Traitement Certibiocide homologué",
        "Devis gratuit sous 24 h",
      ]}
      formTitre="Votre devis gratuit sous 24 h"
      formSoustitre="Indiquez simplement l'adresse et le type de toiture."
      preuve={{
        image: "/images/demoussage-toiture-eimargues.webp",
        alt: "Avant après démoussage de toiture, chantier réel en Occitanie",
        legende: "Chantier réel : démoussage de toiture par drone à Aimargues, tuiles préservées",
        badges: ["AVANT", "APRÈS"],
      }}
      benefices={[
        {
          titre: "Aucune tuile cassée, aucun risque de chute",
          texte:
            "Le démoussage classique impose de circuler sur la couverture : c'est la première cause de tuiles fissurées. Notre drone travaille sans contact avec le toit, et personne ne s'expose à une chute.",
        },
        {
          titre: "Jamais de haute pression sur la tuile",
          texte:
            "Le nettoyeur haute pression arrache la couche superficielle de la tuile, ouvre sa porosité et accélère le retour des mousses. Nous pulvérisons à pression contrôlée un traitement Certibiocide homologué.",
        },
        {
          titre: "Les grandes toitures du Biterrois",
          texte:
            "Maisons de maître vigneronnes, caves et chais aux toitures de grande surface : là où un échafaudage coûterait plus cher que le traitement, le drone intervient directement depuis les airs.",
        },
        {
          titre: "Hydrofuge en option",
          texte:
            "Après démoussage, un hydrofuge rend la tuile déperlante et espace nettement les entretiens. Nous vous disons franchement quand il est utile, et quand il ne l'est pas.",
        },
      ]}
      prix={[
        {
          label: "Maison individuelle",
          prix: "sur devis",
          note: "Selon la surface, la pente, l'accès et l'état de la couverture.",
        },
        {
          label: "Démoussage + hydrofuge",
          prix: "sur devis",
          note: "Le traitement complet que nous recommandons dans la plupart des cas.",
        },
        {
          label: "Domaines, caves et copropriétés",
          prix: "sur devis",
          note: "Grandes surfaces, intervention sans emprise au sol.",
        },
      ]}
      prixNote="Envoyez-nous une photo de votre toiture avec la demande : nous chiffrons plus vite et plus juste, sans visite commerciale imposée."
      faq={[
        {
          q: "Pourquoi les toitures s'encrassent-elles vite autour de Béziers ?",
          r: "À moins de 15 km de la mer, l'air chargé de sel se dépose sur les tuiles et retient l'humidité. Le vent de sud-est apporte en plus une humidité tiède qui favorise mousses et lichens, surtout sur les tuiles canal anciennes et les versants peu ensoleillés.",
        },
        {
          q: "Quand démousser sa toiture dans le Biterrois ?",
          r: "Idéalement en fin d'été ou au début de l'automne, sur une toiture sèche et avant les pluies d'automne. Le traitement agit alors dans de bonnes conditions et la tuile aborde l'hiver débarrassée de ce qui retient l'eau.",
        },
        {
          q: "Le drone peut-il abîmer ma toiture ?",
          r: "Non. Le drone ne se pose pas sur la couverture : aucun poids, aucun piétinement, aucun risque de fissurer une tuile. Nous pulvérisons à pression contrôlée, jamais en haute pression.",
        },
        {
          q: "Traitez-vous les grandes toitures de caves et de domaines ?",
          r: "Oui, c'est même là que le drone est le plus intéressant : pas d'échafaudage à monter sur de grandes longueurs, pas d'emprise au sol pendant les vendanges ou l'activité du domaine. Nous planifions l'intervention avec vous.",
        },
        {
          q: "Intervenez-vous autour de Béziers ?",
          r: "Oui, à Béziers et dans les communes voisines : Villeneuve-lès-Béziers, Boujan-sur-Libron, Sérignan, Valras-Plage, Sauvian, Cers, Maraussan et au-delà dans le Biterrois. Notre base est à Montpellier, à moins d'une heure.",
        },
      ]}
      communes={[
        "Béziers",
        "Villeneuve-lès-Béziers",
        "Boujan-sur-Libron",
        "Sérignan",
        "Valras-Plage",
        "Sauvian",
        "Cers",
        "Corneilhan",
        "Lignan-sur-Orb",
        "Maraussan",
        "Bassan",
        "Lespignan",
        "Vendres",
        "Portiragnes",
        "Agde",
      ]}
      pageDetail={{
        href: "/prestations/traitement-toiture",
        label: "Voir le détail de notre méthode de démoussage",
      }}
      liensConnexes={[
        { href: "/demoussage-toiture-nimes", label: "Démoussage de toiture à Nîmes" },
        { href: "/demoussage-toiture-montpellier", label: "Démoussage de toiture à Montpellier" },
        { href: "/hydrofuge-toiture-montpellier", label: "Hydrofuge de toiture" },
      ]}
    />
  );
}
