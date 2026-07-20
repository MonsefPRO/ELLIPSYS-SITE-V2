"use client";
import { useState, useEffect, useRef } from "react";

const IMAGES: { src: string; alt: string }[] = [
  { src: "/rony.jpg", alt: "Robot Ellipsys nettoyant des panneaux solaires photovoltaïques" },
  { src: "/ares.png", alt: "Drone Ellipsys en intervention de nettoyage sans échafaudage" },
  { src: "/abateur_de_frelons.png", alt: "Drone Ellipsys détruisant un nid de frelons asiatiques en hauteur" },
  { src: "/rony2.jpg", alt: "Robot de nettoyage de panneaux solaires sur centrale photovoltaïque" },
  { src: "/chronos.jpg", alt: "Drone Ellipsys nettoyant une façade par pulvérisation d'eau osmosée" },
  { src: "/rony4.jpg", alt: "Nettoyage robotisé de panneaux solaires par Ellipsys Solutions" },
  { src: "/chronos2.jpg", alt: "Drone Ellipsys en démoussage de toiture sans nacelle" },
  { src: "/rony5.jpg", alt: "Robot Ellipsys restaurant le rendement de panneaux photovoltaïques" },
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  // On garde en mémoire les indices des images déjà chargées
  // → au démarrage, seule l'image 0 est chargée (LCP)
  const loaded = useRef<Set<number>>(new Set([0]));

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % IMAGES.length;
        // Pré-charge la suivante au moment du changement
        loaded.current.add(next);
        // Et précharge celle d'après pour éviter tout blanc
        loaded.current.add((next + 1) % IMAGES.length);
        return next;
      });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {/* Filtre de marque ultra-léger */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/25 via-blue-50/20 to-white/25 z-10" />
      <div className="brand-tint" style={{zIndex: 11}} />
      {IMAGES.map((image, i) => {
        // Ne rend les images que si elles ont déjà été préchargées
        const shouldRender = loaded.current.has(i) || i === current;
        if (!shouldRender) return null;
        return (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-70" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              // Priorité maximale uniquement pour l'image LCP (première visible)
              fetchPriority={i === 0 ? "high" : "low"}
              loading={i === 0 ? "eager" : "lazy"}
              decoding={i === 0 ? "sync" : "async"}
            />
          </div>
        );
      })}
    </div>
  );
};
