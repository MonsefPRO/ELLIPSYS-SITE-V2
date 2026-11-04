// Prévient Bing (et les moteurs IndexNow : Yandex, Seznam, Naver) des pages
// nouvelles ou modifiées. Bing alimente la recherche de ChatGPT et de Copilot.
//   node scripts/indexnow.mjs                 → toutes les URL du sitemap en ligne
//   node scripts/indexnow.mjs /realisations   → seulement les chemins donnés
const HOST = "ellipsys-solutions.com";
const KEY = "51ed312738a44b81bb9b3cb8a46d0a57";

let urlList = process.argv.slice(2).map((p) => `https://${HOST}${p.startsWith("/") ? p : `/${p}`}`);
if (!urlList.length) {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const r = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow : ${r.status} pour ${urlList.length} URL`);
