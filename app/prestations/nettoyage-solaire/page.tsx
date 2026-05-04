import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sun, CheckCircle2, AlertCircle } from "lucide-react";
import ExpertQuoteSide from "@/components/ExpertQuoteSide";
import AccordionSection from "@/components/AccordionSection";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Nettoyage robotisé de panneaux solaires et restauration de rendement | Ellipsys",
  description: "Robot Rony et drone Chronos pour le nettoyage de parcs solaires. Eau osmosée, inspection thermographique, contrats annuels. Gain de rendement mesurable. CARSAT, AIE PVPS.",
};

const chartBars = [
  { label: "Encrassement Standard (AIE PVPS)", display: "-7 %", pct: 7, color: "#0e2f52" },
  { label: "Épisode Sable Saharien", display: "-30 %", pct: 30, color: "#f97316" },
  { label: "Occultation Totale (Point Chaud)", display: "-100 %", pct: 100, color: "#dc2626" },
];

export default async function PanneauxPhotovoltaiquesPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const agents = [
    { name: isEn ? "Dust / Pollution" : "Poussière / Pollution", nature: isEn ? "Global haze" : "Voile global", perte: "5 % – 15 %", risque: isEn ? "Low" : "Faible", risqueColor: "bg-slate-200 text-slate-700" },
    { name: isEn ? "Pollen / Vegetation" : "Pollen / Végétation", nature: isEn ? "Adhesive film" : "Film adhésif", perte: "10 % – 20 %", risque: isEn ? "Medium" : "Moyen", risqueColor: "bg-amber-200 text-amber-800" },
    { name: isEn ? "Bird droppings" : "Fientes d'oiseaux", nature: isEn ? "Total local occlusion" : "Occultation totale locale", perte: "20 % – 35 %", risque: isEn ? "Critical — Hot spots" : "Critique — Points chauds", risqueColor: "bg-red-500 text-white" },
    { name: isEn ? "Sand / Sea salt" : "Sable / Sel marin", nature: isEn ? "Opaque abrasive haze" : "Voile opaque et abrasif", perte: "15 % – 30 %", risque: isEn ? "High — Micro-scratches" : "Élevé — Micro-rayures", risqueColor: "bg-brand-orange-500 text-white" },
  ];

  const comparatif = [
    { critere: isEn ? "Execution speed" : "Vitesse d'exécution", manuel: isEn ? "80 to 120 m² / hour (pole or rope access)" : "80 à 120 m² / heure (à la perche ou cordiste)", robot: isEn ? "500 m² / hour (terrain average)" : "500 m² / heure (moyenne terrain)" },
    { critere: isEn ? "Uniformity" : "Homogénéité", manuel: isEn ? "Random — depends on cherry picker or rope access operator" : "Aléatoire — dépend de l'opérateur en nacelle ou cordiste", robot: isEn ? "Uniform over 100% of the treated surface" : "Uniforme sur 100 % de la surface traitée" },
    { critere: isEn ? "Pressure on modules" : "Pression sur les modules", manuel: isEn ? "Uncontrolled — possible overload (cherry picker, rope access)" : "Non contrôlée — surcharge possible (nacelle, cordiste)", robot: isEn ? "Calibrated and constant (soft brushes)" : "Calibrée et constante (brosses douces)" },
    { critere: isEn ? "Safety (CARSAT)" : "Sécurité (CARSAT)", manuel: isEn ? "High risk: work at height, cherry picker or rope access" : "Risque élevé : travail en hauteur, nacelle ou cordiste", robot: isEn ? "Zero risk (operator and pilot on the ground)" : "Risque nul (opérateur et télépilote au sol)" },
  ];

  const chartBarLabels = isEn ? [
    { label: "Standard Soiling (IEA PVPS)", display: "-7 %", pct: 7, color: "#0e2f52" },
    { label: "Saharan Sand Episode", display: "-30 %", pct: 30, color: "#f97316" },
    { label: "Total Occlusion (Hot Spot)", display: "-100 %", pct: 100, color: "#dc2626" },
  ] : chartBars;

  const avantages = [
    {
      title: isEn ? "Protecting Your Revenue (IEA PVPS)" : "La Sauvegarde de vos Revenus (AIE PVPS)",
      desc: isEn ? <>If the global average loss is between <strong>4 and 7%</strong> (IEA PVPS), it can reach <strong>30%</strong> in challenging environments or during Saharan sand episodes. In coastal (salt), agricultural (harvest dust) or logistics and industrial platform zones (greasy film from exhaust gases), pollution forms a <strong>formidable opaque veil</strong> over your panels. Given the persistence of these deposits, professional cleaning is quickly amortised through an <strong>immediate productivity gain</strong>. To secure your profitability and prevent any irreversible damage to your photovoltaic cells, a <strong>minimum of two annual visits</strong> is advisable.</> : <>Si la perte moyenne mondiale se situe entre <strong>4 et 7 %</strong> (AIE PVPS), elle peut atteindre les <strong>30 %</strong> dans des environnements contraignants ou lors d&apos;épisodes de sables sahariens. En zone littorale (sel), agricole (poussières de récoltes), ou sur les plateformes logistiques et industrielles (film gras lié aux gaz d&apos;échappement), la pollution forme un <strong>voile opaque redoutable</strong> pour vos panneaux. Face à la ténacité de ces dépôts, un nettoyage professionnel est très vite amorti grâce au <strong>gain immédiat de productivité</strong>. Pour sécuriser votre rentabilité et prévenir tout dommage irréversible sur vos cellules photovoltaïques, <strong>deux passages annuels minimum</strong> sont souhaitables.</>,
    },
    {
      title: isEn ? "Preventing Hotspot Damage & Insurance Compliance" : "Prévention des Avaries (Hotspots) & Conformité Assurances",
      desc: isEn ? <>Localised soiling (droppings, leaves, debris) causes destructive overheating known as <strong>&quot;hot spots&quot;</strong>. Beyond the premature degradation of your cells, this phenomenon can cause irreversible material damage up to and including <strong>fire outbreak</strong>. Regular cleaning eliminates this major risk and guarantees strict compliance with the requirements of your <strong>insurance contract</strong>.</> : <>Les salissures localisées (fientes, feuilles, débris) provoquent des surchauffes destructrices appelées <strong>&quot;points chauds&quot;</strong>. Au-delà de la dégradation prématurée de vos cellules, ce phénomène peut causer des dommages matériels irréversibles allant jusqu&apos;au <strong>départ d&apos;incendie</strong>. Un nettoyage régulier élimine ce risque majeur et garantit la stricte conformité de votre site face aux exigences de votre <strong>contrat d&apos;assurance</strong>.</>,
    },
    {
      title: isEn ? "Institutionally Validated Safety (CARSAT / FFB)" : "Une Sécurité Validée par les Institutions (CARSAT / FFB)",
      desc: isEn ? <>By drastically limiting <strong>personnel working at height</strong> for the cleaning of your panels, you considerably reduce risks on your site. You thus benefit from a serene service, perfectly aligned with the prevention standards of <strong>CARSAT</strong>.</> : <>En limitant drastiquement les <strong>interventions humaines en hauteur</strong> pour le nettoyage de vos panneaux, vous réduisez considérablement les risques sur votre site. Vous bénéficiez ainsi d&apos;une prestation sereine, parfaitement alignée sur les standards de prévention de la <strong>CARSAT</strong>.</>,
    },
    {
      title: isEn ? "Absolute Operational Continuity" : "Continuité Opérationnelle Absolue",
      desc: isEn ? <>Our <strong>drone and robot</strong> cleaning guarantees <strong>maximum continuity</strong> of your operations. Our interventions integrate into your site without blocking your production or logistics flows, outside the strict safety perimeter (third-party exclusion zone, explained in our FAQ).</> : <>Nos nettoyages par <strong>drone et robot</strong> garantissent une <strong>continuité maximale</strong> de votre activité. Nos opérations s&apos;intègrent à votre site sans bloquer votre production ni vos flux logistiques, en dehors du strict périmètre de sécurité (zone d&apos;exclusion des tiers, expliquée dans notre FAQ).</>,
    },
    {
      title: isEn ? "The Ecological Argument (Water Savings)" : "L'Argument Écologique (Économie d'Eau)",
      desc: isEn ? <>The use of our robots allows the <strong>water consumption to be divided by ten</strong>. Where manual cleaning uses on average <strong>10 to 15 litres</strong> of water per square metre, our solutions require only <strong>0.5 to 2 litres</strong>. This exceptional sobriety is explained by the use of high-technology equipment: our robots are fitted with nozzles specially designed for this type of work, ensuring perfect water dispersion and avoiding wastage. A powerful sustainability argument for your CSR reports.</> : <>L&apos;usage de nos robots permet de <strong>diviser la consommation d&apos;eau par dix</strong>. Là où un nettoyage manuel utilise en moyenne <strong>10 à 15 litres</strong> d&apos;eau par mètre carré, nos solutions n&apos;en nécessitent que <strong>0,5 à 2 litres</strong>. Cette sobriété exceptionnelle s&apos;explique par l&apos;utilisation d&apos;équipements de haute technologie : nos robots sont dotés de buses spécialement conçues pour ce type de travaux, assurant une dispersion parfaite de l&apos;eau et évitant les déperditions. Un argument de durabilité puissant pour valoriser votre politique RSE.</>,
    },
    {
      title: isEn ? "Sustain your revenue with our Annual Contracts" : "Pérennisez vos revenus avec nos Contrats Annuels",
      desc: isEn ? <>The regularity of maintenance is the key to your <strong>energy profitability</strong>. We propose the implementation of <strong>preventive maintenance contracts</strong> with 1 to 2 scheduled annual visits.</> : <>La régularité de l&apos;entretien est la clé de votre <strong>rentabilité énergétique</strong>. Nous proposons la mise en place de <strong>contrats de maintenance préventive</strong> avec 1 à 2 passages annuels programmés.</>,
    },
  ];

  const statsBar = [
    { value: "4–30 %",   label: isEn ? "Output loss without maintenance" : "Perte de rendement sans entretien" },
    { value: "500 m²/h", label: isEn ? "Robot Rony throughput" : "Cadence du Robot Rony" },
    { value: "2×/an",    label: isEn ? "Recommended annual visits" : "Passages annuels recommandés" },
    { value: "÷ 10",     label: isEn ? "Water vs conventional method" : "Eau consommée vs méthode classique" },
  ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      {/* BANNIÈRE */}
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-[url('/images/solairebanner.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 font-medium text-base mb-6">
              {isEn ? "Solar Energy · Performance · Longevity" : "Énergie Solaire · Performance · Longévité"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Photovoltaic Array Cleaning:" : "Nettoyage de Parcs Photovoltaïques :"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-brand-orange-500">
                {isEn ? "Secure Your Profitability" : "Sécurisez votre Rentabilité"}
              </span>
            </h1>
            <p className="text-xl text-amber-300 font-semibold mb-4 italic">
              {isEn ? "Maximise the yield of your solar array whilst avoiding the risks of inadequate maintenance." : "Maximisez le rendement de votre parc solaire tout en évitant les risques d'un manque d'entretien."}
            </p>
          </div>
        </div>
      </section>

      <ExpertQuoteSide
        quote={isEn ? "In coastal or agricultural areas, soiling can cut your output by 20 to 30%. Sea salt deposits and sand-laden rains, as well as intense dust clouds raised during sowing and harvesting periods, create a particularly persistent veil. In the face of these constraints, a minimum of two annual visits proves advisable to preserve your profitability and avoid any irreversible damage to your photovoltaic cells." : "En zone littorale ou agricole, l'encrassement peut amputer votre production de 20 à 30 %. Les dépôts de sel marin et les pluies chargées de sable, tout comme les intenses nuages de poussière soulevés lors des périodes de semailles et de récoltes, créent un voile particulièrement tenace. Face à ces contraintes, deux passages annuels minimum s'avèrent souhaitables pour préserver votre rentabilité et éviter tout dommage irréversible sur vos cellules photovoltaïques."}
        author={isEn ? "— Ellipsys Conseil & Formation Expert" : "— Expert Ellipsys Conseil & Formation"}
      />

      {/* SECTION 1 : ESTIMER VOTRE PERTE DE RENDEMENT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Image technicien solaire */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 text-white text-sm font-bold backdrop-blur-sm">
                  ☀️ {isEn ? "Photovoltaic array inspection and maintenance" : "Inspection et maintenance de parc photovoltaïque"}
                </span>
              </div>
            </div>
            {/* Texte + Avis Expert */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">{isEn ? "Estimating your yield loss" : "Estimer votre perte de rendement"}</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {isEn
                  ? <>A soiled solar array (<strong>dust, pollen, sand, droppings</strong>) suffers significant production losses. Our intervention is an immediately profitable investment. To clean your installations whilst controlling the risk of <strong>micro-scratches</strong>, we deploy ground-based tracked robots such as the <strong>Robot Rony</strong>. Weighing only 7 kg, this robot is capable of cleaning on average <strong>500 m² per hour</strong> whilst adapting to slopes of up to 35%. The combination of <strong>soft rotary brushes</strong> and a rinse with <strong>pure water</strong> guarantees the optimal restoration of your panels&apos; rated efficiency.</>
                  : <>Un parc solaire encrassé (<strong>poussières, pollens, sable, fientes</strong>) subit d&apos;importantes pertes de production. Notre intervention est un investissement immédiatement rentable. Pour nettoyer vos installations en maîtrisant le risque de <strong>micro-rayures</strong>, nous déployons des robots terrestres sur chenilles comme le <strong>Robot Rony</strong>. Pesant seulement 7 kg, ce robot est capable de nettoyer en moyenne <strong>500 m² par heure</strong> en s&apos;adaptant à des pentes allant jusqu&apos;à 35 %. L&apos;association de <strong>brosses rotatives souples</strong> et d&apos;un rinçage à l&apos;<strong>eau pure</strong> garantit la restitution optimale de l&apos;efficacité nominale de vos panneaux.</>}
              </p>
              <div className="bg-[#0e2f52]/5 border border-[#0e2f52]/20 rounded-2xl p-5 flex items-start gap-4">
                <span className="text-brand-orange-500 text-4xl font-bold leading-none -mt-1 select-none shrink-0">&ldquo;</span>
                <div>
                  <p className="text-xs font-black text-brand-orange-500 uppercase tracking-widest mb-2">{isEn ? "Expert Opinion" : "Avis Expert"}</p>
                  <p className="text-slate-700 text-sm leading-relaxed italic">{isEn ? "In coastal or agricultural areas, soiling can cut your output by 20 to 30%. Sea salt deposits and dust clouds during sowing create a particularly persistent veil. A minimum of two annual visits proves advisable to preserve your profitability." : "En zone littorale ou agricole, l'encrassement peut amputer votre production de 20 à 30 %. Les dépôts de sel marin et les nuages de poussière lors des semailles créent un voile particulièrement tenace. Deux passages annuels minimum s'avèrent souhaitables pour préserver votre rentabilité."}</p>
                </div>
              </div>
            </div>
          </div>

          {/* TABLEAU AGENTS + GRAPHIQUE CÔTE À CÔTE */}
          <div className="grid lg:grid-cols-2 gap-8 mb-10">

            {/* Colonne gauche : Tableau agents */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <div className="grid grid-cols-4 bg-[#0e2f52] text-white text-xs font-bold px-4 py-4">
                <div>{isEn ? "Obscuring Agent" : "Agent Obscurcissant"}</div>
                <div>{isEn ? "Nature of Degradation" : "Nature de la Dégradation"}</div>
                <div>{isEn ? "Estimated Loss" : "Perte Estimée"}</div>
                <div>{isEn ? "Material Risk" : "Risque Matériel"}</div>
              </div>
              {agents.map((a, i) => (
                <div key={i} className={`grid grid-cols-4 px-4 py-4 items-center gap-2 text-xs border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                  <div className="font-semibold text-slate-900">{a.name}</div>
                  <div className="text-slate-600">{a.nature}</div>
                  <div className="font-bold text-slate-800">{a.perte}</div>
                  <div><span className={`inline-block px-2 py-1 rounded-lg text-xs font-bold ${a.risqueColor}`}>{a.risque}</span></div>
                </div>
              ))}
            </div>

            {/* Colonne droite : Graphique barres */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col">
              <h3 className="text-center font-bold text-slate-900 mb-6 text-sm leading-tight">
                {isEn ? "Photovoltaic Yield Losses\nby Soiling Type" : "Pertes de Rendement Photovoltaïque\nselon l'Encrassement"}
              </h3>

              {/* Zone graphique */}
              <div className="flex items-end justify-around gap-3 border-b-2 border-slate-200 mb-4 px-2" style={{ height: '200px' }}>
                {chartBarLabels.map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center justify-end gap-1 h-full">
                    <span className="text-xs font-black" style={{ color: bar.color }}>{bar.display}</span>
                    <div
                      className="w-full rounded-t-md"
                      style={{ height: `${bar.pct * 2}px`, backgroundColor: bar.color, minHeight: bar.pct < 10 ? '14px' : undefined }}
                    />
                  </div>
                ))}
              </div>

              {/* Labels barres */}
              <div className="flex justify-around gap-2 mb-4">
                {chartBarLabels.map((bar, i) => (
                  <p key={i} className="flex-1 text-center text-xs text-slate-600 leading-tight">{bar.label}</p>
                ))}
              </div>

              <div className="mt-auto space-y-2">
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  {isEn
                    ? <>Standard soiling causes losses of <strong>4 to 7%</strong> globally. Meteorological events (such as Saharan dust) can cut output by nearly <strong>30%</strong>, whilst localised occlusion (droppings) blocks <strong>100% of the affected cell</strong>.</>
                    : <>L&apos;encrassement standard engendre des pertes de <strong>4 à 7 %</strong> au niveau mondial. Les phénomènes météorologiques (comme les poussières sahariennes) peuvent amputer la production de près de <strong>30 %</strong>, tandis qu&apos;une occultation localisée (fiente) bloque <strong>100 % de la cellule</strong> affectée.</>}
                </p>
                <p className="text-xs text-slate-400 italic"><strong>{isEn ? "Legal notices:" : "Mentions légales :"}</strong> {isEn ? "The losses mentioned are observed averages and do not constitute a contractual guarantee." : "Les pertes mentionnées sont des moyennes constatées et ne constituent pas une garantie contractuelle."}</p>
                <p className="text-xs text-slate-400 font-medium text-center">{isEn ? "Data sources: IEA PVPS & Meteorological Modelling" : "Sources des données : AIE PVPS & Modélisations Météorologiques"}</p>
              </div>
            </div>
          </div>

          {/* Note globale */}
          <div className="max-w-7xl mx-auto p-5 bg-slate-100 rounded-xl border border-slate-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-500 leading-relaxed italic">
              {isEn
                ? <>The nature of the soiling determines not only the extent of the yield loss, but also the level of risk to the physical integrity of the solar panel. Localised occlusions (droppings, leaves) are the most destructive in the long term. <strong>Data sources: IEA PVPS, INRS / CARSAT</strong></>
                : <>La nature de l&apos;encrassement détermine non seulement l&apos;ampleur de la perte de rendement, mais également le niveau de risque pour l&apos;intégrité physique du panneau solaire. Les occultations localisées (fientes, feuilles) sont les plus destructrices à long terme. <strong>Sources de données : AIE PVPS, INRS / CARSAT</strong></>}
            </p>
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

      {/* SECTION 2+3 : TECHNOLOGIE + COMPARATIF */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl space-y-12">

          {/* En-tête */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{isEn ? "Choice of intervention technology" : "Choix de la technologie d'intervention"}</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
              {isEn ? "Decision flowchart applied to determine the safest and most effective tool based on site topology." : "Logigramme appliqué pour déterminer l'outil le plus sûr et performant selon la topologie du site."}
            </p>
          </div>

          {/* Arbre décisionnel + cartes solutions */}
          <div className="grid lg:grid-cols-4 gap-5 items-start">

            {/* Guide de sélection simplifié */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <h3 className="font-black text-[#0e2f52] text-[10px] uppercase tracking-widest mb-5">{isEn ? "Which tool for your site?" : "Quel outil pour votre site ?"}</h3>
              <div className="space-y-3">
                <div className="rounded-xl bg-[#0e2f52] p-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1.5">{isEn ? "Condition" : "Condition"}</p>
                  <p className="text-xs text-white font-semibold mb-3">{isEn ? <>Fragile, <strong className="text-brand-orange-300">ABF</strong>-listed support or slope <strong className="text-brand-orange-300">&gt; 35%</strong></> : <>Support fragile, classé <strong className="text-brand-orange-300">ABF</strong> ou pente <strong className="text-brand-orange-300">&gt; 35 %</strong></>}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">✈</span>
                    <span className="text-xs font-black text-brand-orange-400">→ Drone Chronos</span>
                  </div>
                </div>
                <div className="rounded-xl bg-emerald-600 p-4">
                  <p className="text-[10px] font-black text-emerald-200 uppercase tracking-wider mb-1.5">{isEn ? "Condition" : "Condition"}</p>
                  <p className="text-xs text-white font-semibold mb-3">{isEn ? <>Vast <strong className="text-emerald-200">clear surface</strong>, slope <strong className="text-emerald-200">≤ 35%</strong></> : <>Surface <strong className="text-emerald-200">vaste et dégagée</strong>, pente <strong className="text-emerald-200">≤ 35 %</strong></>}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🤖</span>
                    <span className="text-xs font-black text-white">→ Robot Rony</span>
                  </div>
                </div>
                <div className="rounded-xl bg-slate-100 border border-slate-200 p-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1.5">{isEn ? "Condition" : "Condition"}</p>
                  <p className="text-xs text-slate-700 font-semibold mb-3">{isEn ? <><strong>Mixed</strong> configuration or <strong>complex</strong> access</> : <>Configuration <strong>mixte</strong> ou accès <strong>complexes</strong></>}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🔧</span>
                    <span className="text-xs font-black text-slate-700">{isEn ? "→ Hybrid Solution" : "→ Solution Hybride"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 cartes solutions */}
            <div className="lg:col-span-3 grid sm:grid-cols-3 gap-4 h-full">
              {/* Drone Chronos */}
              <div className="bg-white rounded-2xl border-2 border-slate-100 shadow-sm p-6 flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="text-4xl mb-3">✈</div>
                <h4 className="font-black text-[#0e2f52] text-base mb-1">Drone Chronos</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{isEn ? "High Altitude · No Contact" : "Haute Altitude · Sans Contact"}</p>
                <ul className="space-y-2 flex-grow">
                  <li className="text-xs text-slate-600 flex items-start gap-2"><span className="text-emerald-500 font-bold shrink-0">✓</span><span><strong>{isEn ? "Extreme slopes" : "Pentes extrêmes"}</strong> {isEn ? "without limit" : "sans limite"}</span></li>
                  <li className="text-xs text-slate-600 flex items-start gap-2"><span className="text-emerald-500 font-bold shrink-0">✓</span><span>{isEn ? "Fragile &" : "Supports fragiles &"} <strong>{isEn ? "ABF-listed" : "classés ABF"}</strong></span></li>
                  <li className="text-xs text-slate-600 flex items-start gap-2"><span className="text-emerald-500 font-bold shrink-0">✓</span><span><strong>{isEn ? "No mechanical" : "Aucun contact"}</strong> {isEn ? "contact" : "mécanique"}</span></li>
                  <li className="text-xs text-slate-600 flex items-start gap-2"><span className="text-emerald-500 font-bold shrink-0">✓</span><span>{isEn ? "Pressure" : "Pression"} <strong>110 bars</strong></span></li>
                </ul>
              </div>

              {/* Robot Rony — Solution Phare */}
              <div className="bg-gradient-to-b from-[#0e2f52] to-[#0a2240] rounded-2xl border-2 border-[#0e2f52] shadow-xl p-6 flex flex-col ring-2 ring-brand-orange-400/50 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-brand-orange-500 text-white text-[9px] font-black rounded-full uppercase tracking-widest shadow-lg">⭐ {isEn ? "Flagship Solution" : "Solution Phare"}</span>
                </div>
                <div className="text-4xl mb-3 mt-2">🤖</div>
                <h4 className="font-black text-white text-base mb-1">Robot Rony</h4>
                <p className="text-[10px] font-bold text-brand-orange-400 uppercase tracking-widest mb-3">500 m²/h · {isEn ? "Osmosed Water" : "Eau Osmosée"}</p>
                <ul className="space-y-2 flex-grow">
                  <li className="text-xs text-slate-300 flex items-start gap-2"><span className="text-brand-orange-400 font-bold shrink-0">✓</span><span><strong className="text-white">500 m²/h</strong> {isEn ? "throughput" : "de cadence"}</span></li>
                  <li className="text-xs text-slate-300 flex items-start gap-2"><span className="text-brand-orange-400 font-bold shrink-0">✓</span><span>{isEn ? "Slopes up to" : "Pentes jusqu'à"} <strong className="text-white">35 %</strong></span></li>
                  <li className="text-xs text-slate-300 flex items-start gap-2"><span className="text-brand-orange-400 font-bold shrink-0">✓</span><span><strong className="text-white">{isEn ? "Osmosed water" : "Eau osmosée"}</strong>{isEn ? ", soft brushes" : ", brosses douces"}</span></li>
                  <li className="text-xs text-slate-300 flex items-start gap-2"><span className="text-brand-orange-400 font-bold shrink-0">✓</span><span>{isEn ? "Only" : "Seulement"} <strong className="text-white">7 kg</strong> {isEn ? "on your modules" : "sur vos modules"}</span></li>
                </ul>
              </div>

              {/* Solution Hybride */}
              <div className="bg-white rounded-2xl border-2 border-slate-100 shadow-sm p-6 flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="text-4xl mb-3">🔧</div>
                <h4 className="font-black text-[#0e2f52] text-base mb-1">{isEn ? "Hybrid Solution" : "Solution Hybride"}</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{isEn ? "Robot + Drone · Bespoke" : "Robot + Drone · Sur Mesure"}</p>
                <ul className="space-y-2 flex-grow">
                  <li className="text-xs text-slate-600 flex items-start gap-2"><span className="text-emerald-500 font-bold shrink-0">✓</span><span><strong>{isEn ? "Canopies" : "Ombrières"}</strong> {isEn ? "and solar carports" : "et parking solaire"}</span></li>
                  <li className="text-xs text-slate-600 flex items-start gap-2"><span className="text-emerald-500 font-bold shrink-0">✓</span><span><strong>{isEn ? "Fragmented" : "Fragmentées"}</strong> {isEn ? "configurations" : "configurations"}</span></li>
                  <li className="text-xs text-slate-600 flex items-start gap-2"><span className="text-emerald-500 font-bold shrink-0">✓</span><span><strong>{isEn ? "Multi-constraint" : "Multi-contraintes"}</strong> {isEn ? "access" : "accès"}</span></li>
                  <li className="text-xs text-slate-600 flex items-start gap-2"><span className="text-emerald-500 font-bold shrink-0">✓</span><span><strong>{isEn ? "Bespoke" : "Sur-mesure"}</strong> {isEn ? "protocol" : "protocole"}</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comparatif */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
              {isEn ? "Efficiency Comparison: Manual Cleaning vs Robotic Solutions" : "Comparatif d'efficacité : Nettoyage Manuel vs Solutions Robotisées"}
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto text-sm">
              {isEn ? "On every performance criterion, robotics objectively surpasses traditional methods." : "Sur chaque critère de performance, la robotique dépasse objectivement les méthodes traditionnelles."}
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <div className="grid grid-cols-3 text-sm font-bold px-6 py-4 bg-[#0e2f52] text-white">
                <div>{isEn ? "Performance Criterion" : "Critère de Performance"}</div>
                <div className="text-center text-slate-300">{isEn ? "Conventional Methods" : "Méthodes Classiques"} <span className="text-xs font-normal">{isEn ? "(Cherry Pickers · Rope Access · Scaffolding)" : "(Nacelles · Cordistes · Échafaudages)"}</span></div>
                <div className="text-center text-amber-300">✔ {isEn ? "Autonomous Robot Cleaning" : "Nettoyage par Robot Autonome"}</div>
              </div>
              {comparatif.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 px-6 py-5 items-center gap-4 text-sm border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                  <div className="font-semibold text-slate-800">{row.critere}</div>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-1.5 text-red-600 font-medium">
                      <span className="w-4 h-4 rounded-full bg-red-100 inline-flex items-center justify-center text-red-500 text-[10px] font-black shrink-0">✗</span>
                      {row.manuel}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />{row.robot}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4 : POURQUOI DRONE ET ROBOT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {isEn ? "Why opt for solar panel cleaning by drone and robot?" : "Pourquoi opter pour le nettoyage de panneaux solaires par drone et robot ?"}
          </h2>
          <AccordionSection items={avantages} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-amber-950 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Sun className="w-10 h-10 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">{isEn ? "Optimise your solar return on investment" : "Optimisez votre retour sur investissement solaire"}</h2>
          <p className="text-slate-300 mb-10 text-lg">{isEn ? "Untreated soiling costs you in lost revenue every day." : "Un encrassement non traité vous coûte en revenus perdus chaque jour."}</p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            {isEn ? "Request a yield audit" : "Demander un audit de rendement"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
