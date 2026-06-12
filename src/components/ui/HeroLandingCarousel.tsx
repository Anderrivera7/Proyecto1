"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTA_RESERVA } from "@/lib/constants";
import type { HeroSlide } from "@/types";
import { cn } from "@/lib/utils";

type HeroLandingCarouselProps = {
  slides: HeroSlide[];
  intervalMs?: number;
};

const appleEase = [0.25, 0.1, 0.25, 1] as const;

export function HeroLandingCarousel({ slides, intervalMs = 6000 }: HeroLandingCarouselProps) {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => setCurrent(index), []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, intervalMs);
    return () => clearInterval(timer);
  }, [next, intervalMs]);

  const slide = slides[current];

  return (
    <div className="group relative h-full min-h-[inherit] w-full overflow-hidden bg-sky-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.src}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: appleEase }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={current === 0}
            quality={92}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute inset-0 bg-gradient-to-t from-sky-900/50 via-sky-900/20 to-sky-900/10"
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-24 pt-32 text-center sm:pb-28 lg:pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: appleEase }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200 sm:text-sm">
              {slide.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-[3.75rem]">
              {slide.title}
              {slide.titleLine2 && (
                <>
                  <br />
                  {slide.titleLine2}
                </>
              )}
            </h1>
            {slide.subtitle && (
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                {slide.subtitle}
              </p>
            )}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href="#nosotros" variant="white" size="lg">
                Conócenos
              </Button>
              <Button
                href={CTA_RESERVA.href}
                size="lg"
                className="border border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25"
              >
                {CTA_RESERVA.label}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-white/30 group-hover:opacity-100 sm:left-8 sm:opacity-100"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Siguiente slide"
        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-white/30 group-hover:opacity-100 sm:right-8 sm:opacity-100"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-10">
        {slides.map((s, index) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Ir al slide ${index + 1}`}
            onClick={() => goTo(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === current ? "w-8 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80",
            )}
          />
        ))}
      </div>
    </div>
  );
}
