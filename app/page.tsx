import type { Metadata } from "next";
import Link from "next/link";
import { HeroCarousel } from "../components/HeroCarousel";
import {
  ChevronRight, ShieldCheck, Sun, Home, Building2,
  ThermometerSun, Bug, Video, CheckCircle2, Globe, MapPin,
  ChevronDown
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nettoyage, Inspection et Maintenance par Drone et Robot en Europe | Ellipsys",
  description: "Solutions de maintenance par drones et robots partout en Europe : nettoyage de panneaux solaires, toitures, facades, thermographie, destruction de nuisibles et imagerie.",
};

const processSteps = [
  { num: "01", title: "Prise de contact & Devis gratuit", desc: "Analyse immédiate de votre besoin, de l'accessibilité du site et qualification de l'urgence." },
  { num: "02", title: "Étude de faisabilité & Démarches", desc: "En amont du vol, nous gérons l'ensemble des vérifications des zones aériennes et des demandes d'autorisations (DGAC, Préfectures)." },
  { num: "03", title: "Intervention sécurisée sur site", desc: "Déploiement rapide de nos drones et robots avec mise en place d'un périmètre strict d'exclusion des tiers au sol." },
  { num: "04", title: "Remise des livrables", desc: "Vous recevez rapidement vos rapports d'intervention, imageries thermiques ou documents de conformité." },
];

const pillars = [
  { href: "/prestations/nettoyage-solaire", icon: Sun, title: "Nettoyage Robotisé de Parcs Solaires", desc: "Restauration du rendement de vos parcs solaires par robotique terrestre et aérienne." },
  { href: "/prestations/traitement-toiture", icon: Home, title: "Démoussage et Hydrofuge Toitures", desc: "Entretien et protection hydrofuge sans risque d'écrasement ni de chute." },
  { href: "/prestations/nettoyage-facade", icon: Building2, title: "Nettoyage Façades et Bardages", desc: "Restauration esthétique de vos bâtiments commerciaux et industriels sans logistique lourde." },
  { href: "/prestations/thermographie", icon: ThermometerSun, title: "Thermographie et Inspection Technique", desc: "Diagnostics énergétiques de pointe (Décret Tertiaire) et détection d'anomalies invisibles." },
  { href: "/prestations/nuisibles", icon: Bug, title: "Destruction Nuisibles Grande Hauteur", desc: "Neutralisation rapide et sécurisée avec des protocoles stricts de maîtrise des risques." },
  { href: "/prestations/prises-de-vues", icon: Video, title: "Captation Audiovisuelle & FPV", desc: "Prises de vues aériennes très haute définition et visites immersives pour l'immobilier de prestige." },
];

const faqs = [
  {
    q: "En tant que locataire d'un site, pourquoi dois-je entretenir les panneaux solaires ?",
    a: "L'entretien est de votre responsabilité et s'avère indispensable pour optimiser la production, éviter les points chauds et prévenir les avaries matérielles."
  },
  {
    q: "Quels types de produits utilisez-vous pour le nettoyage ?",
    a: "Nous utilisons des produits chocs pour un résultat rapide, des traitements lents sans rinçage pour les toitures fragiles, ou des solutions enzymatiques 100% biodégradables."
  },
  {
    q: "Qui gère les autorisations de vol ?",
    a: "Nous gérons l'intégralité des démarches administratives. Il faut prévoir 5 à 10 jours ouvrables de délai selon les préfectures."
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[95dvh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroCarousel />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2f52]/60 via-[#0e2f52]/40 to-[#0e2f52]/80 z-10" />

        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center pb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-8 shadow-lg">
            <ShieldCheck className="w-4 h-4 text-brand-orange-400" />
            <span>Drones certifiés DGAC / EASA · Robots terrestres · France entière</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight max-w-5xl leading-tight drop-shadow-xl">
            Nettoyage, Inspection et Maintenance par{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-red-400">
              Drone et Robot en Europe
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-orange-300 font-semibold mb-6 drop-shadow-md">
            Une réponse experte pour vos toitures, façades, parcs solaires et besoins en thermographie.
          </p>

          <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-3xl font-medium leading-relaxed drop-shadow-md">
            {"L'outil s'adapte au bâtiment, et non l'inverse. Ellipsys déploie des solutions robotisées de haute précision pour nettoyer, inspecter et protéger votre patrimoine."}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link href="/devis" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-2">
              Demander un devis gratuit <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="/expertise" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors shadow-lg flex items-center justify-center">
              Notre parc technologique
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-[#0e2f52]/90 backdrop-blur-lg border-t border-white/10 py-4 hidden md:block z-20">
          <div className="container mx-auto px-4 text-slate-300 flex justify-between text-sm">
            <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-brand-orange-400" /> France · Europe</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-orange-400" /> Sans Échafaudage</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-orange-400" /> Certifiés DGAC / EASA</div>
          </div>
        </div>
      </section>

      {/* 6 PILIERS */}
      <section id="solutions" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              Nos <span className="text-brand-orange-500">6 Piliers d&apos;Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-brand-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((card, i) => (
              <Link key={i} href={card.href} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col h-full">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange-50 transition-colors">
                  <card.icon className="w-7 h-7 text-slate-700 group-hover:text-brand-orange-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{card.desc}</p>
                <span className="text-brand-orange-500 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Voir notre expertise <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Notre Processus d&apos;Intervention : 4 Étapes Simples</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-brand-orange-500 text-white font-bold flex items-center justify-center mx-auto mb-6 text-xl shadow-lg">{i + 1}</div>
                <h4 className="font-bold text-slate-900 mb-3 text-lg">{step.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-12 text-center">Foire Aux Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 group cursor-pointer">
                <summary className="font-bold text-slate-900 flex justify-between items-center outline-none text-lg list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-brand-orange-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pt-6 text-slate-600 text-sm mt-4 border-t border-slate-100 leading-relaxed">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-[#0e2f52] text-white text-center px-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-red-400">
            Prêt à démarrer ?
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
            Décrivez-nous votre site et vos contraintes. Nous vous proposerons le protocole optimal sous 24h.
          </p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-brand-orange-500 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-2xl">
            Obtenir mon devis gratuit <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
