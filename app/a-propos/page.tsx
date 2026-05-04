import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, MapPin, Lightbulb, Target, ArrowRight } from "lucide-react";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "About Ellipsys Solutions | Our Expertise & DNA",
  description: "Founded on dual expertise in maintenance engineering and remote piloting technologies. Trusted partner for industry, local authorities and private clients.",
};

export default async function AProposPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const accreditations = isEn
    ? [
        "Remote pilots certified by DSAC (DGAC)",
        "Certibiocide — Ministry of Ecological Transition",
        "Aeronautical Professional Civil Liability (XL INSURANCE COMPANY SE)",
        "Decennial liability insurance as applicable",
        "Operators registered under European STS/SORA framework",
      ]
    : [
        "Télépilotes certifiés DSAC (DGAC)",
        "Certibiocide — Ministère de la Transition Écologique",
        "RC Professionnelle Aéronautique (XL INSURANCE COMPANY SE)",
        "Assurance décennale selon nature des travaux",
        "Opérateurs enregistrés cadre européen STS/SORA",
      ];

  const adn = isEn
    ? [
        {
          icon: Lightbulb,
          title: "Pragmatic Innovation",
          desc: <>We do not innovate for its own sake. We deploy the technology that solves your problem concretely, efficiently, and <strong>safely</strong>.</>,
        },
        {
          icon: ShieldCheck,
          title: "Multidisciplinary Expertise",
          desc: <>Maintenance engineering + remote piloting + materials chemistry. <strong>A rare combination</strong> that makes all the difference.</>,
        },
        {
          icon: Target,
          title: "Local Roots, National Reach",
          desc: <>Based in Occitanie, we operate across <strong>the entire national territory</strong> with the same quality standards, whether for a coastal property or an industrial site.</>,
        },
      ]
    : [
        {
          icon: Lightbulb,
          title: "Innovation pragmatique",
          desc: <>Nous n&apos;innovons pas pour innover. Nous déployons la technologie qui résout votre problème concrètement, efficacement, <strong>en sécurité</strong>.</>,
        },
        {
          icon: ShieldCheck,
          title: "Expertise pluridisciplinaire",
          desc: <>Ingénierie de la maintenance + technologies de télépilotage + chimie des matériaux. <strong>Une combinaison rare</strong> qui fait toute la différence.</>,
        },
        {
          icon: Target,
          title: "Ancrage & rayonnement",
          desc: <>Basés en Occitanie, nous intervenons sur <strong>tout le territoire national</strong> avec la même exigence de qualité, qu&apos;il s&apos;agisse d&apos;un habitat littoral ou d&apos;un site industriel.</>,
        },
      ];

  return (
    <main className="flex flex-col min-h-screen pt-24">

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange-50 text-brand-orange-600 font-semibold text-sm mb-8">
            {isEn ? "About Us" : "À propos"}
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
            {isEn ? "About " : "À propos d'"}<span className="text-brand-orange-500">Ellipsys Solutions</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {isEn
                  ? <><strong className="text-slate-900">Founded on dual expertise in maintenance engineering and remote piloting technologies</strong>, Ellipsys Solutions is the trusted partner of industrial clients, local authorities and private individuals across France.</>
                  : <>Fondée sur une <strong className="text-slate-900">double expertise en ingénierie de la maintenance et en technologies de télépilotage</strong>, Ellipsys Solutions est le partenaire de confiance des industriels, des collectivités et des particuliers en France.</>}
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isEn
                  ? <>Our DNA is built on pragmatic innovation: deploying the best technology (drones, technical poles or robotics) to deliver <strong>irreproachable structural protection</strong> and flawless exterior cleaning.</>
                  : <>Notre ADN repose sur l&apos;innovation pragmatique : déployer la meilleure technologie (drones, perches techniques ou robotique) pour offrir une <strong>protection structurelle irréprochable</strong> et un nettoyage extérieur parfait.</>}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {isEn
                  ? <>Ellipsys Solutions was born from a simple observation: interventions on buildings at height or with difficult access are often unnecessarily cumbersome, costly and risky. <strong>We changed that.</strong></>
                  : <>Ellipsys Solutions est née d&apos;un constat simple : les interventions sur bâtiments en hauteur ou en accès difficile sont souvent inutilement lourdes, coûteuses et risquées. <strong>Nous avons changé ça.</strong></>}
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-3 mb-5">
                <ShieldCheck className="w-7 h-7 text-brand-orange-500" />
                <h3 className="text-xl font-bold text-slate-900">{isEn ? "Our Credentials" : "Nos accréditations"}</h3>
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
            <h2 className="text-2xl font-bold mb-8 text-center">{isEn ? "Locations & Coverage" : "Implantation & couverture"}</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <MapPin className="w-8 h-8 text-brand-orange-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-1">{isEn ? "Registered Office" : "Siège Social"}</h4>
                <p className="text-slate-400 text-sm">42 place de la Lucque<br />30470 Aimargues</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-brand-orange-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-1">{isEn ? "Operational Offices" : "Bureaux Opérationnels"}</h4>
                <p className="text-slate-400 text-sm">159 Rue de Thor<br />34000 Montpellier</p>
              </div>
              <div>
                <ShieldCheck className="w-8 h-8 text-brand-orange-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-1">{isEn ? "Service Area" : "Périmètre d'intervention"}</h4>
                <p className="text-slate-400 text-sm">{isEn ? "All of France\nEurope on request" : "France entière\nEurope sur étude"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-100 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">{isEn ? "Discover Our Commitments" : "Découvrez nos engagements"}</h2>
          <p className="text-slate-600 mb-8">{isEn ? "Safety, Rigour and Care — the three values that guide each of our actions." : "Sécurité, rigueur et bienveillance — les trois valeurs qui guident chacune de nos actions."}</p>
          <Link href="/valeurs" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0e2f52] text-white rounded-xl font-bold hover:bg-brand-orange-500 transition-colors">
            {isEn ? "Our Values" : "Nos valeurs"} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}
