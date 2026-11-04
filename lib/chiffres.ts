// Chiffres clés repris sur plusieurs pages. À mettre à jour ici seulement,
// à chaque nouveau chantier documenté sur /realisations.
// Centrales au sol : Miremont 60 000 + Vitry 31 000 + Lapeyrouse-Fossat 30 000 + Montchanin 22 000.
export const SURFACE_CENTRALES_M2 = 143_000;

/** « 143 000 m² » (espace fine insécable de milliers, comme dans le reste du site). */
export const SURFACE_CENTRALES = `${SURFACE_CENTRALES_M2.toLocaleString("fr-FR").replace(/ /g, " ")} m²`;
/** « 143,000 m² » pour la version anglaise. */
export const SURFACE_CENTRALES_EN = `${SURFACE_CENTRALES_M2.toLocaleString("en-US")} m²`;
