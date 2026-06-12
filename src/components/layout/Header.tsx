"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { CLINIC, NAV_LINKS } from "@/lib/constants";
import { cn, scrollToHash } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-4",
        )}
      >
        <div
          className={cn(
            "container-wide mx-auto flex items-center justify-between px-6 transition-all duration-500 sm:px-8",
            scrolled && "glass max-w-3xl rounded-full py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.08)]",
          )}
        >
          <a
            href="#inicio"
            className="flex items-center gap-2"
            aria-label={`${CLINIC.name} inicio`}
            onClick={(e) => {
              e.preventDefault();
              scrollToHash("#inicio");
            }}
          >
            <Logo className="h-8 w-8 shrink-0" />
            <span
              className={cn(
                "text-[17px] font-semibold tracking-[-0.02em] transition-colors",
                scrolled ? "text-[#1d1d1f]" : "text-white",
              )}
            >
              {CLINIC.name}
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[13px] font-medium transition-colors duration-300",
                  scrolled ? "text-[#86868b] hover:text-[#1d1d1f]" : "text-white/85 hover:text-white",
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              href="#contacto"
              size="sm"
              variant={scrolled ? "primary" : "white"}
            >
              ¡Reserva tu cita!
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-full md:hidden",
              scrolled ? "bg-[#f5f5f7] text-[#1d1d1f]" : "bg-white/20 text-white backdrop-blur-sm",
            )}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass fixed inset-x-4 top-[4.25rem] z-40 overflow-hidden rounded-3xl shadow-lg md:hidden"
            aria-label="Navegación móvil"
          >
            <div className="p-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl px-4 py-3.5 text-[15px] font-medium text-[#1d1d1f] hover:bg-[#f5f5f7]"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHash(link.href);
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </a>
              ))}
              <Button
                href="#contacto"
                className="mt-2 w-full"
                onClick={() => setIsOpen(false)}
              >
                ¡Reserva tu cita!
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
