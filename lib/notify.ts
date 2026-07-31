/**
 * Destinataires des notifications internes (devis, inscriptions newsletter…).
 *
 * Source unique de vérité : toutes les routes API doivent utiliser cette
 * fonction plutôt que de redéfinir leur propre liste, sinon on se retrouve
 * avec des destinataires différents selon le formulaire.
 *
 * ⚠️ La variable d'environnement TEAM_NOTIFY_EMAILS (définie côté Netlify),
 * si elle existe, REMPLACE entièrement la liste par défaut. Pour ajouter ou
 * retirer quelqu'un en production, c'est elle qu'il faut modifier.
 * Format attendu : adresses séparées par des virgules.
 */
const DEFAULT_NOTIFY_EMAILS = [
  "monsef.elaidi@ellipsys-group.com",
  "nathalie.gombart@ellipsys-group.com",
];

export function getTeamNotifyEmails(): string[] {
  const raw = process.env.TEAM_NOTIFY_EMAILS;
  const list = raw ? raw.split(",") : DEFAULT_NOTIFY_EMAILS;
  return list.map((e) => e.trim()).filter(Boolean);
}

/** Adresse d'expédition des notifications (domaine vérifié chez Resend). */
export function getNotifyFromEmail(): string {
  return process.env.RESEND_FROM_EMAIL ?? "noreply@ellipsys-solutions.com";
}
