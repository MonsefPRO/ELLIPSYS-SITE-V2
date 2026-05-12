// Crée les 7 insights via le nouveau format query (HogQL / InsightVizNode)
// Et les attache aux dashboards déjà créés.

const PHX = process.env.PHX_KEY;
const PROJECT_ID = process.env.PROJECT_ID ?? "419510";
const DASH_ACQ = parseInt(process.env.DASH_ACQ ?? "1574506");
const DASH_FUNNEL = parseInt(process.env.DASH_FUNNEL ?? "1574507");
const BASE = `https://us.posthog.com/api/projects/${PROJECT_ID}`;
const H = { "Authorization": `Bearer ${PHX}`, "Content-Type": "application/json" };

async function api(method, path, body) {
  const r = await fetch(`${BASE}${path}`, { method, headers: H, body: body ? JSON.stringify(body) : undefined });
  const txt = await r.text();
  let data; try { data = JSON.parse(txt); } catch { data = txt; }
  if (!r.ok) throw new Error(`${method} ${path} -> ${r.status}: ${typeof data === "string" ? data : JSON.stringify(data)}`);
  return data;
}

function trendsQuery({ events, breakdown, display = "ActionsLineGraph", dateFrom = "-30d", interval = "day" }) {
  const q = {
    kind: "InsightVizNode",
    source: {
      kind: "TrendsQuery",
      dateRange: { date_from: dateFrom },
      interval,
      series: events.map((e) => ({ kind: "EventsNode", event: e.event, math: e.math ?? "total", name: e.name ?? e.event })),
      trendsFilter: { display },
    },
  };
  if (breakdown) {
    q.source.breakdownFilter = { breakdown_type: "event", breakdown };
  }
  return q;
}

function funnelQuery({ steps, dateFrom = "-30d" }) {
  return {
    kind: "InsightVizNode",
    source: {
      kind: "FunnelsQuery",
      dateRange: { date_from: dateFrom },
      series: steps.map((s) => ({ kind: "EventsNode", event: s.event, name: s.name })),
      funnelsFilter: {
        funnelWindowInterval: 30,
        funnelWindowIntervalUnit: "minute",
        funnelVizType: "steps",
      },
    },
  };
}

async function createInsight(name, query, description = "", dashboards = []) {
  const payload = { name, description, query, saved: true, dashboards };
  const r = await api("POST", "/insights/", payload);
  console.log(`  ✓ "${name}" id=${r.id}${dashboards.length ? ` → dashboards ${dashboards.join(",")}` : ""}`);
  return r;
}

console.log("\n🎯 Creating insights (new query format)...\n");

await createInsight("Pageviews quotidiens (30j)",
  trendsQuery({ events: [{ event: "$pageview" }] }),
  "Volume total de pages vues par jour",
  [DASH_ACQ]
);

await createInsight("Devis soumis par jour (30j)",
  trendsQuery({ events: [{ event: "devis_submitted_server" }] }),
  "Demandes de devis validées côté serveur",
  [DASH_ACQ]
);

await createInsight("Inscriptions newsletter par jour (30j)",
  trendsQuery({ events: [{ event: "newsletter_signup_server" }] }),
  "Nouveaux abonnés newsletter par jour",
  [DASH_ACQ]
);

await createInsight("Top services demandés (30j)",
  trendsQuery({
    events: [{ event: "devis_submitted_server" }],
    breakdown: "service_label",
    display: "ActionsBarValue",
  }),
  "Quels services génèrent le plus de devis",
  [DASH_ACQ]
);

await createInsight("Top villes (30j)",
  trendsQuery({
    events: [{ event: "devis_submitted_server" }],
    breakdown: "city",
    display: "ActionsBarValue",
  }),
  "Répartition géographique des leads",
  [DASH_ACQ]
);

await createInsight("Répartition Pro vs Particulier (30j)",
  trendsQuery({
    events: [{ event: "devis_submitted_server" }],
    breakdown: "client_type",
    display: "ActionsPie",
  }),
  "Équilibre du pipeline Pro vs Particulier",
  [DASH_ACQ]
);

await createInsight("Funnel Acquisition Devis",
  funnelQuery({
    steps: [
      { event: "$pageview", name: "Visite site" },
      { event: "devis_page_viewed", name: "Page Devis" },
      { event: "devis_service_selected", name: "Service sélectionné" },
      { event: "devis_submitted_server", name: "Devis envoyé" },
    ],
  }),
  "Conversion entonnoir sur les 30 derniers jours, fenêtre 30 min",
  [DASH_FUNNEL]
);

console.log("\n══════════════════════════════════════════════");
console.log("✅ Insights créés et attachés aux dashboards !");
console.log("══════════════════════════════════════════════");
console.log(`https://us.posthog.com/project/${PROJECT_ID}/dashboard/${DASH_ACQ}`);
console.log(`https://us.posthog.com/project/${PROJECT_ID}/dashboard/${DASH_FUNNEL}`);
