import { Benefits } from "@/components/sections/Benefits";
import { ContactForm } from "@/components/sections/ContactForm";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { StatsBar } from "@/components/sections/StatsBar";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Benefits />
      <StatsBar />
      <Testimonials />
      <Process />
      <CtaFinal />
      <ContactForm />
    </>
  );
}
