import { HeroLandingCarousel } from "@/components/ui/HeroLandingCarousel";
import { HERO_SLIDES } from "@/lib/constants";

export function Hero() {
  return (
    <section id="inicio" className="relative h-[88vh] min-h-[560px] max-h-[900px]">
      <HeroLandingCarousel slides={HERO_SLIDES} />
    </section>
  );
}
