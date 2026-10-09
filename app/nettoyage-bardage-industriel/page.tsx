import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « nettoyage bardage
 * industriel » : usines, entrepôts, plateformes logistiques. Angle 2-en-1
 * bardage + panneaux solaires en toiture. Maillée uniquement avec les autres
 * pages cachées.
 */
const URL = "https://ellipsys-solutions.com/nettoyage-bardage-industriel";
const TITRE = "Nettoyage de bardage industriel par drone";
const DESCRIPTION =
  "Nettoyage de bardage d'usines et d'entrepôts par drone, sans nacelle ni arrêt d'activité. Bardage et panneaux solaires en une intervention. Devis 24 h.";

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
    images: [{ url: "/images/Bardage-facades.png", width: 1680, height: 945, alt: "Nettoyage de bardage métallique par drone" }],
  },
};

export default function Page() {
  return (
    <LandingPage
      url={URL}
      service="facade"
      serviceLabel="Nettoyage de bardage industriel"
      h1Texte={TITRE}
      h1={
        <>
          Nettoyage de bardage industriel par drone,{" "}
          <span className="text-brand-orange-400">sans nacelle ni arrêt d&apos;activité</span>
        </>
      }
      accroche="Usines, entrepôts, plateformes logistiques : le bardage se salit sur des centaines de mètres linéaires et à des hauteurs où la nacelle bloque les quais et les voies poids lourds. Notre drone nettoie depuis les airs, le site continue de tourner."
      heroImage="/images/Bardage-facades.png"
      heroAlt="Drone de nettoyage pulvérisant un bardage métallique de bâtiment industriel"
      badgeZone="Arc méditerranéen · Partout en France sur projet"
      pointsCles={[
        "Sans nacelle ni échafaudage",
        "Quais et voies de circulation libres",
        "Bardage et panneaux solaires en un passage",
        "Devis gratuit sous 24 h",
      ]}
      formTitre="Chiffrage de votre site sous 24 h"
      formSoustitre="Indiquez le type de bâtiment, la hauteur approximative et la localisation."
      preuve={{
        image: "/images/nettoyage-vitrages-scutum-montpellier.png",
        alt: "Bâtiment professionnel à Montpellier dont les façades ont été nettoyées par drone",
        legende: "Chantier réel à Montpellier : deux façades d'un bâtiment professionnel nettoyées par drone en deux jours, sans nacelle",
      }}
      benefices={[
        {
          titre: "Votre activité ne s'arrête pas",
          texte:
            "Pas de nacelle à positionner devant les quais, pas d'échafaudage le long des voies. Le drone travaille depuis les airs et seul le périmètre de sécurité immédiat est neutralisé, ce qui laisse les flux poids lourds et le personnel circuler.",
        },
        {
          titre: "Une méthode adaptée à chaque revêtement",
          texte:
            "Acier laqué, aluminium, bois ou composite : la pression et la méthode sont réglées selon le support, pour retirer l'encrassement sans écailler la peinture ni marquer le revêtement.",
        },
        {
          titre: "Un bardage propre dure plus longtemps",
          texte:
            "L'encrassement retient l'humidité et les polluants au contact du revêtement et accélère son vieillissement. Un entretien régulier préserve la protection anticorrosion et repousse un ravalement bien plus coûteux.",
        },
        {
          titre: "Bardage et panneaux solaires en une intervention",
          texte:
            "Si votre toiture porte une centrale photovoltaïque, le drone traite le bardage pendant que notre robot nettoie les panneaux. Un déplacement, un prestataire, un créneau unique sur votre site.",
        },
        {
          titre: "Habilités et préparés",
          texte:
            "Télépilotes certifiés DGAC, opérations conformes aux scénarios européens STS-01 et STS-02, équipe habilitée B0-H0-H0V, plan de prévention établi avec votre responsable sécurité avant chaque chantier.",
        },
        {
          titre: "Les grandes hauteurs sans risque de chute",
          texte:
            "Personne ne travaille suspendu ni en nacelle. Le risque de chute de hauteur, premier risque des travaux de façade, est supprimé à la source.",
        },
      ]}
      prix={[
        {
          label: "Bardage seul",
          prix: "sur devis au m²",
          note: "Selon la surface, la hauteur, le revêtement et le niveau d'encrassement.",
        },
        {
          label: "Bardage + panneaux solaires",
          prix: "sur devis groupé",
          note: "Les deux surfaces traitées dans la même intervention, un seul déplacement.",
        },
        {
          label: "Contrat annuel",
          prix: "sur devis",
          note: "Un à deux passages par an selon l'environnement du site.",
        },
      ]}
      prixNote="Envoyez-nous quelques photos du bâtiment avec votre demande : nous chiffrons plus vite et plus juste, sans visite commerciale imposée."
      faq={[
        {
          q: "Faut-il arrêter l'activité du site pendant le nettoyage du bardage ?",
          r: "Non. Le drone travaille depuis les airs, sans nacelle devant les quais ni échafaudage le long des voies. Seul le périmètre de sécurité immédiat est neutralisé, et nous planifions les zones en fonction de vos flux, y compris en dehors des heures d'exploitation si nécessaire.",
        },
        {
          q: "Le nettoyage peut-il abîmer un bardage métallique laqué ?",
          r: "Pas si la méthode est adaptée. Sur un acier laqué, une pression excessive ou un produit agressif peut écailler la peinture et ouvrir la voie à la corrosion. Nous réglons la pression et la méthode selon le revêtement, et nous évitons d'insister sur les joints et les fixations.",
        },
        {
          q: "À quelle fréquence nettoyer le bardage d'une usine ou d'un entrepôt ?",
          r: "Un à deux passages par an dans la plupart des cas. Un site proche d'un axe routier chargé, d'une zone de cultures, du littoral ou d'une activité génératrice de poussières s'encrasse plus vite et justifie un rythme plus soutenu.",
        },
        {
          q: "Pouvez-vous nettoyer le bardage et les panneaux solaires en même temps ?",
          r: "Oui, c'est l'intérêt de maîtriser à la fois le drone et le robot. Le drone traite le bardage, le robot nettoie les panneaux en toiture, au cours de la même intervention. Vous n'avez qu'un prestataire, un planning et un déplacement à prendre en charge.",
        },
        {
          q: "Le drone peut-il intervenir sur un site industriel en zone urbaine ?",
          r: "Oui. Les vols en zone peuplée sont encadrés par les scénarios européens STS-01 et STS-02, pour lesquels nos télépilotes sont certifiés. Nous effectuons les déclarations auprès de la DGAC et établissons le périmètre de sécurité avec votre responsable de site.",
        },
        {
          q: "Que faut-il prévoir de notre côté ?",
          r: "Un point d'eau, l'accès au site et un interlocuteur sécurité pour valider le plan de prévention. Des photos du bâtiment envoyées avec la demande nous permettent de chiffrer rapidement.",
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
        href: "/prestations/nettoyage-facade",
        label: "Voir notre offre complète de nettoyage de façades et bardages",
      }}
      liensConnexes={[
        { href: "/nettoyage-panneaux-solaires-toiture-industrielle", label: "Panneaux solaires en toiture industrielle" },
        { href: "/nettoyage-centrale-solaire", label: "Nettoyage de centrale solaire" },
      ]}
    />
  );
}
