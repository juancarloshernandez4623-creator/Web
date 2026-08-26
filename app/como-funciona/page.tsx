import type { Metadata } from "next";
import {
  CalendarCheck,
  CheckCircle,
  ChatCircleDots,
  Question,
  Robot,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Cómo funciona",
  description:
    "De un mensaje de WhatsApp a una cita confirmada en tu calendario, sin que tengas que estar tú detrás.",
};

const REASONS = [
  {
    n: "1",
    title: "Un mensaje sin respuesta no espera",
    body: "Quien no recibe respuesta en minutos le escribe al siguiente negocio de la lista. No deja recado ni vuelve mañana: sigue de largo. Cada mensaje sin contestar es, en ese mismo minuto, un cliente hablando con la competencia.",
  },
  {
    n: "2",
    title: "No es un bot genérico, es tu negocio hablando",
    body: "Recepta se personaliza al máximo: conoce tus servicios, tus precios, tu tono y tus reglas. Responde como tú lo harías — y cuando algo se sale de lo que sabe, te pasa la conversación con el contexto ya resuelto.",
  },
  {
    n: "3",
    title: "Atiende también cuando tú no puedes",
    body: "Fuera de horario, el fin de semana, en medio de una cita con otro cliente. El WhatsApp suena y alguien responde, sin importar la hora.",
  },
  {
    n: "4",
    title: "Se adapta a cómo trabajas, no al revés",
    body: "Se conecta a tu calendario, aprende tus servicios y sigue tus propias reglas sobre cuándo pasarte una conversación. No cambias tu forma de trabajar ni aprendes un programa nuevo.",
  },
] as const;

const FLOW_WITH_STEPS = ["Mensaje recibido", "Responde al instante", "Duda resuelta"] as const;
const FLOW_WITHOUT_STEPS = [
  "Mensaje recibido",
  "Sigue sin leer",
  "El cliente espera",
  "Escribe a otro negocio",
] as const;

const FEATURES = [
  {
    icon: Robot,
    title: "Agente con tu propia voz",
    body: "Escribe el prompt, el tono y la información de tu negocio; el agente responde exactamente como tú quieres que lo haga.",
  },
  {
    icon: CalendarCheck,
    title: "Citas reales, sin choques",
    body: "Antes de ofrecer un horario, Recepta consulta tu disponibilidad real en Google Calendar — nunca una cita duplicada.",
  },
  {
    icon: ChatCircleDots,
    title: "Tú siempre al mando",
    body: "Toma el control de cualquier conversación en un clic; el agente se queda en silencio hasta que lo reactives.",
  },
] as const;

function FlowPath({
  label,
  steps,
  active,
}: {
  label: string;
  steps: readonly string[];
  active: boolean;
}) {
  return (
    <div className="flex items-start gap-4 sm:gap-6">
      <p
        className={`w-20 shrink-0 pt-[3px] text-right text-xs font-medium sm:w-28 ${
          active ? "text-brand-400" : "text-ink-500"
        }`}
      >
        {label}
      </p>
      <div className="relative min-w-0 flex-1">
        <div
          aria-hidden="true"
          className={`absolute left-0 right-0 top-[5px] h-px ${
            active ? "bg-brand-500/50" : "bg-white/15"
          }`}
        />
        <div className="relative flex items-start justify-between gap-2">
          {steps.map((step) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <span
                aria-hidden="true"
                className={`h-[11px] w-[11px] shrink-0 rounded-full border-2 border-noir-950 ${
                  active ? "bg-brand-400" : "bg-white/30"
                }`}
              />
              <span
                className={`max-w-[5.5rem] text-center text-xs leading-tight ${
                  active ? "text-ink-50" : "text-ink-500"
                }`}
              >
                {step}
              </span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-2">
            {active ? (
              <CheckCircle className="text-brand-400" size={18} weight="fill" />
            ) : (
              <Question className="text-gold-500" size={18} weight="fill" />
            )}
            <span
              className={`max-w-[5.5rem] text-center text-xs font-medium leading-tight ${
                active ? "text-brand-400" : "text-gold-500"
              }`}
            >
              {active ? "Cita agendada" : "Cliente perdido"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ComoFuncionaPage() {
  return (
    <main>
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center sm:pt-28">
        <p className="font-mono-brand text-xs font-medium uppercase tracking-[0.25em] text-gold-300">
          Cómo funciona
        </p>
        <h1 className="mt-4 text-3xl font-medium text-balance text-ink-50 sm:text-4xl">
          Del mensaje a la cita confirmada, sin que tengas que estar tú
          detrás.
        </h1>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {REASONS.map((r) => (
            <div
              key={r.n}
              className="flex gap-5 rounded-2xl border border-white/10 bg-noir-900/50 p-6"
            >
              <span className="font-mono-brand shrink-0 select-none text-4xl font-semibold text-gold-300 sm:text-5xl">
                {r.n}
              </span>
              <div>
                <h3 className="font-semibold text-ink-50">{r.title}</h3>
                <p className="mt-2 text-sm text-ink-300">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-noir-900/40">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <p className="font-mono-brand text-xs font-medium uppercase tracking-[0.25em] text-gold-300">
              Menos pasos, más citas agendadas
            </p>
            <h2 className="mt-3 text-2xl font-medium text-balance text-ink-50 sm:text-3xl">
              Esto es lo que cambia cuando Recepta responde
            </h2>
            <p className="mt-4 text-sm text-ink-300">
              Del mensaje a la cita confirmada, en la misma conversación. Sin
              esperas, sin que el cliente tenga que insistir.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <FlowPath label="Con Recepta" steps={FLOW_WITH_STEPS} active />
            <FlowPath label="Sin gestionar" steps={FLOW_WITHOUT_STEPS} active={false} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="text-2xl font-medium text-ink-50 sm:text-3xl">
            Lo que hace que se sienta como un miembro más del equipo
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-noir-900/50 p-6">
              <Icon className="text-brand-400" size={28} weight="fill" />
              <h3 className="mt-4 font-semibold text-ink-50">{title}</h3>
              <p className="mt-1 text-sm text-ink-300">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
