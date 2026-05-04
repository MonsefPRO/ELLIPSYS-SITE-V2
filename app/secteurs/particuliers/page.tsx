import type { Metadata } from "next";
import Link from "next/link";
import { Home, Sun, Bug, Droplets, CheckCircle2, Phone } from "lucide-react";
import ExpertQuoteSide from "@/components/ExpertQuoteSide";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Exterior Services for Private Homeowners | Ellipsys",
  description: "Roof demossing, facade cleaning, solar panels and hornet nest removal for private clients. No bleach, biodegradable, transparent quote, photo report.",
};

export default async function ParticuliersPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const services = isEn
    ? [
        {
          icon: Home,
          color: "text-slate-700",
          bg: "bg-slate-50",
          border: "border-slate-200",
          title: "Roof Demossing & Waterproofing",
          desc: "Certibiocide-approved biocide treatment and waterproof coating to eliminate moss and lichen. Gentle method — no high-pressure jet washing that damages roof tiles.",
          href: "/prestations/traitement-toiture",
        },
        {
          icon: Droplets,
          color: "text-blue-600",
          bg: "bg-blue-50",
          border: "border-blue-200",
          title: "Facade Cleaning",
          desc: "Aesthetic restoration of your facades by drone or telescopic pole. No cherry-picker, no scaffolding, no disruption to your neighbours.",
          href: "/prestations/nettoyage-facade",
        },
        {
          icon: Sun,
          color: "text-amber-500",
          bg: "bg-amber-50",
          border: "border-amber-200",
          title: "Solar Panel Cleaning",
          desc: "Osmosis water cleaning of your photovoltaic panels to restore nominal output. Measurable production gain of 4 to 7%.",
          href: "/prestations/nettoyage-solaire",
        },
        {
          icon: Bug,
          color: "text-red-600",
          bg: "bg-red-50",
          border: "border-red-200",
          title: "Hornet Emergency",
          desc: "Asian hornet nest eradication at height by Certibiocide drone. Rapid response, guaranteed nest removal, fully safe for you and your household.",
          href: "/prestations/nuisibles",
        },
      ]
    : [
        {
          icon: Home,
          color: "text-slate-700",
          bg: "bg-slate-50",
          border: "border-slate-200",
          title: "Démoussage & Hydrofuge Toiture",
          desc: "Traitement Certibiocide homologué et protection hydrofuge pour éliminer mousses et lichens. Méthode douce sans karcher haute pression qui endommage les tuiles.",
          href: "/prestations/traitement-toiture",
        },
        {
          icon: Droplets,
          color: "text-blue-600",
          bg: "bg-blue-50",
          border: "border-blue-200",
          title: "Nettoyage de Façades",
          desc: "Restauration esthétique de vos façades par drone ou perche télescopique. Aucune nacelle, aucun échafaudage, aucune nuisance pour vos voisins.",
          href: "/prestations/nettoyage-facade",
        },
        {
          icon: Sun,
          color: "text-amber-500",
          bg: "bg-amber-50",
          border: "border-amber-200",
          title: "Panneaux Solaires",
          desc: "Nettoyage à l'eau osmosée de vos panneaux photovoltaïques pour restaurer leur rendement nominal. Gain de 4 à 7% de production mesurable.",
          href: "/prestations/nettoyage-solaire",
        },
        {
          icon: Bug,
          color: "text-red-600",
          bg: "bg-red-50",
          border: "border-red-200",
          title: "Urgence Frelons",
          desc: "Destruction de nids de frelons asiatiques en grande hauteur par drone Certibiocide. Intervention rapide, retrait du nid garanti, intervention sécurisée pour vous.",
          href: "/prestations/nuisibles",
        },
      ];

  const guarantees = isEn
    ? [
        "No bleach or aggressive chemicals",
        "Approved biodegradable products",
        "Clear quote, no hidden costs",
        "Before/after photo report provided",
        "No cherry-picker or scaffolding",
        "Certibiocide-certified technicians",
      ]
    : [
        "Sans Javel ni produits agressifs",
        "Produits biodégradables homologués",
        "Devis clair et sans surprise",
        "Rapport photo avant/après fourni",
        "Pas de nacelle ni d'échafaudage",
        "Intervenants certifiés Certibiocide",
      ];

  const stats = isEn
    ? [
        { value: "< 4 h",    label: "Intervention on 200 m² of roofing" },
        { value: "5–10 yrs", label: "Waterproof coating protection duration" },
        { value: "24 h",     label: "Free quote delivered" },
        { value: "0 kg",     label: "On your roof — zero contact" },
      ]
    : [
        { value: "< 4 h",   label: "Intervention sur 200 m² de toiture" },
        { value: "5–10 ans", label: "Durée de protection hydrofuge" },
        { value: "24 h",     label: "Devis gratuit remis" },
        { value: "0 kg",     label: "Sur votre couverture — aucun contact" },
      ];

  const steps = isEn
    ? [
        { num: "01", title: "Initial Contact", desc: <span>You describe your property. We assess <strong>the type of intervention</strong> and site accessibility.</span> },
        { num: "02", title: "Free Quote in 24h", desc: <span>You receive a <strong>detailed, transparent quote</strong> within 24 hours, with no obligation.</span> },
        { num: "03", title: "On-Site Intervention", desc: <span>Our teams operate without cherry-pickers or scaffolding. <strong>No disruption</strong> for you or your neighbours.</span> },
        { num: "04", title: "Photo Report Delivered", desc: <span>You receive a complete <strong>before/after photo report</strong> as a permanent record of the intervention.</span> },
      ]
    : [
        { num: "01", title: "Prise de contact", desc: <span>Vous nous décrivez votre bien. Nous qualifions <strong>le type d&apos;intervention</strong> et l&apos;accessibilité du site.</span> },
        { num: "02", title: "Devis gratuit 24h", desc: <span>Vous recevez un <strong>devis détaillé et clair</strong> sous 24h, sans engagement.</span> },
        { num: "03", title: "Intervention sur site", desc: <span>Nos équipes interviennent sans nacelle ni échafaudage. <strong>Aucune gêne</strong> pour vous ou vos voisins.</span> },
        { num: "04", title: "Rapport photo remis", desc: <span>Vous recevez un <strong>rapport photo avant/après</strong> complet pour garder une trace de l&apos;intervention.</span> },
      ];

  const differenceItems = isEn
    ? [
        { icon: "🚫", text: <span><strong>No high-pressure jet washing</strong> that strips granules from your tiles and voids manufacturer warranties.</span> },
        { icon: "🚫", text: <span><strong>No scaffolding</strong> that damages your garden, blocks your access, and takes half a day to erect.</span> },
        { icon: "✅", text: <span>An <strong>approved Certibiocide treatment</strong> that eliminates moss and lichen at the root without damaging your tiles.</span> },
        { icon: "✅", text: <span>A <strong>breathable waterproof coating</strong> that protects your roof covering for 5 to 10 years without trapping moisture.</span> },
        { icon: "✅", text: <span>A <strong>before/after photo report</strong> to enhance your property value and support any insurance procedures.</span> },
      ]
    : [
        { icon: "🚫", text: <span><strong>Pas de karcher haute pression</strong> qui arrache les granulats de vos tuiles et annule les garanties fabricant.</span> },
        { icon: "🚫", text: <span><strong>Pas d&apos;échafaudage</strong> qui abîme votre jardin, bloque votre accès et mobilise une demi-journée de montage.</span> },
        { icon: "✅", text: <span>Un traitement <strong>Certibiocide homologué</strong> qui élimine mousses et lichens à la racine, sans agresser vos tuiles.</span> },
        { icon: "✅", text: <span>Un <strong>hydrofuge respirant</strong> qui protège votre couverture de 5 à 10 ans sans piéger l&apos;humidité.</span> },
        { icon: "✅", text: <span>Un <strong>rapport photo avant/après</strong> pour valoriser votre bien et faciliter vos démarches d&apos;assurance.</span> },
      ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">
      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-[url('/images/Toiture.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 font-medium text-base mb-6">
              {isEn ? "Private Clients · Homes · Rooftops" : "Particuliers · Maisons · Toitures"}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {isEn ? "Exterior Services for " : "Prestations extérieures pour "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                {isEn ? "Private Homeowners" : "l'Habitat Particulier"}
              </span>
            </h1>
            <p className="text-xl text-emerald-300 font-semibold mb-4 italic">
              {isEn
                ? "Professional solutions to maintain and enhance the value of your home."
                : "Des solutions professionnelles pour entretenir et valoriser votre maison."}
            </p>
          </div>
        </div>
      </section>

      <ExpertQuoteSide quote={isEn
        ? "Your roof is your home's first line of defence. Regular maintenance preserves your property for decades and prevents costly repairs. We intervene without ever setting foot on your roof."
        : "Votre toiture est le premier bouclier de votre maison. Un entretien régulier préserve votre patrimoine pendant des décennies et évite des réparations coûteuses. Nous intervenons sans jamais mettre un pied sur votre toit."
      } />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {isEn ? "4 Services for Private Clients" : "Nos 4 services pour les particuliers"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <Link key={i} href={service.href} className={`group flex flex-col p-8 rounded-3xl border ${service.bg} ${service.border} hover:shadow-md transition-shadow`}>
                <service.icon className={`w-10 h-10 ${service.color} mb-5`} />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{service.desc}</p>
                <span className={`mt-4 text-sm font-semibold ${service.color} group-hover:underline`}>
                  {isEn ? "Learn more →" : "En savoir plus →"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            {isEn ? "Our Guarantees for Private Clients" : "Nos garanties pour les particuliers"}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {guarantees.map((item, i) => (
              <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-10 bg-[#0e2f52]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="border-r border-white/10 last:border-0 px-4">
                <p className="text-3xl font-black text-emerald-400 mb-1">{s.value}</p>
                <p className="text-slate-300 text-xs leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              {isEn ? "How Does It Work?" : "Comment ça se passe ?"}
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              {isEn
                ? <>A simple, transparent process — <strong>no surprises</strong>.</>
                : <>Un processus simple, transparent, <strong>sans surprise</strong>.</>}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-black flex items-center justify-center text-xl shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform mb-5">
                  {step.num}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-base">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[420px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/drone-toiture-intervention.png')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs font-bold backdrop-blur-sm">
                  {isEn ? "No cherry-picker · Zero contact" : "Intervention sans nacelle · Sans contact"}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white text-xs font-semibold">
                  {isEn
                    ? "Drone roof treatment — zero contact with the roof covering"
                    : "Traitement de toiture par drone — aucun pied posé sur la couverture"}
                </p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-widest mb-5">
                {isEn ? "The Ellipsys Difference" : "La différence Ellipsys"}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {isEn
                  ? "Why our methods protect your home better"
                  : "Pourquoi nos méthodes protègent mieux votre maison"}
              </h2>
              <div className="space-y-4">
                {differenceItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-emerald-900 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isEn ? "Your Home Deserves the Best Care" : "Votre maison mérite le meilleur entretien"}
          </h2>
          <p className="text-slate-300 mb-10">
            {isEn
              ? <><strong>Free quote within 24 hours.</strong> Intervention possible from the following week.</>
              : <><strong>Devis gratuit sous 24h.</strong> Intervention possible dès la semaine suivante.</>}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-colors shadow-lg">
              {isEn ? "Request a Free Quote" : "Demander un devis gratuit"}
            </Link>
            <a href="tel:0467209709" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-colors border border-white/30">
              <Phone className="w-5 h-5" /> 04 67 20 97 09
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
