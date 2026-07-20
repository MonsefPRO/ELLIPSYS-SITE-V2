import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingDown, Zap, Shield, Award, ChevronRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Nettoyage photovoltaïque par drone : +30% de production",
  description: "Spécialiste du nettoyage de centrales photovoltaïques par drone et robot pour exploitants, asset managers et industriels. Eau osmosée pure. France entière. Audit soiling gratuit. +30% de rendement.",
  keywords: [
    "nettoyage centrale photovoltaïque",
    "nettoyage ferme solaire",
    "nettoyage panneaux solaires industriels",
    "maintenance O&M centrale solaire",
    "contrat nettoyage panneaux photovoltaïques",
    "audit soiling centrale solaire",
    "soiling panneaux solaires",
    "perte de production panneaux sales",
    "nettoyage panneaux solaires drone",
    "robot nettoyage panneaux solaires",
  ],
  openGraph: {
    title: "Nettoyage de Centrales Photovoltaïques — Drone + Robot + Eau Osmosée",
    description: "Restauration de production garantie pour exploitants et asset managers. Audit soiling gratuit sur votre centrale. France entière.",
    url: "https://ellipsys-solutions.com/nettoyage-panneaux-photovoltaiques",
    images: ["/images/avant-apres-solaire.png"],
  },
  alternates: {
    canonical: "https://ellipsys-solutions.com/nettoyage-panneaux-photovoltaiques",
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Nettoyage de centrales photovoltaïques par drone et robot",
  provider: {
    "@type": "LocalBusiness",
    name: "Ellipsys Solutions",
    url: "https://ellipsys-solutions.com",
    telephone: "+33467209709",
    address: {
      "@type": "PostalAddress",
      streetAddress: "159 rue de Thor",
      addressLocality: "Montpellier",
      postalCode: "34000",
      addressCountry: "FR",
    },
  },
  areaServed: { "@type": "Country", name: "France" },
  description:
    "Nettoyage professionnel de panneaux photovoltaïques par drone et robot pour centrales au sol, ombrières et toitures industrielles. Eau osmosée pure, sans détergent, sans risque de microfissures.",
  offers: {
    "@type": "Offer",
    description: "Audit soiling gratuit sur votre centrale",
    availability: "https://schema.org/InStock",
  },
};

const devisUrl = "/devis?service=solaire&utm_source=organic&utm_medium=lp&utm_campaign=pv-b2b";

export default function NettoyagePanneauxPhotovoltaiques() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />

      {/* ════════════════ HERO ════════════════ */}
      <section className="relative bg-gradient-to-br from-[#0e2f52] via-[#1e3a5f] to-[#0e2f52] text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/avant-apres-solaire.png"
            alt="Avant après nettoyage panneaux solaires"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-brand-orange-500/15 border border-brand-orange-500/40 text-brand-orange-300 text-sm font-bold uppercase tracking-wider mb-6">
            Centrales PV · Exploitants · Asset Managers
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 max-w-4xl">
            Vos centrales photovoltaïques perdent
            <span className="text-brand-orange-400"> jusqu&apos;à 30% de production</span>
            <span className="block mt-2">à cause de la saleté.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mb-8 leading-relaxed">
            Pollen, sable saharien, fientes, pollution : votre soiling ratio s&apos;effondre. Nous le restaurons par drone et robot, sur toute la France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={devisUrl}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-black rounded-2xl text-lg transition-all shadow-xl hover:scale-105"
            >
              Demander un audit soiling gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:0467209709"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl text-lg transition-all backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              04 67 20 97 09
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════ PROBLÈME — Perte d'argent ════════════════ */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-orange-500 mb-3">— Le calcul que personne ne fait —</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Combien votre centrale perd-elle <br />par jour de saleté ?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-red-100 mx-auto flex items-center justify-center mb-4">
                <TrendingDown className="w-7 h-7 text-red-600" />
              </div>
              <div className="text-4xl font-black text-slate-900 mb-2">-15 à -30%</div>
              <p className="text-slate-600">Perte typique de rendement annuel sur une centrale non entretenue, selon l&apos;exposition climatique.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-red-100 mx-auto flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-red-600" />
              </div>
              <div className="text-4xl font-black text-slate-900 mb-2">3 500 €</div>
              <p className="text-slate-600">Manque à gagner annuel moyen pour une installation 100 kWc en zone méditerranéenne.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 mx-auto flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-emerald-600" />
              </div>
              <div className="text-4xl font-black text-emerald-700 mb-2">+28%</div>
              <p className="text-slate-600">Gain de production moyen mesuré 14 jours après notre intervention.</p>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-8 max-w-2xl mx-auto">
            <em>Données issues de retours d&apos;exploitants en France métropolitaine. Le soiling ratio est mesurable par instrumentation pyranomètre vs production réelle.</em>
          </p>
        </div>
      </section>

      {/* ════════════════ SOLUTION ════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-orange-500 mb-3">— La méthode Ellipsys —</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Drone + Robot + Eau Osmosée Pure</h2>
            <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto">
              Une triple capacité technique unique sur le marché français, adaptée à chaque typologie d&apos;installation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <div className="relative h-48 bg-slate-100">
                <Image src="/images/Dji matrice.jpg" alt="Drone professionnel DJI Matrice" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-slate-900 mb-2">🚁 Drone pour les hauteurs</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Toitures industrielles, ombrières, sites difficiles d&apos;accès. Flotte DJI Matrice 300/350 + Air 3S certifiée DGAC. Aspersion eau osmosée embarquée.
                </p>
              </div>
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <div className="relative h-48 bg-slate-100">
                <Image src="/images/robot rony.jpg" alt="Robot Rony nettoyage panneaux solaires" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-slate-900 mb-2">🤖 Robot pour les surfaces</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Centrales au sol, parkings ombrières. Robot Rony avec brossage motorisé. 500 m²/h, traçabilité GPS, cadence constante sans intervention humaine en hauteur.
                </p>
              </div>
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <div className="relative h-48 bg-slate-100">
                <Image src="/images/apres solaire.jpg" alt="Eau osmosée pure nettoyage panneaux" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-slate-900 mb-2">💧 Eau osmosée pure</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Production sur site. 99,9% des minéraux retirés. Aucune trace, aucun détergent. Compatible toutes garanties constructeur (Trina, JinkoSolar, Q-CELLS, etc.).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ POURQUOI ELLIPSYS ════════════════ */}
      <section className="py-20 px-4 bg-[#0e2f52] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-orange-400 mb-3">— Pourquoi nous choisir —</p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">Le seul prestataire qui parle votre langage métier</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Mesure du soiling avant/après",
                desc: "Instrumentation pyranomètre + analyse production sur 14 jours. Vous savez précisément combien de kWh récupérés.",
              },
              {
                title: "Tarification €/MWc/an",
                desc: "Contrats pluriannuels semestriels ou trimestriels. Budget prévisible, intégrable à votre budget O&M.",
              },
              {
                title: "Rapport conforme audit DDPM/IRSN",
                desc: "Compte-rendu détaillé pour vos investisseurs, banques et bilan annuel. Photos avant/après horodatées et géolocalisées.",
              },
              {
                title: "Habilitations électriques",
                desc: "Équipe certifiée B2V/BR/BC. Coupures partielles maîtrisées en coordination avec votre exploitant.",
              },
              {
                title: "Couverture nationale",
                desc: "Hérault, Gard, Vaucluse, PACA, Auvergne-Rhône-Alpes, Île-de-France, Nouvelle-Aquitaine. Multi-sites coordonnés.",
              },
              {
                title: "Certifications DGAC + EASA",
                desc: "STS-01 / STS-02 / SORA. Assurance RC Aéronautique. ISO 14001 produits biodégradables 90%.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-orange-500/20 border border-brand-orange-500/40 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ TARIFICATION ════════════════ */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-orange-500 mb-3">— Modèle économique —</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Tarification adaptée à votre typologie</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Toitures industrielles</p>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Intervention ponctuelle</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Bâtiments tertiaires et industriels équipés PV. Intervention drone + lance osmosée. Devis personnalisé en m².
              </p>
              <p className="text-slate-500 text-xs italic">Pour installations 50-500 kWc</p>
            </div>

            <div className="bg-[#0e2f52] text-white rounded-2xl p-8 transform md:scale-105 shadow-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-orange-400 mb-2">Centrales au sol — ⭐ Recommandé</p>
              <h3 className="text-2xl font-black mb-3">Contrat annuel multi-sites</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Tarification €/MWc/an. 2 à 4 passages annuels selon votre exposition. Audit soiling intégré, reporting trimestriel.
              </p>
              <p className="text-brand-orange-400 text-xs italic">Pour parcs &gt;1 MWc · Asset Managers · IPP</p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-2xl p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Ombrières parking</p>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Intervention robot</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                GMS, parkings entreprises, parkings publics. Robot Rony pour cadence constante. Coordination horaires d&apos;ouverture.
              </p>
              <p className="text-slate-500 text-xs italic">Pour 200-2000 m² de surface</p>
            </div>
          </div>

          <p className="text-center text-slate-500 text-sm mt-8 max-w-2xl mx-auto">
            <em>Tous nos tarifs incluent : déplacement, étude de faisabilité, intervention, eau osmosée, rapport d&apos;intervention horodaté et géolocalisé.</em>
          </p>
        </div>
      </section>

      {/* ════════════════ CTA FINAL — Audit soiling ════════════════ */}
      <section className="py-24 px-4 bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-4 opacity-90">— Offre dédiée exploitants & asset managers —</p>
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            Audit soiling gratuit sur votre centrale
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Vous nous transmettez 30 jours de production. Nous calculons votre perte exacte vs le P50 théorique. Vous savez précisément combien vous perdez — et combien vous récupérerez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={devisUrl}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-brand-orange-600 font-black rounded-2xl text-lg shadow-2xl hover:scale-105 transition-transform"
            >
              Demander mon audit soiling
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:0467209709"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold rounded-2xl text-lg transition-all backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              Parler à un expert : 04 67 20 97 09
            </a>
          </div>
          <p className="text-white/70 text-sm mt-6">
            Réponse personnelle sous 24h. Aucun engagement.
          </p>
        </div>
      </section>
    </main>
  );
}
