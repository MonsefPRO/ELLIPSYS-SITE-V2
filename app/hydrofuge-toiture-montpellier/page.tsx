import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « hydrofuge toiture
 * Montpellier ». Maillée uniquement avec les autres pages cachées.
 */
export const metadata: Metadata = {
  title: "Hydrofuge de toiture à Montpellier, par drone",
  description:
    "Traitement hydrofuge de toiture par drone à Montpellier, après démoussage : tuiles protégées 5 à 8 ans selon l'exposition, sans échafaudage. Devis 24 h.",
  alternates: { canonical: "https://ellipsys-solutions.com/hydrofuge-toiture-montpellier" },
};

export default function Page() {
  return (
    <LandingPage
      url="https://ellipsys-solutions.com/hydrofuge-toiture-montpellier"
      service="toiture"
      serviceLabel="Hydrofuge de toiture"
      h1Texte="Hydrofuge de toiture à Montpellier"
      h1={
        <>
          Hydrofuge de toiture à Montpellier :{" "}
          <span className="text-brand-orange-400">vos tuiles protégées</span>
        </>
      }
      accroche="L'hydrofuge rend la tuile déperlante : l'eau ruisselle au lieu de pénétrer, et les mousses reviennent beaucoup plus lentement. Nous l'appliquons par drone, après un démoussage complet, sans que personne ne monte sur votre toit."
      heroImage="/images/hydrofuge.jpg"
      heroAlt="Toiture en tuiles canal entretenue"
      formTitre="Votre devis gratuit sous 24 h"
      formSoustitre="Indiquez simplement l'adresse et le type de toiture."
      preuve={{
        image: "/images/Toiture.jpg",
        alt: "Application d'un traitement de toiture par drone",
        legende: "Application d'un traitement par drone : personne ne circule sur la couverture",
      }}
      benefices={[
        {
          titre: "Jamais sur un toit sale",
          texte:
            "Un hydrofuge appliqué sur une toiture encore encrassée enferme l'humidité dans la porosité de la tuile, avec un risque de casse au premier gel. Nous démoussons d'abord, systématiquement : c'est la condition d'un traitement durable.",
        },
        {
          titre: "5 à 8 ans de protection",
          texte:
            "Selon l'exposition (versant nord, humidité, arbres à proximité), l'hydrofuge protège la tuile 5 à 8 ans et espace nettement les démoussages, habituellement nécessaires tous les 3 à 5 ans.",
        },
        {
          titre: "Adapté aux tuiles canal et au bâti ancien",
          texte:
            "Notre méthode, sans contact mécanique agressif ni haute pression, convient aux tuiles canal, à l'ardoise et aux toitures situées en zone protégée (ABF).",
        },
        {
          titre: "Aucun échafaudage, aucun risque de chute",
          texte:
            "Le drone pulvérise le produit depuis les airs. Pas d'échafaudage à installer, personne sur la couverture, aucune tuile cassée par le passage.",
        },
      ]}
      prix={[
        {
          label: "Démoussage + hydrofuge",
          prix: "sur devis",
          note: "Le traitement complet que nous recommandons dans la plupart des cas.",
        },
        {
          label: "Toiture déjà démoussée",
          prix: "sur devis",
          note: "Nous vérifions d'abord l'état de la couverture avant d'appliquer l'hydrofuge.",
        },
        {
          label: "Copropriété et tertiaire",
          prix: "sur devis",
          note: "Grandes surfaces et bâtiments collectifs, intervention sans emprise au sol.",
        },
      ]}
      prixNote="Le prix dépend de la surface, de la pente, de l'état de la couverture et du type de tuile. Nous établissons un devis gratuit après examen de votre toiture."
      faq={[
        {
          q: "Quelle différence entre démoussage et hydrofuge ?",
          r: "Le démoussage élimine mousses et lichens à la racine. L'hydrofuge, appliqué ensuite, rend la tuile déperlante et ralentit fortement le retour des mousses. Les deux sont complémentaires : l'un nettoie, l'autre protège.",
        },
        {
          q: "Combien de temps dure un hydrofuge de toiture ?",
          r: "Comptez 5 à 8 ans de protection selon l'exposition de la toiture : un versant nord, humide ou ombragé par des arbres s'use plus vite qu'un versant sud dégagé.",
        },
        {
          q: "Faut-il démousser avant d'appliquer un hydrofuge ?",
          r: "Oui, toujours. Appliqué sur une toiture encore sale, l'hydrofuge enferme l'humidité dans la tuile au lieu de la protéger, ce qui peut provoquer des éclats au moment du gel. Le démoussage préalable n'est pas une option.",
        },
        {
          q: "À quel moment de l'année appliquer un hydrofuge ?",
          r: "Il s'applique par temps sec, sur une toiture sèche et en dehors des périodes de gel. Nous planifions l'intervention en fonction de la météo pour garantir une bonne pénétration du produit.",
        },
        {
          q: "Est-ce possible sur une toiture en zone protégée (ABF) ?",
          r: "Oui, notre méthode est adaptée aux toitures en zone ABF. Un traitement qui ne modifie pas l'aspect de la toiture ne pose généralement pas de difficulté, tandis qu'un produit qui changerait la teinte nécessite l'avis de l'Architecte des Bâtiments de France. Nous vérifions votre situation avant d'établir le devis.",
        },
      ]}
      communes={[
        "Montpellier",
        "Castelnau-le-Lez",
        "Lattes",
        "Pérols",
        "Saint-Jean-de-Védas",
        "Juvignac",
        "Grabels",
        "Clapiers",
        "Jacou",
        "Le Crès",
        "Vendargues",
        "Mauguio",
        "Saint-Gély-du-Fesc",
        "Fabrègues",
        "Sète",
        "Lunel",
      ]}
      pageDetail={{
        href: "/prestations/traitement-toiture",
        label: "Voir notre offre complète de traitement de toiture",
      }}
      liensConnexes={[
        { href: "/demoussage-toiture-montpellier", label: "Démoussage de toiture à Montpellier" },
        { href: "/inspection-toiture-drone-montpellier", label: "Inspection de toiture par drone à Montpellier" },
      ]}
    />
  );
}
