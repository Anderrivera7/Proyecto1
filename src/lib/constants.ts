import type {
  Benefit,
  FeaturedService,
  HeroSlide,
  PlatformRating,
  ProcessStep,
  Service,
  StatItem,
  Testimonial,
} from "@/types";

export const CLINIC = {
  name: "DentalSmile",
  tagline: "Tu sonrisa, nuestra prioridad",
  city: "Lima",
  district: "Miraflores",
  country: "Perú",
  phone: "+51 999 999 999",
  phoneHref: "tel:+51999999999",
  phoneSecondary: "(01) 456 7890",
  phoneSecondaryHref: "tel:+5114567890",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "51999999999",
  whatsappMessage:
    "Hola, me gustaría agendar una cita en DentalSmile Miraflores. ¿Tienen disponibilidad?",
  email: "citas@dentalsmile.pe",
  emailHref: "mailto:citas@dentalsmile.pe",
  address: "Av. Arequipa 1234, Miraflores, Lima, Perú",
  shortAddress: "Av. Arequipa 1234, Miraflores, Lima",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  schedule: "Lun – Sáb: 8:00 – 20:00 · Dom: 9:00 – 14:00",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Arequipa+1234,+Miraflores,+Lima,+Perú",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=Av.+Arequipa+1234,+Miraflores,+Lima,+Per%C3%BA&hl=es&z=16&output=embed",
  wazeUrl: "https://waze.com/ul?q=Av.+Arequipa+1234,+Miraflores,+Lima,+Perú&navigate=yes",
  images: {
    carousel: [
      {
        src: "/images/hero-1.png",
        alt: "Dentista realizando evaluación dental a paciente en clínica moderna",
      },
      {
        src: "/images/hero-2.png",
        alt: "Equipo de odontólogos profesionales en clínica dental",
      },
      {
        src: "/images/hero-3.png",
        alt: "Especialista dental atendiendo a paciente con equipamiento de última generación",
      },
    ],
    about: "/images/about-team.png",
  },
  social: {
    facebook: "https://facebook.com/dentalsmile.pe",
    instagram: "https://instagram.com/dentalsmile.pe",
    whatsapp: "https://wa.me/51999999999",
  },
} as const;

export const NAV_LINKS = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/images/hero-1.png",
    alt: "Dentista realizando evaluación dental a paciente en clínica moderna",
    eyebrow: "Clínica dental en Miraflores",
    title: "Recupera tu sonrisa",
    titleLine2: "con especialistas de confianza",
    subtitle: "Atención integral y especialistas de confianza en el corazón de Lima.",
  },
  {
    src: "/images/hero-2.png",
    alt: "Equipo de odontólogos profesionales en clínica dental",
    eyebrow: "Profesionales certificados",
    title: "Tu sonrisa en",
    titleLine2: "las mejores manos",
    subtitle: "Odontólogos especializados con más de 10 años de experiencia.",
  },
  {
    src: "/images/hero-3.png",
    alt: "Especialista dental atendiendo a paciente con equipamiento moderno",
    eyebrow: "Atención personalizada",
    title: "Cuidamos tu sonrisa",
    titleLine2: "como si fuera la nuestra",
    subtitle: "Ambiente cálido, trato cercano y resultados que perduran.",
  },
];

export const FEATURED_SERVICES: FeaturedService[] = [
  {
    id: "odontologia",
    title: "Odontología",
    description:
      "En DentalSmile contamos con todas las especialidades odontológicas para brindarte un servicio integral: limpieza, implantes, endodoncia, blanqueamiento y odontopediatría con la más alta calidad.",
    image: "/images/hero-1.png",
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia",
    description:
      "La ortodoncia es mucho más que alinear dientes; es una inversión en tu sonrisa y salud. Con brackets metálicos, estéticos y alineadores invisibles, mejoramos tu mordida, estética y confianza.",
    image: "/images/hero-2.png",
  },
];

export const FOOTER_SERVICES = [
  "Limpieza dental",
  "Ortodoncia",
  "Implantes",
  "Blanqueamiento",
  "Endodoncia",
  "Odontopediatría",
] as const;

export const FOOTER_COMPANY = [
  "Sobre nosotros",
  "Nuestro equipo",
  "Instalaciones",
  "Blog dental",
  "Trabaja con nosotros",
] as const;

export const FOOTER_LEGAL = [
  "Privacidad",
  "Términos de uso",
  "Cookies",
] as const;

export const SERVICES: Service[] = [
  {
    id: "limpieza",
    title: "Limpieza dental",
    description:
      "Profilaxis profesional que elimina sarro y manchas, dejando tus dientes brillantes y saludables.",
    icon: "sparkles",
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia",
    description:
      "Brackets metálicos, cerámicos y alineadores invisibles para una sonrisa perfectamente alineada.",
    icon: "align-center",
  },
  {
    id: "implantes",
    title: "Implantes dentales",
    description:
      "Soluciones permanentes de titanio que restauran la función y estética de dientes perdidos.",
    icon: "circle-dot",
  },
  {
    id: "blanqueamiento",
    title: "Blanqueamiento",
    description:
      "Tratamiento profesional que aclara hasta 8 tonos en una sola sesión con tecnología LED.",
    icon: "sun",
  },
  {
    id: "endodoncia",
    title: "Endodoncia",
    description:
      "Tratamiento de conducto avanzado para salvar piezas dañadas eliminando la infección.",
    icon: "activity",
  },
  {
    id: "odontopediatria",
    title: "Odontopediatría",
    description:
      "Atención especializada y amigable para niños, cuidando su salud bucal desde temprana edad.",
    icon: "baby",
  },
];

export const SERVICE_OPTIONS = SERVICES.map((service) => service.title);

export const BENEFITS: Benefit[] = [
  {
    title: "Especialistas certificados",
    description:
      "Nuestro equipo está compuesto por odontólogos con formación continua y certificaciones internacionales.",
  },
  {
    title: "Tecnología de vanguardia",
    description:
      "Equipos de última generación para diagnósticos precisos y tratamientos más cómodos.",
  },
  {
    title: "Diagnóstico digital",
    description:
      "Radiografías digitales, escaneo 3D y planificación virtual para resultados predecibles.",
  },
  {
    title: "Atención personalizada",
    description:
      "Cada paciente recibe un plan de tratamiento único adaptado a sus necesidades y objetivos.",
  },
];

export const STATS: StatItem[] = [
  {
    value: "500+",
    label: "Pacientes atendidos",
    description: "Familias que confían en nosotros",
    icon: "users",
  },
  {
    value: "98%",
    label: "Satisfacción",
    description: "Según encuestas post-tratamiento",
    icon: "star",
  },
  {
    value: "10+",
    label: "Años de experiencia",
    description: "Liderando la odontología moderna",
    icon: "award",
  },
  {
    value: "24h",
    label: "Tiempo de respuesta",
    description: "Atención y citas rápidas",
    icon: "zap",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "María González",
    role: "Diseñadora gráfica",
    content:
      "Llevaba años postergando mi tratamiento de ortodoncia por miedo. En DentalSmile me explicaron todo con paciencia y el resultado superó mis expectativas.",
    rating: 5,
    initials: "MG",
    service: "Ortodoncia invisible",
  },
  {
    name: "Carlos Ruiz",
    role: "Ingeniero civil",
    content:
      "Perdí un diente en un accidente y pensé que nunca volvería a sonreír igual. El implante quedó tan natural que nadie nota la diferencia. Excelente equipo.",
    rating: 5,
    initials: "CR",
    service: "Implante dental",
    featured: true,
  },
  {
    name: "Ana Martínez",
    role: "Profesora",
    content:
      "El blanqueamiento fue rápido, indoloro y el cambio fue inmediato. Las instalaciones son impecables y el personal siempre te hace sentir en confianza.",
    rating: 5,
    initials: "AM",
    service: "Blanqueamiento",
  },
];

export const PLATFORM_RATINGS: PlatformRating[] = [
  { platform: "Google Reviews", rating: "4.9/5", reviews: "320+ reseñas" },
  { platform: "Doctoralia", rating: "4.8/5", reviews: "180+ reseñas" },
  { platform: "Facebook", rating: "4.9/5", reviews: "250+ reseñas" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Agenda tu cita",
    description:
      "Reserva en línea en menos de 2 minutos. Confirmación inmediata.",
    icon: "calendar",
  },
  {
    step: 2,
    title: "Evaluación profesional",
    description:
      "Diagnóstico completo con imágenes digitales y revisión de tu historial dental.",
    icon: "search",
  },
  {
    step: 3,
    title: "Tratamiento personalizado",
    description:
      "Plan de tratamiento a tu medida con las mejores opciones y tecnología disponible.",
    icon: "stethoscope",
  },
  {
    step: 4,
    title: "Seguimiento continuo",
    description:
      "Te acompañamos en cada etapa con controles periódicos para garantizar resultados duraderos.",
    icon: "check-circle",
  },
];

export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message ?? CLINIC.whatsappMessage);
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${text}`;
}

export function buildAppointmentWhatsAppMessage(data: {
  nombre: string;
  telefono: string;
  correo: string;
  fecha_cita: string;
  servicio: string;
  mensaje?: string;
}): string {
  const lines = [
    `Hola, quiero agendar una cita en ${CLINIC.name}.`,
    "",
    `*Nombre:* ${data.nombre.trim()}`,
    `*Teléfono:* ${data.telefono.trim()}`,
    `*Correo:* ${data.correo.trim()}`,
    `*Fecha preferida:* ${data.fecha_cita}`,
    `*Servicio:* ${data.servicio}`,
  ];

  if (data.mensaje?.trim()) {
    lines.push(`*Mensaje:* ${data.mensaje.trim()}`);
  }

  return lines.join("\n");
}

export function buildAppointmentEmailBody(data: {
  nombre: string;
  telefono: string;
  correo: string;
  fecha_cita: string;
  servicio: string;
  mensaje?: string;
}): string {
  const lines = [
    "Solicitud de cita desde la web:",
    "",
    `Nombre: ${data.nombre.trim()}`,
    `Teléfono: ${data.telefono.trim()}`,
    `Correo: ${data.correo.trim()}`,
    `Fecha preferida: ${data.fecha_cita}`,
    `Servicio: ${data.servicio}`,
  ];

  if (data.mensaje?.trim()) {
    lines.push(`Mensaje: ${data.mensaje.trim()}`);
  }

  return lines.join("\n");
}
