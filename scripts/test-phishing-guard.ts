/**
 * Tests du pare-feu anti-phishing (lib/phishing-guard.ts).
 * Lancer : npx tsx scripts/test-phishing-guard.ts
 */
import { evaluerPhishing, desamorcerLiens, prenomSur, emailStrict, controlerFichier } from "../lib/phishing-guard";

let echecs = 0;
function verifier(nom: string, ok: boolean, detail = "") {
  console.log(`${ok ? "OK  " : "ÉCHEC"} ${nom}${detail ? ` -> ${detail}` : ""}`);
  if (!ok) echecs++;
}

const cas: { nom: string; texte: string; champs?: Record<string, string>; attendu: "bloque" | "suspect" | "normal" }[] = [
  {
    nom: "Phishing réel du 10/11 (gopartage.online)",
    texte: "Le nettoyage restitue jusqu'à 30% de rendement sur un parc solaire. Un devis pour un parc au sol avec les délais d'intervention. Le détail est ici, lien du dossier : https://gopartage.online/d/8f3k2",
    attendu: "bloque",
  },
  { nom: "Lien sans https sur faux partage", texte: "Voir le dossier : wetransfer-docs.site/abc", attendu: "bloque" },
  { nom: "Raccourcisseur + appât", texte: "Cliquez ici pour le cahier des charges bit.ly/3xYz", attendu: "bloque" },
  { nom: "Lien dans le nom", texte: "Bonjour", champs: { name: "Facture https://evil.example/pay" }, attendu: "bloque" },
  { nom: "HTML dans le nom", texte: "Bonjour", champs: { name: '<a href="x">Voir</a>' }, attendu: "bloque" },
  { nom: "Adresse IP", texte: "Documents : http://45.61.158.115/f", attendu: "bloque" },
  { nom: "Vrai client, lien WeTransfer", texte: "Bonjour, 1,2 MWc au sol à Lunel, photos ici https://we.tl/t-AbC123 merci", attendu: "normal" },
  { nom: "Vrai client, Google Maps", texte: "Parc à Béziers https://maps.app.goo.gl/xyz123 , 4 ha", attendu: "normal" },
  { nom: "Vrai client, site de l'entreprise", texte: "Nous sommes www.solaire-dupont.fr, 300 panneaux en toiture", attendu: "normal" },
  { nom: "Vrai client sans lien, chiffres", texte: "Toiture de 3.5 m de haut, 24 panneaux, M. Dupont, Montpellier", attendu: "normal" },
  { nom: "Vrai client avec e-mail dans le message", texte: "Répondez à contact@monentreprise.fr svp, centrale de 5 MWc", attendu: "normal" },
];

for (const c of cas) {
  const v = evaluerPhishing({ champsCourts: c.champs ?? {}, texteLibre: c.texte });
  const obtenu = v.bloquer ? "bloque" : v.suspect ? "suspect" : "normal";
  verifier(c.nom, obtenu === c.attendu, `${obtenu} (score ${v.score} : ${v.raisons.join(", ") || "aucune"})`);
}

const d = desamorcerLiens("Dossier https://gopartage.online/d/8f3k2 et photos https://we.tl/t-AbC");
verifier("Désamorçage", d.includes("hxxps://gopartage[.]online/d/8f3k2") && d.includes("https://we.tl/t-AbC"), d);
verifier("Prénom avec lien remplacé", prenomSur("Jean www.evil.fr", "") === "");
verifier("Prénom normal conservé", prenomSur("Jean-Pierre") === "Jean-Pierre");
verifier("E-mail normal accepté", emailStrict("jean.dupont+devis@exemple-solaire.fr"));
verifier("E-mail avec HTML refusé", !emailStrict('<img/src=x>@a.co'));

const enc = (s: string) => new Uint8Array(Buffer.from(s, "latin1"));
verifier("Photo JPEG acceptée", controlerFichier(new Uint8Array([0xff, 0xd8, 0xff, 0xe0, 0, 0x10, 0x4a, 0x46, 0x49, 0x46, 0, 1])).accepte);
verifier("Page HTML déguisée refusée", !controlerFichier(enc("<html><body>login</body></html>")).accepte);
verifier("PDF avec JavaScript refusé", !controlerFichier(enc("%PDF-1.7\n1 0 obj << /OpenAction << /S /JavaScript /JS (app.alert(1)) >> >>")).accepte);
const pdfLien = controlerFichier(enc("%PDF-1.7\n1 0 obj << /A << /S /URI /URI (https://office365-login.online/x) >> >>"));
verifier("PDF avec lien piégé : risque élevé", pdfLien.accepte && pdfLien.risque >= 4, `risque ${pdfLien.risque}`);

console.log(echecs ? `\n${echecs} échec(s)` : "\nTous les tests passent.");
process.exit(echecs ? 1 : 0);
