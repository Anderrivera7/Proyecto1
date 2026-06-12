"use client";

import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Search,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
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
    <section id="proceso" className="section-padding bg-white">
      <div className="container-main">
        <FadeIn>
          <SectionHeading
            eyebrow="Proceso"
            title={
              <>
                Simple, rápido y
                <br />
                <span className="gradient-text">sin complicaciones</span>
              </>
            }
            description="Tu camino hacia una sonrisa perfecta en cuatro pasos."
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PROCESS_STEPS.map((step) => {
            const Icon = iconMap[step.icon] ?? CalendarCheck;

            return (
              <StaggerItem key={step.step}>
                <article className="glass-card group h-full p-7 text-center transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-sky-500/10 transition-transform duration-500 group-hover:scale-110" />
                    <Icon className="relative h-7 w-7 text-sky-500" aria-hidden="true" />
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-[11px] font-semibold text-white">
                      <AnimatedCounter value={String(step.step)} duration={1.2} />
                    </span>
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-[#1d1d1f]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#86868b]">
                    {step.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.2} className="mt-14 text-center">
          <Button href="#contacto" size="lg">
            Empieza hoy
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
