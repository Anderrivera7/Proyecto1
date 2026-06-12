import { MapPin, Navigation } from "lucide-react";
import { CLINIC } from "@/lib/constants";

export function LocationMap() {
  const hasMap = Boolean(CLINIC.googleMapsEmbedUrl);
  const hasMapsLink = Boolean(CLINIC.googleMapsUrl);
  const hasWaze = Boolean(CLINIC.wazeUrl);

  return (
    <div className="mt-16 sm:mt-20">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-sky-50 shadow-[0_16px_48px_rgba(56,189,248,0.1)] ring-1 ring-sky-100">
        <div className="absolute left-5 top-5 z-10 max-w-xs rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur-sm sm:left-8 sm:top-8">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1d1d1f]">{CLINIC.name}</p>
              {CLINIC.address ? (
                <p className="mt-1 text-sm leading-relaxed text-[#86868b]">{CLINIC.address}</p>
              ) : (
                <p className="mt-1 text-sm leading-relaxed text-[#86868b]">
                  {CLINIC.locationSubtext}
                </p>
              )}
              <p className="mt-1 text-xs text-sky-600">{CLINIC.schedule}</p>
            </div>
          </div>
          {(hasMapsLink || hasWaze) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {hasMapsLink && (
                <a
                  href={CLINIC.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-sky-500 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-sky-600"
                >
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  Abrir en Maps
                </a>
              )}
              {hasWaze && (
                <a
                  href={CLINIC.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-white px-3.5 py-2 text-xs font-medium text-[#1d1d1f] transition-colors hover:border-sky-200 hover:text-sky-600"
                >
                  <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                  Waze
                </a>
              )}
            </div>
          )}
        </div>

        {hasMap ? (
          <iframe
            title={`Ubicación de ${CLINIC.name}`}
            src={CLINIC.googleMapsEmbedUrl}
            className="h-[320px] w-full border-0 sm:h-[420px] lg:h-[480px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div
            className="flex h-[320px] flex-col items-center justify-center gap-3 px-6 text-center sm:h-[420px] lg:h-[480px]"
            aria-hidden="true"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
              <MapPin className="h-7 w-7" />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#86868b]">
              Espacio reservado para el mapa de tu clínica
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
