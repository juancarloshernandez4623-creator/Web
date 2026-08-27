import type { Metadata } from "next";
import {
  EnvelopeSimple,
  InstagramLogo,
  LinkedinLogo,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Habla con Recepta Technologies por teléfono, WhatsApp, correo o redes sociales.",
};

const CONTACT_PHONE_DISPLAY = "+34 625 52 97 58";
const CONTACT_PHONE_HREF = "tel:+34625529758";
const WHATSAPP_HREF = "https://wa.me/34625529758";
const CONTACT_EMAIL_DISPLAY = "info@usarecepta.com";
const CONTACT_EMAIL_HREF = "mailto:info@usarecepta.com";

const SOCIAL_LINKS = [
  {
    label: "WhatsApp",
    href: WHATSAPP_HREF,
    Icon: WhatsappLogo,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/recepta.vercel.app/?viewAsMember=true",
    Icon: LinkedinLogo,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/recepta_technologies?igsi=MXJwZnp4eW5ic21heA%3D%3D&utm_source=qr",
    Icon: InstagramLogo,
  },
] as const;

export default function ContactoPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-28">
      <p className="font-mono-brand text-xs font-medium uppercase tracking-[0.25em] text-gold-300">
        Contacto
      </p>
      <h1 className="mt-4 text-3xl font-medium text-balance text-ink-50 sm:text-4xl">
        Cuéntanos cómo trabaja tu negocio.
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-ink-300">
        Veinte minutos por teléfono para estimar cuántos clientes estás
        perdiendo hoy por no responder a tiempo en WhatsApp, y qué cambiaría
        si los atendiéramos nosotros. Gratis y sin compromiso.
      </p>

      <div className="mt-10 flex flex-col items-center gap-6">
        <a
          href={CONTACT_PHONE_HREF}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-noir-900/70 px-8 py-6 text-2xl font-semibold text-ink-50 hover:border-brand-500/40 sm:text-3xl"
        >
          <Phone size={28} weight="fill" className="text-brand-400" />
          {CONTACT_PHONE_DISPLAY}
        </a>

        <a
          href={CONTACT_EMAIL_HREF}
          className="flex items-center gap-2 font-medium text-ink-300 hover:text-brand-400"
        >
          <EnvelopeSimple size={18} weight="fill" />
          {CONTACT_EMAIL_DISPLAY}
        </a>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-ink-300 hover:border-brand-400 hover:text-brand-400"
            >
              <Icon size={22} weight="fill" />
            </a>
          ))}
        </div>

        <p className="text-xs text-ink-500">
          Respuesta el mismo día · configurado en 24 horas
        </p>
      </div>
    </main>
  );
}
