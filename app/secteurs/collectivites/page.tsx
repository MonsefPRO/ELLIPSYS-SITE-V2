import type { Metadata } from "next";
import Link from "next/link";
import { Building2, ShieldCheck, AlertTriangle, Users, ChevronRight } from "lucide-react";
import ExpertQuoteSide from "@/components/ExpertQuoteSide";
import AccordionSection from "@/components/AccordionSection";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Entretien Batiments Publics et Espaces Collectifs par Drone | Ellipsys",
  description: "Nettoyage sans emprise au sol pour collectivites. Continuite de la voirie, securite ecoles, urgences frelons dans les parcs publics.",
};

const IMG = {
  intro:  `/images/infras1.png`,
  school: `/images/bannerfrelons.png`,
};

export default async function CollectivitesPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const stats = [
    { value: "0",     label: isEn ? "Ground footprint required during works" : "Emprise au sol requise lors des travaux" },
    { value: "< 2 h", label: isEn ? "Emergency hornet response time" : "Délai d'intervention urgence frelons" },
    { value: "100 %", label: isEn ? "Public service maintained during works" : "Service public maintenu pendant travaux" },
    { value: "PP",    label: isEn ? "Listed on public procurement platforms" : "Référencés marchés publics / appels d'offres" },
  ];

  const features = [
    {
      icon: Building2, color: "text-brand-orange-500", bg: "bg-brand-orange-50",
      title: isEn ? "No ground footprint" : "Aucune emprise au sol",
      desc: isEn ? "No barriers, no cherry picker blocking traffic. Our aerial approach preserves the continuity of pedestrian and vehicle access." : "Aucune barricade, aucune nacelle bloquant la circulation. Notre approche aérienne préserve la continuité des accès piétons et véhicules.",
    },
    {
      icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50",
      title: isEn ? "School safety" : "Sécurité écoles",
      desc: isEn ? "Interventions outside school hours or without evacuation. We adapt to the constraints of educational establishments to never expose pupils." : "Interventions hors horaires scolaires ou sans évacuation. Nous nous adaptons aux contraintes des établissements pour ne jamais exposer les élèves.",
    },
    {
      icon: Users, color: "text-blue-500", bg: "bg-blue-50",
      title: isEn ? "Road continuity" : "Continuité voirie",
      desc: isEn ? "Pedestrian and vehicle access maintained during the intervention. Unlike conventional methods, our drone requires no road marking." : "Accès piétons et véhicules maintenu pendant l'intervention. Contrairement aux méthodes classiques, notre drone ne nécessite aucun balisage de voirie.",
    },
    {
      icon: AlertTriangle, color: "text-red-500", bg: "bg-red-50",
      title: isEn ? "Emergency hornets in parks" : "Urgences frelons parcs",
      desc: isEn ? "Rapid intervention on inaccessible nests in green spaces. A nest in a public space engages the liability of the local authority." : "Intervention rapide sur nids inaccessibles dans espaces verts. Un nid dans un espace public engage la responsabilité de la collectivité.",
    },
  ];

  const avantages = [
    {
      title: isEn ? "No ground footprint — no barriers or disruption" : "Aucune emprise au sol — aucune barricade ni perturbation",
      desc: isEn ? "Public buildings and spaces face specific constraints: public access, user safety, service continuity. Our aerial drone approach eliminates the need for a ground footprint (marking, cherry pickers, scaffolding), enabling intervention on public buildings without disrupting pedestrian or vehicle traffic." : "Les bâtiments et espaces publics font face à des contraintes spécifiques : accès du public, sécurité des usagers, continuité du service. Notre approche aérienne par drone élimine le besoin d'emprise au sol (balisage, nacelles, échafaudages), permettant d'intervenir sur les bâtiments publics sans perturber la circulation piétons ou véhicules.",
    },
    {
      title: isEn ? "School safety — interventions adapted to educational establishments" : "Sécurité écoles — interventions adaptées aux établissements scolaires",
      desc: isEn ? "Interventions outside school hours or without evacuation. We adapt to the constraints of educational establishments to intervene without disrupting teaching activities or exposing pupils. Our operations can take place at weekends or during school holidays." : "Interventions hors horaires scolaires ou sans évacuation. Nous nous adaptons aux contraintes des établissements scolaires pour intervenir sans perturber les activités pédagogiques ni exposer les élèves. Nos opérations peuvent se tenir le week-end ou pendant les vacances scolaires.",
    },
    {
      title: isEn ? "Road continuity — pedestrian and vehicle access maintained" : "Continuité voirie — accès piétons et véhicules maintenus",
      desc: isEn ? "Pedestrian and vehicle access maintained during the intervention. Unlike conventional methods (cherry pickers, scaffolding), our drone requires no road marking, preserving traffic flow and the continuity of public service." : "Accès piétons et véhicules maintenu pendant l'intervention. Contrairement aux méthodes classiques (nacelles, échafaudages), notre drone ne nécessite aucun balisage de voirie, préservant la fluidité du trafic et la continuité du service public.",
    },
    {
      title: isEn ? "Emergency hornets — response within 2h in public spaces" : "Urgences frelons — intervention sous 2h dans les espaces publics",
      desc: isEn ? "An Asian hornet nest in a park, school or stadium constitutes a health emergency engaging the liability of the local authority. Our team responds as an emergency with our qualified drone, neutralising the nest without area evacuation and without endangering the operators. We are listed on public procurement platforms." : "Un nid de frelons asiatiques dans un parc, une école ou un stade constitue une urgence sanitaire engageant la responsabilité de la collectivité. Notre équipe intervient en urgence avec notre drone qualifié, neutralisant le nid sans évacuation de zone et sans mise en danger des intervenants. Nous sommes référencés sur les plateformes de marchés publics.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      {/* BANNIÈRE */}
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-cover bg-center" style={{ backgroundImage: `url('/images/banncollec.png')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/50 text-brand-orange-400 font-medium text-base mb-6">
              {isEn ? "Local Authorities · Schools · Public Spaces" : "Collectivités · Écoles · Espaces Publics"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Local Authorities &" : "Collectivités &"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-amber-400">
                {isEn ? "Public Spaces" : "Espace Public"}
              </span>
            </h1>
            <p className="text-xl text-brand-orange-300 font-semibold mb-4 italic">
              {isEn ? "Interventions with no ground footprint to preserve the continuity of public service." : "Interventions sans emprise au sol pour préserver la continuité du service public."}
            </p>
          </div>
        </div>
      </section>

      <ExpertQuoteSide quote={isEn ? "A drone can clean a school façade during the school holidays, without barricading the street, without risk to users, without nuisance to local residents. That is exactly what local authorities ask of us." : "Un drone peut nettoyer la façade d'une école pendant les vacances scolaires, sans barricader la rue, sans risque pour les usagers, sans nuisance pour les riverains. C'est exactement ce que les collectivités nous demandent."} />

      {/* SECTION 1 : INTRO IMAGE SPLIT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[440px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.intro}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-orange-500/20 border border-brand-orange-400/40 text-brand-orange-200 text-xs font-bold backdrop-blur-sm">
                  {isEn ? "Public buildings · Local authorities" : "Bâtiments publics · Collectivités"}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white text-xs font-semibold">{isEn ? "Public building — aerial intervention with no ground footprint or service disruption" : "Bâtiment public — intervention aérienne sans emprise au sol ni perturbation du service"}</p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange-100 text-brand-orange-700 text-xs font-black uppercase tracking-widest mb-5">
                <Building2 className="w-3.5 h-3.5" /> {isEn ? "Respect for public infrastructure" : "Respect des infrastructures publiques"}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {isEn ? "Respect for Public Infrastructure" : "Respect des infrastructures publiques"}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isEn
                  ? <>Public buildings and spaces face specific constraints: public access, user safety, service continuity. Our aerial drone approach eliminates the need for a <strong>ground footprint</strong> (marking, cherry pickers, scaffolding), enabling intervention on public buildings without disrupting the <strong>continuity of service</strong>.</>
                  : <>Les bâtiments et espaces publics font face à des contraintes spécifiques : accès du public, sécurité des usagers, continuité du service. Notre approche aérienne par drone élimine le besoin d&apos;<strong>emprise au sol</strong> (balisage, nacelles, échafaudages), permettant d&apos;intervenir sur les bâtiments publics sans perturber la <strong>continuité du service</strong>.</>}
              </p>
              <div className="bg-[#0e2f52]/5 border border-[#0e2f52]/20 rounded-2xl p-5 flex items-start gap-4">
                <span className="text-brand-orange-500 text-4xl font-bold leading-none -mt-1 select-none shrink-0">&ldquo;</span>
                <div>
                  <p className="text-xs font-black text-brand-orange-500 uppercase tracking-widest mb-2">{isEn ? "Expert Opinion" : "Avis Expert"}</p>
                  <p className="text-slate-700 text-sm leading-relaxed italic">{isEn ? "A drone can clean a school façade during the school holidays, without barricading the street, without risk to users, without nuisance to local residents. That is exactly what local authorities ask of us." : "Un drone peut nettoyer la façade d'une école pendant les vacances scolaires, sans barricader la rue, sans risque pour les usagers, sans nuisance pour les riverains. C'est exactement ce que les collectivités nous demandent."}</p>
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

      {/* SECTION 2 : INTERVENTIONS */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{isEn ? "Our interventions for local authorities:" : "Nos interventions pour les collectivités :"}</h2>
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

          {/* Urgences frelons + Marchés publics */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-orange-500" /> {isEn ? "Emergency hornets in public spaces" : "Urgences frelons dans les espaces publics"}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {isEn
                  ? <>An Asian hornet nest in a park, school or stadium constitutes a <strong>health emergency</strong> engaging the liability of the local authority. Our team responds as an emergency with our qualified drone, neutralising the nest <strong>without area evacuation</strong> and without endangering the operators.</>
                  : <>Un nid de frelons asiatiques dans un parc, une école ou un stade constitue une <strong>urgence sanitaire</strong> engageant la responsabilité de la collectivité. Notre équipe intervient en urgence avec notre drone qualifié, neutralisant le nid <strong>sans évacuation de zone</strong> et sans mise en danger des intervenants.</>}
              </p>
              <div className="p-4 bg-slate-100 rounded-2xl">
                <p className="text-slate-600 text-sm">{isEn ? <>We are listed on <strong>public procurement</strong> platforms. Our quotes are drawn up in compliance with Tender procedures. We respond to public consultations and can provide all necessary documents (company registration, insurance, certifications).</> : <>Nous sommes référencés sur les plateformes de <strong>marchés publics</strong>. Nos devis sont établis dans le respect des procédures Appel d&apos;Offres. Nous répondons aux consultations publiques et pouvons fournir l&apos;ensemble des documents nécessaires (KBIS, assurances, certifications).</>}</p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-64">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.school}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-white text-xs font-semibold">{isEn ? "Public space — intervention without user disruption or road marking" : "Espace public — intervention sans perturbation des usagers ni balisage de voirie"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDÉON */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            {isEn ? "Why Ellipsys for your public spaces?" : "Pourquoi Ellipsys pour vos espaces publics ?"}
          </h2>
          <AccordionSection items={avantages} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-slate-900 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Building2 className="w-10 h-10 text-brand-orange-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">{isEn ? "Tenders & public procurement" : "Appel d'offres & marchés publics"}</h2>
          <p className="text-slate-300 mb-10 text-lg">
            {isEn ? "We respond to public consultations and can provide all necessary documents (company registration, insurance, certifications)." : "Nous repondons aux consultations publiques et pouvons fournir l'ensemble des documents necessaires (KBIS, assurances, certifications)."}
          </p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            {isEn ? "Contact us" : "Nous contacter"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
