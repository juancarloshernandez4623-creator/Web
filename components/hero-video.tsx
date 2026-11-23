"use client";

import { useRef, useState } from "react";
import { SpeakerSimpleHigh, SpeakerSimpleSlash } from "@phosphor-icons/react";

/**
 * Video de 66 s ("Recepta en 60 segundos") para la portada. Arranca solo,
 * en silencio y en bucle -- los navegadores bloquean el autoplay con sonido
 * y la mayoria de visitas ven los videos sin audio; todo el mensaje esta
 * en pantalla, asi que se entiende igual. El boton activa la musica y
 * reinicia desde el principio para que se oiga la pieza completa.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const video = ref.current;
    if (!video) return;
    if (muted) {
      video.currentTime = 0;
      video.muted = false;
      void video.play().catch(() => undefined);
      setMuted(false);
    } else {
      video.muted = true;
      setMuted(true);
    }
  }

  return (
    <div className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-noir-900 shadow-2xl shadow-black/40">
      <video
        ref={ref}
        className="block aspect-video w-full"
        src="/video/recepta.mp4"
        poster="/video/recepta-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Vídeo: cómo Recepta atiende el WhatsApp de una clínica fuera de horario, reserva la cita y envía el recordatorio"
      />
      <button
        type="button"
        onClick={toggleSound}
        className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-ink-50 backdrop-blur hover:bg-black/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400"
      >
        {muted ? <SpeakerSimpleSlash size={16} weight="fill" /> : <SpeakerSimpleHigh size={16} weight="fill" />}
        {muted ? "Activar sonido" : "Silenciar"}
      </button>
    </div>
  );
}
