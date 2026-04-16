import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sun, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nettoyage robotisé de panneaux solaires et restauration de rendement | Ellipsys",
  description: "Robot Rony et drone Chronos pour le nettoyage de parcs solaires. Eau osmosée, inspection thermographique, contrats annuels. Gain de rendement mesurable. CARSAT, AIE PVPS.",
};

const benefits = [
  {
    title: "Continuité Opérationnelle Absolue",
    desc: "Le nettoyage par drone ou robot garantit une absence totale de perturbation de votre activité. Nos solutions ne bloquent ni votre production, ni vos flux logistiques.",
  },
  {
    title: "Une Sécurité Validée par les Institutions (CARSAT / FFB)",
    desc: "En éliminant le travail en toiture, vous êtes déchargé de lourdes responsabilités civiles et pénales en tant que donneur d'ordre, en stricte conformité avec les directives de la CARSAT.",
  },
  {
    title: "La Sauvegarde de vos Revenus (AIE PVPS)",
    desc: "Selon l'Agence Internationale de l'Énergie (AIE PVPS), l'encrassement naturel ampute de 4 à 7% la production mondiale. Lors des épisodes de sables sahariens, la perte peut grimper jusqu'à 30%.",
  },
  {
    title: "L'Argument Écologique (Économie d'Eau)",
    desc: "Nos robots divisent la consommation d'eau par dix. Là où un nettoyage manuel gaspille 15 à 25 litres par m², nos robots nettoient avec seulement 0,5 à 2 litres d'eau osmosée par m².",
  },
  {
    title: "Pérennisez vos revenus avec nos Contrats Annuels",
    desc: "Pour vous garantir l'esprit tranquille, nous proposons des contrats de maintenance préventive (1 à 2 passages annuels programmés).",
  },
];

export default function PanneauxPhotovoltaiquesPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">

      <section className="relative bg-[#0e2f52] text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/Energie%20Solaiire.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e2f52] via-[#0e2f52]/85 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 font-medium text-base mb-6">
              Énergie Solaire · Performance · Longévité
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              Nettoyage de Parcs Photovoltaïques :{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-brand-orange-500">
                Sécurisez votre Rentabilité
              </span>
            </h1>
            <p className="text-xl text-amber-300 font-semibold mb-4 italic">
              {"Ne laissez pas l'encrassement dévorer vos revenus énergétiques."}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/devis" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-brand-orange-600 text-white rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                Demander un audit de rendement <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Restauration du Rendement Solaire<br />(Robotique Terrestre et Aérienne)</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Un parc solaire encrassé subit d&apos;importantes pertes de production. Notre <strong>Robot Rony</strong>, pesant seulement 7 kg, nettoie jusqu&apos;à <strong>800 m² par heure</strong> en s&apos;adaptant à des pentes allant jusqu&apos;à 35%. L&apos;association de brosses rotatives souples et d&apos;un rinçage à l&apos;eau osmosée garantit la restitution optimale de l&apos;efficacité nominale de vos panneaux.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-5 mb-12">
            {benefits.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-8 p-5 bg-slate-100 rounded-xl border border-slate-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-500 leading-relaxed italic">
              <strong>Mentions légales :</strong> Les gains de rendement mentionnés sont des moyennes constatées. Les résultats réels dépendent des conditions météorologiques et du tarif d&apos;achat de l&apos;électricité. Ils ne constituent en aucun cas une garantie contractuelle absolue.
            </p>
          </div>
        </div>
      </section>

      {/* ARBRE DÉCISIONNEL */}
      <section className="py-20 bg-amber-50 border-y border-amber-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">{"L'Outil Adapté à la Topologie"}</h2>
          <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
            Le choix de la technologie ne s&apos;improvise pas. Il répond à un logigramme strict pour garantir sécurité et efficacité.
          </p>

          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              {
                q: "La surface est-elle fragile (tuiles anciennes, toitures amiantées) ?",
                yes: "DRONE (Zéro contact, pulvérisation en vol stationnaire).",
                no: "Évaluer l'inclinaison."
              },
              {
                q: "L'inclinaison de l'infrastructure est-elle supérieure à 35% ?",
                yes: "DRONE (Affranchissement de la gravité, sécurité anti-chute).",
                no: "Évaluer la superficie."
              },
              {
                q: "S'agit-il d'une vaste surface dégagée et continue ?",
                yes: "ROBOT CHENILLÉ (Action mécanique par brosses rotatives, 800 m²/h).",
                no: "DRONE ou SOLUTION HYBRIDE."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-amber-200 shadow-sm">
                <p className="font-bold text-slate-900 mb-3">{item.q}</p>
                <div className="pl-4 border-l-4 border-amber-400">
                  <p className="text-sm text-slate-700"><strong className="text-amber-600">OUI ➔ {item.yes}</strong></p>
                  <p className="text-sm text-slate-700 mt-1"><strong>NON ➔</strong> {item.no}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0e2f52] to-amber-950 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Sun className="w-10 h-10 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">Optimisez votre retour sur investissement solaire</h2>
          <p className="text-slate-300 mb-10 text-lg">Un encrassement non traité vous coûte en revenus perdus chaque jour.</p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-brand-orange-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            Demander un audit de rendement <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
