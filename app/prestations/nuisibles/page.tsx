import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Crosshair, Zap, Clock, CheckCircle2, ChevronRight, AlertTriangle } from "lucide-react";
import ExpertQuoteSide from "@/components/ExpertQuoteSide";
import AccordionSection from "@/components/AccordionSection";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Destruction de nids de frelons en grande hauteur par drone | Ellipsys",
  description: "La solution d'urgence optimale pour les nids inaccessibles. Aucun risque humain, produit Certibiocide injecté à distance, retrait du nid inclus. Intervention sous 2h.",
};

const PX = "?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const IMG = {
  nestTree:  `https://images.pexels.com/photos/28995897/pexels-photo-28995897.jpeg${PX}`,
  nestClose: `https://images.pexels.com/photos/12989690/pexels-photo-12989690.jpeg${PX}`,
  wasp:      `https://images.pexels.com/photos/14710901/pexels-photo-14710901.jpeg${PX}`,
};

export default async function FrelonsPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const stats = [
    { value: "< 2 h",        label: isEn ? "Response time" : "Délai d'intervention" },
    { value: "50 m+",        label: isEn ? "Altitude reach by drone" : "Hauteur d'atteinte par drone" },
    { value: "100 %",        label: isEn ? "Physical nest removal included" : "Retrait physique du nid inclus" },
    { value: "Certibiocide", label: isEn ? "Professional certification" : "Habilitation professionnelle" },
  ];

  const features = isEn ? [
    { icon: ShieldCheck, color: "text-emerald-500",       bg: "bg-emerald-50",        title: "Controlled Human Risk",      desc: <>Remote pilots operate at a <strong>safe distance</strong>. Risk of falls and stings <strong>completely eliminated</strong> for our teams.</> },
    { icon: Zap,         color: "text-brand-orange-500",  bg: "bg-brand-orange-50",   title: "Unrestricted Access",         desc: <>Reaching targets at over <strong>50 metres altitude</strong> with perfect stability, regardless of site topology.</> },
    { icon: Crosshair,   color: "text-blue-500",          bg: "bg-blue-50",            title: "Surgical Precision",          desc: <><strong>Laser targeting</strong> and remotely triggered insecticidal pellet launchers. <strong>Zero product dispersal</strong> beyond the target.</> },
    { icon: Clock,       color: "text-amber-500",         bg: "bg-amber-50",           title: "Rapid Response",             desc: <>Average intervention duration: <strong>1 to 2 hours</strong>. <strong>Return to normal guaranteed</strong> on the day of the call.</> },
  ] : [
    { icon: ShieldCheck, color: "text-emerald-500",       bg: "bg-emerald-50",        title: "Risque Humain Contrôlé",      desc: <>Télépilotes à <strong>distance de sécurité</strong>. Risque de chute et de piqûres <strong>supprimé en totalité</strong> pour nos équipes.</> },
    { icon: Zap,         color: "text-brand-orange-500",  bg: "bg-brand-orange-50",   title: "Accès Facilité",              desc: <>Atteinte de cibles à plus de <strong>50 mètres de hauteur</strong> avec une stabilité parfaite, quelle que soit la topologie du site.</> },
    { icon: Crosshair,   color: "text-blue-500",          bg: "bg-blue-50",            title: "Précision Chirurgicale",      desc: <><strong>Visée laser</strong> et lanceurs de billes insecticides déclenchables à distance. <strong>Aucune propagation du produit</strong> hors cible.</> },
    { icon: Clock,       color: "text-amber-500",         bg: "bg-amber-50",           title: "Rapidité d'Action",           desc: <>Durée moyenne d&apos;intervention : <strong>1 à 2 heures</strong>. <strong>Retour à la normale garanti</strong> le jour même de l&apos;appel.</> },
  ];

  const protocole = isEn ? [
    { step: "01", badge: "PRODUCT · FLIGHT", title: "Certibiocide Certification & Regulatory Compliance (DGAC / EASA)", desc: <>An Asian hornet nest directly engages your <strong>civil liability</strong>. Our <strong>Certibiocide</strong> certification guarantees a legal and effective treatment that <strong>neutralises the threat at source</strong>. Our pilots operate under the strict control of the <strong>DGAC</strong> for all overflights in inhabited zones — <strong>prefectoral authorisations managed by our teams</strong>.</> },
    { step: "02", badge: null,               title: "High-Altitude Intervention & Physical Nest Removal",              desc: <>After the safe remote injection of the <strong>approved biocidal product</strong>, we proceed with the <strong>meticulous physical removal of the nest</strong>. Without this removal, the site remains attractive to <strong>new swarms</strong> the following season.</> },
  ] : [
    { step: "01", badge: "PRODUIT · VOL", title: "Habilitation Certibiocide & Conformité Réglementaire (DGAC / EASA)", desc: <>Un nid de frelons asiatiques engage directement votre <strong>responsabilité civile</strong>. Notre habilitation <strong>Certibiocide</strong> garantit un traitement légal et efficace qui <strong>neutralise la menace à la source</strong>. Nos pilotes opèrent sous le strict contrôle de la <strong>DGAC</strong> pour tout survol en zone habitée — <strong>autorisations préfectorales gérées par nos soins</strong>.</> },
    { step: "02", badge: null,            title: "Intervention en Grande Hauteur & Retrait Physique du Nid",          desc: <>Après l&apos;injection sécurisée du <strong>produit biocide homologué</strong> à distance, nous procédons à l&apos;<strong>enlèvement physique minutieux du nid</strong>. Sans ce retrait, le site reste attractif pour de <strong>nouveaux essaims</strong> la saison suivante.</> },
  ];

  const avantages = isEn ? [
    { title: "Remote Operation — Sting Risk Virtually Eliminated",   desc: <>It is the <strong>remote intervention</strong> that makes all the difference: the remote pilot operates from the ground, out of reach of the hornets. Your employees, neighbours and passers-by are never exposed. Our drone neutralises the nest <strong>without any physical approach</strong>.</> },
    { title: "Access to Zones Impossible by Conventional Methods",   desc: <>Roofs at <strong>20 metres</strong>, century-old trees, overhanging cornices: our drone reaches targets <strong>inaccessible by pole or ladder</strong>, without aerial platform rental or risk of accident.</> },
    { title: "Definitive Eradication — Nest Removal Included",       desc: <>Unlike simple insecticide treatments, we systematically carry out <strong>physical removal of the structure</strong>. Without this removal, the site remains attractive to <strong>new swarms</strong> the following year.</> },
  ] : [
    { title: "Télé-opération à Distance — Risque de Piqûres Fortement Limité", desc: <>C&apos;est l&apos;<strong>intervention à distance</strong> qui fait toute la différence : le télépilote opère depuis le sol, hors de portée des frelons. Vos employés, riverains et passants ne sont jamais exposés. Notre drone neutralise le nid <strong>sans aucune approche physique</strong>.</> },
    { title: "Accès aux Zones Impossibles en Méthode Classique",               desc: <>Toitures à <strong>20 mètres</strong>, arbres centenaires, corniches en surplomb : notre drone atteint des cibles <strong>inaccessibles à la perche ou à l&apos;échelle</strong>, sans location de nacelle ni risque d&apos;accident.</> },
    { title: "Éradication Définitive — Retrait du Nid Inclus",                 desc: <>Contrairement à de simples traitements insecticides, nous procédons systématiquement au <strong>retrait physique de la structure</strong>. Sans ce retrait, le site reste attractif pour de <strong>nouveaux essaims</strong> l&apos;année suivante.</> },
  ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      {/* BANNIÈRE */}
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-cover bg-center" style={{ backgroundImage: `url('/images/bannerfrelons.png')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 font-medium text-base mb-6">
              {isEn ? "Hornets · Emergency · Certibiocide" : "Frelons · Urgence · Certibiocide"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "High-Altitude Hornet Nest" : "Destruction de Nids de Frelons"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-brand-orange-400">
                {isEn ? "Destruction by Drone" : "en Grande Hauteur"}
              </span>
            </h1>
            <p className="text-xl text-red-300 font-semibold mb-4 italic">
              {isEn ? "The optimal emergency solution for inaccessible nests." : "La solution d'urgence optimale pour les nids inaccessibles."}
            </p>
          </div>
        </div>
      </section>

      <ExpertQuoteSide
        quote={isEn
          ? "When facing a high-altitude Asian hornet nest, improvisation is fatal. Our protocol guarantees total safety: the remote pilot operates from the ground, the biocidal product is injected with surgical precision, and we always proceed with nest removal for definitive eradication."
          : "Face à un nid de frelons asiatiques en grande hauteur, l'improvisation est fatale. Notre protocole garantit une sécurité totale : le télépilote opère à distance, le produit biocide est injecté avec précision chirurgicale, et nous procédons toujours au retrait du nid pour une éradication définitive."}
        author="— Expert Ellipsys Solutions"
      />

      {/* SECTION 1 : INTRO VISUELLE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

            {/* Image nid dans l'arbre */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[440px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.nestTree}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-400/40 text-red-300 text-xs font-bold backdrop-blur-sm">
                  <AlertTriangle className="w-3.5 h-3.5" /> {isEn ? "Vital Danger — Asian Hornet" : "Danger Vital — Frelon Asiatique"}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white text-xs font-semibold">{isEn ? "High-altitude hornet nest — inaccessible without specialised equipment" : "Nid de frelons en hauteur — inaccessible sans équipement spécialisé"}</p>
              </div>
            </div>

            {/* Texte + Avis Expert */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-widest mb-5">
                <AlertTriangle className="w-3.5 h-3.5" /> {isEn ? "The safety revolution" : "La révolution sécuritaire"}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {isEn ? "The safety revolution against Asian hornets" : "La révolution sécuritaire contre les frelons asiatiques"}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isEn
                  ? <>A nest high in a tree or under a cornice represents a <strong>vital danger</strong>. Conventional methods are slow, costly, and generate vibrations that trigger <strong>mass attacks</strong>. Our drone eliminates these risks at source, operating remotely with <strong>surgical precision</strong>.</>
                  : <>Un nid haut perché dans un arbre ou sous une corniche représente un <strong>danger vital</strong>. Les méthodes classiques sont lentes, coûteuses, et créent des vibrations qui provoquent des <strong>attaques massives</strong>. Notre drone élimine ces risques à la source, en opérant à distance avec une <strong>précision chirurgicale</strong>.</>
                }
              </p>
              <div className="bg-[#0e2f52]/5 border border-[#0e2f52]/20 rounded-2xl p-5 flex items-start gap-4">
                <span className="text-brand-orange-500 text-4xl font-bold leading-none -mt-1 select-none shrink-0">&ldquo;</span>
                <div>
                  <p className="text-xs font-black text-brand-orange-500 uppercase tracking-widest mb-2">{isEn ? "Expert Opinion" : "Avis Expert"}</p>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    {isEn
                      ? "When facing a high-altitude Asian hornet nest, improvisation is fatal. Our protocol guarantees total safety: the remote pilot operates from the ground, the biocidal product is injected with surgical precision, and we always proceed with nest removal for definitive eradication."
                      : "Face à un nid de frelons asiatiques en grande hauteur, l'improvisation est fatale. Notre protocole garantit une sécurité totale : le télépilote opère à distance, le produit biocide est injecté avec précision chirurgicale, et nous procédons toujours au retrait du nid pour une éradication définitive."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4 features cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-7 border border-slate-100 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${f.bg} rounded-2xl flex items-center justify-center mb-5`}>
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="font-black text-slate-900 text-base mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BARRE DE STATS */}
      <section className="py-10 bg-[#0e2f52]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="border-r border-white/10 last:border-0 px-4">
                <p className="text-3xl font-black text-red-400 mb-1">{s.value}</p>
                <p className="text-slate-300 text-xs leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 : PROTOCOLE + IMAGE NIDIFICATION */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Protocole */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{isEn ? "Our 3-step eradication protocol" : "Notre protocole d'éradication en 3 étapes"}</h2>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">{isEn ? "A rigorous and safe process, from first call to definitive nest removal." : "Un processus rigoureux et sécurisé, du premier appel au retrait définitif du nid."}</p>
              <div className="space-y-5">
                {protocole.map((p, i) => (
                  <div key={i} className="flex items-start gap-6 p-7 bg-white rounded-3xl border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 rounded-2xl bg-[#0e2f52] text-white flex items-center justify-center font-black text-lg shrink-0">
                      {p.step}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-slate-900">{p.title}</h3>
                        {p.badge && (
                          <span className="inline-block px-2 py-0.5 bg-brand-orange-100 text-brand-orange-700 text-xs font-black rounded-full uppercase tracking-wide shrink-0">{p.badge}</span>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Images nid */}
            <div className="space-y-5">
              <div className="relative rounded-3xl overflow-hidden shadow-lg h-64 lg:h-72">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG.nestClose}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-white text-xs font-semibold">{isEn ? "Alveolar structure of an Asian hornet nest — after biocidal treatment" : "Structure alvéolaire d'un nid de frelons asiatiques — après traitement biocide"}</p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-lg h-48">
                <div className="absolute inset-0 bg-cover bg-center bg-top" style={{ backgroundImage: `url('${IMG.wasp}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-400/40 text-red-200 text-xs font-bold backdrop-blur-sm">
                    {isEn ? "Vespa velutina — Asian Hornet" : "Vespa velutina — Frelon asiatique"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 : AVANTAGES ACCORDÉON */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            {isEn ? "Why choose Ellipsys for your intervention?" : "Pourquoi choisir Ellipsys pour votre intervention ?"}
          </h2>
          <AccordionSection items={avantages} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-br from-red-900 to-[#0e2f52] text-center px-4">
        <div className="max-w-3xl mx-auto">
          <AlertTriangle className="w-10 h-10 text-red-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">
            {isEn ? "Nest detected? Report the emergency now" : "Un nid détecté ? Signalez l'urgence maintenant"}
          </h2>
          <p className="text-slate-300 mb-10 text-lg">
            {isEn ? "Response within 2 hours. Certibiocide certification. Full nest removal included." : "Intervention sous 2h. Habilitation Certibiocide. Retrait complet du nid inclus."}
          </p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            {isEn ? "Report an Emergency" : "Signaler une urgence"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
