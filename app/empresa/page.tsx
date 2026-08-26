import type { Metadata } from "next";
import { CheckCircle, Quotes } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Por qué confiar en Recepta: cómo personalizamos cada agente y qué dicen los negocios que ya lo usan.",
};

const BUSINESS_PROFILE_FACTS = [
  "Servicios y precios exactos de tu negocio",
  "Horario real, con tus excepciones y días cerrados",
  "Tono y estilo con el que ya le hablas a tus clientes",
  "Reglas claras de cuándo pasarte la conversación a ti",
] as const;

// Reseñas reales, publicadas sin nombre, cargo ni foto -- decision
// explicita del propio negocio.
const TESTIMONIALS = [
  "«Dejamos de perder consultas de fin de semana. Los lunes ya no arrancamos devolviendo llamadas: arrancamos con la agenda llena.»",
  "«Lo que más me sorprendió es que los clientes no se dan cuenta de que no somos nosotros. Atienden con nuestro nombre, saben los precios y resuelven. Cuando algo no lo pueden resolver, me llega ya resumido y sé exactamente de qué se trata antes de llamar.»",
  "«Simple: el teléfono dejó de ser un problema. Y por primera vez tengo registro de todo lo que se habla con nuestros clientes.»",
] as const;

export default function EmpresaPage() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20 text-center sm:pt-28">
        <p className="font-mono-brand text-xs font-medium uppercase tracking-[0.25em] text-gold-300">
          Empresa
        </p>
        <h1 className="mt-4 text-3xl font-medium text-balance text-ink-50 sm:text-4xl">
          Nos dedicamos únicamente a que tu WhatsApp nunca se quede sin
          respuesta.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-ink-300">
          Recepta Technologies nace de una idea sencilla: ningún cliente
          debería quedarse sin respuesta solo porque nadie pudo mirar el
          teléfono a tiempo. Construimos agentes de inteligencia artificial
          que se integran en el WhatsApp Business real de cada negocio,
          aprenden sus servicios, su tono y sus reglas, y atienden como lo
          haría el propio equipo — pero sin descansos, sin turnos y sin
          mensajes que se acumulan.
        </p>
      </section>

      <section className="border-y border-white/10 bg-noir-900/40">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-24 sm:grid-cols-2 sm:gap-14">
          <div>
            <p className="font-mono-brand text-xs font-medium uppercase tracking-[0.25em] text-gold-300">
              Personalización máxima
            </p>
            <h2 className="mt-3 text-2xl font-medium text-balance text-ink-50 sm:text-3xl">
              Cada agente se configura sobre tu negocio, no al revés.
            </h2>
            <p className="mt-5 text-sm text-ink-300">
              Antes del primer mensaje, el agente aprende qué vendes, cuánto
              cuesta, qué agenda maneja, qué preguntas puede responder y
              cuáles tienes que responder tú. No improvisa ni inventa: cuando
              no sabe algo, lo dice y te pasa la conversación con el
              contexto listo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-noir-900/70 p-6 sm:p-7">
            <p className="font-mono-brand text-xs uppercase tracking-[0.2em] text-ink-500">
              Lo que el agente aprende de tu negocio
            </p>
            <ul className="mt-5 flex flex-col gap-4">
              {BUSINESS_PROFILE_FACTS.map((fact) => (
                <li key={fact} className="flex items-start gap-3 text-sm text-ink-50">
                  <CheckCircle
                    className="mt-0.5 shrink-0 text-brand-400"
                    size={18}
                    weight="fill"
                  />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="text-2xl font-medium text-ink-50 sm:text-3xl">
            Lo que dicen los que ya no atienden su teléfono
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((quote) => (
            <figure
              key={quote}
              className="flex flex-col rounded-2xl border border-white/10 bg-noir-900/50 p-6"
            >
              <Quotes className="text-gold-300" size={26} weight="fill" />
              <blockquote className="mt-3 flex-1 text-sm italic text-ink-300">
                {quote}
              </blockquote>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
