// Helper upload Supabase Storage pour les pièces jointes des devis.
// Bucket: "devis-attachments" — auto-créé au premier upload (idempotent).

import { createClient, SupabaseClient } from "@supabase/supabase-js";

const BUCKET = "devis-attachments";

let cachedClient: SupabaseClient | null = null;
let bucketEnsured = false;

function getClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  if (!cachedClient) cachedClient = createClient(url, key);
  return cachedClient;
}

async function ensureBucket(client: SupabaseClient): Promise<void> {
  if (bucketEnsured) return;
  try {
    const { data, error } = await client.storage.getBucket(BUCKET);
    if (data && !error) {
      bucketEnsured = true;
      return;
    }
    // Bucket n'existe pas → on le crée (public pour URLs directes)
    const { error: createErr } = await client.storage.createBucket(BUCKET, {
      public: true,
      fileSizeLimit: 10 * 1024 * 1024, // 10MB par fichier
      allowedMimeTypes: [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/heic",
        "image/heif",
        "application/pdf",
      ],
    });
    if (createErr && !createErr.message.includes("already exists")) {
      console.warn("[storage] createBucket failed:", createErr.message);
      return;
    }
    bucketEnsured = true;
  } catch (err) {
    console.warn("[storage] ensureBucket error:", err);
  }
}

export interface UploadedAttachment {
  filename: string;
  url: string;
  size: number;
  mime: string;
}

/**
 * Upload une liste de fichiers vers Supabase Storage.
 * Retourne les URLs publiques. Best effort : skip silencieusement les fichiers en erreur.
 */
export async function uploadDevisAttachments(
  files: File[],
  devisRef: string
): Promise<UploadedAttachment[]> {
  const client = getClient();
  if (!client || files.length === 0) return [];

  await ensureBucket(client);

  const results: UploadedAttachment[] = [];
  for (const file of files) {
    try {
      // Nom unique : devisRef/timestamp_filename
      const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80);
      const path = `${devisRef}/${Date.now()}_${safe}`;
      const buf = Buffer.from(await file.arrayBuffer());
      const { error } = await client.storage
        .from(BUCKET)
        .upload(path, buf, {
          contentType: file.type || "application/octet-stream",
          upsert: false,
        });
      if (error) {
        console.warn("[storage] upload failed for", file.name, ":", error.message);
        continue;
      }
      const { data: pub } = client.storage.from(BUCKET).getPublicUrl(path);
      if (pub?.publicUrl) {
        results.push({
          filename: file.name,
          url: pub.publicUrl,
          size: file.size,
          mime: file.type || "application/octet-stream",
        });
      }
    } catch (err) {
      console.warn("[storage] unexpected error for", file.name, ":", err);
    }
  }
  return results;
}
