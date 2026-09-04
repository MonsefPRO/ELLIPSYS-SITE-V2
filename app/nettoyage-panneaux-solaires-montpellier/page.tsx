import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Landing page Google Ads, groupe « Panneaux solaires ».
 * Cible mixte particuliers + exploitants : le panier moyen y est le plus élevé
 * et la concurrence publicitaire la plus faible des trois groupes.
 */
export const metadata: Metadata = {
  title: "Nettoyage de panneaux solaires à Montpellier, devis 24 h",
  description:
    "Nettoyage de panneaux solaires et de centrales photovoltaïques par robot et drone à Montpellier et en Occitanie. Rendement mesuré avant et après. Devis gratuit sous 24 h.",
  alternates: { canonical: "https://ellipsys-solutions.com/nettoyage-panneaux-solaires-montpellier" },
};

export default function Page() {
  return (
    <LandingPage
      url="https://ellipsys-solutions.com/nettoyage-panneaux-solaires-montpellier"
      service="solaire"
      serviceLabel="Nettoyage de panneaux solaires"
      h1Texte="Nettoyage de panneaux solaires à Montpellier"
      h1={
        <>
          Nettoyage de panneaux solaires à Montpellier —{" "}
          <span className="text-brand-orange-400">le rendement, mesuré</span>
        </>
      }
      accroche="Sable saharien, pollens, sel marin : en Occitanie, le dépôt ne part pas à la pluie. Nous nettoyons par robot et par drone, sans arrêt de production, et nous mesurons la production avant et après pour objectiver le gain."
      heroImage="/images/robot-centrale-sol.jpg"
      heroAlt="Robot de nettoyage de panneaux solaires sur une centrale photovoltaïque en Occitanie"
      formTitre="Votre devis gratuit sous 24 h"
      formSoustitre="Particulier ou exploitant : dites-nous simplement où vous êtes."
      preuve={{
        image: "/images/avant-apres-panneaux.jpg",
        alt: "Avant après nettoyage de panneaux photovoltaïques",
        legende: "Chantier réel, panneaux photovoltaïques rendus à leur transparence d'origine",
        badges: ["AVANT", "APRÈS"],
      }}
      benefices={[
        {
          titre: "Le gain est mesuré, pas promis",
          texte:
            "Nous relevons la production avant et après intervention. Vous ne payez pas une prestation à l'aveugle : vous constatez ce que le nettoyage a récupéré. C'est la seule façon honnête de vendre ce service.",
        },
        {
          titre: "1 200 m²/h, sans arrêt de production",
          texte:
            "Notre robot télécommandé traite jusqu'à 1 200 m² par heure, franchit des pentes jusqu'à 25° et des écarts de 70 cm entre tables. Votre centrale continue de produire pendant l'intervention.",
        },
        {
          titre: "Sans détergent, sans micro-rayure",
          texte:
            "Brosses rotatives souples de 1,20 m, débit maîtrisé à 7 L/min, aucun produit agressif. Le verre n'est pas rayé et les garanties constructeur sont préservées (Trina, JinkoSolar, Q-CELLS…).",
        },
        {
          titre: "Du particulier à la centrale au sol",
          texte:
            "12 panneaux sur une toiture ou plusieurs hectares en centrale : nous adaptons l'outil. Le drone pour les toitures et les accès difficiles, le robot pour les grandes surfaces planes.",
        },
      ]}
      prix={[
        {
          label: "Installation résidentielle",
          prix: "à partir de 350 €",
          note: "Pour 12 à 30 panneaux en toiture. Intervention en une demi-journée.",
        },
        {
          label: "Toiture professionnelle",
          prix: "sur devis au m²",
          note: "Bâtiments tertiaires et industriels équipés en photovoltaïque.",
        },
        {
          label: "Centrale au sol",
          prix: "contrat €/MWc/an",
          note: "1 à 4 passages par an selon l'exposition. Audit de soiling offert.",
        },
      ]}
      prixNote="Pour les exploitants et asset managers : nous réalisons un audit de soiling gratuit sur un site avant toute proposition. L'objectif est de vérifier que le gain de production justifie l'intervention, s'il ne la justifie pas, nous vous le disons."
      faq={[
        {
          q: "Combien de rendement peut-on récupérer ?",
          r: "Cela dépend entièrement du niveau d'encrassement, donc de votre environnement et de la date du dernier nettoyage. Une installation proche d'une zone agricole, d'un axe routier ou du littoral s'encrasse beaucoup plus vite. Plutôt que d'annoncer un pourcentage générique, nous mesurons votre production avant et après : c'est le seul chiffre qui vous engage vraiment.",
        },
        {
          q: "À quelle fréquence nettoyer en Occitanie ?",
          r: "Un passage par an convient dans la plupart des cas, idéalement au printemps après la saison des remontées de sable saharien. Sur le littoral (Sète, La Grande-Motte, Palavas) ou près de zones agricoles, deux passages annuels sont plus pertinents. Nous mesurons l'encrassement avant de recommander une fréquence.",
        },
        {
          q: "La pluie ne suffit-elle pas à nettoyer les panneaux ?",
          r: "C'est l'idée reçue la plus répandue. La pluie rince les poussières légères, mais elle ne retire ni le film minéral laissé par le sable saharien, ni les dépôts collés par le sel marin, ni les fientes. Pire : en séchant, une pluie chargée peut laisser des traces. Et en Occitanie, l'été, il ne pleut tout simplement pas assez.",
        },
        {
          q: "Le nettoyage annule-t-il la garantie de mes panneaux ?",
          r: "Non, à condition d'utiliser la bonne méthode. Ce qui annule les garanties, c'est la haute pression et les produits abrasifs. Nous travaillons par brossage doux à pression contrôlée, sans détergent, une méthode compatible avec les préconisations des principaux fabricants.",
        },
      ]}
      communes={[
        "Montpellier",
        "Lattes",
        "Pérols",
        "Castelnau-le-Lez",
        "Saint-Jean-de-Védas",
        "Sète",
        "La Grande-Motte",
        "Lunel",
        "Nîmes",
        "Béziers",
        "Aimargues",
        "Vendargues",
        "Fabrègues",
        "Mauguio",
        "Villeneuve-lès-Maguelone",
      ]}
      pageDetail={{
        href: "/prestations/nettoyage-solaire",
        label: "Voir notre offre complète pour les parcs photovoltaïques",
      }}
    />
  );
}
