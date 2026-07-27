# 🚀 Campagne Google Ads — Sprint 5 jours
**Lundi 24 → vendredi 28 août 2026 · Compte 157-589-1262**

---

## ⚡ CE QU'IL FAUT COMPRENDRE AVANT TOUT

Une campagne de 5 jours n'est **pas** une campagne normale en plus court. Trois conséquences
structurent tout ce document :

**1. L'algorithme de Google n'aura pas le temps d'apprendre.**
Les stratégies d'enchères automatiques (Maximiser les conversions, tCPA, Performance Max) ont besoin
de ~2 semaines et d'une trentaine de conversions pour se calibrer. En 5 jours, elles ne sortent jamais
de la phase d'apprentissage — elles dépensent en explorant, sans jamais exploiter. **On pilote donc à la main.**

**2. La validation des annonces peut vous coûter 40 % de la campagne.**
Google met généralement 1 jour ouvré à valider une annonce, parfois 2 à 3. Si vous créez les annonces
le lundi 24 au matin, vous perdez potentiellement 2 des 5 jours. **Tout doit être créé et validé
AVANT, en campagne mise en pause.** C'est le risque opérationnel n°1 de ce sprint, et le plus facile à éviter.

**3. Sans suivi de conversion, les 5 jours ne servent à rien.**
Vous verrez des clics, pas des demandes de devis. Vous ne saurez pas quel mot-clé a produit un client.
Le vrai livrable de ce sprint, ce n'est pas le chiffre d'affaires immédiat — c'est **la donnée** qui
vous dira où investir ensuite. Sans conversion branchée, il n'y a pas de donnée.

---

## 📅 RÉTROPLANNING — à respecter dans l'ordre

| Échéance | Action | Qui |
|---|---|---|
| **avant le 10 août** | Suivi de conversion créé dans Google Ads + balise GTM publiée + **test réel validé** | Vous (je peux guider pas à pas) |
| **avant le 10 août** | Vague 1 des citations locales (voir `docs/seo-local/CITATIONS-LOCALES.md`) | Vous |
| **avant le 17 août** | Landing pages dédiées en ligne *(voir § Landing pages)* | Moi |
| **lundi 17 août** | Campagne créée **en pause**, annonces soumises à validation | Vous |
| **jeudi 20 août** | Contrôle : toutes les annonces affichent « Validée » ✅ | Vous |
| **vendredi 21 août** | Faux devis de test → vérifier que la conversion remonte dans Google Ads | Vous |
| **lundi 24 août, 8 h** | **Activation** | Vous |
| 24 → 28 août, chaque soir | Pilotage quotidien (voir § Pilotage) | Vous + moi |
| **samedi 29 août** | Mise en pause + bilan complet | Moi |

> ⛔ **Si le suivi de conversion n'est pas validé le 21 août, ne lancez pas.** Décalez d'une semaine.
> Une campagne à l'aveugle brûle le budget sans produire l'information qui justifie de le dépenser.

---

## 💰 BUDGET — à trancher

Le budget quotidien détermine tout le reste (nombre de groupes, largeur du ciblage, agressivité des enchères).
Trois scénarios cohérents ; **je recommande le scénario B**.

| | A — Prudent | **B — Recommandé** | C — Agressif |
|---|---|---|---|
| Budget / jour | 50 € | **100 €** | 200 € |
| **Total 5 jours** | **250 €** | **500 €** | **1 000 €** |
| Groupes d'annonces | 2 | **3** | 3 |
| Clics attendus | 80 – 110 | **170 – 220** | 340 – 440 |
| Demandes de devis attendues | 2 – 4 | **5 – 9** | 10 – 18 |
| Coût par lead estimé | 60 – 125 € | **55 – 100 €** | 55 – 100 € |
| Fiabilité de la donnée | Faible | **Correcte** | Bonne |

**Pourquoi B plutôt que A :** en dessous de ~150 clics sur l'ensemble du sprint, les écarts entre groupes
d'annonces ne sont pas statistiquement lisibles. Vous dépensez 250 € et vous ressortez avec une intuition,
pas avec une conclusion. À 500 €, chaque groupe reçoit assez de trafic pour qu'on puisse trancher.

**Pourquoi pas C d'emblée :** rien ne prouve encore que le tunnel convertit. Autant valider à 500 € avant
de monter. Si les indicateurs sont bons dès mercredi, on peut monter le budget en cours de route — c'est
d'ailleurs prévu au § Pilotage.

**Contexte de rentabilité :** un chantier de démoussage de toiture se situe entre 1 500 et 3 000 €.
À 500 € investis, **un seul devis signé rend le sprint largement rentable.**

> ✅ **Ce document est écrit pour le scénario B (100 €/jour).** Si vous choisissez A ou C, les seuls
> paramètres à changer sont le budget quotidien et la répartition des groupes — tout le reste est identique.

---

## ⚙️ PARAMÈTRES DE CAMPAGNE

| Réglage | Valeur | Attention |
|---|---|---|
| Objectif | **Prospects** | |
| Type | **Réseau de Recherche uniquement** | |
| Réseau Display | ❌ **DÉCOCHER** | Coché par défaut. Cramerait 40 % du budget en impressions inutiles. |
| Partenaires du Réseau de Recherche | ❌ **DÉCOCHER** | Coché par défaut. Trafic de bien moindre qualité. |
| Budget quotidien | **100 €** | |
| Stratégie d'enchères | **Maximiser les clics** + plafond CPC **3,00 €** | ⛔ Surtout pas de tCPA ni Maximiser les conversions. |
| Langue | Français | |
| Dates | **24/08/2026 → 28/08/2026** | À saisir dès la création. Évite tout dépassement oublié. |
| Diffusion | Standard | |
| Rotation des annonces | **Optimiser** | |

### 📍 Ciblage géographique

**Type de ciblage : « Présence : personnes se trouvant dans vos zones ciblées »**
❌ Surtout pas « présence ou intérêt » — vous paieriez des clics de personnes qui parlent de Montpellier
depuis Lille.

> ⚠️ Ce réglage est enfoui : `Zones ciblées ▸ Options de zone géographique`. Google le repositionne
> régulièrement dans l'interface. **Vérifiez-le explicitement**, c'est l'erreur la plus coûteuse et la plus fréquente.

**Zone : rayon de 20 km autour de Montpellier**, ou liste de communes :
```
Montpellier, Castelnau-le-Lez, Lattes, Pérols, Clapiers, Jacou, Le Crès,
Montferrier-sur-Lez, Saint-Clément-de-Rivière, Saint-Gély-du-Fesc, Assas,
Grabels, Juvignac, Saint-Jean-de-Védas, Lavérune, Pignan, Fabrègues,
Vendargues, Teyran, Prades-le-Lez, Baillargues, Villeneuve-lès-Maguelone
```

> Le croissant nord (Montferrier, Assas, Saint-Clément, Saint-Gély, Prades-le-Lez) concentre les foyers
> les plus aisés de l'Hérault : maisons individuelles, toitures en tuile, budget d'entretien réel.
> C'est là que le démoussage se vend.

### 🕐 Calendrier de diffusion

Sur 5 jours, ne diffusez pas la nuit — vous paieriez des clics que personne ne rappelle.

```
Lundi à vendredi : 07 h 30 → 20 h 00
```
**Ajustement d'enchère +20 % sur la tranche 11 h – 14 h** (pic de recherche « travaux maison »
pendant la pause déjeuner, en B2C comme en B2B).

### 📱 Appareils
Pas d'exclusion. Ajustement **+15 % sur mobile** : sur ce métier, le mobile génère l'appel direct,
qui est votre lead le moins cher.

---

## 🗂️ STRUCTURE — 3 groupes d'annonces

Répartition du budget par les enchères, pas par des budgets séparés (un budget par groupe fragmenterait
un montant déjà modeste).

| Groupe | Part visée | CPC max | Cible |
|---|---|---|---|
| **G1 — Démoussage toiture** | ~45 % | 3,00 € | Particuliers. Volume de recherche le plus élevé, besoin visible et anxiogène. |
| **G2 — Panneaux solaires** | ~30 % | 3,50 € | Particuliers + pros. Panier le plus élevé, concurrence publicitaire plus faible. |
| **G3 — Nettoyage façade** | ~25 % | 2,50 € | Particuliers + copropriétés. Cycle de décision plus long. |

> **Si vous retenez le scénario A (250 €), supprimez G3.** À ce niveau de budget, trois groupes
> reçoivent chacun trop peu de trafic pour être interprétables.

---

### GROUPE 1 — Démoussage toiture

**Mots-clés** — expression `"..."` et exact `[...]` uniquement. **Jamais de requête large.**
```
[démoussage toiture montpellier]
[entreprise démoussage toiture montpellier]
[nettoyage toiture montpellier]
[démoussage toiture hérault]
"démoussage toiture"
"nettoyage toiture"
"traitement hydrofuge toiture"
"anti mousse toiture"
"démoussage toit"
"entreprise démoussage"
"nettoyage tuiles"
"demoussage toiture drone"
```

**URL finale :** `https://ellipsys-solutions.com/demoussage-toiture-montpellier`
**Chemins d'affichage :** `/Demoussage-Toiture` · `/Montpellier`

**Titres (15) :**
```
Démoussage Toiture par Drone
Toiture Propre Sans Échafaudage
Devis Gratuit sous 24h
Démoussage + Hydrofuge
Sans Monter sur le Toit
Aucune Tuile Cassée
Intervention Rapide Hérault
Drone Pro Certifié DGAC
Démoussage Toiture Montpellier
Traitement Anti-Mousse Durable
Stop Mousse & Lichen
Méthode Douce, Sans Pression
Protégez Vos Tuiles Canal
Expert Drone Toiture 34
Entreprise Locale Montpellier
```

**Descriptions (4) :**
```
Démoussage de toiture par drone, sans échafaudage ni nacelle. Vos tuiles restent intactes. Devis gratuit sous 24 h à Montpellier.
Mousse, lichen, salissures : traitement complet et hydrofuge longue durée. Intervention rapide et sécurisée dans tout l'Hérault.
Sans haute pression : nous préservons vos tuiles canal au lieu de les fragiliser. Pilotes certifiés DGAC. Devis gratuit.
Entreprise montpelliéraine. Montpellier, St-Gély, Castelnau, Lattes, Clapiers. Réponse sous 24 h, sans engagement.
```

---

### GROUPE 2 — Nettoyage de panneaux solaires

**Mots-clés :**
```
[nettoyage panneaux solaires montpellier]
[nettoyage panneaux photovoltaiques montpellier]
[entreprise nettoyage panneaux solaires]
"nettoyage panneaux solaires"
"nettoyage panneaux photovoltaiques"
"nettoyage panneau solaire prix"
"entretien panneaux solaires"
"nettoyage centrale photovoltaique"
"rendement panneaux solaires encrassement"
"nettoyage panneaux solaires hérault"
"nettoyage panneaux solaires robot"
```

**URL finale :** `https://ellipsys-solutions.com/nettoyage-panneaux-solaires-montpellier`
**Chemins d'affichage :** `/Panneaux-Solaires` · `/Montpellier`

**Titres (15) :**
```
Nettoyage Panneaux Solaires
Jusqu'à +30% de Rendement
Devis Gratuit sous 24h
Robot & Drone Professionnels
Eau Osmosée, Zéro Produit
1 200 m² Nettoyés par Heure
Sans Arrêt de Production
Nettoyage Photovoltaïque 34
Particuliers & Centrales
Expert Solaire Montpellier
Rendement Restauré, Mesuré
Après le Sable Saharien
Sans Rayer Vos Panneaux
Contrat d'Entretien Annuel
Entreprise Locale Montpellier
```

**Descriptions (4) :**
```
Panneaux encrassés = production perdue. Nettoyage robot et drone à l'eau osmosée. Devis gratuit sous 24 h à Montpellier.
Notre robot traite 1 200 m² par heure sans rayer le verre ni interrompre votre production. Particuliers et centrales.
Sable saharien, pollen, sel marin : le dépôt ne part pas à la pluie. Nous mesurons le gain de rendement avant et après.
Toiture résidentielle ou centrale au sol, Montpellier et Occitanie. Réponse sous 24 h, sans engagement.
```

---

### GROUPE 3 — Nettoyage de façade

**Mots-clés :**
```
[nettoyage façade montpellier]
[nettoyage facade maison montpellier]
"nettoyage façade"
"nettoyage façade maison"
"nettoyage façade immeuble"
"ravalement façade montpellier"
"nettoyage crépi"
"nettoyage façade copropriété"
```

**URL finale :** `https://ellipsys-solutions.com/nettoyage-facade-montpellier`
**Chemins d'affichage :** `/Nettoyage-Facade` · `/Montpellier`

**Titres (15) :**
```
Nettoyage Façade par Drone
Façade Propre Sans Échafaudage
Devis Gratuit sous 24h
Sans Nacelle · Sans Emprise
Maison, Immeuble, Copropriété
Drone Pro Certifié DGAC
Nettoyage Façade Montpellier
Crépi, Pierre, Enduit, Béton
Sans Autorisation de Voirie
Méthode Douce Eau Osmosée
Façade Comme Neuve
Intervention en 1 à 2 Jours
Expert Façade Drone 34
Devis Personnalisé Rapide
Entreprise Locale Montpellier
```

**Descriptions (4) :**
```
Nettoyage de façade par drone, sans échafaudage ni nacelle. Une à deux journées au lieu de plusieurs semaines.
Crépi, pierre, enduit, béton : traitement adapté au support, sans haute pression ni dégradation. Devis gratuit sous 24 h.
Pas d'échafaudage, donc pas d'autorisation de voirie ni de rue immobilisée. Maisons et copropriétés à Montpellier.
Pilotes certifiés DGAC, assurance RC aérienne. Montpellier, Castelnau, Lattes, St-Jean-de-Védas. Réponse sous 24 h.
```

---

## 🚫 MOTS-CLÉS NÉGATIFS

À créer en **liste partagée** au niveau du compte, appliquée à la campagne. Sur 5 jours, chaque euro
détourné vers une requête hors sujet est un euro définitivement perdu.

```
gratuit                 emploi                  location
soi-même                recrutement             nacelle
soi meme                offre emploi            échafaudage
tuto                    salaire                 echafaudage
tutoriel                stage                   louer
youtube                 alternance              achat
comment faire           formation               vente
comment nettoyer        cap                     occasion
diy                     devenir                 forum
faire soi même          métier                  avis salariés
                                                
karcher                 javel                   mairie
kärcher                 vinaigre                subvention
nettoyeur               bicarbonate             aide état
haute pression          produit anti mousse     maprimerenov
leroy merlin            anti mousse pas cher    crédit impôt
castorama               pas cher                prime
brico depot             gratuitement            association
amazon                  auto entrepreneur       bénévole
```

> ⚠️ `nacelle` et `échafaudage` en négatif peut surprendre — mais quelqu'un qui cherche « location nacelle
> nettoyage façade » veut louer du matériel, pas vous confier un chantier. Sur 5 jours, on ne se paie pas
> ce trafic-là.

---

## 🔗 EXTENSIONS (assets)

Gratuites, elles augmentent le CTR **et** le Quality Score — donc baissent le CPC. À remplir intégralement,
au niveau campagne.

**Extension d'appel** — `04 67 20 97 09`
→ **La plus importante à petit budget.** Elle génère des appels facturés comme un clic, mais un appel
converti vaut infiniment plus qu'une visite. Activer le **suivi des appels de plus de 60 secondes comme conversion**.

**Liens annexes (4)**
| Texte | URL | Description |
|---|---|---|
| Démoussage Toiture | /demoussage-toiture-montpellier | Sans échafaudage, tuiles préservées |
| Panneaux Solaires | /nettoyage-panneaux-solaires-montpellier | Jusqu'à +30 % de rendement |
| Nos Réalisations | /realisations | Chantiers avant/après |
| Demander un Devis | /devis | Réponse gratuite sous 24 h |

**Accroches (8)**
```
Devis gratuit sous 24h · Sans échafaudage · Certifiés DGAC/EASA
Entreprise montpelliéraine · Sans arrêt d'activité · Méthode écologique
Intervention sous 48h · Assurance RC aérienne
```

**Extraits structurés** — en-tête « Services » :
`Démoussage · Hydrofuge · Façade · Panneaux solaires · Thermographie · Bardage`

**Extension de lieu** — lier la fiche Google Business Profile.
→ Fait apparaître l'adresse et la distance dans l'annonce. Signal de proximité déterminant en local.

**Extension de formulaire (Lead form)** — ne pas l'activer.
Elle génère des leads de faible qualité et court-circuite votre suivi de conversion sur le site.

---

## 🎯 LANDING PAGES — ce qu'il reste à construire

Les URL finales ci-dessus pointent vers **trois pages qui n'existent pas encore**.

C'est volontaire, et c'est le dernier chantier avant lancement. Aujourd'hui vos annonces enverraient
soit vers `/devis` (formulaire générique, sans contenu correspondant à la requête), soit vers une page
de prestation nationale. Dans les deux cas, Google évalue mal la pertinence de la page d'arrivée — et
un mauvais Quality Score se paie **directement en CPC plus élevé**, jusqu'à 30-50 % d'écart.

**Les 3 pages à créer :**
```
/demoussage-toiture-montpellier
/nettoyage-panneaux-solaires-montpellier
/nettoyage-facade-montpellier
```

**Structure retenue pour chacune :** H1 reprenant exactement l'expression cible, formulaire de devis
visible sans défilement, preuve visuelle avant/après, prix indicatif, FAQ locale, numéro cliquable en
en-tête fixe sur mobile.

**Bénéfice double :** meilleur Quality Score pour les annonces (CPC plus bas dès le premier jour) **et**
pages positionnables en référencement naturel — elles continueront de travailler longtemps après
l'arrêt de la campagne. C'est le seul élément du sprint dont la valeur survit au 28 août.

**Échéance : en ligne le 17 août**, pour que Google ait le temps de les explorer avant le lancement.
Dites-moi quand vous validez le budget et je les construis.

---

## 📊 PILOTAGE — les 5 jours

**Chaque soir, un seul réflexe : le rapport sur les termes de recherche.**
`Mots clés ▸ Termes de recherche`. C'est ce que les gens ont **réellement tapé**, par opposition à ce
que vous avez acheté. Tout terme hors sujet part immédiatement en négatif.

| Jour | À faire |
|---|---|
| **Lun 24** | 10 h : vérifier que les annonces diffusent (« Éligible »). 19 h : premier tri des termes de recherche. Ne rien optimiser d'autre — trop tôt. |
| **Mar 25** | Tri des termes. Noter le CPC réel moyen par groupe. Si un CPC dépasse largement le plafond attendu, baisser l'enchère du groupe. |
| **Mer 26** | **Point de bascule.** Comparer les 3 groupes : CTR, coût par lead. Mettre en pause les mots-clés à 0 clic après 100+ impressions. Réallouer vers le groupe gagnant. |
| **Jeu 27** | Si le coût par lead est inférieur à 80 €, **monter le budget quotidien de 50 %** pour les 2 derniers jours. C'est le moment d'appuyer, pas d'attendre. |
| **Ven 28** | Journée pleine. Ne plus toucher aux réglages : on ne modifie pas une campagne le jour où on la mesure. Mise en pause à 20 h. |

### Repères de lecture (scénario B, 500 €)
| Indicateur | Alerte | Correct | Bon |
|---|---|---|---|
| CTR | < 4 % | 5 – 8 % | > 8 % |
| CPC moyen | > 3,50 € | 2,00 – 3,00 € | < 2,00 € |
| Taux de conversion du site | < 2 % | 3 – 5 % | > 5 % |
| Coût par lead | > 150 € | 55 – 100 € | < 55 € |

**Si le CTR est inférieur à 4 % dès le mardi :** le problème est dans les titres, pas dans les enchères.
Prévenez-moi, je réécris les accroches.

**Si le CTR est bon mais le taux de conversion mauvais :** le problème est sur la landing page, pas
dans la campagne. C'est une information précieuse, pas un échec.

---

## ☎️ LE POINT QUE PERSONNE NE PRÉPARE

Pendant ces 5 jours, **le téléphone doit être décroché**.

Un lead Google Ads a une durée de vie de quelques heures : la personne compare 3 prestataires dans la
même session. Le premier qui répond emporte souvent l'affaire.

- Décrocher au `04 67 20 97 09` de 8 h à 20 h, du 24 au 28.
- Répondre aux demandes de devis **le jour même**, pas sous 24 h — la promesse « sous 24 h » est le
  plancher affiché, pas l'objectif.
- Si un créneau est impossible à couvrir, **retirez-le du calendrier de diffusion** plutôt que de payer
  des clics qui sonneront dans le vide.

À 500 € de budget, un seul appel manqué représente environ 10 % du sprint.

---

## ⛔ LES 8 ERREURS À NE PAS COMMETTRE

1. Laisser **Display** ou **Partenaires de recherche** cochés (ils le sont par défaut).
2. Utiliser des mots-clés en **requête large** — budget épuisé en une journée.
3. Choisir **Maximiser les conversions** ou un **tCPA** sans historique — erratique sur 5 jours.
4. Laisser le ciblage géographique sur **« présence ou intérêt »**.
5. Lancer **Performance Max** — inadapté à ce budget et à cette durée, et opaque.
6. **Créer les annonces le jour du lancement** — vous perdez 1 à 2 jours en validation.
7. Lancer **sans conversion branchée** — 5 jours à l'aveugle.
8. **Modifier les enchères tous les matins.** Chaque changement relance l'apprentissage. On ajuste
   mercredi et jeudi, pas plus.

---

## 🔜 APRÈS LE 28 AOÛT

Le sprint n'est pas une fin : c'est une source de données.

- **Bilan complet le 29 août** : quel service, quel mot-clé, quel appareil, quelle heure ont produit
  les leads. C'est la réponse à « où mettre mon argent ».
- Les **3 landing pages restent en ligne** et continuent de se positionner en référencement naturel.
- **Local Services Ads / Google Garanti** : disponible en France, facturation au lead, badge affiché
  au-dessus des annonces classiques. À instruire ensuite — c'est le canal le plus rentable à terme
  pour une entreprise de services locale.
- À partir de ~15-20 conversions par mois, basculer en **Maximiser les conversions** puis en tCPA.

---

## 📌 CE QUE J'ATTENDS DE VOUS POUR AVANCER

1. **Le budget** : A (250 €), B (500 €, recommandé) ou C (1 000 €) ?
2. **Feu vert sur les 3 landing pages** — c'est le seul élément que je ne peux pas construire sans
   votre validation, et il conditionne la date du 17 août.
3. Le **SIRET** et l'**e-mail public définitif** (voir `docs/seo-local/CITATIONS-LOCALES.md`).

Dès que j'ai le point 2, je construis les pages.
