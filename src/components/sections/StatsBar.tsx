"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

export function StatsBar() {
  return (
    <section className="border-y border-black/[0.04] bg-white py-20 sm:py-24">
      <div className="container-main">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-500">
            Resultados
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#1d1d1f] sm:text-3xl">
            Números que nos respaldan
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-black/[0.06]">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-0 text-center lg:px-8">
              <AnimatedCounter
                value={stat.value}
                className="block text-4xl font-semibold tracking-[-0.03em] text-sky-500 sm:text-5xl lg:text-[4rem] lg:leading-none"
              />
              <h3 className="mt-3 text-[15px] font-semibold tracking-[-0.01em] text-[#1d1d1f]">
                {stat.label}
              </h3>
              <p className="mt-1 text-xs text-[#86868b] sm:text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
