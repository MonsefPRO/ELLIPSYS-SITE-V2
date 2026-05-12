import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { upsertContact, createDeal } from "@/lib/hubspot";
import { captureServer, identifyServer } from "@/lib/posthog-server";

export const runtime = "nodejs";

// ── Validation ────────────────────────────────────────────────────────────
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;
}

// ── Rate limiting basique (in-memory, par IP) ─────────────────────────────
const rateMap = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000;

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

// ── Helpers texte ─────────────────────────────────────────────────────────
function sanitize(s: unknown, max = 500): string {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

interface DevisBody {
  clientType?: string;
  service?: string;
  serviceLabel?: string;
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  siret?: string;
  message?: string;
  details?: Record<string, string>;
  fullDescription?: string;
  pageUri?: string;
}

// ── Route POST ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Trop de demandes. Merci de réessayer dans une heure." },
        { status: 429 }
      );
    }

    let body: DevisBody;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
    }

    const name = sanitize(body.name, 120);
    const email = sanitize(body.email, 254).toLowerCase();
    const phone = sanitize(body.phone, 30);
    const city = sanitize(body.city, 120);
    const siret = sanitize(body.siret, 20);
    const message = sanitize(body.message, 2000);
    const clientType = sanitize(body.clientType, 20) || "particulier";
    const service = sanitize(body.service, 30) || "autre";
    const serviceLabel = sanitize(body.serviceLabel, 120) || service;
    const fullDescription = sanitize(body.fullDescription, 3000) || message;
    const pageUri = sanitize(body.pageUri, 300);

    // Validation
    if (!name) return NextResponse.json({ error: "Nom requis." }, { status: 422 });
    if (!isValidEmail(email)) return NextResponse.json({ error: "Email invalide." }, { status: 422 });
    if (!city) return NextResponse.json({ error: "Ville requise." }, { status: 422 });

    // ── 1) HubSpot (Contact + Deal) ─────────────────────────────────────
    const hsToken = process.env.HUBSPOT_ACCESS_TOKEN;
    let hubspotContactId: string | null = null;
    let hubspotDealId: string | null = null;
    let hubspotError: string | undefined;

    if (hsToken) {
      // Split prénom/nom (heuristique simple)
      const nameParts = name.split(/\s+/);
      const firstname = clientType === "pro" ? name : (nameParts[0] ?? name);
      const lastname = clientType === "pro" ? "" : nameParts.slice(1).join(" ");

      // Owner ID — propriétaire HubSpot à qui assigner le lead (par défaut : Monsef)
      const defaultOwnerId = process.env.HUBSPOT_DEFAULT_OWNER_ID;

      const contactRes = await upsertContact(
        {
          email,
          firstname,
          lastname,
          phone: phone || undefined,
          city: city || undefined,
          company: clientType === "pro" ? name : undefined,
          ownerId: defaultOwnerId,
        },
        hsToken
      );
      hubspotContactId = contactRes.id;
      if (contactRes.error) hubspotError = `Contact: ${contactRes.error}`;

      // Deal name explicite pour affichage dans HubSpot
      const dealName = `Devis ${serviceLabel} — ${city} — ${name}`.slice(0, 200);
      const dealRes = await createDeal(
        {
          name: dealName,
          contactId: hubspotContactId ?? undefined,
          ownerId: defaultOwnerId,
          // pipeline et stage par défaut HubSpot free : "default" + "appointmentscheduled"
        },
        hsToken
      );
      hubspotDealId = dealRes.id;
      if (dealRes.error) hubspotError = `${hubspotError ?? ""} Deal: ${dealRes.error}`;
    } else {
      console.warn("[devis] HUBSPOT_ACCESS_TOKEN manquant — étape HubSpot ignorée");
    }

    // ── 2) Backup Supabase ──────────────────────────────────────────────
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseKey);
        await supabase.from("devis_requests").insert([
          {
            client_type: clientType,
            service,
            service_label: serviceLabel,
            name,
            email,
            phone,
            city,
            siret,
            message,
            full_description: fullDescription,
            hubspot_contact_id: hubspotContactId,
            hubspot_deal_id: hubspotDealId,
            page_uri: pageUri,
            ip,
            created_at: new Date().toISOString(),
          },
        ]);
      } catch (err) {
        // table absente / autres erreurs → on log mais on n'échoue pas
        console.warn("[devis] Supabase backup failed:", err);
      }
    }

    // ── 3) Notification email équipe (Resend) ──────────────────────────
    const resendKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "noreply@ellipsys-solutions.com";
    const teamEmails = (process.env.TEAM_NOTIFY_EMAILS ?? "monsef.elaidi@ellipsys-group.com")
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    if (resendKey && teamEmails.length) {
      try {
        const resend = new Resend(resendKey);
        const subject = `🚀 Nouveau devis — ${serviceLabel} — ${city}`;
        const html = `
          <div style="font-family:system-ui,sans-serif;max-width:640px;margin:auto;color:#0f172a">
            <h2 style="color:#ea580c;margin:0 0 12px">Nouvelle demande de devis</h2>
            <p style="color:#64748b;margin:0 0 24px">Reçue le ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}</p>

            <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
              <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;color:#64748b;width:35%">Type client</td><td style="padding:8px;border-bottom:1px solid #e2e8f0"><strong>${clientType === "pro" ? "Professionnel" : "Particulier"}</strong></td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;color:#64748b">Service</td><td style="padding:8px;border-bottom:1px solid #e2e8f0"><strong>${escapeHtml(serviceLabel)}</strong></td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;color:#64748b">Nom</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${escapeHtml(name)}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;color:#64748b">Email</td><td style="padding:8px;border-bottom:1px solid #e2e8f0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;color:#64748b">Téléphone</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${phone ? `<a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a>` : "<em>non renseigné</em>"}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;color:#64748b">Ville</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${escapeHtml(city)}</td></tr>
              ${siret ? `<tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;color:#64748b">SIRET</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${escapeHtml(siret)}</td></tr>` : ""}
            </table>

            <h3 style="margin:24px 0 8px;color:#0e2f52">Détails du projet</h3>
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px;white-space:pre-wrap;font-size:14px">${escapeHtml(fullDescription)}</div>

            ${hubspotDealId ? `<p style="margin-top:24px"><a href="https://app-eu1.hubspot.com/contacts/147434121/deal/${hubspotDealId}" style="background:#ea580c;color:white;padding:10px 16px;border-radius:8px;text-decoration:none;font-weight:bold">Ouvrir le Deal dans HubSpot →</a></p>` : ""}
            ${hubspotError ? `<p style="color:#dc2626;font-size:12px;margin-top:24px">⚠️ HubSpot : ${escapeHtml(hubspotError)}</p>` : ""}
          </div>
        `;

        await resend.emails.send({
          from: `Ellipsys Solutions <${fromEmail}>`,
          to: teamEmails,
          replyTo: email,
          subject,
          html,
        });
      } catch (err) {
        console.warn("[devis] Resend email failed:", err);
      }
    }

    // ── 4) PostHog server-side capture (fiable, indep du JS browser) ───
    await identifyServer(email, {
      email,
      name,
      phone: phone || undefined,
      city,
      client_type: clientType,
      siret: siret || undefined,
      lifecycle_stage: "lead",
    });
    await captureServer({
      distinctId: email,
      event: "devis_submitted_server",
      properties: {
        service,
        service_label: serviceLabel,
        client_type: clientType,
        city,
        has_phone: !!phone,
        has_siret: !!siret,
        hubspot_contact_id: hubspotContactId ?? undefined,
        hubspot_deal_id: hubspotDealId ?? undefined,
        page_uri: pageUri,
      },
    });

    return NextResponse.json({
      ok: true,
      hubspotContactId,
      hubspotDealId,
    });
  } catch (err) {
    console.error("[devis] Unexpected error:", err);
    return NextResponse.json({ error: "Erreur inattendue. Réessayez ou contactez-nous par téléphone." }, { status: 500 });
  }
}

// ── Util XSS sanitization (email HTML) ────────────────────────────────────
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ── Méthodes non autorisées ───────────────────────────────────────────────
export async function GET() { return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 }); }
export async function PUT() { return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 }); }
export async function DELETE() { return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 }); }
