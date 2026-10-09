import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « nettoyage panneaux
 * solaires toiture industrielle » : usines, entrepôts, bâtiments agricoles et
 * logistiques équipés de photovoltaïque en toiture. Maillée uniquement avec
 * les autres pages cachées.
 */
const URL = "https://ellipsys-solutions.com/nettoyage-panneaux-solaires-toiture-industrielle";
const TITRE = "Nettoyage panneaux solaires toiture industrielle";
const DESCRIPTION =
  "Panneaux solaires sur toiture d'usine ou d'entrepôt : nettoyage par robot, eau filtrée, sans arrêt de production ni personne sur les modules. Devis 24 h.";

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
    images: [{ url: "/images/robot-brosse-action.jpg", width: 1792, height: 2400, alt: "Robot Ellipsys nettoyant des panneaux photovoltaïques" }],
  },
};

export default function Page() {
  return (
    <LandingPage
      url={URL}
      service="solaire"
      serviceLabel="Nettoyage de panneaux solaires en toiture industrielle"
      h1Texte={TITRE}
      h1={
        <>
          Nettoyage de panneaux solaires en toiture industrielle,{" "}
          <span className="text-brand-orange-400">sans arrêt de production</span>
        </>
      }
      accroche="Sur une usine ou un entrepôt, les modules reçoivent les poussières de process, les films gras de la circulation et le sable saharien. La centrale continue de produire, simplement moins bien. Notre robot les nettoie à l'eau filtrée, sans que personne ne marche sur les panneaux."
      heroImage="/images/Bannerindustrie.jpg"
      heroAlt="Bâtiment logistique et industriel avec toiture de grande surface"
      badgeZone="Arc méditerranéen · Partout en France sur projet"
      pointsCles={[
        "Robot jusqu'à 1 200 m² par heure",
        "Eau filtrée, sans détergent",
        "Personne ne marche sur les modules",
        "Équipe habilitée B0-H0-H0V",
      ]}
      formTitre="Chiffrage de votre toiture sous 24 h"
      formSoustitre="Indiquez la puissance ou la surface de panneaux et la localisation du site."
      preuve={{
        image: "/images/robot-brosse-action.jpg",
        alt: "Robot de nettoyage Ellipsys avec sa brosse rotative sur des panneaux photovoltaïques",
        legende: "Notre robot en intervention : brosse rotative souple de 1,20 m, eau filtrée, aucun détergent",
      }}
      benefices={[
        {
          titre: "La production et le site continuent de tourner",
          texte:
            "Le robot avance rangée par rangée pendant que le reste de la toiture produit. En bas, aucune nacelle ni emprise au sol : vos quais, vos voies et vos équipes ne sont pas gênés.",
        },
        {
          titre: "Personne ne marche sur les panneaux",
          texte:
            "Marcher sur un module crée des microfissures invisibles qui dégradent le rendement des années durant. Le robot se déplace sur les panneaux sans point d'appui concentré, et le drone traite les zones difficiles d'accès.",
        },
        {
          titre: "Un encrassement plus sévère qu'en centrale au sol",
          texte:
            "La perte moyenne due à l'encrassement se situe entre 4 et 7 % dans le monde selon l'AIE PVPS, et peut atteindre 20 à 30 % dans les environnements contraignants : poussières de process, axes routiers, cultures voisines, sable saharien.",
        },
        {
          titre: "Eau filtrée, garanties préservées",
          texte:
            "Brosses rotatives souples, débit maîtrisé à 7 litres par minute, aucun détergent ni haute pression : le verre n'est pas rayé et l'intervention reste compatible avec les garanties des fabricants de modules.",
        },
        {
          titre: "Panneaux et bardage en une seule intervention",
          texte:
            "Pendant que le robot nettoie la toiture, notre drone peut traiter le bardage du bâtiment. Un seul déplacement, un seul prestataire, un seul créneau à réserver sur votre site.",
        },
        {
          titre: "Préparé avec votre responsable sécurité",
          texte:
            "Accès toiture, protections collectives, périmètre au sol : tout est validé dans un plan de prévention avant le chantier. Équipe habilitée B0-H0-H0V pour travailler à proximité des installations électriques.",
        },
      ]}
      prix={[
        {
          label: "Toiture photovoltaïque",
          prix: "sur devis au m²",
          note: "Selon la surface de modules, l'accès à la toiture, la pente et le niveau d'encrassement.",
        },
        {
          label: "Panneaux + bardage",
          prix: "sur devis groupé",
          note: "Les deux surfaces traitées dans la même intervention.",
        },
        {
          label: "Contrat annuel",
          prix: "sur devis",
          note: "Un à deux passages par an, planifiés avant les mois de forte production.",
        },
      ]}
      prixNote="Le bon critère n'est pas le prix au mètre carré mais l'énergie récupérée. Nous partons de vos données de production pour vérifier que l'intervention se justifie, et nous vous le disons si elle ne se justifie pas."
      faq={[
        {
          q: "Comment nettoyer des panneaux solaires sur une toiture industrielle sans arrêter la production ?",
          r: "En travaillant par zones avec un robot qui se déplace sur les rangées pendant que le reste de la toiture continue de produire. Côté bâtiment, l'intervention se fait en toiture, sans nacelle ni emprise au sol, donc sans gêner l'activité en dessous.",
        },
        {
          q: "Pourquoi ne pas faire marcher un opérateur sur les panneaux ?",
          r: "Parce que le poids d'une personne concentré sur un module peut provoquer des microfissures dans les cellules. Elles ne se voient pas à l'œil nu mais réduisent durablement la production et peuvent créer des points chauds. Un robot répartit sa charge et évite ce risque.",
        },
        {
          q: "À quelle fréquence nettoyer des panneaux sur un bâtiment industriel ?",
          r: "Un à deux passages par an dans la plupart des cas, idéalement avant le printemps et après l'été. Un site exposé à des poussières de process, à un axe routier chargé ou à des cultures voisines s'encrasse plus vite. Le bon rythme se lit dans l'écart entre production attendue et production réelle.",
        },
        {
          q: "Le nettoyage peut-il annuler la garantie des modules ?",
          r: "Pas avec notre méthode : brosses souples, eau filtrée, aucun détergent et aucune haute pression. Ce sont précisément les pratiques que les fabricants déconseillent (produits chimiques, abrasifs, nettoyeurs haute pression) que nous excluons.",
        },
        {
          q: "Mon installation en toiture est-elle concernée par l'arrêt en cas de prix négatifs ?",
          r: "Le seuil d'arrêt obligatoire pendant les épisodes de prix négatifs descend à 5 MWc au 1er décembre 2026 puis à 1 MWc au 1er mars 2027, pour les installations sous obligation d'achat ou complément de rémunération, toitures comprises. Le nettoyage n'agit pas sur le prix de marché : il augmente l'énergie produite pendant les heures qui restent valorisées.",
        },
        {
          q: "Que faut-il prévoir pour l'intervention ?",
          r: "Un accès sécurisé à la toiture, un point d'eau et un interlocuteur sécurité pour valider le plan de prévention. Une photo de la toiture et la puissance installée suffisent pour établir un premier chiffrage.",
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
        { href: "/nettoyage-bardage-industriel", label: "Nettoyage de bardage industriel" },
        { href: "/nettoyage-centrale-solaire", label: "Nettoyage de centrale solaire" },
        { href: "/nettoyage-ombrieres-photovoltaiques", label: "Nettoyage d'ombrières photovoltaïques" },
      ]}
    />
  );
}
