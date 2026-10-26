import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « contrat nettoyage
 * centrale photovoltaïque » / « contrat maintenance photovoltaïque nettoyage » :
 * asset managers, IPP, équipes O&M. Maillée uniquement avec les autres pages
 * cachées.
 */
const URL = "https://ellipsys-solutions.com/contrat-nettoyage-centrale-photovoltaique";
const TITRE = "Contrat de nettoyage de centrale photovoltaïque";
const DESCRIPTION =
  "Contrat annuel de nettoyage pour centrales photovoltaïques, ombrières et toitures : passages planifiés, rapport par site, tournées multi-sites. Devis 24 h.";

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
    images: [{ url: "/images/robot-vue-aerienne.jpg", alt: "Robot de nettoyage sur une centrale photovoltaïque au sol, vue aérienne" }],
  },
};

export default function Page() {
  return (
    <LandingPage
      url={URL}
      service="solaire"
      serviceLabel="Contrat de nettoyage de centrale photovoltaïque"
      h1Texte={TITRE}
      h1={
        <>
          Contrat de nettoyage de centrale photovoltaïque,{" "}
          <span className="text-brand-orange-400">un budget prévisible, site par site</span>
        </>
      }
      accroche="Pour un exploitant ou un asset manager, le nettoyage ne doit pas être une intervention ponctuelle décidée dans l'urgence. Un contrat annuel fixe le rythme, le budget et le reporting de chaque centrale, et s'intègre à votre plan d'O&M."
      heroImage="/images/robot-vue-aerienne.webp"
      heroAlt="Vue aérienne d'un robot de nettoyage en intervention sur une centrale photovoltaïque au sol"
      badgeZone="Arc méditerranéen · Partout en France sur projet"
      pointsCles={[
        "Passages planifiés à l'année",
        "Rapport d'intervention par site",
        "Tournées multi-sites mutualisées",
        "Devis gratuit sous 24 h",
      ]}
      formTitre="Chiffrage de votre contrat sous 24 h"
      formSoustitre="Indiquez le nombre de sites, leur puissance et leur localisation."
      preuve={{
        image: "/images/avant-apres-montchanin.jpg",
        alt: "Avant et après nettoyage de la centrale photovoltaïque au sol de Montchanin",
        legende: "Centrale de Montchanin (Saône-et-Loire), 22 000 m² : enchaînée avec Vitry dans la même tournée pour le même exploitant",
        badges: ["AVANT", "APRÈS"],
      }}
      referencesTitre="Ce que nous avons déjà réalisé"
      references={[
        {
          chiffre: "83 000 m²",
          titre: "De centrales au sol nettoyées",
          lieu: "Occitanie et Saône-et-Loire",
          texte: "Trois centrales au sol documentées avec photos avant et après, sans arrêt de production.",
        },
        {
          chiffre: "2 sites",
          titre: "Enchaînés en une tournée",
          lieu: "Vitry et Montchanin (71)",
          texte: "Plus de 50 000 m² traités en un seul déplacement pour le même exploitant.",
        },
        {
          chiffre: "0",
          titre: "Arrêt de production",
          lieu: "Sur nos chantiers documentés",
          texte: "Le robot travaille rangée par rangée pendant que le reste du site injecte.",
        },
      ]}
      referencesLien={{ href: "/realisations", label: "Voir les photos avant et après de nos chantiers" }}
      benefices={[
        {
          titre: "Un rythme adapté à chaque site",
          texte:
            "Un à deux passages par an dans la plupart des cas, davantage près des cultures, des routes ou du littoral. Le calendrier est fixé site par site, avant les mois de forte production et après les épisodes d'encrassement marqués.",
        },
        {
          titre: "Un budget prévisible",
          texte:
            "Le prix est établi à l'avance pour l'année, au m² ou par site selon votre portefeuille. Il s'intègre à votre budget d'O&M sans arbitrage en cours d'exercice.",
        },
        {
          titre: "Un reporting exploitable",
          texte:
            "Chaque intervention donne lieu à un rapport avec photos avant et après horodatées et géolocalisées, utile pour vos investisseurs, vos financeurs et votre bilan annuel.",
        },
        {
          titre: "Des tournées mutualisées",
          texte:
            "Les sites d'un même portefeuille sont regroupés dans une même tournée. La mobilisation des équipes et du matériel est partagée, ce qui réduit le coût par site.",
        },
        {
          titre: "Coordonné avec votre mainteneur",
          texte:
            "Plan de prévention établi avec l'exploitant, équipe habilitée B0-H0-H0V, interventions planifiées avec votre prestataire O&M pour ne jamais se gêner sur site.",
        },
        {
          titre: "Thermographie en option",
          texte:
            "Une thermographie par drone peut être réalisée dans le même déplacement, juste après le nettoyage, pour ne relever que les vrais défauts de modules.",
        },
      ]}
      prix={[
        {
          label: "Contrat mono-site",
          prix: "sur devis",
          note: "Une centrale, un à deux passages par an, rapport à chaque intervention.",
        },
        {
          label: "Contrat multi-sites",
          prix: "sur devis groupé",
          note: "Portefeuille régional ou national, tournées mutualisées.",
        },
        {
          label: "Nettoyage + thermographie",
          prix: "sur devis",
          note: "Les deux prestations dans le même déplacement.",
        },
      ]}
      prixNote="Nous partons de vos données de production pour fixer la fréquence utile. Un contrat qui fait passer nos équipes plus souvent que nécessaire ne vous rend pas service."
      faq={[
        {
          q: "Que comprend un contrat de nettoyage de centrale photovoltaïque ?",
          r: "Un nombre de passages par an défini pour chaque site, les dates d'intervention planifiées à l'avance, la préparation (plan de prévention, accès, eau), le nettoyage sans arrêt de production et un rapport d'intervention avec photos avant et après. La thermographie peut être ajoutée.",
        },
        {
          q: "À quelle fréquence prévoir les passages ?",
          r: "Un à deux passages par an couvrent la plupart des centrales. Un site entouré de cultures, proche d'un axe routier ou du littoral, ou régulièrement touché par le sable saharien, peut justifier un rythme plus soutenu. Nous fixons la fréquence à partir de l'écart entre production attendue et production réelle.",
        },
        {
          q: "Comment est fixé le prix d'un contrat ?",
          r: "À partir de la surface de modules, de l'accès entre les rangées, de la disponibilité de l'eau, du niveau d'encrassement et du nombre de passages. Pour un portefeuille, le regroupement des sites dans une même tournée réduit le coût par site.",
        },
        {
          q: "Le contrat peut-il couvrir plusieurs régions ?",
          r: "Oui. Nous intervenons en priorité sur l'arc méditerranéen, et partout en France sur projet : nos chantiers documentés se trouvent en Occitanie et en Saône-et-Loire.",
        },
        {
          q: "Le nettoyage remplace-t-il la maintenance électrique ?",
          r: "Non. Il la complète. Le nettoyage traite l'encrassement des modules ; la maintenance électrique (onduleurs, protections, câblage) reste du ressort de votre prestataire O&M, avec lequel nous coordonnons nos interventions.",
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
        { href: "/nettoyage-centrale-photovoltaique-occitanie", label: "Centrales en Occitanie" },
        { href: "/thermographie-panneaux-photovoltaiques-drone", label: "Thermographie photovoltaïque" },
      ]}
    />
  );
}
