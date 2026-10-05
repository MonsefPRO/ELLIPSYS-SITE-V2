import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « nettoyage centrale
 * solaire » et « nettoyage centrale photovoltaïque » (ICP 1 : exploitants et
 * propriétaires de centrales au sol). Maillée uniquement avec les autres pages
 * cachées.
 */
const URL = "https://ellipsys-solutions.com/nettoyage-centrale-solaire";
const TITRE = "Nettoyage de centrale solaire et photovoltaïque";
const DESCRIPTION =
  "Nettoyage de centrales photovoltaïques au sol par robot : 1 200 m²/h, eau filtrée, sans arrêt de production. 83 000 m² déjà nettoyés. Devis 24 h.";

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
    images: [
      {
        url: "/images/avant-apres-fossat.jpg",
        width: 2404,
        height: 1350,
        alt: "Avant et après nettoyage de la centrale photovoltaïque au sol du Fossat",
      },
    ],
  },
};

export default function Page() {
  return (
    <LandingPage
      url={URL}
      service="solaire"
      serviceLabel="Nettoyage de centrale photovoltaïque"
      h1Texte={TITRE}
      h1={
        <>
          Nettoyage de centrale solaire et photovoltaïque,{" "}
          <span className="text-brand-orange-400">sans arrêt de production</span>
        </>
      }
      accroche="Pollen, poussière agricole, sable saharien, fientes : sur une centrale au sol, le dépôt s'installe rangée après rangée et la pluie ne suffit pas à l'éliminer. Notre robot nettoie vos tables à l'eau filtrée, sans détergent, pendant que la centrale continue d'injecter."
      heroImage="/images/robot-franchissement.jpg"
      heroAlt="Robot Ellipsys en train de nettoyer une table de modules d'une centrale photovoltaïque au sol"
      badgeZone="Arc méditerranéen · Partout en France sur projet"
      pointsCles={[
        "Robot jusqu'à 1 200 m² par heure",
        "Eau filtrée, sans détergent",
        "Équipe habilitée B0-H0-H0V",
        "83 000 m² de centrales déjà nettoyés",
      ]}
      formTitre="Chiffrage de votre centrale sous 24 h"
      formSoustitre="Indiquez la surface ou la puissance du site et sa localisation."
      preuve={{
        image: "/images/avant-apres-fossat.jpg",
        alt: "Avant et après nettoyage des modules de la centrale photovoltaïque au sol du Fossat",
        legende: "Centrale du Fossat (Ariège), 30 000 m² nettoyés en septembre 2026 : les mêmes modules avant et après",
        badges: ["AVANT", "APRÈS"],
      }}
      referencesTitre="Nos dernières centrales nettoyées"
      references={[
        {
          chiffre: "30 000 m²",
          titre: "Centrale au sol du Fossat",
          lieu: "Ariège (09)",
          texte:
            "Trois hectares de modules couverts d'un voile d'encrassement. Deux pilotes ont traité l'ensemble des rangées en septembre 2026.",
        },
        {
          chiffre: "31 000 m²",
          titre: "Centrale au sol de Vitry",
          lieu: "Saône-et-Loire (71)",
          texte:
            "Repérage par drone pour cartographier les accès entre rangées, puis nettoyage par robot, sans interruption d'exploitation.",
        },
        {
          chiffre: "22 000 m²",
          titre: "Centrale au sol de Montchanin",
          lieu: "Saône-et-Loire (71)",
          texte:
            "Enchaînée avec Vitry dans la même tournée pour le même exploitant : plus de 50 000 m² traités en un seul déplacement.",
        },
      ]}
      referencesLien={{ href: "/realisations", label: "Voir les photos avant et après de nos chantiers" }}
      benefices={[
        {
          titre: "La centrale continue de produire",
          texte:
            "Le robot avance rangée par rangée pendant que le reste du site injecte. Seul le périmètre de sécurité immédiat est neutralisé, en coordination avec votre exploitant et votre mainteneur.",
        },
        {
          titre: "1 200 m² par heure, une brosse de 1,20 m",
          texte:
            "Là où un opérateur à la perche traite 80 à 120 m² par heure, le robot télécommandé en traite jusqu'à 1 200 et franchit des pentes jusqu'à 25°. Sur plusieurs hectares, le chantier se compte en jours, pas en semaines.",
        },
        {
          titre: "Eau filtrée, sans détergent ni haute pression",
          texte:
            "Brosses rotatives souples et débit maîtrisé à 7 litres par minute : le verre n'est pas rayé, sa couche antireflet n'est pas agressée, et l'intervention reste compatible avec les garanties des fabricants de modules.",
        },
        {
          titre: "Habilités, préparés, assurés",
          texte:
            "Équipe habilitée B0-H0-H0V pour travailler à proximité des installations électriques, plan de prévention établi avec l'exploitant avant chaque chantier, RC professionnelle et RC aéronautique.",
        },
        {
          titre: "Un repérage par drone avant le robot",
          texte:
            "Un vol de repérage cartographie les accès, l'espacement des structures et les zones à éviter. Sur demande, la thermographie par drone repère aussi les modules en point chaud pendant le même déplacement.",
        },
        {
          titre: "Plusieurs centrales, une seule tournée",
          texte:
            "Regrouper les sites d'un même portefeuille mutualise la mobilisation des équipes et du matériel. C'est ainsi que nous avons enchaîné Vitry et Montchanin pour le même exploitant.",
        },
      ]}
      prix={[
        {
          label: "Centrale au sol",
          prix: "sur devis au m²",
          note: "Selon la surface, l'accès entre les rangées, l'approvisionnement en eau et le niveau d'encrassement.",
        },
        {
          label: "Contrat annuel",
          prix: "sur devis",
          note: "Un à deux passages par an selon l'environnement du site : agricole, littoral ou routier.",
        },
        {
          label: "Portefeuille multi-sites",
          prix: "sur devis groupé",
          note: "Plusieurs centrales regroupées dans une même tournée, avec un planning annuel par site.",
        },
      ]}
      prixNote="Pour un exploitant ou un asset manager, la bonne question n'est pas le prix au mètre carré mais ce qu'il rapporte en énergie récupérée. Nous partons de vos données de production pour vérifier que l'intervention se justifie. Si elle ne se justifie pas, nous vous le disons."
      faq={[
        {
          q: "À quelle fréquence faut-il nettoyer une centrale solaire au sol ?",
          r: "Il n'existe pas de fréquence universelle : tout dépend de l'environnement immédiat. Une centrale entourée de cultures (poussières de semis et de récolte), proche du littoral (sel) ou d'un axe routier s'encrasse plus vite qu'un site isolé. Sur l'arc méditerranéen, les épisodes de sable saharien s'ajoutent au pollen du printemps. Un à deux passages par an couvrent la plupart des sites, et le bon rythme se déduit de l'écart entre la production attendue et la production réelle.",
        },
        {
          q: "Faut-il arrêter la centrale pendant le nettoyage ?",
          r: "Non. Le robot travaille rangée par rangée et seul le périmètre de sécurité immédiat est neutralisé. Le reste de la centrale continue d'injecter pendant toute la durée de l'intervention.",
        },
        {
          q: "Robot ou nettoyage manuel : quelle différence sur une centrale ?",
          r: "La cadence d'abord : 80 à 120 m² par heure pour un opérateur à la perche, jusqu'à 1 200 m² par heure pour le robot. La régularité ensuite : la pression de brossage et le débit d'eau restent constants d'un bout à l'autre du site. Enfin, personne ne marche sur les structures ni ne travaille au contact prolongé des modules.",
        },
        {
          q: "Le nettoyage peut-il abîmer les modules ou faire perdre la garantie ?",
          r: "Pas avec notre méthode : brosses rotatives souples, eau filtrée, aucun détergent et aucune haute pression. Ce sont précisément les pratiques que les fabricants de modules déconseillent (produits chimiques, abrasifs, nettoyeurs haute pression) que nous excluons.",
        },
        {
          q: "Comment mesurer le gain de production après le nettoyage ?",
          r: "Avec vos propres données de supervision. Comparez la production des jours qui suivent l'intervention à celle des jours qui la précèdent, à ensoleillement comparable, ou rapportez-la au rayonnement mesuré par la station météo du site. C'est cette mesure qui chiffre le gain réel, pas une estimation de catalogue.",
        },
        {
          q: "Le nettoyage reste-t-il rentable avec la multiplication des prix négatifs ?",
          r: "Il n'agit pas sur le prix de marché, il agit sur l'énergie produite pendant les heures qui restent valorisées. La France a connu 407 heures de prix négatifs au premier semestre 2026, dont 65 % entre 11h et 16h, et le seuil d'arrêt obligatoire descend à 5 MWc au 1er décembre 2026 puis à 1 MWc au 1er mars 2027. Quand les heures rentables se raréfient, chaque kilowattheure perdu par encrassement pendant ces heures pèse plus lourd.",
        },
        {
          q: "Intervenez-vous en dehors de l'Occitanie ?",
          r: "Oui. Basés à Montpellier, nous intervenons en priorité sur l'arc méditerranéen, de Perpignan à Marseille, et partout en France sur projet. Nos dernières centrales nettoyées se trouvent en Ariège et en Saône-et-Loire.",
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
        "Ariège",
        "Tarn",
        "Aveyron",
        "Lozère",
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
        { href: "/nettoyage-ombrieres-photovoltaiques", label: "Nettoyage d'ombrières photovoltaïques" },
        { href: "/nettoyage-panneaux-solaires-montpellier", label: "Nettoyage de panneaux solaires à Montpellier" },
      ]}
    />
  );
}
