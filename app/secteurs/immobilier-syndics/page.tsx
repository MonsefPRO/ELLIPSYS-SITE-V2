import type { Metadata } from "next";
import Link from "next/link";
import { Building2, FileText, CheckCircle2, Camera, ChevronRight } from "lucide-react";
import ExpertQuoteSide from "@/components/ExpertQuoteSide";
import AccordionSection from "@/components/AccordionSection";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Nettoyage Drone pour Immobilier & Syndics de Copropriete | Ellipsys",
  description: "Accompagnement des gestionnaires immobiliers. Rapports techniques avec photos pour AG, devis détaillés, interventions sans nacelle.",
};

const PX = "?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const IMG = {
  intro:  `https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg${PX}`,
  report: `https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg${PX}`,
};

export default async function ImmobilierSyndicsPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const stats = [
    { value: "0",    label: isEn ? "Cherry picker or scaffolding required" : "Nacelle ou échafaudage requis" },
    { value: "48 h", label: isEn ? "Photo technical report delivered" : "Rapport technique photos remis" },
    { value: "100 %", label: isEn ? "Interventions without resident disruption" : "Interventions sans nuisance résidents" },
    { value: "AGM",  label: isEn ? "Complete dossier for General Meeting" : "Dossier complet pour Assemblée Générale" },
  ];

  const features = [
    {
      icon: Building2, color: "text-brand-orange-500", bg: "bg-brand-orange-50",
      title: isEn ? "No cherry picker or scaffolding" : "Sans nacelle ni échafaudage",
      desc: isEn ? "No disruption to residents and ground-floor businesses. Our drones operate at height with no ground footprint." : "Aucune nuisance pour les résidents et commerces de pied d'immeuble. Nos drones opèrent en hauteur sans emprise au sol.",
    },
    {
      icon: FileText, color: "text-blue-500", bg: "bg-blue-50",
      title: isEn ? "Technical reports provided" : "Rapports techniques fournis",
      desc: isEn ? "Before/after photos, thermography, PDF report for your AGMs. Each intervention is documented to facilitate collective decision-making." : "Photos avant/après, thermographie, rapport PDF pour vos AG. Chaque intervention est documentée pour faciliter la prise de décision collective.",
    },
    {
      icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50",
      title: isEn ? "Clear professional quotes" : "Devis pro clairs",
      desc: isEn ? "Transparent pricing adapted to co-ownership budgets. Specific conditions for property managers and managing agents." : "Tarifs transparents adaptés aux budgets de copropriété. Conditions spécifiques pour les gestionnaires et syndics.",
    },
    {
      icon: Camera, color: "text-slate-600", bg: "bg-slate-100",
      title: isEn ? "CARSAT compliance" : "Sécurité CARSAT",
      desc: isEn ? "No liability transferred to the managing agent for work at height. Regulatory responsibility is borne by our certified teams." : "Aucune responsabilité transférée au syndic pour le travail en hauteur. La responsabilité réglementaire est portée par nos équipes certifiées.",
    },
  ];

  const avantages = [
    {
      title: isEn ? "No cherry picker or scaffolding — zero resident disruption" : "Sans nacelle ni échafaudage — aucune nuisance résidents",
      desc: isEn ? "No disruption to residents and ground-floor businesses. Our aerial interventions preserve the tranquillity of occupants and allow operations even on the narrowest buildings or those with heavy pedestrian traffic." : "Aucune nuisance pour les résidents et commerces de pied d'immeuble. Nos interventions aériennes préservent la tranquillité des occupants et permettent d'intervenir même sur les immeubles les plus étroits ou à trafic piéton dense.",
    },
    {
      title: isEn ? "Technical reports for the General Meeting" : "Rapports techniques pour Assemblée Générale",
      desc: isEn ? "Each intervention is documented with a photographic before/after report and, on request, a thermographic inspection of the roof. These elements form a turnkey dossier to present the building's condition at the AGM and justify works to co-owners." : "Chaque intervention est documentée par un rapport photographique avant/après et, sur demande, une inspection thermographique de la toiture. Ces éléments constituent un dossier clé-en-main pour présenter l'état du bâtiment en AG et justifier les travaux auprès des copropriétaires.",
    },
    {
      title: isEn ? "Clear professional quotes adapted to co-ownership budgets" : "Devis pro clairs adaptés aux budgets de copropriété",
      desc: isEn ? "Transparent pricing adapted to co-ownership budgets. We offer specific pricing conditions for managers and managing agents (multi-building contracts, group interventions). Contact us for a lasting partnership." : "Tarifs transparents adaptés aux budgets de copropriété. Nous proposons des conditions tarifaires spécifiques aux gestionnaires et syndics (contrats multi-bâtiments, interventions groupées). Contactez-nous pour un partenariat durable.",
    },
    {
      title: isEn ? "CARSAT compliance — liability transferred to the operator" : "Sécurité CARSAT — responsabilité transférée à l'opérateur",
      desc: isEn ? "No liability transferred to the managing agent for work at height. By engaging our certified teams, you are released from all criminal and civil liability related to work at height on your building." : "Aucune responsabilité transférée au syndic pour le travail en hauteur. En faisant appel à nos équipes certifiées, vous êtes dégagé de toute responsabilité pénale et civile liée aux interventions en hauteur sur votre copropriété.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      {/* BANNIÈRE */}
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-cover bg-center" style={{ backgroundImage: `url('/images/sydicban.png')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/50 text-brand-orange-400 font-medium text-base mb-6">
              {isEn ? "Real Estate · Property Managers · Co-ownership" : "Immobilier · Syndics · Copropriétés"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Real Estate &" : "Immobilier &"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-amber-400">
                {isEn ? "Property Managers" : "Syndics de Copropriété"}
              </span>
            </h1>
            <p className="text-xl text-brand-orange-300 font-semibold mb-4 italic">
              {isEn ? "Exterior maintenance of your co-ownership buildings, free of logistical constraints." : "L'entretien extérieur de vos copropriétés, sans contraintes logistiques."}
            </p>
          </div>
        </div>
      </section>

      <ExpertQuoteSide quote={isEn ? "A well-presented before/after photo report can get a maintenance budget passed at an AGM within minutes. We help managing agents document, argue the case, and act effectively." : "Un rapport photo avant/après bien présenté peut faire voter un budget d'entretien en AG en quelques minutes. Nous aidons les syndics à documenter, argumenter et agir efficacement."} />

      {/* SECTION 1 : INTRO IMAGE SPLIT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[440px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.intro}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-orange-500/20 border border-brand-orange-400/40 text-brand-orange-200 text-xs font-bold backdrop-blur-sm">
                  {isEn ? "Co-ownership · Apartment buildings" : "Copropriétés · Immeubles collectifs"}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white text-xs font-semibold">{isEn ? "Co-ownership exterior maintenance — intervention without cherry picker or scaffolding" : "Entretien extérieur de copropriété — intervention sans nacelle ni échafaudage"}</p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange-100 text-brand-orange-700 text-xs font-black uppercase tracking-widest mb-5">
                <Building2 className="w-3.5 h-3.5" /> {isEn ? "Property manager support" : "Accompagnement gestionnaires"}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {isEn ? "Property Manager Support" : "Accompagnement des gestionnaires"}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isEn
                  ? <>We understand that co-ownership management involves strong constraints: AGM decisions, forecast budgets, coordination with residents. Our approach is designed to simplify your day-to-day. We provide <strong>detailed quotes</strong> and <strong>illustrated technical reports</strong> to facilitate collective decision-making.</>
                  : <>Nous savons que la gestion d&apos;une copropriété implique des contraintes fortes : décisions en AG, budgets prévisionnels, coordination avec les résidents. Notre approche est pensée pour simplifier votre quotidien. Nous fournissons des <strong>devis détaillés</strong> et des <strong>rapports techniques illustrés</strong> pour faciliter la prise de décision collective.</>}
              </p>
              <div className="bg-[#0e2f52]/5 border border-[#0e2f52]/20 rounded-2xl p-5 flex items-start gap-4">
                <span className="text-brand-orange-500 text-4xl font-bold leading-none -mt-1 select-none shrink-0">&ldquo;</span>
                <div>
                  <p className="text-xs font-black text-brand-orange-500 uppercase tracking-widest mb-2">{isEn ? "Expert Opinion" : "Avis Expert"}</p>
                  <p className="text-slate-700 text-sm leading-relaxed italic">{isEn ? "A well-presented before/after photo report can get a maintenance budget passed at an AGM within minutes. We help managing agents document, argue the case, and act effectively." : "Un rapport photo avant/après bien présenté peut faire voter un budget d'entretien en AG en quelques minutes. Nous aidons les syndics à documenter, argumenter et agir efficacement."}</p>
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

      {/* SECTION 2 : FEATURES + RAPPORTS AG */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{isEn ? "Why managing agents choose us:" : "Pourquoi les syndics nous choisissent :"}</h2>
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

          {/* Rapports AG */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <FileText className="w-6 h-6 text-brand-orange-500" /> {isEn ? "Reports for the General Meeting" : "Rapports pour Assemblée Générale"}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {isEn
                  ? <>Each intervention is documented with a <strong>photographic before/after report</strong> and, on request, a thermographic inspection of the roof. These elements form a turnkey dossier to present the building&apos;s condition at the <strong>AGM</strong> and justify works to co-owners.</>
                  : <>Chaque intervention est documentée par un <strong>rapport photographique avant/après</strong> et, sur demande, une inspection thermographique de la toiture. Ces éléments constituent un dossier clé-en-main pour présenter l&apos;état du bâtiment en <strong>AG</strong> et justifier les travaux auprès des copropriétaires.</>}
              </p>
              <div className="bg-brand-orange-50 border border-brand-orange-200 rounded-2xl p-5">
                <p className="text-brand-orange-800 text-sm font-semibold">{isEn ? <><strong>Professional pricing:</strong> We offer specific pricing conditions for managers and managing agents (<strong>multi-building contracts</strong>, group interventions). Contact us for a lasting partnership.</> : <>Tarifs professionnels : Nous proposons des conditions tarifaires spécifiques aux gestionnaires et syndics (<strong>contrats multi-bâtiments</strong>, interventions groupées). Contactez-nous pour un partenariat durable.</>}</p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-64">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.report}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-white text-xs font-semibold">{isEn ? "Before/after photo report delivered within 48h — complete dossier for your AGM" : "Rapport photo avant/après remis sous 48h — dossier complet pour votre AG"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDÉON */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            {isEn ? "Why Ellipsys for your co-ownership buildings?" : "Pourquoi Ellipsys pour vos copropriétés ?"}
          </h2>
          <AccordionSection items={avantages} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-slate-900 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Building2 className="w-10 h-10 text-brand-orange-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">{isEn ? "Request our professional pricing" : "Demander nos tarifs professionnels"}</h2>
          <p className="text-slate-300 mb-10 text-lg">
            {isEn ? "Specific conditions for managers and managing agents. Multi-building contracts available." : "Conditions spécifiques gestionnaires et syndics. Contrats multi-bâtiments disponibles."}
          </p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            {isEn ? "Request professional pricing" : "Demander nos tarifs pro"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
