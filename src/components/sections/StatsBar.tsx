import {
  Award,
  Star,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { STATS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  star: Star,
  award: Award,
  zap: Zap,
};

export function StatsBar() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 py-20 sm:py-24">
      <div className="container-main">
        <FadeIn>
          <SectionHeading
            light
            title="Resultados que hablan por sí solos"
            description="Más de una década transformando sonrisas y vidas"
          />
        </FadeIn>

        <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = iconMap[stat.icon] ?? Users;

            return (
              <StaggerItem key={stat.label}>
                <article className="rounded-2xl bg-white p-6 text-center shadow-lg">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-3xl font-extrabold text-blue-600">{stat.value}</p>
                  <p className="mt-1 font-bold text-slate-900">{stat.label}</p>
                  <p className="mt-1 text-sm text-slate-500">{stat.description}</p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
