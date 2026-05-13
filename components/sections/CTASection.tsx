"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const stats = [
  {
    value: "Next.js",
    label: "Framework",
  },
  {
    value: "TypeScript",
    label: "Código seguro",
  },
  {
    value: "Motion",
    label: "Animações",
  },
];

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-purple-700 to-pink-700 px-6 py-28 text-center">
      <div className="star-field absolute inset-0 opacity-20" />
      <div className="absolute inset-0 bg-black/25" />

      <motion.div
        className="relative mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white backdrop-blur">
          <Sparkles className="h-4 w-4" />
          Projeto de portfólio
        </div>

        <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
          Uma experiência feita para mostrar nível de front-end avançado
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-white/75">
          Esse projeto une design, animação, organização de componentes,
          responsividade e uma experiência visual forte para chamar atenção em
          portfólio, GitHub e entrevistas.
        </p>

        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-bold text-black shadow-[0_0_60px_rgba(255,255,255,0.3)] transition hover:scale-105"
          >
            Voltar ao topo
            <ArrowUpRight className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/DgAleixo11/super-mario-galaxy-experience"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3 font-bold text-white backdrop-blur transition hover:scale-105 hover:bg-white/15"
          >
            Ver no GitHub
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 7c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92v2.85c0 .27.18.59.69.49A10.14 10.14 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >
              <strong className="block text-2xl font-black text-white">
                {item.value}
              </strong>

              <span className="mt-2 block text-xs font-bold uppercase tracking-[0.22em] text-white/50">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}