// Helper PostHog côté serveur — utilisé depuis les routes /api/*
// Permet de capturer des événements de manière fiable (pas dépendant du JS browser)

import { PostHog } from "posthog-node";

let clientInstance: PostHog | null = null;

function getClient(): PostHog | null {
  const key = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ?? process.env.POSTHOG_PROJECT_TOKEN;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

  if (!key) return null;

  if (!clientInstance) {
    clientInstance = new PostHog(key, {
      host,
      flushAt: 1,        // envoi immédiat (pas de batch côté serveur)
      flushInterval: 0,
    });
  }
  return clientInstance;
}

export interface ServerCaptureInput {
  distinctId: string;    // email du lead, ou anonymous_id si pas dispo
  event: string;         // ex: "devis_submitted", "newsletter_signup"
  properties?: Record<string, string | number | boolean | null | undefined>;
}

/**
 * Capture un événement côté serveur. Ne throw jamais (best effort).
 * Appel typique depuis une route API après succès d'une action.
 */
export async function captureServer(input: ServerCaptureInput): Promise<void> {
  const ph = getClient();
  if (!ph) return; // PostHog non configuré → on skip silencieusement

  try {
    ph.capture({
      distinctId: input.distinctId,
      event: input.event,
      properties: {
        $lib: "posthog-node",
        source: "ellipsys-api",
        ...input.properties,
      },
    });
    // Flush immédiat pour que l'event parte avant la fin de la lambda Netlify
    await ph.flush();
  } catch (err) {
    console.warn(`[posthog-server] capture failed for ${input.event}:`, err);
  }
}

/**
 * Identifie un utilisateur (associe des properties à un distinctId).
 * Typiquement appelé en parallèle d'un capture pour enrichir le profil.
 */
export async function identifyServer(
  distinctId: string,
  properties: Record<string, string | number | boolean | null | undefined>
): Promise<void> {
  const ph = getClient();
  if (!ph) return;

  try {
    ph.identify({ distinctId, properties });
    await ph.flush();
  } catch (err) {
    console.warn(`[posthog-server] identify failed for ${distinctId}:`, err);
  }
}

/**
 * Shutdown gracieux — à appeler si tu fais un long-running process.
 * Pas nécessaire dans une Netlify Function (lambda éphémère).
 */
export async function shutdownPostHog(): Promise<void> {
  if (clientInstance) {
    await clientInstance.shutdown();
    clientInstance = null;
  }
}
