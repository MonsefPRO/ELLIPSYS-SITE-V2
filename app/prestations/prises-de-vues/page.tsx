import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Video, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Prises de vues aeriennes par drone, video FPV et valorisation immobiliere de prestige | Ellipsys",
  description: "Sublimez votre patrimoine avec des visuels cinematographiques. Drones FPV pour visites immersives et prises de vues haute definition.",
};

export default function PrisesDeVuesPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">

      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Drone.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-[#0e2f52]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            Captation Audiovisuelle et <span className="text-brand-orange-500">Visite FPV</span>
          </h1>
          <p className="text-xl lg:text-2xl font-light text-slate-300 border-l-4 border-brand-orange-500 pl-4 mx-auto max-w-3xl">
            {"Revelez la veritable dimension de votre patrimoine."}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <Video className="w-10 h-10 text-brand-orange-500 mb-6" />
                <h2 className="text-xl font-bold text-slate-900 mb-4">Qualite Cinematographique</h2>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {"Dans l'immobilier de prestige ou l'evenementiel, la qualite visuelle est le premier declencheur d'achat. Nous utilisons des aeronefs de derniere generation (DJI Air 3S) avec capteurs 1 pouce (50 Megapixels) pour capturer des plans nets et colores (10 bits), meme au crepuscule."}
                </p>
              </div>
              <div className="bg-[#0e2f52] text-white p-8 rounded-3xl shadow-sm">
                <Sparkles className="w-10 h-10 text-brand-orange-500 mb-6" />
                <h2 className="text-xl font-bold mb-4">Experience Immersive FPV</h2>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {"Pour les chateaux, domaines viticoles ou villas d'architecte, nous realisons des vols en immersion totale (FPV). Cette technique permet de filmer en plan-sequence continu, plongeant des exterieurs majestueux pour s'infiltrer a l'interieur des pieces."}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{"Valorisez votre patrimoine :"}</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Acceleration de la Decision d'Achat",
                    desc: "La video aerienne et l'immersion FPV apportent une transparence totale sur les proportions d'un bien, repondant aux interrogations de l'acheteur avant meme sa visite physique, reduisant ainsi drastiquement le cycle de vente."
                  },
                  {
                    title: "Mise en Valeur du Patrimoine",
                    desc: "Captees avec des equipements de derniere generation, nos images justifient le positionnement haut de gamme de vos proprietes."
                  }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <div className="text-slate-600 text-sm leading-relaxed">
                      <strong className="text-slate-900 block mb-1">{item.title} :</strong>{item.desc}
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
                {"Dans l'immobilier de prestige, l'immersion est le premier vecteur de vente. Une video aerienne en qualite cinematographique ou une visite FPV fluide permet a l'acquereur de se projeter immediatement. C'est un outil de conversion direct qui demarque instantanement votre offre de la concurrence."}
              </p>
              <Link href="/devis" className="block w-full text-center bg-[#0e2f52] text-white py-4 rounded-xl font-bold shadow-md hover:bg-slate-800 transition-colors">
                Obtenir un devis audiovisuel
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
