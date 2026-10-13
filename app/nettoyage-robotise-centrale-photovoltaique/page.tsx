import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « robot nettoyage
 * centrale photovoltaïque » : la SERP ne montre que des vendeurs de robots,
 * aucun prestataire. Angle : faire intervenir un robot opéré plutôt que
 * l'acheter. Ne jamais citer la marque du robot. Maillée uniquement avec les
 * autres pages cachées.
 */
const URL = "https://ellipsys-solutions.com/nettoyage-robotise-centrale-photovoltaique";
const TITRE = "Nettoyage robotisé de centrale photovoltaïque";
const DESCRIPTION =
  "Nettoyage de centrales photovoltaïques par robot, opéré par nos pilotes : sans achat de matériel ni formation, sans arrêt de production. Devis sous 24 h.";

export const metadata: Metadata = {
  title: TITRE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Ellipsys Solutions",
    title: TITRE,
    description: DESCRIPTION,
    url: URL,
    images: [{ url: "/images/robot-produit.jpg", width: 2048, height: 2048, alt: "Robot de nettoyage de panneaux photovoltaïques Ellipsys" }],
  },
};

export default function Page() {
  return (
    <LandingPage
      url={URL}
      service="solaire"
      serviceLabel="Nettoyage robotisé de centrale photovoltaïque"
      h1Texte={TITRE}
      h1={
        <>
          Nettoyage robotisé de centrale photovoltaïque,{" "}
          <span className="text-brand-orange-400">sans acheter le robot</span>
        </>
      }
      accroche="Un robot de nettoyage fait gagner un temps considérable sur une centrale au sol. L'acheter, en revanche, suppose de le transporter, de l'entretenir, de former des opérateurs et de gérer l'eau sur chaque site. Nous venons avec notre robot et notre propre équipe de pilotes."
      heroImage="/images/robot-produit.jpg"
      heroAlt="Robot de nettoyage Ellipsys posé sur une rangée de panneaux photovoltaïques"
      badgeZone="Arc méditerranéen · Partout en France sur projet"
      pointsCles={[
        "Robot opéré par nos pilotes",
        "Jusqu'à 1 200 m² par heure",
        "Aucun investissement matériel",
        "Devis gratuit sous 24 h",
      ]}
      formTitre="Chiffrage de votre centrale sous 24 h"
      formSoustitre="Indiquez la puissance ou la surface du site et sa localisation."
      preuve={{
        image: "/images/robot-franchissement.jpg",
        alt: "Robot de nettoyage Ellipsys progressant sur une table de panneaux d'une centrale au sol",
        legende: "Notre robot en intervention sur une centrale au sol : la partie nettoyée est nettement visible derrière lui",
      }}
      referencesTitre="Ce que le robot a déjà nettoyé"
      references={[
        {
          chiffre: "30 000 m²",
          titre: "Centrale au sol",
          lieu: "Occitanie",
          texte: "Deux pilotes, l'ensemble des rangées traité en septembre 2026.",
        },
        {
          chiffre: "31 000 m²",
          titre: "Centrale de Vitry",
          lieu: "Saône-et-Loire (71)",
          texte: "Repérage par drone, puis nettoyage par robot sans interruption d'exploitation.",
        },
        {
          chiffre: "22 000 m²",
          titre: "Centrale de Montchanin",
          lieu: "Saône-et-Loire (71)",
          texte: "Enchaînée avec Vitry dans la même tournée pour le même exploitant.",
        },
      ]}
      referencesLien={{ href: "/realisations", label: "Voir les photos avant et après de nos chantiers" }}
      benefices={[
        {
          titre: "La cadence d'un robot, sans l'investissement",
          texte:
            "Là où un opérateur à la perche traite 80 à 120 m² par heure, notre robot en traite jusqu'à 1 200. Vous bénéficiez de cette cadence sans immobiliser de capital ni amortir une machine qui ne sert que quelques jours par an sur chaque site.",
        },
        {
          titre: "Pas de logistique à gérer",
          texte:
            "Transport du robot d'un site à l'autre, approvisionnement en eau, entretien de la machine, stockage entre deux campagnes : tout cela reste chez nous.",
        },
        {
          titre: "Des pilotes qui connaissent la machine",
          texte:
            "Le robot est télécommandé par notre propre équipe de pilotes, habilitée B0-H0-H0V pour travailler à proximité des installations électriques. Pas d'opérateur à former, pas de risque de mauvaise manipulation sur vos modules.",
        },
        {
          titre: "Les caractéristiques qui comptent",
          texte:
            "Brosse rotative souple de 1,20 m, franchissement de pentes jusqu'à 25°, débit d'eau maîtrisé à 7 litres par minute, aucun détergent : le verre n'est pas rayé et les garanties des fabricants sont préservées.",
        },
        {
          titre: "Le drone en complément",
          texte:
            "Un vol de repérage cartographie les accès et l'espacement des rangées avant l'intervention. Là où le robot ne passe pas, le drone prend le relais, et une thermographie peut être faite dans le même déplacement.",
        },
        {
          titre: "La centrale continue de produire",
          texte:
            "Le robot avance rangée par rangée pendant que le reste du site injecte. Seul le périmètre de sécurité immédiat est neutralisé.",
        },
      ]}
      prix={[
        {
          label: "Intervention ponctuelle",
          prix: "sur devis au m²",
          note: "Selon la surface, l'accès entre les rangées, l'eau disponible et l'encrassement.",
        },
        {
          label: "Contrat annuel",
          prix: "sur devis",
          note: "Un à deux passages par an, planifiés à l'avance.",
        },
        {
          label: "Portefeuille multi-sites",
          prix: "sur devis groupé",
          note: "Plusieurs centrales dans une même tournée du robot.",
        },
      ]}
      prixNote="Si vous hésitez entre acheter un robot et faire appel à un prestataire, nous pouvons chiffrer votre cas : nombre de sites, surfaces, fréquence. La comparaison se fait sur des chiffres, pas sur des arguments."
      faq={[
        {
          q: "Vaut-il mieux acheter un robot de nettoyage ou faire appel à un prestataire ?",
          r: "Tout dépend du volume. L'achat se justifie surtout pour un exploitant qui dispose d'un grand parc concentré et d'équipes disponibles pour opérer la machine. Pour la plupart des portefeuilles, le prestataire évite l'investissement, la formation, le transport et l'entretien, et le robot ne reste pas inutilisé entre deux campagnes.",
        },
        {
          q: "Quelle surface un robot peut-il nettoyer par jour ?",
          r: "Notre robot traite jusqu'à 1 200 m² par heure dans de bonnes conditions d'accès. Sur une centrale de plusieurs hectares, l'intervention se compte en jours plutôt qu'en semaines, selon l'accès entre les rangées et l'approvisionnement en eau.",
        },
        {
          q: "Le robot peut-il abîmer les modules ?",
          r: "Non, avec un usage correct : brosse rotative souple, débit d'eau maîtrisé, aucun détergent ni haute pression, et des pilotes qui connaissent la machine. Ce sont les pratiques que les fabricants de modules recommandent.",
        },
        {
          q: "Le robot fonctionne-t-il sur toutes les centrales ?",
          r: "Sur la plupart des centrales au sol, ombrières et grandes toitures. Il franchit des pentes jusqu'à 25°. Un repérage par drone permet de vérifier l'accès et l'espacement des rangées avant de confirmer la méthode.",
        },
        {
          q: "Faut-il arrêter la centrale pendant le nettoyage robotisé ?",
          r: "Non. Le robot travaille rangée par rangée et seul le périmètre de sécurité immédiat est neutralisé. Le reste de la centrale continue d'injecter.",
        },
      ]}
      zonesTitre="Nous intervenons notamment dans ces régions"
      communes={["Occitanie", "Provence-Alpes-Côte d'Azur", "Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Nouvelle-Aquitaine", "et partout en France sur projet"]}
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
        { href: "/contrat-nettoyage-centrale-photovoltaique", label: "Contrat de nettoyage de centrale" },
        { href: "/nettoyage-centrale-photovoltaique-paca", label: "Centrales en PACA" },
      ]}
    />
  );
}
