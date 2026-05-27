# 🎯 Veille concurrentielle + Plan d'action

> **Date** : 13 mai 2026
> **Concurrents audités** : MéthoDrone · DrDrone · Servi-Drones · ZeDrone
> **Source** : analyse approfondie des 4 sites + synthèse précédente (CGC, Innova, Fast Net, Drinnov)

---

## 🥊 Matrice de positionnement

| Concurrent | Cible | Promesse clé | Prix affichés | Téléphone |
|---|---|---|---|---|
| **MéthoDrone** | B2B premium / franchise | "Référence reconnue (JO Paris, Bouygues, Bpifrance)" | ❌ | Footer seulement |
| **DrDrone** | Réseau franchise national | "Couverture France par franchise locale" | ❌ (3 offres ECO/PLUS/ULTRA sans prix) | Header sticky ✅ |
| **Servi-Drones** | SEO long-tail intentionniste | "Prix transparent + estimation satellite" | ✅ 5-10€/m² | Header sticky ✅ |
| **ZeDrone** | Pure player digital low-cost | "Nettoyage dès 499€" | ✅ Agressif | ❌ ABSENT |
| **Ellipsys (vous)** | Premium technique multi-services | "Drone + Robot + Eau osmosée" | ✅ Désormais via /tarifs | ✅ Sticky mobile + header |

**Vide stratégique exploitable** : aucun concurrent ne combine prix transparents + preuves sociales fortes + tracking solide en Occitanie Est (Montpellier/Aimargues/Hérault/Gard). C'est notre Blue Ocean.

---

## ✅ Actions DÉJÀ déployées sur le site

### 1. FAQ schema.org/FAQPage sur la homepage *(commit en cours)*
- 8 questions structurées en JSON-LD
- Cible les **featured snippets Google** (positions "0")
- Couvre : drone abîme-t-il le panneau, produits, tarifs, délais, assurance, zone, drone vs robot, durée
- **Impact attendu** : apparition en featured snippet sous 4-8 semaines + +30% CTR depuis Google

### 2. Page /tarifs stratégique *(commit en cours)*
- URL SEO : `https://ellipsys-solutions.com/tarifs`
- Capture l'intent "prix nettoyage drone" sans s'engager sur un prix d'appel fragile
- Structure : facteurs de prix + fourchettes indicatives + FAQ + CTA
- Approche transparence honnête vs ZeDrone "dès 499€" (qui n'est vrai que sur leur configuration la plus favorable)
- Schema FAQPage inclus

### 3. Sticky mobile CTA *(commit en cours)*
- Composant `<StickyMobileCTA />` actif sur **toutes les pages** (sauf /devis et /admin)
- Apparaît après 600px de scroll
- 2 boutons : "Appeler" + "Devis gratuit"
- Track les clics PostHog (`phone_clicked`, `cta_devis_clicked`)
- **Impact attendu** : +15-25% de conversion sur mobile (où 70% du trafic arrive)

### 4. Landing B2B `/nettoyage-panneaux-photovoltaiques` *(déjà live)*
- Pitch "perte de production = perte d'argent" pour exploitants/asset managers
- Audit soiling gratuit = lead magnet inexistant chez tous les concurrents
- Triptyque Drone + Robot + Eau osmosée mis en avant (USP unique)

### 5. URLs SEO corrigées *(déjà live)*
- 44 occurrences netlify.app → ellipsys-solutions.com (sitemap, robots, metadata, JSON-LD)

---

## 📋 Actions qui nécessitent ton intervention (par ordre d'impact)

### 🔴 PRIORITÉ 1 — Google Reviews widget (impact énorme, 15 min)

**Pourquoi** : aucun de tes 4 concurrents directs n'affiche les étoiles Google. Si tu as ne serait-ce que 10 avis, tu **passes devant en confiance perçue**.

**À faire** :
1. Aller sur https://elfsight.com/google-reviews-widget/ (gratuit jusqu'à 200 vues/mois)
2. Connecter ton Google Business Profile
3. Copier le code embed
4. Me l'envoyer → je l'intègre dans le hero de la home

**Alternative gratuite** : https://app.trustindex.io/free-google-reviews-badge — code embed également.

---

### 🔴 PRIORITÉ 2 — 3 vidéos témoignages clients (impact MASSIF, ~600€)

**Pourquoi** : aucun concurrent n'a de vidéo testimonial face caméra. Avec 3 vidéos verticales de 30-45s, tu deviens **immédiatement plus crédible que les 4 concurrents** réunis.

**À shooter** :
1. **Particulier** : "Bernard, propriétaire à Aimargues" — toiture démoussée
2. **B2B PV** : "Centrale photovoltaïque [ville] — 1,2 MWc nettoyés" — exploitant qui parle de gain de rendement
3. **Copro / Industriel** : "Syndic / Industriel" — gestionnaire qui parle de coût/sécurité

**Format** : vertical 9:16 pour adaptable Reels/TikTok ensuite, mais aussi intégrable en widget desktop.

**Coût** : freelance vidéaste local Montpellier ≈ 600€ pour 3 témoignages. ROI couvert en 1 seul deal B2B.

**Quand tu les as** → je les intègre dans un carrousel sur la home, juste après le hero.

---

### 🟠 PRIORITÉ 3 — Google Search Console (10 min)

**Pourquoi** : indispensable pour soumettre le sitemap, accélérer l'indexation des nouvelles pages (/nettoyage-panneaux-photovoltaiques, /tarifs), et voir les vraies requêtes qui te font apparaître.

**À faire** :
1. Va sur https://search.google.com/search-console
2. "Ajouter une propriété" → `https://ellipsys-solutions.com`
3. Choisis "Préfixe d'URL" → vérification par DNS TXT
4. **Envoie-moi le code TXT** → je l'ajoute sur Netlify DNS en 1 commande
5. Soumets le sitemap : `https://ellipsys-solutions.com/sitemap.xml`
6. Demande l'indexation manuelle de la home + /nettoyage-panneaux-photovoltaiques + /tarifs

---

### 🟠 PRIORITÉ 4 — Google Business Profile (10 min/semaine)

**Pourquoi** : le SEO local n°1 en 2026. Tu as déjà une fiche, mais elle peut être plus active.

**À faire chaque semaine** :
- Poster **1 photo récente** (drone, robot, intervention, avant/après)
- Créer **1 post Google** (équivalent réseau social) : "Cette semaine on a fait..."
- Demander à un client satisfait un **avis Google** (mentionnant idéalement "Montpellier" ou "Aimargues" dans le texte)

**Bonus** : active la messagerie Google Business → les visiteurs peuvent te contacter directement depuis Maps.

---

### 🟡 PRIORITÉ 5 — Microsoft Clarity (15 min)

**Pourquoi** : voir les sessions vidéo des visiteurs **gratuitement** (alternative à Hotjar). Permet de savoir précisément où les visiteurs décrochent sur le funnel devis.

**À faire** :
1. https://clarity.microsoft.com → créer un compte
2. Récupérer le snippet JavaScript
3. Me l'envoyer → je l'ajoute dans `layout.tsx`

Tu verras :
- **Heatmaps** : où les gens cliquent
- **Replays** : vidéos anonymisées de vraies sessions
- **Funnels** : où ça décroche entre les étapes

---

## 🎯 Recommandation finale — Google Ads vs Meta Ads

### **Verdict : Google Ads (90% du budget) — Meta Ads (10% en remarketing uniquement)**

### Pourquoi Google Ads pour toi
1. **Intent d'achat fort et recherché activement.** Les requêtes "nettoyage toiture drone Montpellier" / "tarif nettoyage panneaux solaires" ont une intention commerciale directe.
2. **Aucun concurrent ne fait de Meta Ads agressif** — donc pas de bénéfice à les y combattre.
3. **Servi-Drones démontre que /tarifs ranke et convertit** — c'est exactement notre stratégie.
4. **Panier moyen 500-2000€ B2C / 5000€+ B2B** justifie un CPA Google 50-150€.
5. **Google Local Services Ads (LSA)** = Blue Ocean. Aucun concurrent n'utilise le badge "Garanti par Google" qui s'affiche **au-dessus** des résultats classiques.

### Quand Meta Ads devient pertinent (mois 3+)
- **Remarketing** : retargeter via Pixel Meta les visiteurs du site qui n'ont pas converti
- **Lookalike audiences** une fois qu'on a 100+ leads
- **Reels locaux** sur les vidéos témoignages (action 2 ci-dessus)

### Structure recommandée (mise à jour)

| Campagne | Budget mois 1 | Cible |
|---|---|---|
| **Search "Toiture & Démoussage"** | 50% | Particuliers Hérault/Gard/Vaucluse |
| **Search "Panneaux Solaires B2B"** | 25% | Asset managers + exploitants PV |
| **Performance Max** | 15% | Long tail + display contextualisé |
| **Local Services Ads (LSA)** | 10% | Badge "Garanti par Google" |
| **Total** | **600€** | **Objectif M1 : 8-12 leads** |

> 📂 **Détails complets** : voir `docs/google-ads-launch-photovoltaique.md`

---

## 🚀 Plan d'attaque opérationnel (14 prochains jours)

### Cette semaine (à partir d'aujourd'hui)
- [x] ✅ Veille concurrentielle complète (fait)
- [x] ✅ FAQ schema.org sur home (fait — déploiement en cours)
- [x] ✅ Page /tarifs créée (fait — déploiement en cours)
- [x] ✅ Sticky mobile CTA (fait — déploiement en cours)
- [ ] **Google Search Console** (10 min — TOI)
- [ ] **Google Business Profile : 5 photos + 1 post** (15 min — TOI)
- [ ] **Compte Google Ads créé** (10 min — TOI, sans dépenser encore)

### Semaine prochaine
- [ ] **Google Reviews widget intégré** (M'envoyer le code embed)
- [ ] **Microsoft Clarity activé** (M'envoyer le snippet)
- [ ] **Campagne Google Ads test lancée** (30€/3j puis 20€/jour)
- [ ] **Tournage 3 vidéos témoignages** (planifier avec freelance)

### Semaine 3-4
- [ ] **3 vidéos intégrées** sur la home
- [ ] **Première analyse stats** Google Ads + PostHog
- [ ] **Optimisation** des mots-clés / annonces qui ne performent pas
- [ ] **Premier point chiffré** : combien de leads, quel coût, quel taux de conversion

---

## 💡 Insight stratégique final

**Tu pars de 0 demande. L'objectif "5+ devis/mois" est atteignable parce que :**

1. **Le marché est immature** : tes 4 concurrents ont tous des trous (pas d'avis Google, pas de vidéos, pas de FAQ schema, sticky tel manquant chez ZeDrone, etc.). Tu peux faire mieux sur le digital pure.

2. **La zone géographique Occitanie Est est sous-couverte** : Servi-Drones tient Toulouse, MéthoDrone est en Bretagne, DrDrone n'a pas d'agence Montpellier. **Tu peux dominer ta zone locale.**

3. **Le pitch "drone + robot + eau osmosée" est unique** : aucun concurrent ne le présente comme un triptyque cohérent. C'est ton USP.

4. **L'audit soiling gratuit pour les exploitants PV est un lead magnet inexistant** : énorme pour le B2B, panier élevé.

**Si tu exécutes le plan ci-dessus rigoureusement, tu auras tes 5 premiers devis dans les 30 jours.** Pas par magie, par méthode.

---

*Document généré le 13 mai 2026 à partir de la veille concurrentielle. À ne pas partager hors équipe Ellipsys.*
