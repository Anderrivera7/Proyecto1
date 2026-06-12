import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { CLINIC, HERO_SLIDES } from "@/lib/constants";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteDescription =
  "Clínica dental DentalSmile. Especialistas en limpieza, ortodoncia, implantes, blanqueamiento, endodoncia y odontopediatría. Agenda tu cita hoy.";

export const metadata: Metadata = {
  metadataBase: new URL(CLINIC.siteUrl),
  title: {
    default: `${CLINIC.name} | Clínica Dental Especializada`,
    template: `%s | ${CLINIC.name}`,
  },
  description: siteDescription,
  keywords: [
    "clínica dental",
    "dentista",
    "ortodoncia",
    "implantes dentales",
    "blanqueamiento dental",
    "endodoncia",
    "limpieza dental",
    "Perú",
  ],
  authors: [{ name: CLINIC.name }],
  creator: CLINIC.name,
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: CLINIC.siteUrl,
    siteName: CLINIC.name,
    title: `${CLINIC.name} | Recupera tu sonrisa con especialistas de confianza`,
    description: siteDescription,
    images: [
      {
        url: `${CLINIC.siteUrl}${HERO_SLIDES[0].src}`,
        width: 1200,
        height: 630,
        alt: "Dentista realizando evaluación dental a paciente en clínica moderna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CLINIC.name} | Clínica Dental Especializada`,
    description: siteDescription,
    images: [
      `${CLINIC.siteUrl}${HERO_SLIDES[0].src}`,
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: CLINIC.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-[#1d1d1f] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
