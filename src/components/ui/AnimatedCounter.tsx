"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function parseStatValue(value: string) {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/);
  if (!match) {
    return { prefix: "", target: 0, suffix: value, decimals: 0 };
  }

  const numericPart = match[2];
  const decimals = numericPart.includes(".") ? numericPart.split(".")[1].length : 0;

  return {
    prefix: match[1],
    target: parseFloat(numericPart),
    suffix: match[3],
    decimals,
  };
}

type AnimatedCounterProps = {
  value: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  duration = 2.2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { prefix, target, suffix, decimals } = parseStatValue(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frameId = 0;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(eased * target);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target, duration]);

  const formatted =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.round(count).toLocaleString("es-PE");

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {prefix}
      {formatted}
      {suffix}
    </motion.span>
  );
}
