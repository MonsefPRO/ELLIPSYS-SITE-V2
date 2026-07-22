"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const IMAGES: { src: string; alt: string }[] = [
  { src: "/images/robot-centrale-sol.jpg", alt: "Robot Ellipsys nettoyant des panneaux solaires sur une centrale photovoltaïque" },
  { src: "/ares.png", alt: "Drone Ellipsys en intervention de nettoyage sans échafaudage" },
  { src: "/images/robot-vue-aerienne.jpg", alt: "Vue aérienne d'une centrale solaire entretenue par Ellipsys Solutions" },
  { src: "/images/avant-apres-montchanin.jpg", alt: "Avant après nettoyage de panneaux solaires — chantier Ellipsys à Montchanin" },
  { src: "/images/robot-produit.jpg", alt: "Robot de nettoyage de panneaux solaires Ellipsys en action" },
  { src: "/chronos.jpg", alt: "Drone Ellipsys nettoyant une façade par pulvérisation d'eau osmosée" },
  { src: "/images/robot-brosse-action.jpg", alt: "Brosse rotative du robot Ellipsys évacuant la saleté des panneaux solaires" },
  { src: "/chronos2.jpg", alt: "Drone Ellipsys en démoussage de toiture sans nacelle" },
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
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/10 via-blue-50/5 to-white/10 z-10" />
      {IMAGES.map((image, i) => {
        // Ne rend les images que si elles ont déjà été préchargées
        const shouldRender = loaded.current.has(i) || i === current;
        if (!shouldRender) return null;
        return (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-90" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              quality={70}
              className="object-cover"
              // Priorité maximale uniquement pour l'image LCP (première visible)
              // → next/image génère automatiquement le <link rel="preload">
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        );
      })}
    </div>
  );
};
