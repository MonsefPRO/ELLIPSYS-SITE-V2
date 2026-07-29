import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

/**
 * Landing page Google Ads — groupe « Nettoyage façade ».
 * Cible particuliers + copropriétés (cycle de décision plus long).
 */
export const metadata: Metadata = {
  title: "Nettoyage de façade à Montpellier — sans échafaudage",
  description:
    "Nettoyage de façade par drone à Montpellier et en Occitanie : enduit, pierre, crépi, bardage. Sans nacelle, sans échafaudage, sans fermeture de rue. Devis gratuit sous 24 h.",
  alternates: { canonical: "https://ellipsys-solutions.com/nettoyage-facade-montpellier" },
};

export default function Page() {
  return (
    <LandingPage
      url="https://ellipsys-solutions.com/nettoyage-facade-montpellier"
      service="facade"
      serviceLabel="Nettoyage de façade"
      h1Texte="Nettoyage de façade à Montpellier"
      h1={
        <>
          Nettoyage de façade à Montpellier —{" "}
          <span className="text-brand-orange-400">sans échafaudage ni nacelle</span>
        </>
      }
      accroche="Enduit, pierre, crépi, bardage : nous ravalons votre façade par drone, sans monter d'échafaudage, sans immobiliser la rue et sans autorisation de voirie. Une à deux journées au lieu de plusieurs semaines."
      heroImage="/images/apres facade.jpg"
      heroAlt="Nettoyage de façade par drone à Montpellier, sans échafaudage"
      formTitre="Votre devis gratuit sous 24 h"
      formSoustitre="Maison ou copropriété : dites-nous simplement où vous êtes."
      preuve={{
        image: "/images/SCUTUMFACADE.png",
        alt: "Avant après nettoyage de façade par drone — chantier réel",
        legende: "Chantier réel — nettoyage de façade par drone, façade rendue à son aspect d'origine",
        badges: ["AVANT", "APRÈS"],
      }}
      benefices={[
        {
          titre: "Pas d'échafaudage, donc pas d'autorisation de voirie",
          texte:
            "L'échafaudage, c'est un coût de montage, une demande d'occupation du domaine public, un délai administratif et une rue encombrée pendant des semaines. Le drone décolle d'un point réduit et travaille sur toute la hauteur sans rien de tout ça.",
        },
        {
          titre: "Une méthode adaptée à chaque support",
          texte:
            "Enduit, pierre calcaire tendre, crépi, béton, bardage métal ou bois : chaque matériau demande une pression et un traitement précis. Nous adaptons la méthode au support, sans haute pression qui dégrade la surface.",
        },
        {
          titre: "Zéro travail en hauteur pour vos équipes",
          texte:
            "Aucun opérateur suspendu ni en nacelle : le risque de chute, le poste le plus lourd d'un chantier de façade en matière de sécurité et d'assurance, disparaît. Nos télépilotes sont certifiés DGAC.",
        },
        {
          titre: "Rapport photo avant/après pour l'AG ou l'assurance",
          texte:
            "Vous recevez un rapport photo daté. En copropriété, c'est un argument concret pour faire voter les travaux ; pour un particulier, c'est une trace utile en cas de revente ou de sinistre.",
        },
      ]}
      prix={[
        {
          label: "Façade de maison",
          prix: "sur devis au m²",
          note: "Selon le support, la hauteur, la surface et le degré d'encrassement.",
        },
        {
          label: "Petite copropriété",
          prix: "sur devis",
          note: "Souvent bien plus compétitif qu'un devis avec échafaudage. Rapport pour l'AG.",
        },
        {
          label: "Bâtiment tertiaire / industriel",
          prix: "sur devis",
          note: "Bardages, façades vitrées, grande hauteur, sans arrêt d'activité.",
        },
      ]}
      prixNote="Le nettoyage de façade se chiffre toujours sur devis : le prix dépend trop du support et de la hauteur pour donner un tarif au m² fiable à l'avance. Le devis reste gratuit et sous 24 h. Sur Montpellier, aucun frais de déplacement."
      faq={[
        {
          q: "Le drone nettoie-t-il aussi bien qu'un nettoyage manuel ?",
          r: "Sur une façade, oui, et souvent mieux sur les zones difficiles d'accès. Le drone pulvérise de façon homogène sur toute la hauteur, y compris les parties qu'un opérateur en nacelle atteint mal. Pour les salissures très incrustées (croûtes noires sur pierre calcaire), nous procédons par passes progressives pour ne pas abîmer le support.",
        },
        {
          q: "Est-ce que ça projette de l'eau sur les voisins ou les voitures ?",
          r: "Nous travaillons à débit maîtrisé et mettons en place un périmètre de sécurité avant l'intervention, conformément à la réglementation DGAC. Sur les façades en limite de voie ou de mitoyenneté, nous adaptons le protocole et l'horaire. C'est justement l'un des avantages : pas d'échafaudage qui gêne le voisinage pendant des semaines.",
        },
        {
          q: "Peut-on nettoyer une façade en pierre ancienne sans l'abîmer ?",
          r: "Oui, à condition de bannir la haute pression, qui arrache la couche superficielle d'une pierre tendre et accélère son réencrassement. Nous travaillons à basse pression, avec un traitement adapté au calcaire — une méthode compatible avec les prescriptions des Architectes des Bâtiments de France en secteur protégé.",
        },
        {
          q: "Combien de temps dure une intervention sur une façade ?",
          r: "Le plus souvent une à deux journées, contre plusieurs semaines dès qu'il faut monter un échafaudage et obtenir l'autorisation de voirie. C'est là que l'écart de coût global se creuse vraiment, au-delà même du prix de la prestation elle-même.",
        },
      ]}
      communes={[
        "Montpellier",
        "Castelnau-le-Lez",
        "Lattes",
        "Saint-Jean-de-Védas",
        "Pérols",
        "Grabels",
        "Juvignac",
        "Clapiers",
        "Jacou",
        "Le Crès",
        "Nîmes",
        "Sète",
        "Béziers",
        "Lunel",
        "Vendargues",
      ]}
      pageDetail={{
        href: "/prestations/nettoyage-facade",
        label: "Voir le détail de notre méthode de nettoyage de façade",
      }}
    />
  );
}
