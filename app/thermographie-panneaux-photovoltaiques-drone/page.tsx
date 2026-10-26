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
  "Thermographie par drone de centrales, toitures et ombrières photovoltaïques : points chauds, diodes et strings géolocalisés, rapport sous 48 h.";

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
          titre: "Ce que la thermographie révèle",
          texte:
            "Points chauds sur cellules fissurées ou dégradées, diodes de dérivation défaillantes, strings entiers hors service, modules cassés, connexions qui chauffent : autant de pertes de production qui ne déclenchent pas toujours d'alarme en supervision.",
        },
        {
          titre: "Des milliers de modules en un vol",
          texte:
            "Là où une inspection manuelle à la caméra portable prend des jours, le drone couvre la centrale rangée par rangée en une seule intervention, sans arrêt de production.",
        },
        {
          titre: "Un rapport directement exploitable",
          texte:
            "Chaque anomalie est géolocalisée, photographiée en thermique et en visible, et annotée dans un rapport PDF remis sous 48 h. Votre mainteneur va droit au module concerné.",
        },
        {
          titre: "Distinguer la saleté d'un vrai défaut",
          texte:
            "Une fiente ou une plaque de poussière crée aussi un point chaud. Parce que nous nettoyons les panneaux, nous savons faire la différence, et nous pouvons enchaîner nettoyage puis thermographie pour ne relever que les vrais défauts.",
        },
        {
          titre: "Le bon matériel",
          texte:
            "DJI Matrice 4T : capteur thermique radiométrique 640 × 512 px, capteur visible haute définition et télémètre laser. La mesure de température est exploitable, pas seulement l'image.",
        },
        {
          titre: "Vols encadrés, démarches prises en charge",
          texte:
            "Télépilotes certifiés DGAC, opérations conformes aux scénarios européens STS-01 et STS-02. Nous effectuons les déclarations nécessaires et établissons le périmètre de sécurité avec votre exploitant.",
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
          r: "Les anomalies qui se traduisent par un échauffement : cellules fissurées ou dégradées (points chauds), diodes de dérivation défaillantes, sous-chaînes ou strings entiers déconnectés, modules cassés, connectique qui chauffe, ainsi que les ombrages et les salissures localisées.",
        },
        {
          q: "Dans quelles conditions réaliser la thermographie ?",
          r: "Par temps ensoleillé et stable, avec la centrale en production : un défaut ne chauffe que lorsque le courant circule. Les références techniques du secteur, comme la norme IEC TS 62446-3, recommandent un ensoleillement d'au moins 600 W/m². Nous planifions le vol en fonction de la météo pour garantir des mesures exploitables.",
        },
        {
          q: "Faut-il arrêter la centrale pendant l'inspection ?",
          r: "Non, au contraire : la centrale doit produire pour que les défauts apparaissent. Le drone survole les rangées sans intervention sur l'installation électrique.",
        },
        {
          q: "À quelle fréquence faire une thermographie ?",
          r: "Une fois par an constitue une bonne pratique pour une centrale en exploitation, ainsi qu'à la réception d'une installation neuve, à la fin de la période de garantie, ou après un événement climatique (grêle, tempête) pour documenter d'éventuels dommages.",
        },
        {
          q: "Que contient le rapport ?",
          r: "La liste des anomalies avec leur localisation sur le plan du site, l'image thermique et l'image visible de chaque défaut, avec nos annotations. Il vous est remis au format PDF sous 48 h après le vol.",
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
      ]}
    />
  );
}
