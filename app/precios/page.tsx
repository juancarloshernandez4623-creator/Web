import type { Metadata } from "next";
import { CheckCircle, Phone, WhatsappLogo, X } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Una puesta en marcha y una suscripción mensual. IVA incluido, primer mes gratis y sin permanencia.",
};

const CONTACT_PHONE_HREF = "tel:+34625529758";
const WHATSAPP_HREF = "https://wa.me/34625529758";

const PRICING = [
  {
    tag: "Pago único",
    title: "Puesta en marcha",
    price: "499,99 €",
    cadence: "instalación inicial · IVA incluido",
    billingNote: null as string | null,
    items: [
      "Conexión completa de tu WhatsApp Business y tu Google Calendar",
      "Configuración del agente con el tono y los servicios que ofreces por WhatsApp",
      "Prueba supervisada con mensajes de WhatsApp reales antes de activar",
    ],
  },
  {
    tag: "Cada mes",
    title: "Suscripción Recepta",
    price: "299,99 €",
    cadence: "al mes · IVA incluido",
    billingNote: "El primer mes no se cobra — empiezas a pagar a partir del segundo",
    items: [
      "Agente de IA activo 24/7, sin límite de conversaciones",
      "Agenda de citas conectada a tu Google Calendar",
      "Soporte continuo y ajustes de configuración incluidos",
    ],
  },
] as const;

const COMPARISON_ROWS = [
  {
    label: "Responde fuera de horario",
    recepta: true,
    sinGestionar: false,
    personaContratada: false,
  },
  {
    label: "Agenda la cita en la misma conversación",
    recepta: true,
    sinGestionar: false,
    personaContratada: true,
  },
  {
    label: "Sin turnos ni bajas que cubrir",
    recepta: true,
    sinGestionar: true,
    personaContratada: false,
  },
  {
    label: "Absorbe picos de mensajes sin aviso previo",
    recepta: true,
    sinGestionar: false,
    personaContratada: false,
  },
  {
    label: "Deja registro escrito de cada conversación",
    recepta: true,
    sinGestionar: "a veces",
    personaContratada: "a veces",
  },
] as const;

function ComparisonCell({ value }: { value: boolean | "a veces" }) {
  if (value === true) {
    return <CheckCircle className="mx-auto text-brand-400" size={20} weight="fill" />;
  }
  if (value === false) {
    return <X className="mx-auto text-ink-500" size={16} />;
  }
  return <span className="text-xs text-ink-500">{value}</span>;
}

export default function PreciosPage() {
  return (
    <main>
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-20 sm:pt-28">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="font-mono-brand text-xs font-medium uppercase tracking-[0.25em] text-gold-300">
            Precios claros, sin sorpresas
          </p>
          <h1 className="mt-3 text-3xl font-medium text-balance text-ink-50 sm:text-4xl">
            Una vez para instalarlo. Después, un abono al mes.
          </h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {PRICING.map((plan) => (
            <div
              key={plan.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-noir-900/70 p-7"
            >
              <span className="font-mono-brand w-fit rounded-full bg-gold-500/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gold-300">
                {plan.tag}
              </span>
              <h2 className="mt-4 text-lg font-semibold text-ink-50">{plan.title}</h2>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-ink-50">{plan.price}</span>
                <span className="text-sm text-ink-300">{plan.cadence}</span>
              </p>
              {plan.billingNote ? (
                <p className="mt-2 text-xs font-medium text-gold-300">{plan.billingNote}</p>
              ) : null}
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-300">
                    <CheckCircle
                      className="mt-0.5 shrink-0 text-brand-400"
                      size={18}
                      weight="fill"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-noir-900/40">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <h2 className="text-2xl font-medium text-balance text-ink-50 sm:text-3xl">
              Cómo nos comparamos
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[540px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-left font-normal text-ink-500"></th>
                  <th className="font-mono-brand bg-gold-500/10 p-4 text-center text-xs uppercase tracking-wide text-gold-300">
                    Recepta
                  </th>
                  <th className="p-4 text-center text-xs font-normal text-ink-500">
                    Sin gestionar
                  </th>
                  <th className="p-4 text-center text-xs font-normal text-ink-500">
                    Persona contratada
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-white/5 last:border-0">
                    <td className="p-4 text-ink-50">{row.label}</td>
                    <td className="bg-gold-500/5 p-4">
                      <ComparisonCell value={row.recepta} />
                    </td>
                    <td className="p-4">
                      <ComparisonCell value={row.sinGestionar} />
                    </td>
                    <td className="p-4">
                      <ComparisonCell value={row.personaContratada} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <div className="max-w-md mx-auto">
          <p className="font-semibold text-ink-50">¿Todavía no lo decides?</p>
          <p className="mt-1 text-ink-50">Agenda una llamada con nosotros 👇</p>
          <p className="mt-3 text-sm text-ink-300">
            Veinte minutos para estimar cuántos clientes estás perdiendo hoy
            por no responder a tiempo en WhatsApp, y qué cambiaría si los
            atendiéramos nosotros.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={CONTACT_PHONE_HREF}
            className="flex items-center gap-2 rounded-lg bg-ink-50 px-6 py-3 font-semibold text-noir-950 hover:bg-white"
          >
            <Phone size={18} weight="fill" />
            Hablemos y lo activamos
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 font-semibold text-ink-50 hover:border-brand-400 hover:text-brand-400"
          >
            <WhatsappLogo size={18} weight="fill" />
            Escríbenos por WhatsApp
          </a>
        </div>
        <p className="mt-3 text-xs text-ink-500">
          Respuesta el mismo día · configurado en 48 horas
        </p>
      </section>
    </main>
  );
}
