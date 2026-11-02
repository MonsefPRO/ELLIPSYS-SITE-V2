import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « nettoyage toiture
 * agricole » : exploitants, éleveurs, caves et coopératives qui veulent nettoyer
 * ou démousser la couverture d'un hangar, d'une stabulation, d'un chai ou d'un
 * bâtiment de stockage. Maillée uniquement avec les autres pages cachées.
 */
const URL = "https://ellipsys-solutions.com/nettoyage-toiture-agricole";
const TITRE = "Nettoyage de toiture agricole";
const TITRE_SEO = "Nettoyage et démoussage de toiture agricole";
const DESCRIPTION =
  "Nettoyage et démoussage de toiture agricole par drone : hangar, stabulation, chai. Personne sur la couverture, produit choisi selon le support. Devis 24 h.";

export const metadata: Metadata = {
  title: TITRE_SEO,
  description: DESCRIPTION,
  alternates: { canonical: URL },
};

export default function Page() {
  return (
    <LandingPage
      url={URL}
      service="toiture"
      serviceLabel="Nettoyage et démoussage de toiture agricole"
      h1Texte={TITRE}
      h1={
        <>
          Nettoyage de toiture agricole,{" "}
          <span className="text-brand-orange-400">sans monter sur la couverture</span>
        </>
      }
      accroche="Hangars, stabulations, chais, bâtiments de stockage : leurs couvertures accumulent mousses, lichens, poussières et fientes, et comptent souvent des plaques qui ne supportent pas le poids d'une personne. Nous les nettoyons et les démoussons par drone, depuis le sol, avec une méthode choisie selon le support."
      heroImage="/images/drone-toiture-intervention.webp"
      heroAlt="Drone Ellipsys en intervention de traitement sur une toiture"
      badgeZone="Arc méditerranéen · Partout en France sur projet"
      pointsCles={[
        "Personne sur la couverture",
        "Méthode et produit selon le support",
        "Calé sur le calendrier de l'exploitation",
        "Devis gratuit sous 24 h",
      ]}
      formTitre="Chiffrage de votre toiture sous 24 h"
      formSoustitre="Indiquez le type de bâtiment, le matériau de couverture, la surface approximative et la commune."
      preuve={{
        image: "/images/demoussage-toiture-eimargues.webp",
        alt: "Avant après démoussage de toiture par drone, chantier réel dans le Gard",
        legende: "Chantier réel : démoussage de toiture par drone à Aimargues (30), sans que personne ne monte sur le toit",
      }}
      benefices={[
        {
          titre: "Personne ne monte sur la couverture",
          texte:
            "Plaques en fibres-ciment, plaques éclairantes translucides, panneaux vieillis : beaucoup de toitures agricoles ne sont pas faites pour qu'on marche dessus, et la MSA rappelle régulièrement que les chutes à travers ces toitures fragiles causent chaque année des accidents graves, parfois mortels. Le drone travaille en vol, piloté depuis le sol : aucun pied sur la couverture.",
        },
        {
          titre: "Une méthode par support",
          texte:
            "Bac acier et panneaux sandwich : nettoyage à pression maîtrisée et produit non agressif pour le laquage et les fixations. Tuiles des chais et des mas : démoussage sans haute pression, hydrofuge en option. Fibres-ciment : jamais de haute pression. Le support est identifié avant le devis.",
        },
        {
          titre: "Amiante : le repérage d'abord",
          texte:
            "Sur une toiture en fibres-ciment d'un bâtiment dont le permis de construire est antérieur au 1er juillet 1997, un repérage amiante avant travaux est exigé avant toute intervention (Code du travail, articles R4412-97 et suivants). Sur ces supports, aucune haute pression n'est employée.",
        },
        {
          titre: "Animaux et récoltes préservés",
          texte:
            "Produits choisis selon le support, biodégradables, sans javel, et toujours soumis à votre accord avant l'intervention. Nous convenons avec vous des précautions propres au bâtiment : animaux à l'écart ou ouvertures fermées, fourrages et récoltes stockés protégés, écoulement des eaux de toiture.",
        },
        {
          titre: "Calé sur le calendrier de l'exploitation",
          texte:
            "Nous planifions hors des périodes où le bâtiment est le plus sollicité, moissons, vendanges, rentrée des animaux ou du fourrage, et sur une fenêtre sèche, nécessaire pour que le traitement agisse. L'activité continue pendant l'intervention, seul le périmètre de sécurité immédiat est neutralisé.",
        },
        {
          titre: "Habilités et préparés",
          texte:
            "Télépilotes certifiés DGAC, vols déclarés, plan de prévention établi avec l'exploitant avant chaque chantier. Équipe habilitée B0-H0-H0V lorsque la toiture porte aussi des panneaux photovoltaïques.",
        },
      ]}
      prix={[
        {
          label: "Nettoyage ou démoussage de toiture agricole",
          prix: "sur devis",
          note: "Selon la surface, le matériau de couverture, son état et l'accès au bâtiment.",
        },
        {
          label: "Démoussage + hydrofuge",
          prix: "sur devis",
          note: "Sur les supports qui s'y prêtent, après un démoussage complet.",
        },
        {
          label: "Toiture + panneaux solaires",
          prix: "sur devis groupé",
          note: "Couverture et panneaux du même bâtiment dans le même déplacement.",
        },
      ]}
      prixNote="Envoyez-nous une photo de la toiture, le matériau de couverture et l'année de construction du bâtiment : nous vous disons quelle méthode s'applique avant de chiffrer."
      faq={[
        {
          q: "Comment nettoyer la toiture d'un hangar agricole sans monter dessus ?",
          r: "Par drone. L'appareil, piloté depuis le sol, applique le traitement ou nettoie la couverture en vol, sans que personne ne circule sur les plaques. C'est la réponse la plus directe au risque de chute à travers une toiture fragile, et elle évite d'installer nacelle ou échafaudage autour du bâtiment.",
        },
        {
          q: "Peut-on démousser une toiture en fibres-ciment ?",
          r: "Si le permis de construire du bâtiment a été délivré avant le 1er juillet 1997, un repérage amiante avant travaux est exigé avant toute intervention, au titre des articles R4412-97 et suivants du Code du travail. Dans tous les cas, aucune haute pression n'est employée sur ces supports.",
        },
        {
          q: "Le traitement est-il dangereux pour les animaux ou les récoltes ?",
          r: "Nous choisissons le produit selon le support, biodégradable et sans javel, et nous le soumettons à votre accord avant l'intervention. Les précautions sont fixées avec vous pour chaque bâtiment : animaux à l'écart ou ouvertures fermées pendant l'application, fourrages et récoltes stockés protégés.",
        },
        {
          q: "Quand nettoyer ou démousser la toiture d'un bâtiment agricole ?",
          r: "Sur une période sèche, et hors des pointes de travail de l'exploitation. L'automne, après les moissons et les vendanges, est souvent un bon moment pour démousser, avant que l'humidité de l'hiver ne relance les mousses. Nous fixons la date avec vous.",
        },
        {
          q: "Pouvez-vous nettoyer en même temps les panneaux solaires du hangar ?",
          r: "Oui. Lorsque le bâtiment porte une installation photovoltaïque, nous pouvons traiter la couverture et nettoyer les panneaux au cours du même déplacement, à l'eau filtrée et sans détergent pour les modules.",
        },
        {
          q: "Combien coûte le nettoyage d'une toiture agricole ?",
          r: "Le prix est établi sur devis, selon la surface, le matériau de couverture, son état, la pente et l'accès au bâtiment. Une photo de la toiture et l'année de construction suffisent souvent pour un premier chiffrage, gratuit, sous 24 h.",
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
        href: "/prestations/traitement-toiture",
        label: "Voir notre offre de démoussage et de traitement de toiture",
      }}
      liensConnexes={[
        { href: "/nettoyage-panneaux-solaires-hangar-agricole", label: "Panneaux solaires sur hangar agricole" },
        { href: "/nettoyage-centrale-agrivoltaique", label: "Nettoyage de centrale agrivoltaïque" },
        { href: "/blog/demoussage-toiture-automne-bon-moment", label: "Démoussage de toiture : pourquoi l'automne" },
      ]}
    />
  );
}
