import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { getWhatsAppUrl } from "@/lib/constants";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="container-main relative text-center">
        <FadeIn>
          <span className="mb-5 inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-100">
            Transforma tu sonrisa hoy
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Tu nueva sonrisa comienza hoy
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Da el primer paso hacia la sonrisa que siempre soñaste. Primera
            consulta de diagnóstico sin costo.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#contacto" variant="white" size="lg">
              Reservar ahora
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              href={getWhatsAppUrl()}
              variant="outline"
              size="lg"
              external
              className="border-white/40 text-white hover:border-white hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Consultar por WhatsApp
            </Button>
          </div>

          <p className="mt-8 text-sm text-blue-200">
            Sin compromiso · Primera consulta gratuita · Respuesta en menos de 24h
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
