import Link from "next/link";
import { InstagramLogo, LinkedinLogo, Phone } from "@phosphor-icons/react/dist/ssr";
import { LogoMark } from "./logo";

const CONTACT_PHONE_DISPLAY = "+34 625 52 97 58";
const CONTACT_PHONE_HREF = "tel:+34625529758";

const SOCIAL_LINKS = [
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
];

const SITE_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/precios", label: "Precios" },
  { href: "/empresa", label: "Empresa" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-3">
        <div className="flex items-start gap-3">
          <LogoMark size={32} />
          <div>
            <p className="font-mono-brand text-sm font-medium uppercase tracking-[0.2em] text-ink-50">
              Recepta Technologies
            </p>
            <p className="mt-1 text-sm text-ink-300">
              Recepción por WhatsApp, con inteligencia real.
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 text-sm" aria-label="Mapa del sitio">
          {SITE_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-ink-300 hover:text-ink-50">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm sm:items-end">
          <a
            href={CONTACT_PHONE_HREF}
            className="flex items-center gap-2 font-semibold text-ink-50 hover:text-brand-400 sm:justify-end"
          >
            <Phone size={16} weight="fill" />
            {CONTACT_PHONE_DISPLAY}
          </a>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-ink-300 hover:border-brand-400 hover:text-brand-400"
              >
                <Icon size={18} weight="fill" />
              </a>
            ))}
          </div>
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Recepta Technologies. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
