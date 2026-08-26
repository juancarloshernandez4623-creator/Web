import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

const CONTACT_PHONE_HREF = "tel:+34625529758";
const WHATSAPP_HREF = "https://wa.me/34625529758";

// Mismas cifras que la landing de venta -- cifras del propio producto,
// nunca relleno generico tipo "clientes felices".
const STATS = [
  { value: "<10 s", label: "en responder el primer mensaje" },
  { value: "24/7", label: "cobertura, sin turnos ni guardias" },
  { value: "+35%", label: "citas agendadas fuera de horario" },
  { value: "0", label: "mensajes de WhatsApp sin contestar" },
];

// Tarjetas que enlazan a cada pestaña del sitio -- el equivalente, en
// formato de pagina web con navegacion real, de lo que en la landing de
// venta eran anclas dentro de una sola pagina.
const SECTION_LINKS = [
  {
    href: "/como-funciona",
    title: "Cómo funciona",
    body: "El recorrido completo: de un mensaje de WhatsApp a una cita confirmada en tu calendario.",
  },
  {
    href: "/precios",
    title: "Precios",
    body: "Una puesta en marcha y una suscripción mensual. IVA incluido, sin permanencia.",
  },
  {
    href: "/empresa",
    title: "Empresa",
    body: "Cómo personalizamos cada agente al negocio que lo usa, y qué dicen quienes ya lo tienen.",
  },
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono-brand text-xs font-medium uppercase tracking-[0.25em] text-gold-300">
            Recepción inteligente, 24/7
          </p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight text-balance text-ink-50 sm:text-5xl">
            Cada mensaje, respondido al instante.
            <br />
            Cada cita, <em className="italic text-brand-400">agendada sola</em>.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-300">
            Conecta tu WhatsApp Business y tu Google Calendar. Recepta atiende,
            resuelve dudas y agenda citas reales por ti — con el tono exacto de
            tu negocio.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT_PHONE_HREF}
              className="flex items-center gap-2 rounded-lg bg-ink-50 px-6 py-3 font-semibold text-noir-950 hover:bg-white"
            >
              <CalendarCheck size={18} weight="fill" />
              Agendar mi llamada gratuita
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
          <p className="mt-4 text-xs text-ink-500">
            Gratis y sin compromiso · 20 minutos · mismo número para llamada o WhatsApp
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-noir-900/70 p-5 sm:p-6"
            >
              <p className="font-mono-brand text-2xl font-semibold text-ink-50 sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs text-ink-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-noir-900/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-3">
            {SECTION_LINKS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-noir-900/60 p-6 transition-colors hover:border-brand-500/40"
              >
                <div>
                  <h2 className="font-semibold text-ink-50">{s.title}</h2>
                  <p className="mt-2 text-sm text-ink-300">{s.body}</p>
                </div>
                <span className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-400">
                  Ver más
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-2xl font-medium text-balance text-ink-50 sm:text-3xl">
          Cada minuto sin responder, alguien elige a otro negocio.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-ink-300">
          Cuéntanos cómo trabaja tu negocio y en un día tienes el agente
          respondiendo por ti en WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={CONTACT_PHONE_HREF}
            className="flex items-center gap-2 rounded-lg bg-ink-50 px-6 py-3 font-semibold text-noir-950 hover:bg-white"
          >
            <Phone size={18} weight="fill" />
            Hablemos
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
      </section>
    </main>
  );
}
