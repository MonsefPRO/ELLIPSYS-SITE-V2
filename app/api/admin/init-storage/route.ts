// Endpoint admin one-shot — crée le bucket "devis-attachments" depuis Netlify (qui a un DNS fonctionnel).
// À supprimer après init OK.
// Sécurité : requiert un header X-Admin-Init avec valeur égale à process.env.ADMIN_INIT_TOKEN (ou à défaut HUBSPOT_DEFAULT_OWNER_ID — toujours présent).

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const BUCKET = "devis-attachments";

export async function GET(req: NextRequest) {
  // Petite sécurité : il faut connaître le HUBSPOT_DEFAULT_OWNER_ID (présent dans tes env vars)
  const sentToken = req.headers.get("x-admin-init");
  const expected = process.env.ADMIN_INIT_TOKEN ?? process.env.HUBSPOT_DEFAULT_OWNER_ID;
  if (!expected || sentToken !== expected) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return NextResponse.json({ error: "Supabase env vars missing", url: !!url, key: !!key }, { status: 500 });
  }

  const supabase = createClient(url, key);

  // 1) Liste les buckets existants
  const list = await supabase.storage.listBuckets();
  const existingBuckets = list.data?.map(b => b.name) ?? [];

  // 2) Tente getBucket
  const getRes = await supabase.storage.getBucket(BUCKET);

  // 3) Si absent, tente création
  let createResult: { ok: boolean; error?: string | object } = { ok: false };
  if (!getRes.data) {
    const create = await supabase.storage.createBucket(BUCKET, {
      public: true,
      fileSizeLimit: 10 * 1024 * 1024,
      // Pas de restriction MIME pour éviter blocages
    });
    if (create.error) {
      createResult = { ok: false, error: { name: create.error.name, message: create.error.message } };
    } else {
      createResult = { ok: true };
    }
  } else {
    createResult = { ok: true }; // déjà existant
  }

  // 4) Vérifie le résultat final
  const finalGet = await supabase.storage.getBucket(BUCKET);

  // 5) Test d'upload d'un petit fichier
  let testUpload: { ok: boolean; error?: string; url?: string } = { ok: false };
  if (finalGet.data) {
    try {
      const testContent = Buffer.from("test-init-storage");
      const testPath = `_test/${Date.now()}.txt`;
      const up = await supabase.storage.from(BUCKET).upload(testPath, testContent, {
        contentType: "text/plain",
        upsert: true,
      });
      if (up.error) {
        testUpload = { ok: false, error: up.error.message };
      } else {
        const pub = supabase.storage.from(BUCKET).getPublicUrl(testPath);
        testUpload = { ok: true, url: pub.data.publicUrl };
        // Cleanup
        await supabase.storage.from(BUCKET).remove([testPath]);
      }
    } catch (err) {
      testUpload = { ok: false, error: err instanceof Error ? err.message : String(err) };
    }
  }

  return NextResponse.json({
    supabase_url: url,
    listBuckets: {
      ok: !list.error,
      count: existingBuckets.length,
      names: existingBuckets,
      error: list.error?.message,
    },
    getBucket: {
      existed: !!getRes.data,
      data: getRes.data,
      error: getRes.error?.message,
    },
    createBucket: createResult,
    finalGetBucket: {
      ok: !!finalGet.data,
      data: finalGet.data,
      error: finalGet.error?.message,
    },
    testUpload,
  });
}
