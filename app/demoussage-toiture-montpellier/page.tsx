import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Landing page Google Ads, groupe « Démoussage toiture ».
 * Sert aussi en référencement naturel après la campagne (contenu local réel).
 */
export const metadata: Metadata = {
  title: "Démoussage de toiture à Montpellier, devis gratuit 24 h",
  description:
    "Démoussage de toiture par drone à Montpellier et dans l'Hérault. Sans échafaudage, sans monter sur les tuiles. Traitement Certibiocide + hydrofuge. Devis gratuit sous 24 h.",
  alternates: { canonical: "https://ellipsys-solutions.com/demoussage-toiture-montpellier" },
};

export default function Page() {
  return (
    <LandingPage
      url="https://ellipsys-solutions.com/demoussage-toiture-montpellier"
      service="toiture"
      serviceLabel="Démoussage de toiture"
      h1Texte="Démoussage de toiture à Montpellier"
      h1={
        <>
          Démoussage de toiture à Montpellier —{" "}
          <span className="text-brand-orange-400">sans monter sur vos tuiles</span>
        </>
      }
      accroche="Mousses, lichens et salissures traités par drone, sans échafaudage ni circulation sur la couverture. Vos tuiles canal restent intactes, et vous n'avez aucun risque de chute à assumer."
      heroImage="/images/demoussage-toiture-eimargues.jpg"
      heroAlt="Démoussage de toiture par drone à Montpellier et dans l'Hérault"
      formTitre="Votre devis gratuit sous 24 h"
      formSoustitre="Deux champs suffisent pour qu'on vous rappelle."
      preuve={{
        image: "/images/demoussage-toiture-eimargues.jpg",
        alt: "Avant après démoussage de toiture, chantier réel dans l'Hérault",
        legende: "Chantier réel, démoussage de toiture à Aimargues (30), tuiles préservées",
        badges: ["AVANT", "APRÈS"],
      }}
      benefices={[
        {
          titre: "Aucune tuile cassée, aucun risque de chute",
          texte:
            "Le démoussage classique impose de circuler sur la couverture : c'est la première cause de tuiles fissurées, et le risque de chute reste à la charge du donneur d'ordre. Notre drone travaille sans contact avec le toit.",
        },
        {
          titre: "Jamais de haute pression sur la tuile canal",
          texte:
            "Le karcher arrache la couche superficielle des tuiles, ouvre leur porosité et accélère le réencrassement, tout en annulant certaines garanties fabricant. Nous travaillons à pression contrôlée avec un traitement Certibiocide homologué.",
        },
        {
          titre: "Hydrofuge en option, pour espacer les entretiens",
          texte:
            "Après démoussage, un traitement hydrofuge réduit la porosité de la tuile et retarde nettement le retour des mousses. Nous vous disons franchement quand il est utile, et quand il ne l'est pas.",
        },
        {
          titre: "Rapport photo avant/après daté",
          texte:
            "Vous recevez un rapport photo horodaté de l'intervention. Utile pour votre suivi, pour une revente, ou pour un dossier d'assurance.",
        },
      ]}
      prix={[
        {
          label: "Maison individuelle",
          prix: "à partir de 12 €/m²",
          note: "Démoussage seul, toiture accessible, selon l'état d'encrassement et la pente.",
        },
        {
          label: "Démoussage + hydrofuge",
          prix: "à partir de 18 €/m²",
          note: "Traitement complet avec protection longue durée. Le plus demandé.",
        },
        {
          label: "Copropriété / grande surface",
          prix: "sur devis",
          note: "Tarif dégressif selon la surface. Rapport photo fourni pour l'AG.",
        },
      ]}
      prixNote="Ces fourchettes sont indicatives : le prix réel dépend de la surface, de la pente, de l'accessibilité et de l'état de la couverture. Sur Montpellier et la Métropole, aucun frais de déplacement, nous partons de notre base."
      faq={[
        {
          q: "Quand faut-il démousser sa toiture dans l'Hérault ?",
          r: "L'idéal est d'intervenir en fin d'été ou au début de l'automne, avant les fortes pluies. C'est le moment où le traitement agit le mieux et où l'on évite que les mousses gorgées d'eau ne dégradent la tuile pendant l'hiver. Sur les versants nord, peu ensoleillés, la reprise est plus rapide : un contrôle tous les 3 à 5 ans est raisonnable.",
        },
        {
          q: "Le drone peut-il abîmer ma toiture ?",
          r: "Non, et c'est justement l'inverse du problème habituel. Le drone ne se pose pas sur la couverture : il n'y a aucun poids, aucun piétinement, aucun risque de fissurer une tuile. Nous pulvérisons à pression contrôlée, jamais en haute pression.",
        },
        {
          q: "Faut-il être présent pendant l'intervention ?",
          r: "Votre présence au début est utile pour valider le périmètre et l'accès à un point d'eau. Ensuite, non : nous mettons en place une zone d'exclusion des tiers conformément à la réglementation DGAC et vous pouvez vaquer à vos occupations. Le rapport photo vous est transmis après.",
        },
        {
          q: "Intervenez-vous autour de Montpellier ou seulement en ville ?",
          r: "Nous couvrons toute la Métropole et le nord de Montpellier, Saint-Gély-du-Fesc, Saint-Clément-de-Rivière, Montferrier, Assas, Clapiers, ainsi que le littoral et une large partie de l'Hérault et du Gard. Notre base est à Montpellier, donc pas de frais de déplacement sur la métropole.",
        },
      ]}
      communes={[
        "Montpellier",
        "Castelnau-le-Lez",
        "Saint-Gély-du-Fesc",
        "Saint-Clément-de-Rivière",
        "Montferrier-sur-Lez",
        "Clapiers",
        "Jacou",
        "Lattes",
        "Pérols",
        "Grabels",
        "Juvignac",
        "Saint-Jean-de-Védas",
        "Vendargues",
        "Prades-le-Lez",
        "Assas",
      ]}
      pageDetail={{
        href: "/prestations/traitement-toiture",
        label: "Voir le détail de notre méthode de démoussage",
      }}
    />
  );
}
