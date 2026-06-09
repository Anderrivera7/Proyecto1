-- Tabla de leads para Dental Smile
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  telefono text not null,
  correo text not null,
  fecha_cita text not null,
  servicio text not null,
  mensaje text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.leads enable row level security;

create policy "Permitir inserción pública de leads"
  on public.leads
  for insert
  to anon, authenticated
  with check (true);

create policy "Solo autenticados pueden leer leads"
  on public.leads
  for select
  to authenticated
  using (true);
