import type { Metadata } from "next";
import Link from "next/link";
import { Sun, Zap, CheckCircle2, AlertCircle, ChevronRight } from "lucide-react";
import ExpertQuoteSide from "@/components/ExpertQuoteSide";
import AccordionSection from "@/components/AccordionSection";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Maintenance Parcs Solaires : Nettoyage Robot & Drone pour Acteurs du Solaire",
  description: "Solution hybride robot + drone pour la maintenance de parcs photovoltaïques. Jusqu'à 1 200 m²/h (≈ 2 MWc/jour), pentes 25°, sans détergent. Gain de rendement mesurable.",
};

const PX = "?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const IMG = {
  intro:  `https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg${PX}`,
  field:  `https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg${PX}`,
};

export default async function SolaireSecteurPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const stats = [
    { value: "1 200 m²/h", label: isEn ? "Our robot's throughput" : "Cadence de notre robot" },
    { value: "4–30 %",   label: isEn ? "Output loss without maintenance" : "Perte de rendement sans entretien" },
    { value: "25°",      label: isEn ? "Maximum treatable slope" : "Pente maximale traitable" },
    { value: "÷ 10",     label: isEn ? "Water vs manual method" : "Eau consommée vs méthode manuelle" },
  ];

  const features = [
    {
      icon: Sun, color: "text-amber-500", bg: "bg-amber-50",
      title: "1 200 m²/h",
      desc: isEn ? "Our robot's cleaning throughput on flat terrain — around 2 MWc per day. It cleans up to ten times faster than a manual team." : "Cadence de nettoyage de notre robot sur terrain plat — environ 2 MWc par jour. Il nettoie jusqu'à dix fois plus vite qu'une équipe manuelle.",
    },
    {
      icon: Zap, color: "text-brand-orange-500", bg: "bg-brand-orange-50",
      title: isEn ? "Slopes up to 25°" : "Pentes jusqu'à 25°",
      desc: isEn ? "Automatic adaptation to terrain configurations. Our robot adapts to the inclines of the vast majority of existing solar arrays." : "Adaptation automatique aux configurations de terrain. Notre robot s'adapte aux inclinaisons de la quasi-totalité des parcs solaires.",
    },
    {
      icon: CheckCircle2, color: "text-blue-500", bg: "bg-blue-50",
      title: isEn ? "Water sobriety" : "Sobriété hydrique",
      desc: isEn ? "0.5 to 2 L/m² only, versus 15 to 25 L manually. A controlled rinse, no detergent, for optimal yield restoration." : "0,5 à 2 L/m2 seulement, contre 15 à 25 L en manuel. Un rinçage maîtrisé, sans détergent, pour une restitution optimale du rendement.",
    },
    {
      icon: AlertCircle, color: "text-emerald-600", bg: "bg-emerald-50",
      title: isEn ? "Annual contracts" : "Contrats annuels",
      desc: isEn ? "1 to 2 scheduled visits for optimised year-round yield. Our contracts guarantee optimal long-term scheduling." : "1 à 2 passages programmés pour un rendement optimisé toute l'année. Nos contrats garantissent une programmation optimale sur le long terme.",
    },
  ];

  const avantages = [
    {
      title: isEn ? "1,200 m²/h — 10× faster than manual cleaning" : "1 200 m²/h — cadence 10× supérieure au nettoyage manuel",
      desc: isEn ? "Our remote-controlled robot (1.2 m soft rotary brushes, dry or wet cleaning) covers up to 1,200 m² per hour — around 2 MWc per day — on slopes up to 25°. For fragmented, inaccessible surfaces or fragile roofing, our Drone Chronos takes over with homogeneous aerial spraying." : "Notre robot télécommandé (brosses rotatives souples de 1,20 m, nettoyage à sec ou humide) couvre jusqu'à 1 200 m² par heure — environ 2 MWc par jour — sur des pentes allant jusqu'à 25°. Pour les surfaces fragmentées, inaccessibles ou les toitures fragiles, notre drone Chronos prend le relais avec une pulvérisation aérienne homogène.",
    },
    {
      title: isEn ? "Slopes up to 25° — automatic terrain adaptation" : "Pentes jusqu'à 25° — adaptation automatique au terrain",
      desc: isEn ? "Automatic adaptation to terrain configurations. Our robot adapts to inclines of up to 25° and crosses gaps of up to 70 cm between tables, covering virtually all existing solar arrays." : "Adaptation automatique aux configurations de terrain. Notre robot s'adapte aux inclinaisons jusqu'à 25° et franchit des écarts jusqu'à 70 cm entre les tables, couvrant la quasi-totalité des parcs solaires existants.",
    },
    {
      title: isEn ? "Water sobriety — 10× savings vs conventional cleaning" : "Sobriété hydrique × 10 vs nettoyage classique",
      desc: isEn ? "0.5 to 2 L/m² only, versus 15 to 25 L manually. A controlled rinse without detergent and optimal restoration of your panels' rated efficiency — a strong CSR argument for your sustainability reports." : "0,5 à 2 L/m2 seulement, contre 15 à 25 L en manuel. Un rinçage maîtrisé, sans détergent, et une restitution optimale de l'efficacité nominale de vos panneaux — argument RSE fort pour vos rapports de durabilité.",
    },
    {
      title: isEn ? "Annual contracts — yield optimised over the long term" : "Contrats annuels — rendement optimisé sur le long terme",
      desc: isEn ? "1 to 2 scheduled visits for optimised year-round yield. According to IEA PVPS, natural soiling reduces output by 4 to 7% per year. During Saharan sand episodes, the loss climbs to 30%. Our intervention pays for itself within weeks." : "1 à 2 passages programmés pour un rendement optimisé toute l'année. Selon l'AIE PVPS, un encrassement naturel réduit la production de 4 à 7% par an. Lors des épisodes de sables sahariens, la perte grimpe jusqu'à 30%. Notre intervention se rentabilise en quelques semaines.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      {/* BANNIÈRE */}
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-[url('/images/avant-apres-panneaux.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 font-medium text-base mb-6">
              {isEn ? "Solar · Yield · Robot + Drone" : "Solaire · Rendement · Robot + Drone"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Solar Energy" : "Acteurs de l'"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-brand-orange-400">
                {isEn ? "Operators" : "Énergie Solaire"}
              </span>
            </h1>
            <p className="text-xl text-amber-300 font-semibold mb-4 italic">
              {isEn ? "Maximise the yield of your photovoltaic arrays with our hybrid Robot + Drone solution." : "Maximisez le rendement de vos parcs photovoltaïques avec notre solution hybride Robot + Drone."}
            </p>
          </div>
        </div>
      </section>

      <ExpertQuoteSide quote={isEn ? "Untreated soiling is a silent revenue leak. Every lost week is production that will never come back. Our mission: secure your solar return on investment over the long term." : "Un encrassement non traité, c'est une fuite de revenus silencieuse. Chaque semaine perdue, c'est de la production qui ne reviendra jamais. Notre mission : sécuriser votre retour sur investissement solaire sur le long terme."} />

      {/* SECTION 1 : INTRO IMAGE SPLIT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[440px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.intro}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-bold backdrop-blur-sm">
                  Robot Ellipsys · Drone Chronos · {isEn ? "No detergent" : "Sans détergent"}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white text-xs font-semibold">{isEn ? "Photovoltaic array — hybrid Robot + Drone solution to maximise yield" : "Parc photovoltaïque — solution hybride Robot + Drone pour maximiser le rendement"}</p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-black uppercase tracking-widest mb-5">
                <Zap className="w-3.5 h-3.5" /> {isEn ? "The mathematical equation of soiling" : "L'équation mathématique de l'encrassement"}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {isEn ? "The mathematical equation of soiling" : "L'équation mathématique de l'encrassement"}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isEn
                  ? <>According to IEA PVPS, natural <strong>soiling</strong> reduces output by <strong>4 to 7%</strong> per year. During Saharan sand episodes, the loss climbs to <strong>30%</strong>. On a 1 MWp array, this represents thousands of euros in lost revenue every month. Our intervention pays for itself within weeks.</>
                  : <>Selon l&apos;AIE PVPS, un <strong>encrassement</strong> naturel réduit la production de <strong>4 à 7%</strong> par an. Lors des épisodes de sables sahariens, la perte grimpe jusqu&apos;à <strong>30%</strong>. Sur un parc de 1 MWc, cela représente des milliers d&apos;euros de revenus perdus chaque mois. Notre intervention se rentabilise en quelques semaines.</>}
              </p>
              <div className="bg-[#0e2f52]/5 border border-[#0e2f52]/20 rounded-2xl p-5 flex items-start gap-4">
                <span className="text-amber-500 text-4xl font-bold leading-none -mt-1 select-none shrink-0">&ldquo;</span>
                <div>
                  <p className="text-xs font-black text-amber-500 uppercase tracking-widest mb-2">{isEn ? "Expert Opinion" : "Avis Expert"}</p>
                  <p className="text-slate-700 text-sm leading-relaxed italic">{isEn ? "Untreated soiling is a silent revenue leak. Every lost week is production that will never come back. Our mission: secure your solar return on investment over the long term." : "Un encrassement non traité, c'est une fuite de revenus silencieuse. Chaque semaine perdue, c'est de la production qui ne reviendra jamais. Notre mission : sécuriser votre retour sur investissement solaire sur le long terme."}</p>
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
                <p className="text-3xl font-black text-amber-400 mb-1">{s.value}</p>
                <p className="text-slate-300 text-xs leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 : SOLUTION HYBRIDE */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{isEn ? "Your operator advantages:" : "Vos avantages opérateurs :"}</h2>
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

          {/* Robot + Drone detail avec image */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <Sun className="w-6 h-6 text-amber-500" /> {isEn ? "Hybrid solution: ground robot + Drone Chronos" : "Solution hybride robot terrestre + drone Chronos"}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {isEn
                  ? <>Our <strong>remote-controlled robot</strong> (1.2 m soft rotary brushes, dry or wet cleaning) covers up to <strong>1,200 m² per hour</strong> — around 2 MWc per day — on slopes up to 25°. For fragmented, inaccessible surfaces or fragile roofing, our <strong>Drone Chronos</strong> takes over with homogeneous aerial spraying.</>
                  : <>Notre <strong>robot télécommandé</strong> (brosses rotatives souples de 1,20 m, nettoyage à sec ou humide) couvre jusqu&apos;à <strong>1 200 m² par heure</strong> — environ 2 MWc par jour — sur des pentes allant jusqu&apos;à 25°. Pour les surfaces fragmentées, inaccessibles ou les toitures fragiles, notre <strong>drone Chronos</strong> prend le relais avec une pulvérisation aérienne homogène.</>}
              </p>
              <div className="p-4 bg-slate-100 rounded-2xl flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  <strong>{isEn ? "Legal notices:" : "Mentions légales :"}</strong> {isEn ? "The yield gains mentioned are observed averages. Actual results depend on meteorological conditions and the electricity purchase tariff. They do not constitute an absolute contractual guarantee." : "Les gains de rendement mentionnés sont des moyennes constatées. Les résultats réels dépendent des conditions météorologiques et du tarif d'achat de l'électricité. Ils ne constituent pas une garantie contractuelle absolue."}
                </p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-64">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.field}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-white text-xs font-semibold">{isEn ? "Solar array — preventive maintenance to secure return on investment" : "Parc solaire — maintenance préventive pour sécuriser le retour sur investissement"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDÉON */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            {isEn ? "Why Ellipsys for your solar array?" : "Pourquoi Ellipsys pour votre parc solaire ?"}
          </h2>
          <AccordionSection items={avantages} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-amber-900 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Sun className="w-10 h-10 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">{isEn ? "Quote the maintenance of your array" : "Chiffrez l'entretien de votre parc"}</h2>
          <p className="text-slate-300 mb-10 text-lg">
            {isEn ? "Tell us the size of your array, its topology and the desired frequency. We will propose a bespoke maintenance contract." : "Indiquez-nous la superficie de votre parc, sa topologie et la fréquence souhaitée. Nous vous proposons un contrat de maintenance sur-mesure."}
          </p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            {isEn ? "Get an array maintenance quote" : "Chiffrer l'entretien du parc"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
