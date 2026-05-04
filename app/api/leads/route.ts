import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Validation email basique mais robuste
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;
}

// Rate limiting simple en mémoire (par IP)
const rateMap = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT   = 3;    // 3 soumissions max
const RATE_WINDOW  = 3600000; // par heure (ms)

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // IP pour rate limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Trop de soumissions. Réessayez dans une heure." },
        { status: 429 }
      );
    }

    // Parse body
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
    }

    const email  = typeof body.email  === "string" ? body.email.trim().toLowerCase()  : "";
    const source = typeof body.source === "string" ? body.source.slice(0, 50)         : "popup_lead";
    const page   = typeof body.page   === "string" ? body.page.slice(0, 200)          : "/";

    // Validation
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Adresse email invalide." }, { status: 422 });
    }

    // Supabase (server-side avec la clé de service si disponible, sinon anon)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("[leads] Variables Supabase manquantes");
      return NextResponse.json({ error: "Service temporairement indisponible." }, { status: 503 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("leads_email").insert([
      { email, source, page, created_at: new Date().toISOString() },
    ]);

    if (error) {
      // Doublon (email unique) → on retourne quand même un succès pour ne pas divulguer si l'email existe
      if (error.code === "23505") {
        return NextResponse.json({ ok: true });
      }
      console.error("[leads] Supabase error:", error);
      return NextResponse.json({ error: "Erreur d'enregistrement." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[leads] Unexpected error:", err);
    return NextResponse.json({ error: "Erreur inattendue." }, { status: 500 });
  }
}

// Refuser toutes les autres méthodes
export async function GET()    { return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 }); }
export async function PUT()    { return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 }); }
export async function DELETE() { return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 }); }
