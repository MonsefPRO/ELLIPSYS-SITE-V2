# Guide PostHog — Ellipsys Solutions V2

Projet : **419510** · Région : **US** · Plan : **Free (1M events/mois)**

---

## 1. Ce qui est déjà installé côté code

### Côté CLIENT (browser)
- ✅ PostHog JS chargé automatiquement (`components/PostHogProvider.tsx`)
- ✅ **Autocapture** activé (clics, formulaires, etc.)
- ✅ **Pageviews + pageleaves** auto
- ✅ **Session recordings** activés (inputs masqués pour RGPD)
- ✅ **Opt-in cookies** : tracking désactivé par défaut, activé après acceptation
- ✅ Helper `lib/analytics.ts` avec liste centralisée des events

### Côté SERVEUR (API routes)
- ✅ Helper `lib/posthog-server.ts` avec `captureServer()` + `identifyServer()`
- ✅ `/api/devis` capture `devis_submitted_server` + identify le lead par email
- ✅ `/api/newsletter` capture `newsletter_signup_server` + identify

### Events custom déjà câblés
| Event | Déclenché par | Properties principales |
|---|---|---|
| `devis_page_viewed` | Ouverture page /devis | lang |
| `devis_client_type_selected` | Switch Pro / Particulier | client_type |
| `devis_service_selected` | Clic sur un service | service, service_label, client_type |
| `devis_submitted` | Succès envoi (browser) | service, city, client_type, hubspot_ids |
| `devis_submitted_server` | Succès envoi (serveur — fiable) | idem |
| `devis_submit_failed` | Échec envoi | status, error |
| `newsletter_signup_server` | Inscription newsletter (serveur) | lang, source |

---

## 2. Configuration à faire UNE FOIS dans PostHog (15 min)

### A) Project Settings
Lien : https://us.posthog.com/project/419510/settings/project

- ✅ **Project name** : `Ellipsys Solutions V2`
- ✅ **Timezone** : `Europe/Paris`
- ✅ **Persons display name** : `email` (au lieu de l'ID anonyme)
- ✅ **Session timeout** : 30 min (par défaut)
- ✅ **Person URL paths to ignore** : `/api/.*` (pour ne pas créer de "personnes" sur les routes API)

### B) Data Management → Definitions
Crée ces propriétés custom (auto-créées au premier event, mais autant les définir proprement) :

| Property | Type | Description |
|---|---|---|
| `client_type` | String | `pro` ou `particulier` |
| `service` | String | Clé : `facade`, `solaire`, `toiture`, `thermographie`, `nuisibles`, `imagerie`, `autre` |
| `service_label` | String | Libellé humain du service |
| `city` | String | Ville saisie dans le devis |
| `hubspot_contact_id` | String | ID HubSpot du contact créé |
| `hubspot_deal_id` | String | ID HubSpot du deal créé |

### C) Data Management → Actions (optionnel mais utile)
Crée 3 Actions pour grouper des events similaires (utile pour rapports) :

1. **Action "Lead créé"** = `devis_submitted_server` OR `newsletter_signup_server`
2. **Action "Devis B2B"** = `devis_submitted_server` WHERE `client_type=pro`
3. **Action "Devis B2C"** = `devis_submitted_server` WHERE `client_type=particulier`

---

## 3. Dashboards à créer (impact business immédiat)

### 📊 Dashboard 1 — "Performance Acquisition" (priorité 1)
**But :** vue d'ensemble des leads et conversions, à consulter quotidiennement.

Insights à ajouter (`Insights → New insight → Trends`) :

1. **Pageviews journalières** (Trends, event `$pageview`, breakdown par `$current_url`)
2. **Devis soumis / jour** (Trends, event `devis_submitted_server`, group by day)
3. **Newsletter / jour** (Trends, event `newsletter_signup_server`, breakdown par `lang`)
4. **Top services demandés** (Trends, event `devis_submitted_server`, breakdown par `service_label`, last 30d)
5. **Top villes** (Trends, event `devis_submitted_server`, breakdown par `city`, last 30d, table view)
6. **Répartition Pro vs Particulier** (Trends, event `devis_submitted_server`, breakdown par `client_type`, pie chart)

### 🎯 Dashboard 2 — "Funnel de conversion" (priorité 2)
**But :** identifier où les visiteurs décrochent.

Funnel à créer (`Insights → New insight → Funnels`) :

```
Étape 1 : $pageview   (url contains "/")          → 100% (baseline visiteurs)
Étape 2 : $pageview   (url contains "/devis")     → "intention devis"
Étape 3 : devis_service_selected                  → "engagement formulaire"
Étape 4 : devis_submitted_server                  → "conversion finale"
```

Conversion window : **30 minutes**. Ce funnel te dira :
- % de visiteurs qui vont sur /devis
- % qui commencent à remplir
- % qui finissent

### 🎬 Dashboard 3 — "Session Recordings + Heatmaps" (priorité 3)
- Onglet **Replay** dans PostHog
- Filtres recommandés :
  - **Sessions de leads** (recordings where `event devis_submitted_server` happened) → comprendre le parcours gagnant
  - **Sessions abandonnées** (where `devis_service_selected` happened BUT NOT `devis_submitted_server`) → comprendre les blocages
- Lance aussi les **Heatmaps** sur `/`, `/devis`, `/prestations`

---

## 4. Cohortes (Cohorts) à créer

Cohortes utiles pour segmenter dans les dashboards :

1. **"Leads B2B"** : ont eu `devis_submitted_server` AVEC `client_type=pro` dans les 90 derniers jours
2. **"Leads B2C"** : `client_type=particulier`
3. **"Leads photovoltaïque"** : `service=solaire`
4. **"Visiteurs récurrents non-convertis"** : >= 3 pageviews ET PAS `devis_submitted_server`
5. **"Abonnés newsletter sans devis"** : `newsletter_signup_server` ET PAS `devis_submitted_server`

---

## 5. Feature Flags & A/B tests (gratuit, à activer pour optimisation ADS)

Une fois les ADS lancées, créer des flags pour tester :

- **`devis_form_layout`** (variants: `single_page` / `multi_step`) → tester si un formulaire en 3 étapes convertit mieux qu'une page longue
- **`hero_cta_text`** (variants: `Devis Gratuit 24h` / `Diagnostic Offert` / `Estimation Express`) → tester les CTA du hero
- **`pricing_visible`** (boolean) → afficher / cacher une fourchette de prix indicative

Setup : **Feature Flags → New Feature Flag** dans PostHog → release rollout à 50/50, puis comparer le taux de conversion sur 2 semaines.

---

## 6. Notifications Slack / Email (gratuit)

PostHog peut t'alerter automatiquement. Aller dans **Notifications** :

- **Alerte "Nouveau lead B2B"** → email ou Slack à chaque `devis_submitted_server` AVEC `client_type=pro`
- **Alerte "Hausse anormale d'erreurs"** → si `devis_submit_failed` > 5 par heure
- **Alerte "Funnel cassé"** → si taux de conversion `/devis → submitted` baisse de > 30% sur 24h

---

## 7. Limites du plan gratuit (à connaître)

| Ressource | Quota free | Stratégie si dépassé |
|---|---|---|
| **Events** | 1 000 000 / mois | Suffisant tant que < 50k visites/mois |
| **Session recordings** | 5 000 / mois | Réduire le sampling : `session_recording: { sample_rate: 0.2 }` (1 visite sur 5) |
| **Feature flag requests** | 1 000 000 / mois | Largement suffisant |
| **Surveys** | 250 réponses / mois | Pas critique pour notre usage |
| **Data warehouse** | Pas inclus | Pas besoin |

**Important :** PostHog facture en "events sent", pas en personnes. Donc l'autocapture peut générer beaucoup d'events. Si on dépasse, on baisse le sample rate des session recordings (déjà à 100% par défaut).

---

## 8. RGPD / Privacy — état actuel

- ✅ **Opt-in obligatoire** : tracking désactivé tant que l'utilisateur n'a pas accepté les cookies
- ✅ **Inputs masqués** : tous les champs des formulaires sont masqués dans les session recordings (RGPD)
- ✅ **Données sur sols US** (PostHog US instance) → c'est OK car PostHog est listé dans le DPA EU-US Data Privacy Framework
- ✅ Mention obligatoire à ajouter dans `/politique-confidentialite` : "Nous utilisons PostHog pour mesurer l'audience anonyme du site. Vous pouvez refuser via la bannière cookies."

---

## 9. Roadmap d'optimisation (3 mois)

| Semaine | Action |
|---|---|
| S1 (déploiement) | Vérifier que les events arrivent, créer le Dashboard 1 |
| S2 | Créer le funnel + premières observations |
| S3 | Analyser les session recordings des leads vs abandons |
| S4 | Lancer le 1er A/B test (probablement sur le CTA hero) |
| S6 | Brancher alertes Slack/Email |
| S8 | Croiser les data PostHog + HubSpot (lead → deal won) pour calculer le ROI réel des ADS |
| S12 | Audit complet + nettoyage des events inutiles |

---

## 10. Liens utiles

- **Ton projet** : https://us.posthog.com/project/419510
- **Events live** : https://us.posthog.com/project/419510/events (voir en temps réel)
- **Replay** : https://us.posthog.com/project/419510/replay
- **Insights** : https://us.posthog.com/project/419510/insights
- **Dashboards** : https://us.posthog.com/project/419510/dashboard
- **Settings** : https://us.posthog.com/project/419510/settings
- **Docs PostHog (events custom)** : https://posthog.com/docs/product-analytics/capture-events
