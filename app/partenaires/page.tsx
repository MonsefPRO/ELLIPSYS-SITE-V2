import type { Metadata } from "next";
import Link from "next/link";
import { Handshake, Building, ArrowRight, Megaphone, Users, ChevronRight, Briefcase } from "lucide-react";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Partnerships, Prescribers & Recruitment | Ellipsys Solutions",
  description: "Cleaning companies, estate agents, business introducers: let's join forces. Discover our partnership offers and join the Ellipsys network.",
};

export default async function PartenairesPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const profils = isEn
    ? [
        {
          icon: ArrowRight,
          color: "bg-blue-50",
          iconColor: "text-blue-600",
          title: "Cleaning Companies",
          desc: "You manage interiors, we manage exteriors. Stop turning down clients who need high-altitude cladding or roof cleaning.",
          points: [
            <><strong>Transparent white-label subcontracting</strong> or co-contracting.</>,
            "We manage all height certifications and safety.",
            "A comprehensive offer to retain your clients.",
          ],
        },
        {
          icon: Building,
          color: "bg-emerald-50",
          iconColor: "text-emerald-600",
          title: "Real Estate & Architects",
          desc: "Enhance a property before listing it or ensure a pristine exterior for an architect's handover.",
          points: [
            "Rapid aesthetic cleaning before photo shoots.",
            <><strong>Roof demossing</strong> to reassure prospective buyers.</>,
            "Partnerships with building management companies.",
          ],
        },
        {
          icon: Megaphone,
          color: "bg-brand-orange-50",
          iconColor: "text-brand-orange-600",
          title: "Business Introducers",
          desc: "You have a strong network in industry, solar or local authorities? You identify technical cleaning needs? Let us reward your network.",
          points: [
            <><strong>Attractive commission</strong> on signed contracts.</>,
            "Clear and transparent business introducer agreement.",
            "You connect, we operate and invoice.",
          ],
        },
      ]
    : [
        {
          icon: ArrowRight,
          color: "bg-blue-50",
          iconColor: "text-blue-600",
          title: "Entreprises de Propreté",
          desc: "Vous gérez l'intérieur, nous gérons l'extérieur. Ne dites plus non à vos clients pour le nettoyage de leurs bardages grande hauteur ou de leurs toitures.",
          points: [
            <><strong>Sous-traitance transparente</strong> en marque blanche ou co-traitance.</>,
            "Nous gérons les habilitations hauteur et la sécurité.",
            "Offre globale pour fidéliser vos clients.",
          ],
        },
        {
          icon: Building,
          color: "bg-emerald-50",
          iconColor: "text-emerald-600",
          title: "Immobilier & Architectes",
          desc: "Valorisez un bien avant sa mise en vente ou assurez la réception d'un chantier d'architecte avec des extérieurs impeccables.",
          points: [
            "Nettoyage esthétique rapide avant shooting photo.",
            <><strong>Démoussage toiture</strong> pour rassurer les futurs acquéreurs.</>,
            "Partenariats avec syndics de copropriété.",
          ],
        },
        {
          icon: Megaphone,
          color: "bg-brand-orange-50",
          iconColor: "text-brand-orange-600",
          title: "Apporteurs d'Affaires",
          desc: "Vous avez un fort réseau dans l'industrie, le solaire ou les collectivités ? Vous détectez des besoins en nettoyage technique ? Rémunérons votre réseau.",
          points: [
            <><strong>Commissionnement attractif</strong> sur les chantiers signés.</>,
            "Contrat d'apporteur d'affaires clair et transparent.",
            "Vous connectez, nous opérons et facturons.",
          ],
        },
      ];

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">

      <section className="bg-[#0e2f52] text-white py-20 lg:py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-slate-300 font-bold text-sm mb-6">
            <Handshake className="w-4 h-4" /> {isEn ? "Network & Synergies" : "Réseau & Synergies"}
          </div>
          <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
            {isEn
              ? <>Alone, we go faster. <br /><span className="text-brand-orange-500">Together, we go higher.</span></>
              : <>Seuls, on va plus vite. <br /><span className="text-brand-orange-500">Ensemble, on va plus haut.</span></>}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {isEn
              ? "You reach clients who have hard-to-access requirements? We have the technical expertise to meet them. Let's build a mutually beneficial partnership."
              : "Vous touchez des clients qui ont des besoins en accès difficile ? Nous avons la technicité pour y répondre. Construisons un partenariat gagnant-gagnant."}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {profils.map((profil, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                <div className={`w-14 h-14 ${profil.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <profil.icon className={`w-7 h-7 ${profil.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{profil.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">{profil.desc}</p>
                <ul className="space-y-3 text-sm text-slate-700 mb-8 font-medium">
                  {profil.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-brand-orange-500 shrink-0">🔹</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-[#0e2f52] p-10 lg:p-14 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-12 shadow-2xl">
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-brand-orange-500" />
                <h2 className="text-3xl font-bold">{isEn ? "Careers & Talent" : "Candidatures & Talents"}</h2>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                {isEn
                  ? <>Ellipsys Solutions is growing. We are regularly seeking technical, rigorous profiles who are aware of safety challenges: <strong className="text-white">experienced remote pilots, industrial rope access technicians, or exterior maintenance specialists.</strong></>
                  : <>Ellipsys Solutions grandit. Nous sommes régulièrement à la recherche de profils techniques, rigoureux, et conscients des enjeux de sécurité : <strong className="text-white">télépilotes expérimentés, cordistes, ou techniciens de maintenance extérieure.</strong></>}
              </p>
              <p className="text-sm text-slate-400">
                {isEn
                  ? "Is innovation and safety at the core of your DNA? Let's talk."
                  : "L'innovation et la securite sont au coeur de votre ADN ? Discutons-en."}
              </p>
            </div>
            <div className="md:w-1/3 w-full">
              <a
                href="mailto:contact@ellipsys-solutions.com"
                className="w-full flex items-center justify-center gap-2 px-8 py-5 bg-brand-orange-500 text-white rounded-xl font-bold text-lg hover:bg-brand-orange-600 transition-colors shadow-lg"
              >
                <Briefcase className="w-5 h-5" /> {isEn ? "Apply Now" : "Postuler"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          {isEn ? "Let's Discuss Our Synergies" : "Discutons de nos synergies"}
        </h2>
        <p className="text-slate-600 mb-10 text-lg max-w-2xl mx-auto">
          {isEn
            ? <>Contact our management directly to establish a <strong>commercial partnership</strong> or subcontracting agreement.</>
            : <>Contactez directement notre direction pour mettre en place un <strong>partenariat commercial</strong> ou un accord de sous-traitance.</>}
        </p>
        <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-[#0e2f52] text-white rounded-xl font-bold text-lg hover:bg-[#1a3d65] transition-colors shadow-xl">
          {isEn ? "Propose a Partnership" : "Proposer un partenariat"} <ChevronRight className="w-5 h-5" />
        </Link>
      </section>

    </main>
  );
}
