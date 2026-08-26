"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, WhatsappLogo } from "@phosphor-icons/react";
import { Logo } from "./logo";

// Numero de contacto unico del sitio -- un solo cambio aqui se propaga a
// la cabecera y (via components/site-footer.tsx) al pie de pagina. El
// mismo numero atiende llamada y WhatsApp.
const CONTACT_PHONE_HREF = "tel:+34625529758";
const WHATSAPP_HREF = "https://wa.me/34625529758";

// Pestañas reales de un sitio multi-pagina (cada una es una ruta propia,
// no un ancla dentro de una unica pagina como en la landing de venta) --
// es justo la diferencia de formato que separa este sitio corporativo de
// la landing.
const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/precios", label: "Precios" },
  { href: "/empresa", label: "Empresa" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-noir-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
        <Link href="/" aria-label="Recepta Technologies — inicio">
          <Logo size="sm" />
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive ? "font-medium text-ink-50" : "text-ink-300 hover:text-ink-50"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escríbenos por WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-ink-300 hover:border-brand-400 hover:text-brand-400"
          >
            <WhatsappLogo size={18} weight="fill" />
          </a>
          <a
            href={CONTACT_PHONE_HREF}
            className="flex items-center gap-2 rounded-lg bg-ink-50 px-4 py-2 text-sm font-semibold text-noir-950 hover:bg-white"
          >
            <Phone size={16} weight="fill" />
            Llamar ahora
          </a>
        </div>
      </div>
    </header>
  );
}
