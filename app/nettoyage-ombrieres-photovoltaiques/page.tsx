import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Cible ICP 1 : exploitants et propriétaires de grandes ombrières photovoltaïques
 * sur l'arc méditerranéen. Segment créé par l'obligation de solarisation des
 * parkings (loi APER) : la base installée d'ombrières grandit vite et personne
 * n'occupe encore sérieusement la requête d'entretien.
 */
export const metadata: Metadata = {
  title: "Nettoyage d'ombrières photovoltaïques",
  description:
    "Nettoyage et entretien d'ombrières photovoltaïques de parking par robot et drone, sans fermer le parking. Arc méditerranéen, de Perpignan à Marseille. Devis sous 24 h.",
  alternates: {
    canonical: "https://ellipsys-solutions.com/nettoyage-ombrieres-photovoltaiques",
  },
};

export default function Page() {
  return (
    <LandingPage
      url="https://ellipsys-solutions.com/nettoyage-ombrieres-photovoltaiques"
      service="solaire"
      serviceLabel="Nettoyage d'ombrières photovoltaïques"
      h1Texte="Nettoyage d'ombrières photovoltaïques"
      h1={
        <>
          Nettoyage d&apos;ombrières photovoltaïques,{" "}
          <span className="text-brand-orange-400">sans fermer le parking</span>
        </>
      }
      accroche="Une ombrière ne s'encrasse pas comme une centrale au sol. Fientes d'oiseaux, résidus d'hydrocarbures et poussière de roulement forment un dépôt gras qui résiste à la pluie. Nous intervenons par robot et par drone, place par place, sans immobiliser votre parking ni arrêter la production."
      heroImage="/images/robot-vue-aerienne.jpg"
      heroAlt="Nettoyage robotisé d'ombrières photovoltaïques de parking sur l'arc méditerranéen"
      formTitre="Audit de votre parc sous 24 h"
      formSoustitre="Dites-nous le nombre de places couvertes et la localisation des sites."
      preuve={{
        image: "/images/avant-apres-panneaux.jpg",
        alt: "Avant après nettoyage de panneaux photovoltaïques d'ombrière",
        legende: "Chantier réel, panneaux rendus à leur transparence d'origine",
        badges: ["AVANT", "APRÈS"],
      }}
      benefices={[
        {
          titre: "Votre parking reste ouvert",
          texte:
            "Nous travaillons par zones, en décalé, en neutralisant seulement le périmètre de sécurité en cours de traitement. Vos clients, vos salariés et vos livraisons continuent de circuler. Pour les sites commerciaux, nous intervenons aussi en dehors des heures d'ouverture.",
        },
        {
          titre: "1 200 m² par heure, sans arrêt de production",
          texte:
            "Notre robot télécommandé traite jusqu'à 1 200 m² par heure, avec une brosse de 1,20 m, et franchit des pentes jusqu'à 25°. Sur un parc de plusieurs milliers de mètres carrés, l'intervention se planifie à la journée plutôt qu'à la semaine.",
        },
        {
          titre: "Le dépôt gras des parkings, traité sans détergent",
          texte:
            "Fientes, pollens, particules de freinage et résidus d'échappement forment un film adhérent que le rinçage naturel ne retire pas. Nous travaillons à l'eau filtrée, à pression maîtrisée, sans produit agressif, ce qui préserve le verre et les garanties constructeur.",
        },
        {
          titre: "Habilités pour travailler sous tension",
          texte:
            "Équipe habilitée B0-H0-H0V pour intervenir en sécurité à proximité des installations électriques, télépilotes certifiés DGAC, opérations conformes aux scénarios européens STS-01 et STS-02, et plan de prévention établi avant chaque chantier.",
        },
      ]}
      prix={[
        {
          label: "Parc d'ombrières",
          prix: "sur devis au m²",
          note: "Parkings commerciaux, tertiaires et logistiques. Intervention planifiée par zones.",
        },
        {
          label: "Contrat d'entretien annuel",
          prix: "sur devis",
          note: "Un à deux passages par an selon l'exposition du site. Rapport avant et après.",
        },
        {
          label: "Multi-sites",
          prix: "sur devis groupé",
          note: "Plusieurs sites sur l'arc méditerranéen regroupés dans une même tournée.",
        },
      ]}
      prixNote="Pour les exploitants, asset managers et gestionnaires de patrimoine : nous réalisons un audit de soiling gratuit sur un site représentatif avant toute proposition. L'objectif est de vérifier que le gain de production justifie l'intervention. S'il ne la justifie pas, nous vous le disons."
      faq={[
        {
          q: "Faut-il fermer le parking pendant l'intervention ?",
          r: "Non. Nous procédons par zones successives en ne neutralisant que le périmètre de sécurité immédiat, ce qui laisse le reste du parking en service. Sur les sites commerciaux à forte fréquentation, nous programmons généralement l'intervention en dehors des heures d'ouverture pour supprimer toute gêne.",
        },
        {
          q: "Une ombrière s'encrasse-t-elle plus vite qu'une centrale au sol ?",
          r: "Elle s'encrasse différemment, et souvent plus vite. Un parking concentre trois sources absentes d'une centrale au sol : les fientes d'oiseaux, qui créent des points d'ombrage très pénalisants, les particules de freinage, et les résidus d'échappement. Ce mélange forme un film gras qui adhère au verre et que la pluie ne retire pas, contrairement à une poussière minérale sèche.",
        },
        {
          q: "À quelle fréquence entretenir des ombrières sur l'arc méditerranéen ?",
          r: "Un passage par an constitue la base sur un site standard, idéalement au printemps après la saison des remontées de sable saharien. Sur un parking très fréquenté, à proximité du littoral ou d'un axe routier important, deux passages annuels sont plus pertinents. Nous mesurons l'encrassement réel avant de recommander une fréquence, plutôt que d'appliquer une règle théorique.",
        },
        {
          q: "La loi APER nous impose des ombrières, encadre-t-elle aussi leur entretien ?",
          r: "L'obligation de solarisation porte sur l'installation, pas sur l'entretien. La loi APER impose la couverture partielle des parkings extérieurs de plus de 10 000 m² depuis le 1er juillet 2026, et de 1 500 à 10 000 m² à partir du 1er juillet 2028, avec des pénalités annuelles en cas de non-conformité. L'entretien relève ensuite de votre intérêt économique : c'est lui qui détermine le rendement réel de l'investissement que vous venez de réaliser.",
        },
        {
          q: "Pourquoi l'entretien devient-il plus rentable qu'avant ?",
          r: "Parce que le nombre d'heures réellement valorisées diminue. La France a connu 407 heures de prix négatifs au premier semestre 2026, soit près de 10 % du temps, dont 65 % entre 11h et 16h, au pic de production solaire. Quand la plage horaire rentable se resserre, chaque kilowattheure perdu par encrassement pendant les heures qui comptent coûte proportionnellement plus cher.",
        },
        {
          q: "Intervenez-vous sur plusieurs sites d'un même groupe ?",
          r: "Oui, et c'est le cas de figure où nous sommes les plus compétitifs. Regrouper plusieurs sites de l'arc méditerranéen dans une même tournée mutualise les coûts de déplacement et de mobilisation. Nous établissons alors un planning annuel par site, avec un rapport de production avant et après pour chacun.",
        },
      ]}
      communes={[
        "Montpellier",
        "Nîmes",
        "Béziers",
        "Narbonne",
        "Perpignan",
        "Sète",
        "Alès",
        "Lunel",
        "Agde",
        "Arles",
        "Avignon",
        "Salon-de-Provence",
        "Martigues",
        "Istres",
        "Fos-sur-Mer",
        "Marseille",
        "Aix-en-Provence",
      ]}
      pageDetail={{
        href: "/prestations/nettoyage-solaire",
        label: "Voir notre offre complète pour les parcs photovoltaïques",
      }}
    />
  );
}
