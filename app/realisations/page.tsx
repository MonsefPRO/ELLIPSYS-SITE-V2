import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Home, MapPin, Clock, Target, ChevronRight } from "lucide-react";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Portfolio de nos interventions par drone : Avant / Après | Ellipsys",
  description: "Découvrez nos derniers chantiers en images. Des résultats concrets avant/après pour résoudre les problématiques d'accès complexes.",
};

export default async function RealisationsPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-cover bg-center" style={{ backgroundImage: `url('/images/accueil.png')` }} />
        <div className="brand-tint" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/50 text-brand-orange-400 font-medium text-base mb-6">
              {isEn ? "Portfolio · Before / After · Results" : "Portfolio · Avant / Après · Résultats"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Our Portfolio:" : "Nos Réalisations :"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-amber-400">
                {isEn ? "Results Above All" : "Le Résultat Avant Tout"}
              </span>
            </h1>
            <p className="text-xl text-brand-orange-300 font-semibold mb-4 italic">
              {isEn ? "The proof of our engineering through images." : "La preuve de notre ingénierie par l'image."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* PROJECT 1 : SCUTUM MONTPELLIER */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
            <div className="relative h-52 md:h-64">
              <div className="absolute inset-0 bg-[url('/images/SCUTUMFACADE.png')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-black tracking-widest shadow-md">{isEn ? "AFTER" : "APRÈS"}</span>
              </div>
              <div className="absolute bottom-3 right-3">
                <span className="bg-black/50 text-white px-2 py-1 rounded-lg text-xs font-semibold backdrop-blur-sm">{isEn ? "Real photo — Ellipsys project" : "Photo réelle — Chantier Ellipsys"}</span>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-7 h-7 text-brand-orange-500 shrink-0" />
                <h2 className="text-xl font-bold text-[#0e2f52]">{isEn ? "Glazing Cleaning — Scutum Montpellier" : "Nettoyage de Vitrages — Scutum Montpellier"}</h2>
              </div>
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-slate-100 text-sm">
                <div className="flex items-center gap-2 text-slate-600"><MapPin className="w-4 h-4 text-slate-400" /> Montpellier (34)</div>
                <div className="flex items-center gap-2 text-slate-600"><Clock className="w-4 h-4 text-slate-400" /> {isEn ? "2 Days" : "2 Jours"}</div>
                <div className="flex items-center gap-2 text-slate-600"><Target className="w-4 h-4 text-slate-400" /> Drone Chronos</div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                <strong>{isEn ? "The challenge:" : "Le défi :"}</strong> {isEn ? "Complete glazing cleaning of 2 façades of a B2B professional building, without disrupting site activity." : "Nettoyage complet des vitrages de 2 façades d'un bâtiment professionnel B2B, sans perturbation de l'activité du site."}<br /><br />
                <strong>{isEn ? "Our approach:" : "Notre action :"}</strong> {isEn ? <>Intervention by <strong>Drone Chronos</strong> across both glazed façades. Impeccable result in 2 days, <strong>no cherry picker</strong>, <strong>no ground footprint</strong>.</> : <>Intervention par <strong>drone Chronos</strong> sur l&apos;ensemble des deux façades vitrées. Résultat impeccable en 2 jours, <strong>aucune nacelle</strong>, <strong>aucune emprise au sol</strong>.</>}
              </p>
              {/* Google review */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600 italic leading-relaxed">&ldquo;{isEn ? "Very professional company that handled the drone façade cleaning of one of our buildings. Serious work, efficient and well-organised team." : "Entreprise très professionnelle qui a pris en charge le nettoyage de façade de l'un de nos bâtiments par drone. Travail sérieux, équipe efficace et bien organisée."}&rdquo;</p>
                <p className="text-xs text-slate-400 mt-2 font-semibold">S Scutum · {isEn ? "Google Review · Visited in April" : "Avis Google · Visité en avril"}</p>
              </div>
              <Link href="/prestations/nettoyage-facade" className="inline-flex items-center gap-2 font-bold text-brand-orange-500 hover:gap-4 transition-all text-sm mt-4">
                {isEn ? "Discover our façade cleaning expertise" : "Découvrir l'expertise nettoyage de façades"} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* PROJECT 2 : DEMOUSSAGE TOITURE EIMARGUES */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
            <div className="relative h-52 md:h-64">
              <div className="absolute inset-0 bg-[url('/images/demoussage-toiture-eimargues.jpg')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-black tracking-widest shadow-md">{isEn ? "AFTER" : "APRÈS"}</span>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-black tracking-widest shadow-md">{isEn ? "BEFORE" : "AVANT"}</span>
              </div>
              <div className="absolute bottom-3 right-3">
                <span className="bg-black/50 text-white px-2 py-1 rounded-lg text-xs font-semibold backdrop-blur-sm">{isEn ? "Real photo — Ellipsys project" : "Photo réelle — Chantier Ellipsys"}</span>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-7 h-7 text-brand-orange-500 shrink-0" />
                <h2 className="text-xl font-bold text-[#0e2f52]">{isEn ? "Roof Moss Treatment — Aimargues" : "Démoussage de Toiture — Aimargues"}</h2>
              </div>
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-slate-100 text-sm">
                <div className="flex items-center gap-2 text-slate-600"><MapPin className="w-4 h-4 text-slate-400" /> Aimargues (30)</div>
                <div className="flex items-center gap-2 text-slate-600"><Clock className="w-4 h-4 text-slate-400" /> {isEn ? "1 Day" : "1 Journée"}</div>
                <div className="flex items-center gap-2 text-slate-600"><Target className="w-4 h-4 text-slate-400" /> {isEn ? "Biocide Treatment + High Pressure" : "Produit Choc + Haute Pression"}</div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                <strong>{isEn ? "The challenge:" : "Le défi :"}</strong> {isEn ? "Canal-tiled roof of a private residence, heavily encrusted with mosses and lichens. Full intervention to be completed in a single day." : "Toiture en tuiles canal d'un particulier, fortement encrassée par mousses et lichens. Intervention complète à réaliser en une seule journée."}<br /><br />
                <strong>{isEn ? "Our approach:" : "Notre action :"}</strong> {isEn ? <>Application of an approved <strong>Certibiocide</strong> biocide treatment, followed by a <strong>high-pressure</strong> rinse. Immediate result: full restoration of the natural tile colour, as evidenced by the before/after photo above.</> : <>Application d&apos;un produit choc biocide homologué <strong>Certibiocide</strong>, suivi d&apos;un rinçage à <strong>haute pression</strong>. Résultat immédiat : restitution totale de la couleur naturelle des tuiles, comme en témoigne la photo avant/après ci-dessus.</>}
              </p>
              {/* Google review */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600 italic leading-relaxed">&ldquo;{isEn ? "Moss treatment on my roof, it looks brand new!! Highly skilled, competent and pleasant staff." : "Démoussage de ma toiture, elle est comme neuve!! Un personnel de qualité, compétent et agréable."}&rdquo;</p>
                <p className="text-xs text-slate-400 mt-2 font-semibold">Nathalie Gombart · {isEn ? "Google Review · Visited in April" : "Avis Google · Visité en avril"}</p>
              </div>
              <Link href="/prestations/traitement-toiture" className="inline-flex items-center gap-2 font-bold text-brand-orange-500 hover:gap-4 transition-all text-sm mt-4">
                {isEn ? "Discover our roof maintenance expertise" : "Découvrir l'expertise entretien de toiture"} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          </div>
        </div>
      </section>
    </main>
  );
}
