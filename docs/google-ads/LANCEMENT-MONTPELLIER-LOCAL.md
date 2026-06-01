# 🚀 Lancement Google Ads — TEST LOCAL MONTPELLIER
**Budget : 100 € sur 4 jours (25 €/jour) · Première campagne · Démoussage toiture + Façade**

> Objectif : apprendre ce qui marche. On part sur **Toiture 70% / Façade 30%**
> (le démoussage génère 2-3× plus d'appels que la façade — besoin visible, récurrent, anxiogène).

---

## ⏱️ AVANT DE LANCER — 3 prérequis (15 min)

### 1. Créer la conversion dans Google Ads
`Objectifs ▸ Conversions ▸ + Nouvelle action ▸ Importer ▸ Source : événement web GTM`
- Nom : **Devis envoyé**
- Catégorie : **Prospect (Lead)**
- Valeur : *Utiliser des valeurs différentes* (on envoie déjà la valeur via le dataLayer)
- Comptage : **Une seule** (un devis = un lead)
- ✅ Activer **Enhanced Conversions** (données fournies par l'utilisateur via GTM)

### 2. Brancher la balise dans GTM (compte GTM-5653377L)
Le site pousse déjà l'événement `generate_lead` dans le dataLayer (✅ déployé).
Dans GTM :
1. **Déclencheur** : type *Événement personnalisé*, nom = `generate_lead`
2. **Balise** : *Suivi des conversions Google Ads* → coller l'**ID de conversion** + **libellé** (donnés à l'étape 1)
   - Valeur de conversion : `{{DLV - value}}` · Devise : `{{DLV - currency}}`
3. **Balise** : *Éditeur de liens de conversion Google Ads* (Conversion Linker) → déclencheur "All Pages"
4. **Enhanced Conversions** : dans la balise conversion, activer "Fournir des données utilisateur" → variable de type *Données fournies par l'utilisateur* → mode manuel → email = `{{DLV - enhanced_conversion_data.email}}`, tél = `{{DLV - enhanced_conversion_data.phone_number}}`
5. **Publier** le conteneur GTM.

> Les variables DLV se créent en 30s : Variables ▸ Nouvelle ▸ Variable de couche de données ▸ nom exact (`value`, `currency`, etc.)

### 3. Tester (mode Aperçu GTM)
Soumettre un faux devis → vérifier que `generate_lead` se déclenche et que la conversion remonte dans Google Ads (Diagnostic, peut prendre 24h pour validation).

---

## 🎯 PARAMÈTRES DE CAMPAGNE

| Réglage | Valeur |
|---|---|
| Objectif | **Prospects** (ou "Sans objectif" pour garder le contrôle) |
| Type | **Réseau de Recherche** uniquement |
| ❌ Réseau Display | **DÉCOCHER** (coché par défaut !) |
| ❌ Partenaires du Réseau de Recherche | **DÉCOCHER** (coché par défaut !) |
| Budget quotidien | **25 €** |
| Stratégie d'enchères | **Maximiser les clics** + plafond CPC **2,50 €** |
| Langue | Français |
| Diffusion | Standard, idéalement 7h-21h |

### 📍 Ciblage géographique (CRUCIAL)
**Type de ciblage : "Présence : personnes se trouvant dans vos zones ciblées"**
(❌ PAS "présence OU intérêt" = tu paierais des clics hors zone)

**Zone : rayon 12 km autour de Montpellier** OU communes ciblées (le croissant nord aisé) :
```
Montpellier, Castelnau-le-Lez, Lattes, Clapiers, Jacou, Le Crès,
Montferrier-sur-Lez, Saint-Clément-de-Rivière, Saint-Gély-du-Fesc, Assas,
Grabels, Juvignac, Saint-Jean-de-Védas, Lavérune, Pignan, Fabrègues,
Vendargues, Teyran, Prades-le-Lez, Saussan
```
> Le nord de Montpellier (Montferrier, Assas, St-Clément, St-Gély) = foyers les plus aisés du 34 → maisons + tuiles + budget. Priorité.

---

## 🗂️ STRUCTURE : 1 campagne, 2 groupes d'annonces

### GROUPE 1 — Démoussage Toiture (enchère CPC max : 2,50 €) — *priorité budget*

**Mots-clés (expression "" + exact [] uniquement, JAMAIS large) :**
```
[démoussage toiture montpellier]
[entreprise démoussage toiture montpellier]
"démoussage toiture"
"nettoyage toiture montpellier"
"traitement hydrofuge toiture"
"démoussage toiture hérault"
"anti mousse toiture"
"démoussage toit"
```

### GROUPE 2 — Nettoyage Façade (enchère CPC max : 2,00 €)

**Mots-clés :**
```
[nettoyage façade montpellier]
"nettoyage façade"
"nettoyage façade maison"
"nettoyage façade immeuble"
"nettoyage façade montpellier"
```

### 🚫 MOTS-CLÉS NÉGATIFS (niveau campagne — à ajouter AVANT lancement)
```
gratuit
soi-même
soi meme
tuto
tutoriel
youtube
comment faire
produit
karcher
kärcher
leroy merlin
castorama
brico
location
nacelle
échafaudage
emploi
recrutement
formation
salaire
stage
diy
javel
vinaigre
maprimerénov
aide
subvention
prix produit
pas cher
```

---

## ✍️ ANNONCES (RSA — copier-coller)

### Annonce GROUPE TOITURE
**URL finale :** `https://ellipsys-solutions.com/devis?service=toiture`
**Chemins d'affichage :** `/Demoussage-Toiture` · `/Montpellier`

**Titres (15 — colle-les tous) :**
```
Démoussage Toiture par Drone
Toiture Propre Sans Échafaudage
Devis Gratuit sous 24h
Démoussage + Hydrofuge
Sans Monter sur le Toit
Intervention Rapide Hérault
Tuiles Préservées · Eau Pure
Drone Pro Certifié DGAC
Ellipsys Solutions Montpellier
Traitement Anti-Mousse Durable
Démoussage Toiture Montpellier
Stop Mousse & Lichen
Méthode Écologique & Sûre
Protégez Votre Toiture
Expert Drone Toiture 34
```

**Descriptions (4) :**
```
Démoussage toiture par drone, sans échafaudage ni nacelle. Vos tuiles préservées. Devis gratuit sous 24h à Montpellier et alentours.
Mousse, lichen, salissures : traitement complet + hydrofuge longue durée. Intervention rapide et sécurisée dans tout l'Hérault.
Expert drone & robot. Méthode écologique, précise au centimètre. Particuliers et copropriétés. Demandez votre devis gratuit.
Évitez l'usure de vos tuiles. Nettoyage drone professionnel certifié DGAC/EASA. Montpellier, St-Gély, Castelnau, Lattes.
```

### Annonce GROUPE FAÇADE
**URL finale :** `https://ellipsys-solutions.com/devis?service=facade`
**Chemins d'affichage :** `/Nettoyage-Facade` · `/Montpellier`

**Titres (15) :**
```
Nettoyage Façade par Drone
Façade Propre Sans Échafaudage
Devis Gratuit sous 24h
Montpellier & Alentours
Sans Nacelle · Sans Dégât
Drone Pro Certifié DGAC
Maison & Immeuble
Ellipsys Solutions Montpellier
Intervention Rapide Hérault
Méthode Écologique Eau Pure
Nettoyage Façade Montpellier
Ravalement Doux par Drone
Façade Comme Neuve
Expert Façade Drone 34
Devis Personnalisé Rapide
```

**Descriptions (4) :**
```
Nettoyage de façade par drone, sans échafaudage ni nacelle. Rapide, sûr, écologique. Devis gratuit sous 24h à Montpellier.
Façade encrassée, pollution, traces : ravalement doux par drone. Maisons et petites copropriétés. Demandez votre devis.
Expert drone & robot. Sans dégradation du support. Intervention dans tout l'Hérault. Devis personnalisé gratuit.
Ellipsys : nettoyage de précision sans nacelle. Montpellier, Castelnau, St-Jean-de-Védas. Contactez-nous.
```

### 🔗 EXTENSIONS (au niveau campagne — gratuites, +CTR)
- **Appel** : 04 67 20 97 09  ← capte des leads SANS clic, indispensable à petit budget
- **Liens annexes** :
  - "Démoussage Toiture" → /devis?service=toiture
  - "Nettoyage Façade" → /devis?service=facade
  - "Demander un Devis" → /devis
  - "Nos Réalisations" → / (ou page actus)
- **Accroches** : `Devis gratuit 24h` · `Sans échafaudage` · `Certifiés DGAC/EASA` · `Intervention rapide` · `Montpellier & alentours` · `Méthode écologique`
- **Extrait structuré** (en-tête "Services") : Démoussage, Hydrofuge, Façade, Toiture, Panneaux solaires
- **Lieu** : lier la fiche Google Business Profile si dispo

---

## 📊 SUIVI PENDANT LES 4 JOURS

| Jour | Action |
|---|---|
| J1 (soir) | Vérifier que les annonces sont "Validées" et diffusent. Regarder les **termes de recherche** réels → ajouter en négatif tout ce qui est hors sujet. |
| J2 | Refaire le tri des termes de recherche. Noter le CPC réel moyen. Le groupe Toiture doit consommer plus que Façade. |
| J3 | Comparer Toiture vs Façade : impressions, CTR, clics, leads. Mettre en pause les mots-clés à 0 clic / CPC trop cher. |
| J4 | Bilan : quel service a généré clics + appels + devis ? C'est ta réponse "ce qui marche". |

### Ce qu'on regarde (KPI réalistes pour 100 €)
- **Impressions** : 1 500–3 000
- **Clics** : ~35–45
- **CTR** : viser > 5% (sinon retravailler les titres)
- **Leads (devis + appels)** : 1 à 3
- **Coût/lead** : 30–60 € (un lead toiture vaut 2 000–3 000 € → rentable dès 1 signé)

---

## ⚠️ LES 7 ERREURS À NE PAS FAIRE
1. ❌ Laisser "Réseau Display" ou "Partenaires de recherche" cochés (par défaut !)
2. ❌ Utiliser le **broad match** (mot-clé sans guillemets ni crochets) → budget cramé en 1 jour
3. ❌ Lancer en "Maximiser les conversions" / tCPA sans historique → erratique
4. ❌ Ciblage géo "présence ou intérêt" → clics hors Hérault
5. ❌ Oublier les mots-clés négatifs → trafic "gratuit/tuto/emploi"
6. ❌ Performance Max ou AI Max (les nouveautés 2026) → inadaptés à 25 €/jour
7. ❌ Lancer sans la conversion branchée → 4 jours à l'aveugle

---

## 🔜 APRÈS LE TEST (semaine suivante)
- Lancer la vérification **Local Services Ads / Google Guaranteed** (dispo France, paiement au lead, badge au-dessus des annonces) → ton vrai canal local à terme.
- Si un service ressort gagnant : créer une **landing page dédiée** (`/demoussage-toiture-montpellier`) pour booster le Quality Score et baisser le CPC.
- À partir de ~15-20 conversions/mois : passer en **Maximiser les conversions** puis tCPA.
