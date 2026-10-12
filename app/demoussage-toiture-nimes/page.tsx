import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « démoussage toiture
 * Nîmes ». Maillée uniquement avec les autres pages cachées.
 */
const URL = "https://ellipsys-solutions.com/demoussage-toiture-nimes";

export const metadata: Metadata = {
  title: "Démoussage de toiture à Nîmes, par drone",
  description:
    "Démoussage de toiture par drone à Nîmes et dans le Gard : tuiles romanes préservées, sans échafaudage ni personne sur le toit. Hydrofuge en option. Devis 24 h.",
  alternates: { canonical: URL },
};

export default function Page() {
  return (
    <LandingPage
      url={URL}
      service="toiture"
      serviceLabel="Démoussage de toiture"
      h1Texte="Démoussage de toiture à Nîmes"
      h1={
        <>
          Démoussage de toiture à Nîmes,{" "}
          <span className="text-brand-orange-400">sans monter sur vos tuiles</span>
        </>
      }
      accroche="Après les épisodes cévenols, les versants nord des toitures gardoises se couvrent de mousses et de lichens. Nous les traitons par drone, sans échafaudage et sans que personne ne circule sur vos tuiles romanes."
      heroImage="/images/drone-toiture-intervention.png"
      heroAlt="Drone de traitement survolant une toiture en tuiles dans le Gard"
      badgeZone="Nîmes · Gard · Occitanie"
      pointsCles={[
        "Sans échafaudage ni nacelle",
        "Personne ne marche sur les tuiles",
        "Traitement Certibiocide homologué",
        "Devis gratuit sous 24 h",
      ]}
      formTitre="Votre devis gratuit sous 24 h"
      formSoustitre="Indiquez simplement l'adresse et le type de toiture."
      preuve={{
        image: "/images/demoussage-toiture-eimargues.jpg",
        alt: "Avant après démoussage de toiture à Aimargues dans le Gard",
        legende: "Chantier réel dans le Gard : démoussage de toiture à Aimargues, à 20 minutes de Nîmes",
        badges: ["AVANT", "APRÈS"],
      }}
      benefices={[
        {
          titre: "Aucune tuile cassée, aucun risque de chute",
          texte:
            "Le démoussage classique impose de circuler sur la couverture : c'est la première cause de tuiles fissurées. Notre drone travaille sans contact avec le toit, et personne ne s'expose à une chute.",
        },
        {
          titre: "Jamais de haute pression sur la tuile",
          texte:
            "Le nettoyeur haute pression arrache la couche superficielle de la tuile, ouvre sa porosité et accélère le retour des mousses. Nous pulvérisons à pression contrôlée un traitement Certibiocide homologué.",
        },
        {
          titre: "Adapté au bâti nîmois",
          texte:
            "Tuiles romanes, mas en périphérie, immeubles du centre en secteur sauvegardé : sans échafaudage ni emprise sur la voie, l'intervention se fait même dans les rues étroites de l'Écusson.",
        },
        {
          titre: "Hydrofuge en option",
          texte:
            "Après démoussage, un hydrofuge rend la tuile déperlante et espace nettement les entretiens. Nous vous disons franchement quand il est utile, et quand il ne l'est pas.",
        },
      ]}
      prix={[
        {
          label: "Maison individuelle",
          prix: "sur devis",
          note: "Selon la surface, la pente, l'accès et l'état de la couverture.",
        },
        {
          label: "Démoussage + hydrofuge",
          prix: "sur devis",
          note: "Le traitement complet que nous recommandons dans la plupart des cas.",
        },
        {
          label: "Copropriété et tertiaire",
          prix: "sur devis",
          note: "Grandes surfaces, intervention sans emprise au sol.",
        },
      ]}
      prixNote="Envoyez-nous une photo de votre toiture avec la demande : nous chiffrons plus vite et plus juste, sans visite commerciale imposée."
      faq={[
        {
          q: "Quand démousser sa toiture à Nîmes ?",
          r: "Idéalement en fin d'été ou au début de l'automne, avant les épisodes cévenols. Les pluies violentes d'automne saturent les tuiles d'eau en quelques heures et relancent la croissance des mousses sur les versants nord. Traiter avant, c'est éviter qu'elles ne dégradent la tuile pendant l'hiver.",
        },
        {
          q: "Le drone peut-il intervenir en secteur sauvegardé ?",
          r: "Oui. Le drone n'a besoin ni d'échafaudage ni d'emprise sur la voie publique, ce qui simplifie fortement l'intervention dans l'Écusson. Un traitement qui ne modifie pas l'aspect de la toiture ne pose généralement pas de difficulté vis-à-vis de l'Architecte des Bâtiments de France ; nous vérifions votre situation avant le devis.",
        },
        {
          q: "Le drone peut-il abîmer ma toiture ?",
          r: "Non. Le drone ne se pose pas sur la couverture : aucun poids, aucun piétinement, aucun risque de fissurer une tuile. Nous pulvérisons à pression contrôlée, jamais en haute pression.",
        },
        {
          q: "Faut-il être présent pendant l'intervention ?",
          r: "Votre présence au début est utile pour valider le périmètre et l'accès à un point d'eau. Ensuite, une zone d'exclusion des tiers est mise en place conformément à la réglementation DGAC et le rapport photo vous est transmis après l'intervention.",
        },
        {
          q: "Intervenez-vous autour de Nîmes ?",
          r: "Oui, à Nîmes et dans les communes voisines : Caissargues, Milhaud, Bouillargues, Marguerittes, Saint-Gilles, Manduel, Redessan, Garons et au-delà dans le Gard. Notre base est à Montpellier, à moins d'une heure.",
        },
      ]}
      communes={[
        "Nîmes",
        "Caissargues",
        "Milhaud",
        "Bouillargues",
        "Marguerittes",
        "Saint-Gilles",
        "Manduel",
        "Redessan",
        "Garons",
        "Rodilhan",
        "Poulx",
        "Bernis",
        "Générac",
        "Aimargues",
        "Vauvert",
      ]}
      pageDetail={{
        href: "/prestations/traitement-toiture",
        label: "Voir le détail de notre méthode de démoussage",
      }}
      liensConnexes={[
        { href: "/demoussage-toiture-beziers", label: "Démoussage de toiture à Béziers" },
        { href: "/demoussage-toiture-montpellier", label: "Démoussage de toiture à Montpellier" },
        { href: "/hydrofuge-toiture-montpellier", label: "Hydrofuge de toiture" },
      ]}
    />
  );
}
