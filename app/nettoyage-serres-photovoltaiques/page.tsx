import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « nettoyage serre
 * photovoltaïque » : maraîchers, horticulteurs et exploitants de serres
 * photovoltaïques de l'arc méditerranéen. Maillée uniquement avec les autres
 * pages cachées.
 */
const URL = "https://ellipsys-solutions.com/nettoyage-serres-photovoltaiques";
const TITRE = "Nettoyage de serres photovoltaïques";
const TITRE_SEO = "Nettoyage de serres photovoltaïques par drone et robot";
const DESCRIPTION =
  "Nettoyage des panneaux de serres photovoltaïques par drone et robot : personne ne marche sur la couverture, aucun produit au-dessus des cultures. Devis 24 h.";

export const metadata: Metadata = {
  title: TITRE_SEO,
  description: DESCRIPTION,
  alternates: { canonical: URL },
};

export default function Page() {
  return (
    <LandingPage
      url={URL}
      service="solaire"
      serviceLabel="Nettoyage de serres photovoltaïques"
      h1Texte={TITRE}
      h1={
        <>
          Nettoyage de serres photovoltaïques,{" "}
          <span className="text-brand-orange-400">sans monter sur la couverture</span>
        </>
      }
      accroche="Sur une serre photovoltaïque, les panneaux sont posés au-dessus d'une culture en place et d'une couverture fragile. Nous les nettoyons par drone ou par robot, sans que personne ne marche sur la toiture, à l'eau filtrée et sans produit chimique."
      heroImage="/images/drone-toiture-intervention.webp"
      heroAlt="Drone Ellipsys en intervention de nettoyage sur une toiture équipée de panneaux"
      badgeZone="Arc méditerranéen · Partout en France sur projet"
      pointsCles={[
        "Personne sur la couverture",
        "Aucun produit chimique",
        "Calé sur le calendrier de culture",
        "Devis gratuit sous 24 h",
      ]}
      formTitre="Chiffrage de vos serres sous 24 h"
      formSoustitre="Indiquez la surface de panneaux, le nombre de chapelles et la culture en place."
      preuve={{
        image: "/images/robot-brosse-action.jpg",
        alt: "Robot de nettoyage Ellipsys avec sa brosse rotative sur des panneaux photovoltaïques",
        legende: "Notre robot en intervention : brosse rotative souple, eau filtrée, aucun produit chimique",
      }}
      benefices={[
        {
          titre: "Personne ne marche sur la serre",
          texte:
            "Vitrage, polycarbonate, film ou panneaux : une couverture de serre n'est pas faite pour porter une personne. Le drone travaille en vol, le robot roule sur les rangées de modules quand la structure le permet. Aucun pied sur la couverture, aucun risque de casse ni de chute.",
        },
        {
          titre: "Rien n'atteint les cultures",
          texte:
            "Eau filtrée, sans détergent ni produit chimique. Nous intervenons ouvrants fermés : l'eau de nettoyage rejoint les chéneaux comme la pluie, sans toucher les plants, les semis ou les pots à l'intérieur.",
        },
        {
          titre: "Des panneaux qui s'encrassent vite",
          texte:
            "Peu inclinés et posés en milieu agricole, les panneaux d'une serre retiennent la poussière des parcelles voisines, les pollens, les fientes d'oiseaux et, sur l'arc méditerranéen, le sable saharien. La pluie les rince mal, surtout en bas de pan et le long des chéneaux.",
        },
        {
          titre: "Calé sur votre calendrier de culture",
          texte:
            "Nous planifions avec l'exploitant : hors traitements, hors plantations et récoltes, au moment où l'intervention gêne le moins le travail dans la serre, et avant la saison de forte production solaire.",
        },
        {
          titre: "La bonne méthode, décidée avant le devis",
          texte:
            "Un repérage, souvent par drone ou à partir de photos et du plan, permet de choisir entre le drone et le robot selon la pente, la structure, la largeur des chapelles et l'accès.",
        },
        {
          titre: "Habilités et préparés",
          texte:
            "Équipe habilitée B0-H0-H0V, télépilotes certifiés DGAC, plan de prévention établi avec l'exploitant avant chaque chantier, production électrique maintenue pendant l'intervention.",
        },
      ]}
      prix={[
        {
          label: "Serres photovoltaïques",
          prix: "sur devis",
          note: "Selon la surface de panneaux, la structure, l'accès et la culture en place.",
        },
        {
          label: "Contrat annuel",
          prix: "sur devis",
          note: "Un à deux passages par an, calés sur votre calendrier de culture.",
        },
        {
          label: "Nettoyage + thermographie",
          prix: "sur devis groupé",
          note: "Les deux prestations dans le même déplacement.",
        },
      ]}
      prixNote="Plusieurs serres ou plusieurs exploitations dans le même secteur ? Nous les regroupons dans une même tournée, ce qui réduit le coût pour chacun."
      faq={[
        {
          q: "Comment nettoyer les panneaux d'une serre photovoltaïque ?",
          r: "Sans jamais marcher sur la couverture. Selon la pente, la structure et l'accès, nous intervenons par drone ou par robot, à l'eau filtrée, sans produit chimique et ouvrants fermés. La méthode est confirmée après repérage, avant le devis.",
        },
        {
          q: "Le nettoyage présente-t-il un risque pour les cultures sous la serre ?",
          r: "Non. Aucun détergent ni produit chimique n'est utilisé, et nous intervenons ouvrants fermés : l'eau de nettoyage, chargée seulement de la poussière retirée, part dans les chéneaux comme la pluie.",
        },
        {
          q: "À quelle fréquence nettoyer une serre photovoltaïque ?",
          r: "Un passage par an est une base, idéalement au printemps après les épisodes de sable saharien. Un second se justifie souvent près de parcelles très poussiéreuses, d'une route ou d'une carrière. Nous mesurons l'encrassement réel avant de recommander une fréquence.",
        },
        {
          q: "Une serre photovoltaïque est-elle de l'agrivoltaïsme ?",
          r: "En principe non : le décret du 8 avril 2024 traite à part les serres, hangars et ombrières agricoles, qui doivent être nécessaires à l'activité agricole, sans relever des critères de l'agrivoltaïsme au sens de la loi APER. La question de l'entretien des panneaux se pose en revanche de la même façon.",
        },
        {
          q: "Qui paie le nettoyage : l'exploitant agricole ou le propriétaire des panneaux ?",
          r: "Cela dépend du contrat. Lorsque la serre a été financée par un tiers qui exploite la centrale, c'est souvent lui qui a la charge de la maintenance, mais le partage des rôles est fixé par le contrat. Nous travaillons avec les deux pour planifier l'intervention.",
        },
        {
          q: "Faut-il arrêter la production électrique ?",
          r: "Non. Le nettoyage se fait par zones, sans arrêt de la centrale. Seul le périmètre de sécurité immédiat est neutralisé, en coordination avec l'exploitant et le mainteneur.",
        },
      ]}
      zonesTitre="Nous intervenons notamment dans ces départements"
      communes={[
        "Pyrénées-Orientales",
        "Aude",
        "Hérault",
        "Gard",
        "Bouches-du-Rhône",
        "Vaucluse",
        "Var",
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
        { href: "/nettoyage-centrale-agrivoltaique", label: "Nettoyage de centrale agrivoltaïque" },
        { href: "/nettoyage-panneaux-solaires-hangar-agricole", label: "Panneaux sur hangar agricole" },
        { href: "/contrat-nettoyage-centrale-photovoltaique", label: "Contrat de nettoyage photovoltaïque" },
        { href: "/blog/agrivoltaisme-ovin-bovin-vigne-serres-entretien-panneaux", label: "Ovin, bovin, vigne, serres : l'entretien des panneaux" },
      ]}
    />
  );
}
