import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FEATURED_SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="servicios" className="bg-white">
      {FEATURED_SERVICES.map((service, index) => (
        <div
          key={service.id}
          className={cn(
            "border-b border-black/[0.04]",
            index % 2 === 1 ? "surface-section" : "bg-white",
          )}
        >
          <div className="container-wide grid items-center gap-10 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
            <div className={cn("w-full min-w-0", index % 2 === 1 && "lg:order-2")}>
              <div className="overflow-hidden rounded-[1.5rem] bg-sky-50 shadow-[0_16px_48px_rgba(56,189,248,0.12)] ring-1 ring-sky-100">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={92}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className={cn("w-full min-w-0", index % 2 === 1 && "lg:order-1")}>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#1d1d1f] sm:text-4xl">
                {service.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#86868b] sm:text-lg">
                {service.description}
              </p>
              <Button href="#contacto" className="mt-8">
                Ver servicio
              </Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
