import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialite et mentions legales | Ellipsys Solutions",
  description: "Politique de confidentialite, mentions legales et conditions generales de vente d'Ellipsys Solutions.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 pb-20 bg-slate-50">

      <section className="bg-[#0e2f52] text-white py-16 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-black mb-4">Politique de Confidentialite & Mentions Legales</h1>
          <p className="text-slate-300 text-lg">Derniere mise a jour : janvier 2025</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Mentions legales</h2>
            <div className="text-slate-600 space-y-2 text-sm leading-relaxed">
              <p><strong>Raison sociale :</strong> Ellipsys Solutions</p>
              <p><strong>Siege social :</strong> 42, place de la Lucque, 30470 Aimargues</p>
              <p><strong>Bureaux :</strong> 159 Rue de Thor, 34000 Montpellier</p>
              <p><strong>Email :</strong> contact@ellipsys-group.com</p>
              <p><strong>Telephone :</strong> 04 67 20 97 09</p>
              <p><strong>Responsable de publication :</strong> Direction Ellipsys Solutions</p>
              <p><strong>Hebergement :</strong> Netlify, Inc. — 512 2nd Street, Suite 200, San Francisco, CA 94107, USA</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Donnees collectees</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Lorsque vous utilisez notre formulaire de contact ou de devis, nous collectons les informations suivantes :
            </p>
            <ul className="text-slate-600 text-sm space-y-2 list-disc list-inside">
              <li>Nom et prenom ou raison sociale</li>
              <li>Adresse email</li>
              <li>Numero de telephone (optionnel)</li>
              <li>Localisation du projet</li>
              <li>Description de votre besoin</li>
            </ul>
            <p className="text-slate-600 text-sm leading-relaxed mt-4">
              Ces donnees sont transmises a notre CRM HubSpot (Hubspot Inc., 25 First Street, Cambridge, MA 02141, USA) dans le seul but de traiter votre demande et de vous recontacter.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Finalite du traitement</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Les donnees collectees sont utilisees exclusivement pour :
            </p>
            <ul className="text-slate-600 text-sm space-y-2 list-disc list-inside mt-4">
              <li>Repondre a vos demandes de devis ou d&apos;information</li>
              <li>Assurer le suivi commercial de nos interventions</li>
              <li>Ameliorer la qualite de nos services</li>
            </ul>
            <p className="text-slate-600 text-sm leading-relaxed mt-4">
              Nous ne vendons, ne louons et ne cedons jamais vos donnees a des tiers a des fins commerciales.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Cookies et traceurs</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Notre site utilise les technologies suivantes :
            </p>
            <ul className="text-slate-600 text-sm space-y-2 list-disc list-inside">
              <li><strong>Cookies necessaires :</strong> Fonctionnement du site, gestion des preferences</li>
              <li><strong>PostHog (analytique) :</strong> Analyse du comportement des visiteurs — donnees anonymisees, serveurs EU</li>
              <li><strong>Google Tag Manager :</strong> Gestion centralisee des balises marketing</li>
            </ul>
            <p className="text-slate-600 text-sm leading-relaxed mt-4">
              Vous pouvez gerer vos preferences de cookies via la banniere affichee lors de votre premiere visite ou a tout moment en nous contactant.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Duree de conservation</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Vos donnees personnelles sont conservees pendant une duree maximale de 3 ans a compter de notre dernier contact. Au-dela de cette periode, vos donnees sont supprimees ou anonymisees.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Vos droits (RGPD)</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Conformement au Reglement General sur la Protection des Donnees (RGPD) et a la loi Informatique et Libertes, vous disposez des droits suivants :
            </p>
            <ul className="text-slate-600 text-sm space-y-2 list-disc list-inside">
              <li>Droit d&apos;acces a vos donnees</li>
              <li>Droit de rectification</li>
              <li>Droit a l&apos;effacement (&quot;droit a l&apos;oubli&quot;)</li>
              <li>Droit a la portabilite</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit de limitation du traitement</li>
            </ul>
            <p className="text-slate-600 text-sm leading-relaxed mt-4">
              Pour exercer ces droits, contactez-nous par email : <a href="mailto:contact@ellipsys-group.com" className="text-brand-orange-500 hover:underline">contact@ellipsys-group.com</a>
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Securite des donnees</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Nous mettons en oeuvre des mesures techniques et organisationnelles appropriees pour proteger vos donnees contre la perte, l&apos;acces non autorise, la divulgation, l&apos;alteration ou la destruction. Notre site est servi en HTTPS et nos outils tiers sont conformes aux exigences du RGPD.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Propriete intellectuelle</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {"L'ensemble du contenu de ce site (textes, images, videos, logos, graphismes) est la propriete exclusive d'Ellipsys Solutions ou de ses partenaires. Toute reproduction, meme partielle, est interdite sans autorisation prealable ecrite."}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Responsabilite</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {"Ellipsys Solutions s'efforce de maintenir les informations de ce site a jour et exactes, mais ne peut garantir l'exhaustivite ou l'exactitude de toutes les informations presentees. Les liens vers des sites exterieurs sont fournis a titre indicatif et Ellipsys Solutions ne saurait etre tenu responsable de leur contenu."}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Droit applicable et juridiction</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {"Les presentes mentions legales et politique de confidentialite sont regies par le droit francais. En cas de litige, et apres tentative de resolution amiable, les tribunaux du ressort de Montpellier seront seuls competents."}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact DPO</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pour toute question relative a la protection de vos donnees personnelles, vous pouvez contacter notre responsable de traitement :
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p><strong>Email :</strong> <a href="mailto:contact@ellipsys-group.com" className="text-brand-orange-500 hover:underline">contact@ellipsys-group.com</a></p>
              <p><strong>Courrier :</strong> Ellipsys Solutions — 159 Rue de Thor, 34000 Montpellier</p>
              <p><strong>Telephone :</strong> 04 67 20 97 09</p>
            </div>
            <p className="text-slate-500 text-xs mt-6">
              Vous avez egalement le droit d&apos;introduire une reclamation aupres de la CNIL (Commission Nationale de l&apos;Informatique et des Libertes) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-orange-500 hover:underline">www.cnil.fr</a>
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
