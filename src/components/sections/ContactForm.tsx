"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Clock, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { LocationMap } from "@/components/sections/LocationMap";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import {
  buildAppointmentEmailBody,
  CLINIC,
  SERVICE_OPTIONS,
} from "@/lib/constants";
import type { LeadFormData } from "@/types";

const defaultValues: LeadFormData = {
  nombre: "",
  telefono: "",
  correo: "",
  fecha_cita: "",
  servicio: "",
  mensaje: "",
};

const quickContact = [
  { icon: Phone, label: "Teléfono", value: CLINIC.phone, href: CLINIC.phoneHref },
  { icon: Mail, label: "Correo", value: CLINIC.email, href: CLINIC.emailHref },
  { icon: Clock, label: "Horarios", value: CLINIC.schedule },
];

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = (data: LeadFormData) => {
    const subject = encodeURIComponent(`Cita web - ${data.nombre.trim()}`);
    const body = encodeURIComponent(buildAppointmentEmailBody(data));
    window.location.href = `mailto:${CLINIC.email}?subject=${subject}&body=${body}`;
    setSubmitStatus("success");
    reset(defaultValues);
  };

  return (
    <section id="contacto" className="bg-white pb-0 pt-20 sm:pt-24 lg:pt-28">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-500">
            Contacto
          </p>
          <h2 className="text-display mt-4 text-[#1d1d1f]">
            ¿Tienes alguna duda?
          </h2>
          <p className="text-subhead mx-auto mt-5">
            Déjanos un mensaje y te responderemos lo antes posible.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {quickContact.map((item) => {
            const Icon = item.icon;
            const content = item.href ? (
              <a
                href={item.href}
                className="mt-1 block text-sm text-[#86868b] transition-colors hover:text-sky-500"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-1 text-sm text-[#86868b]">{item.value}</p>
            );

            return (
              <div
                key={item.label}
                className="card-hover rounded-2xl border border-black/[0.04] bg-[#fbfbfd] p-5 text-center"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
                  {item.label}
                </p>
                {content}
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-[1.75rem] border border-black/[0.04] bg-[#fbfbfd] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] sm:p-10"
          >
            <div className="space-y-4">
              <Input
                label="Nombre completo"
                placeholder="Tu nombre"
                autoComplete="name"
                error={errors.nombre?.message}
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                  maxLength: { value: 100, message: "Máximo 100 caracteres" },
                })}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Teléfono"
                  type="tel"
                  placeholder="+51 999 999 999"
                  autoComplete="tel"
                  error={errors.telefono?.message}
                  {...register("telefono", {
                    required: "El teléfono es obligatorio",
                    pattern: {
                      value: /^[\d\s+\-()]{7,20}$/,
                      message: "Teléfono inválido",
                    },
                  })}
                />
                <Input
                  label="Correo"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  autoComplete="email"
                  error={errors.correo?.message}
                  {...register("correo", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Correo inválido",
                    },
                  })}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Fecha preferida"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  error={errors.fecha_cita?.message}
                  {...register("fecha_cita", {
                    required: "Selecciona una fecha",
                  })}
                />
                <Select
                  label="Servicio"
                  options={SERVICE_OPTIONS}
                  error={errors.servicio?.message}
                  {...register("servicio", {
                    required: "Selecciona un servicio",
                  })}
                />
              </div>

              <Textarea
                label="Mensaje"
                placeholder="Cuéntanos qué necesitas..."
                error={errors.mensaje?.message}
                {...register("mensaje", {
                  maxLength: { value: 500, message: "Máximo 500 caracteres" },
                })}
              />
            </div>

            {submitStatus === "success" && (
              <p
                className="mt-5 rounded-2xl border border-sky-200/60 bg-sky-50/80 px-4 py-3 text-sm text-sky-700"
                role="status"
              >
                Solicitud preparada. Se abrió tu correo para enviarla.
              </p>
            )}

            <Button type="submit" size="lg" className="mt-8 w-full">
              <Send className="h-4 w-4" aria-hidden="true" />
              Contáctanos
            </Button>
          </form>
        </div>

        <div className="mt-4">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-500">
              Ubicación
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#1d1d1f] sm:text-3xl">
              Visítanos en Miraflores
            </h3>
          </div>
          <LocationMap />
        </div>
      </div>

      <div className="h-16 sm:h-20" aria-hidden="true" />
    </section>
  );
}
