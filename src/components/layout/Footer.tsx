import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { HashLink } from "@/components/ui/HashLink";
import { Logo } from "@/components/ui/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import {
  CLINIC,
  CTA_RESERVA,
  FOOTER_LEGAL,
  FOOTER_SERVICES,
  NAV_LINKS,
} from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.04] bg-[#f5f5f7]">
      <div className="container-wide px-6 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <HashLink href="#inicio" className="inline-flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="text-lg font-semibold tracking-[-0.02em] text-[#1d1d1f]">
                {CLINIC.name}
              </span>
            </HashLink>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#86868b]">
              {CLINIC.tagline}. Especialistas en odontología y ortodoncia
              {CLINIC.city ? ` en ${CLINIC.district ? `${CLINIC.district}, ` : ""}${CLINIC.city}.` : "."}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={CLINIC.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#86868b] shadow-sm ring-1 ring-black/[0.04] transition-colors hover:text-sky-500"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={CLINIC.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#86868b] shadow-sm ring-1 ring-black/[0.04] transition-colors hover:text-sky-500"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1d1d1f]">
                Navegación
              </p>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <HashLink
                      href={link.href}
                      className="text-sm text-[#86868b] transition-colors hover:text-sky-500"
                    >
                      {link.label}
                    </HashLink>
                  </li>
                ))}
                <li>
                  <HashLink
                    href={CTA_RESERVA.href}
                    className="text-sm font-medium text-sky-500 transition-colors hover:text-sky-600"
                  >
                    {CTA_RESERVA.label}
                  </HashLink>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1d1d1f]">
                Servicios
              </p>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_SERVICES.map((service) => (
                  <li key={service}>
                    <HashLink
                      href="#servicios"
                      className="text-sm text-[#86868b] transition-colors hover:text-sky-500"
                    >
                      {service}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1d1d1f]">
              Contacto
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={CLINIC.phoneHref}
                  className="flex items-start gap-2.5 text-sm text-[#86868b] transition-colors hover:text-sky-500"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" aria-hidden="true" />
                  {CLINIC.phone}
                </a>
              </li>
              <li>
                <a
                  href={CLINIC.emailHref}
                  className="flex items-start gap-2.5 text-sm text-[#86868b] transition-colors hover:text-sky-500"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" aria-hidden="true" />
                  {CLINIC.email}
                </a>
              </li>
              {CLINIC.shortAddress && (
                <li className="flex items-start gap-2.5 text-sm text-[#86868b]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" aria-hidden="true" />
                  {CLINIC.shortAddress}
                </li>
              )}
              <li className="flex items-start gap-2.5 text-sm text-[#86868b]">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" aria-hidden="true" />
                {CLINIC.schedule}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-black/[0.04] bg-[#ebebed]/60">
        <div className="container-wide flex flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row sm:px-8">
          <p className="text-xs text-[#86868b]">
            © {currentYear} {CLINIC.name}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {FOOTER_LEGAL.map((item) => (
              <span key={item} className="text-xs text-[#86868b]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
