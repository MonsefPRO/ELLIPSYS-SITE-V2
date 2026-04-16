import type { Metadata } from "next";
import Link from "next/link";
import { Building2, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Nettoyage Drone pour Immobilier & Syndics de Copropriete | Ellipsys",
  description: "Accompagnement des gestionnaires immobiliers. Rapports techniques avec photos pour AG, devis detailles, interventions sans nacelle.",
};

export default function ImmobilierSyndicsPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Toiture.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-[#0e2f52]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 text-brand-orange-400 font-bold text-sm mb-6 uppercase tracking-wider">Expertise Sectorielle</div>
          <h1 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            Immobilier & <span className="text-brand-orange-500">Syndics</span>
          </h1>
          <p className="text-xl lg:text-2xl font-light text-slate-300 border-l-4 border-brand-orange-500 pl-4 mx-auto max-w-3xl">
            {"L'entretien exterieur de vos coproprietes, sans contraintes logistiques."}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="prose prose-lg text-slate-600 max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-brand-orange-500" /> Accompagnement des gestionnaires
              </h2>
              <p>
                {"Nous savons que la gestion d'une copropriete implique des contraintes fortes : decisions en AG, budgets previsionnels, coordination avec les residents. Notre approche est pensee pour simplifier votre quotidien. Nous fournissons des devis detailles et des rapports techniques illustres pour faciliter la prise de decision collective."}
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                <FileText className="w-8 h-8 text-brand-orange-500" /> Rapports pour Assemblee Generale
              </h2>
              <p>
                {"Chaque intervention est documentee par un rapport photographique avant/apres et, sur demande, une inspection thermographique de la toiture. Ces elements constituent un dossier cle-en-main pour presenter l'etat du batiment en AG et justifier les travaux aupres des coproprietaires."}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">{"Pourquoi les syndics nous choisissent :"}</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Sans nacelle ni echafaudage", desc: "Aucune nuisance pour les residents et commerces de pied d'immeuble." },
                  { title: "Rapports techniques fournis", desc: "Photos avant/apres, thermographie, rapport PDF pour vos AG." },
                  { title: "Devis pro clairs", desc: "Tarifs transparents adaptes aux budgets de copropriete." },
                  { title: "Securite CARSAT", desc: "Aucune responsabilite transferee au syndic pour le travail en hauteur." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-6 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-slate-600 text-sm"><strong>{item.title} : </strong>{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 sticky top-28">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Tarifs professionnels</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {"Nous proposons des conditions tarifaires specifiques aux gestionnaires et syndics (contrats multi-batiments, interventions groupees). Contactez-nous pour un partenariat durable."}
              </p>
              <Link href="/devis" className="block w-full text-center bg-[#0e2f52] text-white py-4 rounded-xl font-bold shadow-md hover:bg-slate-800 transition-colors">
                Demander nos tarifs pro
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
