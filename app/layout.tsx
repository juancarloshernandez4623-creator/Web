import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Public_Sans, Martian_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// Misma pareja tipografica que la landing (web/), cargada aqui una sola
// vez para todo el sitio -- a diferencia de la landing, aqui no convive
// con ningun dashboard de tema distinto, asi que no hace falta aislarla
// detras de una clase como `.marketing`.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const martianMono = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-mono-brand",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Recepta Technologies — Recepción por WhatsApp con IA",
    template: "%s · Recepta Technologies",
  },
  description:
    "Recepta Technologies desarrolla agentes de inteligencia artificial que atienden el WhatsApp de tu negocio y agendan citas reales, las 24 horas del día.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${publicSans.variable} ${martianMono.variable}`}
    >
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
