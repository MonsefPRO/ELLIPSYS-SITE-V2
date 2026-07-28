import type { Metadata } from "next";
import Link from "next/link";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales d'Ellipsys Solutions : identification de la société, siège social, immatriculation, hébergeur et propriété intellectuelle.",
  alternates: { canonical: "https://ellipsys-solutions.com/mentions-legales" },
  // Page légale : utile aux visiteurs et à la confiance, mais sans valeur de
  // classement. On l'autorise à l'index sans la mettre en avant.
  robots: { index: true, follow: true },
};

type Ligne = { label: string; value: React.ReactNode };

export default async function MentionsLegalesPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  /* ── Identification de la société (source : registre du commerce) ────── */
  const societe: Ligne[] = [
    { label: isEn ? "Company name" : "Dénomination sociale", value: "Ellipsys Solutions" },
    {
      label: isEn ? "Legal form" : "Forme juridique",
      value: isEn
        ? "SASU — simplified joint-stock company with a sole shareholder"
        : "SASU — société par actions simplifiée unipersonnelle",
    },
    { label: isEn ? "Share capital" : "Capital social", value: "3 000,00 €" },
    {
      label: isEn ? "Registered office" : "Siège social",
      value: "42 Placette de la Lucque, 30470 Aimargues, France",
    },
    {
      label: isEn ? "Offices" : "Bureaux",
      value: "159 Rue de Thor, 34000 Montpellier, France",
    },
    { label: "SIREN", value: "999 957 533" },
    { label: isEn ? "SIRET (registered office)" : "SIRET (siège)", value: "999 957 533 00014" },
    {
      label: isEn ? "Trade register" : "Immatriculation au RCS",
      value: isEn
        ? "999 957 533 R.C.S. Nîmes — registered on 20 January 2026"
        : "999 957 533 R.C.S. Nîmes — inscrite le 20 janvier 2026",
    },
    { label: isEn ? "VAT number" : "N° de TVA intracommunautaire", value: "FR74999957533" },
    {
      label: isEn ? "Business activity (APE/NAF)" : "Code APE / NAF",
      value: isEn
        ? "74.90B — Other professional, scientific and technical activities"
        : "74.90B — Autres activités spécialisées, scientifiques et techniques",
    },
    {
      label: isEn ? "Declared activity" : "Activité déclarée",
      value: isEn
        ? "Aerial work carried out by drone"
        : "L'exécution de travaux aériens au moyen de drones",
    },
  ];

  /* ── Contact et publication ──────────────────────────────────────────── */
  const contact: Ligne[] = [
    { label: isEn ? "Telephone" : "Téléphone", value: "04 67 20 97 09" },
    {
      label: isEn ? "Email" : "E-mail",
      value: (
        <a href="mailto:contact@ellipsys-group.com" className="text-brand-orange-600 hover:underline">
          contact@ellipsys-group.com
        </a>
      ),
    },
    {
      label: isEn ? "Publication director" : "Directeur de la publication",
      value: isEn
        ? "The legal representative of Ellipsys Solutions"
        : "Le représentant légal d'Ellipsys Solutions",
    },
    {
      label: isEn ? "President" : "Président",
      value: "Ellipsys Holding",
    },
  ];

  /* ── Hébergeur ───────────────────────────────────────────────────────── */
  const hebergeur: Ligne[] = [
    { label: isEn ? "Host" : "Hébergeur", value: "Netlify, Inc." },
    {
      label: isEn ? "Address" : "Adresse",
      value: "512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis",
    },
    {
      label: isEn ? "Website" : "Site web",
      value: (
        <a
          href="https://www.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-orange-600 hover:underline"
        >
          netlify.com
        </a>
      ),
    },
  ];

  const Bloc = ({ titre, lignes }: { titre: string; lignes: Ligne[] }) => (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">{titre}</h2>
      <dl className="space-y-3">
        {lignes.map((l) => (
          <div key={l.label} className="grid sm:grid-cols-[minmax(0,220px)_1fr] gap-1 sm:gap-4">
            <dt className="text-sm font-semibold text-slate-500">{l.label}</dt>
            <dd className="text-sm text-slate-800">{l.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-20 bg-slate-50">
      <section className="bg-[#0e2f52] text-white py-16 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-black mb-4">
            {isEn ? "Legal Notice" : "Mentions légales"}
          </h1>
          <p className="text-slate-300 text-lg">
            {isEn
              ? "Information required under Article 6-III of the French LCEN Act."
              : "Informations requises par l'article 6-III de la loi pour la confiance dans l'économie numérique."}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <Bloc titre={isEn ? "1. Company identification" : "1. Éditeur du site"} lignes={societe} />
          <Bloc titre={isEn ? "2. Contact and publication" : "2. Contact et publication"} lignes={contact} />
          <Bloc titre={isEn ? "3. Hosting" : "3. Hébergement"} lignes={hebergeur} />

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {isEn ? "4. Professional certifications" : "4. Certifications professionnelles"}
            </h2>
            <ul className="text-slate-600 text-sm space-y-2 list-disc list-inside leading-relaxed">
              {isEn ? (
                <>
                  <li>Drone pilots certified by the DGAC (French Civil Aviation Authority)</li>
                  <li>Operations compliant with EASA standard scenarios STS-01 and STS-02</li>
                  <li>Aerial civil liability insurance</li>
                  <li>Certibiocide accreditation for pest control operations</li>
                </>
              ) : (
                <>
                  <li>Télépilotes certifiés DGAC (Direction générale de l&apos;aviation civile)</li>
                  <li>Opérations conformes aux scénarios standards européens EASA STS-01 et STS-02</li>
                  <li>Assurance responsabilité civile aérienne</li>
                  <li>Habilitation Certibiocide pour les interventions de traitement de nuisibles</li>
                </>
              )}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {isEn ? "5. Intellectual property" : "5. Propriété intellectuelle"}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEn
                ? "The entire content of this website — texts, photographs, videos, graphics, logo and page structure — is the exclusive property of Ellipsys Solutions, unless otherwise stated. Any reproduction, representation, modification or distribution, in whole or in part, without prior written authorisation is prohibited and constitutes an infringement under Articles L.335-2 and following of the French Intellectual Property Code."
                : "L'ensemble du contenu de ce site — textes, photographies, vidéos, éléments graphiques, logo et structure des pages — est la propriété exclusive d'Ellipsys Solutions, sauf mention contraire. Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite et constitue une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété intellectuelle."}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mt-4">
              {isEn
                ? "The photographs of completed projects shown on this site are genuine images of operations carried out by our teams."
                : "Les photographies de réalisations présentées sur ce site sont des images réelles de chantiers effectués par nos équipes."}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {isEn ? "6. Liability" : "6. Responsabilité"}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEn
                ? "Ellipsys Solutions strives to keep the information published on this site accurate and up to date. However, technical specifications, prices and indicative timeframes are provided for guidance only and do not constitute a contractual commitment. Only a signed quotation is binding."
                : "Ellipsys Solutions s'efforce de maintenir exactes et à jour les informations publiées sur ce site. Toutefois, les caractéristiques techniques, tarifs et délais indicatifs sont fournis à titre informatif et ne constituent pas un engagement contractuel. Seul un devis signé engage la société."}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {isEn ? "7. Personal data and cookies" : "7. Données personnelles et cookies"}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEn ? (
                <>
                  The processing of personal data and the use of cookies are detailed in our{" "}
                  <Link href="/politique-confidentialite" className="text-brand-orange-600 hover:underline font-semibold">
                    privacy policy
                  </Link>
                  .
                </>
              ) : (
                <>
                  Le traitement des données personnelles et l&apos;utilisation des cookies sont détaillés dans notre{" "}
                  <Link href="/politique-confidentialite" className="text-brand-orange-600 hover:underline font-semibold">
                    politique de confidentialité
                  </Link>
                  .
                </>
              )}
            </p>
          </div>

          <p className="text-center text-slate-400 text-xs">
            {isEn ? "Last updated: 28 July 2026" : "Dernière mise à jour : 28 juillet 2026"}
          </p>
        </div>
      </section>
    </main>
  );
}
