import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: "Service indisponible." }, { status: 503 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("newsletter_subscriptions").insert([{
      email,
      lang,
      subscribed_at: new Date().toISOString(),
    }]);

    if (error) {
      // Doublon → succès silencieux (ne pas révéler si l'email existe)
      if (error.code === "23505") return NextResponse.json({ ok: true });
      console.error("[newsletter] Supabase error:", error);
      return NextResponse.json({ error: "Erreur d'enregistrement." }, { status: 500 });
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
