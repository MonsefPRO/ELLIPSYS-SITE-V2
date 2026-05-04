import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, Target, HeartHandshake, ChevronRight } from "lucide-react";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Nos valeurs : Sécurité, Rigueur, Bienveillance | Ellipsys",
  description: "Découvrez les engagements d'Ellipsys Solutions : sécurité absolue, rigueur d'ingénierie et bienveillance environnementale dans nos interventions par drone.",
};

export default async function ValeursPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const valeurs = [
    {
      num: "01",
      icon: ShieldAlert,
      accent: "text-red-500",
      accentBg: "bg-red-500",
      cardBg: "bg-red-50",
      border: "border-red-200",
      title: isEn ? "SAFETY" : "SECURITE",
      subtitle: isEn ? "Fall risk management" : "Maîtrise du risque de chute",
      tagline: isEn ? "A priority at every moment. For our teams, for your site and for the public." : "Une priorité de chaque instant. Pour nos équipes, pour votre site et pour le public.",
      body: isEn ? <>Studies by <strong>CARSAT</strong> show that nearly half of serious accidents in the building industry occur during short interventions at height. By replacing rooftop work with our <strong>robotic and aerial technologies</strong> (operated from the ground), we completely eliminate this risk. We strictly apply the general prevention principles of INRS and FFB.</> : <>Les études de la <strong>CARSAT</strong> démontrent que près de la moitié des accidents graves dans le bâtiment surviennent lors d&apos;interventions courtes en hauteur. En substituant le travail en toiture par nos <strong>technologies robotiques et aériennes</strong> (pilotées depuis le sol), nous supprimons intégralement ce risque. Nous appliquons strictement les principes généraux de prévention de l&apos;INRS et de la FFB.</>,
    },
    {
      num: "02",
      icon: Target,
      accent: "text-[#0e2f52]",
      accentBg: "bg-[#0e2f52]",
      cardBg: "bg-blue-50",
      border: "border-blue-200",
      title: isEn ? "RIGOUR" : "RIGUEUR",
      subtitle: isEn ? "Precision at the heart of every intervention" : "L'exigence au cœur de chaque intervention",
      tagline: isEn ? "This fundamental value applies to the entire company and each of our team members." : "Cette valeur fondamentale s'applique à l'ensemble de la société et à chacun de nos collaborateurs.",
      body: isEn ? <>From our first point of contact through to the conclusion and documentation of your project, this overall standard of excellence translates into a precise assessment of your needs, the application of strict protocols (prefectural declaration, establishment of a <strong>third-party exclusion perimeter</strong> on the ground), and a millimetre-perfect execution guaranteeing optimal efficiency while preserving the <strong>structural integrity of your building</strong>.</> : <>Depuis notre première prise de contact jusqu&apos;à la conclusion et la documentation de votre chantier, cette exigence globale se traduit par une évaluation précise de vos besoins, l&apos;application de protocoles stricts (déclaration préfectorale, établissement d&apos;un <strong>périmètre d&apos;exclusion des tiers</strong> au sol), et une exécution millimetrée garantissant une efficacité optimale tout en préservant l&apos;<strong>intégrité de votre bâti</strong>.</>,
    },
    {
      num: "03",
      icon: HeartHandshake,
      accent: "text-emerald-600",
      accentBg: "bg-emerald-600",
      cardBg: "bg-emerald-50",
      border: "border-emerald-200",
      title: isEn ? "CARE" : "BIENVEILLANCE",
      subtitle: isEn ? "Corporate Social Responsibility (CSR)" : "Responsabilité Sociétale des Entreprises (RSE)",
      tagline: isEn ? "A Corporate Social Responsibility (CSR) approach." : "Une démarche de Responsabilité Sociétale des Entreprises (RSE).",
      body: isEn ? <>Ellipsys Solutions is committed to a CSR approach founded on the 16 framework principles of the United Nations. We apply our ethical charter daily: environmental protection (biodegradable products, <strong>osmosed water</strong>), ensuring a healthy working environment, and preventing all forms of corruption (<strong>Sapin 2 law</strong>) in our professional relationships.</> : <>Ellipsys Solutions s&apos;engage dans une démarche RSE fondée sur les 16 principes-cadres des Nations Unies. Nous appliquons au quotidien notre charte éthique : protection de l&apos;environnement (produits biodégradables, <strong>eau osmosée</strong>), garantie d&apos;un cadre de travail sain, et prévention de toute forme de corruption (<strong>loi Sapin 2</strong>) dans nos relations professionnelles.</>,
    },
  ];

  const engagements = isEn ? [
    { label: "CARSAT", desc: "Safety compliance" },
    { label: "INRS", desc: "Risk prevention" },
    { label: "CSR", desc: "United Nations" },
    { label: "Sapin 2", desc: "Anti-corruption" },
  ] : [
    { label: "CARSAT", desc: "Conformité sécurité" },
    { label: "INRS", desc: "Prévention des risques" },
    { label: "RSE", desc: "Nations Unies" },
    { label: "Sapin 2", desc: "Anti-corruption" },
  ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      {/* BANNIÈRE */}
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/nosvaleurs.png')` }}
        />
        <div className="brand-tint" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/50 text-brand-orange-400 font-medium text-base mb-6">
              {isEn ? "Our DNA · Commitment · Ethics" : "Notre ADN · Engagement · Éthique"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Safety, Rigour," : "Sécurité, Rigueur,"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-amber-400">
                {isEn ? "Care" : "Bienveillance"}
              </span>
            </h1>
            <p className="text-xl text-brand-orange-300 font-semibold mb-4 italic">
              {isEn
                ? "The DNA of Ellipsys Solutions rests on three fundamental pillars that guide each of our interventions."
                : "L'ADN d'Ellipsys Solutions repose sur trois piliers fondamentaux qui guident chacune de nos interventions."}
            </p>
          </div>
        </div>
      </section>

      {/* BARRE D'ENGAGEMENTS */}
      <section className="py-8 bg-[#0e2f52]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {engagements.map((e, i) => (
              <div key={i} className="border-r border-white/10 last:border-0 px-4">
                <p className="text-2xl font-black text-brand-orange-400 mb-1">{e.label}</p>
                <p className="text-slate-300 text-xs leading-tight">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl space-y-10">
          {valeurs.map((v, i) => (
            <div key={i}>
              {/* Carte valeur */}
              <div className={`rounded-3xl overflow-hidden shadow-sm border ${v.border} flex flex-col md:flex-row group hover:shadow-md transition-shadow duration-300`}>
                {/* COLONNE GAUCHE — numéro + icône */}
                <div className={`${v.accentBg} md:w-40 flex flex-col items-center justify-center py-10 px-6 shrink-0`}>
                  <span className="text-white/30 text-6xl font-black leading-none mb-3">{v.num}</span>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <v.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                {/* COLONNE DROITE — contenu */}
                <div className={`${v.cardBg} flex-grow p-8 lg:p-10`}>
                  <div className="mb-1">
                    <span className={`text-xs font-black uppercase tracking-widest ${v.accent}`}>{v.subtitle}</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 mb-3">{v.title}</h2>
                  <p className={`font-bold mb-4 text-sm ${v.accent}`}>{v.tagline}</p>
                  <p className="text-slate-600 leading-relaxed text-sm">{v.body}</p>
                </div>
              </div>

              {/* LETTRE DU FONDATEUR — uniquement sous Bienveillance/Responsibility */}
              {(v.title === "BIENVEILLANCE" || v.title === "CARE") && (
                <div className="mt-6 bg-white border border-emerald-200 rounded-3xl overflow-hidden shadow-sm">
                  <div className="bg-gradient-to-r from-emerald-700 to-teal-700 px-8 py-5 flex items-center justify-between">
                    <div>
                      <p className="text-emerald-200 text-xs font-black uppercase tracking-widest mb-1">{isEn ? "Message from the Founder" : "Mot du fondateur"}</p>
                      <h3 className="text-white font-black text-lg">{isEn ? "Care is not a word — it is a measurable commitment" : "La Bienveillance, ce n'est pas un mot — c'est un engagement mesurable"}</h3>
                    </div>
                    {/* Badge ONU */}
                    <div className="hidden sm:flex items-center gap-2 bg-white/15 border border-white/25 rounded-xl px-4 py-2 shrink-0 ml-6">
                      <span className="text-2xl">🌐</span>
                      <div className="text-left">
                        <p className="text-white font-black text-xs">UN Global</p>
                        <p className="text-emerald-200 text-xs">Compact</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 lg:p-10 space-y-4 text-sm text-slate-700 leading-relaxed">
                    <p>{isEn ? <>At Ellipsys Solutions Drones, <strong>Safety</strong> and <strong>Rigour</strong> are taken for granted by our partners. They are the bedrock of our trade. But I am often asked about our third founding value: <strong>Care</strong> 🤔</> : <>Chez Ellipsys Solutions Drones, la <strong>Sécurité</strong> et la <strong>Rigueur</strong> sont des évidences pour nos partenaires. C&apos;est le socle de notre métier. Mais on m&apos;interroge souvent sur notre troisième valeur fondatrice : la <strong>Bienveillance</strong> 🤔</>}</p>

                    <p>{isEn ? <>{`Is it just a trendy word? `}<strong>Absolutely not.</strong>{` For us, it is a measurable, structured commitment aligned with the highest international standards.`}</> : <>Est-ce juste un mot à la mode ? <strong>Absolument pas.</strong> Pour nous, c&apos;est un engagement mesurable, structuré et aligné sur les plus hauts standards internationaux.</>}</p>

                    <p>{isEn ? <>To translate this care into concrete actions, we have chosen to align with the <strong>United Nations Global Compact</strong>. We recently submitted our young organisation to their rigorous assessment tool: the <strong>&ldquo;Transformational Governance Tool&rdquo;</strong>.</> : <>Pour traduire cette bienveillance en actes concrets, nous avons fait le choix de nous adosser au <strong>Pacte Mondial des Nations Unies (UN Global Compact)</strong>. Nous avons récemment soumis notre jeune structure à leur outil d&apos;évaluation exigeant : le <strong>&ldquo;Transformational Governance Tool&rdquo;</strong>.</>}</p>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                      <p className="text-xs font-black text-emerald-700 uppercase tracking-widest mb-2">{isEn ? "What is Transformational Governance?" : "Qu'est-ce que la Gouvernance Transformationnelle ?"}</p>
                      <p className="text-slate-600 text-sm">{isEn ? <>This is a UN-driven approach that pushes companies to go well beyond simple legal or financial compliance. It is about becoming drivers of ethical, inclusive and transparent behaviour. This approach aligns directly with <strong>SDG 16</strong> (Peace, justice and strong institutions).</> : <>C&apos;est une approche portée par l&apos;ONU qui pousse les entreprises à aller bien au-delà de la simple conformité légale ou financière. C&apos;est le fait de devenir des moteurs de comportements éthiques, inclusifs et transparents. Cette démarche s&apos;inscrit directement dans la ligne de l&apos;<strong>ODD 16</strong> (Paix, justice et institutions efficaces).</>}</p>
                    </div>

                    <p>{isEn ? <>This is exactly our vision of Care: building cutting-edge technology while guaranteeing <strong>irreproachable ethics</strong> and a <strong>positive societal impact</strong>.</> : <>C&apos;est exactement notre vision de la Bienveillance : construire une technologie de pointe tout en garantissant une <strong>éthique irréprochable</strong> et un <strong>impact sociétal positif</strong>.</>}</p>

                    {/* Score */}
                    <div className="bg-[#0e2f52] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
                      <div className="text-center shrink-0">
                        <p className="text-5xl font-black text-brand-orange-400">36%</p>
                        <p className="text-slate-300 text-xs mt-1">{isEn ? "Current overall score" : "Score global actuel"}</p>
                      </div>
                      <div className="text-left">
                        <p className="text-white font-bold mb-2">{isEn ? "A remarkable starting score" : "Un score de départ remarquable"}</p>
                        <p className="text-slate-300 text-xs leading-relaxed">{isEn ? <>Ellipsys was founded in <strong className="text-white">December 2025</strong>. Achieving this result on a framework designed to audit the maturity of large global companies is a remarkable feat. Our governance and ethical values are already deeply embedded in our DNA.</> : <>Ellipsys a été créée en <strong className="text-white">décembre 2025</strong>. Obtenir ce résultat sur une grille conçue pour auditer la maturité des grandes entreprises mondiales est un tour de force. Notre gouvernance et nos valeurs éthiques sont déjà profondément ancrées dans notre ADN.</>}</p>
                        <div className="mt-3 flex items-center gap-3">
                          <div className="flex-grow bg-white/10 rounded-full h-2">
                            <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full" style={{ width: "36%" }} />
                          </div>
                          <span className="text-emerald-400 text-xs font-bold shrink-0">{isEn ? "→ 50% by end 2026" : "→ 50% fin 2026"}</span>
                        </div>
                      </div>
                    </div>

                    <p>{isEn ? <>Care is a <strong>process of continuous improvement</strong>. We have launched a CSR programme integrating a detailed action plan. Our commitment is clear: <strong>reach a score of 50% by 31 December 2026</strong>.</> : <>La bienveillance est une <strong>démarche d&apos;amélioration continue</strong>. Nous avons lancé un programme RSE intégrant un plan d&apos;action détaillé. Notre engagement est clair : <strong>atteindre un score de 50% d&apos;ici le 31 décembre 2026</strong>.</>}</p>

                    <p className="italic text-slate-500">{isEn ? "Drone technology advances rapidly, and at Ellipsys Solutions, we ensure it flies in the right direction: with Rigour, Safety, and Care." : "La technologie des drones avance vite, et chez Ellipsys Solutions, nous nous assurons qu'elle vole dans la bonne direction : avec Rigueur, Sécurité, et Bienveillance."}</p>

                    {/* Signature */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-black text-lg shrink-0">
                        E
                      </div>
                      <div>
                        <p className="font-black text-slate-900 text-sm">{isEn ? "Management" : "La Direction"}</p>
                        <p className="text-slate-400 text-xs">Ellipsys Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-slate-900 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-orange-400 font-bold text-sm tracking-widest uppercase mb-4">
            {isEn ? "Values that translate into action" : "Des valeurs qui se traduisent en actes"}
          </p>
          <h2 className="text-3xl font-bold text-white mb-6">
            {isEn ? "Entrust us with your project" : "Confiez-nous votre chantier"}
          </h2>
          <p className="text-slate-300 mb-10 text-lg">
            {isEn
              ? "Safety, rigour and care: three commitments you will find at every stage of our intervention."
              : "Sécurité, rigueur et bienveillance : trois engagements que vous retrouverez à chaque étape de notre intervention."}

          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
          >
            {isEn ? "Request a Free Quote" : "Demander un devis"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
