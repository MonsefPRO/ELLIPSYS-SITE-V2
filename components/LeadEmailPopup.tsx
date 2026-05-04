"use client";

import { useState, useEffect } from "react";
import { X, Mail, Send, CheckCircle2, Zap } from "lucide-react";

const POPUP_KEY   = "ellipsys_lead_popup_shown";
const DELAY_MS    = 35000; // Apparaît après 35 secondes sur le site
const SCROLL_PCT  = 0.55;  // Ou après 55% de scroll

type Status = "idle" | "loading" | "success" | "error";

export function LeadEmailPopup() {
  const [visible, setVisible]   = useState(false);
  const [leaving, setLeaving]   = useState(false);
  const [email, setEmail]       = useState("");
  const [status, setStatus]     = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(POPUP_KEY)) return;

    let triggered = false;

    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setVisible(true);
      sessionStorage.setItem(POPUP_KEY, "1");
    };

    // Déclencheur 1 : délai
    const timer = setTimeout(trigger, DELAY_MS);

    // Déclencheur 2 : scroll
    const onScroll = () => {
      if (window.scrollY / (document.body.scrollHeight - window.innerHeight) >= SCROLL_PCT) {
        trigger();
      }
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
    if (!email.includes("@")) { setErrorMsg("Adresse email invalide."); return; }
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          source: "popup_lead",
          page: window.location.pathname,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Erreur réseau");
      }
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message ?? "Une erreur est survenue. Réessayez dans un instant.");
    }
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-end sm:items-center justify-center sm:justify-end sm:pr-8 sm:pb-0 pb-4 px-4 pointer-events-none"
    >
      {/* Backdrop léger sur mobile */}
      <div
        className="absolute inset-0 bg-black/20 sm:bg-transparent pointer-events-auto"
        onClick={close}
        aria-hidden
      />

      {/* Card */}
      <div
        className="relative pointer-events-auto w-full sm:w-[380px]"
        style={{
          opacity: leaving ? 0 : 1,
          transform: leaving ? "translateY(24px) scale(0.97)" : "translateY(0) scale(1)",
          transition: "opacity 0.38s ease, transform 0.38s ease",
        }}
      >
        <div className="p-px rounded-2xl bg-gradient-to-br from-brand-orange-500/60 via-white/8 to-brand-orange-500/25 shadow-2xl shadow-black/50">
          <div className="bg-[#060d1a] rounded-[15px] overflow-hidden">
            {/* Accent top */}
            <div className="h-0.5 w-full bg-gradient-to-r from-brand-orange-500 via-amber-400 to-brand-orange-500" />

            <div className="p-6">
              {/* Close */}
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
                  <h3 className="text-white font-bold text-base mb-2">Merci !</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Votre email a bien été enregistré. Nous vous contacterons avec nos meilleurs conseils d&apos;entretien.
                  </p>
                  <button
                    onClick={close}
                    className="mt-5 px-5 py-2 rounded-xl bg-white/8 border border-white/10 text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    Fermer
                  </button>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange-500/15 border border-brand-orange-500/30 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-brand-orange-400" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black tracking-[0.18em] uppercase text-brand-orange-400 mb-0.5">Conseil gratuit</p>
                      <h3 className="text-white font-bold text-sm leading-snug">
                        Recevez nos conseils d&apos;entretien par drone
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed mb-5">
                    Toiture, panneaux solaires, façades — nos experts partagent leurs meilleures pratiques d&apos;entretien directement dans votre boîte mail. <strong className="text-slate-300">Aucun spam, désabonnement en 1 clic.</strong>
                  </p>

                  {/* Bénéfices */}
                  <ul className="space-y-1.5 mb-5">
                    {[
                      "Fréquence d'entretien selon votre toiture",
                      "Alertes saisonnières (mousses, PV, etc.)",
                      "Offres réservées aux abonnés",
                    ].map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-400 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Formulaire */}
                  <form onSubmit={submit} className="space-y-3">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setErrorMsg(""); }}
                        placeholder="votre@email.fr"
                        required
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/6 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-orange-500/60 focus:bg-white/10 transition-all"
                      />
                    </div>

                    {errorMsg && (
                      <p className="text-red-400 text-xs">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange-500 to-amber-500 text-white text-sm font-bold hover:from-brand-orange-400 hover:to-amber-400 disabled:opacity-60 transition-all shadow-lg shadow-brand-orange-500/25"
                    >
                      {status === "loading" ? (
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          Recevoir les conseils
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
