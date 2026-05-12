import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

/* ─── Helpers ─── */
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
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

/* ─── Email HTML template ─── */
function buildEmailHtml(firstName: string, pdfUrl: string, promoCode: string, lang: string, siteUrl: string): string {
  const isFr = lang !== "en";
  return `<!DOCTYPE html>
<html lang="${isFr ? "fr" : "en"}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${isFr ? "Votre guide + code promo" : "Your guide + promo code"} — Ellipsys Solutions</title>
</head>
<body style="margin:0;padding:0;background:#0a0f1a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1a;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f1f3d 0%,#1a3a5c 100%);border-radius:16px 16px 0 0;padding:40px 40px 32px;text-align:center;">
              <p style="margin:0 0 8px;color:#60a5fa;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Ellipsys Solutions</p>
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;line-height:1.3;">
                ${isFr
                  ? `Bonjour ${firstName} 👋<br/>Votre guide est prêt !`
                  : `Hello ${firstName} 👋<br/>Your guide is ready!`}
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#0d1829;padding:36px 40px;">

              <!-- Intro -->
              <p style="margin:0 0 24px;color:#94a3b8;font-size:15px;line-height:1.7;">
                ${isFr
                  ? `Merci pour votre intérêt ! Vous trouverez ci-dessous le bouton pour télécharger votre guide et votre code promo exclusif.`
                  : `Thank you for your interest! Below you'll find your guide download link and your exclusive promo code.`}
              </p>

              <!-- PDF Button -->
              <table cellpadding="0" cellspacing="0" style="margin:0 auto 32px;">
                <tr>
                  <td align="center" style="background:linear-gradient(135deg,#3b82f6,#06b6d4);border-radius:10px;">
                    <a href="${pdfUrl}" target="_blank"
                       style="display:inline-block;padding:16px 36px;color:#ffffff;font-size:16px;font-weight:700;text-decoration:none;letter-spacing:0.5px;">
                      📄 ${isFr ? "Télécharger mon guide" : "Download my guide"}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Promo code block -->
              <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:32px;">
                <tr>
                  <td style="background:#0f1f3d;border:1px solid #1e3a5f;border-radius:12px;padding:24px;text-align:center;">
                    <p style="margin:0 0 8px;color:#60a5fa;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:600;">
                      ${isFr ? "🎁 Votre code promo exclusif" : "🎁 Your exclusive promo code"}
                    </p>
                    <p style="margin:0 0 12px;color:#ffffff;font-size:32px;font-weight:900;letter-spacing:4px;font-family:monospace;">
                      ${promoCode}
                    </p>
                    <p style="margin:0;color:#64748b;font-size:13px;">
                      ${isFr
                        ? "Mentionnez ce code lors de votre demande de devis pour bénéficier de votre remise."
                        : "Mention this code when requesting a quote to get your discount."}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- CTA devis -->
              <table cellpadding="0" cellspacing="0" style="margin:0 auto 32px;">
                <tr>
                  <td align="center" style="background:#0f1f3d;border:1px solid #1e3a5f;border-radius:10px;">
                    <a href="${siteUrl}/devis"
                       style="display:inline-block;padding:14px 32px;color:#60a5fa;font-size:15px;font-weight:600;text-decoration:none;">
                      ${isFr ? "Demander un devis gratuit →" : "Request a free quote →"}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Separator -->
              <hr style="border:none;border-top:1px solid #1e2d40;margin:0 0 24px;" />

              <!-- Footer note -->
              <p style="margin:0;color:#475569;font-size:12px;line-height:1.6;text-align:center;">
                ${isFr
                  ? `Vous recevez cet email car vous avez téléchargé un guide sur notre site.<br/>
                     Vous pouvez vous désabonner à tout moment en répondant à cet email.`
                  : `You received this email because you downloaded a guide from our website.<br/>
                     You can unsubscribe anytime by replying to this email.`}
              </p>
            </td>
          </tr>

          <!-- Footer brand -->
          <tr>
            <td style="background:#060c18;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
              <p style="margin:0;color:#334155;font-size:12px;">
                © ${new Date().getFullYear()} Ellipsys Solutions — Drone &amp; Robotique
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/* ─── POST handler ─── */
export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Trop de tentatives. Réessayez plus tard." }, { status: 429 });
    }

    let body: Record<string, unknown>;
    try { body = await req.json(); }
    catch { return NextResponse.json({ error: "Requête invalide." }, { status: 400 }); }

    const email     = typeof body.email     === "string" ? body.email.trim().toLowerCase() : "";
    const firstName = typeof body.firstName === "string" ? body.firstName.trim().slice(0, 60) : "là";
    const lang      = typeof body.lang      === "string" ? body.lang.slice(0, 5) : "fr";
    const pdfSlug   = typeof body.pdfSlug   === "string" ? body.pdfSlug.replace(/[^a-z0-9-]/g, "") : "guide-ellipsys";

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Adresse email invalide." }, { status: 422 });
    }

    /* PDF public URL — fichiers dans /public/documents/ */
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ellipsys-solutions.com";
    const pdfUrl  = `${baseUrl}/documents/${pdfSlug}.pdf`;

    /* Code promo fixe (à personnaliser plus tard) */
    const promoCode = "ELLIPSYS15";

    /* ── Supabase : enregistrement lead ── */
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      await supabase.from("newsletter_subscriptions").upsert(
        [{ email, lang, source: "lead_magnet", subscribed_at: new Date().toISOString() }],
        { onConflict: "email" }
      );
    }

    /* ── Resend : envoi de l'email ── */
    const resendKey  = process.env.RESEND_API_KEY;
    const fromEmail  = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

    if (!resendKey) {
      console.error("[lead-magnet] RESEND_API_KEY manquant");
      return NextResponse.json({ error: "Service email indisponible." }, { status: 503 });
    }

    const resend = new Resend(resendKey);
    const isFr   = lang !== "en";

    const { error: mailError } = await resend.emails.send({
      from: `Ellipsys Solutions <${fromEmail}>`,
      to:   [email],
      subject: isFr
        ? `📄 Votre guide + code ${promoCode} — Ellipsys Solutions`
        : `📄 Your guide + code ${promoCode} — Ellipsys Solutions`,
      html: buildEmailHtml(firstName, pdfUrl, promoCode, lang, baseUrl),
    });

    if (mailError) {
      console.error("[lead-magnet] Resend error:", mailError);
      return NextResponse.json({ error: "Erreur d'envoi email." }, { status: 500 });
    }

    return NextResponse.json({ ok: true, promoCode });
  } catch (err) {
    console.error("[lead-magnet] Unexpected error:", err);
    return NextResponse.json({ error: "Erreur inattendue." }, { status: 500 });
  }
}

export async function GET()    { return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 }); }
export async function PUT()    { return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 }); }
export async function DELETE() { return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 }); }
