# 🎯 Agent Appels d'Offres — Spécification Ellipsys Solutions
**La « mémoire » de l'agent AO. Lue par la routine du mardi et par la discussion dédiée.**
Dernière mise à jour : 3 septembre 2026.

---

## 0. ⚠️ CONTRAINTE TECHNIQUE ACTUELLE — accès réseau restreint

L'environnement d'exécution de la routine du mardi applique une politique réseau qui **bloque l'accès direct** à la quasi-totalité du web (confirmé le 01/09/2026 : l'API BOAMP, boamp.fr, France Marchés, MarchésOnline, Centrale des Marchés sont tous refusés par le proxy réseau — même un site anodin comme Wikipédia est bloqué). Tant que ce n'est pas corrigé côté configuration de l'environnement (réglage hors de portée de l'agent, à changer par Monsef dans les paramètres de l'environnement Claude Code) :

- **Ne pas tenter** d'interroger l'API BOAMP en direct (§6) ni de charger le détail d'un avis via un fetch de page web — ces appels échoueront systématiquement (erreur `EGRESS_BLOCKED` / 403).
- **S'appuyer uniquement sur l'outil de recherche web généraliste** (recherche par mots-clés), qui reste fonctionnel car il ne passe pas par le même proxy.
- **Traiter les synthèses de résultats de recherche avec prudence** : elles peuvent mélanger des informations entre deux avis différents ou dater d'un avis déjà expiré/attribué. Avant de citer un montant, une deadline ou un acheteur, vérifier que ces informations apparaissent bien, textuellement, dans les résultats de recherche — ne jamais les déduire ou les extrapoler.
- **Ne scorer GO un AO que si son objet, sa deadline (future) et son acheteur sont confirmés par le texte des résultats de recherche.** Si un élément clé (deadline, montant, allotissement) n'est pas vérifiable dans ces conditions, classer l'AO en « piste à vérifier manuellement » plutôt qu'en GO/À ÉTUDIER/NO-GO, et le dire explicitement dans le récap.
- **Toujours vérifier la fraîcheur** : beaucoup de résultats de recherche remontent des AO déjà clos ou déjà attribués (ex. un accord-cadre déjà en cours d'exécution). Écarter tout AO dont la deadline semble dépassée par rapport à la date du jour.
- Rappeler une fois par récap, si la contrainte est toujours active, que la veille est dégradée pour cette raison technique et pointer vers une solution de contournement : **inscrire Ellipsys aux alertes e-mail gratuites de France Marchés** (voir §6) sur les mots-clés/CPV du §5, pour que Monsef reçoive les AO directement par e-mail sans dépendre de l'accès réseau de l'agent.
- Dès que l'accès réseau redevient fonctionnel (à tester en début de routine), reprendre la méthode complète du §6/§Méthode sans cette limitation, et supprimer ou mettre à jour cette section.

---

## 1. QUI EST ELLIPSYS (profil candidat)

- **Raison sociale :** Ellipsys Solutions — SASU, capital 3 000 €.
- **SIREN :** 999 957 533 · **SIRET siège :** 999 957 533 00014.
- **Siège :** 42 Placette de la Lucque, 30470 Aimargues (Gard). **Base opérationnelle :** 159 Rue de Thor, 34000 Montpellier.
- **Immatriculation :** 20/01/2026 (RCS Nîmes). ⚠️ **Entreprise jeune : aucun bilan clos, pas de références sur 3 exercices.** C'est la contrainte n°1 pour les AO formalisés.
- **Code APE :** 74.90B.

### Ce qu'on sait faire — et RIEN d'autre
| Outil | Prestations | Cible physique |
|---|---|---|
| **Drone** | Nettoyage de **vitreries, façades, bardages**, **démoussage de toiture**, **hydrofuge**, **nettoyage de panneaux solaires en toiture / difficiles d'accès** | Tout ce qui est **en hauteur** |
| **Robot** | **Nettoyage de parcs photovoltaïques** uniquement | Grandes surfaces PV planes / au sol |

- Specs robot : **1 200 m²/h**, pente max **25°**, brosse **1,20 m**, débit **7 L/min**, sans détergent.
- Pilotes **certifiés DGAC**, conformité **EASA STS-01 / STS-02**, **assurance RC aérienne**, **habilitation Certibiocide**.
- ⛔ **On ne fait PAS** : nettoyage de sols/bureaux/locaux intérieurs, propreté classique, espaces verts, désinfection de locaux, vitrerie intérieure accessible (sauf via cotraitance NEA, voir §4).

### Capacité opérationnelle (CRITIQUE pour le scoring)
- **1 seule équipe mobile** actuellement.
- Conséquence : **écarter ou basculer en cotraitance** tout AO qui exige plusieurs équipes en parallèle, une astreinte permanente, des interventions simultanées multi-sites à l'échelle nationale, ou une présence continue sur site.
- **Privilégier les accords-cadres à bons de commande** : on répond quand on veut aux commandes, sans engagement de volume simultané. C'est le format idéal pour une équipe unique.

### Administratif
- ✅ Attestations à jour : URSSAF, fiscale, assurances (RC pro + RC aérienne).
- 🔄 Certifications propreté (Qualipropre, ISO 9001/14001, MASE) : **en cours**, pas encore obtenues. → Écarter les AO où une de ces certifs est **éliminatoire** ; les signaler comme « bloquant certif » sinon.

### Références chiffrables (à citer dans les mémoires techniques)
- Centrale PV **Montchanin (71)** — 22 000 m² nettoyés par robot.
- Centrale PV **Vitry (71)** — 31 000 m².
- **Façade Scutum** — nettoyage par drone.
- **Toiture Aimargues (30)** — démoussage.
- *(Liste à enrichir à chaque nouveau chantier livré.)*

---

## 2. STRATÉGIE DE CANDIDATURE

1. **Priorité MAPA** (marchés adaptés < 90 000 € HT) : exigences allégées, les références comptent plus que les bilans. C'est la voie réaliste la première année.
2. **Mais aussi les grosses affaires** : accords-cadres pluriannuels (2-4 ans), gros lots PV. Un seul gagné = revenu récurrent. **Priorité maximale aux accords-cadres à bons de commande.**
3. **Cotraitance / sous-traitance** : se positionner comme le spécialiste drone/PV d'un généraliste sur les gros marchés qu'on ne peut pas porter seul.
4. **Allotissement** : viser les **lots** « nettoyage vitrerie », « nettoyage façade », « démoussage toiture », « maintenance PV » au sein de marchés multi-lots, pas le marché global.

---

## 3. RENTABILITÉ PAR ZONE (les « radars »)

Base à Montpellier. Coût déplacement à intégrer. **Hypothèse coût équipe = ~650 €/jour** (2 personnes + véhicule + hôtel + repas) — *à affiner par Monsef*.

| Radar | Périmètre | Distance depuis Montpellier | Seuil mini pour SIGNALER |
|---|---|---|---|
| 🏠 **Locale** | Hérault, Gard, Occitanie | < 2 h | tout dès **2 500 €** |
| 🌅 **Grand Sud** | PACA, Toulouse, Lyon, Rhône | 2-4 h | ≥ **8 000 €** |
| 🧭 **National** | Nord, Est, Ouest, Île-de-France | > 4 h + nuitées | ≥ **20 000 €** ou marché pluriannuel |
| ☀️ **Exception robot PV** | Partout en France | — | ≥ **15 000 €** (le robot voyage bien, paniers plus gros) |

- **Exclus :** Corse, DOM-TOM.
- Toujours **rappeler le coût déplacement estimé** dans le récap pour les AO hors zone locale, pour que la rentabilité soit visible d'un coup d'œil.

---

## 4. PARTENAIRE DE COTRAITANCE — GROUPE NEA

- **Montage vitrerie :** sur les AO de nettoyage de vitres, Ellipsys traite **l'extérieur en hauteur par drone**, le **Groupe NEA** traite **l'intérieur**. Groupement conjoint.
- ⭐ **Si NEA est une entreprise adaptée / d'insertion** (*à confirmer par Monsef*) : le groupement peut répondre aux **clauses sociales d'insertion** de plus en plus fréquentes dans les marchés publics — argument différenciant majeur. Signaler donc en priorité les AO vitrerie **comportant une clause d'insertion**.
- Pour l'instant, **NEA = uniquement la vitrerie**. Pas d'autre cotraitant.

---

## 5. PÉRIMÈTRE DE CHASSE

- **Secteur :** marchés **publics** (État, collectivités, bailleurs sociaux, hôpitaux, universités, SNCF, SEM énergie…).
- **Gisements les plus prometteurs :**
  - **Bailleurs sociaux** — énormes sur façade / démoussage / vitrerie de parc immobilier.
  - **Collectivités** — écoles, gymnases, mairies (toiture, façade, vitrerie).
  - **Exploitants / SEM photovoltaïques** — maintenance et nettoyage de centrales.
  - **Établissements avec grandes surfaces vitrées** — universités, hôpitaux, gares.

### Codes CPV à cibler (filtrage fin)
| CPV | Libellé | Pertinence |
|---|---|---|
| **90911300** | Services de nettoyage de vitres | ⭐⭐⭐ cœur de cible + cotraitance NEA |
| **90911000** | Nettoyage de logements, bâtiments et vitres | ⭐⭐ (vérifier le lot vitrerie/façade) |
| **90911200** | Services de nettoyage de bâtiments | ⭐ (souvent trop large, checker le détail) |
| **45261900 / 45261910** | Réparation et entretien de toitures | ⭐⭐ démoussage / hydrofuge |
| **45443000** | Travaux de façade | ⭐⭐ nettoyage / ravalement doux |
| **50800000** | Services divers d'entretien et de réparation | ⭐ (à filtrer) |
| **09332000** | Installation solaire | ⭐ (maintenance PV, à vérifier) |
| **71314100 / 71314000** | Services énergétiques | ⭐ (contrats O&M PV) |
| **50000000 / 50700000** | Réparation-entretien / d'installations de bâtiment | ⭐ (maintenance PV multi-technique) |

> ⚠️ **Filtrer le bruit :** la famille CPV 90900000 « nettoyage » est dominée par le **nettoyage de bureaux/sols/locaux** (CPV 90919200), qu'on **ne fait pas**. Ne retenir un AO « nettoyage » que si l'objet mentionne explicitement **vitres/vitrerie, façade, bardage, toiture, démoussage, hydrofuge, panneaux/photovoltaïque, ou hauteur/accès difficile**.

### Mots-clés de recherche
`nettoyage vitrerie` · `nettoyage de vitres` · `nettoyage façade` · `nettoyage bardage` · `démoussage toiture` · `hydrofuge toiture` · `nettoyage panneaux photovoltaïques` · `nettoyage centrale solaire` · `maintenance photovoltaïque` · `nettoyage par drone` · `travaux en hauteur nettoyage` · `remise en état façade`

---

## 6. SOURCES À SCANNER

| Source | Accès | Note |
|---|---|---|
| **BOAMP** (Bulletin officiel des annonces de marchés publics) | **API open data** (voir ci-dessous) | La source n°1, machine-lisible. |
| **TED** (marchés européens) | ted.europa.eu | Seulement les gros accords-cadres (> seuils UE). |
| **PLACE** — marches-publics.gouv.fr | Portail web | Marchés de l'État. |
| **France Marchés** — francemarches.com | Alerte e-mail gratuite | Bonne couverture collectivités. |
| **AWS-Achat** — marches-publics.info | Portail web | Beaucoup de collectivités. |
| **Maximilien** (Île-de-France) | Portail web | Si radar national IDF actif. |
| Portails de **bailleurs sociaux** régionaux | Web | Gisement façade/démoussage. |

### API BOAMP (à requêter en priorité)
Base Opendatasoft, sans authentification :
```
https://boamp-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/boamp/records
  ?where=<recherche plein texte ou filtre>
  &order_by=dateparution desc
  &limit=50
```
Exemple : rechercher les annonces récentes contenant « vitrerie » ou « démoussage » ou « photovoltaïque », filtrer sur `datelimitereponse` future, extraire `objet`, `nomacheteur`, `code_departement`, `datelimitereponse`, `url_avis`.
> L'agent construit les requêtes lui-même. Toujours filtrer sur une **date limite de réponse dans le futur** et une **date de parution récente** (7 derniers jours en priorité).

### Limite honnête
L'agent **repère, score et donne le lien**. Il **ne peut pas** créer de compte, ni télécharger un DCE derrière authentification, ni déposer une offre. Le téléchargement du dossier et le dépôt restent des actions humaines.

---

## 7. FORMAT DU RÉCAP HEBDOMADAIRE (mardi)

```
📋 VEILLE APPELS D'OFFRES — semaine du [date]
[1 phrase : nombre d'AO pertinents trouvés, dont X en zone locale]

🚨 URGENT (deadline < 10 jours) — le cas échéant, en tête

🎯 TOP 5 — les plus intéressants, scorés GO / À ÉTUDIER / NO-GO
Pour chacun :
  • Acheteur · Objet (résumé en 1 ligne)
  • 💰 Montant estimé · 📍 Zone + radar + coût déplacement estimé si hors local
  • 📅 Date limite de réponse
  • 🔧 Prestation Ellipsys concernée (drone façade / robot PV / vitrerie NEA…)
  • ⚙️ Faisabilité 1 équipe : OK / cotraitance nécessaire / trop lourd
  • ⚠️ Point de vigilance (certif éliminatoire ? bilans exigés ? caution ?)
  • 🔗 Lien
  • VERDICT : GO / À ÉTUDIER / NO-GO + 1 raison

📄 AUTRES AO REPÉRÉS — liste courte (objet + acheteur + deadline + lien)

💡 CONSEIL DE LA SEMAINE — 1 action concrète (ex. « déposer sur l'accord-cadre X,
   c'est du récurrent parfait pour une équipe unique »).
```

---

## 8. SCORING — comment décider GO / À ÉTUDIER / NO-GO

**NO-GO automatique si :**
- Prestation hors périmètre (sols, bureaux, espaces verts, désinfection…).
- Certification éliminatoire non détenue (ISO/MASE/Qualipropre exigée « à peine d'irrecevabilité »).
- Bilans sur 2-3 exercices exigés sans alternative par références.
- Montant sous le seuil du radar de la zone.
- Exige plusieurs équipes simultanées / astreinte permanente et pas de cotraitant possible.
- Corse ou DOM-TOM.

**À ÉTUDIER si :** pertinent mais avec un point à lever (cotraitance à monter, caution, délai serré, capacité limite).

**GO si :** dans le périmètre, dans les seuils de rentabilité, faisable à 1 équipe (ou accord-cadre souple), sans exigence éliminatoire. **Bonus GO :** accord-cadre pluriannuel, lot vitrerie avec clause d'insertion (montage NEA), marché PV bien margé.
