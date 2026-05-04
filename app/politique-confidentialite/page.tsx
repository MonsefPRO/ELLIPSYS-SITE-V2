import type { Metadata } from "next";
import { getLang } from "@/lib/getLang";

export const metadata: Metadata = {
  title: "Privacy Policy & Legal Notice | Ellipsys Solutions",
  description: "Privacy policy, legal notice and general terms of service for Ellipsys Solutions.",
};

export default async function PolitiqueConfidentialitePage() {
  const lang = await getLang();
  const isEn = lang === "en";

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-20 bg-slate-50">

      <section className="bg-[#0e2f52] text-white py-16 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-black mb-4">
            {isEn ? "Privacy Policy & Legal Notice" : "Politique de Confidentialité & Mentions Légales"}
          </h1>
          <p className="text-slate-300 text-lg">
            {isEn ? "Last updated: January 2025" : "Dernière mise à jour : janvier 2025"}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {isEn ? "1. Legal Notice" : "1. Mentions légales"}
            </h2>
            <div className="text-slate-600 space-y-2 text-sm leading-relaxed">
              <p><strong>{isEn ? "Company name:" : "Raison sociale :"}</strong> Ellipsys Solutions</p>
              <p><strong>{isEn ? "Registered office:" : "Siège social :"}</strong> 42, place de la Lucque, 30470 Aimargues</p>
              <p><strong>{isEn ? "Offices:" : "Bureaux :"}</strong> 159 Rue de Thor, 34000 Montpellier</p>
              <p><strong>{isEn ? "Email:" : "Email :"}</strong> contact@ellipsys-group.com</p>
              <p><strong>{isEn ? "Telephone:" : "Telephone :"}</strong> 04 67 20 97 09</p>
              <p><strong>{isEn ? "Publication manager:" : "Responsable de publication :"}</strong> {isEn ? "Ellipsys Solutions Management" : "Direction Ellipsys Solutions"}</p>
              <p><strong>{isEn ? "Hosting:" : "Hebergement :"}</strong> Netlify, Inc. — 512 2nd Street, Suite 200, San Francisco, CA 94107, USA</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {isEn ? "2. Data Collected" : "2. Données collectées"}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {isEn
                ? "When you use our contact or quote request form, we collect the following information:"
                : "Lorsque vous utilisez notre formulaire de contact ou de devis, nous collectons les informations suivantes :"}
            </p>
            <ul className="text-slate-600 text-sm space-y-2 list-disc list-inside">
              {isEn ? (
                <>
                  <li>First and last name or company name</li>
                  <li>Email address</li>
                  <li>Phone number (optional)</li>
                  <li>Project location</li>
                  <li>Description of your requirements</li>
                </>
              ) : (
                <>
                  <li>Nom et prénom ou raison sociale</li>
                  <li>Adresse email</li>
                  <li>Numero de telephone (optionnel)</li>
                  <li>Localisation du projet</li>
                  <li>Description de votre besoin</li>
                </>
              )}
            </ul>
            <p className="text-slate-600 text-sm leading-relaxed mt-4">
              {isEn
                ? "This data is transmitted to our HubSpot CRM (HubSpot Inc., 25 First Street, Cambridge, MA 02141, USA) solely for the purpose of processing your request and contacting you."
                : "Ces données sont transmises à notre CRM HubSpot (Hubspot Inc., 25 First Street, Cambridge, MA 02141, USA) dans le seul but de traiter votre demande et de vous recontacter."}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {isEn ? "3. Purpose of Processing" : "3. Finalité du traitement"}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEn
                ? "The data collected is used exclusively to:"
                : "Les données collectées sont utilisées exclusivement pour :"}
            </p>
            <ul className="text-slate-600 text-sm space-y-2 list-disc list-inside mt-4">
              {isEn ? (
                <>
                  <li>Respond to your quote or information requests</li>
                  <li>Ensure commercial follow-up of our interventions</li>
                  <li>Improve the quality of our services</li>
                </>
              ) : (
                <>
                  <li>Répondre à vos demandes de devis ou d&apos;information</li>
                  <li>Assurer le suivi commercial de nos interventions</li>
                  <li>Améliorer la qualité de nos services</li>
                </>
              )}
            </ul>
            <p className="text-slate-600 text-sm leading-relaxed mt-4">
              {isEn
                ? "We never sell, rent, or transfer your data to third parties for commercial purposes."
                : "Nous ne vendons, ne louons et ne cédons jamais vos données à des tiers à des fins commerciales."}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {isEn ? "4. Cookies and Trackers" : "4. Cookies et traceurs"}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {isEn ? "Our site uses the following technologies:" : "Notre site utilise les technologies suivantes :"}
            </p>
            <ul className="text-slate-600 text-sm space-y-2 list-disc list-inside">
              {isEn ? (
                <>
                  <li><strong>Essential cookies:</strong> Site operation, preference management</li>
                  <li><strong>PostHog (analytics):</strong> Visitor behaviour analysis — anonymised data, EU servers</li>
                  <li><strong>Google Tag Manager:</strong> Centralised marketing tag management</li>
                </>
              ) : (
                <>
                  <li><strong>Cookies nécessaires :</strong> Fonctionnement du site, gestion des préférences</li>
                  <li><strong>PostHog (analytique) :</strong> Analyse du comportement des visiteurs — données anonymisées, serveurs EU</li>
                  <li><strong>Google Tag Manager :</strong> Gestion centralisée des balises marketing</li>
                </>
              )}
            </ul>
            <p className="text-slate-600 text-sm leading-relaxed mt-4">
              {isEn
                ? "You can manage your cookie preferences via the banner displayed on your first visit or at any time by contacting us."
                : "Vous pouvez gérer vos préférences de cookies via la bannière affichée lors de votre première visite ou à tout moment en nous contactant."}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {isEn ? "5. Data Retention Period" : "5. Durée de conservation"}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEn
                ? "Your personal data is retained for a maximum of 3 years from our last contact. Beyond this period, your data is deleted or anonymised."
                : "Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter de notre dernier contact. Au-delà de cette période, vos données sont supprimées ou anonymisées."}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {isEn ? "6. Your Rights (GDPR)" : "6. Vos droits (RGPD)"}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {isEn
                ? "In accordance with the General Data Protection Regulation (GDPR) and applicable data protection law, you have the following rights:"
                : "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :"}
            </p>
            <ul className="text-slate-600 text-sm space-y-2 list-disc list-inside">
              {isEn ? (
                <>
                  <li>Right of access to your data</li>
                  <li>Right of rectification</li>
                  <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to restriction of processing</li>
                </>
              ) : (
                <>
                  <li>Droit d&apos;acces a vos donnees</li>
                  <li>Droit de rectification</li>
                  <li>Droit a l&apos;effacement (&quot;droit a l&apos;oubli&quot;)</li>
                  <li>Droit a la portabilite</li>
                  <li>Droit d&apos;opposition au traitement</li>
                  <li>Droit de limitation du traitement</li>
                </>
              )}
            </ul>
            <p className="text-slate-600 text-sm leading-relaxed mt-4">
              {isEn ? "To exercise these rights, contact us by email: " : "Pour exercer ces droits, contactez-nous par email : "}
              <a href="mailto:contact@ellipsys-group.com" className="text-brand-orange-500 hover:underline">contact@ellipsys-group.com</a>
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {isEn ? "7. Data Security" : "7. Sécurité des données"}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEn
                ? "We implement appropriate technical and organisational measures to protect your data against loss, unauthorised access, disclosure, alteration, or destruction. Our site is served over HTTPS and our third-party tools are GDPR-compliant."
                : "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'accès non autorisé, la divulgation, l'altération ou la destruction. Notre site est servi en HTTPS et nos outils tiers sont conformes aux exigences du RGPD."}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {isEn ? "8. Intellectual Property" : "8. Propriété intellectuelle"}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEn
                ? "All content on this site (text, images, videos, logos, graphics) is the exclusive property of Ellipsys Solutions or its partners. Any reproduction, even partial, is prohibited without prior written authorisation."
                : "L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes) est la propriété exclusive d'Ellipsys Solutions ou de ses partenaires. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite."}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {isEn ? "9. Liability" : "9. Responsabilite"}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEn
                ? "Ellipsys Solutions endeavours to keep the information on this site up to date and accurate, but cannot guarantee the completeness or accuracy of all information presented. Links to external sites are provided for information purposes only, and Ellipsys Solutions cannot be held liable for their content."
                : "Ellipsys Solutions s'efforce de maintenir les informations de ce site à jour et exactes, mais ne peut garantir l'exhaustivité ou l'exactitude de toutes les informations présentées. Les liens vers des sites extérieurs sont fournis à titre indicatif et Ellipsys Solutions ne saurait être tenu responsable de leur contenu."}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {isEn ? "10. Applicable Law & Jurisdiction" : "10. Droit applicable et juridiction"}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEn
                ? "This legal notice and privacy policy are governed by French law. In the event of a dispute, and after an attempt at amicable resolution, the courts of Montpellier shall have sole jurisdiction."
                : "Les présentes mentions légales et politique de confidentialité sont régies par le droit français. En cas de litige, et après tentative de résolution amiable, les tribunaux du ressort de Montpellier seront seuls compétents."}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {isEn ? "11. Data Protection Contact" : "11. Contact DPO"}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEn
                ? "For any questions relating to the protection of your personal data, please contact our data controller:"
                : "Pour toute question relative à la protection de vos données personnelles, vous pouvez contacter notre responsable de traitement :"}
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p><strong>Email :</strong> <a href="mailto:contact@ellipsys-group.com" className="text-brand-orange-500 hover:underline">contact@ellipsys-group.com</a></p>
              <p><strong>{isEn ? "Post:" : "Courrier :"}</strong> Ellipsys Solutions — 159 Rue de Thor, 34000 Montpellier</p>
              <p><strong>{isEn ? "Telephone:" : "Telephone :"}</strong> 04 67 20 97 09</p>
            </div>
            <p className="text-slate-500 text-xs mt-6">
              {isEn
                ? <>You also have the right to lodge a complaint with the CNIL (French Data Protection Authority): <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-orange-500 hover:underline">www.cnil.fr</a></>
                : <>Vous avez également le droit d&apos;introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-orange-500 hover:underline">www.cnil.fr</a></>}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
