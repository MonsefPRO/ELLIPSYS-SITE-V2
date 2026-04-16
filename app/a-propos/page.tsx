import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, MapPin, Lightbulb, Target, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "A propos d'Ellipsys Solutions | Notre expertise & notre ADN",
  description: "Fondee sur une double expertise en ingenierie de la maintenance et en technologies de telepilotage. Partenaire de confiance des industriels, collectivites et particuliers.",
};

const accreditations = [
  "Telepilotes certifies DSAC (DGAC)",
  "Certibiocide — Ministere de la Transition Ecologique",
  "RC Professionnelle Aeronautique (XL INSURANCE COMPANY SE)",
  "Assurance decennale selon nature des travaux",
  "Operateurs enregistres cadre europeen STS/SORA",
];

const adn = [
  {
    icon: Lightbulb,
    title: "Innovation pragmatique",
    desc: "Nous n'innovons pas pour innover. Nous deployons la technologie qui resout votre probleme concretement, efficacement, en securite.",
  },
  {
    icon: ShieldCheck,
    title: "Expertise pluridisciplinaire",
    desc: "Ingenierie de la maintenance + technologies de telepilotage + chimie des materiaux. Une combinaison rare qui fait toute la difference.",
  },
  {
    icon: Target,
    title: "Ancrage & rayonnement",
    desc: "Bases en Occitanie, nous intervenons sur tout le territoire national avec la meme exigence de qualite, qu'il s'agisse d'un habitat littoral ou d'un site industriel.",
  },
];

export default function AProposPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24">

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange-50 text-brand-orange-600 font-semibold text-sm mb-8">
            A propos
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
            A propos d&apos;<span className="text-brand-orange-500">Ellipsys Solutions</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                Fondee sur une <strong className="text-slate-900">double expertise en ingenierie de la maintenance et en technologies de telepilotage</strong>, Ellipsys Solutions est le partenaire de confiance des industriels, des collectivites et des particuliers en France.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                {"Notre ADN repose sur l'innovation pragmatique : deployer la meilleure technologie (drones, perches techniques ou robotique) pour offrir une protection structurelle irreprochablee et un nettoyage exterieur parfait."}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {"Ellipsys Solutions est nee d'un constat simple : les interventions sur batiments en hauteur ou en acces difficile sont souvent inutilement lourdes, couteuses et risquees. Nous avons change ca."}
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-3 mb-5">
                <ShieldCheck className="w-7 h-7 text-brand-orange-500" />
                <h3 className="text-xl font-bold text-slate-900">Nos accreditations</h3>
              </div>
              <div className="space-y-3">
                {accreditations.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 text-sm font-medium text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-brand-orange-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ADN */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {adn.map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-14 h-14 bg-brand-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-brand-orange-500" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Implantation */}
          <div className="bg-[#0e2f52] text-white rounded-3xl p-10">
            <h2 className="text-2xl font-bold mb-8 text-center">Implantation & couverture</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <MapPin className="w-8 h-8 text-brand-orange-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-1">Siege Social</h4>
                <p className="text-slate-400 text-sm">42 place de la Lucque<br />30470 Aimargues</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-brand-orange-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-1">Bureaux Operationnels</h4>
                <p className="text-slate-400 text-sm">159 Rue de Thor<br />34000 Montpellier</p>
              </div>
              <div>
                <ShieldCheck className="w-8 h-8 text-brand-orange-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-1">{"Perimetre d'intervention"}</h4>
                <p className="text-slate-400 text-sm">France entiere<br />Europe sur etude</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-100 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Decouvrez nos engagements</h2>
          <p className="text-slate-600 mb-8">Securite, rigueur et bienveillance — les trois valeurs qui guident chacune de nos actions.</p>
          <Link href="/valeurs" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0e2f52] text-white rounded-xl font-bold hover:bg-brand-orange-500 transition-colors">
            Nos valeurs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}
