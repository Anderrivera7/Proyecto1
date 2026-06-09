import { Quote } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { PLATFORM_RATINGS, TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="container-main">
        <FadeIn>
          <SectionHeading
            eyebrow="Testimonios"
            title={
              <>
                Lo que dicen nuestros{" "}
                <span className="gradient-text">pacientes</span>
              </>
            }
            description="Historias reales de personas que transformaron su sonrisa con nosotros."
          />
        </FadeIn>

        <StaggerContainer className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-center">
          {TESTIMONIALS.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-7 transition-shadow",
                  testimonial.featured
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-600/25 lg:scale-105"
                    : "border border-slate-100 bg-white shadow-sm",
                )}
              >
                <Quote
                  className={cn(
                    "mb-4 h-8 w-8",
                    testimonial.featured ? "text-blue-400" : "text-blue-100",
                  )}
                  aria-hidden="true"
                />
                <StarRating
                  rating={testimonial.rating}
                  className={testimonial.featured ? "[&_svg]:fill-amber-300 [&_svg]:text-amber-300" : ""}
                />
                <blockquote
                  className={cn(
                    "mt-4 flex-1 text-sm leading-relaxed",
                    testimonial.featured ? "text-blue-50" : "text-slate-600",
                  )}
                >
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                <span
                  className={cn(
                    "mt-5 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold",
                    testimonial.featured
                      ? "bg-blue-500 text-white"
                      : "bg-blue-50 text-blue-700",
                  )}
                >
                  {testimonial.service}
                </span>
                <footer className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold",
                      testimonial.featured
                        ? "bg-blue-500 text-white"
                        : "bg-blue-100 text-blue-700",
                    )}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p
                      className={cn(
                        "font-bold",
                        testimonial.featured ? "text-white" : "text-slate-900",
                      )}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className={cn(
                        "text-sm",
                        testimonial.featured ? "text-blue-200" : "text-slate-500",
                      )}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </footer>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.15}>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-slate-100 pt-10 sm:flex-row sm:gap-12">
            {PLATFORM_RATINGS.map((item) => (
              <div key={item.platform} className="flex items-center gap-3">
                <StarRating rating={5} />
                <p className="text-sm text-slate-500">
                  <span className="font-bold text-slate-800">{item.rating}</span> en{" "}
                  {item.platform} · {item.reviews}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
