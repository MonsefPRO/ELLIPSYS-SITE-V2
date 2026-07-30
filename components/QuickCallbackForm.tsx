"use client";

import { useState } from "react";
import { Phone, Send, CheckCircle2 } from "lucide-react";
import { track, Events } from "@/lib/analytics";
import { pushLeadConversion } from "@/lib/gtag";

/**
 * Rappel express — 2 champs (prénom + téléphone).
 *
 * Objectif : capter le visiteur qui n'ira pas au bout d'un formulaire détaillé.
 * Un lead avec un numéro vaut infiniment mieux qu'un visiteur perdu : la
 * précision se récupère au téléphone, en 3 minutes.
 *
 * Passe par /api/devis (HubSpot + notification équipe + Supabase) et déclenche
 * la conversion Google Ads, exactement comme le formulaire complet.
 */
export default function QuickCallbackForm({ source = "devis_express" }: { source?: string }) {
  const [name, setName]   = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent]   = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!name.trim()) { setError("Merci d'indiquer votre prénom."); return; }
    if (phone.replace(/[^\d+]/g, "").length < 9) {
      setError("Merci d'indiquer un numéro de téléphone valide.");
      return;
    }

    setLoading(true);
    const fd = new FormData();
    fd.append("name", name.trim());
    fd.append("phone", phone.trim());
    fd.append("clientType", "particulier");
    fd.append("service", "rappel");
    fd.append("serviceLabel", "Rappel express");
    fd.append("message", "Demande de rappel express depuis le site.");
    fd.append("pageUri", typeof window !== "undefined" ? window.location.pathname : "");

    try {
      const res = await fetch("/api/devis", { method: "POST", body: fd });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.error ?? "L'envoi a échoué. Appelez-nous au 04 67 20 97 09.");
        setLoading(false);
        return;
      }
      setSent(true);
      track(Events.DEVIS_SUBMITTED, {
        service: "rappel",
        service_label: "Rappel express",
        client_type: "particulier",
        source,
      });
      pushLeadConversion({
        service: "rappel",
        serviceLabel: "Rappel express",
        clientType: "particulier",
        phone: phone.trim(),
      });
    } catch {
      setError("Connexion impossible. Appelez-nous au 04 67 20 97 09.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-4">
        <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
        <p className="text-sm text-emerald-900">
          <strong>C&apos;est noté, {name.trim()} !</strong> Nous vous rappelons dans les meilleurs délais.
        </p>
      </div>
    );
  }

  const INPUT =
    "flex-1 min-w-0 px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange-500 focus:border-transparent transition";

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2.5">
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); setError(""); }}
          placeholder="Votre prénom"
          autoComplete="given-name"
          required
          className={INPUT}
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => { setPhone(e.target.value); setError(""); }}
          placeholder="Votre téléphone"
          autoComplete="tel"
          required
          className={INPUT}
        />
        <button
          type="submit"
          disabled={loading}
          className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange-500 text-white rounded-xl font-black hover:bg-brand-orange-600 disabled:opacity-60 transition-colors shadow-lg whitespace-nowrap"
        >
          {loading ? "Envoi…" : <><Phone className="w-4 h-4" /> Rappelez-moi</>}
        </button>
      </div>
      {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
      <p className="text-xs text-slate-500 mt-2">
        <Send className="w-3 h-3 inline mr-1" />
        On vous rappelle pour cerner votre besoin — c&apos;est souvent plus rapide qu&apos;un formulaire.
      </p>
    </form>
  );
}
