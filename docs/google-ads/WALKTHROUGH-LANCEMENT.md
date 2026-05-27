# 🚀 Lancement Google Ads — Mode Co-Pilote (15 min)

> **Lecture nécessaire** : juste cette page. Tout est pré-mâché.
>
> **Principe** : je te dis quoi cliquer / coller à chaque écran. Tu m'envoies un screenshot si tu doutes. **Total = 15 min de ton temps**.

---

## ⚠️ Ce qu'il te faut AVANT de commencer

| Item | Pourquoi |
|---|---|
| ✅ Compte Google professionnel | `monsef.elaidi@ellipsys-group.com` |
| ✅ Une carte bancaire | Google débite après diffusion (postpayment) |
| ✅ N° SIRET Ellipsys | Pour la facturation (TVA déductible) |
| ✅ Adresse pro Montpellier | Pour le compte |
| ✅ Téléphone pro | Vérification SMS |
| ⏱️ **15 minutes** sans interruption | Suivre les étapes 1-5 d'affilée |

---

## ÉTAPE 1 — Créer ton compte Google Ads (5 min) 🟢 TOI

### 1.1 — Aller sur le bon écran
👉 **Ouvre dans un nouvel onglet** : https://ads.google.com

→ Clique **"Démarrer maintenant"** (bouton bleu en haut à droite).
→ Connecte-toi avec **`monsef.elaidi@ellipsys-group.com`**.

### 1.2 — IMPORTANT : sélectionner le mode "Expert"
Google va essayer de te mettre en mode "Smart" (automatique). **Refuse**.

Sur le premier écran, cherche **tout en bas** un petit lien :
> *« Passer au mode expert »* ou *« Switch to expert mode »*

Clique dessus. **C'est crucial** sinon Google va te facturer en pilote automatique sans qu'on contrôle rien.

### 1.3 — Configuration initiale du compte
- **Pays de facturation** : France
- **Fuseau horaire** : (UTC+01:00) Paris — Bruxelles — Madrid
- **Devise** : EUR – Euro (€)

> ⚠️ **Ces 3 choix sont IRRÉVERSIBLES.** Vérifie deux fois avant de valider.

### 1.4 — Skip la création de campagne automatique
Google va te demander de créer une 1ère campagne directement. **Ferme cette étape** : cherche le bouton **"Créer un compte sans campagne"** ou *"Skip campaign creation"*.

→ Tu arrives sur l'écran de **vérification du compte**.

### 1.5 — Remplir les infos de facturation
- **Type de compte** : Entreprise
- **Nom de l'entreprise** : Ellipsys Solutions
- **Adresse** : 159 rue de Thor, 34000 Montpellier
- **N° SIRET** + N° TVA Intracommunautaire si tu l'as

**Mode de paiement** : Carte de crédit (postpayment — Google débite après que tes annonces ont tourné).

### 1.6 — Note ton Customer ID
En haut à droite de la page Google Ads, tu vois un numéro à 10 chiffres au format **XXX-XXX-XXXX**.
👉 **Copie-le et envoie-le moi** (par ex : `123-456-7890`).

C'est ton identifiant compte. Il me permet de vérifier que tout est bon.

---

## ÉTAPE 2 — Télécharger Google Ads Editor (3 min) 🟢 TOI

**Pourquoi** : c'est l'app desktop officielle de Google qui permet de **bulk-importer** une campagne en 1 clic au lieu de tout cliquer dans le navigateur.

### 2.1 — Téléchargement
👉 https://ads.google.com/intl/fr_fr/home/tools/ads-editor/

Clique **"Télécharger"** → installe sur Windows (5 MB).

### 2.2 — Connexion
Ouvre **Google Ads Editor**.
→ Connecte-toi avec **`monsef.elaidi@ellipsys-group.com`**.
→ Sélectionne ton compte (le Customer ID).
→ Clique **"Télécharger toutes les campagnes"** (vide pour l'instant — normal).

---

## ÉTAPE 3 — Importer la campagne pré-configurée (2 min) 🟢 TOI

C'est ICI qu'on gagne 2h de clic manuel.

### 3.1 — Récupérer le CSV
Le fichier prêt à importer est dans ton repo :
```
C:\Users\Poste\Desktop\ELLIPSYS-SITE-V2\docs\google-ads\campaign-bulk-import.csv
```

Il contient :
- **1 campagne** : "Ellipsys PV-Toiture France 2026"
- **6 groupes d'annonces** (Centrales PV, Maintenance O&M, Audit Soiling, Géo Sud, Toiture Démoussage, Particuliers PV)
- **35 mots-clés** + types de correspondance optimisés
- **26 mots-clés négatifs** (anti-gaspillage budget)

### 3.2 — Import dans Google Ads Editor
Dans Google Ads Editor :
1. Menu **Compte** → **Importer** → **À partir d'un fichier**
2. Sélectionne le CSV ci-dessus
3. Editor te montre **un aperçu** de ce qui va être ajouté → vérifie que tout est OK
4. Clique **"Examiner et appliquer"**
5. Editor t'affiche les changements en attente
6. Clique **"Publier"** → la campagne est créée sur ton compte Google Ads (en **statut Pause** — pas encore diffusée)

---

## ÉTAPE 4 — Finaliser dans l'interface web (5 min) 🟢 TOI

Certaines configurations ne passent pas par CSV. À faire dans https://ads.google.com :

### 4.1 — Géo-targeting prioritaire
1. Ouvre la campagne "Ellipsys PV-Toiture France 2026"
2. Menu gauche → **Paramètres** → **Lieux**
3. Ajoute ces zones **(une par une)** :
   - France (par défaut activé)
   - **Régions prioritaires (+20% enchère)** : Occitanie, Provence-Alpes-Côte d'Azur, Auvergne-Rhône-Alpes
4. Ajustement enchère : **+20%** sur Occitanie, PACA, AURA

### 4.2 — Diffusion temporelle
1. Menu gauche → **Paramètres** → **Calendrier des annonces**
2. Configurer : **Lun-Ven 7h-19h** (B2B inactif weekends)

### 4.3 — Ajustement appareils
1. Menu gauche → **Paramètres** → **Appareils**
2. **Desktop** : ajustement enchère **+30%** (B2B se fait sur ordi)

### 4.4 — Coller les annonces (4 ads ready-to-paste)
Pour chaque groupe d'annonces, clique **"Créer une annonce"** → **"Annonce responsive sur le réseau de recherche"**.

#### Ad pour groupe **01-Centrales-PV-B2B** :
```
TITRES (15 max — colle ces 8) :
1. Nettoyage Centrale PV par Drone & Robot
2. Récupérez +30% de Production
3. Audit Soiling Gratuit
4. Toute la France
5. Centrales >100 kWc
6. Tarification €/MWc/an
7. Certifiés DGAC EASA
8. Devis 24h

DESCRIPTIONS (4 max — colle ces 4) :
1. Spécialistes du nettoyage de centrales photovoltaïques. Drone, robot, eau osmosée pure. Vos panneaux retrouvent leur rendement nominal.
2. Audit soiling sur votre centrale, sans engagement. Contrats annuels €/MWc/an. Certifiés DGAC, EASA, RC Aéronautique.
3. Production retrouvée mesurable. Rapport instrumenté sur 14 jours. Conforme bilan investisseurs et banques.
4. Réponse personnelle d'un commercial sous 24h. Pas de standard, pas de robot.

URL FINALE :
https://ellipsys-solutions.com/nettoyage-panneaux-photovoltaiques?utm_source=google&utm_medium=cpc&utm_campaign=pv-b2b&utm_content=g1-centrale&utm_term={keyword}

CHEMIN D'URL :
ellipsys-solutions.com/centrale-photovoltaïque
```

#### Ad pour groupe **02-Maintenance-OM** :
```
TITRES :
1. Maintenance Centrales Photovoltaïques
2. Contrat Annuel €/MWc — Sans Surprise
3. Drone, Robot, Eau Osmosée
4. Audit Soiling Inclus
5. Conforme STS-01 STS-02 EASA
6. Multi-Sites Coordonnés
7. Rapport Sous 48h
8. France & Europe

DESCRIPTIONS :
1. Contrats pluriannuels de nettoyage PV pour exploitants et asset managers. 2 à 4 passages/an selon votre exposition climatique.
2. Rapport instrumenté (production avant/après), photos horodatées, conforme bilan investisseurs. Devis sous 24h.
3. Aucun sous-traitant. Aucun intermédiaire. Une équipe Ellipsys du devis à la restitution.
4. Couverture nationale. Bases opérationnelles Montpellier et Aimargues.

URL FINALE :
https://ellipsys-solutions.com/nettoyage-panneaux-photovoltaiques?utm_source=google&utm_medium=cpc&utm_campaign=pv-b2b&utm_content=g2-maintenance&utm_term={keyword}
```

#### Ad pour groupe **03-Soiling-Audit** :
```
TITRES :
1. Vos Panneaux Solaires Sont Sales ?
2. -30% de Production sans le Savoir
3. Audit Soiling Gratuit
4. Mesure Avant/Après Garantie
5. Calculez Votre Manque à Gagner
6. Rapport sous 48h
7. Sans Engagement
8. Réponse 24h

DESCRIPTIONS :
1. Calculez votre vrai manque à gagner. Nous mesurons votre production sur 14 jours et la comparons au P50 théorique de votre centrale.
2. Service réservé aux exploitants de centrales >100 kWc. Sans engagement. Réponse 24h. Tel direct fondateur.
3. Thermographie infrarouge incluse pour détecter cellules défaillantes et hot spots.
4. Aucun concurrent ne propose cette mesure instrumentée — uniquement Ellipsys.

URL FINALE :
https://ellipsys-solutions.com/nettoyage-panneaux-photovoltaiques?utm_source=google&utm_medium=cpc&utm_campaign=pv-b2b&utm_content=g3-soiling&utm_term={keyword}
```

#### Ad pour groupe **04-Geo-Sud-Occitanie** :
```
TITRES :
1. Nettoyage Panneaux Solaires Sud-France
2. Drone & Robot — Sans Échafaudage
3. Équipe Locale Occitanie-PACA
4. Devis 24h
5. Spécialistes Sable Saharien
6. Montpellier Nîmes Béziers
7. Devis Gratuit
8. Eau Osmosée Pure

DESCRIPTIONS :
1. Spécialistes nettoyage PV en Occitanie, PACA et Vallée du Rhône. Intervention 7j/7. Équipe à Aimargues (30) et Montpellier (34).
2. Sable saharien, pollution méditerranéenne, fientes oiseaux : on connaît votre terrain. Audit soiling offert pour centrales >100 kWc.
3. Sans nacelle ni échafaudage. Drone DGAC + robot terrestre + eau osmosée pure.
4. Note Google 5/5. Devis gratuit personnalisé en 24h. Tel : 04 67 20 97 09.

URL FINALE :
https://ellipsys-solutions.com/nettoyage-panneaux-photovoltaiques?utm_source=google&utm_medium=cpc&utm_campaign=pv-b2b&utm_content=g4-geo-sud&utm_term={keyword}
```

#### Ad pour groupe **05-Toiture-Demoussage** :
```
TITRES :
1. Démoussage Toiture par Drone
2. Sans Échafaudage Sans Risque
3. Protection Hydrofuge 10 Ans
4. Devis Gratuit 24h
5. Eau Osmosée Sans Karcher
6. Compatible Tuiles ABF
7. Montpellier Nîmes Hérault
8. Certifié DGAC EASA

DESCRIPTIONS :
1. Démoussage et hydrofuge de toiture par drone. Pas de descellement, pas de microfissures. Compatible toutes garanties constructeur.
2. Sans échafaudage, sans nacelle, sans risque de chute. Produits biodégradables 90% conformes ISO 14001.
3. Toiture tuiles, ardoises, zinc, bac acier. Intervention soignée. Rapport photo avant/après.
4. Bases opérationnelles Montpellier et Aimargues. Devis personnalisé en 24h.

URL FINALE :
https://ellipsys-solutions.com/prestations/traitement-toiture?utm_source=google&utm_medium=cpc&utm_campaign=pv-b2b&utm_content=g5-toiture&utm_term={keyword}
```

#### Ad pour groupe **06-Particuliers-PV** :
```
TITRES :
1. Nettoyage Panneaux Solaires Maison
2. Retrouvez +20% de Production
3. Sans Marcher sur les Panneaux
4. Devis Gratuit 24h
5. Eau Osmosée Pure
6. Note Google 5/5
7. Pilotes DGAC Certifiés
8. Montpellier & France

DESCRIPTIONS :
1. Vos panneaux solaires perdent en moyenne 15 à 30% de production à cause de la saleté. Restauration par drone à eau osmosée.
2. Aucun risque pour vos panneaux. Aucun produit chimique. Rapport photo avant/après livré sous 48h.
3. Spécialistes installations résidentielles 12-30 panneaux. Devis gratuit en 24h sur photos.
4. Pas de standard. Vous parlez directement avec l'équipe Ellipsys. Tel : 04 67 20 97 09.

URL FINALE :
https://ellipsys-solutions.com/devis?service=solaire&utm_source=google&utm_medium=cpc&utm_campaign=pv-b2b&utm_content=g6-particuliers&utm_term={keyword}
```

### 4.5 — Activer les extensions (5 min)
Menu gauche → **Annonces et extensions** → **Extensions**.

Active les 4 types :

#### A. Extensions de liens annexes (4)
| Texte | URL |
|---|---|
| Audit Soiling Gratuit | `/devis?service=solaire&utm_source=google&utm_medium=cpc&utm_campaign=pv-b2b&utm_content=sitelink-audit` |
| Notre Méthode | `/methode?utm_source=google&utm_medium=cpc&utm_campaign=pv-b2b` |
| Réalisations PV | `/realisations?utm_source=google&utm_medium=cpc&utm_campaign=pv-b2b` |
| Nos Tarifs | `/tarifs?utm_source=google&utm_medium=cpc&utm_campaign=pv-b2b` |

#### B. Extensions d'accroche (7 — colle les 7) :
- Drone + Robot + Eau Osmosée
- Audit Soiling Gratuit
- +30% Production Mesuré
- Certifiés DGAC / EASA
- Toute la France
- Devis 24h
- Sans Sous-Traitance

#### C. Extensions de snippets structurés
- **Type** : Services
- **Valeurs** : Centrales au sol · Toitures industrielles · Ombrières parking · Audit thermographique · Contrats annuels · Multi-sites coordonnés

#### D. Extension d'appel
- **Numéro** : 04 67 20 97 09
- **Heures d'affichage** : Lun-Ven 9h-18h
- ✅ Activer le suivi des appels (conversions téléphone)

---

## ÉTAPE 5 — Configurer le suivi des conversions (5 min) 🟢 TOI + MOI

C'est l'étape qui te fera **économiser des centaines d'€**. Sans tracking, on dépense aveugle.

### 5.1 — Créer la conversion principale
Dans Google Ads → menu **Outils & Paramètres** → **Conversions** → **+ Nouvelle action de conversion**.

- **Source** : Site Web
- **Nom** : `Devis envoyé`
- **Catégorie** : Soumission de formulaire (Submit lead form)
- **Valeur** : Utiliser la même valeur pour chaque conversion : **200 €**
- **Comptage** : Une par clic
- **Fenêtre de conversion** : 30 jours
- **Inclure dans "Conversions"** : Oui (= utiliser pour optimisation des enchères)

### 5.2 — Récupérer le Tag Google Ads
Après création, Google te donne 2 codes :
- Un **Conversion ID** (format `AW-1234567890`)
- Un **Conversion label** (chaîne aléatoire)

👉 **Envoie-moi ces 2 valeurs** → je les intègre dans le code du site (via Google Tag Manager) pour déclencher la conversion automatiquement quand un devis est envoyé.

### 5.3 — Créer la conversion appel
Pareil mais :
- **Source** : Appel depuis annonces
- **Nom** : `Appel téléphonique`
- **Valeur** : 150 €
- **Durée minimum** : 30 secondes (filtre les wrong-numbers)

---

## ÉTAPE 6 — Vérif finale + activation (2 min) 🟢 TOI

### 6.1 — Vérifier tout dans Google Ads
- Campagne "Ellipsys PV-Toiture France 2026" en statut **Pause** (normal pour l'instant)
- 6 groupes d'annonces visibles
- ~35 mots-clés actifs
- ~26 négatifs en place
- 6 annonces créées
- Extensions visibles
- Géo-targeting OK
- Conversions configurées

### 6.2 — Envoyer screenshot du résumé de campagne
**Avant d'activer**, prends un screenshot de la page récap campagne (Vue d'ensemble). Envoie-moi par chat.

→ Je vérifie en 2 min qu'on n'a rien oublié.

### 6.3 — Activer la campagne
Quand je dis **GO** :
1. Sélectionne la campagne
2. Change statut "Pause" → **"Activée"**
3. Confirme

**Les annonces sont en review chez Google pendant 1-24h** puis diffusées.

---

## 📊 Suivi des premières 72h — Je fais en autonomie

Dès activation, je surveille via les outils dispos :

| À J+1 | À J+3 | À J+7 |
|---|---|---|
| ✓ Vérif que les annonces sont approuvées | ✓ Identifier les mots-clés à 0 clic (peuvent être pris en chasse) | ✓ Analyse complète : CTR, CPC, CPA |
| ✓ Premières impressions ? | ✓ Identifier les mots-clés à clics mais 0 conversion (à exclure ou réécrire LP) | ✓ Décision : continuer / pivoter |
| ✓ CPC initial vs prévu (cible <1,80€) | ✓ Premier lead PostHog ? | ✓ Plan ajustement budget |

Je te ferai un **rapport synthétique** chaque soir des 7 premiers jours (par chat).

---

## 🎯 Récap action immédiate

**Tu fais MAINTENANT** :
1. ✅ Étape 1 — Créer compte Google Ads (5 min)
2. ✅ Envoyer ton **Customer ID** par chat → je valide
3. ✅ Étape 2 — Installer Google Ads Editor (3 min)
4. ✅ Étape 3 — Importer le CSV (2 min)
5. ✅ Envoyer screenshot de la campagne créée

**Une fois fait**, je passe en mode **co-pilote actif** :
- Tu m'envoies un screenshot après chaque écran clé
- Je te dis exactement où cliquer/coller
- On valide la conf en 10 min
- Tu actives quand je dis **GO**

---

⏱️ **Total temps utilisateur** : ~25 minutes max (compte + Editor + import + extensions + conversions + activation).

📁 **Fichier à importer** : `docs/google-ads/campaign-bulk-import.csv`

🚀 **Prêt ? Démarre l'Étape 1 maintenant et envoie-moi ton Customer ID.**
