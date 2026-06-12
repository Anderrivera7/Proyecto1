"use client";

import { AnimatePresence, motion, type HTMLMotionProps } from "framer-motion";

const appleEase = [0.25, 0.1, 0.25, 1] as const;

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

const directionOffset = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 32 },
  right: { x: -32 },
  none: {},
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: appleEase }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type ScaleInProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function ScaleIn({ children, className, delay = 0, ...props }: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: appleEase }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type AnimatedAlertProps = {
  show: boolean;
  variant: "success" | "error";
  children: React.ReactNode;
};

export function AnimatedAlert({ show, variant, children }: AnimatedAlertProps) {
  const styles =
    variant === "success"
      ? "border-sky-200/60 bg-sky-50/80 text-sky-700"
      : "border-red-200 bg-red-50 text-red-700";

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -8, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -8, height: 0 }}
          transition={{ duration: 0.4, ease: appleEase }}
          className={`mt-5 overflow-hidden rounded-2xl border px-4 py-3 text-sm ${styles}`}
          role={variant === "success" ? "status" : "alert"}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type StaggerContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerContainer({ children, className }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1, delayChildren: 0.05 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: appleEase } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
