"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb,transparent_35%),radial-gradient(circle_at_bottom,#7c3aed,transparent_35%)] opacity-70" />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-blue-300">
          Uma nova aventura começa
        </p>

        <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
          Super Mario Galaxy Experience
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
          Uma landing page cinematográfica feita com Next.js, TypeScript,
          Tailwind CSS e animações modernas.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#trailer"
            className="rounded-full bg-white px-8 py-3 font-bold text-black transition hover:scale-105"
          >
            Assistir trailer
          </a>

          <a
            href="#personagens"
            className="rounded-full border border-white/20 px-8 py-3 font-bold text-white transition hover:bg-white/10"
          >
            Ver personagens
          </a>
        </div>
      </motion.div>
    </section>
  );
}