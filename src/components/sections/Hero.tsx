import Image from "next/image";
import {
  ArrowRight,
  Award,
  Clock,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { StarRating } from "@/components/ui/StarRating";
import { CLINIC, getWhatsAppUrl } from "@/lib/constants";

const heroCards = [
  { icon: Users, label: "+500", sub: "Pacientes satisfechos" },
  { icon: Award, label: "10", sub: "Años de experiencia" },
  { icon: Clock, label: "Atención", sub: "Inmediata" },
];

export function Hero() {
  return (
    <section id="inicio" className="bg-white pt-24 lg:pt-28">
      <div className="container-main grid items-center gap-12 pb-16 lg:grid-cols-2 lg:gap-16 lg:pb-20">
        <FadeIn className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Clínica certificada en Miraflores, Lima
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
            Recupera tu <span className="gradient-text">sonrisa</span> con
            especialistas de confianza
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-500">
            Ofrecemos tratamientos dentales de alta precisión con tecnología de
            vanguardia en el corazón de Miraflores. Tu comodidad y salud bucal
            son nuestra prioridad.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#contacto" size="lg">
              Agenda tu cita
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={getWhatsAppUrl()} variant="whatsapp" size="lg" external>
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-4 border-t border-slate-100 pt-7">
            <div className="flex -space-x-2">
              {["MG", "CR", "AM"].map((initials) => (
                <div
                  key={initials}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-xs font-bold text-blue-700"
                >
                  {initials}
                </div>
              ))}
            </div>
            <StarRating rating={5} />
            <p className="text-sm text-slate-500">
              <span className="font-bold text-slate-800">4.9/5</span> — más de 300 reseñas
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} direction="left" className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-blue-900/10 ring-1 ring-slate-100">
            <Image
              src={CLINIC.images.hero}
              alt="Dentista realizando evaluación dental a paciente en clínica de Miraflores, Lima"
              fill
              priority
              quality={92}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_15%]"
            />
          </div>

          {heroCards.map((card, index) => {
            const Icon = card.icon;
            const positions = [
              "left-0 top-8 sm:-left-6",
              "left-4 bottom-24 sm:left-0",
              "bottom-6 right-0 sm:-right-4",
            ];

            return (
              <div
                key={card.sub}
                className={`absolute ${positions[index]} flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-lg`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{card.label}</p>
                  <p className="text-xs text-slate-500">{card.sub}</p>
                </div>
              </div>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
}
