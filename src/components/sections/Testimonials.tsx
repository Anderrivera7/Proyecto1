import { StarRating } from "@/components/ui/StarRating";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section id="testimonios" className="section-padding surface-section">
      <div className="container-main">
        <div className="animate-reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-500">
            Testimonios
          </p>
          <h2 className="text-headline mt-3 text-[#1d1d1f]">
            Nuestros clientes felices
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className={cn(
                "card-hover h-full rounded-2xl p-7",
                testimonial.featured
                  ? "bg-gradient-to-br from-sky-400 to-sky-500 text-white shadow-[0_12px_40px_rgba(56,189,248,0.2)]"
                  : "bg-white shadow-[0_2px_16px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04]",
              )}
            >
              <StarRating
                rating={testimonial.rating}
                className={testimonial.featured ? "[&_svg]:fill-white [&_svg]:text-white" : ""}
              />
              <blockquote
                className={cn(
                  "mt-4 text-[15px] leading-relaxed",
                  testimonial.featured ? "text-white/90" : "text-[#86868b]",
                )}
              >
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              <footer className="mt-5">
                <p className={cn("font-semibold", testimonial.featured ? "text-white" : "text-[#1d1d1f]")}>
                  {testimonial.name}
                </p>
                <p className={cn("text-sm", testimonial.featured ? "text-white/70" : "text-[#86868b]")}>
                  {testimonial.role}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
