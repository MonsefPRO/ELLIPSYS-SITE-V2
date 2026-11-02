import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « thermographie drone
 * panneaux photovoltaïques » : exploitants de centrales, de toitures et
 * d'ombrières. Maillée uniquement avec les autres pages cachées.
 */
const URL = "https://ellipsys-solutions.com/thermographie-panneaux-photovoltaiques-drone";
const TITRE = "Thermographie panneaux photovoltaïques par drone";
const DESCRIPTION =
  "Thermographie par drone de centrales, toitures et ombrières photovoltaïques : points chauds, diodes, strings et PID géolocalisés, rapport PDF sous 48 h.";

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
    images: [{ url: "/images/thermographie.png", width: 1680, height: 945, alt: "Principe de la thermographie de panneaux photovoltaïques par drone" }],
  },
};

export default function Page() {
  return (
    <LandingPage
      url={URL}
      service="thermographie"
      serviceLabel="Thermographie de panneaux photovoltaïques"
      h1Texte={TITRE}
      h1={
        <>
          Thermographie de panneaux photovoltaïques par drone :{" "}
          <span className="text-brand-orange-400">chaque défaut localisé</span>
        </>
      }
      accroche="Un module défectueux ne se voit pas à l'œil nu : il chauffe. Notre drone équipé d'une caméra thermique radiométrique survole vos rangées, repère les anomalies et les géolocalise module par module. Vous savez exactement où envoyer votre mainteneur."
      heroImage="/images/thermographie.webp"
      heroAlt="Illustration d'un drone réalisant une thermographie de panneaux photovoltaïques"
      badgeZone="Arc méditerranéen · Partout en France sur projet"
      pointsCles={[
        "Caméra radiométrique 640 × 512 px",
        "Anomalies géolocalisées module par module",
        "Rapport PDF annoté sous 48 h",
        "Télépilotes certifiés DGAC / EASA",
      ]}
      formTitre="Chiffrage de votre inspection sous 24 h"
      formSoustitre="Indiquez la puissance ou la surface du site et sa localisation."
      preuve={{
        image: "/images/thermographie-solaire.webp",
        alt: "Illustration du principe de la thermographie aérienne sur une centrale photovoltaïque",
        legende: "Le principe : la caméra thermique fait ressortir les modules en surchauffe, que le rapport localise ensuite sur le plan du site",
      }}
      benefices={[
        {
          titre: "Les conditions de mesure : soleil fort, ciel stable, vent limité",
          texte:
            "Un défaut chauffe d'autant plus que le courant est élevé, donc que l'ensoleillement est fort. La spécification technique IEC TS 62446-3, qui encadre la thermographie des modules et des centrales en extérieur, demande une irradiance d'au moins 600 W/m² dans le plan des modules pendant la mesure. S'y ajoutent un ciel dégagé et stable, sans passages nuageux qui feraient varier l'irradiance d'une image à l'autre, et un vent limité, qui refroidit les modules et efface les écarts. Le vol se programme donc autour de la mi-journée, centrale en production.",
        },
        {
          titre: "Des conditions vérifiées avant le vol",
          texte:
            "L'irradiance, l'état du ciel, le vent et l'heure du vol disent si une image est exploitable et si deux campagnes sont comparables : il est d'usage de les noter avec les résultats. Si les conditions ne sont pas réunies, le vol est décalé plutôt que de livrer des images douteuses. L'angle de prise de vue est choisi pour limiter les reflets du ciel sur le verre.",
        },
        {
          titre: "Cellule ou module en point chaud",
          texte:
            "Une cellule fissurée, dégradée ou ombragée ne produit plus et dissipe en chaleur l'énergie de ses voisines : elle ressort nettement plus chaude que le reste du module. Un module entier plus chaud que ses voisins signale un module qui ne débite plus. Ces défauts ne déclenchent pas toujours d'alarme en supervision.",
        },
        {
          titre: "Diode de dérivation et string déconnecté",
          texte:
            "Une bande d'un tiers de module uniformément plus chaude trahit en général une sous-chaîne court-circuitée par sa diode de dérivation. Quand tous les modules d'un même string ressortent plus chauds que leurs voisins, il s'agit le plus souvent d'un string déconnecté : connecteur ouvert, fusible ou câble en cause, et production perdue tant que personne ne le remarque.",
        },
        {
          titre: "PID, salissure localisée et connecteurs",
          texte:
            "Un échauffement diffus, en mosaïque de cellules, sur plusieurs modules d'un même string peut révéler une dégradation induite par le potentiel (PID), à confirmer par des mesures électriques. Un dépôt en bas de module ou une fiente crée un point chaud local. Un connecteur ou une boîte de jonction qui chauffe est un point à reprendre rapidement.",
        },
        {
          titre: "Ce que contient le rapport",
          texte:
            "Une synthèse des anomalies par type et par niveau de priorité, le plan du site avec chaque défaut localisé (rangée, table, position du module), l'image thermique et l'image visible de chaque anomalie avec l'écart de température relevé par rapport aux modules voisins, les conditions de mesure, et nos recommandations : vérification électrique, remplacement, nettoyage. Le tout dans un rapport PDF remis sous 48 h. Votre mainteneur va droit au module concerné.",
        },
        {
          titre: "Quand la programmer : mise en service et fin de garantie",
          texte:
            "À la mise en service, la thermographie fixe un état de référence et repère les défauts de montage ou de connectique avant la réception. Avant la fin de la garantie des modules ou de l'installation, elle documente les défauts tant qu'ils peuvent encore être pris en charge. Entre les deux, une campagne annuelle suit l'évolution des anomalies.",
        },
        {
          titre: "Après la grêle, avant une vente ou une expertise d'assurance",
          texte:
            "Après un épisode de grêle, certains dégâts ne se voient pas à l'œil nu : la thermographie localise les modules qui chauffent et documente l'état du site pour la déclaration. Avant une cession ou une expertise d'assurance, elle apporte une preuve datée de l'état des modules. Le référentiel APSAD D20, applicable depuis le 1er septembre 2026, fait de la thermographie un élément structurant ; celle des modules y est facultative par défaut, mais l'assureur peut l'exiger.",
        },
        {
          titre: "Distinguer la saleté d'un vrai défaut",
          texte:
            "Une fiente ou une plaque de poussière crée aussi un point chaud. Parce que nous nettoyons les panneaux, nous savons faire la différence, et nous pouvons enchaîner nettoyage puis thermographie pour ne relever que les vrais défauts.",
        },
        {
          titre: "Des milliers de modules par vol, dans un cadre réglementaire",
          texte:
            "Caméra thermique radiométrique 640 × 512 px, capteur visible haute définition et télémètre laser : la température est mesurée, pas seulement colorée. Là où une inspection à la caméra portable prend des jours, le drone couvre la centrale rangée par rangée, sans arrêt de production. Télépilotes certifiés DGAC, opérations conformes aux scénarios européens STS-01 et STS-02, déclarations et périmètre de sécurité pris en charge avec votre exploitant.",
        },
      ]}
      prix={[
        {
          label: "Centrale au sol",
          prix: "sur devis",
          note: "Selon la puissance installée, la surface et l'accès au site.",
        },
        {
          label: "Toiture ou ombrière",
          prix: "sur devis",
          note: "Bâtiments industriels, agricoles, tertiaires et parkings.",
        },
        {
          label: "Nettoyage + thermographie",
          prix: "sur devis groupé",
          note: "Les deux prestations dans le même déplacement, pour ne relever que les vrais défauts.",
        },
      ]}
      prixNote="Une thermographie annuelle coûte généralement bien moins que la production perdue par quelques strings hors service pendant des mois. Nous chiffrons votre site gratuitement, sous 24 h."
      faq={[
        {
          q: "Que détecte une thermographie de panneaux photovoltaïques par drone ?",
          r: "Les anomalies qui se traduisent par un échauffement : cellules fissurées ou dégradées (points chauds), modules entiers qui ne débitent plus, diodes de dérivation défaillantes, sous-chaînes ou strings entiers déconnectés, signes de dégradation induite par le potentiel (PID), connecteurs et boîtes de jonction qui chauffent, ainsi que les ombrages et les salissures localisées.",
        },
        {
          q: "Dans quelles conditions réaliser une thermographie photovoltaïque ?",
          r: "Centrale en production, par ciel dégagé et stable, avec un vent limité, autour de la mi-journée. La spécification technique IEC TS 62446-3 demande une irradiance d'au moins 600 W/m² dans le plan des modules pendant la mesure. Nous planifions le vol selon la météo, relevons l'irradiance mesurée sur site et décalons le vol si les conditions ne sont pas réunies.",
        },
        {
          q: "Pourquoi faut-il au moins 600 W/m² pour une thermographie de panneaux solaires ?",
          r: "Parce que l'échauffement d'un défaut dépend du courant qui traverse le module, donc de l'ensoleillement. Sous un ciel voilé ou un soleil bas, les écarts de température se réduisent et des défauts réels passent inaperçus. C'est pourquoi l'IEC TS 62446-3 fixe ce seuil dans le plan des modules : en hiver, il peut être atteint autour de midi par temps clair, mais la plage horaire utile est plus courte.",
        },
        {
          q: "Faut-il arrêter la centrale pendant l'inspection ?",
          r: "Non, au contraire : la centrale doit produire pour que les défauts apparaissent. Le drone survole les rangées sans intervention sur l'installation électrique.",
        },
        {
          q: "Comment repérer une diode de dérivation défectueuse ou un string déconnecté ?",
          r: "Par leur signature thermique. Une sous-chaîne court-circuitée par sa diode apparaît comme une bande d'environ un tiers du module, uniformément plus chaude. Un string déconnecté se repère à l'ensemble de ses modules, plus chauds que ceux des strings voisins. La thermographie localise le défaut ; la cause (diode, connecteur, fusible, câble) se confirme ensuite par une mesure électrique.",
        },
        {
          q: "Quand programmer une thermographie de centrale photovoltaïque ?",
          r: "À la mise en service, pour fixer un état de référence avant la réception ; chaque année pour une centrale en exploitation ; avant la fin de la garantie des modules ; après un épisode de grêle ou une tempête, pour documenter d'éventuels dommages ; et avant une vente ou une expertise d'assurance, pour disposer d'une preuve datée de l'état des modules.",
        },
        {
          q: "Peut-on faire une thermographie des panneaux solaires après la grêle ?",
          r: "Oui, et il vaut mieux ne pas attendre : certains dégâts, comme des cellules fissurées ou des connexions abîmées, ne se voient pas à l'œil nu, et les délais de déclaration courent. La thermographie localise les modules qui chauffent et documente l'état du site. Une fissure qui ne chauffe pas encore peut lui échapper : en cas de doute sur un lot de modules, une électroluminescence complète le diagnostic.",
        },
        {
          q: "La thermographie des modules est-elle exigée par l'assurance (APSAD D20) ?",
          r: "Pas systématiquement. Le référentiel APSAD D20, applicable depuis le 1er septembre 2026, prévoit la thermographie des parties courant continu et courant alternatif ; celle des modules est facultative par défaut, mais le prescripteur, souvent l'assureur, peut l'imposer. Le référentiel ne fixe pas de périodicité et recommande un contrôle annuel. Le compte rendu Q20 relève d'un opérateur certifié par le CNPP.",
        },
        {
          q: "Que contient le rapport de thermographie ?",
          r: "Une synthèse des anomalies par type et par priorité, le plan du site avec la localisation de chaque défaut, l'image thermique et l'image visible de chaque anomalie avec l'écart de température relevé, les conditions de mesure (irradiance mesurée, ciel, vent, heure) et nos recommandations. Il vous est remis au format PDF sous 48 h après le vol.",
        },
        {
          q: "Une salissure peut-elle fausser la thermographie ?",
          r: "Oui : une fiente ou une plaque de poussière crée un point chaud qui ressemble à un défaut de cellule. C'est pourquoi nous proposons d'enchaîner nettoyage et thermographie lors du même déplacement, pour ne relever que les défauts réels.",
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
        "et partout en France sur projet",
      ]}
      areaServed={[
        { "@type": "AdministrativeArea", name: "Occitanie" },
        { "@type": "AdministrativeArea", name: "Provence-Alpes-Côte d'Azur" },
        { "@type": "Country", name: "France" },
      ]}
      pageDetail={{
        href: "/prestations/thermographie",
        label: "Voir notre offre complète de thermographie par drone",
      }}
      liensConnexes={[
        { href: "/nettoyage-centrale-solaire", label: "Nettoyage de centrale solaire" },
        { href: "/nettoyage-panneaux-solaires-toiture-industrielle", label: "Panneaux solaires en toiture industrielle" },
        { href: "/nettoyage-ombrieres-photovoltaiques", label: "Nettoyage d'ombrières photovoltaïques" },
        { href: "/contrat-nettoyage-centrale-photovoltaique", label: "Contrat de nettoyage de centrale" },
        { href: "/nettoyage-centrale-agrivoltaique", label: "Centrales agrivoltaïques" },
        { href: "/blog/apsad-d20-assurance-photovoltaique-ce-qui-change", label: "APSAD D20 : ce que l'assureur exige" },
        { href: "/blog/thermographie-drone-hiver-bonne-saison", label: "Thermographie par drone en hiver" },
      ]}
    />
  );
}
