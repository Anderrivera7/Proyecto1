import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Search,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  calendar: CalendarCheck,
  search: Search,
  stethoscope: Stethoscope,
  "check-circle": CheckCircle2,
};

export function Process() {
  return (
    <section id="proceso" className="section-padding bg-slate-50/60">
      <div className="container-main">
        <FadeIn>
          <SectionHeading
            eyebrow="Nuestro proceso"
            title={
              <>
                Simple, rápido y{" "}
                <span className="gradient-text">sin complicaciones</span>
              </>
            }
            description="Tu camino hacia una sonrisa perfecta en 4 pasos."
          />
        </FadeIn>

        <StaggerContainer className="relative mt-16">
          <div
            className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-0.5 bg-blue-200 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => {
              const Icon = iconMap[step.icon] ?? CalendarCheck;

              return (
                <StaggerItem key={step.step}>
                  <article className="relative text-center">
                    <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-blue-100" />
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-blue-100">
                        <Icon className="h-7 w-7 text-blue-600" aria-hidden="true" />
                      </div>
                      <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {step.description}
                    </p>
                  </article>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

        <FadeIn delay={0.2} className="mt-14 text-center">
          <Button href="#contacto" size="lg">
            Empieza hoy mismo
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
