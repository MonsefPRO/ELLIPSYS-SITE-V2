import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, CheckCircle2, AlertCircle, Droplets } from "lucide-react";
import ExpertQuoteSide from "@/components/ExpertQuoteSide";
import AccordionSection from "@/components/AccordionSection";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Nettoyage de Façades et Bardages par Drone | Ellipsys",
  description: "Redonnez l'éclat à vos façades sans nacelle ni échafaudage. Nettoyage drone haute pression pour enduits, pierre, bardages métalliques et bois. Encrassement sel marin, pollution, pluies sahariennes.",
};

const PX = "?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const IMG = {
  facadeStone:  `https://images.pexels.com/photos/30964790/pexels-photo-30964790.jpeg${PX}`,
  facadeDetail: `https://images.pexels.com/photos/33434478/pexels-photo-33434478.jpeg${PX}`,
  facadeArchi:  `https://images.pexels.com/photos/9289002/pexels-photo-9289002.jpeg${PX}`,
};

export default async function FacadesPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const agents = isEn ? [
    {
      icon: "🌊",
      title: "Sea Salt",
      zone: "Coastal zones",
      color: "bg-blue-50 border-blue-100",
      titleColor: "text-blue-800",
      desc: <>In coastal areas, <strong>salt-laden sea spray</strong> deposits successive layers on your facades. This <strong>crystallised saline film</strong> attacks render, causes white efflorescence and accelerates corrosion of metal joinery. Without regular treatment, the structural integrity of the facade is compromised within a few years.</>,
    },
    {
      icon: "🟡",
      title: "Saharan Dust Deposits",
      zone: "Mediterranean region",
      color: "bg-amber-50 border-amber-100",
      titleColor: "text-amber-800",
      desc: <>Episodes of southerly winds laden with <strong>fine sand</strong> (frequent along the Mediterranean coast) deposit a <strong>highly adhesive ochre clay film</strong>. Particularly difficult to remove without appropriate chemical treatment, this deposit clogs the porosity of renders and promotes the growth of mould.</>,
    },
    {
      icon: "🌿",
      title: "Pollen and Biofilm",
      zone: "Rural and peri-urban zones",
      color: "bg-green-50 border-green-100",
      titleColor: "text-green-800",
      desc: <>In spring, pollens combine with ambient humidity to form a <strong>sticky biofilm</strong> that becomes the ideal substrate for the development of <strong>algae, moss and lichens</strong>. Without intervention, this biological layer becomes deeply embedded in the substrate porosity and secretes organic acids that erode your render.</>,
    },
    {
      icon: "🏙️",
      title: "Carbonaceous Pollution",
      zone: "Urban and industrial zones",
      color: "bg-slate-100 border-slate-200",
      titleColor: "text-slate-800",
      desc: <>In urban environments or near major roads, <strong>fine particles and carbonaceous soot</strong> progressively blacken your cladding and render. These <strong>acid deposits</strong> erode your coatings and degrade the heritage and commercial value of your building. A blackened facade projects a negative image of your business.</>,
    },
  ] : [
    {
      icon: "🌊",
      title: "Sel Marin",
      zone: "Zones littorales",
      color: "bg-blue-50 border-blue-100",
      titleColor: "text-blue-800",
      desc: <>En zones côtières, les <strong>embruns salins</strong> se déposent en couches successives sur vos façades. Ce <strong>film salin cristallisé</strong> attaque les enduits, provoque des efflorescences blanchâtres et accélère la corrosion des menuiseries métalliques. Sans traitement régulier, l&apos;intégrité structurelle de la façade est compromise en quelques années.</>,
    },
    {
      icon: "🟡",
      title: "Pluies Sahariennes",
      zone: "Région méditerranéenne",
      color: "bg-amber-50 border-amber-100",
      titleColor: "text-amber-800",
      desc: <>Les épisodes de vents du sud chargés de <strong>sable fin</strong> (fréquents sur la façade méditerranéenne) déposent une <strong>pellicule argileuse ocre très adhérente</strong>. Particulièrement difficile à éliminer sans traitement chimique adapté, ce dépôt colmate la porosité des enduits et favorise l&apos;apparition de moisissures.</>,
    },
    {
      icon: "🌿",
      title: "Pollen et Biofilm",
      zone: "Zones rurales et péri-urbaines",
      color: "bg-green-50 border-green-100",
      titleColor: "text-green-800",
      desc: <>Au printemps, les pollens forment avec l&apos;humidité ambiante un <strong>biofilm collant</strong> qui devient le substrat idéal pour le développement d&apos;<strong>algues, mousses et lichens</strong>. Sans intervention, cette couche biologique s&apos;incruste profondément dans la porosité du support et secrète des acides organiques qui érodent vos enduits.</>,
    },
    {
      icon: "🏙️",
      title: "Pollution Carbonée",
      zone: "Zones urbaines et industrielles",
      color: "bg-slate-100 border-slate-200",
      titleColor: "text-slate-800",
      desc: <>En milieu urbain ou à proximité d&apos;axes routiers, les <strong>particules fines et suies carbonées</strong> noircissent progressivement vos bardages et crépis. Ces <strong>dépôts acides</strong> érodent vos enduits et dégradent la valeur patrimoniale et commerciale de votre bâtiment. Une façade noire renvoie une image négative de votre activité.</>,
    },
  ];

  const surfaces = isEn ? [
    {
      title: "Render, Roughcast and Concrete",
      icon: "🧱",
      traitement: "Adjustable high pressure (30 to 110 bar)",
      desc: <>Pressure washing with <strong>pressure adjusted to substrate hardness</strong>, combined with targeted chemical degreaser pre-treatment. Full rinse with <strong>osmosis-purified water</strong> for an impeccable finish, free of streaks or limescale residue.</>,
      note: "Compatible with the majority of facade coatings.",
    },
    {
      title: "Natural Stone and Dressed Stone",
      icon: "🏛️",
      traitement: "Fine low-pressure nebulisation",
      desc: <>Ultra-gentle approach preferred: <strong>fine low-pressure nebulisation</strong> with slow-acting biodegradable products. Stone being naturally porous, any aggressive treatment risks damaging the crystalline structure of the material. Our method <strong>preserves the authenticity of heritage buildings</strong>.</>,
      note: "Validated for listed buildings and ABF-controlled zones.",
    },
    {
      title: "Metal Cladding, Steel and Aluminium",
      icon: "🏗️",
      traitement: "🏗️ Degreasing + controlled rinse",
      desc: <>Facade and cladding: <strong>degreasing</strong> followed by a controlled-pressure <strong>rinse</strong> to eliminate carbonaceous deposits and superficial rust. Optional application of an <strong>anti-oxidation treatment</strong> to prevent future pollution build-up.</>,
      note: "Ideal for warehouses and industrial buildings.",
    },
    {
      title: "Timber and Composite Cladding",
      icon: "🪵",
      traitement: "Gentle low-pressure treatment",
      desc: <>Gentle <strong>low-pressure</strong> cleaning with <strong>fungicidal and algaecidal products</strong> adapted to organic fibres. Application of a <strong>UV-protective saturating finish</strong> to preserve the aesthetic and mechanical properties of the wood over time.</>,
      note: "Long-term protection included as an option.",
    },
  ] : [
    {
      title: "Enduits, Crépis et Béton",
      icon: "🧱",
      traitement: "Haute pression modulable (30 à 110 bars)",
      desc: <>Nettoyage <strong>haute pression</strong> adaptée à la dureté du support, combiné à un prétraitement chimique dégraissant ciblé. Rinçage complet à l&apos;<strong>eau osmosée</strong> pour un résultat impeccable, sans traces ni résidus calcaires.</>,
      note: "Compatible avec la majorité des revêtements de façade.",
    },
    {
      title: "Pierre Naturelle et Pierre de Taille",
      icon: "🏛️",
      traitement: "Nébulisation fine basse pression",
      desc: <>Approche ultra-douce privilégiée : <strong>nébulisation fine basse pression</strong> et application de produits biodégradables à action lente. La pierre étant naturellement poreuse, tout traitement agressif risque d&apos;endommager la structure cristalline du matériau. Notre méthode <strong>préserve l&apos;authenticité du patrimoine</strong>.</>,
      note: "Validé pour les bâtiments classés et zones ABF.",
    },
    {
      title: "Bardages Métalliques, Acier et Aluminium",
      icon: "🏗️",
      traitement: "🏗️ Dégraissage + rinçage contrôlé",
      desc: <>Façade et bardage : <strong>dégraissage</strong> suivi d&apos;un rinçage sous <strong>pression contrôlée</strong> pour éliminer les dépôts carbonés et les traces de rouille superficielle. Application optionnelle d&apos;un <strong>traitement anti-oxydation</strong> pour prévenir les futures incrustations de pollution.</>,
      note: "Idéal pour les entrepôts et bâtiments industriels.",
    },
    {
      title: "Bardages Bois et Composite",
      icon: "🪵",
      traitement: "Traitement doux basse pression",
      desc: <>Nettoyage doux <strong>basse pression</strong> avec produits <strong>fongicides et algaecides</strong> adaptés aux fibres organiques. Application d&apos;un <strong>saturateur protecteur UV</strong> en finition pour préserver les qualités esthétiques et mécaniques du bois dans la durée.</>,
      note: "Protection longue durée incluse sur option.",
    },
  ];

  const avantages = isEn ? [
    {
      title: "Preserved Operational Continuity",
      desc: <>No aerial platform blocking your business entrance, no <strong>scaffolding</strong> blocking your shopfront, no road closure disrupting your customers. Our <strong>Chronos drone</strong> manages the entire intervention from ground level. The result: your teams and your business experience a <strong>minimum of disruption</strong>.</>,
    },
    {
      title: "Difficult-to-Access Areas — No Obstacle",
      desc: <>Set-back facade, heights of <strong>15 to 20 metres</strong>, angles impossible to reach by aerial platform: our drone accesses locations where human teams cannot go, <strong>with no logistical constraints</strong> or rental surcharges.</>,
    },
    {
      title: "Rapid Execution — Minimal Site Preparation",
      desc: <>Where an aerial platform crew mobilises <strong>an entire day</strong> of assembly/disassembly plus intervention, our drone covers very large surface areas in record time. Less downtime, <strong>lower overall cost</strong>.</>,
    },
    {
      title: "Striking Visual Results",
      desc: <>The cleaned surface reveals its texture, natural tones and <strong>original appearance</strong>: an immediate and impressive effect, without major renovation. Our technicians carry out a <strong>full 360° visual quality control</strong> in real time via the drone&apos;s live video feed.</>,
    },
    {
      title: "Long-Term Protection",
      desc: <>After cleaning, we offer the application of a <strong>waterproofing treatment</strong> or <strong>anti-fouling agent</strong> to significantly delay the return of soiling. An <strong>annual preventive maintenance contract</strong> is available to preserve your facade over the long term.</>,
    },
  ] : [
    {
      title: "Continuité Opérationnelle Préservée",
      desc: <>Pas de nacelle bloquant l&apos;entrée de votre commerce, pas d&apos;<strong>échafaudage</strong> condamnant votre vitrine, pas de fermeture de rue perturbant vos clients. Notre <strong>drone Chronos</strong> pilote l&apos;intervention entièrement depuis le sol. Résultat : vos équipes et votre activité subissent un <strong>minimum de perturbation</strong>.</>,
    },
    {
      title: "Zones Difficilement Accessibles — Aucun Obstacle",
      desc: <>Façade en retrait, hauteur de <strong>15 à 20 mètres</strong>, angles impossibles à atteindre en nacelle : notre drone accède là où les équipes humaines ne peuvent aller, <strong>sans contrainte logistique</strong> ni surcoût de location.</>,
    },
    {
      title: "Vitesse d'Exécution — Préparation Chantier Réduite",
      desc: <>Là où une équipe nacelle mobilise <strong>une journée entière</strong> de montage/démontage + intervention, notre drone couvre de très grandes surfaces en temps record. Moins de temps d&apos;immobilisation, <strong>moins de coût global</strong>.</>,
    },
    {
      title: "Un Résultat Visuel Saisissant",
      desc: <>La surface nettoyée révèle sa matière, ses teintes naturelles et son <strong>aspect d&apos;origine</strong> : un effet immédiat et marquant, sans rénovation lourde. Nos techniciens procèdent à un <strong>contrôle qualité visuel à 360°</strong> en temps réel grâce au retour vidéo direct du drone.</>,
    },
    {
      title: "Protection Longue Durée",
      desc: <>Après le nettoyage, nous proposons l&apos;application d&apos;un <strong>traitement hydrofuge</strong> ou d&apos;un agent <strong>anti-encrassement</strong> pour retarder significativement le retour des salissures. Un <strong>contrat d&apos;entretien préventif annuel</strong> est disponible pour préserver votre façade sur le long terme.</>,
    },
  ];

  const comparatif = isEn ? [
    { label: "Scaffolding assembly",   classique: "1 to 2 days",      drone: "0 min" },
    { label: "Intervention on R+5",    classique: "6 to 8h",           drone: "2 to 3h" },
    { label: "Fall risk",              classique: "High",              drone: "None" },
    { label: "Road closure required",  classique: "Often required",    drone: "Never" },
  ] : [
    { label: "Montage échafaudage", classique: "1 à 2 jours", drone: "0 min" },
    { label: "Intervention sur R+5", classique: "6 à 8h",     drone: "2 à 3h" },
    { label: "Risque de chute",      classique: "Élevé",       drone: "Nul" },
    { label: "Fermeture de voie",    classique: "Souvent requise", drone: "Jamais" },
  ];

  const statsBar = [
    { value: "0",      label: isEn ? "Aerial platform or scaffolding required" : "Nacelle ou échafaudage nécessaire" },
    { value: "< 3h",   label: isEn ? "Intervention on R+5" : "Intervention sur R+5" },
    { value: "4",      label: isEn ? "Soiling agent types treated" : "Types d'agents d'encrassement traités" },
    { value: "ABF",    label: isEn ? "Compatible with listed heritage buildings" : "Compatible monuments historiques" },
  ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      {/* BANNIÈRE */}
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-[url('/images/Barda.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/50 text-brand-orange-400 font-medium text-base mb-6">
              {isEn ? "Facades · Cladding · Heritage · Industry" : "Façades · Bardages · Patrimoine · Industrie"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Facade and Cladding Cleaning:" : "Nettoyage de Façades et Bardages :"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-amber-300">
                {isEn ? "Restore Your Building&apos;s Brilliance" : "Redonnez l&apos;Éclat à votre Bâtiment"}
              </span>
            </h1>
            <p className="text-xl text-brand-orange-300 font-semibold mb-4 italic">
              {isEn ? "No aerial platform, no activity disruption, with cinematographic results." : "Sans nacelle, sans interruption d&apos;activité, avec un résultat cinématographique."}
            </p>
          </div>
        </div>
      </section>

      <ExpertQuoteSide
        quote={isEn
          ? "Sea salt, Saharan dust and micro-organisms chemically attack your render in depth. Early intervention with our Chronos drone means protecting the value of your heritage asset at a controlled cost."
          : "Le sel marin, les pluies sahariennes et les micro-organismes attaquent chimiquement vos enduits en profondeur. Intervenir tôt avec notre drone Chronos, c'est protéger la valeur de votre patrimoine à coût maîtrisé."}
        author="— Expert Ellipsys Solutions"
      />

      {/* SECTION 1 : INTRO VISUELLE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">

            {/* Image façade pierre */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[440px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.facadeStone}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 text-white text-sm font-bold backdrop-blur-sm">
                  {isEn ? "🏛️ Natural stone facade — before intervention" : "🏛️ Façade en pierre naturelle — avant intervention"}
                </span>
              </div>
            </div>

            {/* Texte + Avis Expert */}
            <div>
              <div className="inline-block px-3 py-1 bg-[#0e2f52] text-white text-xs font-bold rounded-full mb-5 uppercase tracking-wide">{isEn ? "Competitive advantage" : "Avantage concurrentiel"}</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">{isEn ? "No aerial platform. No scaffolding.\nNo disruption." : "Aucune nacelle. Aucun échafaudage.\nAucune interruption."}</h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                {isEn
                  ? <>The <strong>Chronos drone</strong> advantageously replaces all heavy-lift logistics. No road closure, no blocked access, no disruption to your customer flow. The intervention is managed entirely <strong>from ground level</strong>, with real-time video feed for <strong>continuous quality control</strong>.</>
                  : <>Le <strong>drone Chronos</strong> remplace avantageusement toute logistique lourde. Pas de fermeture de rue, pas de blocage d&apos;accès, pas de perturbation de votre flux clientèle. L&apos;intervention se pilote entièrement <strong>depuis le sol</strong>, avec retour vidéo en temps réel pour un <strong>contrôle qualité permanent</strong>.</>
                }
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isEn
                  ? <>For <strong>R+6</strong> facades, industrial hangars of <strong>20 metres</strong> or buildings set back from the public highway, our drone accesses locations where an aerial platform cannot — in just a few hours, <strong>without mobilising any personnel at height</strong>.</>
                  : <>Pour les façades de <strong>R+6</strong>, les hangars industriels de <strong>20 mètres</strong> ou les bâtiments en retrait de voie publique, notre drone accède là où la nacelle ne peut pas aller — en quelques heures seulement, <strong>sans mobilisation de personnel en hauteur</strong>.</>
                }
              </p>
              <div className="bg-[#0e2f52]/5 border border-[#0e2f52]/20 rounded-2xl p-5 flex items-start gap-4">
                <span className="text-brand-orange-500 text-4xl font-bold leading-none -mt-1 select-none shrink-0">&ldquo;</span>
                <div>
                  <p className="text-xs font-black text-brand-orange-500 uppercase tracking-widest mb-2">{isEn ? "Expert Opinion" : "Avis Expert"}</p>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    {isEn
                      ? "Sea salt, Saharan dust and micro-organisms chemically attack your render in depth. Early intervention with our Chronos drone means protecting the value of your heritage asset at a controlled cost."
                      : "Le sel marin, les pluies sahariennes et les micro-organismes attaquent chimiquement vos enduits en profondeur. Intervenir tôt avec notre drone Chronos, c'est protéger la valeur de votre patrimoine à coût maîtrisé."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparatif nacelle vs drone */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {comparatif.map((row, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">{row.label}</p>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <p className="text-xs text-slate-400 mb-1">{isEn ? "Aerial Platform" : "Nacelle"}</p>
                    <p className="font-bold text-slate-500 text-sm">{row.classique}</p>
                  </div>
                  <span className="text-slate-300 font-bold">vs</span>
                  <div className="text-center">
                    <p className="text-xs text-brand-orange-500 font-bold mb-1">{isEn ? "Drone" : "Drone"}</p>
                    <p className="font-black text-brand-orange-600 text-sm">{row.drone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BARRE DE STATS */}
      <section className="py-10 bg-[#0e2f52]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {statsBar.map((s, i) => (
              <div key={i} className="border-r border-white/10 last:border-0 px-4">
                <p className="text-3xl font-black text-brand-orange-400 mb-1">{s.value}</p>
                <p className="text-slate-300 text-xs leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 : LES 4 AGENTS D'ENCRASSEMENT */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* Image détail façade */}
            <div className="space-y-5">
              <div className="relative rounded-3xl overflow-hidden shadow-lg h-64 lg:h-80">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.facadeDetail}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-white text-xs font-semibold">{isEn ? "Detail of soiling on ornamental stone — crystallised deposits" : "Détail d'encrassement sur pierre ornementale — dépôts cristallisés"}</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  {isEn
                    ? "Each environment exposes your building to specific soiling agents. Identifying the nature of the soiling is the first step in selecting the appropriate treatment and achieving a lasting result."
                    : "Chaque environnement expose votre bâtiment à des agents spécifiques. Identifier la nature de l'encrassement est la première étape pour choisir le traitement adapté et obtenir un résultat durable."
                  }
                </p>
              </div>
            </div>

            {/* Agents cards */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">{isEn ? "The 4 soiling agents degrading your facades" : "Les 4 agents d'encrassement qui dégradent vos façades"}</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {agents.map((a, i) => (
                  <div key={i} className={`p-6 rounded-2xl border ${a.color}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{a.icon}</span>
                      <div>
                        <h3 className={`font-black text-base ${a.titleColor}`}>{a.title}</h3>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{a.zone}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 : TRAITEMENTS PAR TYPE DE SURFACE */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* Surfaces cards */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <Droplets className="w-8 h-8 text-brand-orange-500" />
                <h2 className="text-3xl font-bold text-slate-900">{isEn ? "A specific treatment for every surface" : "Un traitement spécifique à chaque surface"}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                {isEn
                  ? <>There is no universal solution. Each facade material has its own porosity, its own resistance and its own <strong>soiling agents</strong>. We systematically adapt our <strong>protocol to the substrate</strong> to guarantee effective cleaning <strong>without any damage</strong>.</>
                  : <>Il n&apos;existe pas de solution universelle. Chaque matériau de façade a sa propre porosité, sa propre résistance et ses propres <strong>agents d&apos;encrassement</strong>. Nous adaptons systématiquement notre <strong>protocole au support</strong> pour garantir un nettoyage efficace <strong>sans aucun dommage</strong>.</>
                }
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {surfaces.map((s, i) => (
                  <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{s.icon}</span>
                      <div>
                        <h3 className="font-black text-slate-900 text-base">{s.title}</h3>
                        <span className="inline-block px-2 py-0.5 bg-brand-orange-100 text-brand-orange-700 text-xs font-bold rounded-full mt-1">{s.traitement}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed mb-3">{s.desc}</p>
                    <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      {s.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image architecture */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-64 lg:h-full min-h-[320px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.facadeArchi}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold backdrop-blur-sm">
                  {isEn ? "🏛️ Listed building — gentle low-pressure method" : "🏛️ Bâtiment classé — méthode douce basse pression"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 : LES 5 AVANTAGES */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{isEn ? "The benefits of our drone-based method" : "Les bénéfices de notre méthode par drone"}</h2>
          <AccordionSection items={avantages} />
          <div className="mt-8 p-5 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-400 italic leading-relaxed">
              {isEn
                ? <><strong>Legal notice:</strong> Intervention durations and results indicated are averages observed across our projects. Actual results depend on substrate type, initial soiling condition and weather conditions. They do not constitute an absolute contractual guarantee.</>
                : <><strong>Mentions légales :</strong> Les durées d&apos;intervention et résultats indiqués sont des moyennes constatées sur nos chantiers. Les résultats réels dépendent du type de support, de l&apos;état d&apos;encrassement initial et des conditions météorologiques. Ils ne constituent pas une garantie contractuelle absolue.</>
              }
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-slate-800 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">{isEn ? "Restore the brilliance of your facade" : "Redonnez l'éclat à votre façade"}</h2>
          <p className="text-slate-300 mb-10 text-lg">{isEn ? "A complimentary quotation within 24 hours. An intervention with zero disruption to your business." : "Un chiffrage gratuit sous 24h. Une intervention sans perturber votre activité."}</p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            {isEn ? "Request a Facade Quotation" : "Demander un chiffrage façade"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
