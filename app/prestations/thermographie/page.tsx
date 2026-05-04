import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ChevronRight, AlertCircle, Thermometer, Zap, FileText, Clock } from "lucide-react";
import ExpertQuoteSide from "@/components/ExpertQuoteSide";
import AccordionSection from "@/components/AccordionSection";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Thermographie Aérienne et Inspection Technique de Bâtiments par Drone | Ellipsys",
  description: "Détectez l'invisible avec la thermographie par drone. Audits énergétiques Décret Tertiaire, maintenance de parcs solaires, détection de ponts thermiques. DJI Matrice 4T.",
};

const PX = "?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const IMG = {
  thermalCam: `https://images.pexels.com/photos/7859781/pexels-photo-7859781.jpeg${PX}`,
  thermalCam2:`https://images.pexels.com/photos/7859787/pexels-photo-7859787.jpeg${PX}`,
};

export default async function ThermographiePage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const stats = [
    { value: "−50 %",  label: isEn ? "Reduction in inspection costs" : "Baisse des coûts d'inspection" },
    { value: "95 %",   label: isEn ? "Anomaly detection rate" : "Taux de détection des anomalies" },
    { value: "< 3 h",  label: isEn ? "Full 1 MWp audit" : "Audit d'1 MWc complet" },
    { value: "48 h",   label: isEn ? "PDF report delivered post-flight" : "Rapport PDF remis après le vol" },
  ];

  const useCases = isEn ? [
    {
      badge: "Tertiary Decree",
      badgeColor: "bg-blue-500/20 border-blue-400/40 text-blue-300",
      title: "Energy Performance and Buildings",
      desc: <>Did you know that <strong>50% of energy losses</strong> escape through the roof and upper sections of a building? To meet renovation obligations, a <strong>thermal audit</strong> is essential. Equipped with the <strong>DJI Matrice 4T</strong> range integrating radiometric cameras (640x512 resolution) and laser rangefinders (1,800 m range), we map your facades and flat roofs with extreme precision. We instantly detect <strong>thermal bridges</strong>, insulation defects and heat network leaks.</>,
      img: "/images/thermographie-industrie.png",
      imgCaption: "Thermal mapping of facade — thermal bridges detected in red",
    },
    {
      badge: "Solar Parks",
      badgeColor: "bg-amber-500/20 border-amber-400/40 text-amber-300",
      title: "Predictive Maintenance of Photovoltaic Parks",
      desc: <>Across vast hectares of solar panels, manual inspection is time-consuming and imprecise. <strong>Drone thermography</strong> enables rapid overflight to immediately identify <strong>dead cells</strong>, disconnected zones and <strong>hotspots</strong>. This data, integrated into precise reports, enables you to orchestrate <strong>surgical maintenance operations</strong> and secure your investments.</>,
      img: "/images/thermographie-solaire.png",
      imgCaption: "Thermal inspection of PV park — defective cells geolocated",
    },
  ] : [
    {
      badge: "Décret Tertiaire",
      badgeColor: "bg-blue-500/20 border-blue-400/40 text-blue-300",
      title: "Enjeux Énergétiques et Bâtiments",
      desc: <>Saviez-vous que <strong>50 % des déperditions énergétiques</strong> s&apos;échappent par la toiture et les parties supérieures d&apos;un bâtiment ? Pour répondre aux obligations de rénovation, l&apos;<strong>audit thermique</strong> est indispensable. Équipés de la gamme <strong>DJI Matrice 4T</strong> intégrant des caméras radiométriques (résolution 640x512) et des télémètres laser (portée 1800 m), nous cartographions vos façades et toitures-terrasses avec une extrême finesse. Nous détectons instantanément les <strong>ponts thermiques</strong>, les défauts d&apos;isolation et les fuites de réseaux de chaleur.</>,
      img: "/images/thermographie-industrie.png",
      imgCaption: "Cartographie thermique façade — ponts thermiques détectés en rouge",
    },
    {
      badge: "Parcs Solaires",
      badgeColor: "bg-amber-500/20 border-amber-400/40 text-amber-300",
      title: "Maintenance Prédictive des Parcs Photovoltaïques",
      desc: <>Sur de vastes hectares de panneaux solaires, une inspection manuelle est chronophage et imprécise. La <strong>thermographie par drone</strong> permet un survol rapide pour identifier immédiatement les <strong>cellules mortes</strong>, les zones déconnectées et les <strong>points chauds (Hotspots)</strong>. Ces données, intégrées dans des rapports précis, permettent d&apos;orchestrer vos opérations de <strong>maintenance chirurgicale</strong> et de sécuriser vos investissements.</>,
      img: "/images/thermographie-solaire.png",
      imgCaption: "Inspection thermique de parc PV — cellules défectueuses géolocalisées",
    },
  ];

  const livrables = isEn ? [
    { icon: FileText, color: "text-blue-500",   bg: "bg-blue-50",    title: "Annotated PDF Report",        desc: <>Detailed technical report with <strong>anomaly annotations</strong>, precise GPS coordinates and <strong>priority intervention</strong> recommendations.</> },
    { icon: Zap,      color: "text-amber-500",  bg: "bg-amber-50",   title: "HD Thermal Maps",             desc: <><strong>High-definition orthophotographs</strong> and geolocated thermal maps integrable into your <strong>BIM</strong> (Building Information Modeling) software.</> },
    { icon: Clock,    color: "text-emerald-500", bg: "bg-emerald-50", title: "Deliverables Within 48h",     desc: <>All technical and visual documents are delivered <strong>within 48 hours</strong> after the inspection flight, enabling <strong>accelerated decision-making</strong>.</> },
  ] : [
    { icon: FileText, color: "text-blue-500",   bg: "bg-blue-50",    title: "Rapport PDF Annoté",          desc: <>Rapport technique détaillé avec <strong>annotations d&apos;anomalies</strong>, coordonnées GPS précises et recommandations d&apos;<strong>intervention prioritaire</strong>.</> },
    { icon: Zap,      color: "text-amber-500",  bg: "bg-amber-50",   title: "Cartes Thermiques HD",        desc: <><strong>Orthophotographies haute définition</strong> et cartes thermiques géolocalisées intégrables dans vos logiciels <strong>BIM</strong> (Building Information Modeling).</> },
    { icon: Clock,    color: "text-emerald-500", bg: "bg-emerald-50", title: "Livrables sous 48h",          desc: <>L&apos;ensemble des documents techniques et visuels est remis <strong>sous 48h</strong> après le vol d&apos;inspection, pour une <strong>prise de décision accélérée</strong>.</> },
  ];

  const atouts = isEn ? [
    { title: "Proven Scientific Precision",    desc: <>The National Solar Energy Institute (INES) highlights the strategic importance of <strong>drone thermographic inspection</strong> for the diagnosis and optimisation of photovoltaic assets. The <strong>zenithal view</strong> enables detection of the overwhelming majority of anomalies invisible from the ground (<strong>dead cells, PID</strong>).</> },
    { title: "Precise and Actionable Deliverables", desc: <>At the conclusion of our inspection flight, you do not simply receive photographs. We deliver a <strong>detailed technical report in PDF format</strong> including anomaly annotations, high-definition orthophotographs, <strong>geolocated thermal maps</strong>, and 3D models that can be integrated directly into your own <strong>BIM</strong> (Building Information Modeling) software.</> },
    { title: "Speed and Cost Reduction",       desc: <>A comprehensive audit of a facility is completed in <strong>a few hours by aircraft</strong>, where technicians would mobilise over several days. This velocity translates into a <strong>drastic reduction in inspection costs</strong> and accelerated decision-making.</> },
    { title: "Minimal Disruption",             desc: <>Our aerial overflight causes <strong>no major disruption</strong> to your heat network, industrial production or the activities of your staff, securing the integrity of your site <strong>without any production stoppage</strong>.</> },
  ] : [
    { title: "Une Précision Scientifique Prouvée",    desc: <>L&apos;Institut National de l&apos;Énergie Solaire (INES) souligne l&apos;importance stratégique de l&apos;<strong>inspection thermographique par drone</strong> pour le diagnostic et l&apos;optimisation des actifs photovoltaïques. La <strong>vue zénithale</strong> permet de détecter une écrasante majorité des anomalies invisibles au sol (<strong>cellules mortes, PID</strong>).</> },
    { title: "Des Livrables Précis et Exploitables", desc: <>À l&apos;issue de notre vol d&apos;inspection, vous ne recevez pas de simples clichés. Nous vous remettons un <strong>rapport technique détaillé au format PDF</strong> incluant les annotations d&apos;anomalies, des orthophotographies haute définition, des <strong>cartes thermiques géolocalisées</strong>, ainsi que des modèles 3D pouvant être intégrés directement dans vos propres logiciels <strong>BIM</strong> (Building Information Modeling).</> },
    { title: "Vélocité et Réduction des Coûts",      desc: <>L&apos;audit exhaustif d&apos;une centrale s&apos;effectue en <strong>quelques heures par aéronef</strong>, là où des techniciens mobiliseraient plusieurs jours. Cette vélocité se traduit par une <strong>réduction drastique de vos coûts d&apos;inspection</strong> et une prise de décision accélérée.</> },
    { title: "Perturbation Minimale",                desc: <>Notre survol aérien n&apos;entraîne <strong>aucune perturbation majeure</strong> de votre réseau de chaleur, de votre production industrielle ou de l&apos;activité de vos collaborateurs, sécurisant ainsi l&apos;intégrité de votre site <strong>sans arrêt de production</strong>.</> },
  ];

  const barLabelsTime = isEn ? ["Manual\nInspection", "By Drone"] : ["Inspection\nManuelle", "Par Drone"];
  const barLabelsDetect = isEn ? ["Manual\nInspection", "By Drone"] : ["Inspection Manuelle", "Par Drone"];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      {/* BANNIÈRE */}
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-[url('/images/thermographie-banner.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 font-medium text-base mb-6">
              {isEn ? "Thermography · Inspection · Energy" : "Thermographie · Inspection · Énergie"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Aerial Thermography and Technical Building Inspection by" : "Thermographie Aérienne et Inspection Technique de"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                {isEn ? "Drone" : "Bâtiments par Drone"}
              </span>
            </h1>
            <p className="text-xl text-blue-300 font-semibold mb-4 italic">
              {isEn ? "Detect the invisible to act with precision." : "Détectez l'invisible pour agir avec justesse."}
            </p>
          </div>
        </div>
      </section>

      <ExpertQuoteSide
        quote={isEn
          ? "Drone thermographic inspection has become indispensable. The zenithal view is the only one capable of detecting defective cells on a solar park or thermal bridges on a flat roof, in a fraction of the time required by a conventional audit."
          : "L'inspection thermographique par drone est devenue incontournable. La vue zénithale est la seule capable de détecter les cellules défectueuses sur un parc solaire ou les ponts thermiques d'une toiture-terrasse, en une fraction du temps d'un audit classique."}
        author={isEn ? "— Expert, Ellipsys Consulting & Training" : "— Expert Ellipsys Conseil & Formation"}
      />

      {/* SECTION 1 : INTRO VISUELLE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

            {/* Image caméra thermique */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[420px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/4T.jpg')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 text-white text-sm font-bold backdrop-blur-sm">
                  {isEn ? "🌡️ DJI Matrice 4T radiometric thermal camera" : "🌡️ Caméra thermique radiométrique DJI Matrice 4T"}
                </span>
              </div>
            </div>

            {/* Texte + Avis Expert */}
            <div>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {isEn
                  ? <>The thermal camera reveals what the eye cannot see. Our drones equipped with the <strong className="text-slate-900">DJI Matrice 4T</strong> range carry a <strong className="text-slate-900">640×512 px radiometric sensor</strong> coupled with a laser rangefinder with a range of <strong className="text-slate-900">1,800 m</strong>. In a matter of hours, they map hundreds of thousands of m² of assets with <strong className="text-slate-900">centimetric precision</strong>. <strong className="text-slate-900">Thermal bridges</strong>, <strong className="text-slate-900">defective PV cells</strong>, heat network leaks: every anomaly is geolocated, annotated and integrated into a technical report delivered <strong className="text-slate-900">within 48 hours</strong>.</>
                  : <>La caméra thermique révèle ce que l&apos;œil ne peut pas voir. Nos drones équipés de la gamme <strong className="text-slate-900">DJI Matrice 4T</strong> embarquent un <strong className="text-slate-900">capteur radiométrique 640×512 px</strong> couplé à un télémètre laser d&apos;une portée de <strong className="text-slate-900">1 800 m</strong>. En quelques heures, ils cartographient des centaines de milliers de m² d&apos;actifs avec une <strong className="text-slate-900">précision centimétrique</strong>. <strong className="text-slate-900">Ponts thermiques</strong>, <strong className="text-slate-900">cellules PV défectueuses</strong>, fuites de réseaux de chaleur : chaque anomalie est géolocalisée, annotée et intégrée dans un rapport technique livré <strong className="text-slate-900">sous 48h</strong>.</>
                }
              </p>
              <div className="bg-[#0e2f52]/5 border border-[#0e2f52]/20 rounded-2xl p-5 flex items-start gap-4">
                <span className="text-brand-orange-500 text-4xl font-bold leading-none -mt-1 select-none shrink-0">&ldquo;</span>
                <div>
                  <p className="text-xs font-black text-brand-orange-500 uppercase tracking-widest mb-2">{isEn ? "Expert Opinion" : "Avis Expert"}</p>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    {isEn
                      ? <>Drone thermographic inspection has become indispensable. The <strong>zenithal view</strong> is the only one capable of detecting <strong>defective cells</strong> on a solar park or <strong>thermal bridges</strong> on a flat roof, in a <strong>fraction of the time</strong> required by a conventional audit.</>
                      : <>L&apos;inspection thermographique par drone est devenue incontournable. La <strong>vue zénithale</strong> est la seule capable de détecter les <strong>cellules défectueuses</strong> sur un parc solaire ou les <strong>ponts thermiques</strong> d&apos;une toiture-terrasse, en une <strong>fraction du temps</strong> d&apos;un audit classique.</>
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Livrables 3 cartes */}
          <div className="grid md:grid-cols-3 gap-6">
            {livrables.map((l, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl border border-slate-100 p-6 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${l.bg} rounded-2xl flex items-center justify-center mb-4`}>
                  <l.icon className={`w-6 h-6 ${l.color}`} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{l.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{l.desc}</p>
              </div>
            ))}
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

      {/* SECTION 2 : CAS D'USAGE VISUELS */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{isEn ? "Two key application domains" : "Deux domaines d'application clés"}</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">{isEn ? "One technology, two major performance levers for your assets." : "Une seule technologie, deux leviers de performance majeurs pour vos actifs."}</p>
          </div>
          {useCases.map((uc, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative rounded-3xl overflow-hidden shadow-lg h-64 lg:h-80">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${uc.img}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="text-white text-xs font-semibold">{uc.imgCaption}</p>
                  </div>
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className={`inline-block px-3 py-1 rounded-full border text-xs font-bold mb-4 ${uc.badgeColor}`}>{uc.badge}</span>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{uc.title}</h2>
                <p className="text-slate-600 leading-relaxed text-sm">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 : GRAPHIQUE PERFORMANCE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-12 text-center leading-tight">
            {isEn ? <>Comparative Performance: Manual Inspection vs. Drone Thermography<br /><span className="text-lg font-semibold text-slate-500">(Base 1 MWp)</span></> : <>Performance Comparée : Inspection Manuelle vs. Thermographie par Drone<br /><span className="text-lg font-semibold text-slate-500">(Base 1 MWc)</span></>}
          </h2>

          <div className="max-w-xs mx-auto mb-14">
            <div className="border-2 border-slate-200 bg-white rounded-2xl p-6 text-center shadow-sm">
              <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">{isEn ? "Reduction in Inspection Costs" : "Baisse des Coûts d'Inspection"}</p>
              <p className="text-7xl font-black text-brand-orange-500 leading-none">-50<span className="text-4xl">%</span></p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm p-10">
            <div>
              <h3 className="text-center font-bold text-slate-900 mb-6 text-base">{isEn ? "Intervention Time" : "Temps d'intervention"}</h3>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-slate-400 pr-2" style={{ width: '28px' }}>
                  <span>70 h</span><span>50 h</span><span>30 h</span><span>10 h</span><span>0 h</span>
                </div>
                <div className="pl-8 flex items-end justify-around gap-8 border-b-2 border-slate-200" style={{ height: '220px' }}>
                  {[{ label: barLabelsTime[0], value: "60 h", heightPx: 188, color: "#0e2f52" }, { label: barLabelsTime[1], value: "2.5 h", heightPx: 8, color: "#f97316" }].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center justify-end gap-1 h-full">
                      <span className="text-sm font-black" style={{ color: bar.color }}>{bar.value}</span>
                      <div className="w-full max-w-[72px] rounded-t-md" style={{ height: `${bar.heightPx}px`, backgroundColor: bar.color, minHeight: '8px' }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="pl-8 flex justify-around gap-4 mt-3">
                {barLabelsDetect.map((label, i) => (
                  <p key={i} className="flex-1 text-center text-xs text-slate-600">{label}</p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-center font-bold text-slate-900 mb-6 text-base">{isEn ? "Detection Rate" : "Taux de Détection"}</h3>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-slate-400 pr-2" style={{ width: '34px' }}>
                  <span>120 %</span><span>80 %</span><span>60 %</span><span>20 %</span><span>0 %</span>
                </div>
                <div className="pl-10 flex items-end justify-around gap-8 border-b-2 border-slate-200" style={{ height: '220px' }}>
                  {[{ label: barLabelsDetect[0], value: "35 %", heightPx: 64, color: "#0e2f52" }, { label: barLabelsDetect[1], value: "95 %", heightPx: 174, color: "#f97316" }].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center justify-end gap-1 h-full">
                      <span className="text-sm font-black" style={{ color: bar.color }}>{bar.value}</span>
                      <div className="w-full max-w-[72px] rounded-t-md" style={{ height: `${bar.heightPx}px`, backgroundColor: bar.color }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="pl-10 flex justify-around gap-4 mt-3">
                {barLabelsDetect.map((label, i) => (
                  <p key={i} className="flex-1 text-center text-xs text-slate-600">{label}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <p className="text-sm text-slate-600 leading-relaxed text-center max-w-3xl mx-auto">
              {isEn
                ? <>The data demonstrates that the drone reduces <strong>intervention time by more than tenfold</strong> while doubling the capacity for <strong>technical anomaly detection</strong>, thereby securing the photovoltaic investment.</>
                : <>Les données démontrent que le drone réduit le <strong>temps d&apos;intervention par plus de dix</strong> tout en doublant la capacité de <strong>détection des anomalies techniques</strong>, sécurisant ainsi l&apos;investissement photovoltaïque.</>
              }
            </p>
            <div className="max-w-3xl mx-auto p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 italic leading-relaxed">
                {isEn
                  ? <><strong>Legal notice:</strong> Intervention time reductions, cost decreases and anomaly detection rates mentioned are observed averages. Actual results depend on climatic conditions, site complexity and the general condition of the structure. Thermographic inspection constitutes a technical decision-support tool and in no way replaces an absolute contractual guarantee.</>
                  : <><strong>Mentions légales :</strong> Les réductions de temps d&apos;intervention, les baisses de coûts et les taux de détection d&apos;anomalies mentionnés sont des moyennes constatées. Les résultats réels dépendent des conditions climatiques, de la complexité du site et de l&apos;état général de la structure. L&apos;inspection thermographique constitue une aide technique à la décision et ne se substitue en aucun cas à une garantie contractuelle absolue.</>
                }
              </p>
            </div>
            <p className="text-xs text-slate-400 font-medium text-center">{isEn ? "Data sources: National Solar Energy Institute (INES)" : "Sources des données : Institut National de l'Énergie Solaire"}</p>
          </div>
        </div>
      </section>

      {/* SECTION 4 : ATOUTS */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {isEn ? "The strengths of aerial thermographic inspection" : "Les atouts de l'inspection thermographique aérienne"}
          </h2>
          <AccordionSection items={atouts} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-blue-900 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Thermometer className="w-10 h-10 text-blue-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">{isEn ? "Conduct your thermal audit without constraints" : "Réalisez votre audit thermique sans contrainte"}</h2>
          <p className="text-slate-300 mb-10 text-lg">{isEn ? "A precise and actionable report within 48 hours after the overflight of your site." : "Un rapport précis et exploitable sous 48h après le survol de votre site."}</p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            {isEn ? "Request a Thermal Diagnostic" : "Demander un diagnostic thermique"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
