import type { Metadata } from "next";
import { ShieldCheck, FileCheck } from "lucide-react";
import { MachineVideoCard } from "@/components/MachineVideoCard";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Technology Fleet & Expertise — Drone Cleaning & Inspection | Ellipsys",
  description: "Discover our cutting-edge technology fleet (drones and robots) and our regulatory credentials (DGAC, EASA, Certibiocide).",
};

export default async function ExpertisePage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const machines = [
    {
      category: isEn ? "Ground Robotics" : "Robotique Terrestre",
      name: "Robot Rony",
      tagline: isEn
        ? "The solar maintenance specialist. Engineered to operate on fragile glazed surfaces with zero risk of micro-scratching."
        : "Le spécialiste de la maintenance solaire. Conçu pour intervenir sur surfaces vitrées fragiles sans risque de micro-rayures.",
      img: "/images/robot rony.jpg",
      video: "/videos/Rony.mp4",
      specs: [
        { label: isEn ? "Weight" : "Poids", value: "7 kg" },
        { label: isEn ? "Output" : "Rendement", value: "500 m²/h" },
        { label: isEn ? "Max slope" : "Pente max", value: "35 %" },
        { label: isEn ? "Osmosed water" : "Eau osmosée", value: "0.5–2 L/m²" },
      ],
      accentColor: "from-emerald-600 to-teal-700",
      badgeColor: "bg-emerald-500/20 border-emerald-500/40 text-emerald-300",
    },
    {
      category: isEn ? "Aerial Spray" : "Pulvérisation Aérienne",
      name: "Drone Chronos",
      tagline: isEn
        ? <>The cleaning giant. Designed for very high-altitude operations, it replaces <strong>scaffolding</strong> for facades and rooftops.</>
        : <>Le géant du nettoyage. Pensé pour les interventions en très grande hauteur, il remplace les <strong>échafaudages</strong> pour façades et toitures.</>,
      img: "/images/chronos drone.jpg",
      video: "/videos/drone-chronos-demo.mp4",
      specs: [
        { label: isEn ? "Pressure" : "Pression", value: "110 bars" },
        { label: isEn ? "Elevation" : "Élévation", value: "50 m" },
        { label: isEn ? "Certification" : "Certification", value: "C5/C6 EASA" },
        { label: isEn ? "Endurance" : "Autonomie", value: isEn ? "Extended range" : "Longue durée" },
      ],
      accentColor: "from-brand-orange-600 to-amber-700",
      badgeColor: "bg-brand-orange-500/20 border-brand-orange-500/40 text-brand-orange-300",
    },
    {
      category: isEn ? "Technical Inspection" : "Inspection Technique",
      name: "DJI Matrice 4T",
      tagline: isEn
        ? <>The thermal <strong>auditing</strong> benchmark. A surgical-precision instrument for detecting the invisible on rooftops, facades and solar farms.</>
        : <>L&apos;auditeur <strong>thermique</strong> par excellence. Un outil de précision chirurgicale pour détecter l&apos;invisible sur toitures, façades et parcs solaires.</>,
      img: "/images/Dji matrice.jpg",
      video: "/videos/MATRICE4.mp4",
      specs: [
        { label: isEn ? "Thermal sensor" : "Capteur thermique", value: "640 × 512 px" },
        { label: isEn ? "Laser ranging" : "Télémétrie laser", value: "1,800 m" },
        { label: isEn ? "GPS accuracy" : "Précision GPS", value: "RTK integrated" },
        { label: isEn ? "Deliverables" : "Livrables", value: isEn ? "Report 48h" : "Rapport 48h" },
      ],
      accentColor: "from-blue-600 to-cyan-700",
      badgeColor: "bg-blue-500/20 border-blue-500/40 text-blue-300",
    },
    {
      category: isEn ? "Aerial Imaging" : "Captation & Imagerie",
      name: "DJI Air 3S",
      tagline: isEn
        ? "The ultra-high-definition imaging platform. Designed to showcase prestige properties and deliver immersive virtual tours."
        : "Le vecteur d'images de très haute définition. Pensé pour sublimer les domaines de prestige et réaliser des visites immersives.",
      img: "/images/3s.png",
      video: "/videos/DJIAIR.mp4",
      specs: [
        { label: isEn ? "Sensor" : "Capteur", value: "1\" CMOS" },
        { label: isEn ? "Photo resolution" : "Résolution photo", value: "50 Mpx" },
        { label: isEn ? "Video" : "Vidéo", value: "4K / 60fps 10bit" },
        { label: isEn ? "Dynamic range" : "Dynamique", value: "D-Log M 12.8 stops" },
      ],
      accentColor: "from-violet-600 to-purple-800",
      badgeColor: "bg-violet-500/20 border-violet-500/40 text-violet-300",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">

      {/* BANNIÈRE */}
      <section className="relative bg-[#0e2f52] text-white py-24 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-cover bg-center" style={{ backgroundImage: `url('/images/bannerflotte.png')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/50 text-brand-orange-400 font-medium text-base mb-6">
              {isEn ? "Technology Fleet · Credentials · Know-How" : "Parc Technologique · Agréments · Savoir-Faire"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "An Industry-Leading" : "Une Flotte Technologique"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-amber-400">
                {isEn ? "Technology Fleet" : "d'Avant-Garde"}
              </span>
            </h1>
            <p className="text-xl text-brand-orange-300 font-semibold mb-4 italic">
              {isEn
                ? "Technology engineered for results and safety."
                : "La technologie au service du résultat et de la sécurité."}
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {isEn ? "Our Robotic Fleet" : "Notre Parc Robotique"}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {isEn
                ? <>Ellipsys relies exclusively on industry-leading manufacturers to guarantee the safety and quality of every mission. All our remote pilots operate in strict compliance with the regulations of <strong>DGAC</strong> and <strong>EASA</strong>.</>
                : <>Ellipsys ne s&apos;appuie que sur des constructeurs de référence pour garantir la sécurité et la qualité de chaque mission. Tous nos télépilotes opèrent en stricte conformité avec les réglementations de la <strong>DGAC</strong> et de l&apos;<strong>EASA</strong>.</>}
            </p>
          </div>
        </div>
      </section>

      {/* MACHINES */}
      <section className="py-12 container mx-auto px-4 max-w-7xl space-y-20">
        {machines.map((m, i) => (
          <div key={i} className="flex flex-col lg:flex-row items-stretch gap-8">
            <div className="lg:w-1/2">
              <div className="bg-[#0e2f52] rounded-3xl p-8 lg:p-10 h-full flex flex-col shadow-xl">
                <div className={`inline-flex items-center self-start px-3 py-1.5 rounded-full border text-xs font-black tracking-widest uppercase mb-6 ${m.badgeColor}`}>
                  {m.category}
                </div>
                <h3 className="text-4xl font-black text-white mb-4">{m.name}</h3>
                <p className="text-slate-300 leading-relaxed mb-8 text-base">{m.tagline}</p>
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  {m.specs.map((spec, j) => (
                    <div key={j} className="bg-white/8 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1.5">{spec.label}</p>
                      <p className="text-white font-black text-base leading-tight">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <MachineVideoCard img={m.img} name={m.name} video={m.video} />
          </div>
        ))}
      </section>

      {/* AGRÉMENTS */}
      <section className="py-12 container mx-auto px-4 max-w-7xl">
        <div className="bg-[#0e2f52] p-10 lg:p-14 rounded-[2.5rem] text-white shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <ShieldCheck className="w-10 h-10 text-brand-orange-500" />
            <h2 className="text-3xl font-bold">
              {isEn ? "Credentials & Professional Insurance" : "Agréments & Assurances Professionnelles"}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <FileCheck className="w-8 h-8 text-brand-orange-500" />
              <h4 className="font-bold text-lg">{isEn ? "DGAC Certifications" : "Certifications DGAC"}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {isEn
                  ? <>Licences A1, A2, A3 and CATS (Scenarios <strong>STS-01</strong>/<strong>STS-02</strong>). UAS operator number: FRA614b7zrptk0bp.</>
                  : <>Licences A1, A2, A3 et CATS (Scénarios <strong>STS-01</strong>/<strong>STS-02</strong>). Numéro d&apos;exploitant UAS : FRA614b7zrptk0bp.</>}
              </p>
            </div>
            <div className="space-y-3">
              <FileCheck className="w-8 h-8 text-brand-orange-500" />
              <h4 className="font-bold text-lg">{isEn ? "Aerial Insurance" : "Assurance Aérienne"}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {isEn
                  ? "Comprehensive Aerial Civil Liability (RC) insurance underwritten with XL INSURANCE COMPANY SE."
                  : "Couverture complète Responsabilité Civile (RC) Aérienne souscrite auprès de XL INSURANCE COMPANY SE."}
              </p>
            </div>
            <div className="space-y-3">
              <FileCheck className="w-8 h-8 text-brand-orange-500" />
              <h4 className="font-bold text-lg">{isEn ? "Certibiocide Accreditation" : "Habilitation Certibiocide"}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {isEn
                  ? <>Staff trained and accredited <strong>Certibiocide</strong> for the strict and lawful application of treatment and disinfection products.</>
                  : <>Personnel formé et agréé <strong>Certibiocide</strong> pour l&apos;application stricte et légale de produits de traitement et désinfection.</>}
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
