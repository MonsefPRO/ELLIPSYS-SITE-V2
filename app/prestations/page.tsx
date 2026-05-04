import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sun, Home, Thermometer, Bug, Camera, Droplets } from "lucide-react";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Nos Solutions de Nettoyage et Inspection par Drone | Ellipsys",
  description: "Découvrez toutes les prestations Ellipsys : nettoyage solaire, façades, toitures, thermographie, éradication nuisibles et captation aérienne. Interventions sans nacelle, par drone et robot.",
};

export default async function PrestationsPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const solutions = [
    {
      icon: Sun,
      href: "/prestations/nettoyage-solaire",
      title: isEn ? "Solar Cleaning" : "Nettoyage Solaire",
      subtitle: isEn ? "Solar Energy · Drone · Yield" : "Énergie Solaire · Drone · Rendement",
      desc: isEn ? <><strong>Robot Rony</strong> (<strong>500 m²/h</strong>) and <strong>Drone Chronos</strong> for photovoltaic arrays. Soiling can cut your output by up to 30%. Annual contracts, <strong>osmosed water</strong>, CARSAT compliance.</> : <><strong>Robot Rony</strong> (<strong>500 m²/h</strong>) et <strong>drone Chronos</strong> pour parcs photovoltaïques. L&apos;encrassement peut amputer votre production jusqu&apos;à 30 %. Contrats annuels, <strong>eau osmosée</strong>, conformité CARSAT.</>,
      img: "/images/solairebanner.png",
    },
    {
      icon: Home,
      href: "/prestations/traitement-toiture",
      title: isEn ? "Roof Maintenance" : "Entretien de Toitures",
      subtitle: isEn ? "Roofs · Waterproofing · Heritage" : "Toitures · Hydrofuge · Patrimoine",
      desc: isEn ? <><strong>Certibiocide</strong> <strong>moss removal</strong> and <strong>waterproofing</strong> by drone without setting foot on the roof. ABF and listed building compatible. 5 to 10 years protection, zero fall risk.</> : <><strong>Démoussage</strong> <strong>Certibiocide</strong> et <strong>hydrofuge</strong> par drone sans monter sur la couverture. Compatible ABF, monuments historiques. Protection 5 à 10 ans, aucun risque de chute.</>,
      img: "/images/drone-toiture-intervention.png",
    },
    {
      icon: Droplets,
      href: "/prestations/nettoyage-facade",
      title: isEn ? "Façade & Cladding Cleaning" : "Nettoyage Façades & Bardages",
      subtitle: isEn ? "Façades & Cladding · Stone · Metal · Timber" : "Façades & Bardages · Pierre · Métal · Bois",
      desc: isEn ? <><strong>High-pressure</strong> cleaning by <strong>Drone Chronos</strong> on all façade types. <strong>No scaffolding</strong>, no road closure. Treatment of sea salt, Saharan rain, carbonaceous pollution.</> : <>Nettoyage <strong>haute pression</strong> par <strong>drone Chronos</strong> sur tous types de façades. <strong>Sans nacelle</strong>, sans fermeture de rue. Traitement sel marin, pluies sahariennes, pollution carbonée.</>,
      img: "/images/Barda.png",
    },
    {
      icon: Thermometer,
      href: "/prestations/thermographie",
      title: isEn ? "Aerial Thermography" : "Thermographie Aérienne",
      subtitle: isEn ? "Photovoltaic / Industrial / Buildings" : "Photovoltaïques / Usines / Bâtiments",
      desc: isEn ? <><strong>Thermal</strong> audit with <strong>DJI Matrice 4T</strong>: thermal bridges, defective PV cells, network leaks. Detailed PDF report within <strong>48h</strong>. Compliance with the <strong>Tertiary Decree</strong>.</> : <>Audit <strong>thermique</strong> <strong>DJI Matrice 4T</strong> : ponts thermiques, cellules PV défectueuses, fuites de réseaux. Rapport PDF détaillé sous <strong>48h</strong>. Conformité <strong>Décret Tertiaire</strong>.</>,
      img: "/images/thermographie-banner.png",
    },
    {
      icon: Bug,
      href: "/prestations/nuisibles",
      title: isEn ? "Pest Eradication" : "Éradication Nuisibles",
      subtitle: isEn ? "Hornets · Emergency · Certibiocide" : "Frelons · Urgence · Certibiocide",
      desc: isEn ? <>Destruction of Asian hornet nests at height by drone. Remote operators, <strong>precise biocide injection</strong>, physical nest removal. Intervention within <strong>2h</strong>.</> : <>Destruction de nids de frelons asiatiques en grande hauteur par drone. Opérateurs à distance, <strong>injection biocide</strong> précise, retrait physique du nid. Intervention sous <strong>2h</strong>.</>,
      img: "/images/bannerfrelons.png",
    },
    {
      icon: Camera,
      href: "/prestations/prises-de-vues",
      title: isEn ? "Aerial Imaging & Capture" : "Captation & Imagerie",
      subtitle: isEn ? "Events · Estates · Imaging" : "Événementiel · Domaines · Imagerie",
      desc: isEn ? <><strong>50 Mpx</strong> photography and cinematic <strong>4K/60fps</strong> video DJI Air 3S. All-inclusive pack: Lightroom retouching, editorial editing, multi-format exports. Deliverables within <strong>48h</strong>.</> : <>Photos <strong>50 Mpx</strong> et vidéo <strong>4K/60fps</strong> cinématographique DJI Air 3S. Pack clé-en-main : retouche Lightroom, montage éditorial, exports multi-formats. Livrables sous <strong>48h</strong>.</>,
      img: "https://images.pexels.com/photos/17590771/pexels-photo-17590771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">

      {/* BANNIÈRE */}
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-cover bg-center" style={{ backgroundImage: `url('/images/banner secteur.png')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/50 text-brand-orange-400 font-medium text-base mb-6">
              {isEn ? "Cleaning · Inspection · Imaging · Treatment" : "Nettoyage · Inspection · Imagerie · Traitement"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Overview of our" : "Vue d'ensemble de"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-amber-400">
                {isEn ? "Services" : "nos Solutions"}
              </span>
            </h1>
            <p className="text-xl text-brand-orange-300 font-semibold mb-4 italic">
              {isEn ? "Six specialised services. One trusted operator." : "Six prestations spécialisées. Un seul opérateur de confiance."}
            </p>
          </div>
        </div>
      </section>

      {/* 3 × 2 GRID */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group hover:shadow-lg transition-shadow duration-300"
              >
                {/* IMAGE */}
                <div className="h-56 relative overflow-hidden bg-slate-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${s.img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/30 bg-black/30 text-white text-xs font-bold backdrop-blur-sm">
                      <s.icon className="w-3.5 h-3.5" />
                      {s.subtitle.split(" · ")[0]}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <s.icon className="w-5 h-5 text-[#0e2f52] shrink-0" />
                    <h3 className="text-lg font-black text-slate-900">{s.title}</h3>
                  </div>
                  <p className="text-xs text-brand-orange-500 font-bold uppercase tracking-widest mb-4">
                    {s.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-6">
                    {s.desc}
                  </p>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1.5 text-[#0e2f52] font-bold text-sm hover:text-brand-orange-500 transition-colors group/link mt-auto"
                  >
                    {isEn ? "Discover this service" : "Découvrir la prestation"}
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-slate-900 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-orange-400 font-bold text-sm tracking-widest uppercase mb-4">
            {isEn ? "Multiple needs at once?" : "Plusieurs besoins à la fois ?"}
          </p>
          <h2 className="text-3xl font-bold text-white mb-6">
            {isEn ? "We provide combined quotes" : "Nous réalisons des devis combinés"}
          </h2>
          <p className="text-slate-300 mb-10 text-lg">
            {isEn
              ? "Roof + façade, solar + thermography… One point of contact, one mobilisation, one invoice."
              : "Toiture + façade, solaire + thermographie… Un seul interlocuteur, une seule mobilisation, une seule facture."}
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
          >
            {isEn ? "Request a combined quote" : "Demander un devis groupé"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
