import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { upsertContact, createDeal } from "@/lib/hubspot";
import { captureServer, identifyServer } from "@/lib/posthog-server";
import { uploadDevisAttachments } from "@/lib/supabase-storage";

export const runtime = "nodejs";
// Augmente la taille max du body pour les uploads (par défaut Netlify Fn = 6MB)
export const maxDuration = 30;

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
function sanitize(s: FormDataEntryValue | null | undefined, max = 500): string {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

// ── Construction de la description riche pour HubSpot + email ────────────
interface DevisData {
  clientType: string;
  service: string;
  serviceLabel: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  siret: string;
  message: string;
  details: Record<string, string>;
  attachments: { filename: string; url: string }[];
}

function buildDescription(d: DevisData): string {
  const lines: string[] = [];
  lines.push(`Type client : ${d.clientType === "pro" ? "Professionnel" : "Particulier"}`);
  lines.push(`Service : ${d.serviceLabel}`);
  lines.push("");
  lines.push("── COORDONNÉES ──");
  lines.push(`Nom / Raison sociale : ${d.name}`);
  lines.push(`Email : ${d.email}`);
  if (d.phone) lines.push(`Téléphone : ${d.phone}`);
  lines.push(`Ville / CP : ${d.city}`);
  if (d.siret) lines.push(`SIRET : ${d.siret}`);
  lines.push("");
  lines.push("── DÉTAILS DU PROJET ──");
  if (Object.keys(d.details).length === 0) {
    lines.push("(aucun détail spécifique renseigné)");
  } else {
    for (const [k, v] of Object.entries(d.details)) {
      lines.push(`• ${k} : ${v}`);
    }
  }
  if (d.message) {
    lines.push("");
    lines.push("── MESSAGE DU CLIENT ──");
    lines.push(d.message);
  }
  if (d.attachments.length > 0) {
    lines.push("");
    lines.push(`── PIÈCES JOINTES (${d.attachments.length}) ──`);
    for (const a of d.attachments) {
      lines.push(`• ${a.filename}\n  ${a.url}`);
    }
  }
  return lines.join("\n");
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

    // ── Parsing du body : multipart si fichiers, JSON sinon ────────────
    const contentType = req.headers.get("content-type") ?? "";
    let body: Record<string, string> = {};
    let detailsObj: Record<string, string> = {};
    let files: File[] = [];

    if (contentType.includes("multipart/form-data")) {
      const fd = await req.formData();
      // Champs scalaires
      for (const [key, val] of fd.entries()) {
        if (typeof val === "string") {
          if (key === "details") {
            try { detailsObj = JSON.parse(val); } catch { /* ignore */ }
          } else {
            body[key] = val;
          }
        } else if (val instanceof File && val.size > 0 && val.size <= 10 * 1024 * 1024) {
          // Max 10MB par fichier
          files.push(val);
        }
      }
    } else {
      // JSON classique (rétrocompat)
      try {
        const json = await req.json();
        body = json;
        if (json.details && typeof json.details === "object") detailsObj = json.details;
      } catch {
        return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
      }
    }

    // Max 5 fichiers
    files = files.slice(0, 5);

    const name = sanitize(body.name, 120);
    const email = sanitize(body.email, 254).toLowerCase();
    const phone = sanitize(body.phone, 30);
    const city = sanitize(body.city, 120);
    const siret = sanitize(body.siret, 20);
    const message = sanitize(body.message, 2000);
    const clientType = sanitize(body.clientType, 20) || "particulier";
    const service = sanitize(body.service, 30) || "autre";
    const serviceLabel = sanitize(body.serviceLabel, 120) || service;
    const pageUri = sanitize(body.pageUri, 300);

    // Validation
    if (!name) return NextResponse.json({ error: "Nom requis." }, { status: 422 });
    if (!isValidEmail(email)) return NextResponse.json({ error: "Email invalide." }, { status: 422 });
    if (!city) return NextResponse.json({ error: "Ville requise." }, { status: 422 });

    // Référence unique pour le devis (utilisée pour le nommage Supabase Storage)
    const devisRef = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    // ── 0) Upload des pièces jointes vers Supabase Storage (best effort) ──
    let attachments: { filename: string; url: string; size: number; mime: string }[] = [];
    if (files.length > 0) {
      attachments = await uploadDevisAttachments(files, devisRef);
    }

    const devisData: DevisData = {
      clientType, service, serviceLabel, name, email, phone, city, siret, message,
      details: detailsObj,
      attachments: attachments.map(({ filename, url }) => ({ filename, url })),
    };
    const fullDescription = buildDescription(devisData);

    // ── 1) HubSpot (Contact + Deal avec description complète) ──────────
    const hsToken = process.env.HUBSPOT_ACCESS_TOKEN;
    let hubspotContactId: string | null = null;
    let hubspotDealId: string | null = null;
    let hubspotError: string | undefined;

    if (hsToken) {
      const nameParts = name.split(/\s+/);
      const firstname = clientType === "pro" ? name : (nameParts[0] ?? name);
      const lastname = clientType === "pro" ? "" : nameParts.slice(1).join(" ");
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

      const dealName = `Devis ${serviceLabel} — ${city} — ${name}`.slice(0, 200);
      const dealRes = await createDeal(
        {
          name: dealName,
          contactId: hubspotContactId ?? undefined,
          ownerId: defaultOwnerId,
          description: fullDescription,
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
            attachments_json: JSON.stringify(attachments),
            hubspot_contact_id: hubspotContactId,
            hubspot_deal_id: hubspotDealId,
            page_uri: pageUri,
            devis_ref: devisRef,
            ip,
            created_at: new Date().toISOString(),
          },
        ]);
      } catch (err) {
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

        const detailsHtml = Object.entries(detailsObj)
          .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#64748b;width:40%">${escapeHtml(k)}</td><td style="padding:6px 12px"><strong>${escapeHtml(v)}</strong></td></tr>`)
          .join("");

        const attachmentsHtml = attachments.length === 0 ? "" : `
          <h3 style="margin:24px 0 8px;color:#0e2f52">📎 Pièces jointes (${attachments.length})</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px">
            ${attachments.map(a => {
              const isImg = a.mime.startsWith("image/");
              return isImg
                ? `<a href="${escapeHtml(a.url)}" style="display:block"><img src="${escapeHtml(a.url)}" alt="${escapeHtml(a.filename)}" style="width:100%;height:120px;object-fit:cover;border-radius:8px;border:1px solid #e2e8f0" /></a>`
                : `<a href="${escapeHtml(a.url)}" style="display:block;padding:12px;border:1px solid #e2e8f0;border-radius:8px;background:#f8fafc;text-decoration:none;color:#0e2f52;font-size:13px;text-align:center">📄 ${escapeHtml(a.filename)}</a>`;
            }).join("")}
          </div>
        `;

        const html = `
          <div style="font-family:system-ui,sans-serif;max-width:680px;margin:auto;color:#0f172a">
            <h2 style="color:#ea580c;margin:0 0 8px">Nouvelle demande de devis</h2>
            <p style="color:#64748b;margin:0 0 24px;font-size:13px">Reçue le ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })} · Réf. ${devisRef}</p>

            <table style="width:100%;border-collapse:collapse;margin-bottom:16px;background:#f8fafc;border-radius:8px;overflow:hidden">
              <tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;width:40%">Type client</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0"><strong>${clientType === "pro" ? "Professionnel" : "Particulier"}</strong></td></tr>
              <tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#64748b">Service</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0"><strong>${escapeHtml(serviceLabel)}</strong></td></tr>
              <tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#64748b">Nom</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${escapeHtml(name)}</td></tr>
              <tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#64748b">Email</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#64748b">Téléphone</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${phone ? `<a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a>` : "<em style='color:#94a3b8'>non renseigné</em>"}</td></tr>
              <tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#64748b">Ville</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${escapeHtml(city)}</td></tr>
              ${siret ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#64748b">SIRET</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${escapeHtml(siret)}</td></tr>` : ""}
            </table>

            ${detailsHtml ? `
              <h3 style="margin:24px 0 8px;color:#0e2f52">📋 Détails techniques du projet</h3>
              <table style="width:100%;border-collapse:collapse;background:white;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden">
                ${detailsHtml}
              </table>
            ` : ""}

            ${message ? `
              <h3 style="margin:24px 0 8px;color:#0e2f52">💬 Message du client</h3>
              <div style="background:#fffbeb;border-left:4px solid #ea580c;padding:12px 16px;border-radius:0 8px 8px 0;font-size:14px;white-space:pre-wrap">${escapeHtml(message)}</div>
            ` : ""}

            ${attachmentsHtml}

            ${hubspotDealId ? `<p style="margin-top:32px"><a href="https://app-eu1.hubspot.com/contacts/147434121/deal/${hubspotDealId}" style="background:#ea580c;color:white;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block">Ouvrir le Deal dans HubSpot →</a></p>` : ""}
            ${hubspotError ? `<p style="color:#dc2626;font-size:12px;margin-top:24px;padding:8px;background:#fef2f2;border-radius:4px">⚠️ HubSpot : ${escapeHtml(hubspotError)}</p>` : ""}

            <p style="margin-top:32px;padding-top:16px;border-top:1px solid #e2e8f0;color:#94a3b8;font-size:12px">
              Cet email a été généré automatiquement depuis ellipsys-solutions.com/devis<br>
              Pour répondre directement au client, utilisez le bouton « Répondre » (reply-to configuré).
            </p>
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

    // ── 4) PostHog server-side capture ─────────────────────────────────
    await identifyServer(email, {
      email, name, phone: phone || undefined, city,
      client_type: clientType, siret: siret || undefined,
      lifecycle_stage: "lead",
    });
    await captureServer({
      distinctId: email,
      event: "devis_submitted_server",
      properties: {
        service, service_label: serviceLabel, client_type: clientType, city,
        has_phone: !!phone, has_siret: !!siret,
        has_attachments: attachments.length > 0,
        attachments_count: attachments.length,
        hubspot_contact_id: hubspotContactId ?? undefined,
        hubspot_deal_id: hubspotDealId ?? undefined,
        page_uri: pageUri,
      },
    });

    return NextResponse.json({
      ok: true,
      hubspotContactId,
      hubspotDealId,
      attachmentsUploaded: attachments.length,
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
