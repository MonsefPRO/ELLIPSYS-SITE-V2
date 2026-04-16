import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Inspection technique et thermographie aerienne par drone pour le batiment et l'industrie | Ellipsys",
  description: "Detectez l'invisible avec la thermographie par drone. Audits energetiques, detection de fuites, maintenance de parcs solaires.",
};

export default function ThermographiePage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">

      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Thermographie.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-[#0e2f52]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            Thermographie Aerienne et <span className="text-brand-orange-500">Inspection Technique</span>
          </h1>
          <p className="text-xl lg:text-2xl font-light text-slate-300 border-l-4 border-brand-orange-500 pl-4 mx-auto max-w-3xl">
            {"Detectez l'invisible pour agir avec justesse."}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Enjeux Energetiques (Decret Tertiaire)</h2>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {"Saviez-vous que 50% des deperditions energetiques s'echappent par la toiture ? Equipes de la gamme DJI Matrice 4T (cameras radiometriques 640x512), nous detectons instantanement les ponts thermiques et les defauts d'isolation, sans interruption de vos sites de production."}
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Maintenance Photovoltaique</h2>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {"Sur de vastes hectares solaires, la thermographie par drone permet un survol rapide pour identifier immediatement les cellules mortes, les zones deconnectees et les points chauds (Hotspots). Ces donnees securisent vos investissements et ciblent la maintenance."}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{"Les atouts de l'inspection aerienne :"}</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Une Precision Prouvee (INES)",
                    desc: "La vue zenitale permet de detecter une ecrasante majorite des anomalies invisibles au sol (cellules mortes, PID, effets Hot Spot)."
                  },
                  {
                    title: "Livrables Precis",
                    desc: "Rapport technique detaille (PDF) incluant annotations, orthophotographies, cartes thermiques geolocalisees, et modeles 3D pour vos logiciels BIM."
                  },
                  {
                    title: "Velocite et Reduction des Couts",
                    desc: "L'audit exhaustif d'une centrale s'effectue en quelques heures par aeronef, reduisant drastiquement vos couts d'inspection."
                  }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <div className="text-slate-600 text-sm leading-relaxed">
                      <strong className="text-slate-900">{item.title} : </strong>{item.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 sticky top-28">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">{"L'avis de l'expert Ellipsys :"}</h3>
              <p className="italic text-sm text-slate-600 leading-relaxed mb-8">
                {"L'inspection thermographique par drone est devenue incontournable. La vue zenitale est la seule capable de detecter de maniere exhaustive les cellules defectueuses sur un parc solaire ou les ponts thermiques d'une toiture-terrasse, le tout en une fraction du temps d'un audit classique."}
              </p>
              <Link href="/devis" className="block w-full text-center bg-[#0e2f52] text-white py-4 rounded-xl font-bold shadow-md hover:bg-slate-800 transition-colors">
                Demander un diagnostic
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
