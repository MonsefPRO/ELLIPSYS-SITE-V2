"use client";
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

export function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) videoRef.current.play();
    else if (!isOpen && videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) { document.addEventListener('keydown', handleEscape); document.body.style.overflow = 'hidden'; }
    return () => { document.removeEventListener('keydown', handleEscape); document.body.style.overflow = 'unset'; };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md" onClick={onClose}>
      <div className="relative w-full max-w-7xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-14 right-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all">
          <X className="w-6 h-6" />
        </button>
        <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
          <video ref={videoRef} className="w-full aspect-video" controls controlsList="nodownload">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
