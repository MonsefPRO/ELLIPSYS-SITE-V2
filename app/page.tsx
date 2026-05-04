import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { HeroCarousel } from "../components/HeroCarousel";
import { HeroContent } from "../components/HeroContent";
import { NewsTickerBanner } from "../components/NewsTickerBanner";
import { FadeUp } from "../components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "../components/motion/Stagger";
import {
  ChevronRight, Sun, Home, Building2,
  ThermometerSun, Bug, Video, ChevronDown
} from "lucide-react";
import { getLang } from "../lib/getLang";

export const metadata: Metadata = {
  title: "Nettoyage, Inspection et Maintenance par Drone et Robot en Europe | Ellipsys",
  description: "Solutions de maintenance par drones et robots partout en Europe : nettoyage de panneaux solaires, toitures, facades, thermographie, destruction de nuisibles et imagerie.",
};

/* ── GOOGLE REVIEW SVG ─────────────────────────────────────── */
const GoogleIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const StarIcon = ({ size = "w-4 h-4" }: { size?: string }) => (
  <svg className={`${size} text-amber-400 fill-amber-400`} viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
);

export default async function HomePage() {
  const lang = await getLang();
  const isEn = lang === "en";

  /* ── PILLARS ─────────────────────────────────────────────── */
  const pillars = [
    { href: "/prestations/nettoyage-solaire", icon: Sun, image: "/images/solairebanner.png",
      title: isEn ? "Solar Farm Cleaning" : "Nettoyage de Parc Photovoltaïque",
      desc: isEn
        ? <span>Restoring the output of your photovoltaic farms using ground-based and aerial robotics.</span>
        : <span>Restauration du rendement de vos parcs photovoltaïques par robotique terrestre et aérienne.</span> },
    { href: "/prestations/traitement-toiture", icon: Home, image: "/images/drone-toiture-intervention.png",
      title: isEn ? "Roof Demossing & Waterproofing" : "Démoussage et Hydrofuge Toitures",
      desc: isEn
        ? <span>Roof maintenance and <strong>waterproofing</strong> with <strong>no scaffolding</strong> and no fall risk.</span>
        : <span>Entretien et protection <strong>hydrofuge</strong> <strong>sans échafaudage</strong> ni risque de chute.</span> },
    { href: "/prestations/nettoyage-facade", icon: Building2, image: "/images/Barda.png",
      title: isEn ? "Facade & Cladding Cleaning" : "Nettoyage Façades et Bardages",
      desc: isEn
        ? <span>Aesthetic restoration of commercial and industrial buildings <strong>without work platforms</strong>.</span>
        : <span>Restauration esthétique de vos bâtiments commerciaux et industriels <strong>sans nacelle</strong>.</span> },
    { href: "/prestations/thermographie", icon: ThermometerSun, image: "/images/thermographie-banner.png",
      title: isEn ? "Thermal Imaging & Technical Inspection" : "Thermographie et Inspection Technique",
      desc: isEn
        ? <span>Advanced energy diagnostics (<strong>Tertiary Decree</strong>) and detection of invisible anomalies.</span>
        : <span>Diagnostics énergétiques de pointe (<strong>Décret Tertiaire</strong>) et détection d&apos;anomalies invisibles.</span> },
    { href: "/prestations/nuisibles", icon: Bug, image: "/images/bannerfrelons.png",
      title: isEn ? "High-Altitude Pest Eradication" : "Destruction Nuisibles Grande Hauteur",
      desc: isEn
        ? "Rapid and secure neutralisation using strict risk-control protocols."
        : "Neutralisation rapide et sécurisée avec des protocoles stricts de maîtrise des risques." },
    { href: "/prestations/prises-de-vues", icon: Video, image: "https://images.pexels.com/photos/17590771/pexels-photo-17590771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: isEn ? "Aerial Imaging & Videography" : "Captation Audiovisuelle & Imagerie",
      desc: isEn
        ? "Cinematic high-definition aerial footage for prestige real estate and corporate events."
        : "Prises de vues aériennes cinématographiques haute définition pour l'immobilier de prestige et l'événementiel." },
  ];

  /* ── PROCESS STEPS ───────────────────────────────────────── */
  const processSteps: { num: string; title: string; desc: ReactNode }[] = isEn
    ? [
        { num: "01", title: "Initial Contact & Free Quote", desc: "Immediate assessment of your requirements, site accessibility and urgency qualification." },
        { num: "02", title: "Technical Assessment & Compliance", desc: <span>We apply a methodology strictly adapted to your site — from expert equipment selection (thermal imaging, specialist treatments) to full regulatory compliance management (<strong>DGAC</strong> flights, environmental standards).</span> },
        { num: "03", title: "Secure On-Site Operation", desc: <span>Rapid deployment of drones and robots with the establishment of a strict <strong>third-party exclusion zone</strong> on the ground.</span> },
        { num: "04", title: "Deliverables Handover", desc: "You promptly receive your intervention reports, thermal imagery or compliance documentation." },
      ]
    : [
        { num: "01", title: "Prise de contact & Devis gratuit", desc: "Analyse immédiate de votre besoin, de l'accessibilité du site et qualification de l'urgence." },
        { num: "02", title: "Étude technique & Démarches", desc: <span>Nous appliquons une méthodologie strictement adaptée à votre site. De la sélection experte du matériel (imagerie thermique, traitements spécifiques) à la gestion totale des contraintes réglementaires (vols <strong>DGAC</strong>, normes environnementales), nous préparons chaque détail.</span> },
        { num: "03", title: "Intervention sécurisée sur site", desc: <span>Déploiement rapide de nos drones et robots avec mise en place d&apos;un périmètre strict de <strong>zone d&apos;exclusion des tiers</strong> au sol.</span> },
        { num: "04", title: "Remise des livrables", desc: "Vous recevez rapidement vos rapports d'intervention, imageries thermiques ou documents de conformité." },
      ];

  /* ── REVIEWS ─────────────────────────────────────────────── */
  const reviewDate = isEn ? "One week ago · Visited in April" : "Il y a une semaine · Visité en avril";
  const reviews = [
    { name: "Nathalie Gombart", date: reviewDate, text: isEn ? "Roof demossing done — it looks brand new!! High-quality staff, competent and pleasant." : "Démoussage de ma toiture, elle est comme neuve!! Un personnel de qualité, compétent et agréable.", initials: "NG", color: "bg-blue-600" },
    { name: "S Scutum", date: reviewDate, text: isEn ? "Very professional company that handled drone facade cleaning on one of our buildings. Serious work, efficient and well-organised team." : "Entreprise très professionnelle qui a pris en charge le nettoyage de façade de l'un de nos bâtiments par drone. Travail sérieux, équipe efficace et bien organisée.", initials: "SC", color: "bg-emerald-600" },
    { name: "Famille Levaillant", date: reviewDate, text: isEn ? "Results beyond our expectations. A serious and efficient company that honours its commitments." : "Résultat au delà de nos attentes. Société sérieuse, efficace et respecte ses engagements.", initials: "FL", color: "bg-brand-orange-600" },
    { name: "Scutum Incendie", date: reviewDate, text: isEn ? "Very satisfied with the drone facade cleaning service on our Montpellier office." : "Très satisfait de la prestation de nettoyage de façade par drone sur notre agence de Montpellier.", initials: "SI", color: "bg-red-600" },
  ];

  /* ── FAQS ────────────────────────────────────────────────── */
  const faqs: { q: string; a: ReactNode }[] = isEn
    ? [
        {
          q: "As a site tenant, why must I maintain the solar panels?",
          a: (
            <div className="space-y-3">
              <p>As a tenant, you are responsible for the routine maintenance of the property entrusted to you. Maintaining the photovoltaic installation is therefore your responsibility and is essential for three reasons:</p>
              <ol className="list-decimal list-inside space-y-2 pl-2">
                <li><strong>Optimise electricity production:</strong> A clean panel captures maximum light, guaranteeing your daily energy savings.</li>
                <li><strong>Prevent hotspots:</strong> Localised soiling (bird droppings, leaves) causes destructive overheating (<strong>&quot;hotspots&quot;</strong>) that degrades the equipment.</li>
                <li><strong>Prevent material failures:</strong> Debris accumulation creates local overheating that damages the installation. Regular maintenance also frequently satisfies insurance contract requirements.</li>
              </ol>
              <Link href="/prestations/nettoyage-solaire" className="inline-flex items-center gap-1 text-brand-orange-500 font-semibold hover:underline">➔ View our solar cleaning solutions</Link>
            </div>
          ),
        },
        {
          q: "What products do you use for cleaning (roofs, facades, cladding)?",
          a: (
            <div className="space-y-4">
              <p>Unless you specify otherwise, we always select the product best suited to your surface while favouring, where possible, solutions compatible with the ISO 14001 environmental standard. Our three main treatment families are:</p>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-bold text-slate-800 mb-2">The &quot;Shock&quot; Product (Rapid Action)</p>
                  <p className="text-sm"><span className="text-emerald-600 font-semibold">(+) Pros:</span> Immediate visual result. Very effective against thick moss and heavily encrusted soiling.</p>
                  <p className="text-sm mt-1"><span className="text-red-500 font-semibold">(-) Cons:</span> More aggressive chemical action requiring thorough rinsing. Greater environmental impact if run-off water is not managed.</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-bold text-slate-800 mb-2">The Slow-Action Product (No Rinse)</p>
                  <p className="text-sm"><span className="text-emerald-600 font-semibold">(+) Pros:</span> Very gentle treatment that perfectly respects fragile materials (old tiles, slate, render). Acts in depth over time through rainfall and prevents vegetation regrowth.</p>
                  <p className="text-sm mt-1"><span className="text-red-500 font-semibold">(-) Cons:</span> Results are not immediate. Several weeks or months must pass before the surface becomes completely clean.</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-bold text-slate-800 mb-2">Enzymatic Treatment (Bio-Cleaning)</p>
                  <p className="text-sm"><span className="text-emerald-600 font-semibold">(+) Pros:</span> 100% ecological and biodegradable solution (&gt;90%). Enzymes target only micro-organisms with no risk to the environment, people or surrounding plants.</p>
                  <p className="text-sm mt-1"><span className="text-red-500 font-semibold">(-) Cons:</span> Intervention cost may be higher. Curative action can be limited against extreme soiling without repeated applications.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/prestations/traitement-toiture" className="inline-flex items-center gap-1 text-brand-orange-500 font-semibold hover:underline">➔ Roof expertise</Link>
                <Link href="/prestations/nettoyage-facade" className="inline-flex items-center gap-1 text-brand-orange-500 font-semibold hover:underline">➔ Facade & cladding expertise</Link>
              </div>
            </div>
          ),
        },
        {
          q: "Is the drone noisy?",
          a: (
            <div className="space-y-3">
              <p>Our drone manufacturers, whose products comply with CE standards, integrate strict noise emission limitations at the design stage. Our equipment operates in full compliance with the authorised regulatory thresholds, including in urban and peri-urban areas.</p>
              <Link href="/methode" className="inline-flex items-center gap-1 text-brand-orange-500 font-semibold hover:underline">➔ View Our Commitments</Link>
            </div>
          ),
        },
        {
          q: "Do you need access to water or electricity on my site?",
          a: (
            <p>Yes, in general, access to a mains water point on your site is essential. Our drones and spray robots need to be connected to a water supply to feed our filtration (<strong>osmosed water</strong>) and continuous pumping systems. Electricity access is also required depending on your installation configuration. In cases of technical constraints, we can however organise operations using specialist equipment such as tanks, generators or other solutions as needed.</p>
          ),
        },
        {
          q: "Who handles the flight authorisations?",
          a: (
            <div className="space-y-3">
              <p>We manage all administrative procedures related to drone operations across Europe. Depending on your site location, we may face specific regulatory or environmental constraints (proximity to an airport, military base, school, Natura 2000 designated area, etc.). Rest assured: in all cases, we handle the entirety of the procedures related to these specific flights.</p>
              <p className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm"><strong>Important:</strong> French airspace regulations (<strong>AlphaTango</strong>) impose mandatory lead times of <strong>10 working days</strong> after the flight application, which itself is only submitted after your order confirmation, in order to operate in full legal compliance.</p>
              <Link href="/methode" className="inline-flex items-center gap-1 text-brand-orange-500 font-semibold hover:underline">➔ View Our Commitments</Link>
            </div>
          ),
        },
        {
          q: "What is a third-party exclusion zone?",
          a: (
            <p>Even though our methods allow us to minimise disruption to your site, safety remains our absolute priority. In accordance with <strong>DGAC</strong> regulations, we establish a <strong>&quot;third-party exclusion zone&quot;</strong> marked with cones and barrier tape. This is the safety perimeter within which our equipment operates and may land in an emergency if necessary. Access to this zone is strictly prohibited to any person not involved in the operation.</p>
          ),
        },
        {
          q: "What happens if it rains or is too windy on the day?",
          a: (
            <p>Both aerial and ground safety are our absolute priority. Our drone operations are conducted in strict compliance with manufacturer meteorological tolerances and the safety standards of <strong>DGAC</strong> and <strong>EASA</strong> (European scenarios <strong>STS-01</strong> and <strong>STS-02</strong>). If weather conditions exceed these regulatory thresholds, your operation is automatically rescheduled at no additional cost.</p>
          ),
        },
      ]
    : [
        {
          q: "En tant que locataire d'un site, pourquoi dois-je entretenir les panneaux solaires ?",
          a: (
            <div className="space-y-3">
              <p>En tant que locataire, vous avez la charge de l&apos;entretien courant du bien qui vous est confié. L&apos;entretien de l&apos;installation photovoltaïque est donc de votre responsabilité et s&apos;avère indispensable pour trois raisons :</p>
              <ol className="list-decimal list-inside space-y-2 pl-2">
                <li><strong>Optimiser la production d&apos;électricité :</strong> Un panneau propre capte un maximum de lumière, ce qui garantit vos économies d&apos;énergie au quotidien.</li>
                <li><strong>Éviter les points chauds :</strong> Les salissures localisées (fientes, feuilles) provoquent des surchauffes destructrices (<strong>&quot;hotspots&quot;</strong>) qui dégradent le matériel.</li>
                <li><strong>Prévenir les avaries matérielles :</strong> L&apos;accumulation de débris crée des surchauffes locales qui endommagent l&apos;installation. Un entretien régulier répond d&apos;ailleurs souvent aux exigences de votre contrat d&apos;assurance.</li>
              </ol>
              <Link href="/prestations/nettoyage-solaire" className="inline-flex items-center gap-1 text-brand-orange-500 font-semibold hover:underline">➔ Voir nos solutions de nettoyage solaire</Link>
            </div>
          ),
        },
        {
          q: "Quels types de produits utilisez-vous pour le nettoyage (toitures, façades, bardages) ?",
          a: (
            <div className="space-y-4">
              <p>Sauf avis contraire de votre part, nous sélectionnons toujours le produit le plus adapté à votre surface tout en privilégiant, dans la mesure du possible, des solutions compatibles avec la norme environnementale ISO 14001. Voici nos 3 grandes familles de traitements :</p>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-bold text-slate-800 mb-2">Le Produit &quot;Choc&quot; (Action rapide)</p>
                  <p className="text-sm"><span className="text-emerald-600 font-semibold">(+) Les Plus :</span> Résultat visuel immédiat. Très puissant contre les mousses épaisses et les salissures fortement incrustées.</p>
                  <p className="text-sm mt-1"><span className="text-red-500 font-semibold">(-) Les Moins :</span> Action chimique plus agressive nécessitant un rinçage abondant. Impact environnemental plus fort si les eaux de ruissellement ne sont pas maîtrisées.</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-bold text-slate-800 mb-2">Le Produit à Action Lente (Sans rinçage)</p>
                  <p className="text-sm"><span className="text-emerald-600 font-semibold">(+) Les Plus :</span> Traitement très doux qui respecte parfaitement les matériaux fragiles (tuiles anciennes, ardoises, crépis). Il agit en profondeur sur la durée grâce aux intempéries et prévient le retour de la végétation.</p>
                  <p className="text-sm mt-1"><span className="text-red-500 font-semibold">(-) Les Moins :</span> Le résultat n&apos;est pas immédiat. Il faut patienter plusieurs semaines ou mois pour voir la surface devenir totalement propre.</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="font-bold text-slate-800 mb-2">Le Traitement Enzymatique (Bio-nettoyage)</p>
                  <p className="text-sm"><span className="text-emerald-600 font-semibold">(+) Les Plus :</span> Solution 100 % écologique et biodégradable (à plus de 90 %). Les enzymes ciblent uniquement les micro-organismes sans aucun danger pour l&apos;environnement, l&apos;homme ou vos plantations alentour.</p>
                  <p className="text-sm mt-1"><span className="text-red-500 font-semibold">(-) Les Moins :</span> Coût d&apos;intervention parfois supérieur. L&apos;action curative peut être limitée face à des encrassements extrêmes sans des applications répétées.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/prestations/traitement-toiture" className="inline-flex items-center gap-1 text-brand-orange-500 font-semibold hover:underline">➔ Voir nos expertises toitures</Link>
                <Link href="/prestations/nettoyage-facade" className="inline-flex items-center gap-1 text-brand-orange-500 font-semibold hover:underline">➔ Voir nos expertises façades & bardages</Link>
              </div>
            </div>
          ),
        },
        {
          q: "Le drone est-il bruyant ?",
          a: (
            <div className="space-y-3">
              <p>Les constructeurs de nos drones, fabriqués en conformité avec les normes CE, intègrent dès la conception des standards stricts de limitation des émissions sonores. Nos appareils opèrent en respectant scrupuleusement les seuils réglementaires autorisés, y compris en zone urbaine et périurbaine.</p>
              <Link href="/methode" className="inline-flex items-center gap-1 text-brand-orange-500 font-semibold hover:underline">➔ Voir nos Engagements</Link>
            </div>
          ),
        },
        {
          q: "Avez-vous besoin d'un accès à l'eau ou à l'électricité sur mon site ?",
          a: (
            <p>Oui, de manière générale, un accès à un point d&apos;eau de ville est indispensable sur votre site. Nos drones et robots pulvérisateurs ont besoin d&apos;être raccordés à une arrivée d&apos;eau pour alimenter nos systèmes de filtration (<strong>eau osmosée</strong>) et de pompage en continu. L&apos;accès à l&apos;électricité est également requis selon les configurations de votre installation. En cas de contraintes techniques, nous pouvons néanmoins organiser les chantiers en mobilisant des équipements spéciaux de type citernes, générateurs, ou autres selon vos besoins.</p>
          ),
        },
        {
          q: "Qui gère les autorisations de vol ?",
          a: (
            <div className="space-y-3">
              <p>Nous gérons l&apos;intégralité des démarches administratives liées à l&apos;exploitation des drones à l&apos;échelle européenne. Selon la localisation de votre site, nous pouvons être confrontés à des contraintes réglementaires ou environnementales particulières (proximité d&apos;un aéroport, base militaire, établissement scolaire, zone classée Natura 2000, etc.). Soyez rassuré : dans tous les cas, nous prenons en charge la totalité des démarches liées à ces vols spécifiques.</p>
              <p className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm"><strong>Important :</strong> La réglementation aérienne française (<strong>AlphaTango</strong>) impose des délais incompressibles de <strong>10 jours ouvrables</strong> après la demande de vol, qui ne s&apos;effectue elle-même qu&apos;après votre validation de commande, et ce, afin d&apos;opérer en toute légalité.</p>
              <Link href="/methode" className="inline-flex items-center gap-1 text-brand-orange-500 font-semibold hover:underline">➔ Voir nos Engagements</Link>
            </div>
          ),
        },
        {
          q: "Qu'est-ce qu'une zone d'exclusion des tiers ?",
          a: (
            <p>Même si nos méthodes nous permettent de limiter au maximum les perturbations sur votre site, la sécurité reste notre priorité absolue. Conformément à la réglementation de la <strong>DGAC</strong>, nous mettons en place une <strong>&quot;zone d&apos;exclusion des tiers&quot;</strong> balisée à l&apos;aide de cônes et de rubalise. Il s&apos;agit du périmètre de sécurité dans lequel nos équipements évoluent et peuvent se poser en urgence si nécessaire. Par conséquent, l&apos;accès à cette zone est strictement interdit à toute personne non impliquée dans l&apos;intervention.</p>
          ),
        },
        {
          q: "Que se passe-t-il s'il pleut ou s'il y a trop de vent le jour J ?",
          a: (
            <p>La sécurité, tant aérienne que terrestre, est notre priorité absolue. Nos interventions par drone s&apos;effectuent dans le strict respect des tolérances météorologiques des constructeurs et des normes de sécurité de la <strong>DGAC</strong> et de l&apos;<strong>EASA</strong> (scénarios européens <strong>STS-01</strong> et <strong>STS-02</strong>). Si les conditions climatiques dépassent ces seuils réglementaires, votre intervention est automatiquement reprogrammée, sans aucun frais supplémentaire.</p>
          ),
        },
      ];

  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">

      {/* ══════════════════════════════════════════
          HERO — animations jouées au chargement
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[95dvh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroCarousel />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/60 via-[#0e2f52]/40 to-[#0e2f52]/80 z-10" />
        <HeroContent isEn={isEn} />
        <NewsTickerBanner />
      </section>

      {/* ══════════════════════════════════════════
          6 PILIERS — stagger au scroll
      ══════════════════════════════════════════ */}
      <section id="solutions" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">

          <FadeUp className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              {isEn ? "Our " : "Nos "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-500 to-red-600">
                {isEn ? "6 Areas of Expertise" : "6 Piliers d'Expertise"}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-orange-500 to-red-600 mx-auto rounded-full" />
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((card, i) => (
              <StaggerItem key={i}>
                <Link
                  href={card.href}
                  className="bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] transition-all group flex flex-col h-full overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${card.image}')` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                        <card.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-grow">{card.desc}</p>
                    <span className="mt-4 text-brand-orange-500 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      {isEn ? "View our expertise" : "Voir notre expertise"} <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESSUS — stagger gauche à droite
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0e2f52] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('/images/Secteur.jpg')] bg-cover bg-center" />
        <div className="container mx-auto px-4 max-w-7xl relative">

          <FadeUp className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/50 text-brand-orange-400 font-medium text-sm mb-6">
              {isEn ? "Simple · Fast · Transparent" : "Simple · Rapide · Transparent"}
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              {isEn ? "Our Process: " : "Notre Processus : "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-amber-400">
                {isEn ? "4 Simple Steps" : "4 Étapes Simples"}
              </span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[calc(12.5%+2.5rem)] right-[calc(12.5%+2.5rem)] h-px bg-gradient-to-r from-brand-orange-500/0 via-brand-orange-500/50 to-brand-orange-500/0" />
            {processSteps.map((step, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <div className="relative flex flex-col items-center text-center group">
                  <div className="relative mb-6 z-10">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-orange-500 to-red-600 text-white font-black flex items-center justify-center text-2xl shadow-2xl shadow-brand-orange-500/30 group-hover:scale-110 transition-transform">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="absolute inset-0 w-20 h-20 rounded-full bg-brand-orange-500/20 scale-125" />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-brand-orange-500/40 transition-all w-full">
                    <h4 className="font-bold text-white mb-3 text-base leading-tight">{step.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="text-center mt-12" delay={0.2}>
            <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold hover:scale-105 active:scale-[0.98] transition-transform shadow-xl">
              {isEn ? "Start My Project" : "Démarrer mon projet"} <ChevronRight className="w-5 h-5" />
            </Link>
          </FadeUp>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          AVIS GOOGLE — stagger en grille
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">

          <FadeUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-sm mb-5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              {isEn ? "Google Reviews" : "Avis Google"}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              {isEn ? "What Our Clients Say" : "Ce que disent nos clients"}
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <StarIcon key={i} size="w-5 h-5" />)}
              </div>
              <span className="font-black text-slate-900 text-lg">5,0</span>
              <span className="text-slate-400 text-sm">· {isEn ? "Average Google Rating" : "Note moyenne Google"}</span>
            </div>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <StaggerItem key={i}>
                <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4 h-full">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-full ${review.color} flex items-center justify-center text-white font-black text-sm shrink-0`}>
                      {review.initials}
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="font-bold text-slate-900 text-sm truncate">{review.name}</p>
                      <p className="text-slate-400 text-xs">{review.date}</p>
                    </div>
                    <GoogleIcon />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">{review.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp className="text-center mt-10" delay={0.1}>
            <a
              href="https://g.page/r/ellipsys/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors shadow-sm"
            >
              <GoogleIcon />
              {isEn ? "View All Google Reviews" : "Voir tous nos avis Google"}
            </a>
          </FadeUp>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ — fade-up en cascade
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">

          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
              {isEn ? "Frequently Asked Questions" : "Foire Aux Questions"}
            </h2>
          </FadeUp>

          <StaggerContainer className="space-y-4">
            {faqs.map((faq, i) => (
              <StaggerItem key={i}>
                <details className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 group cursor-pointer">
                  <summary className="font-bold text-slate-900 flex justify-between items-center outline-none text-lg list-none">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-brand-orange-500 group-open:rotate-180 transition-transform shrink-0 ml-4" />
                  </summary>
                  <div className="pt-6 text-slate-600 text-sm mt-4 border-t border-slate-100 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINAL — fade-up
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0e2f52] text-white text-center px-4">
        <div className="container mx-auto px-4">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-red-400">
              {isEn ? "Ready to Get Started?" : "Prêt à démarrer ?"}
            </h2>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
              {isEn
                ? <>Tell us about your site and constraints. We will propose the optimal protocol within <strong>24 hours</strong>.</>
                : <>Décrivez-nous votre site et vos contraintes. Nous vous proposerons le protocole optimal sous <strong>24h</strong>.</>}
            </p>
            <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 active:scale-[0.98] transition-all shadow-2xl">
              {isEn ? "Get My Free Quote" : "Obtenir mon devis gratuit"} <ChevronRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
