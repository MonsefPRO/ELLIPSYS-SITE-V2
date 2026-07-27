/**
 * Données locales réelles par ville — utilisées par app/intervention/[ville]/page.tsx
 *
 * Objectif SEO : sortir du contenu « template » (même page × N villes = doorway pages,
 * pénalisées par Google). Chaque ville doit avoir un contenu factuellement unique :
 * climat local, typologie du bâti, communes réellement desservies, FAQ locale.
 *
 * Règle de rédaction : que du factuel vérifiable (géographie, climat, matériaux de
 * construction locaux). Aucune référence client inventée, aucun chiffre non sourcé.
 */

export type Facteur = { titre: string; texte: string };
export type FaqLocale = { q: string; r: string };

export type VilleData = {
  slug: string;
  nom: string;
  /** Article + nom pour les tournures « intervention à Montpellier » */
  departement: string;
  codeDept: string;
  region: string;
  /** Délai de mobilisation réaliste depuis la base de Montpellier */
  delai: string;
  /** Accroche courte pour la meta description (150 car. max une fois assemblée) */
  accroche: string;
  /** 2 paragraphes uniques — le cœur du contenu local */
  intro: string[];
  /** Ce qui dégrade spécifiquement les bâtiments ici */
  facteurs: Facteur[];
  /** Typologie du bâti local */
  typologies: string[];
  /** Quartiers cités dans le texte — longue traîne */
  quartiers: string[];
  /** Communes réellement desservies depuis cette base */
  communes: string[];
  /** 3 questions locales — alimentent aussi le JSON-LD FAQPage */
  faq: FaqLocale[];
};

export const VILLES: Record<string, VilleData> = {
  // ────────────────────────────────────────────────────────────────────────
  montpellier: {
    slug: "montpellier",
    nom: "Montpellier",
    departement: "Hérault",
    codeDept: "34",
    region: "Occitanie",
    delai: "Sous 48 h",
    accroche: "Base opérationnelle Ellipsys. Intervention sous 48 h sur Montpellier et les 31 communes de la Métropole.",
    intro: [
      "Montpellier est notre base opérationnelle : nos drones et notre robot de nettoyage partent du 159 rue de Thor, ce qui nous permet d'intervenir sur toute la Métropole sans frais de déplacement et de mobiliser une équipe sous 48 h. C'est aussi la ville où nous connaissons le mieux le bâti — et ses points faibles.",
      "Le parc immobilier montpelliérain pose trois problèmes très concrets. Les toitures en tuile canal des villas des années 1970-1990, majoritaires de Grabels à Vendargues, sont fragiles : elles ne supportent ni la circulation d'un couvreur ni le nettoyage haute pression. Les façades en béton architectonique d'Antigone et les résidences récentes de Port Marianne s'encrassent vite sous l'effet combiné de la pollution urbaine et des vents de sud-est. Enfin, l'Occitanie est la première région photovoltaïque de France : la densité d'installations résidentielles et de centrales au sol autour de Montpellier est telle que la perte de rendement liée à l'encrassement représente un manque à gagner mesurable dès la première année.",
    ],
    facteurs: [
      {
        titre: "Épisodes de sable saharien",
        texte: "Plusieurs fois par an, des remontées de poussière saharienne déposent un film minéral sur les panneaux solaires et les façades claires. Sur du photovoltaïque, c'est le facteur de perte de rendement le plus brutal et le plus rapide de la région.",
      },
      {
        titre: "Vent marin et proximité de l'étang",
        texte: "À moins de 10 km du littoral, l'air chargé en sel accélère l'encrassement des surfaces vitrées et l'apparition de voiles blanchâtres sur les enduits, en particulier sur Lattes, Pérols et Villeneuve-lès-Maguelone.",
      },
      {
        titre: "Alternance sécheresse / pluies intenses",
        texte: "Les fortes pluies d'automne après des mois secs sont le déclencheur classique des mousses et lichens sur les tuiles canal, surtout sur les versants nord peu ensoleillés du croissant nord de la métropole.",
      },
    ],
    typologies: [
      "Villas des années 1970-1990 en tuile canal",
      "Résidences récentes de Port Marianne et du Millénaire",
      "Béton architectonique du quartier Antigone",
      "Mas et bâti ancien du nord de la métropole",
      "Copropriétés des années 1960-1970",
      "Entrepôts et bâtiments logistiques de Garosud et Odysseum",
    ],
    quartiers: [
      "Écusson", "Antigone", "Port Marianne", "Les Beaux-Arts", "Hôpitaux-Facultés",
      "Aiguelongue", "Croix d'Argent", "Odysseum", "Millénaire",
    ],
    communes: [
      "Castelnau-le-Lez", "Lattes", "Pérols", "Jacou", "Clapiers", "Le Crès",
      "Montferrier-sur-Lez", "Saint-Clément-de-Rivière", "Saint-Gély-du-Fesc", "Assas",
      "Grabels", "Juvignac", "Saint-Jean-de-Védas", "Lavérune", "Pignan", "Fabrègues",
      "Vendargues", "Teyran", "Prades-le-Lez", "Baillargues", "Saussan", "Villeneuve-lès-Maguelone",
    ],
    faq: [
      {
        q: "Intervenez-vous en centre-ville de Montpellier, dans l'Écusson ?",
        r: "Oui. L'Écusson est un secteur dense, avec des rues étroites où l'installation d'un échafaudage est souvent impossible ou très coûteuse en autorisation de voirie. C'est exactement le cas d'usage du drone : nous intervenons depuis un point de décollage réduit, sans emprise au sol, sans arrêté de circulation. Les vols en zone peuplée sont couverts par nos scénarios STS-01 / STS-02 et déclarés à la DGAC.",
      },
      {
        q: "À quelle fréquence faut-il nettoyer des panneaux solaires à Montpellier ?",
        r: "Un nettoyage par an suffit dans la plupart des cas, idéalement au printemps après la saison des remontées sahariennes. Sur une installation proche d'une zone agricole, d'un axe routier ou du littoral, deux passages annuels sont plus pertinents. Nous mesurons l'encrassement avant intervention plutôt que d'appliquer une fréquence théorique.",
      },
      {
        q: "Combien coûte un démoussage de toiture à Montpellier ?",
        r: "Le prix dépend de la surface, de la pente, de l'état d'encrassement et du traitement retenu (démoussage seul ou démoussage + hydrofuge). Nous établissons un devis gratuit sous 24 h. Sur Montpellier et la Métropole, il n'y a pas de frais de déplacement puisque nous partons de notre base.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  nimes: {
    slug: "nimes",
    nom: "Nîmes",
    departement: "Gard",
    codeDept: "30",
    region: "Occitanie",
    delai: "Sous 72 h",
    accroche: "Pierre calcaire, secteur sauvegardé, épisodes cévenols : un nettoyage doux, sans échafaudage.",
    intro: [
      "Nîmes est à 50 minutes de notre base montpelliéraine : nous y intervenons régulièrement, avec une contrainte que peu de villes imposent aussi fortement — la pierre. Le calcaire nîmois, extrait historiquement des carrières de Barutel et de Lens, constitue l'essentiel du bâti ancien intra-muros. C'est un matériau tendre et poreux, incompatible avec tout nettoyage haute pression.",
      "L'autre spécificité nîmoise est réglementaire. Une grande partie du centre est en secteur sauvegardé et relève de l'avis des Architectes des Bâtiments de France. Les méthodes agressives y sont proscrites, et l'installation d'un échafaudage sur une rue étroite du quartier de l'Écusson relève souvent du parcours du combattant administratif. Un nettoyage par drone, sans emprise au sol et sans contact abrasif, répond aux deux contraintes en même temps.",
    ],
    facteurs: [
      {
        titre: "Croûtes noires sur la pierre calcaire",
        texte: "La pollution atmosphérique réagit chimiquement avec le calcaire et forme des croûtes gypseuses noires, très visibles sur les hôtels particuliers de l'Écusson. Elles se traitent par nettoyage doux à basse pression, jamais par abrasion.",
      },
      {
        titre: "Épisodes cévenols",
        texte: "Les pluies violentes d'automne, caractéristiques du Gard, saturent les toitures d'eau en quelques heures. C'est le déclencheur principal des développements de mousses sur les tuiles romanes des versants nord.",
      },
      {
        titre: "Poussières calcaires de garrigue",
        texte: "Le vent qui descend de la garrigue nîmoise transporte des particules calcaires très fines qui se déposent sur les panneaux solaires et forment, avec l'humidité matinale, un dépôt adhérent difficile à éliminer par la pluie seule.",
      },
    ],
    typologies: [
      "Hôtels particuliers en pierre calcaire de l'Écusson",
      "Mas gardois et bâti rural en périphérie",
      "Toitures en tuile romane",
      "Immeubles de rapport du XIXᵉ siècle",
      "Zones d'activité de la Ville Active et de Grézan",
      "Bâtiments agricoles et caves des Costières",
    ],
    quartiers: [
      "Écusson", "Ville Active", "Chemin Bas d'Avignon", "Costières",
      "Mas de Mingue", "Route d'Alès", "Camplanier",
    ],
    communes: [
      "Caissargues", "Milhaud", "Bouillargues", "Marguerittes", "Saint-Gilles",
      "Manduel", "Redessan", "Garons", "Rodilhan", "Poulx", "Bernis", "Générac",
      "Nages-et-Solorgues", "Bezouce", "Saint-Césaire",
    ],
    faq: [
      {
        q: "Peut-on nettoyer une façade en pierre nîmoise sans l'abîmer ?",
        r: "Oui, à condition de bannir la haute pression. Le calcaire de Barutel est tendre : un jet puissant arrache la couche superficielle, ouvre la porosité et accélère le réencrassement. Nous travaillons à basse pression avec de l'eau filtrée, sans additif abrasif — une méthode compatible avec les prescriptions des Architectes des Bâtiments de France.",
      },
      {
        q: "Faut-il une autorisation pour un nettoyage en secteur sauvegardé à Nîmes ?",
        r: "Pour un nettoyage d'entretien sans modification d'aspect, il n'y a généralement pas de déclaration préalable à déposer. En revanche, dès qu'un traitement modifie la teinte ou l'aspect de la façade (hydrofuge coloré, ravalement), l'avis de l'ABF est requis. Nous vous indiquons le cas dans lequel vous vous trouvez avant d'établir le devis.",
      },
      {
        q: "Intervenez-vous sur les bâtiments agricoles des Costières ?",
        r: "Oui, c'est même l'un de nos terrains les plus fréquents dans le Gard : toitures de caves, hangars, bâtiments d'exploitation, et surtout les installations photovoltaïques posées sur ces grandes surfaces. Notre robot traite jusqu'à 1 200 m² par heure sur du panneau, ce qui rend l'intervention rentable même sur de très grandes toitures.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  beziers: {
    slug: "beziers",
    nom: "Béziers",
    departement: "Hérault",
    codeDept: "34",
    region: "Occitanie",
    delai: "Sous 72 h",
    accroche: "Bâti vigneronne, grandes toitures agricoles et proximité du littoral : nettoyage drone et robot.",
    intro: [
      "Béziers combine deux environnements qui usent les bâtiments différemment : un centre urbain ancien, et un arrière-pays viticole aux très grandes surfaces bâties. Les maisons de maître vigneronnes et les caves coopératives du Biterrois présentent des toitures et des façades d'une ampleur qui rend l'échafaudage économiquement absurde — c'est précisément là que le drone change l'équation.",
      "La proximité de la mer, à moins de 15 km, ajoute une contrainte que l'on retrouve jusque dans les terres : l'air chargé en sel se dépose sur les enduits et les vitrages, et favorise sur les façades exposées au nord un encrassement biologique noir persistant. Sur les installations photovoltaïques posées sur hangars agricoles — très nombreuses dans le secteur — le sel se combine aux poussières de travaux viticoles pour former un dépôt que la pluie ne suffit pas à éliminer.",
    ],
    facteurs: [
      {
        titre: "Embruns salins",
        texte: "À cette distance du littoral, le sel véhiculé par le vent marin se dépose sur toutes les surfaces exposées. Il retient l'humidité et sert de support au développement de micro-organismes, notamment sur les façades peu ensoleillées.",
      },
      {
        titre: "Poussières agricoles et viticoles",
        texte: "Les travaux de vigne et les périodes de récolte remettent en suspension une quantité importante de particules terreuses qui se fixent sur les panneaux photovoltaïques et les bardages des bâtiments d'exploitation.",
      },
      {
        titre: "Vent marin chargé d'humidité",
        texte: "Le régime de vent de sud-est apporte une humidité tiède qui, sur les tuiles canal anciennes des maisons vigneronnes, accélère nettement la colonisation par les mousses et les lichens.",
      },
    ],
    typologies: [
      "Maisons de maître vigneronnes",
      "Caves coopératives et chais de grande surface",
      "Hangars agricoles équipés en photovoltaïque",
      "Toitures en tuile canal ancienne",
      "Immeubles du centre historique",
      "Zones commerciales de Montimaran et du Capiscol",
    ],
    quartiers: [
      "Centre historique", "Capiscol", "La Devèze", "Iranget-Grangette",
      "Hauts de Badones", "Montimaran",
    ],
    communes: [
      "Villeneuve-lès-Béziers", "Boujan-sur-Libron", "Sérignan", "Valras-Plage",
      "Sauvian", "Cers", "Corneilhan", "Lignan-sur-Orb", "Maraussan", "Bassan",
      "Espondeilhan", "Servian", "Vendres", "Portiragnes",
    ],
    faq: [
      {
        q: "Pouvez-vous nettoyer la toiture photovoltaïque d'un hangar agricole ?",
        r: "Oui, c'est un de nos cas d'usage principaux dans le Biterrois. Notre robot de nettoyage traite jusqu'à 1 200 m² par heure et franchit des pentes jusqu'à 25°, avec une brosse de 1,20 m qui évacue les particules vers le bas sans les redéposer. Sur un hangar de plusieurs milliers de mètres carrés, l'intervention se fait en une journée, sans arrêt d'exploitation.",
      },
      {
        q: "Le sel marin abîme-t-il vraiment les panneaux solaires ?",
        r: "Le sel n'attaque pas le verre, mais il retient l'humidité et fait adhérer les poussières. Résultat : un voile qui ne part pas à la pluie et qui, contrairement à une salissure sèche, s'épaissit avec le temps. Sur le littoral biterrois, c'est le principal facteur de perte de rendement progressive.",
      },
      {
        q: "Quel délai pour intervenir à Béziers ?",
        r: "Nous partons de Montpellier, à environ 1 h de route. Nous mobilisons une équipe sous 72 h en règle générale, et le devis est établi gratuitement sous 24 h après votre demande.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  sete: {
    slug: "sete",
    nom: "Sète",
    departement: "Hérault",
    codeDept: "34",
    region: "Occitanie",
    delai: "Sous 48 h",
    accroche: "Front de mer, embruns et Mont Saint-Clair : l'environnement le plus agressif du département.",
    intro: [
      "Sète est, de tout notre secteur d'intervention, l'environnement le plus agressif pour un bâtiment. Coincée entre la mer et l'étang de Thau, la ville subit une exposition saline permanente : ce n'est pas un épisode ponctuel comme le sable saharien, c'est une agression continue, toute l'année, sur toutes les faces exposées.",
      "Cette exposition produit des dégradations très reconnaissables. Les façades de front de mer se couvrent d'un voile blanchâtre de dépôt salin, doublé sur les orientations nord et est d'un encrassement biologique noir favorisé par l'humidité constante. Les menuiseries et fixations métalliques se corrodent. Les maisons de pêcheurs du Quartier Haut et les immeubles accrochés au Mont Saint-Clair posent en plus un problème d'accès : pentes fortes, ruelles étroites, impossibilité d'installer une nacelle. Le drone lève cette contrainte, et notre robot prend le relais sur les grandes surfaces planes.",
    ],
    facteurs: [
      {
        titre: "Exposition saline permanente",
        texte: "Contrairement aux villes de l'intérieur, Sète subit un dépôt de sel continu. Il forme un voile blanc sur les surfaces claires, retient l'humidité et sert de nutriment de fixation aux micro-organismes. Sans entretien, l'encrassement devient structurel en quelques années.",
      },
      {
        titre: "Humidité de l'étang de Thau",
        texte: "La double exposition mer / étang maintient un taux d'humidité élevé même en été. Sur les façades nord, cela se traduit par des développements d'algues noires et vertes que l'on ne rencontre pratiquement pas à 20 km dans les terres.",
      },
      {
        titre: "Accès contraints du Mont Saint-Clair",
        texte: "Les fortes pentes et les voies étroites du Quartier Haut et de la Corniche rendent la nacelle inutilisable et l'échafaudage disproportionné. Le drone décolle depuis un point réduit et travaille sans emprise au sol.",
      },
    ],
    typologies: [
      "Immeubles de front de mer et de la Corniche",
      "Maisons de pêcheurs du Quartier Haut",
      "Bâti en forte pente du Mont Saint-Clair",
      "Mas conchylicoles du bassin de Thau",
      "Bâtiments portuaires et criée",
      "Résidences balnéaires de la plage de la Corniche",
    ],
    quartiers: [
      "Mont Saint-Clair", "Quartier Haut", "Pointe Courte", "Île de Thau",
      "La Corniche", "Les Métairies",
    ],
    communes: [
      "Frontignan", "Balaruc-les-Bains", "Balaruc-le-Vieux", "Marseillan", "Mèze",
      "Bouzigues", "Poussan", "Gigean", "Vic-la-Gardiole", "Loupian", "Villeveyrac",
    ],
    faq: [
      {
        q: "Un nettoyage suffit-il à protéger une façade exposée aux embruns ?",
        r: "Le nettoyage seul retire le dépôt existant mais ne ralentit pas le suivant. Sur du front de mer sétois, nous recommandons systématiquement d'associer le nettoyage à un traitement hydrofuge : il réduit la porosité du support, limite la fixation du sel et espace nettement les entretiens suivants.",
      },
      {
        q: "Peut-on faire voler un drone au-dessus du port de Sète ?",
        r: "Les zones portuaires comportent des restrictions spécifiques, comme les abords d'aérodromes. Nous vérifions systématiquement le statut de la zone avant intervention et déposons les déclarations nécessaires auprès de la DGAC. Cette démarche fait partie de la prestation — vous n'avez aucune formalité à gérer.",
      },
      {
        q: "À quelle fréquence entretenir un bâtiment en bord de mer à Sète ?",
        r: "Plus souvent qu'à l'intérieur des terres : comptez un entretien tous les 18 à 24 mois sur les façades exposées, contre 3 à 5 ans pour un bâtiment équivalent situé à Montpellier. Les panneaux solaires en bord de mer justifient quant à eux deux nettoyages par an.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  perpignan: {
    slug: "perpignan",
    nom: "Perpignan",
    departement: "Pyrénées-Orientales",
    codeDept: "66",
    region: "Occitanie",
    delai: "Sous 72 h",
    accroche: "Tramontane, ensoleillement record et parc photovoltaïque dense : nettoyage drone et robot dans le 66.",
    intro: [
      "Perpignan cumule deux caractéristiques qui en font un terrain particulier : le département des Pyrénées-Orientales est l'un des plus ensoleillés de France, et l'un des plus ventés. Cet ensoleillement a fait du Roussillon un territoire à très forte densité photovoltaïque, des toitures résidentielles aux grandes centrales au sol du secteur de Rivesaltes et des Corbières.",
      "La tramontane, elle, est un facteur d'encrassement largement sous-estimé. Elle souffle fort et souvent, et transporte en permanence des particules fines : poussières de garrigue, sables, résidus agricoles. Sur un panneau photovoltaïque, cela signifie un réencrassement rapide entre deux pluies — et dans un département où les précipitations sont rares, la pluie ne joue pratiquement pas son rôle de nettoyage naturel. C'est le contexte où l'écart de rendement entre un parc entretenu et un parc laissé en l'état est le plus élevé.",
    ],
    facteurs: [
      {
        titre: "Tramontane et particules en suspension",
        texte: "Un vent fort et fréquent maintient en permanence des poussières en suspension. Sur du photovoltaïque, le dépôt se reforme en quelques semaines après un nettoyage — d'où l'importance de raisonner en rendement mesuré plutôt qu'en fréquence théorique.",
      },
      {
        titre: "Déficit pluviométrique",
        texte: "Les Pyrénées-Orientales connaissent un déficit de précipitations marqué. Sans pluie régulière, aucun rinçage naturel : les dépôts s'accumulent et se cimentent, ce qui rend le nettoyage tardif nettement plus difficile.",
      },
      {
        titre: "Chaleur estivale extrême",
        texte: "Les fortes chaleurs cuisent littéralement les salissures sur le verre des panneaux et sur les enduits de façade. Un dépôt laissé une saison entière adhère beaucoup plus fortement qu'un dépôt récent.",
      },
    ],
    typologies: [
      "Centrales photovoltaïques au sol du secteur de Rivesaltes",
      "Toitures en tuile catalane",
      "Mas catalans et bâti rural du Roussillon",
      "Façades enduites du centre historique",
      "Bâtiments logistiques de la zone Saint-Charles",
      "Résidences et immeubles du Moulin à Vent",
    ],
    quartiers: [
      "Centre historique", "Saint-Jacques", "Le Vernet", "Moulin à Vent",
      "Las Cobas", "Saint-Martin", "Saint-Charles",
    ],
    communes: [
      "Cabestany", "Canet-en-Roussillon", "Saint-Estève", "Rivesaltes", "Le Soler",
      "Toulouges", "Pollestres", "Bompas", "Saleilles", "Villeneuve-de-la-Raho",
      "Thuir", "Elne", "Argelès-sur-Mer",
    ],
    faq: [
      {
        q: "Le nettoyage d'une centrale photovoltaïque est-il rentable dans le 66 ?",
        r: "C'est précisément le département où il l'est le plus, pour une raison simple : le déficit de pluie. Ailleurs, une partie du dépôt part naturellement. Ici, non — il s'accumule. L'écart de production entre un parc entretenu et un parc négligé y est donc plus élevé que la moyenne nationale. Nous quantifions ce gain avant intervention plutôt que d'annoncer un pourcentage générique.",
      },
      {
        q: "La tramontane empêche-t-elle de faire voler les drones ?",
        r: "Elle impose une planification, pas un renoncement. Nos appareils sont exploités dans une plage de vent définie par le constructeur et par nos procédures. Concrètement, nous positionnons les interventions perpignanaises sur les fenêtres météo favorables — et sur les grandes surfaces planes, notre robot de nettoyage n'est de toute façon pas sensible au vent.",
      },
      {
        q: "Intervenez-vous sur les grandes centrales au sol ?",
        r: "Oui. C'est le domaine du robot plutôt que du drone : jusqu'à 1 200 m² par heure, brosse de 1,20 m, franchissement de pentes jusqu'à 25°. Sur une centrale de plusieurs hectares, nous établissons un planning par tables et un rapport de production avant / après.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  toulouse: {
    slug: "toulouse",
    nom: "Toulouse",
    departement: "Haute-Garonne",
    codeDept: "31",
    region: "Occitanie",
    delai: "Sous 5 jours ouvrés",
    accroche: "Brique foraine poreuse et humidité de la Garonne : un nettoyage sans pression, adapté au bâti toulousain.",
    intro: [
      "Toulouse impose une contrainte matériau que l'on ne rencontre nulle part ailleurs en Occitanie : la brique foraine. Cette brique de terre cuite plate, qui donne à la ville sa couleur, est extrêmement poreuse. Un nettoyage haute pression la décape en surface, ouvre ses pores et garantit un réencrassement plus rapide qu'avant l'intervention — c'est l'erreur la plus fréquente et la plus coûteuse sur le bâti toulousain.",
      "Le climat toulousain, plus humide et moins venté que celui du littoral méditerranéen, aggrave le problème. L'humidité entretenue par la Garonne et les précipitations plus régulières favorisent nettement les développements de mousses et d'algues, en particulier sur les toitures en tuile canal des versants nord et sur les soubassements de façade. Sur le plan professionnel, le bassin toulousain concentre par ailleurs un tissu aéronautique et logistique dense — Blagnac, Colomiers, Labège — dont les bardages et toitures de très grande surface relèvent typiquement de notre méthode.",
    ],
    facteurs: [
      {
        titre: "Porosité de la brique foraine",
        texte: "Matériau tendre et absorbant, la brique toulousaine ne supporte aucun nettoyage abrasif. Elle exige une basse pression et un produit compatible, sous peine d'une dégradation irréversible de la couche de surface.",
      },
      {
        titre: "Humidité de la vallée de la Garonne",
        texte: "Un taux d'humidité nettement supérieur à celui du littoral méditerranéen, qui accélère la colonisation biologique des toitures et des façades exposées au nord.",
      },
      {
        titre: "Pollens et pollution urbaine",
        texte: "Les alignements de platanes et le trafic du périphérique produisent un dépôt organique et particulaire qui s'incruste dans la porosité de la brique et des enduits.",
      },
    ],
    typologies: [
      "Façades en brique foraine du centre-ville",
      "Toitures en tuile canal des faubourgs",
      "Immeubles de rapport du XIXᵉ siècle",
      "Bâtiments aéronautiques de Blagnac et Colomiers",
      "Parcs d'activité et bureaux de Labège et Basso Cambo",
      "Résidences et copropriétés de Rangueil et des Minimes",
    ],
    quartiers: [
      "Capitole", "Saint-Cyprien", "Les Minimes", "Rangueil", "Purpan",
      "Compans-Caffarelli", "Saint-Michel", "Croix-Daurade",
    ],
    communes: [
      "Blagnac", "Colomiers", "Tournefeuille", "Balma", "Ramonville-Saint-Agne",
      "Labège", "Cugnaux", "Saint-Orens-de-Gameville", "L'Union", "Muret",
      "Plaisance-du-Touch", "Castanet-Tolosan", "Portet-sur-Garonne",
    ],
    faq: [
      {
        q: "Peut-on nettoyer une façade en brique foraine sans la dégrader ?",
        r: "Oui, mais uniquement à basse pression. La brique foraine est poreuse : un karcher retire la croûte de surface, met à nu une matière plus absorbante et provoque un réencrassement accéléré. Nous travaillons à l'eau filtrée basse pression, sans abrasion mécanique du support.",
      },
      {
        q: "Intervenez-vous sur les sites industriels de Blagnac et Colomiers ?",
        r: "Oui. Bardages de grande hauteur, toitures d'entrepôts, verrières, groupes froids en toiture : ce sont des surfaces où l'échafaudage et la nacelle imposent un arrêt d'exploitation. Notre méthode s'exécute sans emprise au sol et sans interruption d'activité, avec un plan de prévention en amont.",
      },
      {
        q: "Toulouse est à quelle distance de vos équipes ?",
        r: "Environ 2 h 20 de notre base montpelliéraine. Nous y intervenons sur projets planifiés, avec un délai de mobilisation de l'ordre de 5 jours ouvrés. Pour les chantiers de taille significative, nous regroupons les interventions sur la zone afin d'optimiser le coût de déplacement.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  marseille: {
    slug: "marseille",
    nom: "Marseille",
    departement: "Bouches-du-Rhône",
    codeDept: "13",
    region: "Provence-Alpes-Côte d'Azur",
    delai: "Sous 5 jours ouvrés",
    accroche: "Pierre calcaire, mistral et pollution portuaire : croûtes noires et accès difficiles, traités par drone.",
    intro: [
      "Marseille présente une combinaison de facteurs de dégradation rarement réunie ailleurs : la pierre calcaire du bâti ancien, la pollution atmosphérique d'une grande métropole portuaire et industrielle, et une exposition marine directe. Le résultat est bien connu des propriétaires marseillais : les fameuses croûtes noires qui recouvrent les façades en pierre du centre et du Panier.",
      "Ces croûtes ne sont pas de la saleté déposée, mais le produit d'une réaction chimique entre les polluants soufrés et le calcaire. Elles ne partent ni au jet d'eau simple ni à la brosse — et un nettoyage trop agressif emporte avec elles une partie de la pierre. La topographie marseillaise ajoute sa propre difficulté : les immeubles accrochés aux pentes d'Endoume, du Roucas Blanc ou des quartiers surplombant les calanques sont souvent inaccessibles à une nacelle. C'est là que le drone devient non pas une alternative, mais la seule option raisonnable.",
    ],
    facteurs: [
      {
        titre: "Croûtes noires sur pierre calcaire",
        texte: "Réaction chimique entre polluants atmosphériques et calcaire, formant une couche gypseuse noire adhérente. Elle exige un nettoyage doux et progressif — toute abrasion emporte le parement.",
      },
      {
        titre: "Mistral et embruns combinés",
        texte: "Le mistral projette sur les façades exposées un mélange de sel marin et de particules, qui s'incruste dans les enduits et accélère la corrosion des éléments métalliques.",
      },
      {
        titre: "Topographie et accès",
        texte: "Fortes pentes, voies étroites, immeubles en surplomb : sur une grande partie du territoire marseillais, la nacelle est impossible et l'échafaudage disproportionné en coût comme en délai d'autorisation.",
      },
    ],
    typologies: [
      "Immeubles en pierre calcaire du centre et du Panier",
      "Bâti haussmannien de la Canebière et du Prado",
      "Résidences des années 1960-1970",
      "Toitures en tuile provençale",
      "Zones logistiques de Vitrolles, Marignane et Fos",
      "Bâti en forte pente d'Endoume et du Roucas Blanc",
    ],
    quartiers: [
      "Le Panier", "Vieux-Port", "La Joliette", "Le Prado", "Endoume",
      "Roucas Blanc", "Saint-Barnabé", "La Valentine",
    ],
    communes: [
      "Aubagne", "Aix-en-Provence", "Vitrolles", "Marignane", "La Ciotat", "Cassis",
      "Allauch", "Plan-de-Cuques", "Les Pennes-Mirabeau", "Gardanne", "Septèmes-les-Vallons",
    ],
    faq: [
      {
        q: "Comment traiter les croûtes noires d'une façade marseillaise ?",
        r: "Par un nettoyage progressif à basse pression, éventuellement en plusieurs passes. L'objectif n'est pas de tout retirer d'un coup — c'est le meilleur moyen d'emporter la pierre avec la croûte — mais de dissoudre et évacuer la couche gypseuse en préservant le parement. Nous établissons systématiquement un essai sur zone témoin avant de traiter l'ensemble.",
      },
      {
        q: "Peut-on intervenir sur un immeuble en forte pente sans nacelle ?",
        r: "Oui, c'est même la raison d'être de notre méthode. Le drone décolle depuis un point réduit — une terrasse, une portion de voie, une cour — et travaille sur toute la hauteur sans emprise au sol, sans autorisation de voirie, sans immobiliser la rue.",
      },
      {
        q: "Intervenez-vous sur les plateformes logistiques de Vitrolles et Fos ?",
        r: "Oui. Toitures d'entrepôts, bardages, verrières, installations photovoltaïques en toiture : ce sont des surfaces où notre robot et nos drones travaillent sans arrêt d'exploitation, avec plan de prévention et rapport photographique de fin de chantier.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  avignon: {
    slug: "avignon",
    nom: "Avignon",
    departement: "Vaucluse",
    codeDept: "84",
    region: "Provence-Alpes-Côte d'Azur",
    delai: "Sous 5 jours ouvrés",
    accroche: "Intra-muros classé, pierre calcaire et mistral : nettoyage doux sans échafaudage ni emprise au sol.",
    intro: [
      "Avignon pose un problème que la plupart des villes n'ont pas à cette échelle : la quasi-totalité du centre est intra-muros, classé, et soumise à l'avis des Architectes des Bâtiments de France. Les rues y sont étroites, souvent piétonnes, et l'implantation d'un échafaudage suppose une autorisation de voirie longue à obtenir et coûteuse à occuper.",
      "Le bâti avignonnais est majoritairement en pierre calcaire, avec un grand nombre d'hôtels particuliers et de façades anciennes qui ne tolèrent aucun nettoyage abrasif. À cela s'ajoute le mistral, qui souffle ici avec une constance particulière et transporte poussières et particules jusque dans les cours intérieures. Notre approche — drone, basse pression, eau filtrée, zéro emprise au sol — répond simultanément à la contrainte patrimoniale, à la contrainte matériau et à la contrainte d'accès.",
    ],
    facteurs: [
      {
        titre: "Contrainte patrimoniale intra-muros",
        texte: "Secteur classé et avis ABF : les méthodes agressives sont proscrites et toute modification d'aspect est encadrée. Le nettoyage d'entretien doux est la seule voie réellement praticable.",
      },
      {
        titre: "Mistral et dépôts particulaires",
        texte: "Un vent dominant fort et régulier qui charge l'air de poussières et les dépose jusque dans les cours et sur les façades abritées, y compris celles qui ne reçoivent jamais la pluie.",
      },
      {
        titre: "Humidité de la vallée du Rhône",
        texte: "La proximité du Rhône et de la Durance entretient une humidité de fond qui favorise mousses et lichens sur les toitures anciennes et les soubassements en pierre.",
      },
    ],
    typologies: [
      "Hôtels particuliers intra-muros en pierre calcaire",
      "Remparts et bâti classé",
      "Toitures en tuile romane ancienne",
      "Immeubles de rapport du centre",
      "Mas provençaux de la ceinture verte",
      "Zones d'activité du Pontet et de Courtine",
    ],
    quartiers: [
      "Intra-muros", "Montfavet", "Saint-Chamand", "La Barbière",
      "Courtine", "Monclar",
    ],
    communes: [
      "Le Pontet", "Morières-lès-Avignon", "Villeneuve-lès-Avignon", "Sorgues",
      "Vedène", "Entraigues-sur-la-Sorgue", "Châteauneuf-de-Gadagne", "Caumont-sur-Durance",
      "Les Angles", "Rochefort-du-Gard", "Saint-Saturnin-lès-Avignon",
    ],
    faq: [
      {
        q: "Peut-on nettoyer une façade classée à Avignon ?",
        r: "Un nettoyage d'entretien qui ne modifie pas l'aspect du bâtiment ne relève généralement pas d'une autorisation préalable. Dès qu'un traitement change la teinte ou l'aspect — hydrofuge coloré, ravalement — l'avis de l'ABF devient nécessaire. Nous qualifions votre situation avant le devis pour éviter toute mauvaise surprise.",
      },
      {
        q: "Le drone est-il autorisé au-dessus de l'intra-muros ?",
        r: "Le survol de zone peuplée est encadré par les scénarios européens STS-01 et STS-02, pour lesquels nos pilotes sont qualifiés. Nous déposons les déclarations DGAC et vérifions les restrictions locales avant chaque intervention. Ces démarches sont incluses dans la prestation.",
      },
      {
        q: "Combien de temps dure une intervention sur une façade avignonnaise ?",
        r: "Sur un hôtel particulier ou un immeuble de centre-ville, comptez généralement une à deux journées, contre plusieurs semaines avec un échafaudage — délai de montage et d'autorisation de voirie compris. C'est précisément là que l'écart de coût global se creuse.",
      },
    ],
  },
};

/** Toutes les villes disposant d'un contenu local enrichi */
export const VILLES_ENRICHIES = Object.keys(VILLES);

/**
 * Villes servies sans page enrichie dédiée — conservées pour ne pas casser
 * les URLs existantes et le maillage, mais volontairement non listées ailleurs.
 */
export const VILLES_LEGACY = [
  "paris", "lyon", "bordeaux", "nice", "aix-en-provence", "toulon",
  "montauban", "narbonne", "ales", "arles", "lunel", "agde",
];

/** Liste blanche complète — toute autre URL doit renvoyer un 404 */
export const VILLES_AUTORISEES = [...VILLES_ENRICHIES, ...VILLES_LEGACY];

export function getVille(slug: string): VilleData | null {
  return VILLES[slug] ?? null;
}
