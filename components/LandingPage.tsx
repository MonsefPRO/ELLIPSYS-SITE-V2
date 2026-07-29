import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Clock, MapPin, Phone, HelpCircle } from "lucide-react";
import LandingLeadForm from "./LandingLeadForm";

/**
 * Gabarit commun aux landing pages Google Ads.
 *
 * Principes de conception (différents d'une page de site classique) :
 *  - le formulaire est visible sans défilement (colonne de droite dès le hero) ;
 *  - une seule action possible : demander un devis ou appeler ;
 *  - la preuve (avant/après) arrive avant les arguments ;
 *  - un prix indicatif est affiché : sur du trafic payant, l'absence de prix
 *    est la première cause d'abandon.
 *
 * Ces pages servent aussi en référencement naturel après la campagne : d'où le
 * contenu local réel, la FAQ et le JSON-LD.
 */
export type LandingBenefit = { titre: string; texte: string };
export type LandingPrice = { label: string; prix: string; note: string };
export type LandingFaq = { q: string; r: string };

export type LandingPageProps = {
  service: string;
  serviceLabel: string;
  h1: React.ReactNode;
  /** Version texte du H1, pour le JSON-LD */
  h1Texte: string;
  accroche: string;
  heroImage: string;
  heroAlt: string;
  formTitre: string;
  formSoustitre: string;
  /** Bloc de preuve visuelle */
  preuve: { image: string; alt: string; legende: string; badges?: string[] };
  benefices: LandingBenefit[];
  prix: LandingPrice[];
  prixNote: string;
  faq: LandingFaq[];
  communes: string[];
  /** Lien vers la page de service complète (maillage interne) */
  pageDetail: { href: string; label: string };
  url: string;
};

export default function LandingPage(p: LandingPageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: p.h1Texte,
        serviceType: p.serviceLabel,
        areaServed: [
          { "@type": "City", name: "Montpellier" },
          ...p.communes.map((c) => ({ "@type": "City", name: c })),
        ],
        provider: {
          "@type": "LocalBusiness",
          name: "Ellipsys Solutions",
          telephone: "+33467209709",
          url: "https://ellipsys-solutions.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "159 Rue de Thor",
            addressLocality: "Montpellier",
            postalCode: "34000",
            addressRegion: "Occitanie",
            addressCountry: "FR",
          },
        },
        url: p.url,
      },
      {
        "@type": "FAQPage",
        mainEntity: p.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.r },
        })),
      },
    ],
  };

  return (
    <main className="flex flex-col min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ─── HERO : titre + formulaire visible sans défilement ─────────── */}
      <section className="relative pt-24 pb-14 lg:pt-28 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={p.heroImage} alt={p.heroAlt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e2f52]/95 via-[#0e2f52]/85 to-[#0e2f52]/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="text-white pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange-500/20 border border-brand-orange-400/40 text-brand-orange-300 text-xs font-bold mb-5">
                <MapPin className="w-3.5 h-3.5" /> Montpellier · Hérault · Occitanie
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] mb-5">{p.h1}</h1>

              <p className="text-lg text-slate-200 leading-relaxed mb-7 max-w-xl">{p.accroche}</p>

              <ul className="space-y-2.5 mb-8">
                {[
                  "Sans échafaudage ni nacelle",
                  "Télépilotes certifiés DGAC / EASA",
                  "Devis gratuit sous 24 h",
                  "Entreprise montpelliéraine",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>

              <a
                href="tel:+33467209709"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white font-bold text-lg transition-colors"
              >
                <Phone className="w-5 h-5 text-brand-orange-400" /> 04 67 20 97 09
              </a>
            </div>

            <div className="lg:sticky lg:top-24">
              <LandingLeadForm
                service={p.service}
                serviceLabel={p.serviceLabel}
                titre={p.formTitre}
                soustitre={p.formSoustitre}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PREUVE VISUELLE ────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <div className="relative h-64 sm:h-80 lg:h-96">
              <Image src={p.preuve.image} alt={p.preuve.alt} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {p.preuve.badges && (
                <div className="absolute top-4 left-4 flex gap-2">
                  {p.preuve.badges.map((b, i) => (
                    <span
                      key={b}
                      className={`px-3 py-1 rounded-full text-xs font-black tracking-widest text-white shadow-md ${
                        i === 0 ? "bg-red-600" : "bg-emerald-500"
                      }`}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              )}
              <p className="absolute bottom-5 left-5 right-5 text-white font-bold text-sm sm:text-base">
                {p.preuve.legende}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BÉNÉFICES ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {p.benefices.map((b) => (
              <div key={b.titre} className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-11 h-11 rounded-2xl bg-brand-orange-500/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-brand-orange-500" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 leading-snug">{b.titre}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{b.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRIX INDICATIF ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">Combien ça coûte ?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Nous préférons annoncer des ordres de grandeur plutôt que de vous faire remplir un
              formulaire pour découvrir un prix. Le devis exact reste gratuit et sans engagement.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {p.prix.map((x) => (
              <div key={x.label} className="border-2 border-slate-200 rounded-3xl p-6 text-center hover:border-brand-orange-500 transition-colors">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{x.label}</p>
                <p className="text-2xl font-black text-[#0e2f52] mb-2">{x.prix}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{x.note}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 italic mt-7 max-w-2xl mx-auto">{p.prixNote}</p>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-9 text-center">
            Les questions qu&apos;on nous pose
          </h2>
          <div className="space-y-4">
            {p.faq.map((f) => (
              <div key={f.q} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="font-black text-slate-900 mb-2 flex items-start gap-3 leading-snug">
                  <HelpCircle className="w-5 h-5 text-brand-orange-500 mt-0.5 shrink-0" />
                  {f.q}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-8">{f.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ZONE + CTA FINAL ───────────────────────────────────────────── */}
      <section className="py-16 bg-[#0e2f52] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Clock className="w-10 h-10 text-brand-orange-400 mx-auto mb-5" />
          <h2 className="text-2xl sm:text-3xl font-black mb-4">Recevez votre devis sous 24 h</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Décrivez-nous votre besoin en une minute. Nous revenons vers vous avec un prix ferme,
            sans engagement et sans visite commerciale imposée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange-500 text-white rounded-xl font-black hover:bg-brand-orange-600 transition-colors shadow-lg"
            >
              Demander mon devis gratuit
            </Link>
            <a
              href="tel:+33467209709"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/25 text-white rounded-xl font-bold hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5" /> 04 67 20 97 09
            </a>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
              Nous intervenons notamment à
            </p>
            <p className="text-slate-300 text-sm leading-relaxed max-w-3xl mx-auto">
              {p.communes.join(" · ")}
            </p>
            <Link
              href={p.pageDetail.href}
              className="inline-block mt-6 text-brand-orange-400 hover:text-brand-orange-300 font-bold text-sm transition-colors"
            >
              {p.pageDetail.label} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
