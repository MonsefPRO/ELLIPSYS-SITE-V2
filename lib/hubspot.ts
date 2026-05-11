// Helper HubSpot CRM — création/mise à jour de Contact + Deal
// Utilise un Private App Token (env: HUBSPOT_ACCESS_TOKEN)

const HS_BASE = "https://api.hubapi.com";

export interface HubspotContactInput {
  email: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  city?: string;
  company?: string;
  ownerId?: string;        // hubspot_owner_id — propriétaire du contact
  // Propriétés custom (créées en amont dans HubSpot si besoin)
  custom?: Record<string, string>;
}

export interface HubspotDealInput {
  name: string;
  amount?: string;
  pipeline?: string;       // ID du pipeline (default: "default")
  stage?: string;          // ID de l'étape (default: "appointmentscheduled" sur free CRM)
  contactId?: string;      // ID HubSpot du contact à associer
  ownerId?: string;        // hubspot_owner_id — propriétaire du deal
  custom?: Record<string, string>;
}

interface HsResponse<T = unknown> {
  ok: boolean;
  status: number;
  data?: T;
  error?: string;
}

async function hsFetch<T = unknown>(
  path: string,
  init: RequestInit,
  token: string
): Promise<HsResponse<T>> {
  try {
    const res = await fetch(`${HS_BASE}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...(init.headers ?? {}),
      },
    });
    const text = await res.text();
    let data: unknown;
    try { data = text ? JSON.parse(text) : undefined; } catch { data = text; }
    if (!res.ok) {
      return { ok: false, status: res.status, error: typeof data === "string" ? data : JSON.stringify(data) };
    }
    return { ok: true, status: res.status, data: data as T };
  } catch (err) {
    return { ok: false, status: 0, error: err instanceof Error ? err.message : "Unknown error" };
  }
}

/**
 * Crée ou met à jour un Contact (upsert par email).
 * Retourne l'ID HubSpot du contact, ou null si HubSpot indisponible.
 */
export async function upsertContact(
  input: HubspotContactInput,
  token: string
): Promise<{ id: string | null; error?: string }> {
  const properties: Record<string, string> = {
    email: input.email,
    ...(input.firstname && { firstname: input.firstname }),
    ...(input.lastname && { lastname: input.lastname }),
    ...(input.phone && { phone: input.phone }),
    ...(input.city && { city: input.city }),
    ...(input.company && { company: input.company }),
    ...(input.ownerId && { hubspot_owner_id: input.ownerId }),
    ...(input.custom ?? {}),
  };

  // Try create first
  const create = await hsFetch<{ id: string }>(
    "/crm/v3/objects/contacts",
    { method: "POST", body: JSON.stringify({ properties }) },
    token
  );
  if (create.ok && create.data?.id) return { id: create.data.id };

  // 409 = contact existe déjà → on cherche et met à jour
  if (create.status === 409) {
    const search = await hsFetch<{ results: { id: string }[] }>(
      "/crm/v3/objects/contacts/search",
      {
        method: "POST",
        body: JSON.stringify({
          filterGroups: [{ filters: [{ propertyName: "email", operator: "EQ", value: input.email }] }],
          properties: ["email"],
          limit: 1,
        }),
      },
      token
    );
    const id = search.data?.results?.[0]?.id;
    if (!id) return { id: null, error: `Conflict but no contact found: ${create.error ?? ""}` };

    const update = await hsFetch(
      `/crm/v3/objects/contacts/${id}`,
      { method: "PATCH", body: JSON.stringify({ properties }) },
      token
    );
    if (!update.ok) return { id, error: `Update failed: ${update.error}` };
    return { id };
  }

  return { id: null, error: create.error };
}

/**
 * Crée un Deal et l'associe à un contact si contactId fourni.
 */
export async function createDeal(
  input: HubspotDealInput,
  token: string
): Promise<{ id: string | null; error?: string }> {
  const properties: Record<string, string> = {
    dealname: input.name,
    pipeline: input.pipeline ?? "default",
    dealstage: input.stage ?? "appointmentscheduled",
    ...(input.amount && { amount: input.amount }),
    ...(input.ownerId && { hubspot_owner_id: input.ownerId }),
    ...(input.custom ?? {}),
  };

  interface DealPayload {
    properties: Record<string, string>;
    associations?: Array<{
      to: { id: string };
      types: Array<{ associationCategory: string; associationTypeId: number }>;
    }>;
  }

  const body: DealPayload = { properties };
  if (input.contactId) {
    body.associations = [
      {
        to: { id: input.contactId },
        // 3 = deal_to_contact (HubSpot defined)
        types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 3 }],
      },
    ];
  }

  const res = await hsFetch<{ id: string }>(
    "/crm/v3/objects/deals",
    { method: "POST", body: JSON.stringify(body) },
    token
  );
  if (res.ok && res.data?.id) return { id: res.data.id };
  return { id: null, error: res.error };
}
