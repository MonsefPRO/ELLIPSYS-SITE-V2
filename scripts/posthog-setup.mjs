// Automation script — Création complète des dashboards / insights / cohortes PostHog
// Usage : PHX_KEY=phx_... node scripts/posthog-setup.mjs

const PHX = process.env.PHX_KEY;
const PROJECT_ID = process.env.PROJECT_ID ?? "419510";
const BASE = `https://us.posthog.com/api/projects/${PROJECT_ID}`;

if (!PHX) {
  console.error("PHX_KEY env var missing");
  process.exit(1);
}

const H = { "Authorization": `Bearer ${PHX}`, "Content-Type": "application/json" };

async function api(method, path, body) {
  const r = await fetch(`${BASE}${path}`, {
    method, headers: H, body: body ? JSON.stringify(body) : undefined,
  });
  const txt = await r.text();
  let data;
  try { data = JSON.parse(txt); } catch { data = txt; }
  if (!r.ok) throw new Error(`${method} ${path} -> ${r.status}: ${typeof data === "string" ? data : JSON.stringify(data)}`);
  return data;
}

// ─── 1) Cohortes ──────────────────────────────────────────────────────────
async function createCohort(name, groups) {
  // PostHog cohorts use "groups" with property filters
  const payload = { name, groups, is_static: false };
  const r = await api("POST", "/cohorts/", payload);
  console.log(`  ✓ Cohort "${name}" id=${r.id}`);
  return r;
}

// ─── 2) Insights (Trends + Funnel) ────────────────────────────────────────
async function createInsight(name, filters, description = "") {
  const payload = { name, description, filters, saved: true };
  const r = await api("POST", "/insights/", payload);
  console.log(`  ✓ Insight "${name}" id=${r.id}`);
  return r;
}

// ─── 3) Dashboards ────────────────────────────────────────────────────────
async function createDashboard(name, description = "", pinned = false) {
  const payload = { name, description, pinned };
  const r = await api("POST", "/dashboards/", payload);
  console.log(`✓ Dashboard "${name}" id=${r.id}`);
  return r;
}

async function attachInsightToDashboard(dashboardId, insightId) {
  // PostHog: dashboards have insight tiles. Latest API: PATCH insight to add to dashboard.
  await api("PATCH", `/insights/${insightId}/`, { dashboards: [dashboardId] });
}

// ─── EXECUTION ────────────────────────────────────────────────────────────
console.log("\n🚀 PostHog automation — Ellipsys Solutions V2\n");

// ===== A) Création des cohortes (5) =====
console.log("📊 Creating cohorts...");
const cohorts = [];
try {
  cohorts.push(await createCohort("Leads B2B", [{
    properties: [
      { key: "$some_event", type: "behavioral",
        event_type: "events", event_filters: [{ key: "client_type", value: "pro", operator: "exact", type: "event" }],
        explicit_datetime: null, time_value: 90, time_interval: "day",
        value: "performed_event", negation: false, event_key: "devis_submitted_server" }
    ]
  }]));
} catch (e) {
  // Fallback: cohort simplifié via static_filters
  console.warn(`  ! Cohort "Leads B2B" version complexe a échoué: ${e.message}`);
  console.warn(`  ! Tentative version simple...`);
  cohorts.push(await createCohort("Leads B2B", [{ properties: [{ key: "client_type", type: "person", value: "pro", operator: "exact" }] }]));
}

try { cohorts.push(await createCohort("Leads B2C", [{ properties: [{ key: "client_type", type: "person", value: "particulier", operator: "exact" }] }])); } catch (e) { console.warn(`  ! ${e.message}`); }
try { cohorts.push(await createCohort("Leads Photovoltaïque", [{ properties: [{ key: "service", type: "event", value: "solaire", operator: "exact" }] }])); } catch (e) { console.warn(`  ! ${e.message}`); }
try { cohorts.push(await createCohort("Abonnés newsletter", [{ properties: [{ key: "newsletter_subscribed", type: "person", value: ["true"], operator: "exact" }] }])); } catch (e) { console.warn(`  ! ${e.message}`); }
try { cohorts.push(await createCohort("Leads (toutes sources)", [{ properties: [{ key: "lifecycle_stage", type: "person", value: ["lead"], operator: "exact" }] }])); } catch (e) { console.warn(`  ! ${e.message}`); }

// ===== B) Création des dashboards =====
console.log("\n📈 Creating dashboards...");
const dashAcq = await createDashboard(
  "Performance Acquisition — Ellipsys",
  "Vue d'ensemble des leads / conversions / pageviews. Consulter quotidiennement.",
  true
);
const dashFunnel = await createDashboard(
  "Funnel Conversion — Devis",
  "Identifier où les visiteurs décrochent dans le parcours de demande de devis."
);

// ===== C) Création des insights =====
console.log("\n🎯 Creating insights...");

// 1. Pageviews quotidiens
const i1 = await createInsight("Pageviews quotidiens (30j)", {
  insight: "TRENDS", interval: "day", date_from: "-30d",
  events: [{ id: "$pageview", type: "events", math: "total" }],
  display: "ActionsLineGraph",
}, "Volume total de pages vues par jour");

// 2. Devis soumis par jour
const i2 = await createInsight("Devis soumis par jour (30j)", {
  insight: "TRENDS", interval: "day", date_from: "-30d",
  events: [{ id: "devis_submitted_server", type: "events", math: "total" }],
  display: "ActionsLineGraph",
}, "Nombre de demandes de devis acceptées côté serveur");

// 3. Newsletter inscriptions
const i3 = await createInsight("Inscriptions newsletter par jour (30j)", {
  insight: "TRENDS", interval: "day", date_from: "-30d",
  events: [{ id: "newsletter_signup_server", type: "events", math: "total" }],
  display: "ActionsLineGraph",
}, "Inscriptions newsletter / jour, breakdown par langue");

// 4. Top services demandés
const i4 = await createInsight("Top services demandés (30j)", {
  insight: "TRENDS", interval: "day", date_from: "-30d",
  events: [{ id: "devis_submitted_server", type: "events", math: "total" }],
  breakdown: "service_label", breakdown_type: "event",
  display: "ActionsBarValue",
}, "Quels services génèrent le plus de devis");

// 5. Top villes
const i5 = await createInsight("Top villes (30j)", {
  insight: "TRENDS", interval: "day", date_from: "-30d",
  events: [{ id: "devis_submitted_server", type: "events", math: "total" }],
  breakdown: "city", breakdown_type: "event",
  display: "ActionsBarValue",
}, "Répartition géographique des leads");

// 6. B2B vs B2C
const i6 = await createInsight("Répartition Pro vs Particulier (30j)", {
  insight: "TRENDS", interval: "day", date_from: "-30d",
  events: [{ id: "devis_submitted_server", type: "events", math: "total" }],
  breakdown: "client_type", breakdown_type: "event",
  display: "ActionsPie",
}, "Pro vs Particulier — équilibre du pipeline");

// 7. Funnel : visiteur → /devis → service sélectionné → devis envoyé
const i7 = await createInsight("Funnel Acquisition Devis", {
  insight: "FUNNELS",
  events: [
    { id: "$pageview", order: 0, type: "events", name: "Visite site" },
    { id: "devis_page_viewed", order: 1, type: "events", name: "Page Devis" },
    { id: "devis_service_selected", order: 2, type: "events", name: "Service sélectionné" },
    { id: "devis_submitted_server", order: 3, type: "events", name: "Devis envoyé" },
  ],
  funnel_window_interval: 30,
  funnel_window_interval_unit: "minute",
  date_from: "-30d",
  funnel_viz_type: "steps",
}, "Conversion entonnoir sur les 30 derniers jours");

// ===== D) Attache les insights aux dashboards =====
console.log("\n🔗 Linking insights to dashboards...");

for (const i of [i1, i2, i3, i4, i5, i6]) {
  await attachInsightToDashboard(dashAcq.id, i.id);
  console.log(`  ✓ "${i.name}" → Performance Acquisition`);
}
await attachInsightToDashboard(dashFunnel.id, i7.id);
console.log(`  ✓ "${i7.name}" → Funnel Conversion`);

// ===== E) Résumé =====
console.log("\n══════════════════════════════════════════════");
console.log("✅ Setup PostHog terminé !");
console.log("══════════════════════════════════════════════");
console.log(`Dashboards : https://us.posthog.com/project/${PROJECT_ID}/dashboard`);
console.log(`  • Performance Acquisition : https://us.posthog.com/project/${PROJECT_ID}/dashboard/${dashAcq.id}`);
console.log(`  • Funnel Conversion       : https://us.posthog.com/project/${PROJECT_ID}/dashboard/${dashFunnel.id}`);
console.log(`Cohortes  : https://us.posthog.com/project/${PROJECT_ID}/cohorts`);
console.log(`Insights  : https://us.posthog.com/project/${PROJECT_ID}/insights`);
console.log(`\n${cohorts.length} cohortes / 7 insights / 2 dashboards`);
