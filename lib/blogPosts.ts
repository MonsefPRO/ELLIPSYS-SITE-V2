export interface BlogPost {
  slug: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  content: string; // HTML content
}

export const blogPosts: BlogPost[] = [
  {
    slug: "demoussage-toiture-karcher-erreur",
    image: "/images/drone-toiture-intervention.png",
    category: "Toiture & Traitement",
    date: "14 Avril 2026",
    readTime: "5 min",
    badge: "bg-slate-100 text-slate-700",
    title: "Démoussage de toiture : pourquoi le karcher haute pression est une erreur coûteuse",
    excerpt: "Le nettoyage haute pression fragilise les tuiles et annule les garanties fabricant. Découvrez pourquoi nos traitements certibiocides sans pression sont la seule méthode professionnelle validée par les assureurs.",
    metaTitle: "Démoussage Toiture : Pourquoi le Karcher est une Erreur | Ellipsys",
    metaDescription: "Le nettoyage haute pression endommage vos tuiles et annule les garanties. Découvrez la méthode certibiocide sans pression pour un démoussage professionnel durable. Devis gratuit.",
    content: `
<h2>Le réflexe Karcher : une idée reçue qui coûte cher</h2>
<p>Chaque année, des milliers de propriétaires font appel à des prestataires pour nettoyer leur toiture à l'eau sous pression. C'est visible, c'est spectaculaire, et ça paraît efficace. Sauf que cette méthode est, dans la grande majorité des cas, une <strong>erreur technique grave</strong> — et les conséquences peuvent se chiffrer en milliers d'euros.</p>

<h2>Ce que la haute pression fait vraiment à vos tuiles</h2>
<p>Les tuiles en terre cuite ou en béton ont une structure poreuse. Leur imperméabilité naturelle repose sur une couche superficielle de granulats et d'enduits qui se forme au fil des années. Un jet haute pression à 150-200 bars :</p>
<ul>
  <li>Décape irrémédiablement cette couche protectrice</li>
  <li>Agrandit les micro-fissures existantes</li>
  <li>Augmente la porosité de la tuile, la rendant plus vulnérable aux intempéries suivantes</li>
  <li>Projette des mousses, lichens et débris dans les gouttières et sous les tuiles</li>
  <li>Peut déplacer, fissurer ou casser des tuiles fragiles</li>
</ul>
<p>Résultat concret : votre toiture est certes "propre" visuellement pendant quelques semaines, puis les mousses et lichens recolonisent la surface jusqu'à <strong>trois fois plus vite</strong>, car la porosité augmentée offre un terrain idéal à leur développement.</p>

<h2>La garantie fabricant annulée — et l'assurance qui ne suit pas</h2>
<p>La plupart des fabricants de tuiles (Terreal, Monier, Imerys...) précisent explicitement dans leurs conditions de garantie que tout nettoyage à haute pression <strong>annule la garantie produit</strong>. Certains assureurs habitation refusent également de prendre en charge les infiltrations survenant après un nettoyage haute pression, le considérant comme une intervention mal réalisée.</p>
<p>Autrement dit : vous payez une prestation qui dégrade votre bien, annule vos garanties et peut vous laisser seul face aux réparations.</p>

<h2>La méthode professionnelle : le traitement certibiocide</h2>
<p>Chez Ellipsys, nous n'utilisons jamais la haute pression pour le démoussage. Notre protocole est le suivant :</p>

<h3>1. Application d'un produit biocide homologué Certibiocide</h3>
<p>Le produit est appliqué directement sur l'ensemble de la surface à traiter. Il agit en profondeur pour éliminer les mousses, lichens, algues et champignons à la racine, sans aucune pression mécanique sur les tuiles. Les produits que nous utilisons sont homologués Certibiocide et conformes à la réglementation biocide européenne (BPR n°528/2012).</p>

<h3>2. Temps de pose et action naturelle</h3>
<p>Après l'application, le produit agit pendant plusieurs semaines. Les organismes végétaux meurent progressivement et se détachent naturellement sous l'effet des pluies, sans endommager la tuile.</p>

<h3>3. Rinçage basse pression si nécessaire</h3>
<p>Dans les cas où une intervention immédiate est requise (présentation d'un bien, fin de chantier), un rinçage à <strong>basse pression</strong> (maximum 30-40 bars) peut être réalisé. C'est sans commune mesure avec les 150-200 bars d'un nettoyeur haute pression classique.</p>

<h3>4. Application d'un hydrofuge (optionnel)</h3>
<p>En complément, nous proposons l'application d'un hydrofuge pénétrant invisible qui renforce l'imperméabilité de vos tuiles pour 5 à 8 ans. C'est l'équivalent d'un cirage de protection pour votre toiture.</p>

<h2>Exemple concret : la toiture d'Aimargues</h2>
<p>Lors de notre intervention sur une toiture en tuiles canal à Aimargues, le propriétaire avait une surface fortement encrassée depuis plusieurs années. En une seule journée d'intervention, sans aucune haute pression, le résultat était spectaculaire. Notre cliente Nathalie Gombart témoigne : <em>"Démoussage de ma toiture, elle est comme neuve !! Un personnel de qualité, compétent et agréable."</em></p>

<h2>Combien coûte un démoussage de toiture professionnel en 2026 ?</h2>
<p>Les tarifs varient selon la surface et l'accessibilité, mais à titre indicatif :</p>
<ul>
  <li><strong>Petite toiture (50-100 m²)</strong> : 300 à 600 €</li>
  <li><strong>Toiture moyenne (100-200 m²)</strong> : 500 à 900 €</li>
  <li><strong>Grande toiture (200 m² et +)</strong> : sur devis</li>
</ul>
<p>Ces tarifs incluent le produit biocide, l'application, la main-d'œuvre et les déplacements en Occitanie et PACA. À mettre en perspective avec le coût d'une tuile fissurée ou d'une infiltration : facilement 2 000 à 10 000 €.</p>

<h2>Notre conseil avant de prendre une décision</h2>
<p>Si un prestataire vous propose un nettoyage haute pression "100 % efficace", demandez-lui systématiquement :</p>
<ol>
  <li>Quels produits utilisez-vous ? Sont-ils homologués biocides ?</li>
  <li>Quelle pression maximale en bar ?</li>
  <li>Que se passe-t-il si une tuile se casse lors de l'intervention ?</li>
</ol>
<p>Si les réponses sont floues, passez votre chemin. Ellipsys intervient avec <strong>assurance décennale</strong>, produits certifiés et protocole documenté. Demandez votre devis gratuit — nous répondons sous 24h.</p>
    `,
  },

  {
    slug: "sable-saharien-panneaux-solaires-rendement",
    image: "/images/solairebanner.png",
    category: "Énergie Solaire",
    date: "10 Avril 2026",
    readTime: "6 min",
    badge: "bg-amber-50 text-amber-600",
    title: "Pluies de sable saharien : quel impact réel sur le rendement de vos panneaux solaires ?",
    excerpt: "Les épisodes de sable saharien peuvent réduire la production d'un parc photovoltaïque de 8 à 15%. Nous analysons les données et expliquons comment un nettoyage à l'eau osmosée restaure le rendement nominal.",
    metaTitle: "Sable Saharien et Panneaux Solaires : Impact sur le Rendement | Ellipsys",
    metaDescription: "Le sable du Sahara réduit le rendement de vos panneaux solaires de 8 à 15%. Découvrez comment un nettoyage professionnel par drone restaure votre production photovoltaïque. Devis gratuit.",
    content: `
<h2>Un phénomène météo aux conséquences économiques réelles</h2>
<p>Chaque année, entre mars et juin, le sud de la France est régulièrement touché par des épisodes de transport de sable saharien. Ce phénomène, aussi appelé "pluie de sable" ou "sable du désert", dépose une fine couche de particules ocre sur toutes les surfaces horizontales et inclinées — y compris vos panneaux photovoltaïques.</p>
<p>Ce que peu de propriétaires et exploitants savent, c'est que ce dépôt n'est pas seulement inesthétique. <strong>Il a un impact direct et mesurable sur la production électrique de votre installation.</strong></p>

<h2>Données de terrain : combien perd-on vraiment ?</h2>
<p>Selon les études menées par des instituts de recherche spécialisés (NREL, Fraunhofer ISE) et nos propres relevés terrain :</p>
<ul>
  <li>Un épisode de sable saharien modéré (dépôt &lt; 1 g/m²) réduit le rendement de <strong>5 à 8 %</strong></li>
  <li>Un épisode intense (dépôt &gt; 3 g/m²) peut entraîner des pertes de <strong>12 à 18 %</strong></li>
  <li>Sur un parc de 100 kWc, cela représente entre <strong>500 et 1 800 € de manque à gagner</strong> sur les seules semaines suivant l'épisode (au tarif de vente de 0,12 €/kWh)</li>
  <li>Les épisodes répétés, sans nettoyage intermédiaire, peuvent créer un effet d'encrassement cumulatif atteignant <strong>25 % de perte</strong> en fin de saison</li>
</ul>

<h2>Pourquoi le sable saharien est particulièrement problématique</h2>
<p>Contrairement à la poussière ordinaire, le sable du Sahara a des caractéristiques chimiques spécifiques :</p>
<ul>
  <li><strong>Granulométrie fine</strong> : les particules pénètrent dans les micro-aspérités du verre</li>
  <li><strong>Teneur élevée en argile</strong> : forme une pellicule compacte et adhérente au contact de l'eau de pluie</li>
  <li><strong>Faible solubilité</strong> : une pluie ordinaire ne suffit pas à éliminer le dépôt — elle le cimente au contraire</li>
  <li><strong>Effet "crêpe"</strong> : l'argile et les sels minéraux créent une couche semi-opaque qui filtre le rayonnement lumineux</li>
</ul>
<p>C'est pour cette raison qu'après un épisode de sable saharien suivi de pluie, vos panneaux peuvent sembler "rincés" mais ont en réalité une pellicule d'argile calcifiée qui réduit durablement leur efficacité.</p>

<h2>Comment Ellipsys restaure le rendement nominal</h2>
<p>Notre protocole de nettoyage de panneaux solaires est optimisé pour les dépôts sahariens :</p>

<h3>1. Inspection thermographique préalable (optionnelle)</h3>
<p>Avant le nettoyage, nous pouvons réaliser un survol thermographique pour identifier les cellules en surchauffe (hot spots) causées par l'encrassement différentiel. Cela permet de cibler les zones prioritaires et de vérifier l'état électrique général de l'installation.</p>

<h3>2. Nettoyage à l'eau osmosée déminéralisée</h3>
<p>C'est la clé de notre méthode. L'eau du robinet contient des minéraux (calcaire, magnésium...) qui laissent des dépôts blancs en séchant sur vos panneaux. L'eau osmosée est purifiée à 99,9 %, ce qui garantit un séchage sans résidu. Résultat : une surface parfaitement transparente, sans auréoles.</p>

<h3>3. Brossage doux basse pression</h3>
<p>Nous utilisons des brosses rotatives à poils doux montées sur perches télescopiques ou sur notre robot terrestre Rony. Aucune rayure, aucune pression excessive sur les cellules photovoltaïques.</p>

<h3>4. Rinçage final et contrôle visuel</h3>
<p>Un dernier rinçage à l'eau osmosée et un contrôle visuel systématique par notre technicien clôturent l'intervention.</p>

<h2>Fréquence recommandée selon votre localisation</h2>
<p>En Occitanie et PACA, zones les plus exposées aux épisodes sahariens, nous recommandons :</p>
<ul>
  <li><strong>Résidentiel (≤ 30 kWc)</strong> : 1 à 2 nettoyages par an</li>
  <li><strong>Professionnel (30-100 kWc)</strong> : 2 à 3 nettoyages par an</li>
  <li><strong>Parc solaire industriel (&gt; 100 kWc)</strong> : monitoring continu + nettoyage dès que le rendement baisse de plus de 5 %</li>
</ul>

<h2>Calcul de retour sur investissement</h2>
<p>Voici un exemple concret pour une installation de 50 kWc :</p>
<ul>
  <li>Production annuelle nominale : ~55 000 kWh</li>
  <li>Perte moyenne sans nettoyage annuel : ~10 % soit 5 500 kWh</li>
  <li>Manque à gagner : 5 500 × 0,12 € = <strong>660 €/an</strong></li>
  <li>Coût d'un nettoyage professionnel 50 kWc : ~350 à 500 €</li>
  <li><strong>ROI du nettoyage : positif dès la première année</strong></li>
</ul>

<h2>Conclusion</h2>
<p>Le sable saharien n'est pas une nuisance anecdotique. C'est un phénomène météorologique récurrent en Méditerranée qui a un impact financier direct et calculable sur votre production solaire. Un nettoyage professionnel annuel n'est pas un coût — c'est un investissement à ROI démontré.</p>
<p>Ellipsys intervient sur tous types d'installations photovoltaïques en Occitanie, PACA et région parisienne. Demandez votre devis gratuit — nous intervenons sous 5 jours ouvrés.</p>
    `,
  },

  {
    slug: "nettoyage-facade-drone-vs-echafaudage",
    image: "/images/Barda.png",
    category: "Facades & Bardages",
    date: "25 Mars 2026",
    readTime: "5 min",
    badge: "bg-emerald-50 text-emerald-600",
    title: "Nettoyage de façade industrielle : pourquoi le drone remplace l'échafaudage en 2026",
    excerpt: "Échafaudage, nacelle, alpinisme industriel : chaque méthode traditionnelle implique des coûts logistiques et des risques humains énormes. Découvrez comment le drone Chronos nettoie un bardage de 15 mètres en une journée.",
    metaTitle: "Nettoyage Façade par Drone vs Échafaudage : Comparatif 2026 | Ellipsys",
    metaDescription: "Drone vs échafaudage pour le nettoyage de façade : coûts, délais, risques. Découvrez pourquoi le drone Chronos est la solution la plus efficace en 2026. Devis gratuit Montpellier.",
    content: `
<h2>Le nettoyage de façade : un marché en pleine mutation</h2>
<p>Pendant des décennies, nettoyer une façade d'immeuble de bureaux, un bardage industriel ou la vitrerie d'un bâtiment commercial impliquait un choix entre trois méthodes : l'échafaudage tubulaire, la nacelle élévatrice ou les techniques de cordistes. Toutes efficaces, mais toutes coûteuses, lentes et potentiellement dangereuses.</p>
<p>Depuis 2023, une quatrième option s'impose progressivement dans le secteur du BTP et de la facility management : <strong>le nettoyage par drone.</strong> Et en 2026, cette technologie est suffisamment mature pour remplacer les méthodes traditionnelles sur la grande majorité des chantiers de façade.</p>

<h2>Comparatif : drone vs méthodes traditionnelles</h2>

<h3>1. L'échafaudage tubulaire</h3>
<ul>
  <li><strong>Avantages</strong> : Stable, adaptable, permet de nombreuses interventions simultanées</li>
  <li><strong>Inconvénients</strong> : Installation 2 à 5 jours, démontage 1 à 2 jours, emprise au sol totale (trottoir, parking bloqués), coût de location élevé (200-500 €/j pour un immeuble 4 étages), obligations réglementaires (arrêté de voirie, balisage, gardiennage)</li>
  <li><strong>Délai total pour 2 façades de 500 m²</strong> : 8 à 15 jours</li>
  <li><strong>Budget indicatif</strong> : 8 000 à 20 000 €</li>
</ul>

<h3>2. La nacelle élévatrice (PEMP)</h3>
<ul>
  <li><strong>Avantages</strong> : Flexible, ne nécessite pas d'installation fixe</li>
  <li><strong>Inconvénients</strong> : Emprise au sol indispensable (5 à 10 m), inadaptée aux sites encombrés, coût de location et transport, risque de chute opérateur, instabilité en cas de vent &gt; 45 km/h</li>
  <li><strong>Délai total pour 2 façades de 500 m²</strong> : 4 à 7 jours</li>
  <li><strong>Budget indicatif</strong> : 4 000 à 12 000 €</li>
</ul>

<h3>3. L'alpinisme industriel (cordistes)</h3>
<ul>
  <li><strong>Avantages</strong> : Aucune emprise au sol, adaptable aux façades complexes</li>
  <li><strong>Inconvénients</strong> : Risque humain maximal, formations et certifications obligatoires, impossible par vent &gt; 72 km/h, coût élevé de la main-d'œuvre spécialisée, impossible sur certaines façades (toiture inaccessible, matériaux fragiles)</li>
  <li><strong>Délai total pour 2 façades de 500 m²</strong> : 3 à 6 jours</li>
  <li><strong>Budget indicatif</strong> : 5 000 à 15 000 €</li>
</ul>

<h3>4. Le drone Chronos — méthode Ellipsys</h3>
<ul>
  <li><strong>Avantages</strong> : Zéro emprise au sol, zéro risque humain en hauteur, déployable en 30 minutes, opérationnel jusqu'à 60 km/h de vent, aucune perturbation de l'activité du site</li>
  <li><strong>Inconvénients</strong> : Nécessite une zone de décollage de 5 m², réglementé (scénario STS, plan de vol), non adapté aux façades en surplomb extrême</li>
  <li><strong>Délai total pour 2 façades de 500 m²</strong> : 1 à 2 jours</li>
  <li><strong>Budget indicatif</strong> : 2 000 à 5 000 €</li>
</ul>

<h2>Le drone Chronos : comment ça fonctionne ?</h2>
<p>Le Drone Chronos est un système propriétaire développé spécifiquement pour les interventions de nettoyage en façade. Il intègre :</p>
<ul>
  <li>Une <strong>rampe de projection</strong> à haute efficacité, alimentée par une tuyauterie reliée à une unité de traitement au sol</li>
  <li>Un <strong>système de stabilisation gyroscopique</strong> qui maintient une distance de projection constante face à la façade (±5 cm)</li>
  <li>Une <strong>caméra 4K embarquée</strong> permettant à l'opérateur de contrôler en temps réel la qualité du nettoyage</li>
  <li>Une <strong>autonomie de vol de 45 minutes</strong> par batterie, avec changement rapide à quai</li>
</ul>
<p>Le pilote au sol gère l'intégralité de l'intervention depuis un poste de contrôle sécurisé, en respectant les scénarios de vol DGAC/EASA (STS-01 ou STS-02 selon les zones).</p>

<h2>Exemple réel : les façades Scutum à Montpellier</h2>
<p>Scutum Montpellier nous a confié le nettoyage des vitrages de deux façades de leur bâtiment professionnel B2B. Contraintes : activité continue dans les locaux, impossible de bloquer les accès, résultat impeccable requis pour la présentation client.</p>
<p>Notre intervention par drone Chronos a duré <strong>2 jours</strong>, sans aucune nacelle, sans aucune emprise au sol, sans interruption de l'activité. Le responsable de site témoigne : <em>"Travail sérieux, équipe efficace et bien organisée."</em></p>

<h2>Quand le drone est-il la meilleure solution ?</h2>
<p>Le nettoyage par drone est particulièrement adapté dans ces situations :</p>
<ul>
  <li>Façades en hauteur (plus de 8 mètres) avec accès difficile</li>
  <li>Sites à activité continue (usines, hôtels, bureaux) qu'on ne peut pas fermer</li>
  <li>Zones urbaines denses sans espace pour nacelle ou échafaudage</li>
  <li>Bâtiments classés ou à valeur patrimoniale où l'intervention doit être douce</li>
  <li>Appels d'offres avec contraintes fortes de délai</li>
</ul>

<h2>Conclusion</h2>
<p>En 2026, le drone n'est plus une curiosité technologique pour le nettoyage de façade : c'est une solution mature, réglementée, assurée, et économiquement compétitive. Sur la plupart des chantiers de façade en accès difficile, il divise le budget par 2 à 4 et les délais par 3 à 7.</p>
<p>Ellipsys est pilote de drone certifié DGAC, assuré en responsabilité civile professionnelle, et intervient partout en France. Demandez votre devis — réponse sous 24h.</p>
    `,
  },

  {
    slug: "thermographie-drone-decret-tertiaire",
    image: "/images/thermographie-banner.png",
    category: "Thermographie",
    date: "5 Avril 2026",
    readTime: "7 min",
    badge: "bg-blue-50 text-blue-600",
    title: "Décret Tertiaire : comment la thermographie drone vous aide à atteindre vos objectifs de -40%",
    excerpt: "Le Décret Tertiaire impose une réduction de 40% de la consommation énergétique des bâtiments de plus de 1000m² d'ici 2030. La thermographie par drone est l'outil de diagnostic le plus rapide et le plus précis.",
    metaTitle: "Thermographie Drone et Décret Tertiaire : Guide Complet 2026 | Ellipsys",
    metaDescription: "Le Décret Tertiaire impose -40% de consommation d'ici 2030. La thermographie par drone détecte les déperditions thermiques en quelques heures. Devis gratuit en Occitanie.",
    content: `
<h2>Le Décret Tertiaire : une obligation légale aux conséquences financières concrètes</h2>
<p>Depuis le 1er octobre 2021, le Décret Tertiaire (issu de la loi ELAN) impose aux propriétaires et exploitants de bâtiments tertiaires de plus de 1 000 m² de réduire leur consommation d'énergie finale :</p>
<ul>
  <li><strong>-40 %</strong> d'ici 2030 (par rapport à une année de référence)</li>
  <li><strong>-50 %</strong> d'ici 2040</li>
  <li><strong>-60 %</strong> d'ici 2050</li>
</ul>
<p>Ces objectifs concernent les bureaux, hôtels, commerces, établissements d'enseignement, équipements sportifs... soit <strong>plus de 900 000 bâtiments en France</strong>. Le non-respect est passible d'une publication de la mise en demeure sur un "name and shame" public et peut entraîner des sanctions financières.</p>
<p>Pour atteindre ces objectifs, la première étape est toujours la même : <strong>identifier où et comment votre bâtiment perd de l'énergie.</strong></p>

<h2>La thermographie infrarouge : le diagnostic le plus précis</h2>
<p>La thermographie infrarouge consiste à photographier un bâtiment avec une caméra thermique qui capte le rayonnement infrarouge émis par chaque surface. Les zones de déperdition thermique apparaissent clairement en rouge/orange sur l'image, tandis que les zones bien isolées restent bleues/vertes.</p>
<p>Cette technique permet de localiser avec précision :</p>
<ul>
  <li>Les ponts thermiques (liaisons façade-plancher, façade-refend)</li>
  <li>Les défauts d'isolation de toiture</li>
  <li>Les infiltrations d'eau (zones d'humidité qui refroidissent différemment)</li>
  <li>Les menuiseries mal calfeutrées (portes, fenêtres)</li>
  <li>Les défauts de CVC (canalisations, gaines de ventilation)</li>
  <li>Les installations électriques en surchauffe</li>
</ul>

<h2>Pourquoi le drone change tout pour la thermographie</h2>
<p>Jusqu'à récemment, la thermographie de bâtiment se faisait depuis le sol ou depuis des nacelles. Résultat : seules les façades basses étaient accessibles, et la partie haute des bâtiments (là où les déperditions sont souvent les plus importantes) restait dans un angle mort.</p>
<p>Le drone thermique Ellipsys permet :</p>
<ul>
  <li><strong>Couverture totale</strong> : toiture, façades, acrotères, terrasses, points de jonction en hauteur — tout est accessible</li>
  <li><strong>Rapidité</strong> : un bâtiment de 5 000 m² de façade peut être inspecté en 2 à 4 heures de vol</li>
  <li><strong>Précision</strong> : résolution thermique de 0,05°C, détection des gradients de 1°C entre deux zones adjacentes</li>
  <li><strong>Documentation</strong> : rapport PDF complet avec images géolocalisées, cartographie des défauts et préconisations</li>
  <li><strong>Non-invasif</strong> : aucune intervention physique sur le bâtiment, activité normale maintenue</li>
</ul>

<h2>Comment utiliser le diagnostic thermographique pour le Décret Tertiaire</h2>

<h3>Étape 1 : Définir l'année de référence</h3>
<p>Le Décret Tertiaire exige que chaque assujetti déclare une année de référence sur la plateforme OPERAT (gérée par l'ADEME). La thermographie réalisée cette année servira de base de comparaison pour les suivantes.</p>

<h3>Étape 2 : Prioriser les travaux</h3>
<p>Le rapport thermographique Ellipsys classe les défauts par niveau de criticité et estime les économies potentielles par correction. Vous savez exactement où investir en premier pour maximiser l'impact sur votre consommation.</p>

<h3>Étape 3 : Justifier les actions auprès des assureurs et financeurs</h3>
<p>Le rapport thermographique est un document technique opposable, reconnu par les bureaux d'études et les organismes de financement (CEE, MaPrimeRénov' Copropriétés, FEDER). Il peut être joint à une demande de subvention pour financer les travaux de rénovation énergétique.</p>

<h3>Étape 4 : Contrôle post-travaux</h3>
<p>Après isolation ou remplacement des menuiseries, une seconde thermographie permet de vérifier l'efficacité des travaux et de documenter la progression vers les objectifs du Décret.</p>

<h2>Tarifs et délais</h2>
<ul>
  <li><strong>Bâtiment &lt; 1 000 m² de façade</strong> : à partir de 800 € (rapport inclus)</li>
  <li><strong>Bâtiment 1 000 à 5 000 m² de façade</strong> : 1 200 à 3 000 €</li>
  <li><strong>Parc immobilier multi-sites</strong> : tarif dégressif sur devis</li>
</ul>
<p>Délai de rendu du rapport : <strong>5 jours ouvrés</strong> après l'intervention.</p>

<h2>Conclusion</h2>
<p>La thermographie par drone est probablement le meilleur investissement qu'un propriétaire tertiaire puisse faire dans le cadre du Décret Tertiaire : en 2 à 4 heures, vous avez une cartographie complète des déperditions de votre bâtiment, avec des préconisations chiffrées. C'est le point de départ de toute stratégie de réduction énergétique efficace.</p>
<p>Ellipsys réalise des diagnostics thermographiques par drone partout en Occitanie, PACA et Île-de-France. Demandez votre devis — nous répondons sous 24h.</p>
    `,
  },

  {
    slug: "frelon-asiatique-nid-hauteur-drone",
    image: "/images/bannerfrelons.png",
    category: "Nuisibles & Sécurité",
    date: "1 Avril 2026",
    readTime: "4 min",
    badge: "bg-red-50 text-red-600",
    title: "Frelon asiatique : comment neutraliser un nid en grande hauteur sans aucun risque ?",
    excerpt: "Le frelon asiatique (Vespa velutina) est une espèce invasive classée dangereuse. Nos drones Certibiocide permettent d'intervenir sur des nids en toiture ou sous corniche sans aucune mise en danger.",
    metaTitle: "Destruction Nid Frelon Asiatique par Drone : Sans Risque | Ellipsys",
    metaDescription: "Frelon asiatique en hauteur ? Le drone Certibiocide Ellipsys neutralise les nids sous corniche, en toiture ou en arbre sans danger. Intervention rapide en Occitanie et PACA.",
    content: `
<h2>Le frelon asiatique : une espèce dangereuse et invasive</h2>
<p>Le frelon asiatique (<em>Vespa velutina nigrithorax</em>) est arrivé en France métropolitaine autour de 2004, probablement introduit accidentellement via des marchandises en provenance d'Asie du Sud-Est. Depuis, il a colonisé la quasi-totalité du territoire et est classé <strong>espèce exotique envahissante préoccupante pour l'Union Européenne</strong> par le règlement EU 1143/2014.</p>
<p>Il représente une double menace :</p>
<ul>
  <li><strong>Pour les apiculteurs et la biodiversité</strong> : il chasse les abeilles mellifères en vol stationnaire devant les ruches, décimant les colonies</li>
  <li><strong>Pour la sécurité humaine</strong> : bien que moins agressif que le frelon européen à distance, il devient extrêmement dangereux lorsque son nid est menacé. Son venin peut provoquer des réactions anaphylactiques graves même chez des personnes non allergiques</li>
</ul>

<h2>Le problème des nids en hauteur</h2>
<p>Le frelon asiatique installe ses nids dans des endroits particulièrement difficiles d'accès :</p>
<ul>
  <li>Haute couronne des arbres (10 à 20 mètres)</li>
  <li>Sous les corniches et débords de toiture</li>
  <li>Dans les combles et greniers</li>
  <li>Accrochés à des structures métalliques en hauteur (portiques, pylônes)</li>
</ul>
<p>Dans ces configurations, les méthodes traditionnelles posent un problème majeur : <strong>comment s'approcher à moins de 3 mètres du nid pour injecter l'insecticide sans risquer d'être attaqué ?</strong> Les pompiers, qui intervenaient gratuitement il y a quelques années, réorientent désormais systématiquement vers des entreprises privées. Les apiculteurs amateurs ne sont pas équipés pour de telles interventions.</p>

<h2>La solution drone : une approche radicalement différente</h2>
<p>Chez Ellipsys, nous avons développé un protocole d'intervention par drone spécifiquement adapté à la destruction de nids de frelons en hauteur. Notre approche repose sur trois principes :</p>

<h3>1. Distance de sécurité garantie</h3>
<p>Le drone opère à une distance suffisante du nid (généralement 1 à 3 mètres selon la configuration) pour éviter tout déclenchement défensif massif de la colonie. L'opérateur, lui, est à distance sécurisée au sol — généralement à plus de 30 mètres.</p>

<h3>2. Produit insecticide homologué Certibiocide</h3>
<p>Nous utilisons exclusivement des insecticides à action rapide homologués pour la destruction des hyménoptères sociaux, conformes à la réglementation biocide européenne. L'application est précise et ciblée, sans dispersion dans l'environnement.</p>

<h3>3. Intervention nocturne ou crépusculaire</h3>
<p>Pour maximiser l'efficacité, nous recommandons et réalisons l'intervention à la tombée de la nuit ou en début de nuit, lorsque la totalité des individus de la colonie est présente dans le nid et que l'activité défensive est réduite.</p>

<h2>Déroulement d'une intervention type</h2>
<ol>
  <li><strong>Prise en charge de la demande</strong> : sous 2h en saison (avril à novembre)</li>
  <li><strong>Reconnaissance visuelle</strong> : notre opérateur évalue la configuration du nid, l'environnement, les obstacles et le type de frelon</li>
  <li><strong>Vol de repérage</strong> : survol rapide pour confirmer la taille du nid et sa localisation précise</li>
  <li><strong>Application de l'insecticide</strong> : 1 à 3 passages selon la taille du nid</li>
  <li><strong>Confirmation de neutralisation</strong> : contrôle visuel 24h après si nécessaire</li>
</ol>

<h2>Tarifs indicatifs (2026)</h2>
<ul>
  <li><strong>Nid accessible (&lt; 6 m de hauteur)</strong> : 80 à 150 €</li>
  <li><strong>Nid en hauteur (6 à 15 m)</strong> : 150 à 250 €</li>
  <li><strong>Nid difficile d'accès (&gt; 15 m ou localisation complexe)</strong> : sur devis</li>
</ul>
<p>Intervention disponible en Occitanie (Hérault, Gard, Aveyron, Pyrénées-Orientales...) et PACA. <strong>Délai d'intervention : moins de 48h en saison.</strong></p>

<h2>Ne pas attendre : les nids grossissent exponentiellement</h2>
<p>Un nid de frelon asiatique peut contenir jusqu'à <strong>15 000 individus</strong> en fin de saison. Au printemps, un jeune nid ne compte que quelques dizaines d'ouvrières — l'intervention est alors rapide et peu coûteuse. En septembre, la situation est radicalement différente. Contactez-nous dès que vous repérez un nid ou une activité suspecte.</p>
    `,
  },

  {
    slug: "reglementation-drone-sts-01-sts-02",
    image: "/images/3s.png",
    category: "Réglementation DGAC",
    date: "18 Mars 2026",
    readTime: "8 min",
    badge: "bg-orange-50 text-orange-600",
    title: "Scénarios STS-01 et STS-02 : tout comprendre sur la réglementation européenne des drones",
    excerpt: "Depuis janvier 2024, les vols de drones en zone peuplée sont soumis aux scénarios européens STS. Nous détaillons les obligations déclaratives, les zones d'exclusion et comment Ellipsys gère l'intégralité de ces démarches.",
    metaTitle: "Réglementation Drone STS-01 STS-02 : Guide Complet 2026 | Ellipsys",
    metaDescription: "Scénarios STS-01 et STS-02, certification DGAC, zones interdites : tout sur la réglementation drone en France en 2026. Ellipsys gère toutes vos démarches réglementaires.",
    content: `
<h2>La réglementation drone en France : un cadre européen harmonisé</h2>
<p>Depuis le 1er janvier 2021, la réglementation relative aux drones civils est harmonisée à l'échelle européenne, sous l'égide de l'EASA (Agence de l'Union Européenne pour la Sécurité Aérienne). En France, la mise en application est supervisée par la DGAC (Direction Générale de l'Aviation Civile).</p>
<p>Ce cadre réglementaire class les opérations de drone en trois catégories :</p>
<ul>
  <li><strong>Catégorie Ouverte</strong> : vols à faible risque, sans autorisation préalable, sous conditions strictes de masse et d'altitude</li>
  <li><strong>Catégorie Spécifique</strong> : vols à risque modéré, nécessitant une autorisation ou une déclaration — c'est dans cette catégorie que s'inscrit la quasi-totalité des opérations professionnelles d'Ellipsys</li>
  <li><strong>Catégorie Certifiée</strong> : vols à risque élevé (transport de personnes, charges dangereuses), sous régime de certification complète</li>
</ul>

<h2>Les scénarios STS : qu'est-ce que c'est ?</h2>
<p>Au sein de la Catégorie Spécifique, l'EASA a défini des <strong>scénarios standard européens</strong> (STS — Standard Scenarios) qui permettent à un opérateur qualifié de voler sans demander une autorisation spécifique à chaque vol, à condition de respecter un ensemble de conditions prédéfinies.</p>
<p>Il en existe actuellement deux :</p>

<h3>STS-01 : Vol VLOS au-dessus de zones contrôlées au sol</h3>
<p><em>VLOS = Visual Line Of Sight (vue directe du drone sans aide optique)</em></p>
<p>Ce scénario autorise des vols en contact visuel direct, à basse altitude, dans des zones où le risque sol est atténué par des mesures de contrôle (balisage, équipes au sol, évacuation de zones). Il est adapté aux interventions :</p>
<ul>
  <li>Dans des propriétés privées sécurisées</li>
  <li>Sur des chantiers avec périmètre de sécurité</li>
  <li>En zone peu peuplée avec mise en sécurité du sol</li>
</ul>
<p>Conditions clés : drone de classe C5, pilote télécommandé avec certificat STS, déclaration sur la plateforme Alphatango.</p>

<h3>STS-02 : Vol VLOS au-dessus de zones peuplées</h3>
<p>Ce scénario est plus contraignant car il autorise les vols au-dessus de zones peuplées (rues, espaces publics, abords de bâtiments habités) sans évacuation préalable. C'est le scénario utilisé pour les interventions en milieu urbain dense — nettoyage de façades en centre-ville, destruction de nids dans des quartiers résidentiels, thermographie de bâtiments tertiaires.</p>
<p>Conditions clés : drone de classe C6 (résistance à la chute, design sécurisé), pilote certifié STS-02, déclaration préalable DGAC, parfois coordination avec les autorités locales.</p>

<h2>Ce qu'Ellipsys gère pour vous</h2>
<p>La conformité réglementaire est l'une des premières questions que nos clients nous posent : <em>"Est-ce que vous avez les autorisations ?"</em></p>
<p>La réponse est oui — et nous gérons l'intégralité de la démarche :</p>
<ul>
  <li>Nos pilotes sont tous titulaires du <strong>certificat de compétences télépilote</strong> délivré par la DGAC</li>
  <li>Nous disposons des qualifications <strong>STS-01 et STS-02</strong> pour les opérations en zone peuplée</li>
  <li>Chaque vol fait l'objet d'une <strong>déclaration préalable sur Alphatango</strong> (système DGAC) avec plan de vol</li>
  <li>Nous consultons systématiquement les <strong>cartes Geoportail Aviation</strong> pour vérifier les espaces aériens réglementés (CTR aéroport, zones militaires, zones à risques)</li>
  <li>Notre matériel est assuré en <strong>responsabilité civile professionnelle drone</strong></li>
  <li>Nous établissons un <strong>rapport d'intervention</strong> documentant le vol, les conditions météo et les résultats</li>
</ul>

<h2>Les zones où le drone est interdit ou restreint</h2>
<p>Certaines zones imposent des restrictions ou interdictions que nous identifions systématiquement avant chaque intervention :</p>
<ul>
  <li><strong>Zones CTR</strong> : espaces autour des aéroports (rayon variable, généralement 5-10 km) — vol possible sous conditions avec coordination préalable</li>
  <li><strong>Zones militaires et sensibles</strong> : centrales nucléaires, sites SEVESO, zones militaires — vol interdit sauf autorisation spéciale</li>
  <li><strong>Espaces naturels protégés</strong> : certains parcs naturels imposent des restrictions au survol</li>
  <li><strong>Zones temporaires</strong> : événements publics, manifestations, opérations de sécurité</li>
</ul>

<h2>Pourquoi c'est important pour votre assurance</h2>
<p>Un vol de drone réalisé hors cadre réglementaire — même pour une prestation commerciale — peut engager la responsabilité civile et pénale du donneur d'ordre. En confiant votre chantier à Ellipsys, vous vous assurez que l'intégralité de l'opération est conforme, documentée et assurée. C'est un élément clé pour votre propre couverture en cas d'incident.</p>

<h2>Conclusion</h2>
<p>La réglementation drone est complexe mais n'est pas un obstacle : c'est un cadre qui garantit la sécurité des personnes et la légitimité des opérations. Ellipsys maîtrise ce cadre depuis sa création et gère toute la partie administrative pour que vous puissiez vous concentrer sur l'essentiel : le résultat de l'intervention.</p>
<p>Vous avez un projet ? Contactez-nous pour une étude de faisabilité — nous vous confirmons sous 24h si votre site est opérable et sous quelles conditions.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
