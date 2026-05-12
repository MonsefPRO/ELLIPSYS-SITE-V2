// Crée uniquement le funnel (les 6 autres insights déjà OK)
const PHX = process.env.PHX_KEY;
const PROJECT_ID = process.env.PROJECT_ID ?? "419510";
const DASH_FUNNEL = parseInt(process.env.DASH_FUNNEL ?? "1574507");
const BASE = `https://us.posthog.com/api/projects/${PROJECT_ID}`;
const H = { "Authorization": `Bearer ${PHX}`, "Content-Type": "application/json" };

const r = await fetch(`${BASE}/insights/`, {
  method: "POST", headers: H, body: JSON.stringify({
    name: "Funnel Acquisition Devis",
    description: "Conversion entonnoir sur les 30 derniers jours, fenêtre 30 min",
    saved: true,
    dashboards: [DASH_FUNNEL],
    query: {
      kind: "InsightVizNode",
      source: {
        kind: "FunnelsQuery",
        dateRange: { date_from: "-30d" },
        series: [
          { kind: "EventsNode", event: "$pageview", name: "Visite site" },
          { kind: "EventsNode", event: "devis_page_viewed", name: "Page Devis" },
          { kind: "EventsNode", event: "devis_service_selected", name: "Service sélectionné" },
          { kind: "EventsNode", event: "devis_submitted_server", name: "Devis envoyé" },
        ],
        funnelsFilter: {
          funnelWindowInterval: 30,
          funnelWindowIntervalUnit: "minute",
          funnelVizType: "steps",
        },
      },
    },
  }),
});
const txt = await r.text();
console.log("Status:", r.status);
if (r.ok) {
  const data = JSON.parse(txt);
  console.log(`✓ Funnel created id=${data.id}`);
} else {
  console.error("Error:", txt.slice(0, 500));
  process.exit(1);
}
