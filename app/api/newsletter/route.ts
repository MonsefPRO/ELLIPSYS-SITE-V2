import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { upsertContact } from "@/lib/hubspot";
import { getTeamNotifyEmails, getNotifyFromEmail } from "@/lib/notify";
import { captureServer, identifyServer } from "@/lib/posthog-server";

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

    // ── 3) Notification équipe (Resend) ────────────────────────────────
    // Une inscription newsletter est un contact entrant : l'équipe doit en être
    // informée, comme pour un devis. Sans ça, l'inscrit dormait dans Supabase
    // et HubSpot sans que personne ne le sache.
    const resendKey = process.env.RESEND_API_KEY;
    const teamEmails = getTeamNotifyEmails();
    if (resendKey && teamEmails.length) {
      try {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: `Ellipsys Solutions <${getNotifyFromEmail()}>`,
          to: teamEmails,
          subject: `📬 Nouvelle inscription newsletter — ${email}`,
          html: `
            <div style="font-family:system-ui,-apple-system,sans-serif;max-width:520px">
              <h2 style="color:#0e2f52;margin:0 0 16px">Nouvelle inscription newsletter</h2>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr>
                  <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#64748b">Email</td>
                  <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">
                    <a href="mailto:${email}">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#64748b">Langue</td>
                  <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${lang}</td>
                </tr>
                <tr>
                  <td style="padding:8px 12px;color:#64748b">Date</td>
                  <td style="padding:8px 12px">${new Date(nowIso).toLocaleString("fr-FR")}</td>
                </tr>
              </table>
              <p style="color:#94a3b8;font-size:12px;margin-top:20px">
                Inscription depuis le formulaire newsletter du site ellipsys-solutions.com
              </p>
            </div>
          `,
        });
      } catch (err) {
        // Ne jamais faire échouer l'inscription à cause de la notification
        console.warn("[newsletter] Resend notification failed:", err);
      }
    }

    // ── 4) PostHog server-side capture ─────────────────────────────────
    await identifyServer(email, {
      email,
      lang,
      newsletter_subscribed: true,
      newsletter_subscribed_at: nowIso,
    });
    await captureServer({
      distinctId: email,
      event: "newsletter_signup_server",
      properties: { lang, source: "site_newsletter_form" },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] Unexpected error:", err);
    return NextResponse.json({ error: "Erreur inattendue." }, { status: 500 });
  }
}

export async function GET()    { return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 }); }
export async function PUT()    { return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 }); }
export async function DELETE() { return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 }); }
