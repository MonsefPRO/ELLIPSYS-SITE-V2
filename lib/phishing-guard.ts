/**
 * Pare-feu anti-phishing des formulaires du site.
 *
 * Menace : un robot remplit le formulaire de devis avec un faux projet et un
 * lien « dossier » vers un faux site de partage de fichiers. Notre propre
 * e-mail de notification (« Nouvelle demande de devis ») transporte alors le
 * lien jusqu'à l'équipe, avec la confiance de notre marque. La page piégée
 * demande ensuite de « se connecter avec Google / Microsoft » pour voler le
 * mot de passe de la messagerie.
 * Exemple réel : 10/11/2026, lien vers gopartage.online, message qui recopiait
 * notre accroche « restitue jusqu'à 30 % de rendement ».
 *
 * Seconde menace : utiliser nos formulaires pour faire envoyer, depuis NOTRE
 * domaine, un e-mail contenant un lien piégé à une victime (le nom saisi est
 * repris dans le mail de confirmation).
 *
 * Fonctionnement : chaque demande reçoit un score de risque.
 *   - score >= SEUIL_BLOCAGE  → bloquée en silence (faux succès, comme le honeypot) ;
 *   - score >= SEUIL_SUSPECT  → transmise mais marquée « suspecte », sans mail
 *                               de confirmation au demandeur ;
 *   - en dessous              → normale.
 * Dans tous les cas, les liens inconnus sont « désamorcés » (hxxps://site[.]fr)
 * dans les e-mails internes et dans HubSpot : on peut les lire, pas cliquer
 * dessus par réflexe.
 */

export const SEUIL_BLOCAGE = 5;
export const SEUIL_SUSPECT = 3;

/** Sites de confiance : liens normaux qu'un vrai client peut nous envoyer. */
const HOTES_SURS = [
  "ellipsys-solutions.com",
  "ellipsys-group.com",
  // Cartes et cadastre (localiser un parc ou une toiture)
  "google.com",
  "google.fr",
  "maps.app.goo.gl",
  "goo.gl",
  "geoportail.gouv.fr",
  "cadastre.gouv.fr",
  // Partage de fichiers officiels
  "wetransfer.com",
  "we.tl",
  "swisstransfer.com",
  "fromsmash.com",
  "transfernow.net",
  "grosfichiers.com",
  "dropbox.com",
  "onedrive.live.com",
  "1drv.ms",
  "sharepoint.com",
  "icloud.com",
];

/** Raccourcisseurs : cachent la vraie destination. */
const RACCOURCISSEURS = [
  "bit.ly", "tinyurl.com", "t.co", "cutt.ly", "rebrand.ly", "is.gd", "ow.ly",
  "s.id", "shorturl.at", "rb.gy", "t.ly", "tiny.cc", "lnkd.in", "buff.ly",
  "shorturl.com", "v.gd", "qr.ae", "bl.ink", "short.io",
];

/** Extensions très utilisées par les sites jetables de phishing. */
const TLD_A_RISQUE = [
  "online", "xyz", "top", "click", "live", "site", "shop", "icu", "buzz", "cfd",
  "sbs", "rest", "monster", "quest", "link", "zip", "mov", "work", "support",
  "help", "bond", "cyou", "lat", "vip", "pw", "tk", "ml", "ga", "cf", "gq",
  "ru", "su", "cn", "today", "world", "space", "website", "store", "digital",
];

/** Mots d'appât dans le nom d'un site inconnu (faux partage, fausse connexion…). */
const MOTS_APPAT_HOTE = [
  "partage", "share", "transfer", "transfert", "fichier", "file", "doc",
  "dossier", "download", "telecharg", "drive", "cloud", "sign", "invoice",
  "facture", "devis", "secure", "securise", "login", "verif", "account",
  "compte", "office", "outlook", "microsoft", "365", "onedrive", "sharepoint",
  "adobe", "wetransfer", "dropbox", "google", "gmail", "webmail", "portail",
];

/** Phrases d'appât typiques autour d'un lien. */
const PHRASES_APPAT: RegExp[] = [
  /(lien|acc[èe]s) (du|de|au|vers le) (dossier|document|fichier|cahier des charges)/i,
  /(consulter|voir|ouvrir|t[ée]l[ée]charger|acc[ée]der [àa]) (le|les|au|aux) (dossier|document|fichier|pi[èe]ces?)/i,
  /(document|dossier|fichier)s? (partag[ée]s?|s[ée]curis[ée]s?|confidentiel)/i,
  /cliquez (ici|sur le lien)/i,
  /identifiez[- ]vous|connectez[- ]vous|v[ée]rifiez votre (compte|identit[ée])/i,
];

/** Notre propre accroche recopiée par un robot qui a aspiré le site. */
const COPIE_DU_SITE: RegExp[] = [
  /(restitue|retrouve[rz]?|r[ée]cup[ée]re[rz]?) jusqu.{0,3}[àa] 30\s?%/i,
  /jusqu.{0,3}[àa] 30\s?% de (rendement|production)/i,
  /expert europ[ée]en\s*:?\s*nettoyage,? inspection,? maintenance/i,
];

const URL_RE =
  /\b(?:(?:https?|hxxps?|ftp|javascript|data|file):\/{0,2}[^\s<>"'`]+|www\.[^\s<>"'`]+|(?<![@\w.-])[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*\.[a-z]{2,24}(?:\/[^\s<>"'`]*)?)/gi;

/** Liste des liens trouvés dans un texte (avec ou sans https://). */
export function extraireLiens(texte: string): string[] {
  if (!texte) return [];
  const trouves = texte.match(URL_RE) ?? [];
  return trouves
    .map((u) => u.replace(/[).,;:!?»"']+$/, ""))
    .filter((u) => {
      // Un « domaine nu » sans chemin n'est retenu que s'il a une extension connue
      // de lien (évite « 3.5 », « M. Dupont », etc.).
      if (/^[a-z]+:/i.test(u) || /^www\./i.test(u) || u.includes("/")) return true;
      return /\.(com|fr|net|org|eu|io|co|me|app|dev|page|info|biz|be|ch|de|es|it|uk|[a-z]{2,24})$/i.test(u)
        && /[a-z]{2,}\.[a-z]{2,}/i.test(u);
    });
}

interface LienAnalyse {
  brut: string;
  hote: string;
  sur: boolean;
}

function hoteDe(lien: string): string {
  try {
    const avecSchema = /^[a-z]+:\/\//i.test(lien) ? lien.replace(/^hxxp/i, "http") : `http://${lien}`;
    return new URL(avecSchema).hostname.toLowerCase().replace(/^www\./, "");
  } catch {
    return lien.toLowerCase().replace(/^[a-z]+:\/*/, "").split(/[/?#:]/)[0].replace(/^www\./, "");
  }
}

function estDans(hote: string, liste: string[]): boolean {
  return liste.some((d) => hote === d || hote.endsWith(`.${d}`));
}

function analyserLien(lien: string): LienAnalyse {
  const hote = hoteDe(lien);
  return { brut: lien, hote, sur: estDans(hote, HOTES_SURS) };
}

export interface ChampsFormulaire {
  /** Champs courts où un lien n'a rien à faire : nom, ville, téléphone, SIRET… */
  champsCourts?: Record<string, string | undefined>;
  /** Texte libre : message et détails du projet. */
  texteLibre?: string;
}

export interface VerdictPhishing {
  score: number;
  raisons: string[];
  liens: string[];
  bloquer: boolean;
  suspect: boolean;
}

/** Évalue le risque de phishing d'une demande envoyée par un formulaire. */
export function evaluerPhishing({ champsCourts = {}, texteLibre = "" }: ChampsFormulaire): VerdictPhishing {
  let score = 0;
  const raisons: string[] = [];
  const ajouter = (points: number, raison: string) => {
    score += points;
    raisons.push(`${raison} (+${points})`);
  };

  // 1. Balises HTML ou lien dans un champ court : jamais légitime.
  for (const [nom, valeur] of Object.entries(champsCourts)) {
    if (!valeur) continue;
    if (/<\s*\/?\s*[a-z!][^>]*>/i.test(valeur)) ajouter(5, `html_dans_${nom}`);
    if (extraireLiens(valeur).length > 0) ajouter(5, `lien_dans_${nom}`);
  }
  if (/<\s*\/?\s*(a|script|iframe|img|form|svg|object|embed)\b/i.test(texteLibre)) ajouter(3, "html_dans_message");

  // 2. Liens du texte libre.
  const liens = extraireLiens(texteLibre);
  const analyses = liens.map(analyserLien);
  for (const a of analyses) {
    if (/^(javascript|data|file):/i.test(a.brut)) { ajouter(5, `schema_dangereux:${a.brut.split(":")[0]}`); continue; }
    if (a.sur) continue;
    ajouter(2, `lien_inconnu:${a.hote}`);
    if (/^\d{1,3}(\.\d{1,3}){3}$/.test(a.hote) || a.hote.includes(":")) ajouter(4, `adresse_ip:${a.hote}`);
    if (a.hote.includes("xn--")) ajouter(3, `punycode:${a.hote}`);
    if (/^[a-z]+:\/\/[^/]*@/i.test(a.brut)) ajouter(4, "identifiants_dans_lien");
    if (estDans(a.hote, RACCOURCISSEURS)) ajouter(3, `raccourcisseur:${a.hote}`);
    const tld = a.hote.split(".").pop() ?? "";
    if (TLD_A_RISQUE.includes(tld)) ajouter(3, `extension_a_risque:.${tld}`);
    const appat = MOTS_APPAT_HOTE.find((m) => a.hote.includes(m));
    if (appat) ajouter(3, `appat_dans_le_site:${appat}`);
  }

  const lienInconnu = analyses.some((a) => !a.sur);
  if (lienInconnu) {
    const phrase = PHRASES_APPAT.find((re) => re.test(texteLibre));
    if (phrase) ajouter(2, "phrase_d_appat");
  }

  // 3. Message qui recopie notre propre site (signature d'un robot).
  if (COPIE_DU_SITE.some((re) => re.test(texteLibre))) ajouter(lienInconnu ? 2 : 1, "copie_de_notre_accroche");

  return {
    score,
    raisons,
    liens,
    bloquer: score >= SEUIL_BLOCAGE,
    suspect: score >= SEUIL_SUSPECT,
  };
}

/**
 * Désamorce les liens inconnus d'un texte : https://site.fr/x → hxxps://site[.]fr/x.
 * Lisible, mais plus cliquable (ni dans Gmail, ni dans HubSpot). Les liens vers
 * des sites de confiance (WeTransfer, Google Maps…) sont laissés intacts.
 */
export function desamorcerLiens(texte: string): string {
  if (!texte) return texte;
  return texte.replace(URL_RE, (lien) => {
    const propre = lien.replace(/[).,;:!?»"']+$/, "");
    const reste = lien.slice(propre.length);
    if (!extraireLiens(propre).length) return lien;
    if (analyserLien(propre).sur) return lien;
    return (
      propre
        .replace(/^http/i, "hxxp")
        .replace(/^(hxxps?:\/\/|www\.)?([^/?#]+)/i, (_m, debut = "", hote: string) => `${debut}${hote.replace(/\./g, "[.]")}`) + reste
    );
  });
}

/** Adresse e-mail stricte : pas de guillemets, chevrons ni caractères exotiques. */
export function emailStrict(email: string): boolean {
  return email.length <= 254 && /^[a-z0-9._%+-]{1,64}@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*\.[a-z]{2,24}$/i.test(email);
}

/**
 * Prénom affichable dans un e-mail envoyé au demandeur : si le champ contient
 * un lien, du HTML ou des caractères suspects, on n'affiche rien (« Bonjour »)
 * pour que nos e-mails ne puissent pas servir à relayer un lien piégé.
 */
export function prenomSur(valeur: string, repli = ""): string {
  const v = (valeur || "").trim();
  if (!v) return repli;
  if (extraireLiens(v).length || /[<>{}\[\]\\/@:=;|`$]/.test(v) || v.length > 60) return repli;
  return v;
}

// ── Pièces jointes ──────────────────────────────────────────────────────────

export type TypeFichier = "jpeg" | "png" | "webp" | "heic" | "pdf";

/** Vrai type d'un fichier d'après ses premiers octets (on ne croit pas l'extension). */
export function typeReel(octets: Uint8Array): TypeFichier | null {
  const a = (i: number) => octets[i];
  if (octets.length < 12) return null;
  if (a(0) === 0xff && a(1) === 0xd8 && a(2) === 0xff) return "jpeg";
  if (a(0) === 0x89 && a(1) === 0x50 && a(2) === 0x4e && a(3) === 0x47) return "png";
  const ascii = (debut: number, fin: number) => String.fromCharCode(...octets.slice(debut, fin));
  if (ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP") return "webp";
  if (ascii(4, 8) === "ftyp" && /^(heic|heix|hevc|heim|heis|mif1|msf1|avif)$/.test(ascii(8, 12))) return "heic";
  if (ascii(0, 5) === "%PDF-") return "pdf";
  return null;
}

const MIME_PAR_TYPE: Record<TypeFichier, string> = {
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  heic: "image/heic",
  pdf: "application/pdf",
};

export interface ControleFichier {
  accepte: boolean;
  mime?: string;
  raison?: string;
  /** Points de risque à ajouter au score de la demande. */
  risque: number;
  liens: string[];
}

/**
 * Contrôle une pièce jointe : seuls les photos et les PDF sont acceptés, et un
 * PDF qui contient du code (JavaScript, lancement de programme, fichier caché)
 * est refusé. Les liens d'un PDF vers un site inconnu augmentent le risque.
 */
export function controlerFichier(octets: Uint8Array): ControleFichier {
  const type = typeReel(octets);
  if (!type) return { accepte: false, raison: "type_non_autorise", risque: 2, liens: [] };
  if (type !== "pdf") return { accepte: true, mime: MIME_PAR_TYPE[type], risque: 0, liens: [] };

  const texte = Buffer.from(octets).toString("latin1");
  if (/\/(JavaScript|JS|Launch|EmbeddedFile|RichMedia|XFA)\b/.test(texte)) {
    return { accepte: false, raison: "pdf_actif", risque: 5, liens: [] };
  }
  const liens = [...texte.matchAll(/\/URI\s*\(([^)]{4,500})\)/g)].map((m) => m[1]);
  const inconnus = liens.map(analyserLien).filter((l) => !l.sur);
  const risque = inconnus.length === 0 ? 0 : inconnus.some((l) => TLD_A_RISQUE.includes(l.hote.split(".").pop() ?? "") || MOTS_APPAT_HOTE.some((m) => l.hote.includes(m))) ? 4 : 1;
  return { accepte: true, mime: "application/pdf", risque, liens };
}
