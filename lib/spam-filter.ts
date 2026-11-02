/**
 * Filtre anti-démarchage du formulaire de devis.
 *
 * Problème : des agences (SEO, marketing, création de site…) remplissent le
 * formulaire de devis pour « tester » qu'il marche, puis nous démarcher.
 * Exemple réel : hello@agenceinsight.fr, 02/11/2026, faux devis démoussage.
 *
 * Trois couches, de la plus sûre à la plus large :
 *  1. Liste noire explicite d'adresses et de domaines (BLOCKED_DOMAINS ci-dessous
 *     + variables Netlify BLOCKED_EMAILS / BLOCKED_EMAIL_DOMAINS, séparées par
 *     des virgules, pour bloquer un nouveau domaine sans redéployer le code).
 *  2. Domaine d'e-mail qui contient un mot typique d'agence (seo, marketing…).
 *  3. Message qui contient une phrase de vente typique (« référencement »,
 *     « première page de Google »…).
 *
 * Volontairement prudent : on ne bloque PAS sur des mots comme « agence » ou
 * « digital » seuls, car une agence immobilière ou une boîte du numérique peut
 * être un vrai client (toiture, façade, panneaux solaires).
 */

const BLOCKED_DOMAINS = [
  "agenceinsight.fr",
];

const BLOCKED_EMAILS: string[] = [];

/** Mots qui, présents dans le DOMAINE de l'e-mail, signent une agence de démarchage. */
const DOMAIN_KEYWORDS = [
  "seo",
  "marketing",
  "growth",
  "leadgen",
  "prospection",
  "referencement",
  "netlinking",
  "backlink",
  "agenceweb",
  "agence-web",
  "webagency",
  "webdesign",
  "siteweb",
  "site-web",
  "creationsite",
  "creation-site",
];

/** Phrases qui, présentes dans le MESSAGE, signent un démarchage commercial. */
const MESSAGE_PATTERNS: RegExp[] = [
  /\bseo\b/i,
  /r[ée]f[ée]rencement/i,
  /backlinks?/i,
  /netlinking/i,
  /premi[èe]re page (de )?google/i,
  /visibilit[ée] (en ligne|sur google|sur internet)/i,
  /(votre|ton) site (internet|web)/i,
  /refonte (de )?(votre )?site/i,
  /g[ée]n[ée]ration de (leads|prospects|clients)/i,
  /google ads/i,
  /campagnes? (publicitaires?|ads|facebook|meta)/i,
  /\b(test|tester|essai) (du |de votre |le )?formulaire/i,
  /nous accompagnons (les )?entreprises/i,
];

function envList(name: string): string[] {
  const raw = process.env[name];
  if (!raw) return [];
  return raw.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
}

export interface SpamCheckInput {
  email: string;
  name?: string;
  message?: string;
}

/** Renvoie la raison du blocage, ou null si la demande a l'air légitime. */
export function detectSolicitation({ email, message }: SpamCheckInput): string | null {
  const mail = (email || "").trim().toLowerCase();
  const domain = mail.includes("@") ? mail.split("@").pop()! : "";

  if (mail) {
    const blockedEmails = [...BLOCKED_EMAILS, ...envList("BLOCKED_EMAILS")];
    if (blockedEmails.includes(mail)) return `email_blocklist:${mail}`;
  }

  if (domain) {
    const blockedDomains = [...BLOCKED_DOMAINS, ...envList("BLOCKED_EMAIL_DOMAINS")];
    // Bloque le domaine et ses sous-domaines (ex. mail.agenceinsight.fr).
    const hit = blockedDomains.find((d) => domain === d || domain.endsWith(`.${d}`));
    if (hit) return `domain_blocklist:${hit}`;

    // On ne regarde que le nom du domaine, sans l'extension (.fr, .com…).
    const domainName = domain.split(".").slice(0, -1).join(".");
    const kw = DOMAIN_KEYWORDS.find((k) => domainName.includes(k));
    if (kw) return `domain_keyword:${kw}`;
  }

  if (message) {
    const pattern = MESSAGE_PATTERNS.find((re) => re.test(message));
    if (pattern) return `message_pattern:${pattern.source}`;
  }

  return null;
}
