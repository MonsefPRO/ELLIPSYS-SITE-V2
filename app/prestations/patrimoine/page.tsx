import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Landmark, Shield, Scale, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Entretien et protection de patrimoine et ouvrages fragiles | Ellipsys",
  description: "Methodes douces pour batiments historiques, pierre de taille et enduits traditionnels. Respect des prescriptions des Architectes des Batiments de France (ABF).",
};

export default function PatrimoinePage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Drone.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e2f52] via-[#0e2f52]/85 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-400 font-medium text-sm mb-6">
              Bati Ancien · Monuments · ABF
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              Entretien, traitement et inspection de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-brand-orange-400">
                patrimoine et ouvrages sensibles
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Les batiments historiques exigent des precautions extremes. Nous intervenons avec methodes douces et agents neutres pour preserver chaque materiau de toute erosion.
            </p>
            <Link href="/devis" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-brand-orange-500 text-white rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg w-fit">
              Etude patrimoine personnalisee <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="w-6 h-6 text-purple-600" />
                <h2 className="text-3xl font-bold text-slate-900">Protection du bati ancien</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                Les batiments historiques exigent des precautions extremes. Nous utilisons des methodes d&apos;intervention douces — <strong className="text-slate-900">pulverisation tres basse pression</strong>, agents fongicides neutres — pour nettoyer les facades en pierre de taille, les enduits traditionnels ou les toitures anciennes.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Pierre de taille", "Enduits traditionnels", "Toitures en ardoise", "Lauze & tuiles canal", "Pierres calcaires", "Colombages"].map((mat, i) => (
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
                <h3 className="text-xl font-bold text-slate-900">Prudence et methode</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Chaque intervention est precedee d&apos;un diagnostic technique rigoureux pour identifier :
              </p>
              <ul className="space-y-2">
                {[
                  "La fragilite et la nature des materiaux",
                  "Le degre de porosite du support",
                  "La presence de micro-fissures",
                  "Les traitements anterieurs eventuels",
                ].map((item, i) => (
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
                <h2 className="text-3xl font-bold text-slate-900">Respect des prescriptions ABF</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                Pour les ouvrages situes en secteurs proteges ou aux abords de monuments historiques, nos protocoles respectent scrupuleusement les prescriptions edictees par les <strong className="text-slate-900">Architectes des Batiments de France (ABF)</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Cadre legal : <strong>article L. 621-31 du Code du patrimoine</strong>. Nous vous accompagnons dans le respect des demarches et declarations prealables obligatoires.
              </p>
              <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F36779" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-600 font-medium hover:underline text-sm">
                En savoir plus sur les regles ABF (service-public.gouv.fr) →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-purple-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-5">Nous vous accompagnons pour :</h3>
              <ul className="space-y-3">
                {[
                  "Verification de l'appartenance au perimetre protege",
                  "Conseil sur les produits compatibles prescrits",
                  "Declaration prealable de travaux si necessaire",
                  "Respect du coloris et de la texture d'origine",
                  "Documentation pour le dossier de suivi patrimonial",
                ].map((item, i) => (
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
          <h2 className="text-3xl font-bold text-white mb-6">{"Votre patrimoine merite le soin qu'il a toujours eu"}</h2>
          <p className="text-slate-300 mb-10 text-lg">
            Chaque batiment ancien est unique. Partagez-nous votre projet et nous vous proposerons un protocole adapte.
          </p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-500 to-brand-orange-500 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            Etude patrimoine personnalisee <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
