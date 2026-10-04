import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Page SEO cachée (absente du menu et du footer), cible « inspection de toiture
 * drone Montpellier ». Maillée uniquement avec les autres pages cachées.
 */
export const metadata: Metadata = {
  title: "Inspection de toiture par drone à Montpellier",
  description:
    "Inspection de toiture par drone à Montpellier : photos haute définition et thermographie, sans échafaudage ni personne sur le toit. Rapport sous 48 h.",
  alternates: { canonical: "https://ellipsys-solutions.com/inspection-toiture-drone-montpellier" },
};

export default function Page() {
  return (
    <LandingPage
      url="https://ellipsys-solutions.com/inspection-toiture-drone-montpellier"
      service="toiture"
      serviceLabel="Inspection de toiture par drone"
      h1Texte="Inspection de toiture par drone à Montpellier"
      h1={
        <>
          Inspection de toiture par drone à Montpellier :{" "}
          <span className="text-brand-orange-400">tout voir, sans monter</span>
        </>
      }
      accroche="Tuiles déplacées, fissures, mousses, gouttières encombrées, humidité : notre drone photographie chaque versant en haute définition, et la caméra thermique repère ce que l'œil ne voit pas encore. Personne ne monte sur votre toit."
      heroImage="/images/Drone.jpg"
      heroAlt="Drone Ellipsys Solutions utilisé pour les interventions sur toiture"
      formTitre="Votre inspection, devis sous 24 h"
      formSoustitre="Indiquez simplement l'adresse et ce qui vous inquiète."
      preuve={{
        image: "/images/toitsale.jpeg",
        alt: "Tuiles canal couvertes de lichens et d'encrassement",
        legende: "Le type de dégradation qu'une inspection rapprochée met en évidence : lichens et encrassement sur tuiles canal",
      }}
      benefices={[
        {
          titre: "Personne ne monte sur votre toit",
          texte:
            "Une inspection classique suppose une échelle, quelqu'un sur la couverture et un risque de casser des tuiles. Le drone survole la toiture et la photographie versant par versant : aucune tuile n'est touchée.",
        },
        {
          titre: "Ce que l'œil ne voit pas encore",
          texte:
            "La caméra thermique radiométrique de notre DJI Matrice 4T révèle les zones d'humidité et les infiltrations naissantes, avant qu'elles n'apparaissent au plafond.",
        },
        {
          titre: "Un rapport exploitable sous 48 h",
          texte:
            "Vous recevez les photos et nos constats, versant par versant, sous 48 h. Un document utile pour décider des travaux, pour votre assurance ou pour une assemblée de copropriété.",
        },
        {
          titre: "Après un épisode de fortes pluies",
          texte:
            "Les épisodes cévenols et les coups de vent déplacent des tuiles et saturent les gouttières sans que cela se voie depuis la rue. Une inspection repère ces désordres avant qu'ils ne deviennent des infiltrations.",
        },
      ]}
      prix={[
        {
          label: "Maison individuelle",
          prix: "sur devis",
          note: "Inspection photo de l'ensemble des versants, rapport sous 48 h.",
        },
        {
          label: "Inspection + thermographie",
          prix: "sur devis",
          note: "Pour rechercher une infiltration ou un défaut d'isolation en toiture.",
        },
        {
          label: "Copropriété et tertiaire",
          prix: "sur devis",
          note: "Rapport détaillé, utilisable en assemblée générale ou auprès d'un assureur.",
        },
      ]}
      prixNote="Vous recevez un constat, pas un argumentaire : si votre toiture n'a besoin de rien, le rapport le dit."
      faq={[
        {
          q: "Combien de temps dure une inspection de toiture par drone ?",
          r: "Pour une maison individuelle, l'inspection se fait en une seule visite, sans immobiliser votre journée. Le rapport avec les photos et nos constats vous est remis sous 48 h.",
        },
        {
          q: "Le drone peut-il détecter une fuite ou une infiltration ?",
          r: "Les photos haute définition montrent les causes visibles : tuile cassée ou déplacée, faîtage abîmé, gouttière obstruée. Pour l'humidité qui ne se voit pas encore, la thermographie repère les zones anormales. Elle oriente la recherche de fuite, sans remplacer un sondage sur place quand celui-ci est nécessaire.",
        },
        {
          q: "Faut-il une autorisation pour faire voler un drone au-dessus de chez moi ?",
          r: "Les vols en zone habitée sont encadrés par les scénarios européens STS-01 et STS-02, pour lesquels nos télépilotes sont certifiés. Nous effectuons les déclarations nécessaires auprès de la DGAC : vous n'avez aucune démarche à faire.",
        },
        {
          q: "Le rapport peut-il servir pour mon assurance après un sinistre ?",
          r: "Il constitue un constat daté et illustré de l'état de votre toiture, utile pour documenter des dégâts. La prise en charge reste à l'appréciation de votre assureur, qui peut mandater son propre expert.",
        },
        {
          q: "Que se passe-t-il si l'inspection révèle un problème ?",
          r: "Pour l'encrassement, les mousses ou la protection des tuiles, nous pouvons intervenir nous-mêmes par drone, avec un démoussage ou un hydrofuge. Pour une réparation de couverture, le rapport vous permet de consulter un couvreur avec des éléments précis.",
        },
      ]}
      communes={[
        "Montpellier",
        "Castelnau-le-Lez",
        "Lattes",
        "Pérols",
        "Saint-Jean-de-Védas",
        "Juvignac",
        "Grabels",
        "Clapiers",
        "Jacou",
        "Le Crès",
        "Vendargues",
        "Mauguio",
        "Saint-Gély-du-Fesc",
        "Fabrègues",
        "Sète",
        "Lunel",
      ]}
      pageDetail={{
        href: "/prestations/thermographie",
        label: "Voir notre offre de thermographie par drone",
      }}
      liensConnexes={[
        { href: "/hydrofuge-toiture-montpellier", label: "Hydrofuge de toiture à Montpellier" },
        { href: "/demoussage-toiture-montpellier", label: "Démoussage de toiture à Montpellier" },
      ]}
    />
  );
}
