import Image from "next/image";
import { ArrowRight, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BENEFITS, CLINIC } from "@/lib/constants";

export function Benefits() {
  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="right">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -left-3 top-6 h-20 w-20 rounded-2xl bg-blue-100/80" aria-hidden="true" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-100">
                <Image
                  src={CLINIC.images.about}
                  alt="Tratamiento dental profesional con equipamiento moderno en clínica de Lima"
                  fill
                  quality={92}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 flex items-center gap-2 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-lg sm:-right-6">
                <Award className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-slate-900">Certificados</p>
                  <p className="text-xs text-slate-500">ISO 9001:2015</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="¿Por qué elegirnos?"
              title={
                <>
                  La diferencia que{" "}
                  <span className="gradient-text">marca la excelencia</span>
                </>
              }
              description="En DentalSmile Miraflores combinamos ciencia, arte y tecnología para transformar tu salud bucal y tu confianza."
            />

            <ul className="mt-8 space-y-4">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit.title}
                  className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900">{benefit.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Button href="#contacto" className="mt-8">
              Conoce más sobre nosotros
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
