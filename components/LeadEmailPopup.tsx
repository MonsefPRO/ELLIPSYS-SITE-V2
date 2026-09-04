"use client";

import { useState, useEffect } from "react";
import { X, Phone, Send, CheckCircle2 } from "lucide-react";
import { track, Events } from "@/lib/analytics";
import { pushLeadConversion } from "@/lib/gtag";

/**
 * Pop-up « Rappelez-moi ».
 *
 * Ancienne version : capture d'e-mail pour une newsletter de conseils. Demande
 * trop molle, quelqu'un qui consulte une page démoussage veut un devis ou un
 * rappel, pas une newsletter.
 *
 * Nouvelle version : deux chemins vers le contact immédiat.
 *   1. Le numéro de téléphone, en gros et cliquable → l'action la plus directe.
 *   2. Un formulaire à 2 champs (prénom + téléphone) → pour ceux qui ne veulent
 *      pas appeler mais acceptent d'être rappelés.
 *
 * Le lead part vers /api/devis (même pipeline que la page /devis : HubSpot,
 * notification équipe, Supabase) et déclenche la conversion Google Ads.
 */
const POPUP_KEY  = "ellipsys_lead_popup_shown";
const DELAY_MS   = 35000; // 35 s sur le site
const SCROLL_PCT = 0.55;  // ou 55 % de scroll

type Status = "idle" | "loading" | "success" | "error";

export function LeadEmailPopup() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [name, setName]       = useState("");
  const [phone, setPhone]     = useState("");
  const [status, setStatus]   = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(POPUP_KEY)) return;
    // Pas de pop-up sur les pages où l'on demande déjà les coordonnées
    const path = window.location.pathname;
    if (path.startsWith("/devis") || path.startsWith("/admin")) return;

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setVisible(true);
      sessionStorage.setItem(POPUP_KEY, "1");
      try { track("popup_rappel_shown", { source: "popup_rappel" }); } catch { /* silent */ }
    };

    const timer = setTimeout(trigger, DELAY_MS);
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= SCROLL_PCT) trigger();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function close() {
    setLeaving(true);
    setTimeout(() => setVisible(false), 380);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const cleanPhone = phone.replace(/[^\d+]/g, "");
    if (cleanPhone.length < 9) {
      setErrorMsg("Merci d'indiquer un numéro de téléphone valide.");
      return;
    }
    if (!name.trim()) {
      setErrorMsg("Merci d'indiquer votre prénom.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData();
    fd.append("name", name.trim());
    fd.append("phone", phone.trim());
    fd.append("clientType", "particulier");
    fd.append("service", "rappel");
    fd.append("serviceLabel", "Demande de rappel");
    fd.append("message", "Demande de rappel via le pop-up du site.");
    fd.append("pageUri", window.location.pathname);

    try {
      const res = await fetch("/api/devis", { method: "POST", body: fd });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Erreur réseau");
      }
      setStatus("success");
      track(Events.DEVIS_SUBMITTED, {
        service: "rappel",
        service_label: "Demande de rappel",
        client_type: "particulier",
        source: "popup_rappel",
      });
      pushLeadConversion({
        service: "rappel",
        serviceLabel: "Demande de rappel",
        clientType: "particulier",
        phone: phone.trim(),
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error && err.message
          ? err.message
          : "Une erreur est survenue. Appelez-nous au 04 67 20 97 09.",
      );
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9998] flex items-end sm:items-center justify-center sm:justify-end sm:pr-8 sm:pb-0 pb-4 px-4 pointer-events-none">
      <div
        className="absolute inset-0 bg-black/20 sm:bg-transparent pointer-events-auto"
        onClick={close}
        aria-hidden
      />

      <div
        className="relative pointer-events-auto w-full sm:w-[380px]"
        style={{
          opacity: leaving ? 0 : 1,
          transform: leaving ? "translateY(24px) scale(0.97)" : "translateY(0) scale(1)",
          transition: "opacity 0.38s ease, transform 0.38s ease",
        }}
        role="dialog"
        aria-label="Demander à être rappelé"
      >
        <div className="p-px rounded-2xl bg-gradient-to-br from-brand-orange-500/60 via-white/8 to-brand-orange-500/25 shadow-2xl shadow-black/50">
          <div className="bg-[#060d1a] rounded-[15px] overflow-hidden">
            <div className="h-0.5 w-full bg-gradient-to-r from-brand-orange-500 via-amber-400 to-brand-orange-500" />

            <div className="p-6">
              <button
                onClick={close}
                className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-white/8 hover:bg-white/15 text-slate-400 hover:text-white transition-all"
                aria-label="Fermer"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              {status === "success" ? (
                <div className="text-center py-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">C&apos;est noté, {name.trim()} !</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Nous vous rappelons <strong className="text-slate-200">dans les meilleurs délais</strong>.
                    Si c&apos;est urgent, appelez-nous directement.
                  </p>
                  <a
                    href="tel:+33467209709"
                    className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-orange-500 text-white text-sm font-bold hover:bg-brand-orange-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" /> 04 67 20 97 09
                  </a>
                </div>
              ) : (
                <>
                  {/* Le téléphone en premier : l'action la plus directe */}
                  <p className="text-[9px] font-black tracking-[0.18em] uppercase text-brand-orange-400 mb-2">
                    Un projet ?
                  </p>
                  <h3 className="text-white font-bold text-base leading-snug mb-4">
                    Parlons-en directement
                  </h3>

                  <a
                    href="tel:+33467209709"
                    onClick={() => {
                      try {
                        (window as unknown as { posthog?: { capture: (e: string, p?: Record<string, unknown>) => void } })
                          .posthog?.capture("phone_clicked", { source: "popup_rappel" });
                      } catch { /* silent */ }
                    }}
                    className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-white/8 border border-white/15 hover:bg-white/12 hover:border-brand-orange-500/50 transition-all mb-4 group"
                  >
                    <Phone className="w-5 h-5 text-brand-orange-400" />
                    <span className="text-white font-black text-lg tracking-wide">04 67 20 97 09</span>
                  </a>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px flex-1 bg-white/10" />
                    <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">ou</span>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Laissez-nous votre numéro, <strong className="text-slate-300">c&apos;est nous qui vous rappelons</strong>.
                    Devis gratuit, sans engagement.
                  </p>

                  <form onSubmit={submit} className="space-y-3">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => { setName(e.target.value); setErrorMsg(""); }}
                      placeholder="Votre prénom"
                      autoComplete="given-name"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white/6 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-orange-500/60 focus:bg-white/10 transition-all"
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => { setPhone(e.target.value); setErrorMsg(""); }}
                      placeholder="Votre téléphone"
                      autoComplete="tel"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white/6 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-orange-500/60 focus:bg-white/10 transition-all"
                    />

                    {errorMsg && <p className="text-red-400 text-xs">{errorMsg}</p>}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-brand-orange-500 to-amber-500 text-white text-sm font-black hover:from-brand-orange-400 hover:to-amber-400 disabled:opacity-60 transition-all shadow-lg shadow-brand-orange-500/25"
                    >
                      {status === "loading" ? (
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          Rappelez-moi
                        </>
                      )}
                    </button>

                    <p className="text-slate-700 text-[10px] text-center">
                      En soumettant ce formulaire, vous acceptez notre{" "}
                      <a href="/politique-confidentialite" className="text-slate-600 underline hover:text-slate-500 transition-colors">
                        politique de confidentialité
                      </a>
                      .
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
