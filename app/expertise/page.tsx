import type { Metadata } from "next";
import { ShieldCheck, PlayCircle, CheckCircle2, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Entreprise de nettoyage et inspection par drone : Expertise, Parc Technologique | Ellipsys",
  description: "Decouvrez notre flotte technologique d'avant-garde (drones et robots) et nos engagements reglementaires (DGAC, EASA, Certibiocide).",
};

export default function ExpertisePage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">

      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/banner%20expertise.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-[#0e2f52]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            Une Flotte Technologique d&apos;Avant-Garde et des <span className="text-brand-orange-500">Valeurs Fortes</span>
          </h1>
          <p className="text-xl text-slate-300 font-light border-l-4 border-brand-orange-500 pl-4 mx-auto max-w-3xl">
            La technologie au service du resultat et de la securite.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-7xl">

        <div className="mb-20 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre Parc Robotique</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ellipsys ne s&apos;appuie que sur des constructeurs de reference pour garantir la securite et la qualite de chaque mission. Tous nos telepilotes operent en stricte conformite avec les reglementations de la DGAC et de l&apos;EASA.
          </p>
        </div>

        {/* MACHINE 1 : RONY */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-28">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-brand-orange-500/10 text-brand-orange-600 font-bold text-sm rounded-full tracking-wider uppercase">Robotique Terrestre</div>
            <h3 className="text-4xl font-black text-[#0e2f52]">Robot Rony</h3>
            <p className="text-lg text-slate-600 leading-relaxed">Le specialiste de la maintenance solaire. Concu pour intervenir sur les surfaces vitrees fragiles sans risque de micro-rayures.</p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> <strong>Poids :</strong> Ultra-leger (7kg)</li>
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> <strong>Rendement :</strong> 500 m2/h (reel terrain)</li>
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> <strong>Franchissement :</strong> Pentes jusqu&apos;a 35%</li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full h-[450px] bg-slate-200 rounded-3xl relative overflow-hidden group shadow-xl">
            <div className="absolute inset-0 bg-[url('/images/robot%20rony.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-[#0e2f52]/10 group-hover:bg-[#0e2f52]/30 transition-colors"></div>
            <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-white/80 group-hover:text-white transition-all group-hover:scale-110" />
          </div>
        </div>

        {/* MACHINE 2 : CHRONOS */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-28">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-brand-orange-500/10 text-brand-orange-600 font-bold text-sm rounded-full tracking-wider uppercase">Pulverisation Aerienne</div>
            <h3 className="text-4xl font-black text-[#0e2f52]">Drone Chronos</h3>
            <p className="text-lg text-slate-600 leading-relaxed">Le geant du nettoyage. Pense pour les interventions en tres grande hauteur, il remplace les echafaudages pour le nettoyage de facades et toitures.</p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> <strong>Pression :</strong> Haute pression jusqu&apos;a 110 bars</li>
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> <strong>Elevation :</strong> Capacite jusqu&apos;a 50 metres</li>
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> <strong>Certification :</strong> Classe C5/C6 europeenne</li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full h-[450px] bg-slate-200 rounded-3xl relative overflow-hidden group shadow-xl">
            <div className="absolute inset-0 bg-[url('/images/chronos%20drone.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-[#0e2f52]/10 group-hover:bg-[#0e2f52]/30 transition-colors"></div>
            <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-white/80 group-hover:text-white transition-all group-hover:scale-110" />
          </div>
        </div>

        {/* MACHINE 3 : MATRICE 4T */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-28">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-brand-orange-500/10 text-brand-orange-600 font-bold text-sm rounded-full tracking-wider uppercase">Inspection Technique</div>
            <h3 className="text-4xl font-black text-[#0e2f52]">DJI Matrice 4T</h3>
            <p className="text-lg text-slate-600 leading-relaxed">{"L'auditeur thermique par excellence. Un outil de precision chirurgicale pour detecter l'invisible sur les toitures, facades et parcs solaires."}</p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> <strong>Thermique :</strong> Capteur radiometrique 640x512</li>
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> <strong>Telemetrie :</strong> Laser d&apos;une portee de 1800m</li>
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> <strong>Precision :</strong> Capteur RTK integre</li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full h-[450px] bg-slate-200 rounded-3xl relative overflow-hidden group shadow-xl">
            <div className="absolute inset-0 bg-[url('/images/Dji%20matrice.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-[#0e2f52]/10 group-hover:bg-[#0e2f52]/30 transition-colors"></div>
            <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-white/80 group-hover:text-white transition-all group-hover:scale-110" />
          </div>
        </div>

        {/* MACHINE 4 : AIR 3S */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-28">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-brand-orange-500/10 text-brand-orange-600 font-bold text-sm rounded-full tracking-wider uppercase">Image de Luxe & FPV</div>
            <h3 className="text-4xl font-black text-[#0e2f52]">DJI Air 3S</h3>
            <p className="text-lg text-slate-600 leading-relaxed">Le vecteur d&apos;images de tres haute definition. Pense pour sublimer les domaines de prestige et realiser des visites immersives.</p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> <strong>Visuel :</strong> Capteur 1 pouce, 50 Megapixels</li>
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> <strong>Stabilite :</strong> Detection d&apos;obstacles omnidirectionnelle</li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full h-[450px] bg-slate-200 rounded-3xl relative overflow-hidden group shadow-xl">
            <div className="absolute inset-0 bg-[url('/images/Dji%20air%203S.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-[#0e2f52]/10 group-hover:bg-[#0e2f52]/30 transition-colors"></div>
            <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-white/80 group-hover:text-white transition-all group-hover:scale-110" />
          </div>
        </div>

        {/* AGRÉMENTS */}
        <div className="bg-[#0e2f52] p-10 lg:p-14 rounded-[2.5rem] text-white shadow-xl mt-12">
          <div className="flex items-center gap-4 mb-8">
            <ShieldCheck className="w-10 h-10 text-brand-orange-500" />
            <h2 className="text-3xl font-bold">Agréments & Assurances Professionnelles</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <FileCheck className="w-8 h-8 text-brand-orange-500" />
              <h4 className="font-bold text-lg">Certifications DGAC</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Licences A1, A2, A3 et CATS (Scenarios STS-01/02). Numero d&apos;exploitant UAS : FRA614b7zrptk0bp.</p>
            </div>
            <div className="space-y-3">
              <FileCheck className="w-8 h-8 text-brand-orange-500" />
              <h4 className="font-bold text-lg">Assurance Aerienne</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Couverture complete Responsabilite Civile (RC) Aerienne souscrite aupres de XL INSURANCE COMPANY SE.</p>
            </div>
            <div className="space-y-3">
              <FileCheck className="w-8 h-8 text-brand-orange-500" />
              <h4 className="font-bold text-lg">Habilitation Certibiocide</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Personnel forme et agree pour l&apos;application stricte et legale de produits de traitement et desinfection.</p>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
