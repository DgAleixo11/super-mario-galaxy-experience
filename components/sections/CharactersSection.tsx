"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/assetPath";

const characters = [
  {
    name: "Mario",
    role: "Herói principal",
    image: assetPath("/assets/images/mario-original.webp"),
    description:
      "O protagonista da aventura, sempre pronto para atravessar mundos, estrelas e galáxias para salvar o dia.",
    color: "from-red-500/40 to-yellow-400/20",
    power: "Salto Galáctico",
    level: "95%",
  },
  {
    name: "Luigi",
    role: "Herói parceiro",
    image: assetPath("/assets/images/luigi.webp"),
    description:
      "Leal, divertido e corajoso, mesmo quando a missão parece grande demais para encarar sozinho.",
    color: "from-green-500/40 to-emerald-300/20",
    power: "Agilidade Cósmica",
    level: "88%",
  },
  {
    name: "Peach",
    role: "Princesa",
    image: assetPath("/assets/images/peach.webp"),
    description:
      "Elegante, forte e essencial para a história, trazendo leveza e presença para a jornada.",
    color: "from-pink-400/40 to-rose-300/20",
    power: "Graça Real",
    level: "84%",
  },
  {
    name: "Rosalina",
    role: "Guardiã das estrelas",
    image: assetPath("/assets/images/rosalina.webp"),
    description:
      "Misteriosa e poderosa, conectada aos segredos do universo e à energia das estrelas.",
    color: "from-cyan-400/40 to-blue-500/20",
    power: "Energia Estelar",
    level: "99%",
  },
  {
    name: "Yoshi",
    role: "Companheiro",
    image: assetPath("/assets/images/yoshi-perso.webp"),
    description:
      "Ágil, carismático e cheio de personalidade, pronto para ajudar em qualquer planeta.",
    color: "from-lime-400/40 to-green-500/20",
    power: "Impulso Verde",
    level: "91%",
  },
  {
    name: "Bowser Jr.",
    role: "Vilão",
    image: assetPath("/assets/images/bowser-jr.webp"),
    description:
      "Pequeno no tamanho, grande no caos. Um rival cheio de truques e energia explosiva.",
    color: "from-orange-500/40 to-red-500/20",
    power: "Caos Mecânico",
    level: "89%",
  },
];

export function CharactersSection() {
  return (
    <section
      id="personagens"
      className="relative overflow-hidden bg-[#050816] px-6 py-28"
    >
      <div className="star-field absolute inset-0 opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb22,transparent_36%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Personagens
          </p>

          <h2 className="mb-5 text-4xl font-black text-white md:text-6xl">
            Conheça os heróis da{" "}
            <span className="text-gradient">Galáxia</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Agora os personagens aparecem com imagem real, presença visual e
            cards mais próximos de uma landing page de lançamento.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {characters.map((character, index) => (
            <motion.article
              key={character.name}
              className="group glass-card relative min-h-[560px] overflow-hidden rounded-[2rem] p-6"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -12,
                scale: 1.015,
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${character.color} opacity-70 transition duration-500 group-hover:opacity-100`}
              />

              <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white/10 to-transparent" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="relative mb-6 flex h-72 items-end justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/25">
                  <div className="absolute bottom-0 left-1/2 h-24 w-56 -translate-x-1/2 rounded-full bg-white/15 blur-2xl" />

                  <motion.div
                    className="relative z-10"
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  >
                    <Image
                      src={character.image}
                      alt={character.name}
                      width={260}
                      height={340}
                      className="max-h-[270px] w-auto object-contain drop-shadow-[0_28px_55px_rgba(0,0,0,0.75)]"
                    />
                  </motion.div>
                </div>

                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-white/55">
                  {character.role}
                </p>

                <h3 className="mb-3 text-3xl font-black text-white">
                  {character.name}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-7 text-white/70">
                  {character.description}
                </p>

                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                      Poder
                    </span>

                    <span className="text-sm font-bold text-white">
                      {character.level}
                    </span>
                  </div>

                  <p className="mb-3 text-sm font-semibold text-white">
                    {character.power}
                  </p>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-white"
                      initial={{ width: 0 }}
                      whileInView={{ width: character.level }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.2 + index * 0.06,
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}