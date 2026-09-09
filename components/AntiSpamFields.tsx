"use client";

import { useRef } from "react";

/**
 * Champs anti-spam invisibles à ajouter dans un <form> qui poste vers /api/devis.
 *
 * - Un champ honeypot ("website") caché par CSS : les bots le remplissent
 *   automatiquement, un visiteur réel ne le voit jamais.
 * - Un horodatage de rendu ("renderedAt") : sert au serveur à calculer le
 *   temps écoulé avant l'envoi (un envoi trop rapide trahit un script).
 *
 * Usage : <AntiSpamFields ref={ref} /> dans le form, puis dans le submit :
 *   fd.append("website", ref.current!.honeypot.value);
 *   fd.append("renderedAt", String(ref.current!.renderedAt));
 * Ou plus simple avec fillAntiSpamFields(fd) ci-dessous si le form est rendu
 * au montage du composant.
 */
export function AntiSpamFields() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
    >
      <label htmlFor="website">Ne pas remplir ce champ</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

/** Horodatage de montage du formulaire, à envoyer tel quel dans le FormData. */
export function useFormRenderedAt() {
  const ref = useRef(Date.now());
  return ref.current;
}
