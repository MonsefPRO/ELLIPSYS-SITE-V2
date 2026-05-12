"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, CheckCircle, Loader2, Gift, FileText, ChevronRight } from "lucide-react";

interface LeadMagnetBannerProps {
  /** Slug du PDF dans /public/documents/ — ex: "guide-nettoyage-solaire" */
  pdfSlug?: string;
  /** Titre affiché dans la bannière */
  title?: string;
  /** Description courte */
  description?: string;
  language?: "fr" | "en";
  /** Variante visuelle */
  variant?: "banner" | "card" | "inline";
}

export function LeadMagnetBanner({
  pdfSlug = "guide-ellipsys",
  title,
  description,
  language = "fr",
  variant = "banner",
}: LeadMagnetBannerProps) {
  const isFr = language === "fr";

  const defaultTitle = isFr
    ? "📄 Guide gratuit + -15% sur votre devis"
    : "📄 Free guide + 15% off your quote";
  const defaultDesc = isFr
    ? "Téléchargez notre guide expert et recevez un code promo exclusif directement dans votre boîte mail."
    : "Download our expert guide and get an exclusive promo code straight to your inbox.";

  const displayTitle = title ?? defaultTitle;
  const displayDesc  = description ?? defaultDesc;

  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail]         = useState("");
  const [loading, setLoading]     = useState(false);
  const [success, setSuccess]     = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [error, setError]         = useState("");

  // Bloque le scroll du body quand la modal est ouverte (important sur mobile pour éviter le double-scroll bug)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, lang: isFr ? "fr" : "en", pdfSlug }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erreur");
      setPromoCode(data.promoCode ?? "ELLIPSYS15");
      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : (isFr ? "Une erreur est survenue." : "An error occurred."));
    } finally {
      setLoading(false);
    }
  }

  function closeModal() {
    setOpen(false);
    // Reset après l'anim de sortie pour pouvoir rouvrir proprement
    setTimeout(() => {
      setError("");
      // ne reset pas success → si l'user a déjà soumis, on garde le code visible à la réouverture
    }, 400);
  }

  /* ── Trigger button (shared) ── */
  const TriggerButton = () => (
    <button
      onClick={() => setOpen(true)}
      className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:from-blue-500 group-hover:to-cyan-400" />
      <Download className="relative w-4 h-4 text-white shrink-0" />
      <span className="relative text-white">{displayTitle}</span>
      <ChevronRight className="relative w-4 h-4 text-white/70 group-hover:translate-x-0.5 transition-transform" />
    </button>
  );

  return (
    <>
      {/* ── Variant CARD ── */}
      {variant === "card" && (
        <div
          onClick={() => setOpen(true)}
          className="group relative cursor-pointer rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#0d1f3c] to-[#0a1628] p-6 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Guide gratuit</span>
                <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-2 py-0.5 font-semibold">-15%</span>
              </div>
              <p className="text-white font-semibold text-sm mb-1 line-clamp-2">{displayTitle}</p>
              <p className="text-slate-400 text-xs line-clamp-2">{displayDesc}</p>
            </div>
            <Download className="shrink-0 w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors mt-0.5" />
          </div>
        </div>
      )}

      {/* ── Variant BANNER (par défaut) ── */}
      {variant === "banner" && (
        <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-r from-[#0d1f3c] via-[#0f1f3c] to-[#0a1a30] p-6 md:p-8">
          <div className="pointer-events-none absolute -right-20 -top-20 w-60 h-60 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-cyan-600/8 blur-2xl" />

          <div className="relative flex flex-col md:flex-row md:items-center gap-5">
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Gift className="w-7 h-7 text-blue-400" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
                  {isFr ? "Offre exclusive" : "Exclusive offer"}
                </span>
                <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-2 py-0.5 font-bold">
                  {isFr ? "-15% sur votre devis" : "15% off your quote"}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg md:text-xl mb-1 leading-tight">{displayTitle}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{displayDesc}</p>
            </div>

            <div className="shrink-0">
              <TriggerButton />
            </div>
          </div>
        </div>
      )}

      {/* ── Variant INLINE (juste le bouton) ── */}
      {variant === "inline" && <TriggerButton />}

      {/* ── MODAL (INLINE, plus de nested component → fini le bug "popup disparaît à chaque frappe") ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Conteneur modal — scrollable sur petit écran */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              className="fixed inset-0 z-[9999] flex items-start sm:items-center justify-center overflow-y-auto px-4 py-6 sm:py-12 pointer-events-none"
            >
              <div
                className="relative w-full max-w-md my-auto pointer-events-auto rounded-2xl border border-white/10 bg-[#0d1829] shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top gradient bar */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />

                {/* Close */}
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
                  aria-label={isFr ? "Fermer" : "Close"}
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="p-6 md:p-8">
                  {!success ? (
                    <>
                      <div className="mb-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                          <Gift className="w-6 h-6 text-blue-400" />
                        </div>
                        <h2 className="text-white text-xl font-bold mb-2 pr-8">
                          {isFr ? "Votre guide + code promo -15%" : "Your guide + 15% promo code"}
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {isFr
                            ? "Entrez votre prénom et email — on vous envoie le PDF et votre code immédiatement."
                            : "Enter your name and email — we'll send the PDF and your code right away."}
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                          <label htmlFor="lead-magnet-firstname" className="block text-xs font-medium text-slate-400 mb-1.5">
                            {isFr ? "Votre prénom" : "Your first name"}
                          </label>
                          <input
                            id="lead-magnet-firstname"
                            type="text"
                            required
                            autoComplete="given-name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder={isFr ? "Ex : Jean" : "Ex: John"}
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition"
                          />
                        </div>
                        <div>
                          <label htmlFor="lead-magnet-email" className="block text-xs font-medium text-slate-400 mb-1.5">
                            {isFr ? "Votre email professionnel" : "Your professional email"}
                          </label>
                          <input
                            id="lead-magnet-email"
                            type="email"
                            required
                            autoComplete="email"
                            inputMode="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="contact@votre-entreprise.fr"
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition"
                          />
                        </div>

                        {error && (
                          <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                            {error}
                          </p>
                        )}

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 py-3.5 text-sm font-semibold text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {loading
                            ? <Loader2 className="w-4 h-4 animate-spin" />
                            : <Download className="w-4 h-4" />
                          }
                          {loading
                            ? (isFr ? "Envoi en cours…" : "Sending…")
                            : (isFr ? "Recevoir mon guide gratuit" : "Get my free guide")}
                        </button>

                        <p className="text-center text-slate-600 text-xs">
                          {isFr
                            ? "📬 1 email max · Désabonnement en 1 clic · Zéro spam"
                            : "📬 Max 1 email · Unsubscribe anytime · Zero spam"}
                        </p>
                      </form>
                    </>
                  ) : (
                    /* Success state */
                    <div className="text-center py-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle className="w-8 h-8 text-emerald-400" />
                      </div>
                      <h2 className="text-white text-xl font-bold mb-2">
                        {isFr ? "C'est parti ! 🚀" : "You're in! 🚀"}
                      </h2>
                      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                        {isFr
                          ? `Vérifiez votre boîte mail — votre guide et votre code promo sont en route.`
                          : `Check your inbox — your guide and promo code are on their way.`}
                      </p>

                      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 mb-6">
                        <p className="text-xs text-emerald-400 uppercase tracking-widest font-semibold mb-1">
                          {isFr ? "Votre code promo" : "Your promo code"}
                        </p>
                        <p className="text-white text-2xl font-black tracking-[0.2em] font-mono">{promoCode}</p>
                        <p className="text-slate-500 text-xs mt-1">
                          {isFr ? "À mentionner lors de votre demande de devis" : "Mention it when requesting a quote"}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={closeModal}
                        className="text-slate-400 hover:text-white text-sm transition-colors"
                      >
                        {isFr ? "Fermer" : "Close"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
