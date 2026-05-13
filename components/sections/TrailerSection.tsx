"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";

export function TrailerSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="trailer"
      className="relative overflow-hidden bg-[#050816] px-6 py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#dc262633,transparent_35%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-300">
            Trailer
          </p>

          <h2 className="mb-5 text-4xl font-black text-white md:text-6xl">
            Assista à prévia da{" "}
            <span className="text-gradient">
              aventura
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Um bloco visual com foco em impacto, interação e sensação de site
            oficial de lançamento.
          </p>
        </motion.div>

        <motion.div
          className="glass-card group relative overflow-hidden rounded-[2rem] p-4"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-[1.5rem] bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ef444444,transparent_38%),linear-gradient(135deg,#020617,#111827_45%,#450a0a)]" />

            <div className="star-field absolute inset-0 opacity-20" />

            <motion.button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white text-black shadow-[0_0_80px_rgba(255,255,255,0.35)] transition group-hover:scale-110"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.94 }}
              aria-label="Abrir trailer"
            >
              <Play className="ml-1 h-10 w-10 fill-black" />
            </motion.button>

            <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black via-black/70 to-transparent p-8">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-red-200">
                Prévia oficial
              </p>

              <h3 className="text-3xl font-black text-white md:text-5xl">
                Uma jornada pelo universo
              </h3>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:scale-105"
                aria-label="Fechar trailer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src="https://youtu.be/HRyy_FdyieU?si=AZvsYPMrZK8DKywX"
                  title="Trailer Super Mario Galaxy"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}