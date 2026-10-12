import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « nettoyage façade
 * vitrée drone » : immeubles de bureaux, sièges, bâtiments tertiaires.
 * Maillée uniquement avec les autres pages cachées.
 */
const URL = "https://ellipsys-solutions.com/nettoyage-facade-vitree-drone";
const TITRE = "Nettoyage de façade vitrée par drone";
const DESCRIPTION =
  "Nettoyage de façades vitrées et de vitrages en hauteur par drone : sans nacelle ni fermeture de rue. Bureaux et bâtiments tertiaires. Devis 24 h.";

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
    images: [{ url: "/images/SCUTUMFACADE.png", width: 2633, height: 1460, alt: "Façades vitrées d'un bâtiment professionnel nettoyées par drone à Montpellier" }],
  },
};

export default function Page() {
  return (
    <LandingPage
      url={URL}
      service="facade"
      serviceLabel="Nettoyage de façade vitrée"
      h1Texte={TITRE}
      h1={
        <>
          Nettoyage de façade vitrée par drone,{" "}
          <span className="text-brand-orange-400">sans nacelle ni cordiste</span>
        </>
      }
      accroche="Immeubles de bureaux, sièges sociaux, bâtiments tertiaires : les vitrages en hauteur se ternissent sous la pollution, le sel et la poussière. Notre drone les nettoie depuis les airs, sans nacelle sur le trottoir ni fermeture d'accès."
      heroImage="/images/chronos drone.jpg"
      heroAlt="Drone de nettoyage de façade Ellipsys au sol avant une intervention"
      badgeZone="Arc méditerranéen · Partout en France sur projet"
      pointsCles={[
        "Sans nacelle ni cordiste",
        "Aucune emprise sur la voie publique",
        "Activité des occupants maintenue",
        "Devis gratuit sous 24 h",
      ]}
      formTitre="Chiffrage de votre façade sous 24 h"
      formSoustitre="Indiquez le type de bâtiment, la hauteur approximative et la localisation."
      preuve={{
        image: "/images/SCUTUMFACADE.png",
        alt: "Bâtiment professionnel à façades vitrées nettoyé par drone à Montpellier",
        legende: "Chantier réel à Montpellier : deux façades vitrées nettoyées par drone en deux jours, sans nacelle ni emprise au sol",
      }}
      benefices={[
        {
          titre: "Pas de nacelle, pas de rue bloquée",
          texte:
            "Une nacelle impose de neutraliser le trottoir, parfois une voie de circulation, avec les autorisations qui vont avec. Le drone travaille depuis les airs : seul le périmètre de sécurité immédiat est délimité, le temps du passage.",
        },
        {
          titre: "Vos équipes continuent de travailler",
          texte:
            "Pas de cordiste devant les fenêtres pendant des journées entières, pas d'échafaudage qui masque la lumière. L'intervention se planifie par façade, y compris en dehors des heures de bureau si nécessaire.",
        },
        {
          titre: "Une méthode adaptée au verre",
          texte:
            "Pression maîtrisée et méthode réglée selon le vitrage et les menuiseries, pour retirer pollution, sel et poussière sans rayer le verre ni agresser les joints.",
        },
        {
          titre: "Les grandes hauteurs sans risque de chute",
          texte:
            "Personne ne travaille suspendu ni en nacelle. Le risque de chute de hauteur est supprimé à la source, et nos télépilotes sont certifiés DGAC pour les vols en zone urbaine (scénarios STS-01 et STS-02).",
        },
      ]}
      prix={[
        {
          label: "Façade vitrée",
          prix: "sur devis au m²",
          note: "Selon la surface vitrée, la hauteur, l'accès et le niveau d'encrassement.",
        },
        {
          label: "Façade + bardage",
          prix: "sur devis groupé",
          note: "Vitrages et bardage traités pendant la même intervention.",
        },
        {
          label: "Contrat d'entretien",
          prix: "sur devis",
          note: "Passages planifiés dans l'année pour garder une façade nette.",
        },
      ]}
      prixNote="Envoyez-nous quelques photos de la façade avec votre demande : nous chiffrons plus vite et plus juste, sans visite commerciale imposée."
      faq={[
        {
          q: "Comment se passe le nettoyage d'une façade vitrée par drone ?",
          r: "Le drone, relié au sol, pulvérise sur le vitrage façade par façade, piloté par un télépilote certifié, pendant que le périmètre de sécurité est tenu au pied du bâtiment. Aucune nacelle, aucun cordiste, aucune emprise durable sur la voie publique.",
        },
        {
          q: "Faut-il fermer la rue ou le bâtiment ?",
          r: "Non. Seul un périmètre de sécurité est délimité au pied de la façade le temps du passage, conformément à la réglementation DGAC. Le bâtiment reste ouvert et occupé, et nous pouvons intervenir en dehors des heures de bureau.",
        },
        {
          q: "Le nettoyage par drone convient-il à tous les vitrages ?",
          r: "Il convient à la plupart des façades vitrées de bâtiments tertiaires et industriels. Nous examinons les photos de la façade, la hauteur et l'environnement avant de confirmer la faisabilité et de chiffrer l'intervention.",
        },
        {
          q: "Le drone peut-il voler en ville ?",
          r: "Oui, dans le cadre des scénarios européens STS-01 et STS-02, pour lesquels nos télépilotes sont certifiés. Nous effectuons les déclarations nécessaires auprès de la DGAC : vous n'avez aucune démarche à faire.",
        },
        {
          q: "Pouvez-vous traiter aussi le bardage du bâtiment ?",
          r: "Oui. Si le bâtiment associe vitrages et bardage métallique, les deux sont traités pendant la même intervention, avec une méthode adaptée à chaque support.",
        },
      ]}
      zonesTitre="Nous intervenons notamment dans ces villes"
      communes={[
        "Montpellier",
        "Nîmes",
        "Béziers",
        "Sète",
        "Narbonne",
        "Perpignan",
        "Toulouse",
        "Avignon",
        "Marseille",
        "et partout en France sur projet",
      ]}
      areaServed={[
        { "@type": "AdministrativeArea", name: "Occitanie" },
        { "@type": "AdministrativeArea", name: "Provence-Alpes-Côte d'Azur" },
        { "@type": "Country", name: "France" },
      ]}
      pageDetail={{
        href: "/prestations/nettoyage-facade",
        label: "Voir notre offre complète de nettoyage de façades",
      }}
      liensConnexes={[
        { href: "/nettoyage-bardage-industriel", label: "Nettoyage de bardage industriel" },
        { href: "/nettoyage-facade-montpellier", label: "Nettoyage de façade à Montpellier" },
      ]}
    />
  );
}
