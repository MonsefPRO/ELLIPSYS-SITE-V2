"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone } from "lucide-react";
import { track, identify, Events } from "@/lib/analytics";
import { pushLeadConversion } from "@/lib/gtag";

/**
 * Formulaire court dédié aux landing pages Google Ads.
 *
 * Volontairement réduit à 4 champs (nom, téléphone, ville, e-mail) : sur du
 * trafic payant, chaque champ supplémentaire fait chuter le taux de conversion.
 * Le détail du projet se recueille au rappel téléphonique.
 *
 * Envoie vers /api/devis (même endpoint que la page /devis) et pousse la même
 * conversion `generate_lead`, pour que le suivi Google Ads soit identique.
 */
type Props = {
  /** Clé service transmise à l'API et à la conversion (ex. "toiture") */
  service: string;
  /** Libellé lisible, repris dans le mail et le CRM */
  serviceLabel: string;
  /** Titre affiché au-dessus du formulaire */
  titre: string;
  /** Phrase de réassurance sous le bouton */
  soustitre: string;
};

export default function LandingLeadForm({ service, serviceLabel, titre, soustitre }: Props) {
  const [f, setF] = useState({ name: "", phone: "", email: "", city: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof typeof f, v: string) => setF((p) => ({ ...p, [k]: v }));

  const INPUT =
    "w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange-500 focus:border-transparent transition";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    // Garde-fou : au moins un moyen de rappel
    if (!f.phone.trim() && !f.email.trim()) {
      setError("Merci d'indiquer un téléphone ou un e-mail pour que nous puissions vous répondre.");
      return;
    }

    setLoading(true);
    const fd = new FormData();
    fd.append("name", f.name);
    fd.append("phone", f.phone);
    fd.append("email", f.email);
    fd.append("city", f.city);
    fd.append("message", f.message);
    fd.append("clientType", "particulier");
    fd.append("service", service);
    fd.append("serviceLabel", serviceLabel);
    fd.append("pageUri", typeof window !== "undefined" ? window.location.pathname : "");

    try {
      const res = await fetch("/api/devis", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(
          data?.error ||
            "L'envoi a échoué. Vous pouvez nous appeler directement au 04 67 20 97 09.",
        );
        track(Events.DEVIS_SUBMIT_FAILED, { status: res.status, service, source: "landing" });
        setLoading(false);
        return;
      }

      identify(f.email, { email: f.email, name: f.name, phone: f.phone, city: f.city });
      track(Events.DEVIS_SUBMITTED, {
        service,
        service_label: serviceLabel,
        client_type: "particulier",
        city: f.city,
        source: "landing",
      });
      pushLeadConversion({
        service,
        serviceLabel,
        clientType: "particulier",
        city: f.city,
        email: f.email,
        phone: f.phone,
      });

      setSent(true);
    } catch {
      setError("Connexion impossible. Vous pouvez nous appeler au 04 67 20 97 09.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200 text-center">
        <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-2xl font-black text-slate-900 mb-3">Demande bien reçue</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Nous revenons vers vous <strong>sous 24 h</strong> avec un devis personnalisé.
          Si votre besoin est urgent, appelez-nous directement.
        </p>
        <a
          href="tel:+33467209709"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0e2f52] text-white rounded-xl font-bold hover:bg-[#143d69] transition-colors"
        >
          <Phone className="w-5 h-5" /> 04 67 20 97 09
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">{titre}</h3>
      <p className="text-sm text-slate-500 mb-6">{soustitre}</p>

      <form onSubmit={onSubmit} className="space-y-3">
        <input
          type="text"
          required
          value={f.name}
          onChange={(e) => set("name", e.target.value)}
          placeholder="Votre nom *"
          className={INPUT}
          autoComplete="name"
        />
        <input
          type="tel"
          value={f.phone}
          onChange={(e) => set("phone", e.target.value)}
          placeholder="Téléphone"
          className={INPUT}
          autoComplete="tel"
        />
        <input
          type="email"
          value={f.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="E-mail"
          className={INPUT}
          autoComplete="email"
        />
        <input
          type="text"
          value={f.city}
          onChange={(e) => set("city", e.target.value)}
          placeholder="Votre commune"
          className={INPUT}
          autoComplete="address-level2"
        />
        <textarea
          value={f.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Décrivez votre besoin en une phrase (facultatif)"
          rows={2}
          className={INPUT}
        />

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-orange-500 text-white rounded-xl font-black text-lg hover:bg-brand-orange-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-lg"
        >
          {loading ? "Envoi…" : "Recevoir mon devis gratuit"}
          {!loading && <Send className="w-5 h-5" />}
        </button>

        <p className="text-xs text-slate-400 text-center pt-1">
          Réponse sous 24 h · Sans engagement · Vos données ne sont jamais revendues
        </p>
      </form>

      <div className="mt-5 pt-5 border-t border-slate-100 text-center">
        <p className="text-sm text-slate-500 mb-2">Vous préférez en parler de vive voix ?</p>
        <a
          href="tel:+33467209709"
          onClick={() => track(Events.DEVIS_SUBMITTED, { service, source: "landing_tel_click" })}
          className="inline-flex items-center gap-2 text-lg font-black text-[#0e2f52] hover:text-brand-orange-500 transition-colors"
        >
          <Phone className="w-5 h-5" /> 04 67 20 97 09
        </a>
      </div>
    </div>
  );
}
