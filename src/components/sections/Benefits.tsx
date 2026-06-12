import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BENEFITS, CLINIC } from "@/lib/constants";

export function Benefits() {
  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-main text-center">
        <div className="animate-reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-500">
            Clínica
          </p>
          <h2 className="text-display mt-3 text-[#1d1d1f]">{CLINIC.name}</h2>
          <Button href="#contacto" variant="outline" className="mt-8">
            Conócenos
          </Button>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {BENEFITS.map((benefit) => (
            <article key={benefit.title} className="text-left lg:text-center">
              <h3 className="text-lg font-semibold tracking-[-0.01em] text-[#1d1d1f]">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#86868b] sm:text-[15px]">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] bg-sky-50 shadow-[0_16px_48px_rgba(56,189,248,0.1)] ring-1 ring-sky-100">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={CLINIC.images.about}
                alt="Equipo profesional de DentalSmile en clínica dental de Lima"
                fill
                quality={92}
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
