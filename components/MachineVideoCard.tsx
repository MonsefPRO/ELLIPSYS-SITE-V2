"use client";

import { useState, useRef, useEffect } from "react";
import { Play, X, Volume2, VolumeX, AlertTriangle } from "lucide-react";

interface MachineVideoCardProps {
  img: string;
  name: string;
  video?: string; // chemin vers /videos/xxx.mp4 — optionnel
}

export function MachineVideoCard({ img, name, video }: MachineVideoCardProps) {
  const [playing, setPlaying]   = useState(false);
  const [muted, setMuted]       = useState(true);
  const [ready, setReady]       = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef                = useRef<HTMLVideoElement>(null);

  // Lance la lecture dès que l'élément vidéo est monté
  useEffect(() => {
    if (!playing || !videoRef.current) return;
    setHasError(false);
    videoRef.current.load();
    videoRef.current.play().catch(() => setHasError(true));
  }, [playing]);

  // Fermer avec Échap
  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [playing]);

  function open() {
    if (!video) return;
    setPlaying(true);
    setReady(false);
    setHasError(false);
  }

  function close() {
    setPlaying(false);
    setReady(false);
    setHasError(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <div className="lg:w-1/2 min-h-[420px] bg-slate-200 rounded-3xl relative overflow-hidden group shadow-xl">

      {/* ── PHOTO (toujours visible) ─────────────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        style={{ backgroundImage: `url('${img}')` }}
      />

      {/* Dégradé sombre bas */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* ── BOUTON PLAY (visible uniquement si une vidéo existe) ─── */}
      {video && (
        <button
          onClick={open}
          aria-label={`Voir la vidéo démo de ${name}`}
          className="absolute inset-0 flex items-center justify-center group/btn"
        >
          {/* Cercle play centré */}
          <span className="
            relative flex items-center justify-center
            w-20 h-20 rounded-full
            bg-white/15 border-2 border-white/50
            backdrop-blur-md
            shadow-2xl shadow-black/40
            transition-all duration-300
            group-hover/btn:bg-white/25 group-hover/btn:scale-110 group-hover/btn:border-white/80
          ">
            <Play className="w-8 h-8 text-white fill-white translate-x-0.5" />
            {/* Anneau animé */}
            <span className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-60" />
          </span>

          {/* Label "Vidéo démo" */}
          <span className="
            absolute bottom-16 left-1/2 -translate-x-1/2
            px-3 py-1 rounded-full
            bg-black/50 backdrop-blur-sm
            text-white text-xs font-bold tracking-wide
            border border-white/20
            opacity-0 group-hover/btn:opacity-100
            transition-opacity duration-200
            whitespace-nowrap
          ">
            Vidéo démo
          </span>
        </button>
      )}

      {/* Label nom machine */}
      <div className="absolute bottom-5 left-5 pointer-events-none">
        <span className="px-4 py-2 bg-black/50 backdrop-blur-sm text-white text-sm font-bold rounded-xl border border-white/20">
          {name}
        </span>
      </div>

      {/* ── PLAYER VIDÉO (overlay inline) ───────────────────────── */}
      {video && playing && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-20">

          {/* Vidéo */}
          {!hasError && (
            <video
              ref={videoRef}
              src={video}
              muted={muted}
              playsInline
              preload="auto"
              controls={false}
              loop
              className="w-full h-full object-contain"
              onCanPlay={() => setReady(true)}
              onPlaying={() => setReady(true)}
              onError={() => setHasError(true)}
              style={{ opacity: ready ? 1 : 0, transition: "opacity 0.3s ease" }}
            />
          )}

          {/* Message d'erreur codec */}
          {hasError && (
            <div className="flex flex-col items-center gap-3 px-6 text-center">
              <AlertTriangle className="w-10 h-10 text-amber-400" />
              <p className="text-white font-bold text-sm">Format vidéo non supporté</p>
              <p className="text-slate-400 text-xs">Encodez la vidéo en H.264 (MP4) avec HandBrake.</p>
            </div>
          )}

          {/* Contrôles custom */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            {/* Mute toggle */}
            {!hasError && (
              <button
                onClick={() => setMuted((m) => !m)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-black/80 transition-colors backdrop-blur-sm"
                aria-label={muted ? "Activer le son" : "Couper le son"}
              >
                {muted
                  ? <VolumeX className="w-4 h-4" />
                  : <Volume2 className="w-4 h-4" />
                }
              </button>
            )}

            {/* Fermer */}
            <button
              onClick={close}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-red-600 transition-colors backdrop-blur-sm"
              aria-label="Fermer la vidéo"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Spinner pendant le chargement */}
          {!ready && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <span className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
