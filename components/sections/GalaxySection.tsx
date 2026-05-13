"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/assetPath";

const galaxies = [
  {
    name: "Galáxia Estelar",
    type: "Mundo inicial",
    description:
      "O ponto de partida da aventura, com estrelas brilhantes, caminhos suspensos e portais espalhados pelo universo.",
    color: "from-blue-400 to-cyan-300",
  },
  {
    name: "Jardim Cósmico",
    type: "Mundo natural",
    description:
      "Uma área viva da galáxia, cheia de energia, movimento e caminhos secretos entre planetas.",
    color: "from-emerald-400 to-lime-300",
  },
  {
    name: "Órbita Sombria",
    type: "Desafio final",
    description:
      "Uma região intensa e misteriosa, pensada para criar contraste visual e sensação de perigo.",
    color: "from-purple-500 to-pink-500",
  },
];

export function GalaxySection() {
  return (
    <section
      id="galaxia"
      className="relative overflow-hidden bg-black px-6 py-28"
    >
      <Image
        src={assetPath("/assets/images/nebulosa-quad.webp")}
        alt=""
        fill
        className="object-cover opacity-25"
      />

      <div className="star-field absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7c3aed44,transparent_38%),linear-gradient(180deg,#050816_0%,#000_45%,#050816_100%)]" />

      <motion.div
        className="absolute left-[6%] top-[18%] hidden lg:block"
        animate={{ y: [0, -22, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={assetPath("/assets/images/estrela-min.webp")}
          alt="Estrela"
          width={95}
          height={95}
          className="drop-shadow-[0_0_45px_rgba(250,204,21,0.9)]"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-[4%] hidden opacity-70 xl:block"
        animate={{ y: [0, -26, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={assetPath("/assets/images/rosalina.webp")}
          alt="Rosalina"
          width={210}
          height={320}
          className="drop-shadow-[0_40px_70px_rgba(0,0,0,0.8)]"
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Galáxia
          </p>

          <h2 className="mb-5 text-4xl font-black text-white md:text-6xl">
            Explore mundos além das{" "}
            <span className="text-gradient">estrelas</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Uma área criada para passar a sensação de mapa cósmico, com planetas,
            brilho, profundidade e elementos visuais inspirados no universo de
            Mario.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <motion.div
            className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
            <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

            <motion.div
              className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-600 shadow-[0_0_100px_rgba(251,191,36,0.75)]"
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 360],
              }}
              transition={{
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />

            <motion.div
              className="absolute left-[10%] top-[20%] h-24 w-24 rounded-full bg-gradient-to-br from-blue-300 to-cyan-500 shadow-[0_0_60px_rgba(96,165,250,0.6)]"
              animate={{ y: [0, -22, 0], rotate: [0, 360] }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 18, repeat: Infinity, ease: "linear" },
              }}
            />

            <motion.div
              className="absolute right-[10%] top-[18%] h-32 w-32 rounded-full bg-gradient-to-br from-emerald-300 to-lime-500 shadow-[0_0_60px_rgba(74,222,128,0.5)]"
              animate={{ y: [0, 24, 0], rotate: [0, 360] }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 22, repeat: Infinity, ease: "linear" },
              }}
            />

            <motion.div
              className="absolute bottom-[12%] left-[18%] h-28 w-28 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-[0_0_60px_rgba(192,132,252,0.5)]"
              animate={{ y: [0, -18, 0], rotate: [0, 360] }}
              transition={{
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
            />

            <motion.div
              className="absolute bottom-[15%] right-[14%]"
              animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={assetPath("/assets/images/estrela-min.webp")}
                alt="Estrela"
                width={80}
                height={80}
                className="drop-shadow-[0_0_35px_rgba(250,204,21,0.9)]"
              />
            </motion.div>
          </motion.div>

          <div className="grid gap-5">
            {galaxies.map((galaxy, index) => (
              <motion.article
                key={galaxy.name}
                className="group glass-card relative overflow-hidden rounded-3xl p-6"
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{
                  x: 8,
                  scale: 1.01,
                }}
              >
                <div
                  className={`absolute inset-y-0 left-0 w-2 bg-gradient-to-b ${galaxy.color}`}
                />

                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-purple-300">
                  {galaxy.type}
                </p>

                <h3 className="mb-3 text-2xl font-black text-white">
                  {galaxy.name}
                </h3>

                <p className="text-sm leading-7 text-white/60">
                  {galaxy.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}