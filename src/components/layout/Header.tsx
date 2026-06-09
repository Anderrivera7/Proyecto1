"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { CLINIC, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-slate-100 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white",
      )}
    >
      <div className="container-main flex items-center justify-between py-4">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label={`${CLINIC.name} inicio`}>
          <Logo className="h-9 w-9 shrink-0" />
          <span className="text-xl font-extrabold text-blue-600">{CLINIC.name}</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contacto" size="sm">
            Reservar cita
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden" aria-label="Navegación móvil">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button href="#contacto" className="mt-3 w-full" onClick={() => setIsOpen(false)}>
            Reservar cita
          </Button>
        </nav>
      )}
    </header>
  );
}
