import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « nettoyage panneaux
 * agrivoltaïsme » / « nettoyage centrale agrivoltaïque » : exploitants et
 * développeurs de centrales agrivoltaïques. Maillée uniquement avec les autres
 * pages cachées.
 */
const URL = "https://ellipsys-solutions.com/nettoyage-centrale-agrivoltaique";
const TITRE = "Nettoyage de centrale agrivoltaïque";
const DESCRIPTION =
  "Nettoyage de panneaux en agrivoltaïsme : sans produit chimique au-dessus des cultures et des animaux, planifié avec l'exploitation agricole. Devis 24 h.";

export const metadata: Metadata = {
  title: TITRE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
};

export default function Page() {
  return (
    <LandingPage
      url={URL}
      service="solaire"
      serviceLabel="Nettoyage de centrale agrivoltaïque"
      h1Texte={TITRE}
      h1={
        <>
          Nettoyage de centrale agrivoltaïque,{" "}
          <span className="text-brand-orange-400">sans rien ajouter aux cultures</span>
        </>
      }
      accroche="Sous les panneaux, il y a une production agricole. Le nettoyage d'une centrale agrivoltaïque doit donc préserver les cultures, les animaux et le calendrier de l'exploitant. Nous intervenons sans produit chimique, au moment qui gêne le moins."
      heroImage="/images/robot-franchissement.jpg"
      heroAlt="Robot de nettoyage Ellipsys progressant sur une table de panneaux photovoltaïques"
      badgeZone="Arc méditerranéen · Partout en France sur projet"
      pointsCles={[
        "Aucun produit chimique",
        "Planifié avec l'exploitant agricole",
        "Robot et drone selon les structures",
        "Devis gratuit sous 24 h",
      ]}
      formTitre="Chiffrage de votre centrale sous 24 h"
      formSoustitre="Indiquez la puissance, le type de structures et la production agricole en place."
      preuve={{
        image: "/images/robot-brosse-action.jpg",
        alt: "Robot de nettoyage Ellipsys avec sa brosse rotative sur des panneaux photovoltaïques",
        legende: "Notre robot en intervention : brosse rotative souple, aucun produit chimique",
      }}
      benefices={[
        {
          titre: "Rien qui ne retombe sur les cultures",
          texte:
            "Aucun détergent ni produit chimique : l'eau qui ruisselle des panneaux ne contient que la poussière retirée. Les cultures, les prairies et les animaux en dessous ne reçoivent rien d'autre.",
        },
        {
          titre: "Un encrassement plus rapide qu'ailleurs",
          texte:
            "Poussières de travail du sol et de récolte, pollens, fientes d'oiseaux attirés par les cultures : une centrale agrivoltaïque s'encrasse plus vite qu'une centrale au sol classique, et ses panneaux, parfois surélevés, sont plus difficiles d'accès.",
        },
        {
          titre: "Calé sur le calendrier agricole",
          texte:
            "Nous planifions l'intervention avec l'exploitant agricole : après une récolte, hors périodes de traitement ou de présence du troupeau, quand le passage gêne le moins la production.",
        },
        {
          titre: "La bonne méthode pour chaque structure",
          texte:
            "Tables fixes, structures surélevées, trackers : un repérage par drone permet de choisir entre le robot et le drone selon la hauteur, l'espacement et l'accès, avant toute intervention.",
        },
        {
          titre: "La production électrique continue",
          texte:
            "Le nettoyage se fait par zones, sans arrêt de la centrale. Seul le périmètre de sécurité immédiat est neutralisé, en coordination avec l'exploitant et le mainteneur.",
        },
        {
          titre: "Habilités et préparés",
          texte:
            "Équipe habilitée B0-H0-H0V, télépilotes certifiés DGAC, plan de prévention établi avant chaque chantier avec l'exploitant de la centrale et l'exploitant agricole.",
        },
      ]}
      prix={[
        {
          label: "Centrale agrivoltaïque",
          prix: "sur devis",
          note: "Selon la surface, la hauteur des structures, l'accès et la production agricole en place.",
        },
        {
          label: "Contrat annuel",
          prix: "sur devis",
          note: "Passages calés sur le calendrier agricole et la saison de production.",
        },
        {
          label: "Nettoyage + thermographie",
          prix: "sur devis groupé",
          note: "Les deux prestations dans le même déplacement.",
        },
      ]}
      prixNote="Un repérage préalable, souvent à partir de photos et du plan du site, nous permet de choisir la bonne méthode et de chiffrer juste."
      faq={[
        {
          q: "Pourquoi une centrale agrivoltaïque s'encrasse-t-elle plus vite ?",
          r: "Parce que l'activité agricole sous les panneaux remet en permanence des particules en suspension : travail du sol, récoltes, pollens, et fientes d'oiseaux attirés par les cultures ou les grains. Sur l'arc méditerranéen, le sable saharien s'ajoute plusieurs fois par an.",
        },
        {
          q: "Le nettoyage présente-t-il un risque pour les cultures ou les animaux ?",
          r: "Non, avec notre méthode : aucun détergent ni produit chimique. Seule de l'eau ruisselle des panneaux, chargée de la poussière retirée. L'intervention est en plus planifiée pour éviter les périodes sensibles pour l'exploitation.",
        },
        {
          q: "Comment nettoyer des panneaux surélevés ?",
          r: "Tout dépend de la structure. Un repérage par drone permet de déterminer si le robot peut travailler sur les tables ou si l'intervention doit se faire par drone, selon la hauteur, l'espacement et l'accès. Nous confirmons la méthode avant le devis.",
        },
        {
          q: "Quand nettoyer une centrale agrivoltaïque ?",
          r: "En général après une récolte, quand la poussière est retombée, et avant le printemps pour la saison de forte production. Le calendrier exact se fixe avec l'exploitant agricole et l'exploitant de la centrale.",
        },
        {
          q: "Qui commande le nettoyage : l'agriculteur ou l'exploitant de la centrale ?",
          r: "Cela dépend du contrat qui les lie. Le plus souvent, c'est l'exploitant de la centrale qui en a la charge, en coordination avec l'exploitant agricole. Nous travaillons avec les deux pour planifier l'intervention.",
        },
      ]}
      zonesTitre="Nous intervenons notamment dans ces départements"
      communes={[
        "Hérault",
        "Gard",
        "Aude",
        "Pyrénées-Orientales",
        "Bouches-du-Rhône",
        "Vaucluse",
        "Haute-Garonne",
        "Gers",
        "Tarn",
        "et partout en France sur projet",
      ]}
      areaServed={[
        { "@type": "AdministrativeArea", name: "Occitanie" },
        { "@type": "AdministrativeArea", name: "Provence-Alpes-Côte d'Azur" },
        { "@type": "Country", name: "France" },
      ]}
      pageDetail={{
        href: "/prestations/nettoyage-solaire",
        label: "Voir notre offre complète de nettoyage solaire",
      }}
      liensConnexes={[
        { href: "/nettoyage-centrale-solaire", label: "Nettoyage de centrale solaire" },
        { href: "/nettoyage-panneaux-solaires-hangar-agricole", label: "Panneaux sur hangar agricole" },
        { href: "/contrat-nettoyage-centrale-photovoltaique", label: "Contrat de nettoyage de centrale" },
      ]}
    />
  );
}
