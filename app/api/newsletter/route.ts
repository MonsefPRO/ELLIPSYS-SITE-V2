import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { upsertContact } from "@/lib/hubspot";

export const runtime = "nodejs";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;
}

const rateMap = new Map<string, { count: number; reset: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + 3600000 });
    return true;
  }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Trop de tentatives. Réessayez plus tard." }, { status: 429 });
    }

    let body: Record<string, unknown>;
    try { body = await req.json(); }
    catch { return NextResponse.json({ error: "Requête invalide." }, { status: 400 }); }

    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const lang  = typeof body.lang  === "string" ? body.lang.slice(0, 5)          : "fr";

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Adresse email invalide." }, { status: 422 });
    }

    const nowIso = new Date().toISOString();

    // ── 1) Backup Supabase ──────────────────────────────────────────────
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseKey);
        const { error } = await supabase.from("newsletter_subscriptions").insert([{
          email,
          lang,
          subscribed_at: nowIso,
        }]);
        // 23505 = doublon → on continue quand même (succès silencieux + on tente HubSpot)
        if (error && error.code !== "23505") {
          console.error("[newsletter] Supabase error:", error);
        }
      } catch (err) {
        console.warn("[newsletter] Supabase failed:", err);
      }
    }

    // ── 2) Push HubSpot (Contact avec date d'inscription) ──────────────
    const hsToken = process.env.HUBSPOT_ACCESS_TOKEN;
    if (hsToken) {
      try {
        // Date au format YYYY-MM-DD (HubSpot date property)
        const today = nowIso.slice(0, 10);
        // hs_lead_status existe par défaut, hs_email_optin trace l'opt-in
        // On utilise la propriété custom "newsletter_signup_date" si elle existe,
        // sinon HubSpot ignorera silencieusement la propriété inconnue (en pratique elle retourne une erreur,
        // d'où le try/catch). On utilise aussi `hs_lifecyclestage` = "subscriber".
        await upsertContact(
          {
            email,
            custom: {
              lifecyclestage: "subscriber",
              newsletter_signup_date: today,
              hs_language: lang,
            },
          },
          hsToken
        );
      } catch (err) {
        console.warn("[newsletter] HubSpot push failed:", err);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] Unexpected error:", err);
    return NextResponse.json({ error: "Erreur inattendue." }, { status: 500 });
  }
}

export async function GET()    { return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 }); }
export async function PUT()    { return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 }); }
export async function DELETE() { return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 }); }
