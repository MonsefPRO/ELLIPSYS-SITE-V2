"use client";

import { useState, useEffect } from "react";
import { Building2, User, Send, Camera, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { track, identify, Events } from "@/lib/analytics";

type ServiceKey = "facade" | "solaire" | "toiture" | "thermographie" | "nuisibles" | "imagerie" | "autre";

const SERVICES_FR: { key: ServiceKey; label: string; emoji: string }[] = [
  { key: "facade",        label: "Nettoyage de Façades / Bardages",            emoji: "🏢" },
  { key: "solaire",       label: "Nettoyage de Panneaux Solaires",             emoji: "☀️" },
  { key: "toiture",       label: "Traitement Toiture (Démoussage / Hydrofuge)", emoji: "🏠" },
  { key: "thermographie", label: "Thermographie / Inspection Technique",        emoji: "🌡️" },
  { key: "nuisibles",     label: "Destruction de Nuisibles (Frelons)",          emoji: "🐝" },
  { key: "imagerie",      label: "Captation Audiovisuelle / Imagerie",          emoji: "🎬" },
  { key: "autre",         label: "Autre / Non défini",                          emoji: "💬" },
];

const SERVICES_EN: { key: ServiceKey; label: string; emoji: string }[] = [
  { key: "facade",        label: "Façade / Cladding Cleaning",                  emoji: "🏢" },
  { key: "solaire",       label: "Solar Panel Cleaning",                        emoji: "☀️" },
  { key: "toiture",       label: "Roof Treatment (Moss Removal / Waterproofing)", emoji: "🏠" },
  { key: "thermographie", label: "Thermography / Technical Inspection",          emoji: "🌡️" },
  { key: "nuisibles",     label: "Pest Eradication (Hornets)",                   emoji: "🐝" },
  { key: "imagerie",      label: "Audiovisual Capture / Aerial Imaging",         emoji: "🎬" },
  { key: "autre",         label: "Other / Undefined",                            emoji: "💬" },
];

const INPUT  = "w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-orange-500 focus:ring-2 focus:ring-brand-orange-100 transition-all bg-white text-slate-800";
const SELECT = INPUT + " cursor-pointer";
const LABEL  = "text-sm font-bold text-slate-700 mb-1 block";
const FIELD  = "space-y-1";

export default function DevisPage() {
  const [clientType, setClientType] = useState<"pro" | "particulier">("pro");
  const [service, setService]       = useState<ServiceKey>("facade");
  const [submitted, setSubmitted]   = useState(false);
  const [loading, setLoading]       = useState(false);
  const [errorMsg, setErrorMsg]     = useState<string | null>(null);

  const [base, setBase] = useState({ name: "", email: "", phone: "", city: "", siret: "", message: "" });
  const [attachments, setAttachments] = useState<File[]>([]);
  const [facade, setFacade]           = useState({ typeBat: "", surface: "", hauteur: "", revetement: "", vitrages: "Non", nbFenetres: "", env: "", urgence: "" });
  const [solaire, setSolaire]         = useState({ nbPanneaux: "", typeInstall: "", pente: "", hauteurSupport: "", acces: "", dernier: "" });
  const [toiture, setToiture]         = useState({ couverture: "", surface: "", pente: "", abf: "Non", prestation: "" });
  const [thermo, setThermo]           = useState({ typeSite: "", surface: "", objectif: "", delai: "" });
  const [nuisibles, setNuisibles]     = useState({ type: "", hauteur: "", localisation: "", urgence: "" });
  const [imagerie, setImagerie]       = useState({ typeBien: "", objectif: "", format: "", date: "" });

  const setB  = (k: keyof typeof base, v: string)      => setBase(p => ({ ...p, [k]: v }));
  const setF  = (k: keyof typeof facade, v: string)    => setFacade(p => ({ ...p, [k]: v }));
  const setS  = (k: keyof typeof solaire, v: string)   => setSolaire(p => ({ ...p, [k]: v }));
  const setT  = (k: keyof typeof toiture, v: string)   => setToiture(p => ({ ...p, [k]: v }));
  const setTh = (k: keyof typeof thermo, v: string)    => setThermo(p => ({ ...p, [k]: v }));
  const setN  = (k: keyof typeof nuisibles, v: string) => setNuisibles(p => ({ ...p, [k]: v }));
  const setI  = (k: keyof typeof imagerie, v: string)  => setImagerie(p => ({ ...p, [k]: v }));

  // Detect lang from cookie client-side
  const isEn = typeof document !== "undefined" && document.cookie.includes("lang=en");
  const SERVICES = isEn ? SERVICES_EN : SERVICES_FR;

  // Analytics — page view (1 seule fois au mount)
  useEffect(() => { track(Events.DEVIS_PAGE_VIEWED, { lang: isEn ? "en" : "fr" }); }, [isEn]);

  // Analytics — changement type client
  const handleClientType = (t: "pro" | "particulier") => {
    setClientType(t);
    track(Events.DEVIS_CLIENT_TYPE_SELECTED, { client_type: t });
  };

  // Analytics — sélection service
  const handleService = (s: ServiceKey) => {
    setService(s);
    const label = SERVICES.find((x) => x.key === s)?.label ?? s;
    track(Events.DEVIS_SERVICE_SELECTED, { service: s, service_label: label, client_type: clientType });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const svcLabel = SERVICES.find(s => s.key === service)?.label ?? service;
    const details: Record<string, string> = {};

    if (service === "facade") {
      if (facade.typeBat)    details["Type bâtiment"] = facade.typeBat;
      if (facade.surface)    details["Surface (m²)"] = facade.surface;
      if (facade.hauteur)    details["Hauteur"] = facade.hauteur;
      if (facade.revetement) details["Revêtement"] = facade.revetement;
      details["Vitrages"] = facade.vitrages;
      if (facade.vitrages === "Oui" && facade.nbFenetres) details["Nb fenêtres"] = facade.nbFenetres;
      if (facade.env)        details["Environnement"] = facade.env;
      if (facade.urgence)    details["Délai"] = facade.urgence;
    } else if (service === "solaire") {
      if (solaire.nbPanneaux)     details["Nombre de panneaux"] = solaire.nbPanneaux;
      if (solaire.typeInstall)    details["Type installation"] = solaire.typeInstall;
      if (solaire.pente)          details["Inclinaison"] = solaire.pente;
      if (solaire.hauteurSupport) details["Hauteur support (m)"] = solaire.hauteurSupport;
      if (solaire.acces)          details["Accès"] = solaire.acces;
      if (solaire.dernier)        details["Dernier nettoyage"] = solaire.dernier;
    } else if (service === "toiture") {
      if (toiture.couverture) details["Couverture"] = toiture.couverture;
      if (toiture.surface)    details["Surface (m²)"] = toiture.surface;
      if (toiture.pente)      details["Pente"] = toiture.pente;
      details["Zone ABF"] = toiture.abf;
      if (toiture.prestation) details["Prestation"] = toiture.prestation;
    } else if (service === "thermographie") {
      if (thermo.typeSite) details["Type site"] = thermo.typeSite;
      if (thermo.surface)  details["Surface"] = thermo.surface;
      if (thermo.objectif) details["Objectif"] = thermo.objectif;
      if (thermo.delai)    details["Délai"] = thermo.delai;
    } else if (service === "nuisibles") {
      if (nuisibles.type)          details["Type nuisible"] = nuisibles.type;
      if (nuisibles.hauteur)       details["Hauteur nid (m)"] = nuisibles.hauteur;
      if (nuisibles.localisation)  details["Localisation"] = nuisibles.localisation;
      if (nuisibles.urgence)       details["Urgence"] = nuisibles.urgence;
    } else if (service === "imagerie") {
      if (imagerie.typeBien) details["Type de bien"] = imagerie.typeBien;
      if (imagerie.objectif) details["Objectif"] = imagerie.objectif;
      if (imagerie.format)   details["Format"] = imagerie.format;
      if (imagerie.date)     details["Date souhaitée"] = imagerie.date;
    }

    const detailLines = Object.entries(details).map(([k, v]) => `• ${k}: ${v}`).join("\n");
    const fullDescription = [
      `Type client : ${clientType === "pro" ? "Professionnel" : "Particulier"}`,
      `Service : ${svcLabel}`,
      clientType === "pro" && base.siret ? `SIRET : ${base.siret}` : "",
      "",
      detailLines || "(aucun détail spécifique renseigné)",
      "",
      base.message ? `Commentaire :\n${base.message}` : "",
    ].filter(Boolean).join("\n");

    // Construction du FormData — supporte les fichiers attachés
    const fd = new FormData();
    fd.append("clientType", clientType);
    fd.append("service", service);
    fd.append("serviceLabel", svcLabel);
    fd.append("name", base.name);
    fd.append("email", base.email);
    fd.append("phone", base.phone);
    fd.append("city", base.city);
    fd.append("siret", base.siret);
    fd.append("message", base.message);
    fd.append("details", JSON.stringify(details));
    fd.append("fullDescription", fullDescription);
    fd.append("pageUri", typeof window !== "undefined" ? window.location.href : "");
    // Pièces jointes (limité à 5 × 10MB côté serveur)
    for (const file of attachments.slice(0, 5)) {
      fd.append("files", file);
    }

    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        body: fd, // multipart auto, ne PAS définir Content-Type manuellement
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(data?.error || "Erreur lors de l'envoi. Veuillez réessayer ou nous contacter au 04 67 20 97 09.");
        track(Events.DEVIS_SUBMIT_FAILED, {
          status: res.status,
          error: data?.error,
          service,
          client_type: clientType,
        });
        setLoading(false);
        return;
      }
      // Identifie le lead et capture l'event succès
      identify(base.email, {
        email: base.email,
        name: base.name,
        phone: base.phone,
        city: base.city,
        client_type: clientType,
        siret: base.siret || undefined,
      });
      track(Events.DEVIS_SUBMITTED, {
        service,
        service_label: svcLabel,
        client_type: clientType,
        city: base.city,
        has_phone: !!base.phone,
        has_siret: !!base.siret,
        has_message: !!base.message,
        hubspot_contact_id: data?.hubspotContactId,
        hubspot_deal_id: data?.hubspotDealId,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Erreur envoi devis", err);
      setErrorMsg("Connexion impossible. Veuillez réessayer ou nous contacter au 04 67 20 97 09.");
      track(Events.DEVIS_SUBMIT_FAILED, { error: String(err), network: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">

      {/* BANNIÈRE */}
      <section className="bg-[#0e2f52] text-white py-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/40 text-brand-orange-400 font-semibold text-sm mb-6">
            {isEn ? "Free Quote · Response within 24h · No commitment" : "Devis gratuit · Réponse sous 24h · Sans engagement"}
          </div>
          <h1 className="text-3xl lg:text-5xl font-black mb-4">{isEn ? "Get your personalised quote" : "Obtenez votre devis personnalisé"}</h1>
          <p className="text-xl text-slate-300 font-light border-l-4 border-brand-orange-500 pl-4 mx-auto max-w-2xl text-left">
            {isEn
              ? "Guide us through your project and our technical team will prepare a tailored proposal within 24/48h."
              : "Guidez-nous dans votre projet et notre bureau d'études vous prépare une offre sur mesure sous 24/48h."}
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">

          {/* ── FORM ── */}
          <div className="lg:col-span-2">

            {/* Toggle Pro / Particulier */}
            <div className="flex p-1 bg-slate-200 rounded-2xl mb-8 max-w-md mx-auto lg:mx-0">
              {(["pro", "particulier"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => handleClientType(t)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${clientType === t ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                  {t === "pro"
                    ? <><Building2 className="w-4 h-4" /> {isEn ? "Professional / Managing Agent" : "Professionnel / Syndic"}</>
                    : <><User className="w-4 h-4" /> {isEn ? "Private Individual" : "Particulier"}</>}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-12 text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{isEn ? "Request received!" : "Demande bien reçue !"}</h2>
                <p className="text-slate-600 max-w-md mx-auto">{isEn ? "Our technical team is reviewing your project and will get back to you within 24/48h with a tailored proposal." : "Notre bureau d'études analyse votre projet et vous recontacte sous 24/48h avec une proposition adaptée."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 space-y-8">

                {/* ── SECTION 1 : Contact details ── */}
                <div>
                  <h2 className="text-lg font-black text-slate-900 mb-5 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-brand-orange-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</span>
                    {isEn ? "Your contact details" : "Vos coordonnées"}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-5">

                    <div className={FIELD}>
                      <label className={LABEL}>{isEn ? `Name ${clientType === "pro" ? "/ Company" : ""} *` : `Nom ${clientType === "pro" ? "/ Entreprise" : ""} *`}</label>
                      <input required type="text" value={base.name} onChange={e => setB("name", e.target.value)} className={INPUT} placeholder={clientType === "pro" ? (isEn ? "Company name" : "Raison sociale") : (isEn ? "First Last Name" : "Prénom Nom")} />
                    </div>

                    <div className={FIELD}>
                      <label className={LABEL}>{isEn ? "Email *" : "Email *"}</label>
                      <input required type="email" value={base.email} onChange={e => setB("email", e.target.value)} className={INPUT} placeholder="votre@email.com" />
                    </div>

                    <div className={FIELD}>
                      <label className={LABEL}>{isEn ? "Phone" : "Téléphone"}</label>
                      <input type="tel" value={base.phone} onChange={e => setB("phone", e.target.value)} className={INPUT} placeholder="06 xx xx xx xx" />
                    </div>

                    <div className={FIELD}>
                      <label className={LABEL}>{isEn ? "City / Postcode of site *" : "Ville / Code Postal du site *"}</label>
                      <input required type="text" value={base.city} onChange={e => setB("city", e.target.value)} className={INPUT} placeholder={isEn ? "E.g. 34000 Montpellier" : "Ex: 34000 Montpellier"} />
                    </div>

                    {clientType === "pro" && (
                      <div className={`${FIELD} md:col-span-2`}>
                        <label className={LABEL}>{isEn ? "SIRET Number" : "Numéro SIRET"}</label>
                        <input type="text" value={base.siret} onChange={e => setB("siret", e.target.value)} className={INPUT} placeholder="XXX XXX XXX XXXXX" maxLength={17} />
                        <p className="text-xs text-slate-400 mt-1">{isEn ? "Required to issue a formal quote with VAT number." : "Requis pour établir un devis formel avec numéro de TVA."}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* ── SECTION 2 : Service selection ── */}
                <div>
                  <h2 className="text-lg font-black text-slate-900 mb-5 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-brand-orange-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</span>
                    {isEn ? "Your service" : "Votre prestation"}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {SERVICES.map(s => (
                      <button
                        key={s.key}
                        type="button"
                        onClick={() => handleService(s.key)}
                        className={`p-4 rounded-2xl border-2 text-left transition-all ${service === s.key ? "border-brand-orange-500 bg-brand-orange-50" : "border-slate-200 bg-white hover:border-slate-300"}`}
                      >
                        <span className="text-2xl block mb-2">{s.emoji}</span>
                        <span className={`text-xs font-bold leading-tight ${service === s.key ? "text-brand-orange-700" : "text-slate-700"}`}>{s.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── SECTION 3 : Project details ── */}
                <div>
                  <h2 className="text-lg font-black text-slate-900 mb-5 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-brand-orange-500 text-white flex items-center justify-center text-sm font-black shrink-0">3</span>
                    {isEn ? "Project details" : "Détails du projet"}
                  </h2>

                  {/* ── FACADES ── */}
                  {service === "facade" && (
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Building type" : "Type de bâtiment"}</label>
                        <select value={facade.typeBat} onChange={e => setF("typeBat", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Detached house" : "Maison individuelle"}</option>
                          <option>{isEn ? "Villa" : "Villa"}</option>
                          <option>{isEn ? "Semi-detached villa" : "Villa jumelée"}</option>
                          <option>{isEn ? "Residential block" : "Immeuble résidentiel"}</option>
                          <option>{isEn ? "Commercial building" : "Bâtiment commercial"}</option>
                          <option>{isEn ? "Industrial warehouse" : "Entrepôt industriel"}</option>
                          <option>{isEn ? "Château / Estate" : "Château / Domaine"}</option>
                        </select>
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Estimated façade surface area (m²)" : "Surface estimée de la façade (m²)"}</label>
                        <input type="number" min="1" value={facade.surface} onChange={e => setF("surface", e.target.value)} className={INPUT} placeholder={isEn ? "E.g. 250" : "Ex: 250"} />
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Building height (m)" : "Hauteur du bâtiment (m)"}</label>
                        <select value={facade.hauteur} onChange={e => setF("hauteur", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Less than 6 m (G+1)" : "Moins de 6 m (R+1)"}</option>
                          <option>{isEn ? "6 to 12 m (G+2 to G+3)" : "6 à 12 m (R+2 à R+3)"}</option>
                          <option>{isEn ? "12 to 20 m (G+4 to G+6)" : "12 à 20 m (R+4 à R+6)"}</option>
                          <option>{isEn ? "More than 20 m" : "Plus de 20 m"}</option>
                        </select>
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Cladding type" : "Type de revêtement"}</label>
                        <select value={facade.revetement} onChange={e => setF("revetement", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Render / Rough-cast" : "Enduit / Crépi"}</option>
                          <option>{isEn ? "Natural stone / Ashlar" : "Pierre naturelle / Pierre de taille"}</option>
                          <option>{isEn ? "Metal cladding (steel / aluminium)" : "Bardage métallique (acier / aluminium)"}</option>
                          <option>{isEn ? "Timber / composite cladding" : "Bardage bois / composite"}</option>
                          <option>{isEn ? "Brick" : "Briques"}</option>
                          <option>{isEn ? "Concrete" : "Béton"}</option>
                          <option>{isEn ? "Other" : "Autre"}</option>
                        </select>
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Are there glazed elements (windows, bay windows)?" : "Y a-t-il des vitrages (fenêtres, baies) ?"}</label>
                        <select value={facade.vitrages} onChange={e => setF("vitrages", e.target.value)} className={SELECT}>
                          <option>{isEn ? "No" : "Non"}</option>
                          <option>{isEn ? "Yes" : "Oui"}</option>
                        </select>
                      </div>
                      {facade.vitrages === "Oui" && (
                        <div className={FIELD}>
                          <label className={LABEL}>{isEn ? "Estimated number of windows" : "Nombre estimé de fenêtres"}</label>
                          <input type="number" min="1" value={facade.nbFenetres} onChange={e => setF("nbFenetres", e.target.value)} className={INPUT} placeholder={isEn ? "E.g. 12" : "Ex: 12"} />
                        </div>
                      )}
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Building environment" : "Environnement du bâtiment"}</label>
                        <select value={facade.env} onChange={e => setF("env", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Near sea / coast (sea salt)" : "Proche mer / littoral (sel marin)"}</option>
                          <option>{isEn ? "Dense urban area (pollution, soot)" : "Zone urbaine dense (pollution, suies)"}</option>
                          <option>{isEn ? "Peri-urban / industrial area" : "Zone péri-urbaine / industrielle"}</option>
                          <option>{isEn ? "Rural / forest area (pollen, lichens)" : "Zone rurale / forêt (pollen, lichens)"}</option>
                          <option>{isEn ? "Mediterranean region (Saharan sand)" : "Région méditerranéenne (sable saharien)"}</option>
                        </select>
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Desired intervention timeframe" : "Délai souhaité d'intervention"}</label>
                        <select value={facade.urgence} onChange={e => setF("urgence", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Urgent (less than 2 weeks)" : "Urgent (moins de 2 semaines)"}</option>
                          <option>{isEn ? "Within the month" : "Dans le mois"}</option>
                          <option>{isEn ? "1 to 3 months" : "1 à 3 mois"}</option>
                          <option>{isEn ? "No rush (open planning)" : "Pas pressé (planification libre)"}</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* ── SOLAR PANELS ── */}
                  {service === "solaire" && (
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Estimated number of panels" : "Nombre de panneaux estimé"}</label>
                        <input type="number" min="1" value={solaire.nbPanneaux} onChange={e => setS("nbPanneaux", e.target.value)} className={INPUT} placeholder={isEn ? "E.g. 48" : "Ex: 48"} />
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Installation type" : "Type d'installation"}</label>
                        <select value={solaire.typeInstall} onChange={e => setS("typeInstall", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Residential rooftop" : "Toiture résidentielle"}</option>
                          <option>{isEn ? "Commercial / industrial rooftop" : "Toiture commerciale / industrielle"}</option>
                          <option>{isEn ? "Ground-mounted array" : "Centrale au sol"}</option>
                          <option>{isEn ? "Car park canopy" : "Ombrières de parking"}</option>
                        </select>
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Panel tilt (slope)" : "Inclinaison des panneaux (pente)"}</label>
                        <select value={solaire.pente} onChange={e => setS("pente", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Low (less than 15°)" : "Faible (moins de 15°)"}</option>
                          <option>{isEn ? "Moderate (15° to 30°)" : "Modérée (15° à 30°)"}</option>
                          <option>{isEn ? "Steep (more than 30°)" : "Forte (plus de 30°)"}</option>
                          <option>{isEn ? "Vertical / façade" : "Verticale / façade"}</option>
                        </select>
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Support / rooftop height (m)" : "Hauteur des supports / toiture (m)"}</label>
                        <input type="number" min="0" value={solaire.hauteurSupport} onChange={e => setS("hauteurSupport", e.target.value)} className={INPUT} placeholder={isEn ? "E.g. 4" : "Ex: 4"} />
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Site accessibility" : "Accessibilité du site"}</label>
                        <select value={solaire.acces} onChange={e => setS("acces", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Easy (paved road, open space)" : "Facile (route bitumée, espace dégagé)"}</option>
                          <option>{isEn ? "Moderate (dirt track, gate)" : "Moyen (chemin de terre, portail)"}</option>
                          <option>{isEn ? "Difficult (rough terrain, restricted access)" : "Difficile (terrain accidenté, accès restreint)"}</option>
                        </select>
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Last cleaning performed" : "Dernier nettoyage effectué"}</label>
                        <select value={solaire.dernier} onChange={e => setS("dernier", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Never" : "Jamais"}</option>
                          <option>{isEn ? "Less than 6 months ago" : "Il y a moins de 6 mois"}</option>
                          <option>{isEn ? "6 to 12 months ago" : "Il y a 6 à 12 mois"}</option>
                          <option>{isEn ? "More than a year ago" : "Il y a plus d'un an"}</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* ── ROOFING ── */}
                  {service === "toiture" && (
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Roof covering type" : "Type de couverture"}</label>
                        <select value={toiture.couverture} onChange={e => setT("couverture", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Canal / Roman tiles" : "Tuiles canal / romanes"}</option>
                          <option>{isEn ? "Flat tiles" : "Tuiles plates"}</option>
                          <option>{isEn ? "Natural slate" : "Ardoises naturelles"}</option>
                          <option>{isEn ? "Synthetic slate" : "Ardoises synthétiques"}</option>
                          <option>{isEn ? "Zinc" : "Zinc"}</option>
                          <option>{isEn ? "Stone slabs (lauzes)" : "Lauzes (pierre)"}</option>
                          <option>{isEn ? "Steel decking" : "Bac acier"}</option>
                          <option>{isEn ? "Flat roof / terrace" : "Toiture-terrasse"}</option>
                          <option>{isEn ? "Other" : "Autre"}</option>
                        </select>
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Roof surface area (m²)" : "Surface de la toiture (m²)"}</label>
                        <input type="number" min="1" value={toiture.surface} onChange={e => setT("surface", e.target.value)} className={INPUT} placeholder={isEn ? "E.g. 180" : "Ex: 180"} />
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Roof pitch" : "Pente de la toiture"}</label>
                        <select value={toiture.pente} onChange={e => setT("pente", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Low (less than 20°)" : "Faible (moins de 20°)"}</option>
                          <option>{isEn ? "Moderate (20° to 40°)" : "Modérée (20° à 40°)"}</option>
                          <option>{isEn ? "Steep (more than 40°)" : "Forte (plus de 40°)"}</option>
                        </select>
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "ABF zone or Listed Heritage Building?" : "Zone ABF ou Monument Historique ?"}</label>
                        <select value={toiture.abf} onChange={e => setT("abf", e.target.value)} className={SELECT}>
                          <option>{isEn ? "No" : "Non"}</option>
                          <option>{isEn ? "Yes" : "Oui"}</option>
                          <option>{isEn ? "I don't know" : "Je ne sais pas"}</option>
                        </select>
                      </div>
                      <div className={`${FIELD} md:col-span-2`}>
                        <label className={LABEL}>{isEn ? "Desired service" : "Prestation souhaitée"}</label>
                        <select value={toiture.prestation} onChange={e => setT("prestation", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Moss removal only" : "Démoussage seul"}</option>
                          <option>{isEn ? "Waterproofing only (on already clean surface)" : "Hydrofuge seul (sur surface déjà propre)"}</option>
                          <option>{isEn ? "Moss removal + Waterproofing (complete pack)" : "Démoussage + Hydrofuge (pack complet)"}</option>
                          <option>{isEn ? "Diagnosis / Not yet decided" : "Diagnostic / Je ne sais pas encore"}</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* ── THERMOGRAPHY ── */}
                  {service === "thermographie" && (
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Site type" : "Type de site"}</label>
                        <select value={thermo.typeSite} onChange={e => setTh("typeSite", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Tertiary building (offices, retail)" : "Bâtiment tertiaire (bureaux, commerces)"}</option>
                          <option>{isEn ? "Photovoltaic park / Solar power plant" : "Parc photovoltaïque / Centrale solaire"}</option>
                          <option>{isEn ? "Residential building" : "Bâtiment résidentiel"}</option>
                          <option>{isEn ? "Industrial site" : "Site industriel"}</option>
                          <option>{isEn ? "Public infrastructure" : "Infrastructure publique"}</option>
                        </select>
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Area to inspect (m² or MWp for PV)" : "Surface à inspecter (m² ou MWc pour PV)"}</label>
                        <input type="text" value={thermo.surface} onChange={e => setTh("surface", e.target.value)} className={INPUT} placeholder={isEn ? "E.g. 5,000 m² or 2 MWp" : "Ex: 5 000 m² ou 2 MWc"} />
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Inspection objective" : "Objectif de l'inspection"}</label>
                        <select value={thermo.objectif} onChange={e => setTh("objectif", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Energy audit (Tertiary Decree)" : "Audit énergétique (Décret Tertiaire)"}</option>
                          <option>{isEn ? "Preventive PV maintenance (hotspots)" : "Maintenance préventive PV (hotspots)"}</option>
                          <option>{isEn ? "Thermal bridge / leak detection" : "Détection de ponts thermiques / fuites"}</option>
                          <option>{isEn ? "Regulatory inspection" : "Inspection réglementaire"}</option>
                          <option>{isEn ? "Other" : "Autre"}</option>
                        </select>
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Desired timeframe" : "Délai souhaité"}</label>
                        <select value={thermo.delai} onChange={e => setTh("delai", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Urgent (less than one week)" : "Urgent (moins d'une semaine)"}</option>
                          <option>{isEn ? "Standard (within one month)" : "Normal (sous un mois)"}</option>
                          <option>{isEn ? "Planned (date to be defined)" : "Planifié (date à définir)"}</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* ── PESTS ── */}
                  {service === "nuisibles" && (
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Identified pest type" : "Type de nuisible identifié"}</label>
                        <select value={nuisibles.type} onChange={e => setN("type", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Asian hornets (Vespa velutina)" : "Frelons asiatiques (Vespa velutina)"}</option>
                          <option>{isEn ? "European hornets" : "Frelons européens"}</option>
                          <option>{isEn ? "Wasps" : "Guêpes"}</option>
                          <option>{isEn ? "Wild bees" : "Abeilles sauvages"}</option>
                          <option>{isEn ? "Unidentified" : "Non identifié"}</option>
                        </select>
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Estimated nest height (m)" : "Hauteur estimée du nid (m)"}</label>
                        <input type="number" min="0" value={nuisibles.hauteur} onChange={e => setN("hauteur", e.target.value)} className={INPUT} placeholder={isEn ? "E.g. 8" : "Ex: 8"} />
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Nest location" : "Localisation du nid"}</label>
                        <select value={nuisibles.localisation} onChange={e => setN("localisation", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Under roof / roof structure" : "Sous toiture / charpente"}</option>
                          <option>{isEn ? "Tree" : "Arbre"}</option>
                          <option>{isEn ? "Façade / wall" : "Façade / mur"}</option>
                          <option>{isEn ? "Basement / cellar" : "Sous-sol / cave"}</option>
                          <option>{isEn ? "Hedge / vegetation" : "Haie / végétation"}</option>
                          <option>{isEn ? "Other" : "Autre"}</option>
                        </select>
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Urgency level" : "Niveau d'urgence"}</label>
                        <select value={nuisibles.urgence} onChange={e => setN("urgence", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Very urgent (active nest, immediate danger)" : "Très urgent (nid actif, danger immédiat)"}</option>
                          <option>{isEn ? "Urgent (this week)" : "Urgent (cette semaine)"}</option>
                          <option>{isEn ? "Standard (within the month)" : "Normal (dans le mois)"}</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* ── IMAGING ── */}
                  {service === "imagerie" && (
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Property / subject type" : "Type de bien / sujet"}</label>
                        <select value={imagerie.typeBien} onChange={e => setI("typeBien", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Prestige residential (villa, manor)" : "Résidentiel prestige (villa, manoir)"}</option>
                          <option>{isEn ? "Wine estate / château" : "Domaine viticole / château"}</option>
                          <option>{isEn ? "Standard residential property" : "Bien immobilier standard"}</option>
                          <option>{isEn ? "Event (wedding, festival…)" : "Événement (mariage, festival…)"}</option>
                          <option>{isEn ? "Commercial / industrial site" : "Site commercial / industriel"}</option>
                          <option>{isEn ? "Other" : "Autre"}</option>
                        </select>
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Main objective" : "Objectif principal"}</label>
                        <select value={imagerie.objectif} onChange={e => setI("objectif", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "Sale / property showcase" : "Vente / mise en valeur immobilière"}</option>
                          <option>{isEn ? "Communication / social media" : "Communication / réseaux sociaux"}</option>
                          <option>{isEn ? "Architecture / documentation" : "Architecture / documentation"}</option>
                          <option>{isEn ? "Tourism / territorial promotion" : "Tourisme / promotion territoriale"}</option>
                          <option>{isEn ? "Other" : "Autre"}</option>
                        </select>
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Desired format" : "Format souhaité"}</label>
                        <select value={imagerie.format} onChange={e => setI("format", e.target.value)} className={SELECT}>
                          <option value="">{isEn ? "Select…" : "Sélectionner…"}</option>
                          <option>{isEn ? "High-definition photos only" : "Photos haute définition uniquement"}</option>
                          <option>{isEn ? "Cinematic video only" : "Vidéo cinématographique uniquement"}</option>
                          <option>{isEn ? "Photos + Video (complete pack)" : "Photos + Vidéo (pack complet)"}</option>
                          <option>{isEn ? "To be defined together" : "À définir ensemble"}</option>
                        </select>
                      </div>
                      <div className={FIELD}>
                        <label className={LABEL}>{isEn ? "Desired shoot date" : "Date souhaitée de prise de vue"}</label>
                        <input type="date" value={imagerie.date} onChange={e => setI("date", e.target.value)} className={INPUT} />
                      </div>
                    </div>
                  )}

                  {/* ── OTHER ── */}
                  {service === "autre" && (
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <p className="text-slate-600 text-sm">{isEn ? "Describe your needs in the comments section below and our technical team will get back to you to qualify your project." : "Décrivez votre besoin dans la zone de commentaires ci-dessous et notre bureau d'études vous recontactera pour qualifier votre projet."}</p>
                    </div>
                  )}
                </div>

                {/* ── SECTION 4 : Additional information ── */}
                <div>
                  <h2 className="text-lg font-black text-slate-900 mb-5 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-brand-orange-500 text-white flex items-center justify-center text-sm font-black shrink-0">4</span>
                    {isEn ? "Additional information" : "Informations complémentaires"}
                  </h2>
                  <div className="space-y-5">
                    <div className={FIELD}>
                      <label className={LABEL}>{isEn ? "Specific constraints, comments" : "Contraintes particulières, commentaires"}</label>
                      <textarea
                        rows={4}
                        value={base.message}
                        onChange={e => setB("message", e.target.value)}
                        className={`${INPUT} resize-none`}
                        placeholder={isEn ? "Describe any additional elements here: access constraints, special materials, building history, mandatory date…" : "Décrivez ici tout élément complémentaire : contraintes d'accès, matériaux spéciaux, historique du bâtiment, date impérative…"}
                      />
                    </div>
                    <div className="p-5 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl">
                      <div className="text-center mb-3">
                        <Camera className="w-7 h-7 text-slate-400 mx-auto mb-2" />
                        <p className="text-sm text-slate-500">
                          {isEn
                            ? "Add photos of the site (plans, façades, roof) to facilitate the feasibility study"
                            : "Ajouter des photos du site (plans, façades, toiture) pour faciliter l'étude de faisabilité"}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          {isEn ? "Up to 5 files · 10 MB max per file · JPG, PNG, WebP, HEIC, PDF" : "Jusqu'à 5 fichiers · 10 Mo max par fichier · JPG, PNG, WebP, HEIC, PDF"}
                        </p>
                      </div>

                      <label className="flex items-center justify-center gap-2 cursor-pointer bg-white hover:bg-slate-100 border border-slate-300 rounded-xl py-2.5 px-4 text-sm font-semibold text-slate-700 transition-colors">
                        <Camera className="w-4 h-4" />
                        {isEn ? "Choose files…" : "Sélectionner des fichiers…"}
                        <input
                          type="file"
                          className="hidden"
                          multiple
                          accept="image/jpeg,image/png,image/webp,image/heic,image/heif,.pdf"
                          onChange={(e) => {
                            const newFiles = Array.from(e.target.files ?? []);
                            // Filtre fichiers > 10MB côté client (feedback immédiat)
                            const valid = newFiles.filter(f => f.size <= 10 * 1024 * 1024);
                            const tooBig = newFiles.length - valid.length;
                            if (tooBig > 0) {
                              alert(isEn
                                ? `${tooBig} file(s) exceed 10 MB and were ignored.`
                                : `${tooBig} fichier(s) dépassent 10 Mo et ont été ignorés.`);
                            }
                            setAttachments(prev => [...prev, ...valid].slice(0, 5));
                            // Reset input pour permettre re-sélection du même fichier
                            e.target.value = "";
                          }}
                        />
                      </label>

                      {attachments.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {attachments.map((file, i) => (
                            <div key={`${file.name}-${i}`} className="flex items-center justify-between gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm">
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="text-base">{file.type.startsWith("image/") ? "🖼️" : "📄"}</span>
                                <span className="truncate text-slate-700">{file.name}</span>
                                <span className="text-xs text-slate-400 shrink-0">({(file.size / 1024 / 1024).toFixed(1)} MB)</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => setAttachments(prev => prev.filter((_, idx) => idx !== i))}
                                className="text-red-500 hover:text-red-700 text-xs font-bold shrink-0"
                                aria-label={isEn ? "Remove" : "Retirer"}
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {errorMsg && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl p-4 text-sm">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-gradient-to-r from-brand-orange-500 to-amber-500 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-xl disabled:opacity-60"
                >
                  <Send className="w-5 h-5" />
                  {loading ? (isEn ? "Sending…" : "Envoi en cours…") : (isEn ? "Submit my quote request" : "Envoyer ma demande de devis")}
                </button>
                <p className="text-center text-xs text-slate-400">{isEn ? "Free quote · No commitment · Response within 24/48h" : "Devis gratuit · Sans engagement · Réponse sous 24/48h"}</p>

              </form>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <div className="lg:col-span-1 space-y-6">

            <div className="bg-brand-orange-50 rounded-3xl border border-brand-orange-100 p-7">
              <h3 className="font-black text-slate-900 mb-3 text-lg">{isEn ? "The Ellipsys expert view:" : "L'avis de l'expert Ellipsys :"}</h3>
              <p className="italic text-sm text-slate-700 leading-relaxed">
                {isEn
                  ? "A successful technical intervention always starts with a rigorous feasibility study. The more information our technical team has upfront (photos, surface area, constraints), the more precise our preliminary estimate and the faster our deployment."
                  : "Une intervention technique réussie commence toujours par une étude de faisabilité rigoureuse. Plus notre bureau d'études disposera d'informations en amont (photos, surface, contraintes), plus notre pré-chiffrage sera précis et notre déploiement rapide."}
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 p-7">
              <h3 className="text-lg font-black text-slate-900 mb-5 border-b border-slate-100 pb-4">{isEn ? "Contact" : "Coordonnées"}</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 text-sm">Ellipsys Solutions</strong>
                    <span className="text-slate-500 text-sm">159 Rue de Thor<br />34000 Montpellier</span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-brand-orange-500 shrink-0" />
                  <a href="tel:0467209709" className="text-slate-700 font-bold hover:text-brand-orange-500 transition-colors">04 67 20 97 09</a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-brand-orange-500 shrink-0" />
                  <a href="mailto:contact@ellipsys-group.com" className="text-slate-500 hover:text-brand-orange-500 transition-colors text-sm break-all">contact@ellipsys-group.com</a>
                </li>
              </ul>
            </div>

            <div className="bg-[#0e2f52] rounded-3xl p-7 text-white">
              <h3 className="text-lg font-black mb-3 text-brand-orange-400">{isEn ? "Service areas" : "Zones d'intervention"}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {isEn ? "Our teams operate throughout France and occasionally across Europe." : "Nos équipes interviennent sur toute la France et ponctuellement en Europe."}
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-[#0e2f52]">
                {["Montpellier", "Nîmes", "Marseille", "Paris", "Lyon", "Toulouse", "Bordeaux"].map(v => (
                  <span key={v} className="bg-white px-3 py-1 rounded-full">{v}</span>
                ))}
                <span className="bg-brand-orange-500 text-white px-3 py-1 rounded-full">{isEn ? "Europe on request" : "Europe sur étude"}</span>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-7">
              <h3 className="font-black text-emerald-800 mb-3">{isEn ? "Our commitments" : "Nos engagements"}</h3>
              <ul className="space-y-2 text-sm text-emerald-700">
                {(isEn
                  ? ["Free and non-binding quote", "Response within 24/48 working hours", "DGAC / EASA certified", "Professional liability insurance", "Flight authorisation management"]
                  : ["Devis gratuit et sans engagement", "Réponse sous 24/48h ouvrées", "Certifiés DGAC / EASA", "Couverture assurance RC Pro", "Gestion des autorisations de vol"]
                ).map(e => (
                  <li key={e} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
