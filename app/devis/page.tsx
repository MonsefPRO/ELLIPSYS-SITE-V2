"use client";

import { useState } from "react";
import { Building2, User, Send, Camera, MapPin, Phone, Mail } from "lucide-react";

export default function DevisPage() {
  const [type, setType] = useState<"pro" | "particulier">("pro");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "Nettoyage Solaire",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const portalId = "147434121";
    const formId = "b126bf45-2c42-44c0-b3ae-f7008d200b12";

    const payload = {
      fields: [
        { name: "firstname", value: formData.name },
        { name: "email", value: formData.email },
        { name: "phone", value: formData.phone },
        { name: "city", value: formData.city },
        { name: "message", value: `[${type.toUpperCase()}] ${formData.service} - ${formData.message}` },
      ],
      context: {
        pageUri: window.location.href,
        pageName: "Devis - Ellipsys Solutions",
      },
    };

    try {
      await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      setSubmitted(true);
    } catch (err) {
      console.error("Erreur HubSpot", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12 bg-slate-50">

      <section className="bg-[#0e2f52] text-white py-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-5xl font-black mb-4">{"Contactez notre bureau d'etudes"}</h1>
          <p className="text-xl text-slate-300 font-light border-l-4 border-brand-orange-500 pl-4 mx-auto max-w-2xl">
            {"De l'analyse de votre besoin au deploiement technique."}
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">

          {/* Formulaire */}
          <div className="lg:col-span-2">
            <div className="flex p-1 bg-slate-200 rounded-2xl mb-8 max-w-md mx-auto lg:mx-0">
              <button
                onClick={() => setType("pro")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${type === "pro" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              >
                <Building2 className="w-5 h-5" /> Pro / Syndic
              </button>
              <button
                onClick={() => setType("particulier")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${type === "particulier" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              >
                <User className="w-5 h-5" /> Particulier
              </button>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-12 text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{"Demande bien recue !"}</h2>
                <p className="text-slate-600">{"Notre bureau d'etudes vous recontacte sous 24/48h pour valider la faisabilite de votre projet."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
                <div className="grid md:grid-cols-2 gap-6">

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nom / Entreprise *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-orange-500 transition-colors"
                      placeholder="Ex: Jean Dupont"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-orange-500 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Telephone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-orange-500 transition-colors"
                      placeholder="06 xx xx xx xx"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Localisation du site *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-orange-500 transition-colors"
                      placeholder="Ville ou Code Postal"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Mon besoin principal</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none bg-white focus:border-brand-orange-500 transition-colors"
                    >
                      <option>Nettoyage Solaire</option>
                      <option>{"Toitures & Facades"}</option>
                      <option>Thermographie</option>
                      <option>{"Audiovisuel & FPV"}</option>
                      <option>Urgence Nuisibles (Frelons)</option>
                      <option>Patrimoine / ABF</option>
                      <option>Industrie / Logistique</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700">{"Taille estimee du projet & Details"}</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-orange-500 transition-colors resize-none"
                      placeholder={"Decrivez votre besoin (surface estimee, contraintes d'acces...)"}
                    ></textarea>
                  </div>

                  <div className="md:col-span-2 p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl text-center">
                    <Camera className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-500">{"Ajouter des photos du site (Plans, facades) pour faciliter l'etude"}</p>
                    <input type="file" className="mt-4 text-xs" multiple />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-8 py-4 bg-brand-orange-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-brand-orange-600 transition-colors shadow-lg disabled:opacity-60"
                >
                  <Send className="w-5 h-5" /> {loading ? "Envoi en cours..." : "Envoyer ma demande"}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">

            <div className="bg-brand-orange-50 rounded-3xl shadow-sm border border-brand-orange-100 p-8">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">{"L'avis de l'expert Ellipsys :"}</h3>
              <p className="italic text-sm text-slate-700 leading-relaxed">
                {"Une intervention technique reussie commence toujours par une etude de faisabilite rigoureuse. N'hesitez pas a nous joindre des photos de votre site et a detailler vos contraintes d'acces. Plus notre bureau d'etudes aura d'informations en amont, plus notre pre-chiffrage sera precis et notre deploiement rapide."}
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Coordonnees</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-orange-500 shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Ellipsys Solutions</strong>
                    <span className="text-slate-600 text-sm">159 Rue de Thor<br />34000 Montpellier</span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-brand-orange-500 shrink-0" />
                  <a href="tel:0467209709" className="text-slate-700 font-bold hover:text-brand-orange-500 transition-colors">04 67 20 97 09</a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-brand-orange-500 shrink-0" />
                  <a href="mailto:contact@ellipsys-group.com" className="text-slate-600 hover:text-brand-orange-500 transition-colors break-all text-sm">contact@ellipsys-group.com</a>
                </li>
              </ul>
            </div>

            <div className="bg-[#0e2f52] rounded-3xl shadow-sm p-8 text-white">
              <h3 className="text-xl font-bold mb-4 text-brand-orange-500">{"Zones d'intervention"}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Nos equipes techniques et unites mobiles interviennent rapidement sur toute la France et ponctuellement en Europe.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#0e2f52]">
                {["Montpellier", "Nimes", "Marseille", "Paris", "Lyon", "Toulouse", "Bordeaux"].map((v) => (
                  <span key={v} className="bg-white px-3 py-1 rounded-full">{v}</span>
                ))}
                <span className="bg-brand-orange-500 text-white px-3 py-1 rounded-full">Europe sur etude</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
