import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Scale, Leaf, FileCheck, BrainCircuit, Droplets, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Notre methode d'intervention : l'ingenierie au service de la matiere | Ellipsys",
  description: "Analyse prealable, arsenal technologique securise, chimie raisonnee. Notre methode d'intervention respecte systematiquement l'integrite de vos supports.",
};

export default function MethodeGarantiesPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      {/* HERO */}
      <section className="bg-[#0e2f52] text-white py-20 lg:py-32 text-center px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-slate-300 font-bold text-sm mb-8 border border-white/10">
            <BrainCircuit className="w-4 h-4" /> Notre Doctrine
          </div>
          <h1 className="text-3xl lg:text-5xl font-black mb-8 leading-tight">
            Notre methode d&apos;intervention :<br />
            <span className="text-brand-orange-400">{"L'ingenierie au service de la matiere"}</span>
          </h1>
          <p className="text-2xl text-slate-300 font-medium italic leading-relaxed max-w-3xl mx-auto">
            &quot;{"L'outil s'adapte au batiment, et non l'inverse."}&quot;
          </p>
        </div>
      </section>

      {/* ETAPE 1 : DIAGNOSTIC */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange-50 text-brand-orange-600 font-semibold text-sm mb-6">
                Etape 1
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{"L'analyse prealable et le diagnostic"}</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {"Chez Ellipsys, le support dicte la methode. On ne nettoie pas une pierre calcaire poreuse comme un panneau sandwich metallique."}
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                {"L'evaluation de la chimie du support est l'etape primordiale pour definir avec precision l'agent nettoyant necessaire et le vecteur d'application le plus approprie."}
              </p>
              <div className="space-y-3">
                {[
                  "Identification de la nature du materiau (metal, pierre, verre, enduit)",
                  "Evaluation du niveau de porosite et de fragilite",
                  "Analyse des pathologies presentes (biologique, carbonee, calcaire)",
                  "Definition du protocole chimique adapte",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-brand-orange-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Notre outil decide selon :</h3>
              <div className="space-y-4">
                {[
                  { label: "Hauteur du batiment", desc: "Drone aerien au-dela de 12-15m" },
                  { label: "Fragilite du support", desc: "Perches telescopiques sur ardoises fragiles" },
                  { label: "Pente de la toiture", desc: "Robot terrestre < 35%, drone au-dela" },
                  { label: "Surface a traiter", desc: "Drone pour > 500m2, perches pour finitions" },
                ].map((item, i) => (
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

      {/* ETAPE 2 : ARSENAL TECHNOLOGIQUE */}
      <section className="py-20 bg-[#0e2f52] text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-slate-300 font-semibold text-sm mb-6">
              Etape 2
            </div>
            <h2 className="text-3xl font-bold mb-4">Un arsenal technologique securise</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {"Nous bannissons les methodes d'acces classiques perilleuses et sources de degradation structurelle. Notre logistique s'appuie sur une flotte hybride."}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Drones aeriens de pulverisation",
                desc: "Pour les acces impossibles et la grande hauteur. Capacite de pulverisation importante, couverture rapide de vastes surfaces, hauteur sans limite pratique.",
                tag: "Acces impossible",
              },
              {
                title: "Drones terrestres sur chenilles",
                desc: "Surfaces planes et fragiles. Ultra-legers (6 kg hors brosses), brosses dures et souples combinees. Ideals pour les panneaux photovoltaiques.",
                tag: "Surface delicate",
              },
              {
                title: "Perches telescopiques techniques",
                desc: "Finitions minutieuses et travaux a hauteur d'homme. Precision chirurgicale pour les details, jonctions et surfaces de petit gabarit.",
                tag: "Precision",
              },
            ].map((tech, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-orange-500/50 transition-colors">
                <span className="text-xs bg-brand-orange-500/20 text-brand-orange-400 px-3 py-1 rounded-full font-medium block mb-4 w-fit">{tech.tag}</span>
                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
            <p className="text-slate-300 text-sm">
              <strong className="text-white">Cadre reglementaire :</strong>{" "}
              <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34630" target="_blank" rel="noopener noreferrer" className="text-brand-orange-400 hover:underline">Service-Public.fr</a>
              {" · "}
              <a href="https://www.easa.europa.eu/en/domains/civil-drones" target="_blank" rel="noopener noreferrer" className="text-brand-orange-400 hover:underline">EASA (Civil Drones)</a>
            </p>
          </div>
        </div>
      </section>

      {/* ETAPE 3 : CHIMIE RAISONNÉE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold text-sm mb-6">
                Etape 3
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{"La chimie raisonnee et l'action mecanique"}</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {"Nous adaptons strictement notre force d'action : l'utilisation de la haute ou basse pression est milimetree selon la fragilite du revetement."}
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                {"Cette action mecanique est toujours couplee a des produits professionnels garantis sans Javel, preservant l'impermeabilite originelle de vos toitures et facades."}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, color: "text-emerald-500", label: "Sans Javel certifie", desc: "Preserve l'impermeabilite" },
                  { icon: Droplets, color: "text-blue-500", label: "Eau osmosee", desc: "Vitrages et panneaux solaires" },
                  { icon: Leaf, color: "text-emerald-500", label: "Biodegradable 90%+", desc: "Respecte l'environnement" },
                  { icon: Zap, color: "text-brand-orange-500", label: "Pression adaptee", desc: "Milimetree selon le support" },
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
                  <h3 className="text-xl font-bold">Cadre Reglementaire strict</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { title: "Cadre Europeen (STS-01/02 / SORA)", desc: "Operateurs enregistres aupres de la DSAC. Declarations prealables selon le cadre europeen." },
                    { title: "RC Aeronautique", desc: "Couverture specifique aux operations de travail aerien. Attestation fournie avant chantier." },
                    { title: "Certibiocide", desc: "Delivre par le Ministere de la Transition Ecologique pour le traitement des nuisibles." },
                  ].map((item, i) => (
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
                  Securite travaux en hauteur — INRS.fr →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-[#1a3d65] text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">La methode parfaite pour votre site</h2>
          <p className="text-slate-300 mb-10 text-lg">{"Decrivez-nous votre batiment et vos contraintes. Nous vous proposerons le protocole optimal."}</p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            Discuter de vos contraintes techniques <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
