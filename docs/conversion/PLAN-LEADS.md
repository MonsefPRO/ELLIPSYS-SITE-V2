# 📞 Plan Leads — transformer le trafic en appels et demandes de devis
**Objectif de Monsef (30/07/2026) : « je veux qu'on nous appelle, faire du chiffre avec le site. »**

---

## LE PRINCIPE

**Leads = Trafic × Taux de conversion.**

- Le **trafic** (SEO, contenu, Ads) met des mois à monter. On l'a lancé, il mûrit.
- Le **taux de conversion** — le % de visiteurs qui appellent ou demandent un devis — est **immédiat,
  sous notre contrôle, et se joue sur le site.** À trafic constant, doubler la conversion double les leads.

Les visiteurs restent **15 min en moyenne** (PostHog) : ils lisent, mais ne passent pas à l'action assez.
C'est le premier chantier, et le plus rentable.

---

## ✅ FAIT (30/07)

- **Téléphone cliquable dans le hero de la page d'accueil** — il n'y en avait AUCUN. Le hero proposait
  « Devis » et « Notre expertise » ; désormais « Devis » + **bouton d'appel 04 67 20 97 09**.
- **Téléphone cliquable dans le header** (sur toutes les pages) — il n'y avait que « Devis ».
- Clics tracés dans PostHog (`phone_clicked`, source hero/header) → on pourra mesurer.
- (Le sticky mobile « Appeler / Devis » existait déjà et couvre le mobile.)

---

## 🎯 PROCHAINES ACTIONS — par impact / effort

### 1. 🔴 Transformer le pop-up « newsletter » en demande de rappel — HAUTE priorité
**Aujourd'hui** le pop-up (35 s ou 55 % de scroll) capture un e-mail pour *« recevoir nos conseils
d'entretien »*. C'est une demande molle : personne qui a un toit couvert de mousse ne veut une
newsletter. Il veut un devis.
**À faire :** le passer en **« Un projet ? Laissez votre numéro, on vous rappelle sous 2 h »** →
2 champs (prénom + téléphone) → vrai lead dans le pipeline (HubSpot + conversion Ads).
**Bloquant technique :** l'API `/api/devis` exige aujourd'hui nom + e-mail + ville. Il faut la modifier
pour accepter un lead **téléphone seul** (nom + tél, e-mail et ville optionnels). Changement backend à
faire proprement et à tester (ne pas casser la collecte actuelle).
*Impact estimé : le plus fort de la liste. C'est LA machine à rappels.*

### 2. 🔴 Raccourcir le premier pas du devis — HAUTE priorité
La page `/devis` compte **~30 champs**. Pour un visiteur froid (venu du blog), c'est un mur.
**À faire :** un **« devis express » en 4 champs** (nom, tél, ville, besoin en une phrase) en tête de
page, avec le formulaire détaillé en option pour ceux qui veulent tout préciser. Le composant existe
déjà (`LandingLeadForm`, utilisé sur les landing pages) — on le réutilise.
*Impact : réduit l'abandon sur la page la plus importante du tunnel.*

### 3. 🟠 Barre de réassurance près des boutons — MOYENNE priorité
Juste sous chaque CTA : **« ⭐ Avis Google · Certifiés DGAC · Devis sous 24 h · Sans échafaudage ».**
La preuve au moment de la décision augmente le passage à l'action. (Les avis restent le point faible —
voir le plan avis — mais les certifications et le « 24 h » sont déjà des arguments.)

### 4. 🟠 Promesse de délai visible — MOYENNE
Afficher clairement **« Réponse sous 24 h »** et, si tu peux tenir l'engagement, **« rappel sous 2 h en
journée »**. Une promesse de délai chiffrée rassure et déclenche l'action.
⚠️ **Condition opérationnelle :** un lead a une durée de vie de quelques heures. **Le téléphone doit
être décroché** et les demandes traitées vite. Le meilleur site du monde ne sert à rien si personne ne
rappelle. C'est le maillon humain, et c'est décisif.

### 5. 🟢 Regarder les enregistrements de session PostHog — MESURE
Dans PostHog → « View recordings » sur la page `/devis` : voir **où** les gens bloquent, quel champ
les fait partir. On corrige sur du concret, pas au jugé. (À faire ensemble.)

### 6. 🟢 Vitesse et mobile
Vérifier le temps de chargement (surtout mobile, d'où viennent les appels). Une page lente perd des
leads avant même le premier scroll.

---

## 📊 CE QU'ON MESURE (mensuel, PostHog + Search Console)

| Indicateur | Où | Objectif |
|---|---|---|
| `phone_clicked` | PostHog | doit monter dès ce mois |
| `devis_submitted` | PostHog | le vrai lead formulaire |
| Taux de conversion (leads / visiteurs) | PostHog | le juge de paix |
| Appels reçus | ton téléphone | à noter, même à la main |

> Astuce : note chaque appel et chaque devis reçu dans un simple tableau, avec la source si le client
> le dit (« j'ai vu votre site », « Google »…). En un mois, tu sauras exactement ce qui rapporte.

---

## ⚖️ LE RAPPEL HONNÊTE

Le site peut **doubler ou tripler** le nombre de leads à trafic égal, juste en réduisant la friction —
c'est ce que font les actions 1 et 2. Mais deux choses ne dépendent pas du code :
1. **Décrocher et rappeler vite** (le maillon humain).
2. **Les avis** (la preuve sociale qui fait cliquer — toujours à 4, toujours le plafond).

Le site amène le cheval à l'eau. Ces deux-là le font boire.
