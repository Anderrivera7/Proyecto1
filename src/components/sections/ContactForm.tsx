"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Input } from "@/components/ui/Input";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { CLINIC, SERVICE_OPTIONS } from "@/lib/constants";
import { createBrowserClient, isSupabaseConfigured } from "@/lib/supabase/client";
import type { LeadFormData } from "@/types";

const defaultValues: LeadFormData = {
  nombre: "",
  telefono: "",
  correo: "",
  fecha_cita: "",
  servicio: "",
  mensaje: "",
};

const contactCards = [
  {
    icon: Phone,
    label: "Llámanos",
    value: CLINIC.phone,
    href: CLINIC.phoneHref,
    note: CLINIC.schedule,
  },
  {
    icon: Mail,
    label: "Escríbenos",
    value: CLINIC.email,
    href: CLINIC.emailHref,
    note: "Respondemos en menos de 24 horas",
  },
  {
    icon: MapPin,
    label: "Visítanos",
    value: CLINIC.address,
    note: "Estacionamiento disponible",
  },
  {
    icon: Clock,
    label: "Horarios",
    value: CLINIC.schedule,
    note: "Citas de emergencia disponibles",
  },
];

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = async (data: LeadFormData) => {
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      if (!isSupabaseConfigured()) {
        throw new Error(
          "Supabase no está configurado. Añade NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY en .env.local.",
        );
      }

      const supabase = createBrowserClient();

      const { error } = await supabase.from("leads").insert([
        {
          nombre: data.nombre.trim(),
          telefono: data.telefono.trim(),
          correo: data.correo.trim(),
          fecha_cita: data.fecha_cita,
          servicio: data.servicio,
          mensaje: data.mensaje?.trim() || null,
        },
      ]);

      if (error) throw error;

      setSubmitStatus("success");
      reset(defaultValues);
    } catch (error) {
      setSubmitStatus("error");
      const message =
        error instanceof Error
          ? error.message
          : typeof error === "object" && error !== null && "message" in error
            ? String((error as { message: unknown }).message)
            : "No pudimos enviar tu solicitud. Intenta nuevamente.";
      setErrorMessage(message);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-slate-50/60">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow="Reserva tu cita"
              title={
                <>
                  Agenda tu cita{" "}
                  <span className="gradient-text">en minutos</span>
                </>
              }
              description="Completa el formulario o contáctanos directamente. Te responderemos a la brevedad para confirmar tu consulta."
            />

            <div className="mt-8 space-y-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const valueContent = card.href ? (
                  <a
                    href={card.href}
                    className="mt-1 block text-sm font-semibold text-slate-800 transition-colors hover:text-blue-600"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-semibold text-slate-800">{card.value}</p>
                );

                return (
                  <div
                    key={card.label}
                    className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        {card.label}
                      </p>
                      {valueContent}
                      <p className="mt-0.5 text-xs text-slate-500">{card.note}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg sm:p-8"
            >
              <Input
                label="Nombre completo *"
                placeholder="Tu nombre completo"
                autoComplete="name"
                error={errors.nombre?.message}
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 100,
                    message: "El nombre no puede exceder 100 caracteres",
                  },
                })}
              />

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Input
                  label="Teléfono *"
                  type="tel"
                  placeholder="+51 999 999 999"
                  autoComplete="tel"
                  error={errors.telefono?.message}
                  {...register("telefono", {
                    required: "El teléfono es obligatorio",
                    pattern: {
                      value: /^[\d\s+\-()]{7,20}$/,
                      message: "Ingresa un teléfono válido",
                    },
                  })}
                />

                <Input
                  label="Correo *"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  autoComplete="email"
                  error={errors.correo?.message}
                  {...register("correo", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Ingresa un correo electrónico válido",
                    },
                  })}
                />
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Input
                  label="Fecha preferida *"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  error={errors.fecha_cita?.message}
                  {...register("fecha_cita", {
                    required: "Selecciona una fecha deseada",
                  })}
                />

                <Select
                  label="Servicio *"
                  options={SERVICE_OPTIONS}
                  error={errors.servicio?.message}
                  {...register("servicio", {
                    required: "Selecciona un servicio",
                  })}
                />
              </div>

              <div className="mt-5">
                <Textarea
                  label="Mensaje adicional"
                  placeholder="Cuéntanos brevemente qué necesitas..."
                  error={errors.mensaje?.message}
                  {...register("mensaje", {
                    maxLength: {
                      value: 500,
                      message: "El mensaje no puede exceder 500 caracteres",
                    },
                  })}
                />
              </div>

              {submitStatus === "success" && (
                <div
                  className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
                  role="status"
                >
                  ¡Solicitud enviada con éxito! Nos comunicaremos contigo muy pronto.
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  role="alert"
                >
                  {errorMessage}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="mt-6 w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" aria-hidden="true" />
                    Solicitar cita ahora
                  </>
                )}
              </Button>

              <p className="mt-4 text-center text-xs text-slate-400">
                Al enviar aceptas nuestra política de privacidad. Respuesta en menos de 24h.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
