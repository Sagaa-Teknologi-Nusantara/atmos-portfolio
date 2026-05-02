"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

function fadeUp(i: number, reduce: boolean | null) {
  if (reduce) {
    return {
      initial: false as const,
      animate: undefined,
    };
  }
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.8,
      ease: EASE,
    },
  };
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-ink text-ivory"
    >
      <Image
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2400&q=80"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/95 via-ink/70 to-ink/95"
      />
      <div
        aria-hidden
        className="absolute inset-y-10 left-6 hidden w-px bg-gold/40 md:block lg:left-10"
      />
      <div
        aria-hidden
        className="absolute inset-y-10 right-6 hidden w-px bg-gold/40 md:block lg:right-10"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10 lg:pt-48">
        <motion.p
          {...fadeUp(0, reduce)}
          className="mb-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.5em] text-gold"
        >
          <span className="h-px w-10 bg-gold" />
          Atmos Law Office · L.L.P.
        </motion.p>

        <motion.h1
          {...fadeUp(1, reduce)}
          className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.05] tracking-tight text-ivory"
        >
          Utmost Good Faith
          <br />
          for <span className="italic text-gold-soft">
            Utmost Excellent
          </span>{" "}
          Service
        </motion.h1>

        <motion.p
          {...fadeUp(2, reduce)}
          className="mt-10 max-w-xl text-base leading-relaxed text-ivory/75 md:text-lg"
        >
          Trusted corporate counsel for domestic and multinational clients —
          where disciplined craft, institutional rigor, and industry-focused
          strategy meet the standard our clients deserve.
        </motion.p>

        <motion.div
          {...fadeUp(3, reduce)}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#about"
            className="group inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-[0.3em] text-ink transition-colors hover:bg-gold-soft"
          >
            Learn More
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 border border-ivory/40 px-8 py-4 text-xs uppercase tracking-[0.3em] text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            Contact Us
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-6 pb-6 text-[10px] uppercase tracking-[0.35em] text-ivory/50 lg:px-10">
        <span>Est. Jakarta</span>
        <span className="hidden md:inline">Scroll to Explore ↓</span>
        <span>Global Counsel</span>
      </div>
    </section>
  );
}
