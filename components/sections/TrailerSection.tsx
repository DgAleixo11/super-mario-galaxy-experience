"use client";

import Image from "next/image";
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
      <Image
        src="/assets/images/nebulosa-quad.webp"
        alt=""
        fill
        className="object-cover opacity-25"
      />

      <div className="star-field absolute inset-0 opacity-25" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#dc262644,transparent_34%),linear-gradient(180deg,#050816_0%,#111827_48%,#020617_100%)]" />

      <motion.div
        className="absolute left-[5%] bottom-10 hidden opacity-80 lg:block"
        animate={{ y: [0, -24, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/assets/images/bowser-jr.webp"
          alt="Bowser Jr."
          width={180}
          height={260}
          className="drop-shadow-[0_35px_65px_rgba(0,0,0,0.8)]"
        />
      </motion.div>

      <motion.div
        className="absolute right-[6%] top-20 hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/assets/images/estrela-min.webp"
          alt="Estrela"
          width={95}
          height={95}
          className="drop-shadow-[0_0_45px_rgba(250,204,21,0.9)]"
        />
      </motion.div>

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
            <span className="text-gradient">aventura</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Uma seção pensada para parecer uma prévia oficial: fundo dramático,
            botão de play em destaque e modal imersivo para assistir ao trailer.
          </p>
        </motion.div>

        <motion.div
          className="glass-card group relative overflow-hidden rounded-[2.25rem] p-4"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-[1.75rem] bg-black">
            <Image
              src="/assets/images/nebulosa-quad.webp"
              alt=""
              fill
              className="object-cover opacity-55 transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ef444455,transparent_34%),linear-gradient(180deg,transparent_0%,#000_100%)]" />

            <motion.div
              className="absolute right-[8%] bottom-[8%] hidden md:block"
              animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/assets/images/mario-original.webp"
                alt="Mario"
                width={230}
                height={310}
                className="drop-shadow-[0_35px_70px_rgba(0,0,0,0.9)]"
              />
            </motion.div>

            <motion.button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative z-20 flex h-24 w-24 items-center justify-center rounded-full border border-white/25 bg-white text-black shadow-[0_0_90px_rgba(255,255,255,0.45)] transition"
              whileHover={{ scale: 1.13 }}
              whileTap={{ scale: 0.94 }}
              aria-label="Abrir trailer"
            >
              <span className="absolute inset-0 rounded-full bg-white/40 blur-xl" />
              <Play className="relative z-10 ml-1 h-10 w-10 fill-black" />
            </motion.button>

            <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black via-black/75 to-transparent p-8 md:p-10">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-red-200">
                Prévia cinematográfica
              </p>

              <h3 className="max-w-2xl text-3xl font-black leading-tight text-white md:text-5xl">
                Entre em uma jornada pelo universo
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
                  src="https://www.youtube.com/embed/wz4IhEteZvs?autoplay=1"
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