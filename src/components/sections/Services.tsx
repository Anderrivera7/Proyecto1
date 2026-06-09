import {
  Activity,
  AlignCenter,
  Baby,
  CircleDot,
  Sparkles,
  Sun,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  "align-center": AlignCenter,
  "circle-dot": CircleDot,
  sun: Sun,
  activity: Activity,
  baby: Baby,
};

export function Services() {
  return (
    <section id="servicios" className="section-padding bg-slate-50/60">
      <div className="container-main">
        <FadeIn>
          <SectionHeading
            eyebrow="Nuestros servicios"
            title={
              <>
                Tratamientos dentales{" "}
                <span className="gradient-text">de alto nivel</span>
              </>
            }
            description="Contamos con especialistas certificados en cada área para brindarte la mejor atención."
          />
        </FadeIn>

        <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] ?? Sparkles;

            return (
              <StaggerItem key={service.id}>
                <Card hover className="h-full">
                  <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
