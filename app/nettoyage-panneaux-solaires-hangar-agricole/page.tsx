import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « nettoyage panneaux
 * solaires hangar agricole » : agriculteurs, CUMA, investisseurs et tiers
 * exploitants de hangars photovoltaïques. Maillée uniquement avec les autres
 * pages cachées.
 */
const URL = "https://ellipsys-solutions.com/nettoyage-panneaux-solaires-hangar-agricole";
const TITRE = "Nettoyage de panneaux solaires sur hangar agricole";
const DESCRIPTION =
  "Panneaux solaires sur hangar ou bâtiment agricole : nettoyage par robot et drone, sans monter sur la couverture, eau filtrée et sans détergent. Devis 24 h.";

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
    images: [{ url: "/images/robot-produit.jpg", width: 2048, height: 2048, alt: "Robot Ellipsys de nettoyage de panneaux photovoltaïques" }],
  },
};

export default function Page() {
  return (
    <LandingPage
      url={URL}
      service="solaire"
      serviceLabel="Nettoyage de panneaux solaires sur hangar agricole"
      h1Texte={TITRE}
      h1={
        <>
          Nettoyage de panneaux solaires sur hangar agricole,{" "}
          <span className="text-brand-orange-400">sans monter sur le toit</span>
        </>
      }
      accroche="Poussière de moisson, pollen, fientes, sable saharien : un hangar agricole cumule les sources d'encrassement, et la pluie ne suffit pas à les éliminer. Notre robot et notre drone nettoient vos panneaux à l'eau filtrée, sans que personne ne marche sur la couverture."
      heroImage="/images/robot-produit.jpg"
      heroAlt="Robot de nettoyage Ellipsys posé sur des panneaux photovoltaïques"
      badgeZone="Arc méditerranéen · Partout en France sur projet"
      pointsCles={[
        "Personne ne monte sur la couverture",
        "Eau filtrée, sans détergent",
        "Robot jusqu'à 1 200 m² par heure",
        "Devis gratuit sous 24 h",
      ]}
      formTitre="Chiffrage de votre hangar sous 24 h"
      formSoustitre="Indiquez la puissance ou la surface de panneaux et la commune."
      preuve={{
        image: "/images/robot-centrale-sol.jpg",
        alt: "Robot de nettoyage Ellipsys en intervention sur une rangée de panneaux photovoltaïques",
        legende: "Notre robot en intervention : brosse rotative souple, eau filtrée, aucun produit chimique",
      }}
      benefices={[
        {
          titre: "Personne ne marche sur le toit",
          texte:
            "Les couvertures agricoles comptent souvent des matériaux fragiles, plaques en fibres-ciment ou éclairantes translucides, sur lesquels on ne doit jamais marcher. Et le poids d'une personne sur un module peut le microfissurer. Le robot et le drone suppriment ces deux risques.",
        },
        {
          titre: "Un encrassement typiquement agricole",
          texte:
            "Poussières de moisson et de travail du sol, pollen, fientes d'oiseaux attirés par les grains, sable saharien plusieurs fois par an sur l'arc méditerranéen : un dépôt plus épais et plus collant qu'en ville, que la pluie déplace sans l'éliminer.",
        },
        {
          titre: "Chaque kilowattheure perdu est un revenu perdu",
          texte:
            "Sur une installation vendue en totalité, chaque kilowattheure non produit est simplement non payé. Le nettoyage est l'un des rares leviers de rendement entièrement sous votre contrôle.",
        },
        {
          titre: "Eau filtrée, garanties préservées",
          texte:
            "Brosses rotatives souples, débit maîtrisé à 7 litres par minute, aucun détergent ni haute pression : rien qui ne coule dans vos cultures ou vos cours, et une méthode compatible avec les garanties des fabricants de modules.",
        },
        {
          titre: "Calé sur votre calendrier agricole",
          texte:
            "Le meilleur moment est juste après les moissons, quand la poussière est retombée, et avant le printemps pour la pleine saison de production. Nous intervenons sans gêner l'activité de l'exploitation.",
        },
        {
          titre: "Plusieurs hangars, une seule tournée",
          texte:
            "Exploitations voisines, CUMA, tiers investisseur gérant plusieurs toitures : regrouper les bâtiments d'un même secteur dans une tournée réduit le coût par site.",
        },
      ]}
      prix={[
        {
          label: "Hangar agricole",
          prix: "sur devis",
          note: "Selon la surface de panneaux, la pente et l'accès au bâtiment.",
        },
        {
          label: "Contrat annuel",
          prix: "sur devis",
          note: "Un à deux passages par an, calés sur les moissons et le printemps.",
        },
        {
          label: "Groupement de hangars",
          prix: "sur devis groupé",
          note: "Plusieurs bâtiments d'un même secteur dans la même tournée.",
        },
      ]}
      prixNote="Envoyez-nous la puissance de l'installation et une photo du hangar : nous vous disons gratuitement si un nettoyage se justifie, et pour quel montant."
      faq={[
        {
          q: "Pourquoi nettoyer les panneaux solaires d'un hangar agricole ?",
          r: "Parce qu'un environnement agricole les encrasse plus vite qu'ailleurs : poussières de moisson, pollen, fientes et, sur l'arc méditerranéen, sable saharien. Le dépôt réduit la quantité de lumière qui atteint les cellules, donc la production, et la pluie ne fait que le déplacer.",
        },
        {
          q: "Quand nettoyer les panneaux d'un bâtiment agricole ?",
          r: "Idéalement après les moissons, une fois la poussière retombée, et avant le printemps pour aborder la saison de forte production avec des panneaux propres. Un à deux passages par an suffisent dans la plupart des cas.",
        },
        {
          q: "Peut-on monter sur le toit d'un hangar pour nettoyer les panneaux ?",
          r: "C'est à éviter. Les couvertures agricoles comportent souvent des plaques fragiles qui ne supportent pas le poids d'une personne, et marcher sur un module peut provoquer des microfissures invisibles qui réduisent la production pendant des années. Notre robot et notre drone travaillent sans que personne ne circule sur la couverture.",
        },
        {
          q: "Le nettoyage risque-t-il de polluer les cultures ou les animaux ?",
          r: "Non. Nous travaillons uniquement à l'eau filtrée, sans détergent ni produit chimique : l'eau qui ruisselle du toit ne contient que la poussière retirée des panneaux.",
        },
        {
          q: "Mon hangar a été construit par un tiers investisseur : qui doit nettoyer ?",
          r: "Cela dépend du contrat qui vous lie à l'exploitant de la centrale : bail, convention d'occupation ou contrat de maintenance. Nous intervenons pour le propriétaire du bâtiment comme pour l'exploitant de l'installation, et nous chiffrons sur la base des informations que vous nous transmettez.",
        },
        {
          q: "Quelle pente de toit le robot peut-il traiter ?",
          r: "Le robot franchit des pentes jusqu'à 25°, ce qui couvre la plupart des toitures de hangars agricoles. Au-delà, ou pour les zones difficiles d'accès, nous intervenons par drone.",
        },
      ]}
      zonesTitre="Nous intervenons notamment dans ces départements"
      communes={[
        "Hérault",
        "Gard",
        "Aude",
        "Pyrénées-Orientales",
        "Vaucluse",
        "Bouches-du-Rhône",
        "Haute-Garonne",
        "Tarn",
        "Aveyron",
        "Gers",
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
        { href: "/nettoyage-panneaux-solaires-toiture-industrielle", label: "Panneaux solaires en toiture industrielle" },
        { href: "/thermographie-panneaux-photovoltaiques-drone", label: "Thermographie de panneaux photovoltaïques" },
        { href: "/nettoyage-centrale-solaire", label: "Nettoyage de centrale solaire" },
      ]}
    />
  );
}
