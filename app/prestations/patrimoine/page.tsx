import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Landmark, Shield, Scale, CheckCircle2 } from "lucide-react";
import ExpertQuoteSide from "@/components/ExpertQuoteSide";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Heritage Building & Sensitive Structure Maintenance | Ellipsys",
  description: "Gentle methods for historic buildings, ashlar stone and traditional renders. Full compliance with Listed Building Authority (ABF) prescriptions.",
};

export default async function PatrimoinePage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const materials = isEn
    ? ["Ashlar stone", "Traditional renders", "Slate roofing", "Lauze & canal tiles", "Limestone", "Timber framing"]
    : ["Pierre de taille", "Enduits traditionnels", "Toitures en ardoise", "Lauze & tuiles canal", "Pierres calcaires", "Colombages"];

  const diagnosticItems = isEn
    ? [
        <>The fragility and <strong>nature of the materials</strong></>,
        <>The degree of <strong>surface porosity</strong></>,
        <>The presence of <strong>micro-cracks</strong></>,
        <>Any <strong>prior treatments</strong> applied</>,
      ]
    : [
        <>La fragilité et la <strong>nature des matériaux</strong></>,
        <>Le degré de <strong>porosité du support</strong></>,
        <>La présence de <strong>micro-fissures</strong></>,
        <>Les <strong>traitements antérieurs</strong> éventuels</>,
      ];

  const abfItems = isEn
    ? [
        <>Verification of inclusion in the <strong>protected perimeter</strong></>,
        <>Advice on <strong>compatible prescribed products</strong></>,
        <><strong>Prior works declaration</strong> where required</>,
        <>Compliance with <strong>original colour and texture</strong></>,
        <><strong>Documentation</strong> for the heritage monitoring file</>,
      ]
    : [
        <>Vérification de l&apos;appartenance au <strong>périmètre protégé</strong></>,
        <>Conseil sur les <strong>produits compatibles</strong> prescrits</>,
        <><strong>Déclaration préalable de travaux</strong> si nécessaire</>,
        <>Respect du <strong>coloris et de la texture d&apos;origine</strong></>,
        <><strong>Documentation</strong> pour le dossier de suivi patrimonial</>,
      ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Drone.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e2f52] via-[#0e2f52]/85 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-400 font-medium text-sm mb-6">
              {isEn ? "Historic Buildings · Listed Monuments · ABF" : "Bati Ancien · Monuments · ABF"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Maintenance, treatment and inspection of " : "Entretien, traitement et inspection de "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-brand-orange-400">
                {isEn ? "heritage buildings and sensitive structures" : "patrimoine et ouvrages sensibles"}
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              {isEn
                ? "Historic buildings demand extreme care. We intervene using gentle methods and neutral agents to preserve every material from erosion."
                : "Les bâtiments historiques exigent des précautions extrêmes. Nous intervenons avec méthodes douces et agents neutres pour préserver chaque matériau de toute érosion."}
            </p>
          </div>
        </div>
      </section>

      <ExpertQuoteSide quote={isEn
        ? "The drone is a revolution for heritage conservation: millimetric precision, no mechanical contact, no scaffolding, no risk of alteration to century-old materials. We operate where no one else can."
        : "Le drone est une révolution pour le patrimoine : une précision millimétrique, sans contact mécanique, sans échafaudage, sans risque d'altération pour les matériaux centenaires. Nous intervenons là où personne d'autre ne peut le faire."
      } />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="w-6 h-6 text-purple-600" />
                <h2 className="text-3xl font-bold text-slate-900">
                  {isEn ? "Protection of historic fabric" : "Protection du bâti ancien"}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {isEn
                  ? <>Historic buildings demand extreme care. We use <strong>gentle intervention methods</strong> — <strong className="text-slate-900">very low-pressure spray</strong>, <strong>neutral fungicide agents</strong> — to clean <strong>ashlar stone</strong> facades, traditional renders and historic rooftops.</>
                  : <>Les bâtiments historiques exigent des précautions extrêmes. Nous utilisons des <strong>méthodes d&apos;intervention douces</strong> — <strong className="text-slate-900">pulvérisation très basse pression</strong>, <strong>agents fongicides neutres</strong> — pour nettoyer les façades en <strong>pierre de taille</strong>, les enduits traditionnels ou les toitures anciennes.</>}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {materials.map((mat, i) => (
                  <div key={i} className="flex items-center gap-2 bg-purple-50 p-3 rounded-xl border border-purple-100 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                    {mat}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-brand-orange-500" />
                <h3 className="text-xl font-bold text-slate-900">
                  {isEn ? "Caution and methodology" : "Prudence et méthode"}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {isEn
                  ? <>Each intervention is preceded by a <strong>rigorous technical diagnostic</strong> to identify:</>
                  : <>Chaque intervention est precedee d&apos;un <strong>diagnostic technique rigoureux</strong> pour identifier :</>}
              </p>
              <ul className="space-y-2">
                {diagnosticItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-50 border-y border-purple-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-purple-700" />
                <h2 className="text-3xl font-bold text-slate-900">
                  {isEn ? "Full ABF Compliance" : "Respect des prescriptions ABF"}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {isEn
                  ? <>For structures located in <strong>protected areas</strong> or adjacent to listed monuments, our protocols scrupulously comply with the <strong>prescriptions</strong> issued by the <strong className="text-slate-900">Listed Building Authority (ABF)</strong>.</>
                  : <>Pour les ouvrages situés en <strong>secteurs protégés</strong> ou aux abords de monuments historiques, nos protocoles respectent scrupuleusement les <strong>prescriptions</strong> édictées par les <strong className="text-slate-900">Architectes des Bâtiments de France (ABF)</strong>.</>}
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isEn
                  ? <>Legal framework: <strong>Article L. 621-31 of the Heritage Code</strong>. We guide you through all mandatory prior declarations and procedures.</>
                  : <>Cadre légal : <strong>article L. 621-31 du Code du patrimoine</strong>. Nous vous accompagnons dans le respect des démarches et déclarations préalables obligatoires.</>}
              </p>
              <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F36779" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-600 font-medium hover:underline text-sm">
                {isEn ? "Learn more about ABF regulations (service-public.gouv.fr) →" : "En savoir plus sur les regles ABF (service-public.gouv.fr) →"}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-purple-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-5">
                {isEn ? "We support you with:" : "Nous vous accompagnons pour :"}
              </h3>
              <ul className="space-y-3">
                {abfItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-purple-950 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isEn ? "Your heritage deserves the care it has always had" : "Votre patrimoine merite le soin qu'il a toujours eu"}
          </h2>
          <p className="text-slate-300 mb-10 text-lg">
            {isEn
              ? "Every historic building is unique. Share your project with us and we will propose a tailored protocol."
              : "Chaque bâtiment ancien est unique. Partagez-nous votre projet et nous vous proposerons un protocole adapté."}
          </p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-500 to-brand-orange-500 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            {isEn ? "Personalised Heritage Assessment" : "Étude patrimoine personnalisée"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
