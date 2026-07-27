import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Phone, Info, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarifs Nettoyage par Drone — Toiture, Façade, Panneaux Solaires",
  description: "Comprendre les tarifs d'un nettoyage par drone : facteurs de prix, fourchettes du marché, méthodologie de devis. Devis personnalisé gratuit sous 24h. Montpellier, Aimargues, France entière.",
  keywords: [
    "tarif nettoyage drone",
    "prix nettoyage toiture drone",
    "prix nettoyage panneaux solaires drone",
    "coût nettoyage façade drone",
    "devis nettoyage drone",
    "tarif démoussage toiture drone",
    "prix m² nettoyage drone",
  ],
  openGraph: {
    title: "Tarifs Nettoyage par Drone — Méthodologie & Devis Transparent",
    description: "Notre approche transparente du tarif : facteurs réels, fourchettes du marché, devis personnalisé sous 24h.",
    url: "https://ellipsys-solutions.com/tarifs",
  },
  alternates: { canonical: "https://ellipsys-solutions.com/tarifs" },
};

const devisUrl = "/devis?utm_source=organic&utm_medium=tarifs&utm_campaign=seo-prix";

const facteurs = [
  {
    title: "La surface à traiter",
    desc: "C'est le critère n°1. Plus la surface est grande, plus le tarif au m² baisse (effet de mutualisation des coûts fixes : déplacement, installation, autorisations).",
  },
  {
    title: "Le type de prestation",
    desc: "Nettoyage seul, démoussage, hydrofuge, traitement complet... Chaque prestation a son propre process et son temps d'intervention.",
  },
  {
    title: "L'accessibilité du site",
    desc: "Toiture pentue ou plate, présence de cheminées, hauteur du bâtiment, environnement (ABF, monument historique, sécurité industrielle). Tous ces éléments impactent le temps d'intervention.",
  },
  {
    title: "L'état initial",
    desc: "Une toiture pas nettoyée depuis 10 ans ne demande pas le même travail qu'un entretien annuel. Photos préalables = devis précis.",
  },
  {
    title: "La localisation",
    desc: "Plus le site est proche de nos bases (Montpellier, Aimargues), plus le coût déplacement est faible. Nous intervenons partout en France mais le déplacement se facture au-delà de 100 km.",
  },
  {
    title: "La récurrence",
    desc: "Un contrat annuel (1 à 4 passages/an) bénéficie de tarifs préférentiels par rapport à une intervention unique. Idéal pour les exploitants PV, syndics et industriels.",
  },
];

const ranges = [
  {
    label: "Démoussage toiture résidentielle",
    typical: "À partir de 450 € TTC",
    sub: "Pour une maison ~120 m². Inclut produit, intervention, rinçage, rapport photo.",
  },
  {
    label: "Hydrofuge protection toiture",
    typical: "À partir de 600 € TTC",
    sub: "Souvent en option après démoussage. Protection 10 ans selon produit.",
  },
  {
    label: "Nettoyage panneaux solaires résidentiel",
    typical: "À partir de 350 € TTC",
    sub: "Pour une installation 12-30 panneaux. Brossage doux, sans détergent.",
  },
  {
    label: "Centrale photovoltaïque (>100 kWc)",
    typical: "Contrat annuel €/MWc/an",
    sub: "Tarifs spécifiques pour exploitants et asset managers. Audit soiling gratuit.",
  },
  {
    label: "Nettoyage façade ou bardage",
    typical: "Sur devis",
    sub: "Très variable selon hauteur, surface, état et environnement (ABF, urbain dense).",
  },
  {
    label: "Thermographie infrarouge drone",
    typical: "À partir de 350 € HT",
    sub: "Audit Décret Tertiaire, inspection PV, ponts thermiques. Rapport sous 48h.",
  },
];

const faqs = [
  {
    q: "Pourquoi vous ne publiez pas une grille tarifaire fixe au m² ?",
    a: "Un \"prix au m²\" affiché publiquement est trompeur dans 80% des cas. Un démoussage de toiture pentue avec cheminées coûte 3x plus qu'une toiture plate dégagée — pour les mêmes m². Nous préférons un devis honnête, basé sur des photos et une analyse réelle, plutôt qu'un prix d'appel qui devient un \"+150% à l'arrivée du technicien\".",
  },
  {
    q: "Comment obtenir un devis rapidement ?",
    a: "Trois options : 1) Formulaire en ligne (3 minutes, vous ajoutez des photos) → réponse sous 24h. 2) Téléphone au 04 67 20 97 09 — vous parlez directement à un commercial. 3) Email à contact@ellipsys-group.com avec quelques photos. Tous nos devis sont gratuits et sans engagement.",
  },
  {
    q: "Les tarifs incluent-ils le déplacement ?",
    a: "Oui, dans un rayon de 100 km autour de Montpellier ou Aimargues. Au-delà, nous ajoutons un forfait déplacement transparent dans le devis. Pour les missions multi-sites ou nationales, nous proposons des contrats cadres qui optimisent les coûts de déplacement.",
  },
  {
    q: "Acceptez-vous les paiements échelonnés ?",
    a: "Pour les missions supérieures à 2 000 € HT, nous acceptons un paiement en 3 fois sans frais (30% à la commande, 40% à l'intervention, 30% à 30 jours). Pour les particuliers, le règlement se fait après l'intervention sur rapport photo validé.",
  },
  {
    q: "Êtes-vous éligibles à un crédit d'impôt ou aides ?",
    a: "Les prestations d'entretien (démoussage, nettoyage) ne sont pas éligibles au crédit d'impôt résidence principale. En revanche, certaines aides locales existent pour la maintenance de panneaux photovoltaïques en autoconsommation collective. Nous pouvons vous orienter en fonction de votre situation.",
  },
];

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function TarifsPage() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#0e2f52] via-[#1e3a5f] to-[#0e2f52] text-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-brand-orange-500/15 border border-brand-orange-500/40 text-brand-orange-300 text-sm font-bold uppercase tracking-wider mb-6">
            — Tarifs & méthode de devis —
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 max-w-4xl">
            Combien coûte un nettoyage par drone ?
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl leading-relaxed">
            Notre approche transparente : pas de prix d&apos;appel, pas de mauvaise surprise. Voici les facteurs qui déterminent un devis Ellipsys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href={devisUrl}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-black rounded-2xl text-lg shadow-xl hover:scale-105 transition-all"
            >
              Obtenir mon devis personnalisé
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:0467209709" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl text-lg transition-all backdrop-blur-sm">
              <Phone className="w-5 h-5" />
              04 67 20 97 09
            </a>
          </div>
        </div>
      </section>

      {/* FACTEURS DE PRIX */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-orange-500 mb-3">— Les facteurs qui déterminent le prix —</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">6 éléments qui font varier un devis</h2>
            <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto">
              Une grille tarifaire affichée publiquement est nécessairement simplifiée. Voici les vrais critères que nous prenons en compte pour chaque mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {facteurs.map((f, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-orange-500/10 border border-brand-orange-500/30 flex items-center justify-center font-black text-brand-orange-600">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOURCHETTES INDICATIVES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-orange-500 mb-3">— Fourchettes indicatives —</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Ordres de grandeur observés sur nos missions</h2>
            <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto">
              Pour vous donner un repère <strong>avant</strong> de demander un devis détaillé. Ces tarifs sont des points de départ, pas des engagements.
            </p>
          </div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {ranges.map((r, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-brand-orange-500/40 transition-colors">
                <div className="flex-1">
                  <h3 className="text-lg font-black text-slate-900">{r.label}</h3>
                  <p className="text-sm text-slate-600 mt-1">{r.sub}</p>
                </div>
                <div className="shrink-0 px-4 py-2 bg-white border-2 border-brand-orange-500 rounded-xl">
                  <p className="text-brand-orange-600 font-black text-lg whitespace-nowrap">{r.typical}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-8 bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
            <div className="flex gap-4">
              <Info className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-900 mb-2">Ces ordres de grandeur sont indicatifs.</p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Ils correspondent à des configurations standards. Votre devis final dépendra de l&apos;analyse précise de votre site. <strong>Aucune surprise à l&apos;arrivée du technicien</strong> : le prix devisé est le prix facturé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI ELLIPSYS */}
      <section className="py-20 px-4 bg-[#0e2f52] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-orange-400 mb-3">— Notre engagement transparence —</p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">Ce qui est toujours inclus dans nos tarifs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Étude de faisabilité gratuite (photos ou visite de site)",
              "Protocole personnalisé proposé sous 24h",
              "Eau filtrée produite sur site",
              "Pilote certifié DGAC + assurance RC Aéronautique",
              "Reprogrammation gratuite en cas d'intempéries",
              "Rapport photo avant/après horodaté",
              "Recommandations préventives pour les 12 prochains mois",
              "Pas de sous-traitant — équipe Ellipsys uniquement",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange-400 shrink-0 mt-0.5" />
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-orange-500 mb-3">— Questions fréquentes —</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">À propos de nos tarifs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white border border-slate-200 rounded-2xl p-6 group cursor-pointer">
                <summary className="font-bold text-slate-900 text-lg list-none flex justify-between items-center">
                  <span>{f.q}</span>
                  <span className="text-brand-orange-500 group-open:rotate-45 transition-transform text-2xl font-thin">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-4 bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck className="w-14 h-14 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            Recevez votre devis personnalisé sous 24h
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Quelques photos suffisent. Réponse personnelle d&apos;un membre de notre équipe — pas de robot, pas de standard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={devisUrl} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-brand-orange-600 font-black rounded-2xl text-lg shadow-2xl hover:scale-105 transition-transform">
              Demander mon devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:0467209709" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold rounded-2xl text-lg transition-all backdrop-blur-sm">
              <Phone className="w-5 h-5" />
              04 67 20 97 09
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
