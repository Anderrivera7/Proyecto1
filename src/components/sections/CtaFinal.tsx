import { Button } from "@/components/ui/Button";
import { CTA_RESERVA } from "@/lib/constants";

export function CtaFinal() {
  return (
    <section className="surface-section py-20 sm:py-24">
      <div className="container-main animate-reveal text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-500">
          Primera consulta gratuita
        </p>
        <h2 className="text-headline mt-4 text-[#1d1d1f]">
          Tu sonrisa perfecta
          <br />
          <span className="gradient-text">está a un clic</span>
        </h2>
        <p className="text-subhead mx-auto mt-5 max-w-md">
          Agenda hoy y recibe atención personalizada de nuestros especialistas.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={CTA_RESERVA.href} size="lg">
            {CTA_RESERVA.label}
          </Button>
          <Button href="#ubicacion" variant="outline" size="lg">
            Ver ubicación
          </Button>
        </div>
      </div>
    </section>
  );
}
