import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin, ChevronRight, CheckCircle2, Building2, Home,
  ShieldCheck, Sun, Users, Clock, Star, AlertTriangle, Landmark, HelpCircle,
} from "lucide-react";
import { getLang } from "@/lib/getLang";
import { getVille, VILLES_AUTORISEES } from "@/lib/villes";

type Props = { params: Promise<{ ville: string }> };

// Seules les villes de la liste blanche existent. Toute autre URL renvoie un 404 :
// sans ça, /intervention/nimportequoi retournait un 200 avec du contenu template —
// c'est la définition même d'une doorway page pour Google.
export function generateStaticParams() {
  return VILLES_AUTORISEES.map((ville) => ({ ville }));
}
export const dynamicParams = false;

const cityImages: Record<string, string> = {
  "montpellier": "/images/montpellier.png",
  "nimes": "/images/nimes.png",
  "marseille": "/images/marseille.png",
  "paris": "/images/paris.png",
  "lyon": "/images/lyon.png",
  "bordeaux": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1920&q=80",
  "toulouse": "/images/toulouse.png",
  "nice": "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1920&q=80",
  "avignon": "https://images.unsplash.com/photo-1547980695-33d0f48e53a1?auto=format&fit=crop&w=1920&q=80",
  "aix-en-provence": "https://images.unsplash.com/photo-1602524816290-a4d4a0b9e5c6?auto=format&fit=crop&w=1920&q=80",
  "toulon": "https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?auto=format&fit=crop&w=1920&q=80",
  "perpignan": "https://images.unsplash.com/photo-1551882547-ff40c4a49f6d?auto=format&fit=crop&w=1920&q=80",
  "montauban": "https://images.unsplash.com/photo-1558618047-3c8c76a4fd27?auto=format&fit=crop&w=1920&q=80",
  "sete": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1920&q=80",
  "beziers": "https://images.unsplash.com/photo-1569510741685-af7ea56e9e56?auto=format&fit=crop&w=1920&q=80",
  "narbonne": "https://images.unsplash.com/photo-1543716091-a840c05249ec?auto=format&fit=crop&w=1920&q=80",
  "ales": "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=1920&q=80",
  "arles": "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1920&q=80",
  "lunel": "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1920&q=80",
  "agde": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1920&q=80",
};

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1499856374071-01a4e6a11a85?auto=format&fit=crop&w=1920&q=80";

function formatVilleName(slug: string) {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const citySlug = resolvedParams.ville.toLowerCase();
  const data = getVille(citySlug);
  // Le slug est désaccentué (sete, nimes, beziers) : on reprend le nom réel
  // dès qu'on l'a, sinon le H1 et le title afficheraient « Sete » ou « Nimes ».
  const villeName = data?.nom ?? formatVilleName(resolvedParams.ville);

  // Description unique par ville quand on a du contenu local, évite les
  // meta dupliquées sur 20 pages, que Google traite comme du contenu dupliqué.
  return {
    title: `Nettoyage par drone à ${villeName} : panneaux solaires, toiture & façade`,
    description: data
      ? `Démoussage de toiture, nettoyage de façade et de panneaux solaires par drone à ${villeName} (${data.codeDept}). ${data.accroche} Devis gratuit sous 24 h.`
      : `Ellipsys intervient à ${villeName} : nettoyage de panneaux solaires, démoussage de toiture, nettoyage de façade et thermographie par drone. Sans échafaudage. Devis gratuit sous 24h.`,
    alternates: { canonical: `https://ellipsys-solutions.com/intervention/${citySlug}` },
  };
}

export default async function VillePage({ params }: Props) {
  const resolvedParams = await params;
  const citySlug = resolvedParams.ville.toLowerCase();
  const cityImage = cityImages[citySlug] ?? DEFAULT_IMAGE;
  const lang = await getLang();
  const isEn = lang === "en";

  if (!VILLES_AUTORISEES.includes(citySlug)) notFound();

  const data = getVille(citySlug);
  const villeName = data?.nom ?? formatVilleName(resolvedParams.ville);
  // Le contenu local enrichi est rédigé en français et cible des requêtes
  // françaises : on ne le rend pas en version EN plutôt que d'afficher une
  // traduction automatique de mauvaise qualité.
  const showLocal = Boolean(data) && !isEn;

  const jsonLd = data
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "name": `Nettoyage par drone à ${data.nom}`,
            "serviceType": "Nettoyage de panneaux solaires, démoussage de toiture et nettoyage de façade par drone",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ellipsys Solutions",
              "telephone": "+33467209709",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "159 Rue de Thor",
                "addressLocality": "Montpellier",
                "postalCode": "34000",
                "addressRegion": "Occitanie",
                "addressCountry": "FR",
              },
              "url": "https://ellipsys-solutions.com",
            },
            "areaServed": [
              { "@type": "City", "name": data.nom },
              ...data.communes.map((c) => ({ "@type": "City", "name": c })),
            ],
            "url": `https://ellipsys-solutions.com/intervention/${data.slug}`,
          },
          {
            "@type": "FAQPage",
            "mainEntity": data.faq.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.r },
            })),
          },
        ],
      }
    : null;

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* HERO */}
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-28 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${cityImage}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 text-brand-orange-400 font-bold text-sm mb-6">
            <MapPin className="w-4 h-4" /> {isEn ? `On-site operation in ${villeName}` : `Intervention sur site à ${villeName}`}
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            {isEn
              ? <>Drone Cleaning, Facades, Rooftops &amp; Solar Panels in <span className="text-brand-orange-500">{villeName}</span></>
              : <>Nettoyage façades, toitures &amp; panneaux solaires à <span className="text-brand-orange-500">{villeName}</span> par drone</>}
          </h1>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl mx-auto">
            {isEn
              ? <>Ellipsys operates in <strong>{villeName}</strong>, no scaffolding, no cherry picker. Roof demossing, <strong>solar panel cleaning</strong>, <strong>building thermal imaging</strong> and facade maintenance, free quote within 24h.</>
              : <>Ellipsys intervient à <strong>{villeName}</strong> sans échafaudage, sans nacelle. Démoussage, <strong>nettoyage de panneaux solaires</strong>, <strong>thermographie bâtiment</strong> et entretien de façades, devis gratuit sous 24 h.</>}
          </p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange-500 text-white rounded-xl font-bold hover:bg-brand-orange-600 transition-colors shadow-lg text-lg">
            {isEn ? `Get a free quote in ${villeName}` : `Obtenir un devis gratuit à ${villeName}`} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ─── CONTENU LOCAL ENRICHI (FR uniquement) ─────────────────────── */}
      {showLocal && data && (
        <>
          {/* Bandeau chiffres locaux */}
          <div className="bg-[#0e2f52] border-t border-white/10 py-8">
            <div className="container mx-auto px-4 max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { k: data.departement, v: `Département ${data.codeDept}` },
                { k: data.delai, v: "Mobilisation d'une équipe" },
                { k: "24 h", v: "Devis gratuit" },
                { k: `${data.communes.length + 1}`, v: "Communes desservies" },
              ].map((s) => (
                <div key={s.v}>
                  <p className="text-2xl lg:text-3xl font-black text-brand-orange-500 leading-tight">{s.k}</p>
                  <p className="text-slate-300 text-xs mt-1 uppercase tracking-wide">{s.v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Le bâti local */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Nettoyage par drone à {data.nom} : ce que nous y rencontrons
                </h2>
                {data.intro.map((p, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed mb-5 text-[15px]">{p}</p>
                ))}
                <p className="text-slate-500 text-sm leading-relaxed">
                  Nous intervenons notamment sur les quartiers {data.quartiers.slice(0, -1).join(", ")} et {data.quartiers.slice(-1)}.
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl border border-slate-100 p-8 h-fit">
                <div className="flex items-center gap-3 mb-5">
                  <Landmark className="w-6 h-6 text-brand-orange-500" />
                  <h3 className="text-lg font-bold text-slate-900">Le bâti à {data.nom}</h3>
                </div>
                <ul className="space-y-3">
                  {data.typologies.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Facteurs de dégradation locaux */}
          <section className="py-20 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-14">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  Ce qui dégrade les bâtiments à {data.nom}
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  Chaque territoire a ses propres agressions. Connaître celles de {data.nom}, c&apos;est
                  choisir le bon traitement, et la bonne fréquence d&apos;entretien.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {data.facteurs.map((f) => (
                  <div key={f.titre} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 rounded-2xl bg-brand-orange-500/10 flex items-center justify-center mb-5">
                      <AlertTriangle className="w-6 h-6 text-brand-orange-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">{f.titre}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.texte}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* EXPERT QUOTE */}
      {!showLocal && (
      <div className="bg-[#0e2f52] border-t border-white/10 py-10">
        <div className="container mx-auto px-4 max-w-4xl flex items-start gap-5">
          <span className="text-brand-orange-500 text-6xl font-bold leading-none -mt-2 select-none">&ldquo;</span>
          <div>
            <p className="text-white text-lg font-semibold italic leading-relaxed mb-2">
              {isEn
                ? <>In {villeName}, the local climate accelerates facade soiling, moss growth on rooftops and solar panel output loss. Our <strong>DGAC-certified</strong> drones allow us to operate anywhere, even in hard-to-access locations, <strong>without disrupting activity</strong>.</>
                : <>À {villeName}, le climat local accélère l&apos;encrassement des façades, l&apos;apparition de mousses sur les toitures et la perte de rendement des panneaux solaires. Nos drones <strong>certifiés DGAC</strong> permettent d&apos;intervenir partout, même en accès difficile, <strong>sans interruption d&apos;activité</strong>.</>}
            </p>
            <p className="text-brand-orange-400 font-bold text-sm tracking-wide">
              {isEn ? `— Ellipsys Solutions Expert, operating in ${villeName}` : `— Expert Ellipsys Solutions, intervenant à ${villeName}`}
            </p>
          </div>
        </div>
      </div>
      )}

      {/* INTERVENTIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              {isEn
                ? `Our drone operations in ${villeName} and surrounding area`
                : `Nos interventions par drone à ${villeName} et son agglomération`}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              {isEn
                ? <><strong>No scaffolding, no cherry picker</strong>, faster, safer, adapted to all building types.</>
                : <>Une méthode <strong>sans échafaudage, sans nacelle</strong>, plus rapide, plus sûre, adaptée à tous types de bâtiments.</>}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Professionals */}
            <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{isEn ? "Businesses" : "Professionnels"}</h3>
              </div>
              <ul className="space-y-3 text-slate-600 text-sm flex-1">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>{isEn ? <><strong>Industrial cladding cleaning</strong> without interrupting operations</> : <><strong>Nettoyage de bardages industriels</strong> sans interruption d&apos;activité</>}</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>{isEn ? <><strong>Solar panel cleaning in {villeName}</strong>, recover up to 30% in output</> : <><strong>Nettoyage de panneaux solaires à {villeName}</strong>, récupérez jusqu&apos;à 30 % de rendement</>}</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>{isEn ? <><strong>Building thermal imaging</strong> by drone: thermal bridge and infiltration detection</> : <><strong>Thermographie bâtiment</strong> par drone : détection de ponts thermiques et infiltrations</>}</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>{isEn ? "Maintenance of datacenters, logistics warehouses, glazed facades" : "Entretien de datacenters, entrepôts logistiques, façades vitrées"}</span></li>
              </ul>
            </div>

            {/* Private / Co-ownership */}
            <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{isEn ? "Private Clients & Co-ownerships" : "Particuliers & Copropriétés"}</h3>
              </div>
              <ul className="space-y-3 text-slate-600 text-sm flex-1">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>{isEn ? <><strong>Roof demossing in {villeName}</strong>, no broken tiles, no fall risk</> : <><strong>Démoussage toiture à {villeName}</strong>, aucune tuile cassée, aucun risque de chute</>}</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>{isEn ? <><strong>Facade cleaning in {villeName}</strong>: render, stone, plaster, concrete</> : <><strong>Nettoyage façade à {villeName}</strong> : crépi, pierre, enduit, béton</>}</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>{isEn ? "Anti-moss treatment and long-lasting waterproofing" : "Traitement anti-mousses et hydrofuge longue durée"}</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>{isEn ? <>Disinfection and <strong>pest</strong> treatment (pigeons, droppings, insects)</> : <>Désinfection et traitement <strong>nuisibles</strong> (pigeons, fientes, insectes)</>}</span></li>
              </ul>
            </div>

            {/* Public / Heritage */}
            <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{isEn ? "Public Sector & Heritage" : "Secteur Public & Monuments"}</h3>
              </div>
              <ul className="space-y-3 text-slate-600 text-sm flex-1">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>{isEn ? <>Cleaning of <strong>listed monuments</strong> and heritage buildings</> : <>Nettoyage de <strong>monuments historiques</strong> et bâtiments classés</>}</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>{isEn ? <><strong>Local authority</strong> maintenance: town halls, schools, sports halls</> : <>Entretien des <strong>collectivités locales</strong> : mairies, écoles, gymnases</>}</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>{isEn ? "Drone inspection of bridges, viaducts and structures" : "Inspection drone de ponts, viaducs et ouvrages d'art"}</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>{isEn ? <><strong>Drone in {villeName}</strong> for mapping and 3D surveying</> : <><strong>Drone à {villeName}</strong> pour cartographie et relevé 3D</>}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ELLIPSYS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              {isEn
                ? `Why choose Ellipsys for your project in ${villeName}?`
                : `Pourquoi choisir Ellipsys pour votre projet à ${villeName} ?`}
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              {isEn
                ? "We combine cutting-edge drone technology and field expertise for lasting results, without the constraints of traditional methods."
                : "Nous combinons technologie drone de pointe et expertise terrain pour des résultats durables, sans les contraintes des méthodes traditionnelles."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-5">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange-500/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-brand-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {isEn ? `Rapid response in ${villeName}` : `Intervention rapide à ${villeName}`}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {isEn
                    ? <>Our teams are <strong>mobilisable within 48h</strong> in {villeName} and the surrounding area. Response and free quote within <strong>24h</strong>, guaranteed.</>
                    : <>Nos équipes sont <strong>mobilisables sous 48 h</strong> sur {villeName} et son agglomération. Réponse et devis gratuit sous <strong>24 h</strong> garanti.</>}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Sun className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {isEn ? "No scaffolding, no cherry picker" : "Aucun échafaudage, aucune nacelle"}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {isEn
                    ? <>Our drones access <strong>all elevated areas without cherry pickers or scaffolding</strong>: zero fall risk, zero road obstruction, non-intrusive operations.</>
                    : <>Nos drones accèdent à <strong>toutes les zones en hauteur sans nacelle ni échafaudage</strong> : zéro risque de chute, zéro obstruction de voirie, intervention non intrusive.</>}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {isEn ? "DGAC / EASA Certified" : "Certifiés DGAC / EASA"}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {isEn
                    ? <>All our pilots are <strong>DGAC certified</strong> and operate in EASA compliance. Our pest treatments are carried out by <strong>Certibiocide-accredited</strong> operators.</>
                    : <>Tous nos pilotes sont <strong>certifiés DGAC</strong> et opèrent en conformité EASA. Nos traitements de nuisibles sont réalisés par des opérateurs <strong>habilités Certibiocide</strong>.</>}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-5">
              <div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-violet-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {isEn ? "Free quote within 24h" : "Devis gratuit sous 24 h"}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {isEn
                    ? <>Describe your project online, receive a <strong>personalised free quote</strong> tailored to your building in {villeName}, no commitment, no site visit required.</>
                    : <>Décrivez votre projet en ligne, recevez un <strong>devis personnalisé gratuit</strong> adapté à votre bâtiment à {villeName}, sans engagement, sans déplacement.</>}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMMUNES DESSERVIES + FAQ LOCALE ──────────────────────────── */}
      {showLocal && data && (
        <>
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Nos zones d&apos;intervention autour de {data.nom}
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  Nous nous déplaçons sur {data.nom} et l&apos;ensemble des communes
                  limitrophes, en {data.departement} et au-delà.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2.5">
                <span className="px-4 py-2 rounded-full bg-brand-orange-500 text-white text-sm font-bold">
                  {data.nom}
                </span>
                {data.communes.map((c) => (
                  <span
                    key={c}
                    className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="text-center text-slate-400 text-sm mt-8">
                Votre commune n&apos;apparaît pas ?{" "}
                <Link href="/zone-intervention" className="text-brand-orange-500 font-semibold hover:underline">
                  Consultez notre zone d&apos;intervention
                </Link>{" "}
                ou{" "}
                <Link href="/devis" className="text-brand-orange-500 font-semibold hover:underline">
                  demandez-nous directement
                </Link>.
              </p>
            </div>
          </section>

          <section className="py-20 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Questions fréquentes à {data.nom}
                </h2>
              </div>
              <div className="space-y-5">
                {data.faq.map((f) => (
                  <div key={f.q} className="bg-white p-7 rounded-3xl shadow-sm border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-3 flex items-start gap-3 leading-snug">
                      <HelpCircle className="w-5 h-5 text-brand-orange-500 mt-0.5 flex-shrink-0" />
                      {f.q}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed pl-8">{f.r}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CERTIFICATIONS */}
      <section className="bg-[#0e2f52] py-10">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-slate-400 text-xs uppercase tracking-widest mb-4 font-semibold">
            {isEn ? "Our certifications" : "Nos certifications"}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-white font-semibold text-sm">
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-brand-orange-400" /><strong>{isEn ? "DGAC Certified" : "Certifié DGAC"}</strong></span>
            <span className="text-white/30 hidden sm:inline">·</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-brand-orange-400" />{isEn ? "Aerial" : "Assurance"} <strong>{isEn ? "Civil Liability" : "RC Aérienne"}</strong></span>
            <span className="text-white/30 hidden sm:inline">·</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-brand-orange-400" />{isEn ? "Accreditation" : "Habilitation"} <strong>Certibiocide</strong></span>
            <span className="text-white/30 hidden sm:inline">·</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-brand-orange-400" />{isEn ? "Scenarios" : "Scénarios"} <strong>STS-01 / STS-02</strong></span>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {isEn
              ? `Ready to entrust your project to our drone experts in ${villeName}?`
              : `Prêt à confier votre projet à nos experts drone à ${villeName} ?`}
          </h2>
          <p className="text-slate-500 mb-8 text-lg">
            {isEn
              ? <>Facade cleaning, roof demossing, solar panel cleaning or building thermal imaging in <strong>{villeName}</strong>, answer a few questions and get your <strong>free quote within 24h</strong>.</>
              : <>Nettoyage façade, démoussage toiture, nettoyage panneaux solaires ou thermographie bâtiment à <strong>{villeName}</strong>, répondez à quelques questions et obtenez votre <strong>devis gratuit sous 24 h</strong>.</>}
          </p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-brand-orange-500 text-white rounded-xl font-bold hover:bg-brand-orange-600 transition-colors shadow-lg text-lg">
            {isEn ? `Get a free quote in ${villeName}` : `Obtenir un devis gratuit à ${villeName}`} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
