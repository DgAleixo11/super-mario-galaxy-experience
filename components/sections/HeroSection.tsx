"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <div className="star-field absolute inset-0 opacity-50" />

      <motion.div
        className="absolute left-[8%] top-[20%] h-40 w-40 rounded-full bg-blue-500/30 blur-3xl"
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[18%] right-[8%] h-56 w-56 rounded-full bg-purple-500/30 blur-3xl"
        animate={{
          y: [0, -45, 0],
          x: [0, -25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1d4ed866,transparent_35%),radial-gradient(circle_at_bottom,#7c3aed66,transparent_35%)]" />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl text-center"
        initial={{ opacity: 0, y: 42 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mx-auto mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-200 backdrop-blur"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Uma nova aventura começa
        </motion.div>

        <motion.h1
          className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          Super Mario{" "}
          <span className="text-gradient">
            Galaxy
          </span>{" "}
          Experience
        </motion.h1>

        <motion.p
          className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Uma landing page cinematográfica feita com Next.js, TypeScript,
          Tailwind CSS e animações modernas para parecer projeto de portfólio
          premium.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
        >
          <a
            href="#trailer"
            className="rounded-full bg-white px-8 py-3 font-bold text-black shadow-[0_0_50px_rgba(255,255,255,0.25)] transition hover:scale-105 hover:bg-blue-100"
          >
            Assistir trailer
          </a>

          <a
            href="#personagens"
            className="rounded-full border border-white/20 bg-white/5 px-8 py-3 font-bold text-white backdrop-blur transition hover:scale-105 hover:bg-white/10"
          >
            Ver personagens
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}