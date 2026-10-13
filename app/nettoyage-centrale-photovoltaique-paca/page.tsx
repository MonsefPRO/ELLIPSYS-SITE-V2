import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « nettoyage centrale
 * photovoltaïque PACA » (ICP 1, arc méditerranéen). Maillée uniquement avec les
 * autres pages cachées.
 */
const URL = "https://ellipsys-solutions.com/nettoyage-centrale-photovoltaique-paca";
const TITRE = "Nettoyage de centrale photovoltaïque en PACA";
const DESCRIPTION =
  "Nettoyage de centrales photovoltaïques et parcs solaires en Provence-Alpes-Côte d'Azur par robot et drone, sans arrêt de production. Devis sous 24 h.";

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
      serviceLabel="Nettoyage de centrale photovoltaïque"
      h1Texte={TITRE}
      h1={
        <>
          Nettoyage de centrale photovoltaïque en PACA,{" "}
          <span className="text-brand-orange-400">sans arrêt de production</span>
        </>
      }
      accroche="La Provence compte parmi les régions les plus ensoleillées de France, et ses centrales au sol parmi les plus exposées : mistral chargé de poussière, sable saharien, cultures et littoral. Nous nettoyons vos modules par robot et par drone, pendant que la centrale continue d'injecter."
      heroImage="/images/robot-vue-aerienne.jpg"
      heroAlt="Vue aérienne d'un robot de nettoyage en intervention sur une centrale photovoltaïque au sol"
      badgeZone="Provence-Alpes-Côte d'Azur · Arc méditerranéen"
      pointsCles={[
        "Robot et drone, sans arrêt de production",
        "Équipe habilitée B0-H0-H0V",
        "Tournées multi-sites en Provence",
        "Devis gratuit sous 24 h",
      ]}
      formTitre="Chiffrage de votre centrale sous 24 h"
      formSoustitre="Indiquez la puissance ou la surface du site et sa commune."
      preuve={{
        image: "/images/avant-apres-fossat.jpg",
        alt: "Avant et après nettoyage des modules d'une centrale photovoltaïque au sol",
        legende: "Chantier réel : centrale au sol de 30 000 m² nettoyée par deux pilotes en septembre 2026",
        badges: ["AVANT", "APRÈS"],
      }}
      benefices={[
        {
          titre: "Le mistral et le sable, deux sources d'encrassement",
          texte:
            "Le mistral transporte en permanence des poussières sèches, et les épisodes de sable saharien recouvrent les modules plusieurs fois par an. Les étés secs privent en plus les panneaux du rinçage naturel de la pluie.",
        },
        {
          titre: "La centrale continue de produire",
          texte:
            "Le robot avance rangée par rangée pendant que le reste du site injecte. Seul le périmètre de sécurité immédiat est neutralisé, en coordination avec votre exploitant et votre mainteneur.",
        },
        {
          titre: "Des grandes centrales aux sites contraints",
          texte:
            "Centrales au sol de plusieurs hectares, terrains en pente, sites d'accès difficile : le robot franchit des pentes jusqu'à 25° et le drone prend le relais là où le robot ne passe pas.",
        },
        {
          titre: "Brossage doux, garanties préservées",
          texte:
            "Brosses rotatives souples, aucun détergent ni haute pression : le verre n'est pas rayé et l'intervention reste compatible avec les garanties des fabricants de modules.",
        },
        {
          titre: "Plusieurs centrales, une seule tournée",
          texte:
            "Regrouper les sites d'un portefeuille provençal, du Vaucluse aux Bouches-du-Rhône et jusqu'aux Alpes-de-Haute-Provence, dans une même tournée réduit le coût par site.",
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
          note: "Selon la surface, la pente, l'accès entre les rangées, l'eau disponible et l'encrassement.",
        },
        {
          label: "Contrat annuel",
          prix: "sur devis",
          note: "Un à deux passages par an, calés sur les épisodes de sable et la saison de production.",
        },
        {
          label: "Portefeuille régional",
          prix: "sur devis groupé",
          note: "Plusieurs centrales de Provence regroupées dans une même tournée.",
        },
      ]}
      prixNote="Nous partons de vos données de production pour vérifier que l'intervention se justifie. Si elle ne se justifie pas, nous vous le disons."
      faq={[
        {
          q: "Pourquoi les centrales de Provence s'encrassent-elles vite ?",
          r: "Parce que le mistral transporte des poussières sèches une grande partie de l'année, que le sable saharien se dépose plusieurs fois par an, et que les longs étés secs privent les modules du rinçage de la pluie. Près des cultures et du littoral, pollens et sel s'ajoutent au dépôt.",
        },
        {
          q: "Intervenez-vous dans toute la région PACA ?",
          r: "Oui : Bouches-du-Rhône, Vaucluse, Var, Alpes-de-Haute-Provence, Hautes-Alpes et Alpes-Maritimes. Basés à Montpellier, nous rejoignons le Vaucluse et les Bouches-du-Rhône en une à deux heures de route, et nous organisons des tournées pour les sites plus éloignés.",
        },
        {
          q: "Faut-il arrêter la centrale pendant le nettoyage ?",
          r: "Non. Le robot travaille rangée par rangée et seul le périmètre de sécurité immédiat est neutralisé. Le reste de la centrale continue d'injecter pendant toute l'intervention.",
        },
        {
          q: "Quand nettoyer une centrale en Provence ?",
          r: "Le plus souvent avant le printemps, pour aborder la saison de forte production avec des modules propres, et après un épisode de sable saharien marqué. Le bon rythme se lit dans l'écart entre production attendue et production réelle.",
        },
        {
          q: "Pouvez-vous intervenir sur une centrale en pente ?",
          r: "Oui, le robot franchit des pentes jusqu'à 25°. Au-delà, ou sur des zones difficiles d'accès, l'intervention se fait par drone. Un repérage préalable permet de choisir la bonne méthode.",
        },
      ]}
      zonesTitre="Nous intervenons dans toute la région"
      communes={[
        "Bouches-du-Rhône",
        "Vaucluse",
        "Var",
        "Alpes-de-Haute-Provence",
        "Hautes-Alpes",
        "Alpes-Maritimes",
      ]}
      areaServed={[{ "@type": "AdministrativeArea", name: "Provence-Alpes-Côte d'Azur" }]}
      pageDetail={{
        href: "/prestations/nettoyage-solaire",
        label: "Voir notre offre complète de nettoyage solaire",
      }}
      liensConnexes={[
        { href: "/nettoyage-centrale-solaire", label: "Nettoyage de centrale solaire" },
        { href: "/nettoyage-centrale-photovoltaique-occitanie", label: "Centrales en Occitanie" },
        { href: "/nettoyage-robotise-centrale-photovoltaique", label: "Nettoyage robotisé de centrale" },
      ]}
    />
  );
}
