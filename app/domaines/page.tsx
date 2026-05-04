import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight, Factory, TestTube, Building, Landmark, Sun, Ship, School } from "lucide-react";
import ExpertQuoteSide from "@/components/ExpertQuoteSide";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Expertises Sectorielles : Industrie, Bâtiment, Solaire, Maritime et Habitat | Ellipsys",
  description: "Des protocoles d'intervention sur mesure. Découvrez nos solutions pour l'industrie, les syndics, les monuments historiques et l'énergie solaire.",
};

export default async function DomainesPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const secteursGrille = [
    {
      icon: TestTube,
      href: "/secteurs/haute-exigence",
      title: isEn ? "High-Demand Sectors" : "Secteurs à Haute Exigence",
      desc: isEn ? "Pharma & Food: Strict contamination risk control. We comply with NF EN 1672-2 by ensuring perfect hygiene and cleanability of exterior infrastructure (silos, roofs)." : "Pharma & Agroalimentaire : Maîtrise stricte des risques de contamination. Nous respectons la norme NF EN 1672-2 en garantissant l'hygiène et la nettoyabilité parfaite des infrastructures extérieures (silos, toitures).",
      desc2: isEn ? "Aeronautics: Precision cleaning of your infrastructure (assembly buildings, hangars) meeting the strict safety standards of the sector." : "Aéronautique : Nettoyage de précision de vos infrastructures (bâtiments d'assemblage, hangars) répondant aux normes de sécurité strictes du secteur.",
      img: "/images/secteur-haute-exigence.jpg",
    },
    {
      icon: Building,
      href: "/secteurs/immobilier-syndics",
      title: isEn ? "Real Estate & Property Managers" : "Immobilier & Syndics",
      desc: isEn ? <>We support property managers in maximising asset value. We simplify the work of managing agents by carrying out rigorous <strong>preventive maintenance</strong> (façades, roofs, inaccessible glazing) and providing comprehensive visual inspection reports, essential for general meetings.</> : <>Nous accompagnons les gestionnaires de biens dans la valorisation de leurs actifs. Nous facilitons le travail des syndics en exécutant une <strong>maintenance préventive</strong> rigoureuse (façades, toitures, vitrages inaccessibles) et en fournissant des rapports visuels d&apos;inspection complets, indispensables lors des assemblées générales.</>,
      img: "/images/secteur-syndic.jpg",
    },
    {
      icon: Landmark,
      href: "/secteurs/monuments-historiques",
      title: isEn ? "Listed Heritage Buildings (ABF)" : "Monuments Historiques (ABF)",
      desc: isEn ? <>For historic buildings, the drone is a major breakthrough. Our gentle interventions comply with the Ministry of Culture's preservation rules and are subject to obtaining prior authorisations (Article L. 621-31 of the Heritage Code) from the Architects of Buildings of France <strong>without requiring scaffolding</strong>.</> : <>Pour le bâti ancien, le drone est une avancée majeure. Nos interventions douces respectent les règles de préservation du Ministère de la Culture et sont soumises à l&apos;obtention des autorisations préalables (Article L. 621-31 du Code du patrimoine) auprès des Architectes des Bâtiments de France <strong>sans nécessiter d&apos;échafaudages</strong>.</>,
      img: "/images/secteur-monuments.jpg",
    },
    {
      icon: Sun,
      href: "/secteurs/energie-solaire",
      title: isEn ? "Solar Energy Operators" : "Acteurs de l'Energie Solaire",
      desc: isEn ? <>Soiling mathematically reduces your revenue. We provide regular monitoring and hybrid <strong>solar cleaning</strong> via our <strong>Robot Rony</strong> (for ground-mounted arrays) and aerial drones (for large rooftops). A direct solution to secure and sustain your return on investment.</> : <>L&apos;encrassement réduit mathématiquement vos revenus. Nous assurons un suivi régulier et un <strong>nettoyage solaire</strong> hybride via nos <strong>Robot Rony</strong> (pour les parcs au sol) et nos drones aériens (pour les grandes toitures). Une solution directe pour sécuriser et pérenniser votre retour sur investissement.</>,
      img: "/images/solairebanner.png",
    },
    {
      icon: Ship,
      href: "/secteurs/maritime-plaisance",
      title: isEn ? "Maritime & Leisure Boating" : "Milieu Maritime & Plaisance",
      desc: isEn ? "In coastal areas, marine spray violently accelerates electrochemical corrosion of metals. We apply Desalination protocols: a technical preventive rinse of coastal structures to evacuate chlorides, extending the lifespan of your façades and naval infrastructure." : "En bord de mer, les embruns marins accélèrent violemment la corrosion électrochimique des métaux. Nous appliquons des protocoles de Dessalage : un rinçage technique préventif des structures littorales pour évacuer les chlorures, prolongeant la vie de vos façades et infrastructures navales.",
      img: "/images/secteur-maritime.jpg",
    },
    {
      icon: School,
      href: "/secteurs/collectivites",
      title: isEn ? "Local Authorities & Public Spaces" : "Collectivités & Espace Public",
      desc: isEn ? <>We offer a service that respects public infrastructure. Our drone method allows maintenance of town halls, schools and civil engineering structures with unmatched execution speed (possible outside school periods). <strong>No cherry picker</strong>, no traffic disruption.</> : <>Nous offrons un service respectueux des infrastructures publiques. Notre méthode par drone permet d&apos;entretenir les mairies, les écoles et les ouvrages d&apos;art avec une rapidité d&apos;exécution inégalée (possible hors période scolaire). <strong>Aucune nacelle</strong>, aucun blocage de la circulation.</>,
      img: "/images/espacepublic.jpg",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">

      <section className="relative bg-[#0e2f52] text-white py-24 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-cover bg-[center_top]" style={{ backgroundImage: `url('/images/banner secteur.png')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/50 text-brand-orange-400 font-medium text-base mb-6">
              {isEn ? "Industry · Heritage · Solar · Maritime" : "Industrie · Patrimoine · Solaire · Maritime"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Expertise tailored to the" : "Une expertise adaptée aux"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-amber-400">
                {isEn ? "demands of every sector" : "exigences de chaque secteur"}
              </span>
            </h1>
            <p className="text-xl text-brand-orange-300 font-semibold mb-4 italic">
              {isEn
                ? "Bespoke intervention protocols, from heavy logistics to ultra-sensitive sites."
                : "Des protocoles d'intervention sur mesure, de la logistique lourde aux sites ultra-sensibles."}
            </p>
          </div>
        </div>
      </section>

      <ExpertQuoteSide quote={isEn ? "The tool no longer dictates the method. At Ellipsys, it is your operational constraint that determines the technology deployed. Drone, robot or hybrid solution — we always choose what is most effective for you." : "L'outil ne dicte plus la méthode. Chez Ellipsys, c'est votre contrainte opérationnelle qui détermine la technologie déployée. Drone, robot ou solution hybride — nous choisissons toujours ce qui est le plus efficace pour vous."} />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* MAIN BLOCK : INDUSTRY */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row mb-12 group">
            <div className="md:w-2/5 bg-slate-200 relative min-h-[300px]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/images/bloc1.png')` }}></div>
              <div className="absolute inset-0 bg-[#0e2f52]/20"></div>
            </div>
            <div className="md:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Factory className="w-8 h-8 text-brand-orange-500" />
                <h2 className="text-3xl font-black text-slate-900">{isEn ? "Industry, Logistics & Datacentres" : "Industrie, Logistique & Datacenters"}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {isEn
                  ? <>We clean your vast industrial cladding and rooftop surfaces without ever interrupting your <strong>operational continuity (Uptime)</strong>. Your logistics flows remain smooth with minimal disruption.</>
                  : <>Nous nettoyons vos vastes surfaces de bardages et de toitures industrielles sans jamais interrompre votre <strong>continuité d&apos;activité</strong> (Uptime). Vos flux logistiques restent fluides avec une perturbation minimale.</>}
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                {isEn
                  ? <>For Datacentres, we address a critical issue: the soiling of cooling systems (Free Cooling) by dust or pollen, which drastically increases PUE (Power Usage Effectiveness). Our <strong>precision exterior cleaning</strong> delivers massive energy savings.</>
                  : <>Pour les Datacenters, nous maîtrisons un enjeu critique : l&apos;encrassement des systèmes de refroidissement (Free Cooling) par la poussière ou le pollen, qui augmente drastiquement le PUE (Power Usage Effectiveness). Notre <strong>nettoyage extérieur de précision</strong> permet des économies d&apos;énergie massives.</>}
              </p>
              <Link href="/secteurs/industrie-logistique" className="inline-flex items-center gap-2 font-bold text-[#0e2f52] hover:text-brand-orange-500 transition-colors">
                {isEn ? "Learn more" : "En savoir plus"} <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* GRID OF 6 OTHER SECTORS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secteursGrille.map((secteur, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group">
                <div className="h-48 relative overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${secteur.img}')` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <secteur.icon className="w-6 h-6 text-[#0e2f52]" />
                    <h3 className="text-xl font-bold text-slate-900">{secteur.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{secteur.desc}</p>
                  {secteur.desc2 && <p className="text-slate-600 text-sm leading-relaxed mb-4">{secteur.desc2}</p>}
                  <Link href={secteur.href} className="inline-flex items-center gap-1 text-brand-orange-500 font-bold text-sm hover:gap-2 transition-all mt-auto">
                    {isEn ? "Learn more" : "En savoir plus"} <ChevronRight className="w-4 h-4" />
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
