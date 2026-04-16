import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Factory, TestTube, Building, Landmark, Sun, Ship, School } from "lucide-react";

export const metadata: Metadata = {
  title: "Expertises Sectorielles : Industrie, Batiment, Solaire, Maritime et Habitat | Ellipsys",
  description: "Des protocoles d'intervention sur mesure. Decouvrez nos solutions pour l'industrie, les syndics, les monuments historiques et l'energie solaire.",
};

const secteursGrille = [
  {
    icon: TestTube,
    href: "/secteurs/haute-exigence",
    title: "Secteurs a Haute Exigence",
    desc: "Pharma & Agroalimentaire : Maitrise stricte des risques de contamination. Nous respectons la norme NF EN 1672-2 en garantissant l'hygiene et la nettoyabilite parfaite des infrastructures exterieures (silos, toitures).",
    desc2: "Aeronautique : Nettoyage de precision de vos infrastructures (batiments d'assemblage, hangars) repondant aux normes de securite strictes du secteur.",
    img: "/images/secteur-haute-exigence.jpg",
  },
  {
    icon: Building,
    href: "/secteurs/immobilier-syndics",
    title: "Immobilier & Syndics",
    desc: "Nous accompagnons les gestionnaires de biens dans la valorisation de leurs actifs. Nous facilitons le travail des syndics en executant une maintenance preventive rigoureuse (facades, toitures, vitrages inaccessibles) et en fournissant des rapports visuels d'inspection complets, indispensables lors des assemblees generales.",
    img: "/images/secteur-syndic.jpg",
  },
  {
    icon: Landmark,
    href: "/secteurs/monuments-historiques",
    title: "Monuments Historiques (ABF)",
    desc: "Pour le bati ancien, le drone est une avancee majeure. Nos interventions douces respectent les regles de preservation du Ministere de la Culture et sont soumises a l'obtention des autorisations prealables (Article L. 621-31 du Code du patrimoine) aupres des Architectes des Batiments de France sans necessiter d'echafaudages.",
    img: "/images/secteur-monuments.jpg",
  },
  {
    icon: Sun,
    href: "/secteurs/energie-solaire",
    title: "Acteurs de l'Energie Solaire",
    desc: "L'encrassement reduit mathematiquement vos revenus. Nous assurons un suivi regulier et un nettoyage hybride via nos robots terrestres Rony (pour les parcs au sol) et nos drones aeriens (pour les grandes toitures). Une solution directe pour securiser et perenniser votre retour sur investissement.",
    img: "/images/secteur-solaire.jpg",
  },
  {
    icon: Ship,
    href: "/secteurs/maritime-plaisance",
    title: "Milieu Maritime & Plaisance",
    desc: "En bord de mer, les embruns marins accelerent violemment la corrosion electrochimique des metaux. Nous appliquons des protocoles de Dessalage : un rincage technique preventif des structures littorales pour evacuer les chlorures, prolongeant la vie de vos facades et infrastructures navales.",
    img: "/images/secteur-maritime.jpg",
  },
  {
    icon: School,
    href: "/secteurs/collectivites",
    title: "Collectivites & Espace Public",
    desc: "Nous offrons un service respectueux des infrastructures publiques. Notre methode par drone permet d'entretenir les mairies, les ecoles et les ouvrages d'art avec une rapidite d'execution inegalee (possible hors periode scolaire). Zero nacelle, zero blocage de la circulation.",
    img: "/images/secteur-collectivites.jpg",
  },
];

export default function DomainesPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">

      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/hero-secteurs-global.jpg')] bg-cover bg-[center_top]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/90 to-[#0e2f52]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            Une expertise technologique adaptee aux <span className="text-brand-orange-500">exigences de chaque secteur</span>
          </h1>
          <p className="text-xl lg:text-2xl font-light text-slate-300 border-l-4 border-brand-orange-500 pl-4 mx-auto max-w-3xl inline-block text-left">
            {"Des protocoles d'intervention sur mesure, de la logistique lourde aux sites ultra-sensibles."}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* BLOC PRINCIPAL : INDUSTRIE */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row mb-12 group">
            <div className="md:w-2/5 bg-slate-200 relative min-h-[300px]">
              <div className="absolute inset-0 bg-[url('/images/secteur-industrie.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-[#0e2f52]/20"></div>
            </div>
            <div className="md:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Factory className="w-8 h-8 text-brand-orange-500" />
                <h2 className="text-3xl font-black text-slate-900">{"Industrie, Logistique & Datacenters"}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {"Nous nettoyons vos vastes surfaces de bardages et de toitures industrielles sans jamais interrompre votre continuite d'activite (Uptime). Vos flux logistiques restent fluides avec une perturbation minimale."}
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                {"Pour les Datacenters, nous maitrisons un enjeu critique : l'encrassement des systemes de refroidissement (Free Cooling) par la poussiere ou le pollen, qui augmente drastiquement le PUE (Power Usage Effectiveness). Notre nettoyage exterieur de precision permet des economies d'energie massives."}
              </p>
              <Link href="/secteurs/industrie-logistique" className="inline-flex items-center gap-2 font-bold text-[#0e2f52] hover:text-brand-orange-500 transition-colors">
                En savoir plus <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* GRILLE DES 6 AUTRES SECTEURS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secteursGrille.map((secteur, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group">
                <div className="h-48 relative overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${secteur.img}')` }}></div>
                  <div className="absolute inset-0 bg-slate-200/50"></div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <secteur.icon className="w-6 h-6 text-[#0e2f52]" />
                    <h3 className="text-xl font-bold text-slate-900">{secteur.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{secteur.desc}</p>
                  {secteur.desc2 && <p className="text-slate-600 text-sm leading-relaxed mb-4">{secteur.desc2}</p>}
                  <Link href={secteur.href} className="inline-flex items-center gap-1 text-brand-orange-500 font-bold text-sm hover:gap-2 transition-all mt-auto">
                    En savoir plus <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
