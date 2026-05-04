import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Camera, Film, Package, Video } from "lucide-react";
import ExpertQuoteSide from "@/components/ExpertQuoteSide";
import AccordionSection from "@/components/AccordionSection";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Captation Audiovisuelle et Imagerie Aérienne par Drone | Ellipsys",
  description: "Sublimez votre patrimoine avec des visuels cinématographiques 4K. Prises de vues haute définition DJI Air 3S pour l'immobilier de prestige, domaines viticoles et événementiel.",
};

const PX = "?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default async function PrisesDeVuesPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const univers = isEn ? [
    {
      icon: "🏠",
      img: `https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg${PX}`,
      title: "Prestige Real Estate",
      desc: "Architect-designed villas, manors, exceptional properties. Aerial video reveals the true proportions of the property, the landscaped grounds and the immediate surroundings. The buyer can visualise the asset before even visiting in person.",
    },
    {
      icon: "🍷",
      img: `https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg${PX}`,
      title: "Wine Estates and Châteaux",
      desc: "Cinematic overflights of vineyards, châteaux and agricultural estates. Showcase the extent of your holdings, the architecture of your winery and the unique character of your terroir for your communications and export materials.",
    },
    {
      icon: "🎉",
      img: `https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg${PX}`,
      title: "Events",
      desc: "Weddings, corporate seminars, festivals, inaugurations. Our aerial footage captures the grandeur of the event, the scale of the gathering and the scenery from a perspective impossible to achieve at ground level.",
    },
    {
      icon: "🏗️",
      img: `https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg${PX}`,
      title: "Architecture and Property Development",
      desc: "Document construction progress, showcase a new development or build the portfolio of an architecture practice. Our aerial imagery provides an immediate reading of volumes and integration within the environment.",
    },
    {
      icon: "🏰",
      img: `https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg${PX}`,
      title: "Listed Heritage & Historic Monuments",
      desc: "Châteaux, cathedrals, abbeys and classified sites. Our cinematic overflights capture the grandeur of your heritage from angles inaccessible at ground level — for your preservation dossiers, institutional communications or tourism materials.",
    },
    {
      icon: "🏛️",
      img: `https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg${PX}`,
      title: "ABF Listed Buildings & Classified Sites",
      desc: "Aerial mapping for the Architectes des Bâtiments de France, heritage condition surveys, classified construction documentation. Our images constitute an invaluable basis for regulatory dossiers and restoration monitoring.",
    },
  ] : [
    {
      icon: "🏠",
      img: `https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg${PX}`,
      title: "Immobilier de Prestige",
      desc: "Villas d'architecte, manoirs, propriétés d'exception. La vidéo aérienne révèle les proportions réelles du bien, les extérieurs paysagés et l'environnement proche. L'acquéreur se projette avant même la visite physique.",
    },
    {
      icon: "🍷",
      img: `https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg${PX}`,
      title: "Domaines Viticoles et Châteaux",
      desc: "Survols cinématographiques de vignobles, châteaux et domaines agricoles. Valorisez l'étendue de votre exploitation, l'architecture du chai et le caractère unique de votre terroir pour vos supports de communication et d'export.",
    },
    {
      icon: "🎉",
      img: `https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg${PX}`,
      title: "Événementiel",
      desc: "Mariages, séminaires d'entreprise, festivals, inaugurations. Nos prises de vues aériennes capturent la grandeur de l'événement, la mobilisation des invités et les décors depuis une perspective impossible à obtenir au sol.",
    },
    {
      icon: "🏗️",
      img: `https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg${PX}`,
      title: "Architecture et Promotion Immobilière",
      desc: "Documentez l'avancement de chantier, valorisez un programme neuf ou réalisez le book d'un cabinet d'architectes. Nos images aériennes donnent une lecture immédiate des volumes et de l'intégration dans l'environnement.",
    },
    {
      icon: "🏰",
      img: `https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg${PX}`,
      title: "Monuments Historiques & Patrimoine",
      desc: "Châteaux, cathédrales, abbayes et sites classés. Nos survols cinématographiques capturent la grandeur de votre patrimoine depuis des angles inaccessibles au sol — pour vos dossiers de préservation, communications institutionnelles ou supports touristiques.",
    },
    {
      icon: "🏛️",
      img: `https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg${PX}`,
      title: "Bâtiments de France & Sites Classés ABF",
      desc: "Cartographie aérienne pour les Architectes des Bâtiments de France, états des lieux patrimoniaux, documentation de chantier classé. Nos images constituent une base précieuse pour le dossier réglementaire et le suivi de restauration.",
    },
  ];

  const specs = isEn ? [
    { label: "Drone",             value: "DJI Air 3S" },
    { label: "Sensor",            value: "1-inch CMOS" },
    { label: "Photo Resolution",  value: "50 Megapixels" },
    { label: "Video",             value: "4K / 60fps · 10-bit" },
    { label: "Dynamic Range",     value: "D-Log M (12.8 stops)" },
    { label: "Stabilisation",     value: "3-axis gimbal" },
    { label: "Conditions",        value: "Dusk included" },
    { label: "Deliverables",      value: "Within 48h post-flight" },
  ] : [
    { label: "Drone",             value: "DJI Air 3S" },
    { label: "Capteur",           value: "1 pouce CMOS" },
    { label: "Résolution photo",  value: "50 Mégapixels" },
    { label: "Vidéo",             value: "4K / 60fps · 10 bits" },
    { label: "Dynamique",         value: "D-Log M (12,8 stops)" },
    { label: "Stabilisation",     value: "Nacelle 3 axes" },
    { label: "Conditions",        value: "Crépuscule inclus" },
    { label: "Livrables",         value: "Sous 48h après le vol" },
  ];

  const stats = [
    { value: "50 Mpx",  label: isEn ? "Photo resolution" : "Résolution photo" },
    { value: "4K/60",   label: isEn ? "Cinematic video" : "Vidéo cinématographique" },
    { value: "48 h",    label: isEn ? "Deliverables post-flight" : "Livrables remis après le vol" },
    { value: "100 %",   label: isEn ? "DGAC admin managed by our teams" : "Admin DGAC gérée par nos soins" },
  ];

  const livrables = isEn ? [
    { icon: Camera, title: "High-Definition Photography",    items: ["Retouched selection edited in Lightroom (professional colour grading)", "HD export ready to publish (property platforms, social media, press)", "RAW formats available on request for your creative teams"] },
    { icon: Film,   title: "Cinematic Video",                items: ["Editorial edit with musical soundtrack and cinematic colour grading", "Short version (15–30s) for social media + long version (1–3 min) for website", "Multi-format export: MP4 H.265, optimised for YouTube, Instagram Reels, Vimeo"] },
    { icon: Package,title: "Complete Turnkey Package",       items: ["Full management of flight authorisations (DGAC, Prefecture) included", "Complete Photos + Video dossier delivered within 48h post-flight", "Distribution strategy guidance available on request"] },
  ] : [
    { icon: Camera, title: "Photos Haute Définition",        items: ["Sélection retouchée sous Lightroom (étalonnage colorimétrique professionnel)", "Export HD prêt à publier (plateformes immobilières, réseaux sociaux, presse)", "Formats RAW disponibles sur demande pour vos équipes créatives"] },
    { icon: Film,   title: "Vidéo Cinématographique",        items: ["Montage éditorial avec habillage musical et étalonnage cinématographique", "Version courte (15–30s) pour réseaux sociaux + version longue (1–3 min) pour site web", "Export multi-formats : MP4 H.265, adapté à YouTube, Instagram Reels, Vimeo"] },
    { icon: Package,title: "Pack Complet Clé-en-Main",       items: ["Gestion complète des autorisations de vol (DGAC, Préfecture) incluse", "Dossier complet Photos + Vidéo remis sous 48h après le vol", "Accompagnement sur la stratégie de diffusion si besoin"] },
  ];

  const avantages = isEn ? [
    { title: "Accelerated Purchase Decision",       desc: <>Aerial <strong>video</strong> provides total transparency on the proportions of a property. The buyer answers their questions before even visiting in person, <strong>drastically reducing the sales cycle</strong>.</> },
    { title: "Justified Premium Positioning",       desc: <><strong>Cinematic visuals</strong> legitimise a high sale price. Your counterparts immediately perceive the quality of your offer and distinguish it from the <strong>competition photographed on a smartphone</strong>.</> },
    { title: "Immediately Actionable Deliverables", desc: <>Retouched photos, edited video, exports adapted to each platform. You receive a <strong>complete turnkey dossier within 48 hours</strong> after the flight, ready to publish with no further editing required.</> },
    { title: "Zero Administrative Management",      desc: <><strong>DGAC</strong> flight authorisations, prefectoral coordination, airspace verification: we handle <strong>all administrative procedures</strong>. You simply confirm the date and await the deliverables.</> },
  ] : [
    { title: "Accélération de la Décision d'Achat",   desc: <>La <strong>vidéo aérienne</strong> apporte une transparence totale sur les proportions d&apos;un bien. L&apos;acheteur répond à ses interrogations avant même la visite physique, <strong>réduisant drastiquement le cycle de vente</strong>.</> },
    { title: "Positionnement Haut de Gamme Justifié", desc: <>Des <strong>visuels cinématographiques</strong> légitiment un prix de vente élevé. Vos interlocuteurs perçoivent immédiatement la qualité de votre offre et la distinguent de la <strong>concurrence photographiée au smartphone</strong>.</> },
    { title: "Livrables Exploitables Immédiatement",  desc: <>Photos retouchées, vidéo montée, exports adaptés à chaque plateforme. Vous recevez un <strong>dossier complet clé-en-main sous 48h</strong> après le vol, prêt à diffuser sans aucune retouche supplémentaire.</> },
    { title: "Aucune Gestion Administrative",          desc: <>Autorisations de vol <strong>DGAC</strong>, coordination préfectorale, vérification des zones aériennes : nous gérons <strong>l&apos;intégralité des démarches</strong>. Vous n&apos;avez qu&apos;à confirmer la date et attendre les livrables.</> },
  ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      {/* BANNIÈRE */}
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/17590771/pexels-photo-17590771.jpeg${PX}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/50 text-brand-orange-400 font-medium text-base mb-6">
              {isEn ? "Aerial Capture · Imagery · Prestige Real Estate" : "Captation · Imagerie Aérienne · Immobilier de Prestige"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Audiovisual Capture and" : "Captation Audiovisuelle et"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-amber-300">
                {isEn ? "Aerial Imagery by Drone" : "Imagerie Aérienne par Drone"}
              </span>
            </h1>
            <p className="text-xl text-brand-orange-300 font-semibold mb-4 italic">
              {isEn ? "Reveal the true dimension of your heritage asset." : "Révélez la véritable dimension de votre patrimoine."}
            </p>
          </div>
        </div>
      </section>

      <ExpertQuoteSide
        quote={isEn
          ? "In prestige real estate, visual immersion is the primary driver of the sale. A cinematic aerial video allows the buyer to project themselves into the property well before the viewing — it is a direct conversion tool that justifies the price positioning."
          : "Dans l'immobilier de prestige, l'immersion visuelle est le premier vecteur de vente. Une vidéo aérienne cinématographique permet à l'acquéreur de se projeter dans le bien bien avant la visite — c'est un outil de conversion direct qui justifie le positionnement prix."}
        author="— Expert Ellipsys Solutions"
      />

      {/* SECTION 1 : INTRO IMAGE SPLIT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[440px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/3s.png')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-orange-500/20 border border-brand-orange-400/40 text-brand-orange-200 text-xs font-bold backdrop-blur-sm">
                  DJI Air 3S · 50 Mpx · 4K/60fps
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white text-xs font-semibold">{isEn ? "Cinematic overflight — perspectives inaccessible at ground level" : "Survol cinématographique — perspectives inaccessibles au sol"}</p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange-100 text-brand-orange-700 text-xs font-black uppercase tracking-widest mb-5">
                <Video className="w-3.5 h-3.5" /> {isEn ? "Cinematic-grade equipment" : "Équipement de niveau cinématographique"}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {isEn ? "Cinematic-Grade Equipment" : "Équipement de Niveau Cinématographique"}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isEn
                  ? <>We exclusively use the latest-generation professional equipment to guarantee irreproachable image quality, even in difficult lighting conditions. The <strong>1-inch sensor</strong> of the <strong className="text-slate-900">DJI Air 3S</strong> captures <strong>4× more light</strong> than a standard sensor — ideal for <strong>dusk</strong> or overcast conditions, the most flattering lighting for prestige real estate.</>
                  : <>Nous n&apos;utilisons que des équipements professionnels de dernière génération pour garantir une qualité d&apos;image irréprochable, même dans des conditions de lumière difficiles. Le <strong>capteur 1 pouce</strong> du <strong className="text-slate-900">DJI Air 3S</strong> capte <strong>4× plus de lumière</strong> qu&apos;un capteur standard — idéal pour les prises de vues au <strong>crépuscule</strong> ou par temps couvert, conditions les plus flatteuses pour l&apos;immobilier de prestige.</>
                }
              </p>
              <div className="bg-[#0e2f52]/5 border border-[#0e2f52]/20 rounded-2xl p-5 flex items-start gap-4">
                <span className="text-brand-orange-500 text-4xl font-bold leading-none -mt-1 select-none shrink-0">&ldquo;</span>
                <div>
                  <p className="text-xs font-black text-brand-orange-500 uppercase tracking-widest mb-2">{isEn ? "Expert Opinion" : "Avis Expert"}</p>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    {isEn
                      ? "In prestige real estate, visual immersion is the primary driver of the sale. A cinematic aerial video allows the buyer to project themselves into the property well before the viewing — it is a direct conversion tool that justifies the price positioning."
                      : "Dans l'immobilier de prestige, l'immersion visuelle est le premier vecteur de vente. Une vidéo aérienne cinématographique permet à l'acquéreur de se projeter dans le bien bien avant la visite — c'est un outil de conversion direct qui justifie le positionnement prix."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BARRE DE STATS */}
      <section className="py-10 bg-[#0e2f52]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="border-r border-white/10 last:border-0 px-4">
                <p className="text-3xl font-black text-brand-orange-400 mb-1">{s.value}</p>
                <p className="text-slate-300 text-xs leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 : UNIVERS D'APPLICATION */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{isEn ? "For which projects?" : "Pour quels projets ?"}</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              {isEn ? "Our aerial capture services adapt to every context where imagery makes the difference." : "Nos captations aériennes s'adaptent à tous les univers où l'image fait la différence."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {univers.map((u, i) => (
              <div key={i} className="relative rounded-3xl overflow-hidden shadow-md group h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${u.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="text-3xl mb-2">{u.icon}</div>
                  <h3 className="font-black text-white text-xl mb-2">{u.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-24 overflow-hidden">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 : LIVRABLES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{isEn ? "What you receive" : "Ce que vous recevez"}</h2>
            <p className="text-slate-600 leading-relaxed">
              {isEn
                ? <>A <strong>complete turnkey dossier</strong> delivered <strong>within 48 hours</strong> post-flight. Each deliverable is retouched and optimised for immediate broadcast across all your channels.</>
                : <>Un <strong>dossier complet clé-en-main</strong> remis <strong>sous 48h</strong> après le vol. Chaque livrable est retouché et optimisé pour une diffusion immédiate sur tous vos canaux.</>
              }
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {livrables.map((l, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                <l.icon className="w-10 h-10 text-brand-orange-500 mb-5" />
                <h3 className="font-black text-slate-900 text-xl mb-5">{l.title}</h3>
                <ul className="space-y-3">
                  {l.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 : ÉQUIPEMENT TECHNIQUE */}
      <section className="py-16 bg-[#0e2f52]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">{isEn ? "Technical Specifications — DJI Air 3S" : "Fiche Technique — DJI Air 3S"}</h2>
            <p className="text-slate-400 text-sm">{isEn ? "The professional reference for cinematic aerial capture." : "La référence professionnelle pour la captation aérienne cinématographique."}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specs.map((s, i) => (
              <div key={i} className="bg-white/10 border border-white/15 rounded-2xl p-5 text-center">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">{s.label}</p>
                <p className="text-white font-black text-base leading-tight">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 : AVANTAGES */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            {isEn ? "Why choose Ellipsys for your aerial capture?" : "Pourquoi choisir Ellipsys pour votre captation ?"}
          </h2>
          <AccordionSection items={avantages} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-slate-900 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Camera className="w-10 h-10 text-brand-orange-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">{isEn ? "Give your property the visibility it deserves" : "Donnez à votre bien la visibilité qu'il mérite"}</h2>
          <p className="text-slate-300 mb-10 text-lg">{isEn ? "Retouched photos + edited video ready to publish within 48 hours post-flight." : "Photos retouchées + vidéo éditée prêtes à diffuser sous 48h après le vol."}</p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            {isEn ? "Request an Audiovisual Quote" : "Obtenir un devis audiovisuel"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
