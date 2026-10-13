import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « nettoyage centrale
 * photovoltaïque Occitanie » (ICP 1). Maillée uniquement avec les autres pages
 * cachées.
 */
const URL = "https://ellipsys-solutions.com/nettoyage-centrale-photovoltaique-occitanie";
const TITRE = "Nettoyage de centrale photovoltaïque en Occitanie";
const DESCRIPTION =
  "Nettoyage de centrales photovoltaïques et parcs solaires en Occitanie par robot et drone, depuis Montpellier. Sans arrêt de production. Devis sous 24 h.";

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
    images: [{ url: "/images/avant-apres-fossat.jpg", width: 2404, height: 1350, alt: "Avant et après nettoyage d'une centrale photovoltaïque au sol en Occitanie" }],
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
          Nettoyage de centrale photovoltaïque en Occitanie,{" "}
          <span className="text-brand-orange-400">depuis Montpellier</span>
        </>
      }
      accroche="L'Occitanie est l'une des régions les plus ensoleillées et les plus équipées de France en photovoltaïque. C'est aussi l'une des plus exposées à l'encrassement : sable saharien, vents chargés de poussière, cultures et littoral. Nous nettoyons vos centrales sans arrêter la production."
      heroImage="/images/robot-centrale-sol.jpg"
      heroAlt="Robot de nettoyage Ellipsys sur les rangées d'une centrale photovoltaïque au sol"
      badgeZone="Occitanie · Base opérationnelle à Montpellier"
      pointsCles={[
        "Base à Montpellier, au cœur de la région",
        "Robot et drone, sans arrêt de production",
        "Équipe habilitée B0-H0-H0V",
        "Devis gratuit sous 24 h",
      ]}
      formTitre="Chiffrage de votre centrale sous 24 h"
      formSoustitre="Indiquez la puissance ou la surface du site et sa commune."
      preuve={{
        image: "/images/avant-apres-fossat.jpg",
        alt: "Avant et après nettoyage des modules d'une centrale photovoltaïque au sol en Occitanie",
        legende: "Chantier réel en Occitanie : centrale au sol de 30 000 m² nettoyée par deux pilotes en septembre 2026",
        badges: ["AVANT", "APRÈS"],
      }}
      benefices={[
        {
          titre: "Un encrassement typiquement méditerranéen",
          texte:
            "Plusieurs épisodes de sable saharien par an, la tramontane dans le Roussillon et l'Aude, le mistral à l'est, des poussières de vigne et de cultures partout : le dépôt se reforme vite, et les pluies, rares en été, ne suffisent pas à l'éliminer.",
        },
        {
          titre: "Intervenir vite, au bon moment",
          texte:
            "Basés à Montpellier, nous sommes à moins de deux heures de route de la plupart des centrales de l'Hérault, du Gard et de l'Aude, et nous intervenons dans toute la région. Un épisode de sable saharien ne doit pas peser sur toute une saison de production.",
        },
        {
          titre: "La centrale continue de produire",
          texte:
            "Le robot avance rangée par rangée pendant que le reste du site injecte. Seul le périmètre de sécurité immédiat est neutralisé, en coordination avec votre exploitant et votre mainteneur.",
        },
        {
          titre: "Brossage doux, garanties préservées",
          texte:
            "Brosses rotatives souples, aucun détergent ni haute pression : le verre n'est pas rayé et l'intervention reste compatible avec les garanties des fabricants de modules.",
        },
        {
          titre: "Plusieurs centrales, une seule tournée",
          texte:
            "Regrouper les sites d'un portefeuille régional, de Perpignan à Nîmes ou de Montpellier à Toulouse, dans une même tournée mutualise la mobilisation et réduit le coût par site.",
        },
        {
          titre: "Habilités, préparés, assurés",
          texte:
            "Équipe habilitée B0-H0-H0V, télépilotes certifiés DGAC, plan de prévention établi avec l'exploitant avant chaque chantier, RC professionnelle et RC aéronautique.",
        },
      ]}
      prix={[
        {
          label: "Centrale au sol",
          prix: "sur devis au m²",
          note: "Selon la surface, l'accès entre les rangées, l'eau disponible et le niveau d'encrassement.",
        },
        {
          label: "Contrat annuel",
          prix: "sur devis",
          note: "Un à deux passages par an, calés sur les épisodes de sable et la saison de production.",
        },
        {
          label: "Portefeuille régional",
          prix: "sur devis groupé",
          note: "Plusieurs centrales d'Occitanie regroupées dans une même tournée.",
        },
      ]}
      prixNote="Nous partons de vos données de production pour vérifier que l'intervention se justifie. Si elle ne se justifie pas, nous vous le disons."
      faq={[
        {
          q: "Pourquoi les centrales d'Occitanie s'encrassent-elles plus vite ?",
          r: "Parce que plusieurs facteurs s'y cumulent : les remontées de sable saharien plusieurs fois par an, des vents forts et fréquents qui transportent poussières et particules (tramontane, mistral), la proximité de vignes et de cultures, et sur le littoral le sel marin. Les longues périodes sèches de l'été privent en plus les panneaux du rinçage naturel de la pluie.",
        },
        {
          q: "Quand nettoyer une centrale en Occitanie ?",
          r: "Le plus souvent avant le printemps, pour aborder la saison de forte production avec des modules propres, et à la fin de l'été ou après un épisode de sable saharien marqué. Le bon rythme se lit dans l'écart entre production attendue et production réelle.",
        },
        {
          q: "Dans quels départements intervenez-vous ?",
          r: "Dans toute l'Occitanie : Hérault, Gard, Aude, Pyrénées-Orientales, Haute-Garonne, Ariège, Tarn, Aveyron, Lozère, Gers, Lot, Tarn-et-Garonne et Hautes-Pyrénées, ainsi qu'en Provence et partout en France sur projet.",
        },
        {
          q: "Faut-il arrêter la centrale pendant le nettoyage ?",
          r: "Non. Le robot travaille rangée par rangée et seul le périmètre de sécurité immédiat est neutralisé. Le reste de la centrale continue d'injecter pendant toute l'intervention.",
        },
        {
          q: "Pouvez-vous enchaîner plusieurs centrales de la région ?",
          r: "Oui, c'est le cas de figure où nous sommes les plus compétitifs. Les sites d'un même portefeuille sont regroupés dans une tournée, avec un planning et un rapport d'intervention pour chaque centrale.",
        },
      ]}
      zonesTitre="Nous intervenons dans tous les départements d'Occitanie"
      communes={[
        "Hérault",
        "Gard",
        "Aude",
        "Pyrénées-Orientales",
        "Haute-Garonne",
        "Ariège",
        "Tarn",
        "Aveyron",
        "Lozère",
        "Gers",
        "Lot",
        "Tarn-et-Garonne",
        "Hautes-Pyrénées",
      ]}
      areaServed={[{ "@type": "AdministrativeArea", name: "Occitanie" }]}
      pageDetail={{
        href: "/prestations/nettoyage-solaire",
        label: "Voir notre offre complète de nettoyage solaire",
      }}
      liensConnexes={[
        { href: "/nettoyage-centrale-solaire", label: "Nettoyage de centrale solaire" },
        { href: "/contrat-nettoyage-centrale-photovoltaique", label: "Contrat de nettoyage de centrale" },
        { href: "/nettoyage-centrale-agrivoltaique", label: "Centrales agrivoltaïques" },
        { href: "/nettoyage-centrale-photovoltaique-paca", label: "Centrales en PACA" },
      ]}
    />
  );
}
