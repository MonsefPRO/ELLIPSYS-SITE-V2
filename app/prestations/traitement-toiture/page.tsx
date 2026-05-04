import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Shield, CheckCircle2, AlertCircle, Droplets } from "lucide-react";
import ExpertQuoteSide from "@/components/ExpertQuoteSide";
import AccordionSection from "@/components/AccordionSection";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Entretien de Toitures : Démoussage et Hydrofuge par Drone | Ellipsys",
  description: "Démoussage aérien Certibiocide et hydrofuge par drone ou perche télescopique. Sans échafaudage, conforme CARSAT et ABF. Intervention en toute sécurité sur toitures sensibles.",
};

const PX = "?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const IMG = {
  roofOrange:   `/images/toitsale.jpeg`,
  roofConstruct:`https://images.pexels.com/photos/31771165/pexels-photo-31771165.jpeg${PX}`,
  roofClay:     `https://images.pexels.com/photos/5401232/pexels-photo-5401232.jpeg${PX}`,
  safetyWorker: `https://images.pexels.com/photos/9075453/pexels-photo-9075453.jpeg${PX}`,
  hydrofuge:    `/images/hydrofuge.jpg`,
};

export default async function TraitementToiturePage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const degradants = isEn ? [
    { name: "Lichens",        effet: "Surface micro-perforations, latent water infiltration",   risque: "Critical",    risqueColor: "bg-red-700 text-white" },
    { name: "Moss",           effet: "Water retention, progressive tile lifting",                risque: "High",        risqueColor: "bg-red-500 text-white" },
    { name: "Frost / Damp",   effet: "Freeze-thaw cycles: cracks and tile spalling",            risque: "Structural",  risqueColor: "bg-brand-orange-500 text-white" },
    { name: "Algae",          effet: "Slippery film, degradation of valley joint mortar",       risque: "Moderate",    risqueColor: "bg-amber-200 text-amber-800" },
  ] : [
    { name: "Lichens",        effet: "Micro-perforations de surface, infiltrations latentes",   risque: "Critique",    risqueColor: "bg-red-700 text-white" },
    { name: "Mousses",        effet: "Rétention d'eau, soulèvement progressif des tuiles",      risque: "Élevé",       risqueColor: "bg-red-500 text-white" },
    { name: "Gel / Humidité", effet: "Cycles gel-dégel : fissures et éclats de tuiles",        risque: "Structurel",  risqueColor: "bg-brand-orange-500 text-white" },
    { name: "Algues",         effet: "Film glissant, dégradation des joints de noue",           risque: "Moyen",       risqueColor: "bg-amber-200 text-amber-800" },
  ];

  const stats = [
    { value: "5–10 ans", label: isEn ? "Waterproofing protection lifespan" : "Durée de protection hydrofuge" },
    { value: "0 kg",     label: isEn ? "On the roof covering — zero contact" : "Sur la couverture — aucun contact" },
    { value: "ABF",      label: isEn ? "Compatible with Listed Heritage Buildings" : "Compatible Monuments Historiques" },
    { value: "< 4 h",   label: isEn ? "Intervention on 200 m²" : "Intervention sur 200 m²" },
  ];

  const demoussageFeatures = isEn ? [
    { title: "Licensed Certibiocide Treatment", desc: <>Our teams hold the mandatory <strong>Certibiocide</strong> certification required for professional application of these treatments. They eliminate <strong>moss, lichens and algae at the root</strong> for lasting, long-term efficacy.</> },
    { title: "Zero Pressure, Zero Damage",      desc: <>By exerting <strong>no load on the roof covering</strong>, we eliminate all risk of tile or slate breakage. Unlike high-pressure washing which strips granules, our <strong>soft-wash method</strong> preserves the structural integrity of your roof. Our <strong>non-aggressive, contact-free approach</strong> is ideal for listed roofs or those in ABF-controlled zones. We operate on lauze stone, glazed tiles and natural slate with equal rigour.</> },
    { title: "Listed Heritage Compatibility (ABF)", desc: <>Our <strong>non-aggressive, contact-free approach</strong> is validated for listed roofs and those located in <strong>ABF-controlled zones</strong>. We operate on lauze stone, glazed tiles and natural slate with the same level of precision.</> },
    { title: "No Scaffolding, No Disruption",    desc: <>The use of <strong>drones and telescopic poles</strong> eliminates the need for <strong>scaffolding</strong>, preserving occupant activity and substantially reducing intervention costs.</> },
  ] : [
    { title: "Traitement Certibiocide Homologué",        desc: <>Nos équipes disposent de l&apos;habilitation <strong>Certibiocide</strong> obligatoire pour l&apos;application professionnelle de ces traitements. Ils éliminent <strong>mousses, lichens et algues à la racine</strong> pour une efficacité durable sur la durée.</> },
    { title: "Aucune Pression, Aucun Dommage",           desc: <>En n&apos;exerçant <strong>aucun poids sur la couverture</strong>, nous annulons tout risque de bris de tuiles ou d&apos;ardoises. Contrairement au karcher haute pression qui arrache les granulats, notre <strong>méthode douce</strong> préserve l&apos;intégrité de votre couverture. Notre approche <strong>sans contact mécanique agressif</strong> est idéale pour les toitures classées ou situées en zone ABF. Nous intervenons sur des lauzes, tuiles vernissées et ardoises naturelles avec la même rigueur.</> },
    { title: "Compatibilité Monuments Historiques (ABF)", desc: <>Notre approche <strong>sans contact mécanique agressif</strong> est validée pour les toitures classées ou situées en <strong>zone ABF</strong>. Nous intervenons sur des lauzes, tuiles vernissées et ardoises naturelles avec la même rigueur.</> },
    { title: "Sans Échafaudage, Sans Interruption",       desc: <>Le recours aux <strong>drones et aux perches télescopiques</strong> élimine le besoin d&apos;<strong>échafaudage</strong>, préservant l&apos;activité des occupants et réduisant considérablement les coûts d&apos;intervention.</> },
  ];

  const hydrofugeFeatures = isEn ? [
    { title: "Invisible, Breathable Protective Film", desc: <>The <strong>waterproofing agents</strong> penetrate the micropores of the substrate and create a <strong>powerful beading effect</strong>. Rainwater rolls off the surface, preventing future infiltration and blocking the return of biological growth.</> },
    { title: "UV and Frost Resistance",               desc: <>Our products are formulated to withstand <strong>freeze-thaw cycles</strong> and UV radiation, guaranteeing <strong>long-term protection of 5 to 10 years</strong> depending on the substrate and local climatic conditions.</> },
    { title: "Uniform Aerial Application",            desc: <>Drone-based <strong>aerial spraying</strong> ensures perfectly uniform coverage, including on <strong>inaccessible areas</strong> or steeply pitched sections. Annual preventive maintenance contracts are available to guarantee the longevity of the treatment.</> },
  ] : [
    { title: "Film Protecteur Invisible et Respirant", desc: <>Les produits <strong>hydrofuges</strong> s&apos;infiltrent dans les micropores des revêtements et créent un <strong>puissant effet perlant</strong>. L&apos;eau de pluie glisse sur la surface, prévenant les futures infiltrations et bloquant le retour végétal.</> },
    { title: "Résistance aux UV et au Gel",            desc: <>Nos produits sont formulés pour résister aux <strong>cycles de gel-dégel</strong> et aux rayonnements UV, garantissant une <strong>protection longue durée de 5 à 10 ans</strong> selon le support et les conditions climatiques.</> },
    { title: "Application Aérienne Homogène",          desc: <>La <strong>pulvérisation par drone</strong> assure une couverture parfaitement uniforme, y compris sur les <strong>zones inaccessibles</strong> ou à forte inclinaison. Des contrats d&apos;entretien préventif annuel sont disponibles pour garantir la longévité de l&apos;ouvrage.</> },
  ];

  const avantages = [
    { icon: "🛡️", title: isEn ? "Zero Fall Risk (CARSAT Compliant)"       : "Aucun Risque de Chute (CARSAT)",      desc: isEn ? <>No more scaffolding rental costs or exposure of technicians to serious accidents. By eliminating all <strong>work at height</strong>, you are fully relieved of the legal obligations incumbent upon the project owner (<strong>Prevention Plan, PPSPS</strong>) and associated civil and criminal liabilities, in compliance with <strong>CARSAT</strong> directives.</> : <>Fini les coûts de location d&apos;<strong>échafaudages</strong> ou l&apos;exposition des techniciens aux accidents graves. En supprimant tout <strong>travail en hauteur</strong>, vous êtes déchargé des obligations légales du donneur d&apos;ordre (Plan de Prévention, PPSPS).</> },
    { icon: "🏛️", title: isEn ? "Heritage and Listed Building Compatibility" : "Patrimoine et Monuments Historiques", desc: isEn ? <>The drone treats listed and extremely fragile roofs (<strong>lauze stone, glazed tiles</strong>) by spraying at <strong>ultra-low pressure</strong> with no physical contact, preserving the absolute structural integrity of the building.</> : <>Le drone traite des toitures classées et extrêmement fragiles (<strong>lauzes, tuiles vernissées</strong>) en pulvérisant à <strong>très basse pression</strong> sans aucun contact physique, respectant l&apos;intégrité absolue de l&apos;édifice.</> },
    { icon: "⚡",  title: isEn ? "Rapid Execution"                           : "Rapidité d'Exécution",               desc: isEn ? <>A roof of <strong>200 m²</strong> is treated within a few hours — where a conventional crew would require <strong>2 days</strong> of scaffolding assembly plus intervention. Minimal downtime, identical results.</> : <>Une toiture de <strong>200 m²</strong> se traite en quelques heures là où une équipe classique mobilise <strong>2 jours</strong> de montage + intervention. Moins de temps d&apos;immobilisation, résultat identique.</> },
    { icon: "💧", title: isEn ? "Long-Term Protection"                       : "Protection Longue Durée",            desc: isEn ? <><strong>Moss removal + waterproofing</strong> as a complete package: biological growth is eliminated, then the roof is sealed. A dual-layer protection that safeguards your roof covering for <strong>5 to 10 years</strong>.</> : <><strong>Démoussage + hydrofuge</strong> en pack complet : la mousse est éliminée, puis la toiture est imperméabilisée. Une double protection qui protège votre couverture pendant <strong>5 à 10 ans</strong>.</> },
  ];

  const materials = isEn
    ? ["Slate & Tiles", "Lauze Stone & Zinc", "Flat Roofs", "ABF Listed Buildings", "Industrial Roofing", "Residential"]
    : ["Ardoises & Tuiles", "Lauzes & Zinc", "Toitures-terrasses", "Monuments ABF", "Couvertures industrielles", "Résidentiel"];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      {/* BANNIÈRE */}
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-[url('/images/drone-toiture-intervention.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/20 border border-slate-400/50 text-slate-200 font-medium text-base mb-6">
              {isEn ? "Roofing · Moss Removal · Waterproofing · Heritage" : "Toiture · Démoussage · Hydrofuge · Patrimoine"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Roof Maintenance:" : "Entretien de Toitures :"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-blue-300">
                {isEn ? "Drone Moss Removal & Waterproofing" : "Démoussage et Hydrofuge par Drone"}
              </span>
            </h1>
            <p className="text-xl text-slate-300 font-semibold mb-4 italic">
              {isEn ? "Protect your building without ever setting foot on your roof." : "Protégez votre bâti sans jamais marcher sur votre toit."}
            </p>
          </div>
        </div>
      </section>

      <ExpertQuoteSide
        quote={isEn
          ? "A waterproofing agent incorrectly applied to a roof that has not been properly cleaned will seal moisture into the tile porosity, causing major structural damage during frost. The preparatory moss-removal phase is non-negotiable."
          : "Un hydrofuge mal appliqué sur un toit encore sale enfermera l'humidité dans la porosité de la tuile, causant des dégâts structurels majeurs en cas de gel. La phase de démoussage préparatoire est non négociable."}
        author="— Expert Ellipsys Solutions"
      />

      {/* SECTION 1 : INTRO VISUELLE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

            {/* Image toiture */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[420px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.roofOrange}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 text-white text-sm font-bold backdrop-blur-sm">
                  {isEn ? "🏠 Roof colonised by moss and lichens — before treatment" : "🏠 Toiture envahie par mousses et lichens — avant traitement"}
                </span>
              </div>
            </div>

            {/* Texte intro */}
            <div>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {isEn
                  ? <>Time, pollution and micro-organisms silently degrade the watertightness of your roofs. Our specialist drones apply professional <strong className="text-slate-900">certified Certibiocide treatments</strong> remotely, without any contact with the roof covering. Moss, lichens and algae are eliminated at the root, then a <strong className="text-slate-900">breathable waterproofing agent</strong> seals the roof for 5 to 10 years.</>
                  : <>Le temps, la pollution et les micro-organismes dégradent silencieusement l&apos;étanchéité de vos toitures. Nos drones spécialisés pulvérisent des traitements professionnels <strong className="text-slate-900">Certibiocide homologués</strong> à distance, sans poser un pied sur la couverture. Mousses, lichens et algues sont éliminés à la racine, puis un <strong className="text-slate-900">hydrofuge respirant</strong> scelle la couverture pour 5 à 10 ans.</>
                }
              </p>
              <div className="grid grid-cols-2 gap-3">
                {materials.map((mat, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    {mat}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2 cartes étapes */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-100 group">
              <div className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${IMG.roofConstruct}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/20" />
              <div className="relative p-8">
                <span className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold rounded-full mb-4 uppercase tracking-wide">{isEn ? "Step 1" : "Étape 1"}</span>
                <h2 className="text-2xl font-bold text-white mb-3">{isEn ? "Precision Aerial Moss Removal" : "Démoussage Aérien de Précision"}</h2>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {isEn
                    ? <><strong>Certibiocide-certified biocide</strong> applied by drone at <strong>ultra-low pressure</strong>. Root-level elimination of <strong>moss, lichens and algae</strong>. Zero load on the roof covering — compatible with slate, lauze stone and glazed tiles.</>
                    : <><strong>Biocide Certibiocide</strong> homologué projeté par drone à <strong>très basse pression</strong>. Élimination à la racine des <strong>mousses, lichens et algues</strong>. Aucun poids sur la couverture — compatible ardoises, lauzes, tuiles vernissées.</>
                  }
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-md group">
              <div className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${IMG.roofClay}')` }} />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0e2f52]/90 to-[#0e2f52]/70" />
              <div className="relative p-8 text-white">
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full mb-4 uppercase tracking-wide border border-blue-400/30">{isEn ? "Step 2" : "Étape 2"}</span>
                <h2 className="text-2xl font-bold mb-3">{isEn ? "Waterproofing — Your Building's Shield" : "Hydrofuge — Le Bouclier de votre Bâtiment"}</h2>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {isEn
                    ? <>After complete sanitation, the drone applies a waterproofing agent that penetrates the micropores and creates a <strong className="text-white">powerful beading effect</strong>. Water rolls off, infiltration is prevented, biological regrowth blocked for <strong className="text-white">5 to 10 years</strong>.</>
                    : <>Après l&apos;assainissement complet, le drone applique un hydrofuge qui s&apos;infiltre dans les micropores et crée un <strong className="text-white">puissant effet perlant</strong>. L&apos;eau glisse, les infiltrations sont prévenues, le retour végétal bloqué pour <strong className="text-white">5 à 10 ans</strong>.</>
                  }
                </p>
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

      {/* SECTION 2 : AGENTS DÉGRADANTS */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{isEn ? "Understanding the risks to your roof" : "Comprendre les risques pour votre toiture"}</h2>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {isEn
                  ? <>Whether caused by weather events or biological colonisation (<strong>moss, lichens</strong>), each threat attacks your roof in a specific way. Intervening at the <strong>right moment</strong> is essential to preserve your covering and ensure <strong>lasting protection</strong>.</>
                  : <>Qu&apos;il s&apos;agisse des intempéries ou des parasites (<strong>mousses, lichens</strong>), chaque élément agresse votre toit de manière spécifique. Intervenir au <strong>bon moment</strong> est essentiel pour préserver votre couverture et lui assurer une <strong>protection durable</strong>.</>
                }
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <div className="grid grid-cols-3 bg-[#0e2f52] text-white text-xs font-bold px-4 py-4">
                  <div>{isEn ? "Degrading Agent" : "Agent Dégradant"}</div>
                  <div>{isEn ? "Effect on the Roof" : "Effet sur la Couverture"}</div>
                  <div>{isEn ? "Risk Level" : "Niveau de Risque"}</div>
                </div>
                {degradants.map((d, i) => (
                  <div key={i} className={`grid grid-cols-3 px-4 py-4 items-center gap-2 text-xs border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                    <div className="font-semibold text-slate-900">{d.name}</div>
                    <div className="text-slate-600">{d.effet}</div>
                    <div><span className={`inline-block px-2 py-1 rounded-lg text-xs font-bold ${d.risqueColor}`}>{d.risque}</span></div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 italic mt-3 pl-1">{isEn ? "Sources: INRS, CARSAT, DTU 40.x — Traditional roofing materials." : "Sources : INRS, CARSAT, DTU 40.x — Couvertures en matériaux traditionnels."}</p>
            </div>

            <div className="space-y-5">
              <div className="relative rounded-3xl overflow-hidden shadow-lg h-64 lg:h-80">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.roofConstruct}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-xs font-bold leading-relaxed">{isEn ? "Roof covering during treatment — zero load applied to tiles" : "Couverture en cours de traitement — aucun poids exercé sur les tuiles"}</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  {isEn
                    ? <><strong>Note:</strong> The nature of the biological soiling determines the appropriate treatment and the urgency of the intervention. Lichens are the most destructive in the long term as they act directly on the porosity of the material. <strong>A preliminary inspection is included in every quotation.</strong></>
                    : <>La nature de l&apos;encrassement détermine le traitement adapté et le niveau d&apos;urgence de l&apos;intervention. Les lichens sont les plus destructeurs à long terme car ils agissent directement sur la porosité du matériau. <strong>Une inspection préalable est incluse dans chaque devis.</strong></>
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 : PROTOCOLE */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{isEn ? "Our two-step protocol" : "Notre protocole en deux étapes"}</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
              {isEn
                ? <>Every intervention systematically combines <strong>moss removal and waterproofing</strong> for <strong>complete and lasting protection</strong>.</>
                : <>Chaque intervention combine systématiquement <strong>démoussage et hydrofuge</strong> pour une <strong>protection complète et durable</strong>.</>
              }
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.roofClay}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e2f52]/80 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3">
                  <span className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold rounded-full">{isEn ? "Step 1" : "Étape 1"}</span>
                  <h3 className="text-white font-bold text-lg">{isEn ? "Moss Removal — Our Protocol" : "Démoussage — Notre Protocole"}</h3>
                </div>
              </div>
              <div className="p-5 bg-slate-50 space-y-3">
                {demoussageFeatures.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-0.5">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.hydrofuge}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e2f52]/80 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold rounded-full">{isEn ? "Step 2" : "Étape 2"}</span>
                  <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-blue-300" /> {isEn ? "Waterproofing — Long-Term Protection" : "Hydrofuge — Protection Longue Durée"}
                  </h3>
                </div>
              </div>
              <div className="p-5 bg-slate-50 space-y-3">
                {hydrofugeFeatures.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-0.5">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 : AVANTAGES */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{isEn ? "The exclusive benefits of our method" : "Les bénéfices exclusifs de notre méthode"}</h2>
          <AccordionSection items={avantages} />
        </div>
      </section>

      {/* SECTION 5 : CONFORMITÉ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-64 lg:h-full min-h-[280px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.safetyWorker}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs font-bold backdrop-blur-sm">
                  {isEn ? "🛡️ No work at height — CARSAT Compliance" : "🛡️ Aucun travail en hauteur — Conformité CARSAT"}
                </span>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">{isEn ? "Compliance and Safety" : "Conformité et Sécurité"}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {isEn
                    ? <>Our interventions meet the <strong>most stringent regulatory requirements</strong>, whether your building is industrial, residential or listed.</>
                    : <>Nos interventions satisfont aux <strong>exigences réglementaires les plus strictes</strong>, que votre bâtiment soit industriel, résidentiel ou classé.</>
                  }
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
                  <Shield className="w-8 h-8 text-[#0e2f52] mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{isEn ? "CARSAT Compliance" : "Conformité CARSAT"}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {isEn
                      ? <>By eliminating all <strong>work at height</strong> for intervention personnel, you are fully relieved of the legal obligations incumbent upon the project owner (<strong>Prevention Plan, PPSPS</strong>) and the associated civil and criminal liabilities, in compliance with <strong>CARSAT</strong> directives.</>
                      : <>En supprimant tout <strong>travail en hauteur</strong> pour le personnel d&apos;intervention, vous êtes déchargé intégralement des obligations légales du donneur d&apos;ordre (<strong>Plan de Prévention, PPSPS</strong>) et des responsabilités civiles et pénales associées, en accord avec les directives de la <strong>CARSAT</strong>.</>
                    }
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
                  <Shield className="w-8 h-8 text-amber-600 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{isEn ? "ABF & Listed Heritage Compatibility" : "Compatibilité ABF & Monuments"}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {isEn
                      ? <>Our <strong>low-pressure, contact-free methods</strong> and <strong>certified biocide products</strong> are adapted to fragile and heritage materials. We operate on slate, canal tiles, zinc and other traditional materials, in coordination with the <strong>Architectes des Bâtiments de France</strong>.</>
                      : <>Nos méthodes <strong>sans pression mécanique forte</strong> et nos <strong>produits biocides homologués</strong> sont adaptés aux matériaux fragiles ou anciens. Nous intervenons sur des toitures en ardoise, tuiles canal, zinc et autres matériaux patrimoniaux, en coordination avec les <strong>Architectes des Bâtiments de France</strong>.</>
                    }
                  </p>
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  {isEn
                    ? <><strong>Legal notice:</strong> Protection durations stated are average estimates based on normal conditions of use. Actual results depend on substrate type, local weather conditions and exposure levels. They do not constitute an absolute contractual guarantee.</>
                    : <><strong>Mentions légales :</strong> Les durées de protection mentionnées sont des estimations moyennes basées sur les conditions normales d&apos;utilisation. Les résultats réels dépendent du type de support, des conditions météorologiques locales et de l&apos;exposition. Ils ne constituent pas une garantie contractuelle absolue.</>
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-slate-800 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Shield className="w-10 h-10 text-slate-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">{isEn ? "Protect your roof, preserve your heritage" : "Protégez votre toiture, préservez votre patrimoine"}</h2>
          <p className="text-slate-300 mb-10 text-lg">{isEn ? "A complimentary diagnostic to assess the condition of your roof and the appropriate treatments." : "Un diagnostic gratuit pour évaluer l'état de votre couverture et les traitements adaptés."}</p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            {isEn ? "Request a Roof Diagnostic" : "Demander un diagnostic toiture"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
