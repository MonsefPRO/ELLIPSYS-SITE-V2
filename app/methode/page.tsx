import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Scale, Leaf, FileCheck, BrainCircuit, Droplets, Zap } from "lucide-react";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Our Intervention Method: Engineering at the Service of Materials | Ellipsys",
  description: "Prior analysis, secure technology, responsible chemistry. Our intervention method systematically preserves the integrity of your surfaces.",
};

export default async function MethodeGarantiesPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      {/* HERO */}
      <section className="bg-[#0e2f52] text-white py-20 lg:py-32 text-center px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-slate-300 font-bold text-sm mb-8 border border-white/10">
            <BrainCircuit className="w-4 h-4" /> {isEn ? "Our Doctrine" : "Notre Doctrine"}
          </div>
          <h1 className="text-3xl lg:text-5xl font-black mb-8 leading-tight">
            {isEn ? "Our Intervention Method:" : "Notre méthode d'intervention :"}<br />
            <span className="text-brand-orange-400">
              {isEn ? "Engineering at the Service of Materials" : "L'ingénierie au service de la matière"}
            </span>
          </h1>
          <p className="text-2xl text-slate-300 font-medium italic leading-relaxed max-w-3xl mx-auto">
            &quot;{isEn ? "The tool adapts to the building — never the other way around." : "L'outil s'adapte au bâtiment, et non l'inverse."}&quot;
          </p>
        </div>
      </section>

      {/* STEP 1 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange-50 text-brand-orange-600 font-semibold text-sm mb-6">
                {isEn ? "Step 1" : "Étape 1"}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {isEn ? "Prior Analysis & Diagnostic" : "L'analyse préalable et le diagnostic"}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {isEn
                  ? "At Ellipsys, the surface dictates the method. Porous limestone is not treated the same way as a metal sandwich panel."
                  : "Chez Ellipsys, le support dicte la méthode. On ne nettoie pas une pierre calcaire poreuse comme un panneau sandwich métallique."}
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                {isEn
                  ? <>Evaluating the <strong>surface chemistry</strong> is the primary step in precisely defining the required cleaning agent and the most appropriate <strong>application vector</strong>.</>
                  : <>L&apos;évaluation de la <strong>chimie du support</strong> est l&apos;étape primordiale pour définir avec précision l&apos;agent nettoyant nécessaire et le <strong>vecteur d&apos;application</strong> le plus approprié.</>}
              </p>
              <div className="space-y-3">
                {(isEn ? [
                  "Identifying the material composition (metal, stone, glass, render)",
                  "Assessing porosity and fragility levels",
                  "Analysing existing pathologies (biological, carbon-based, calcareous)",
                  "Defining the appropriate chemical protocol",
                ] : [
                  "Identification de la nature du matériau (métal, pierre, verre, enduit)",
                  "Évaluation du niveau de porosité et de fragilité",
                  "Analyse des pathologies présentes (biologique, carbonée, calcaire)",
                  "Définition du protocole chimique adapté",
                ]).map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-brand-orange-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                {isEn ? "Our tool is selected based on:" : "Notre outil decide selon :"}
              </h3>
              <div className="space-y-4">
                {(isEn ? [
                  { label: "Building height", desc: "Aerial drone above 12-15 m" },
                  { label: "Surface fragility", desc: "Telescopic poles on fragile slates" },
                  { label: "Roof slope", desc: "Ground robot <35%, drone beyond" },
                  { label: "Surface area", desc: "Drone for >500 m², poles for finishing" },
                ] : [
                  { label: "Hauteur du bâtiment", desc: "Drone aérien au-delà de 12-15m" },
                  { label: "Fragilité du support", desc: "Perches télescopiques sur ardoises fragiles" },
                  { label: "Pente de la toiture", desc: "Robot terrestre < 35%, drone au-delà" },
                  { label: "Surface à traiter", desc: "Drone pour > 500m2, perches pour finitions" },
                ]).map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-4 py-3 border-b border-slate-200 last:border-0">
                    <span className="font-medium text-slate-800 text-sm">{item.label}</span>
                    <span className="text-xs text-brand-orange-500 font-medium text-right shrink-0">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 2 */}
      <section className="py-20 bg-[#0e2f52] text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-slate-300 font-semibold text-sm mb-6">
              {isEn ? "Step 2" : "Étape 2"}
            </div>
            <h2 className="text-3xl font-bold mb-4">
              {isEn ? "A Secure Technology Arsenal" : "Un arsenal technologique sécurisé"}
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {isEn
                ? <>We eliminate hazardous traditional access methods that cause structural degradation. Our logistics rely on a <strong>hybrid fleet</strong>.</>
                : <>Nous bannissons les méthodes d&apos;accès classiques périlleuses et sources de dégradation structurelle. Notre logistique s&apos;appuie sur une <strong>flotte hybride</strong>.</>}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {(isEn ? [
              { title: "Aerial Spray Drones", desc: "For impossible access and great heights. High spray capacity, rapid coverage of vast surfaces, virtually unlimited altitude.", tag: "Impossible Access" },
              { title: "Ground Track Robots", desc: "Flat and delicate surfaces. Ultra-light (6 kg excl. brushes), combined hard and soft brushes. Ideal for photovoltaic panels.", tag: "Delicate Surface" },
              { title: "Technical Telescopic Poles", desc: "Precision finishing and work at human height. Surgical accuracy for details, joints and small-format surfaces.", tag: "Precision" },
            ] : [
              { title: "Drones aériens de pulvérisation", desc: "Pour les accès impossibles et la grande hauteur. Capacité de pulvérisation importante, couverture rapide de vastes surfaces, hauteur sans limite pratique.", tag: "Accès impossible" },
              { title: "Drones terrestres sur chenilles", desc: "Surfaces planes et fragiles. Ultra-légers (6 kg hors brosses), brosses dures et souples combinées. Idéals pour les panneaux photovoltaïques.", tag: "Surface délicate" },
              { title: "Perches télescopiques techniques", desc: "Finitions minutieuses et travaux à hauteur d'homme. Précision chirurgicale pour les détails, jonctions et surfaces de petit gabarit.", tag: "Précision" },
            ]).map((tech, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-orange-500/50 transition-colors">
                <span className="text-xs bg-brand-orange-500/20 text-brand-orange-400 px-3 py-1 rounded-full font-medium block mb-4 w-fit">{tech.tag}</span>
                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
            <p className="text-slate-300 text-sm">
              <strong className="text-white">{isEn ? "Regulatory framework:" : "Cadre reglementaire :"}</strong>{" "}
              <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34630" target="_blank" rel="noopener noreferrer" className="text-brand-orange-400 hover:underline">Service-Public.fr</a>
              {" · "}
              <a href="https://www.easa.europa.eu/en/domains/civil-drones" target="_blank" rel="noopener noreferrer" className="text-brand-orange-400 hover:underline">EASA (Civil Drones)</a>
            </p>
          </div>
        </div>
      </section>

      {/* STEP 3 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold text-sm mb-6">
                {isEn ? "Step 3" : "Étape 3"}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {isEn ? "Responsible Chemistry & Mechanical Action" : "La chimie raisonnée et l'action mécanique"}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {isEn
                  ? <>We precisely calibrate our force of action: use of <strong>high or low pressure</strong> is meticulously calculated according to the fragility of the coating.</>
                  : <>Nous adaptons strictement notre force d&apos;action : l&apos;utilisation de la <strong>haute ou basse pression</strong> est millimetrée selon la fragilité du revêtement.</>}
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                {isEn
                  ? <>This mechanical action is always combined with professional products guaranteed bleach-free, preserving the <strong>original waterproofing</strong> of your roofs and facades.</>
                  : <>Cette action mécanique est toujours couplée à des produits professionnels garantis sans Javel, préservant l&apos;<strong>imperméabilité originelle</strong> de vos toitures et façades.</>}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, color: "text-emerald-500", label: isEn ? "Bleach-free certified" : "Sans Javel certifié", desc: isEn ? "Preserves waterproofing" : "Préserve l'imperméabilité" },
                  { icon: Droplets, color: "text-blue-500", label: isEn ? "Osmosed water" : "Eau osmosée", desc: isEn ? "Glazing & solar panels" : "Vitrages et panneaux solaires" },
                  { icon: Leaf, color: "text-emerald-500", label: isEn ? "90%+ Biodegradable" : "Biodégradable 90%+", desc: isEn ? "Environmentally responsible" : "Respecte l'environnement" },
                  { icon: Zap, color: "text-brand-orange-500", label: isEn ? "Calibrated pressure" : "Pression adaptée", desc: isEn ? "Precisely matched to the surface" : "Millimetrée selon le support" },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className="font-bold text-slate-900 text-sm">{item.label}</span>
                    </div>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#0e2f52] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-brand-orange-400" />
                  <h3 className="text-xl font-bold">{isEn ? "Strict Regulatory Framework" : "Cadre Reglementaire strict"}</h3>
                </div>
                <div className="space-y-3">
                  {(isEn ? [
                    { title: "European Framework (STS-01/02 / SORA)", desc: <>Operators registered with DSAC. Prior declarations under the European framework (<strong>STS-01</strong>/<strong>STS-02</strong>).</> },
                    { title: "Aeronautical Civil Liability", desc: "Specific coverage for aerial work operations. Certificate provided before each project." },
                    { title: "Certibiocide", desc: <>Issued by the Ministry of Ecological Transition for pest treatment. Active <strong>Certibiocide</strong> accreditation.</> },
                  ] : [
                    { title: "Cadre Européen (STS-01/02 / SORA)", desc: <>Opérateurs enregistrés auprès de la DSAC. Déclarations préalables selon le cadre européen (<strong>STS-01</strong>/<strong>STS-02</strong>).</> },
                    { title: "RC Aéronautique", desc: "Couverture spécifique aux opérations de travail aérien. Attestation fournie avant chantier." },
                    { title: "Certibiocide", desc: <>Délivré par le Ministère de la Transition Écologique pour le traitement des nuisibles. Habilitation <strong>Certibiocide</strong> active.</> },
                  ]).map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-3 border-b border-white/10 last:border-0">
                      <FileCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-white text-sm">{item.title}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-brand-orange-50 rounded-2xl p-6 border border-brand-orange-100">
                <a href="https://www.inrs.fr/risques/chutes-hauteur/ce-qu-il-faut-retenir.html" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-orange-600 font-medium hover:underline">
                  {isEn ? "Working at height safety — INRS.fr →" : "Securite travaux en hauteur — INRS.fr →"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-[#1a3d65] text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isEn ? "The perfect method for your site" : "La méthode parfaite pour votre site"}
          </h2>
          <p className="text-slate-300 mb-10 text-lg">
            {isEn
              ? "Tell us about your building and constraints. We will propose the optimal protocol."
              : "Décrivez-nous votre bâtiment et vos contraintes. Nous vous proposerons le protocole optimal."}
          </p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            {isEn ? "Discuss Your Technical Constraints" : "Discuter de vos contraintes techniques"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
