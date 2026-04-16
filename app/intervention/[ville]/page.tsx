import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ChevronRight, CheckCircle2, Building2, Home } from "lucide-react";

type Props = { params: Promise<{ ville: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const villeName = resolvedParams.ville.charAt(0).toUpperCase() + resolvedParams.ville.slice(1).replace(/-/g, " ");
  return {
    title: `Nettoyage de facades, toitures et bardages a ${villeName} | Ellipsys`,
    description: `Entreprise specialisee en acces difficile a ${villeName}. Nettoyage technique, demoussage et thermographie pour professionnels et particuliers. Devis gratuit.`,
  };
}

export default async function VillePage({ params }: Props) {
  const resolvedParams = await params;
  const villeName = resolvedParams.ville.charAt(0).toUpperCase() + resolvedParams.ville.slice(1).replace(/-/g, " ");

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">
      <section className="bg-[#0e2f52] text-white py-20 lg:py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 text-brand-orange-400 font-bold text-sm mb-6">
            <MapPin className="w-4 h-4" /> Intervention sur site a {villeName}
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Expert en entretien exterieur et acces difficile a <span className="text-brand-orange-500">{villeName}</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Nous intervenons rapidement a {villeName} et son agglomeration pour l&apos;entretien technique de vos batiments industriels, tertiaires et residentiels.
          </p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange-500 text-white rounded-xl font-bold hover:bg-brand-orange-600 transition-colors shadow-lg">
            Demander un devis sur {villeName} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nos solutions techniques a {villeName}</h2>
            <p className="text-slate-600">Une methode non-intrusive adaptee aux contraintes locales et climatiques.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <Building2 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Pour les Professionnels</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Nettoyage de bardages industriels sans blocage.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Lavage d&apos;ombrieres photovoltaiques.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Inspection thermique par drone des toitures.</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <Home className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{"Pour les Particuliers & Coproprietes"}</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> {"Demoussage de toiture 'zero tuile cassee'."}</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Nettoyage de facades et crepis.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Traitement curatif et preventif longue duree.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
