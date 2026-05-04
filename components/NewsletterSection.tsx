"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2, Loader2, Zap, Shield, TrendingUp } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const COPY = {
  fr: {
    badge: "Newsletter Ellipsys",
    eyebrow: "Rejoignez notre réseau",
    title: "Restez connecté à",
    titleAccent: "l'univers Ellipsys",
    subtitle: "Conseils techniques, offres saisonnières et actualités terrain — directement dans votre boîte mail, sans surplus d'information.",
    placeholder: "votre@email.com",
    cta: "Rejoindre le réseau",
    loading: "Inscription…",
    success_title: "Vous êtes dans la boucle !",
    success_sub: "Bienvenue dans le réseau Ellipsys. Vous recevrez nos prochaines actualités et offres.",
    error: "Une erreur est survenue. Veuillez réessayer.",
    privacy: "Données protégées · Désabonnement immédiat · 0 spam",
    pills: ["Actualités terrain", "Offres saisonnières", "Conseils d'entretien"],
    benefits: [
      { icon: Zap, label: "Ponctuel", desc: "Seulement l'essentiel" },
      { icon: Shield, label: "Données privées", desc: "Jamais partagées" },
      { icon: TrendingUp, label: "Offres exclusives", desc: "Réservées au réseau" },
    ],
    quote: "Des informations utiles et des offres au bon moment. C'est exactement ce qu'il me fallait.",
    quoteAuthor: "Client professionnel, Parc solaire Occitanie",
  },
  en: {
    badge: "Ellipsys Newsletter",
    eyebrow: "Join our network",
    title: "Stay connected to",
    titleAccent: "the Ellipsys world",
    subtitle: "Technical tips, seasonal offers and field news — straight to your inbox, without the noise.",
    placeholder: "your@email.com",
    cta: "Join the network",
    loading: "Subscribing…",
    success_title: "You're in the loop!",
    success_sub: "Welcome to the Ellipsys network. You'll receive our next news and exclusive offers.",
    error: "An error occurred. Please try again.",
    privacy: "Data protected · Unsubscribe instantly · 0 spam",
    pills: ["Field news", "Seasonal offers", "Maintenance tips"],
    benefits: [
      { icon: Zap, label: "Timely", desc: "Only the essentials" },
      { icon: Shield, label: "Private data", desc: "Never shared" },
      { icon: TrendingUp, label: "Exclusive offers", desc: "For our network only" },
    ],
    quote: "Useful information and offers at the right time. Exactly what I needed.",
    quoteAuthor: "Professional client, Solar Farm Occitania",
  },
};

export default function NewsletterSection() {
  const { language } = useLanguage();
  const c = COPY[language];

  const [email, setEmail]     = useState("");
  const [status, setStatus]   = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res  = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, lang: language }),
      });
      const data = await res.json();
      if (res.ok && data.ok) { setStatus("success"); setEmail(""); }
      else { setStatus("error"); setErrorMsg(data.error ?? c.error); }
    } catch {
      setStatus("error");
      setErrorMsg(c.error);
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#0e2f52]">

      {/* ── Decorative background ── */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
        {/* Grid pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="nl-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nl-grid)" />
        </svg>
        {/* Orange glow left */}
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-orange-500/15 blur-[120px]" />
        {/* Darker navy glow right */}
        <div className="absolute -right-40 bottom-0 w-[400px] h-[400px] rounded-full bg-[#061828]/80 blur-[100px]" />
        {/* Accent line top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange-500/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ────── LEFT : pitch ────── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-orange-500/40 bg-brand-orange-500/10 text-brand-orange-400 text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-400 animate-pulse" />
              {c.badge}
            </div>

            {/* Social proof eyebrow */}
            <p className="text-slate-400 text-sm font-semibold mb-3 flex items-center gap-2">
              <span className="flex -space-x-2">
                {["#f97316","#0e2f52","#f59e0b","#1e40af"].map((bg, i) => (
                  <span key={i} className="w-7 h-7 rounded-full border-2 border-[#060f1c] flex items-center justify-center text-white text-[9px] font-black"
                    style={{ backgroundColor: bg }}>
                    {["P","M","S","L"][i]}
                  </span>
                ))}
              </span>
              {c.eyebrow}
            </p>

            {/* Headline */}
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              {c.title}{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 via-amber-400 to-brand-orange-300">
                  {c.titleAccent}
                </span>
                {/* Underline accent */}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange-500 to-amber-400 rounded-full opacity-60" />
              </span>
            </h2>

            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
              {c.subtitle}
            </p>

            {/* Benefits row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {c.benefits.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex flex-col items-start gap-2 p-3 rounded-xl bg-white/[0.07] border border-white/[0.12]">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange-500/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-brand-orange-400" />
                  </div>
                  <p className="text-white text-xs font-bold">{label}</p>
                  <p className="text-slate-500 text-xs">{desc}</p>
                </div>
              ))}
            </div>

            {/* Testimonial quote */}
            <blockquote className="flex gap-4 p-4 rounded-xl bg-white/[0.06] border border-white/[0.10]">
              <div className="text-3xl text-brand-orange-500/40 font-black leading-none mt-1">&ldquo;</div>
              <div>
                <p className="text-slate-300 text-sm italic leading-relaxed">{c.quote}</p>
                <p className="text-slate-500 text-xs mt-2 font-semibold">— {c.quoteAuthor}</p>
              </div>
            </blockquote>
          </div>

          {/* ────── RIGHT : form card ────── */}
          <div className="relative">
            {/* Card glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-orange-500/40 via-transparent to-white/5 rounded-3xl blur-sm" />

            <div className="relative bg-[#07213d] border border-white/15 rounded-3xl p-8 lg:p-10">

              {status === "success" ? (
                /* ── SUCCESS STATE ── */
                <div className="flex flex-col items-center gap-5 py-8 text-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-brand-orange-500 rounded-full flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-black text-xl mb-2">{c.success_title}</p>
                    <p className="text-slate-400 text-sm">{c.success_sub}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-amber-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              ) : (
                /* ── FORM STATE ── */
                <>
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-orange-500/20 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-brand-orange-400" />
                      </div>
                      <div>
                        <p className="text-white font-black text-lg leading-none">Ellipsys Insider</p>
                        <p className="text-slate-500 text-xs mt-0.5">Intelligence · Terrain · Exclusivité</p>
                      </div>
                    </div>

                    {/* Pills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {c.pills.map((pill) => (
                        <span key={pill} className="flex items-center gap-1.5 px-3 py-1 bg-brand-orange-500/15 border border-brand-orange-500/30 rounded-full text-xs text-brand-orange-300 font-semibold">
                          <CheckCircle2 className="w-3 h-3 text-brand-orange-400" /> {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email field */}
                    <div className="relative group">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-orange-500/20 to-[#0e2f52]/20 opacity-0 group-focus-within:opacity-100 transition-opacity blur-sm" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={c.placeholder}
                        required
                        disabled={status === "loading"}
                        className="relative w-full px-5 py-4 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm font-medium focus:outline-none focus:border-brand-orange-500/50 focus:bg-white/[0.08] transition-all disabled:opacity-50"
                      />
                    </div>

                    {/* Error */}
                    {status === "error" && (
                      <p className="text-red-400 text-xs font-medium">{errorMsg}</p>
                    )}

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={status === "loading" || !email}
                      className="group relative w-full overflow-hidden flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-black text-sm text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {/* Button gradient bg */}
                      <span className="absolute inset-0 bg-gradient-to-r from-brand-orange-500 to-red-600 group-hover:from-brand-orange-400 group-hover:to-red-500 transition-all duration-300" />
                      {/* Shine effect */}
                      <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {/* Shadow */}
                      <span className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]" />

                      <span className="relative flex items-center gap-2">
                        {status === "loading" ? (
                          <><Loader2 className="w-4 h-4 animate-spin" /> {c.loading}</>
                        ) : (
                          <>{c.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                        )}
                      </span>
                    </button>

                    {/* Privacy */}
                    <p className="text-center text-slate-600 text-xs flex items-center justify-center gap-1.5">
                      <Shield className="w-3 h-3 text-slate-500 shrink-0" />
                      {c.privacy}
                    </p>
                  </form>

                  {/* Stats divider */}
                  <div className="mt-8 pt-6 border-t border-white/[0.12] grid grid-cols-3 gap-4 text-center">
                    {[
                      { value: "850+", label: language === "fr" ? "Abonnés" : "Subscribers" },
                      { value: "4.9★", label: language === "fr" ? "Satisfaction" : "Rating" },
                      { value: "1×", label: language === "fr" ? "Par mois" : "Per month" },
                    ].map(({ value, label }) => (
                      <div key={label}>
                        <p className="text-white font-black text-lg">{value}</p>
                        <p className="text-slate-500 text-xs">{label}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom accent line */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
