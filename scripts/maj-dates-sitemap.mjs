// Recalcule la date de dernière modification réelle de chaque page du sitemap
// (date du dernier commit qui a touché son fichier) et l'écrit dans
// lib/sitemap-dates.json. À lancer après chaque commit qui modifie une page :
//   node scripts/maj-dates-sitemap.mjs
// Google et Bing ignorent un lastmod qui change à chaque build sans que la page change.
import { execSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const sitemap = readFileSync("app/sitemap.ts", "utf8");
const paths = [...sitemap.matchAll(/\{ path: "([^"]*)"/g)].map((m) => m[1]);

function fichiers(path) {
  if (path === "") return ["app/page.tsx"];
  // Pages ville générées depuis lib/villes.ts
  if (path.startsWith("/intervention/")) return ["lib/villes.ts", "app/intervention/[ville]/page.tsx"];
  return [`app${path}/page.tsx`];
}

const dates = {};
for (const path of paths) {
  const f = fichiers(path).filter((x) => existsSync(x));
  if (!f.length) continue;
  const d = execSync(`git log -1 --format=%cs -- ${f.map((x) => `"${x}"`).join(" ")}`).toString().trim();
  if (d) dates[path] = d;
}

writeFileSync("lib/sitemap-dates.json", JSON.stringify(dates, null, 2) + "\n");
console.log(`${Object.keys(dates).length} dates écrites dans lib/sitemap-dates.json`);
