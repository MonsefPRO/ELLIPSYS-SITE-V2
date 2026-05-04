import type { Metadata } from "next";
import Link from "next/link";
import { Waves, Shield, CheckCircle2, ChevronRight } from "lucide-react";
import ExpertQuoteSide from "@/components/ExpertQuoteSide";
import AccordionSection from "@/components/AccordionSection";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Nettoyage et Dessalage d'Infrastructures Maritimes et Portuaires | Ellipsys",
  description: "Protocole de dessalage par drone pour infrastructures navales et portuaires. Evacuation des chlorures, protection contre la corrosion marine.",
};

const IMG = {
  intro:  `/images/maritime1.png`,
  harbor: `/images/facademer.png`,
};

export default async function MaritimePage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const stats = [
    { value: "Cl⁻",      label: isEn ? "Chlorides eliminated after desalination" : "Chlorures éliminés après dessalage" },
    { value: "10×",       label: isEn ? "Repair cost vs preventive maintenance" : "Coût réparation vs entretien préventif" },
    { value: "0.5 L/m²", label: isEn ? "Fresh osmosed water consumed" : "Eau douce osmosée consommée" },
    { value: "100 %",     label: isEn ? "Types of infrastructure covered" : "Types d'infrastructures couvertes" },
  ];

  const features = [
    {
      icon: Waves, color: "text-blue-500", bg: "bg-blue-50",
      title: isEn ? "Harbour masters' offices and port hangars" : "Capitaineries et hangars portuaires",
      desc: isEn ? "Cleaning of façades and roofs exposed to sea spray. Our desalination protocols eliminate accumulated chlorides before they attack the reinforcement." : "Nettoyage de façades et toitures exposées aux embruns. Nos protocoles de dessalage éliminent les chlorures accumulés avant qu'ils n'attaquent les armatures.",
    },
    {
      icon: Shield, color: "text-brand-orange-500", bg: "bg-brand-orange-50",
      title: isEn ? "Pontoons and metal structures" : "Pontons et structures métalliques",
      desc: isEn ? "Regular desalination to prevent accelerated corrosion. A regular preventive intervention costs ten times less than a structural restoration." : "Dessalage régulier pour prévenir la corrosion accélérée. Une intervention préventive régulière coûte dix fois moins qu'une restauration structurelle.",
    },
    {
      icon: CheckCircle2, color: "text-amber-500", bg: "bg-amber-50",
      title: isEn ? "Solar panels in coastal zones" : "Panneaux solaires en zone côtière",
      desc: isEn ? "Cleaning frequency adapted to local salinity. In coastal areas, saline contamination of panels is particularly rapid." : "Fréquence de nettoyage adaptée à la salinité locale. En zone littorale, la contamination saline des panneaux est particulièrement rapide.",
    },
    {
      icon: Waves, color: "text-cyan-600", bg: "bg-cyan-50",
      title: isEn ? "Leisure boating facilities" : "Bâtiments de plaisance",
      desc: isEn ? "Seasonal maintenance of nautical infrastructure. We intervene at the start and end of season to keep your infrastructure in optimal condition." : "Entretien saisonnier des infrastructures nautiques. Nous intervenons en début et fin de saison pour maintenir vos infrastructures en état optimal.",
    },
  ];

  const avantages = [
    {
      title: isEn ? "Harbour masters' offices and port hangars — desalination of façades and roofs" : "Capitaineries et hangars portuaires — dessalage façades et toitures",
      desc: isEn ? "Cleaning of façades and roofs exposed to sea spray. Our desalination protocols combine a low-pressure rinse with fresh osmosed water to evacuate chloride deposits, followed by a protective treatment adapted to the material type." : "Nettoyage de façades et toitures exposées aux embruns. Nos protocoles de dessalage combinent un rinçage à l'eau douce osmosée sous faible pression pour évacuer les dépôts de chlorures, suivi d'un traitement protecteur adapté au type de matériau.",
    },
    {
      title: isEn ? "Pontoons and metal structures — prevention of accelerated corrosion" : "Pontons et structures métalliques — prévention corrosion accélérée",
      desc: isEn ? "Sea salt, spray and chronic humidity constitute a permanent threat to metal, concrete and composite structures. Coastal corrosion acts invisibly and at an accelerated rate. Regular desalination prevents accelerated corrosion." : "Le sel marin, les embruns et l'humidité chronique constituent une menace permanente pour les structures métalliques, béton et composites. La corrosion côtière agit de manière invisible et accélérée. Dessalage régulier pour prévenir la corrosion accélérée.",
    },
    {
      title: isEn ? "Solar panels in coastal zones — frequency adapted to salinity" : "Panneaux solaires en zone côtière — fréquence adaptée à la salinité",
      desc: isEn ? "Cleaning frequency adapted to local salinity. In coastal areas, saline contamination of panels is particularly rapid — we define with you the optimal frequency based on your site's exposure and the measured salinity." : "Fréquence de nettoyage adaptée à la salinité locale. En zone littorale, la contamination saline des panneaux est particulièrement rapide — nous définissons avec vous la fréquence optimale selon l'exposition de votre site et la salinité mesurée.",
    },
    {
      title: isEn ? "Complementary thermographic inspection available" : "Inspection thermographique complémentaire disponible",
      desc: isEn ? "A thermographic inspection can complement the intervention to detect areas of residual moisture in your structures. This diagnosis anticipates corrosion points before they become structurally critical." : "Une inspection thermographique peut compléter l'intervention pour détecter les zones d'humidité résiduelle dans vos structures. Ce diagnostic permet d'anticiper les points de corrosion avant qu'ils ne deviennent structurellement critiques.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      {/* BANNIÈRE */}
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-cover bg-center" style={{ backgroundImage: `url('/images/yachtban.png')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 font-medium text-base mb-6">
              {isEn ? "Maritime · Coastal · Desalination" : "Maritime · Côtier · Dessalage"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Maritime &" : "Milieu Maritime &"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                {isEn ? "Leisure Boating" : "Plaisance"}
              </span>
            </h1>
            <p className="text-xl text-blue-300 font-semibold mb-4 italic">
              {isEn ? "Protect your infrastructure against the aggressiveness of the coastal environment." : "Protégez vos infrastructures contre l'agressivité de l'environnement côtier."}
            </p>
          </div>
        </div>
      </section>

      <ExpertQuoteSide quote={isEn ? "Sea salt does not wait. A regular preventive intervention costs ten times less than a structural restoration. We protect your infrastructure before corrosion becomes irreversible." : "Le sel marin n'attend pas. Une intervention préventive régulière coûte dix fois moins cher qu'une restauration structurelle. Nous protégeons vos infrastructures avant que la corrosion ne devienne irréversible."} />

      {/* SECTION 1 : INTRO IMAGE SPLIT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[440px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.intro}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-xs font-bold backdrop-blur-sm">
                  {isEn ? "Maritime environment · Desalination · Corrosion" : "Milieu maritime · Dessalage · Corrosion"}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white text-xs font-semibold">{isEn ? "Port infrastructure — desalination protocol to prevent accelerated marine corrosion" : "Infrastructure portuaire — protocole dessalage pour prévenir la corrosion marine accélérée"}</p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest mb-5">
                <Waves className="w-3.5 h-3.5" /> {isEn ? "The aggressiveness of the coastal environment" : "L'agressivité de l'environnement côtier"}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {isEn ? "The Aggressiveness of the Coastal Environment" : "L'agressivité de l'environnement côtier"}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isEn
                  ? <>Sea salt, <strong>sea spray</strong> and chronic humidity constitute a permanent threat to metal, concrete and composite structures. <strong>Electrochemical corrosion</strong> in coastal areas acts invisibly and at an accelerated rate. Our drone <strong>desalination</strong> protocols allow accumulated <strong>chlorides</strong> to be evacuated before they attack the load-bearing structures.</>
                  : <>Le sel marin, les <strong>embruns marins</strong> et l&apos;humidité chronique constituent une menace permanente pour les structures métalliques, béton et composites. La <strong>corrosion électrochimique</strong> côtière agit de manière invisible et accélérée. Nos protocoles de <strong>dessalage</strong> par drone permettent d&apos;évacuer les <strong>chlorures</strong> accumulés avant qu&apos;ils n&apos;attaquent les structures portantes.</>}
              </p>
              <div className="bg-[#0e2f52]/5 border border-[#0e2f52]/20 rounded-2xl p-5 flex items-start gap-4">
                <span className="text-blue-500 text-4xl font-bold leading-none -mt-1 select-none shrink-0">&ldquo;</span>
                <div>
                  <p className="text-xs font-black text-blue-500 uppercase tracking-widest mb-2">{isEn ? "Expert Opinion" : "Avis Expert"}</p>
                  <p className="text-slate-700 text-sm leading-relaxed italic">{isEn ? "Sea salt does not wait. A regular preventive intervention costs ten times less than a structural restoration. We protect your infrastructure before corrosion becomes irreversible." : "Le sel marin n'attend pas. Une intervention préventive régulière coûte dix fois moins cher qu'une restauration structurelle. Nous protégeons vos infrastructures avant que la corrosion ne devienne irréversible."}</p>
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

      {/* SECTION 2 : INFRASTRUCTURES COUVERTES */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{isEn ? "Infrastructure covered:" : "Infrastructures couvertes :"}</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">{isEn ? "From the pontoon to the harbour master's office, our protocols adapt to every type of coastal structure." : "Du ponton à la capitainerie, nos protocoles s'adaptent à chaque type de structure côtière."}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-3xl p-7 border border-slate-100 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${f.bg} rounded-2xl flex items-center justify-center mb-5`}>
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="font-black text-slate-900 text-base mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Protocole dessalage avec image */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-64">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.harbor}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-white text-xs font-semibold">{isEn ? "Preventive desalination maintenance" : "Maintenance préventive dessalage"}</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <Shield className="w-6 h-6 text-brand-orange-500" /> {isEn ? "Desalination and protection protocol" : "Protocole dessalage et protection"}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {isEn
                  ? <>Our intervention combines a <strong>controlled rinse</strong> with fresh osmosed water at <strong>low pressure</strong> to evacuate <strong>chloride</strong> deposits, followed by a protective treatment adapted to the material type (metal, reinforced concrete, composite). A thermographic inspection can complement the intervention to detect areas of residual moisture.</>
                  : <>Notre intervention combine un <strong>rinçage contrôlé</strong> à l&apos;eau douce osmosée sous <strong>faible pression</strong> pour évacuer les dépôts de <strong>chlorures</strong>, suivi d&apos;un traitement protecteur adapté au type de matériau (métal, béton armé, composite). Une inspection thermographique peut compléter l&apos;intervention pour détecter les zones d&apos;humidité résiduelle.</>}
              </p>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                <p className="text-blue-800 text-sm font-semibold">{isEn ? <>In coastal environments, <strong>intervention frequency</strong> is key. Contact us to establish a maintenance plan adapted to the exposure of your infrastructure.</> : <>En milieu côtier, la <strong>fréquence d&apos;intervention</strong> est clé. Contactez-nous pour établir un plan de maintenance adapté à l&apos;exposition de vos infrastructures.</>}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDÉON */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            {isEn ? "Why Ellipsys for your coastal infrastructure?" : "Pourquoi Ellipsys pour vos infrastructures côtières ?"}
          </h2>
          <AccordionSection items={avantages} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-blue-900 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Waves className="w-10 h-10 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">{isEn ? "Schedule a desalination" : "Planifier un dessalage"}</h2>
          <p className="text-slate-300 mb-10 text-lg">
            {isEn ? "In coastal environments, intervention frequency is key. Contact us to establish a maintenance plan adapted to the exposure of your infrastructure." : "En milieu côtier, la fréquence d'intervention est clé. Contactez-nous pour établir un plan de maintenance adapté à l'exposition de vos infrastructures."}
          </p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            {isEn ? "Schedule a desalination" : "Planifier un dessalage"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
