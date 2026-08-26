import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Respuestas breves y reales sobre cómo funciona Recepta.",
};

export default function PreguntasFrecuentesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 sm:py-28">
      <div className="mx-auto mb-10 max-w-xl text-center">
        <p className="font-mono-brand text-xs font-medium uppercase tracking-[0.25em] text-gold-300">
          Preguntas frecuentes
        </p>
        <h1 className="mt-3 text-3xl font-medium text-ink-50 sm:text-4xl">
          Lo que suelen preguntarnos
        </h1>
      </div>
      <FaqAccordion />
    </main>
  );
}
