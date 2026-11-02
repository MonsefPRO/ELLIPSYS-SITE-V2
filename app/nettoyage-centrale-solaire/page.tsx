import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « nettoyage centrale
 * solaire », « nettoyage parc solaire », « nettoyage ferme solaire » et
 * « nettoyage centrale photovoltaïque » (ICP 1 : exploitants et propriétaires
 * de centrales au sol). Maillée uniquement avec les autres pages cachées.
 */
const URL = "https://ellipsys-solutions.com/nettoyage-centrale-solaire";
const TITRE = "Nettoyage de centrale, parc et ferme solaire";
/** Texte du H1 visible, inchangé (JSON-LD et fil d'Ariane) */
const H1_TEXTE = "Nettoyage de centrale solaire et photovoltaïque";
const DESCRIPTION =
  "Nettoyage de centrale, parc ou ferme solaire par robot ou drone : eau filtrée, sans arrêt de production. 143 000 m² déjà nettoyés. Devis sous 24 h.";

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
        alt: "Avant et après nettoyage de la centrale photovoltaïque au sol de Lapeyrouse-Fossat",
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
      h1Texte={H1_TEXTE}
      h1={
        <>
          Nettoyage de centrale solaire et photovoltaïque,{" "}
          <span className="text-brand-orange-400">sans arrêt de production</span>
        </>
      }
      accroche="Pollen, poussière agricole, sable saharien, fientes : sur une centrale au sol, un parc ou une ferme solaire, le dépôt s'installe rangée après rangée et la pluie ne suffit pas à l'éliminer. Notre robot, relayé par le drone là où il ne passe pas, nettoie vos tables à l'eau filtrée, sans détergent, pendant que la centrale continue d'injecter."
      heroImage="/images/robot-franchissement.jpg"
      heroAlt="Robot Ellipsys en train de nettoyer une table de modules d'une centrale photovoltaïque au sol"
      badgeZone="Arc méditerranéen · Partout en France sur projet"
      pointsCles={[
        "Robot jusqu'à 1 200 m² par heure",
        "Eau filtrée, sans détergent",
        "Équipe habilitée B0-H0-H0V",
        "143 000 m² de centrales déjà nettoyés",
      ]}
      formTitre="Chiffrage de votre centrale ou parc solaire sous 24 h"
      formSoustitre="Indiquez la surface ou la puissance du site et sa localisation."
      preuve={{
        image: "/images/avant-apres-fossat.jpg",
        alt: "Avant et après nettoyage des modules de la centrale photovoltaïque au sol de Lapeyrouse-Fossat",
        legende: "Centrale de Lapeyrouse-Fossat (Haute-Garonne), 30 000 m² nettoyés en septembre 2026 : les mêmes modules avant et après",
        badges: ["AVANT", "APRÈS"],
      }}
      referencesTitre="Nos derniers parcs et fermes solaires nettoyés"
      references={[
        {
          chiffre: "60 000 m²",
          titre: "Centrale au sol de Miremont",
          lieu: "Haute-Garonne (31)",
          texte:
            "Six hectares de modules au sud de Toulouse. Deux pilotes ont nettoyé l'ensemble des rangées au robot en octobre 2026.",
        },
        {
          chiffre: "30 000 m²",
          titre: "Centrale au sol de Lapeyrouse-Fossat",
          lieu: "Haute-Garonne (31)",
          texte:
            "Trois hectares de modules couverts d'un voile d'encrassement. Deux pilotes ont traité l'ensemble des rangées en septembre 2026.",
        },
        {
          chiffre: "53 000 m²",
          titre: "Centrales au sol de Vitry et Montchanin",
          lieu: "Saône-et-Loire (71)",
          texte:
            "Deux centrales du même exploitant enchaînées dans une seule tournée : repérage par drone des accès entre rangées, puis nettoyage par robot, sans interruption d'exploitation.",
        },
      ]}
      referencesLien={{ href: "/realisations", label: "Voir les photos avant et après de nos chantiers" }}
      benefices={[
        {
          titre: "Étape 1 · Repérage du parc solaire",
          texte:
            "Un vol de drone cartographie le site : accès, entraxe entre les rangées, hauteur et inclinaison des tables, relief, point d'eau et zones à éviter. Ce relevé fixe la méthode, le phasage et la durée du chantier. Sur demande, une thermographie repère aussi les modules en point chaud pendant le même déplacement.",
        },
        {
          titre: "Étape 2 · Plan de prévention avec l'exploitant",
          texte:
            "Avant le premier coup de brosse, un plan de prévention est établi avec l'exploitant et son mainteneur : interlocuteurs, circulation, consignes électriques, conduite à tenir en cas d'incident. Équipe habilitée B0-H0-H0V, RC professionnelle et RC aéronautique.",
        },
        {
          titre: "Étape 3 · Nettoyage de la ferme solaire par zones, sans arrêt de production",
          texte:
            "Le site est traité zone après zone. Le robot avance rangée par rangée pendant que le reste de la centrale injecte : seul le périmètre de sécurité immédiat est neutralisé. L'ordre des zones tient compte de l'accès de la citerne et des contraintes du site, comme le pâturage sur un parc agrivoltaïque.",
        },
        {
          titre: "Étape 4 · Contrôle de chaque zone",
          texte:
            "Une zone n'est close qu'après un contrôle visuel des tables traitées, et les reprises se font tant que l'équipe est sur place. Ce qui sort du nettoyage est signalé à l'exploitant : module fissuré, câble mal fixé, végétation qui ombre une rangée.",
        },
        {
          titre: "Étape 5 · Rapport avant / après",
          texte:
            "En fin de chantier, un rapport d'intervention : zones et surfaces traitées, dates, photos avant et après des mêmes modules, observations. Une pièce pour votre carnet de maintenance, et le point de départ pour mesurer le gain sur vos propres données de production.",
        },
        {
          titre: "Robot ou drone : l'entraxe, la hauteur et la pente décident",
          texte:
            "Le robot travaille sur les tables accessibles depuis le sol, jusqu'à 25° d'inclinaison, et l'équipe doit pouvoir circuler entre les rangées pour le déplacer. Quand l'entraxe est trop serré, les structures surélevées (agrivoltaïsme) ou la pente trop forte, le drone prend le relais, sans nacelle ni engin lourd. Le repérage tranche.",
        },
        {
          titre: "1 200 m² par heure, une brosse de 1,20 m",
          texte:
            "Là où un opérateur à la perche traite 80 à 120 m² par heure, le robot télécommandé en traite jusqu'à 1 200. Sur plusieurs hectares, le chantier se compte en jours, pas en semaines, et la pression de brossage reste la même d'un bout à l'autre du site.",
        },
        {
          titre: "Eau filtrée, sans détergent ni haute pression",
          texte:
            "Brosses rotatives souples et débit maîtrisé à 7 litres par minute, soit environ 420 litres par heure : le verre et sa couche antireflet sont préservés, et l'intervention reste compatible avec les garanties des fabricants. L'eau est filtrée, et déminéralisée si l'eau disponible est trop calcaire, pour ne pas laisser de traces. Point d'eau du site, borne ou citerne d'appoint : l'approvisionnement est calé dès le repérage.",
        },
        {
          titre: "Trackers et modules bifaciaux",
          texte:
            "Sur un parc à trackers, la position des rangées se règle avec l'exploitant : tables mises à plat pendant le passage du robot, puis rendues au suivi solaire, zone par zone. Sur des modules bifaciaux, la face arrière, tournée vers le sol, s'encrasse en général bien moins vite que la face avant ; son état est vérifié au repérage et son traitement se décide au cas par cas.",
        },
        {
          titre: "Une fréquence calée sur le site, une tournée pour plusieurs sites",
          texte:
            "Un à deux passages par an couvrent la plupart des centrales, davantage près des cultures, du littoral ou d'un axe routier. Regrouper les sites d'un même portefeuille mutualise la mobilisation des équipes et du matériel : c'est ainsi que nous avons enchaîné Vitry et Montchanin pour le même exploitant.",
        },
      ]}
      prix={[
        {
          label: "Centrale ou ferme solaire",
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
          q: "Comment se déroule le nettoyage d'un parc solaire ?",
          r: "En cinq temps : repérage par drone (accès, entraxe, hauteur et inclinaison des tables, point d'eau), plan de prévention avec l'exploitant, nettoyage zone par zone sans arrêter la centrale, contrôle de chaque zone, puis remise d'un rapport d'intervention avec photos avant et après.",
        },
        {
          q: "À quelle fréquence faut-il nettoyer une centrale ou un parc solaire au sol ?",
          r: "Il n'existe pas de fréquence universelle : tout dépend de l'environnement immédiat. Une centrale entourée de cultures (poussières de semis et de récolte), proche du littoral (sel) ou d'un axe routier s'encrasse plus vite qu'un site isolé. Sur l'arc méditerranéen, les épisodes de sable saharien s'ajoutent au pollen du printemps. Un à deux passages par an couvrent la plupart des sites, et le bon rythme se déduit de l'écart entre la production attendue et la production réelle.",
        },
        {
          q: "Comment nettoyer une ferme solaire équipée de trackers ?",
          r: "En coordonnant la position des rangées avec l'exploitant, qui garde la main sur le pilotage des trackers. Les tables sont mises à plat pendant le passage du robot, puis rendues au suivi solaire, zone par zone, pour que le reste du parc continue de suivre le soleil. Le repérage vérifie la hauteur des tables à plat et l'espace entre les rangées.",
        },
        {
          q: "Faut-il nettoyer la face arrière des panneaux bifaciaux ?",
          r: "Rarement au même rythme que la face avant. Tournée vers le sol, la face arrière s'encrasse nettement moins vite d'après les études de terrain, sans rester propre pour autant, surtout sur tables fixes. L'intérêt de la nettoyer dépend de la poussière soulevée au sol et de la part de production venant de l'arrière : nous vérifions son état au repérage et ne proposons de la traiter que si l'écart le justifie.",
        },
        {
          q: "Quelle eau utiliser pour nettoyer une centrale photovoltaïque ?",
          r: "Une eau propre, sans additif et peu minéralisée, à basse pression, comme le recommandent les guides d'entretien des fabricants et des exploitants : une eau très calcaire laisse des dépôts blancs en séchant. Nous utilisons une eau filtrée, déminéralisée si l'eau disponible est trop dure, et prévoyons l'approvisionnement dès le repérage.",
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
          r: "Oui. Basés à Montpellier, nous intervenons en priorité sur l'arc méditerranéen, de Perpignan à Marseille, et partout en France sur projet. Nos dernières centrales nettoyées se trouvent en Haute-Garonne et en Saône-et-Loire.",
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
        { href: "/nettoyage-panneaux-solaires-toiture-industrielle", label: "Panneaux solaires en toiture industrielle" },
        { href: "/thermographie-panneaux-photovoltaiques-drone", label: "Thermographie de panneaux photovoltaïques" },
        { href: "/nettoyage-centrale-photovoltaique-occitanie", label: "Centrales en Occitanie" },
        { href: "/contrat-nettoyage-centrale-photovoltaique", label: "Contrat de nettoyage de centrale" },
        { href: "/nettoyage-centrale-agrivoltaique", label: "Centrales agrivoltaïques" },
        { href: "/nettoyage-centrale-photovoltaique-paca", label: "Centrales en PACA" },
        { href: "/nettoyage-robotise-centrale-photovoltaique", label: "Nettoyage robotisé de centrale" },
        { href: "/blog/nettoyer-panneaux-solaires-karcher-eau-osmosee-methode", label: "Quelle eau pour nettoyer des panneaux solaires" },
        { href: "/blog/nettoyage-centrale-solaire-saone-et-loire", label: "Chantier de centrales en Saône-et-Loire" },
      ]}
    />
  );
}
