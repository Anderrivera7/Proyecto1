export interface HeroSlide {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  titleLine2?: string;
  subtitle?: string;
}

export interface FeaturedService {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface LeadFormData {
  nombre: string;
  telefono: string;
  correo: string;
  fecha_cita: string;
  servicio: string;
  mensaje?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
  service: string;
  featured?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: string;
}
