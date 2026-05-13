"use client";

import { motion } from "framer-motion";

const planets = [
  {
    name: "Star World",
    type: "Mundo inicial",
    description: "Um planeta luminoso onde a jornada começa entre estrelas e portais.",
    color: "from-blue-400 to-cyan-300",
    size: "h-28 w-28",
  },
  {
    name: "Cosmic Garden",
    type: "Jardim espacial",
    description: "Uma galáxia viva, cheia de plantas cósmicas, caminhos secretos e energia natural.",
    color: "from-emerald-400 to-lime-300",
    size: "h-36 w-36",
  },
  {
    name: "Luma Planet",
    type: "Planeta dos Lumas",
    description: "Um mundo pequeno, brilhante e cheio de criaturas estelares guiando a aventura.",
    color: "from-yellow-300 to-orange-400",
    size: "h-24 w-24",
  },
  {
    name: "Dark Orbit",
    type: "Órbita sombria",
    description: "Uma região misteriosa da galáxia, com desafios intensos e atmosfera mais dramática.",
    color: "from-purple-500 to-pink-500",
    size: "h-32 w-32",
  },
];

export function GalaxySection() {
  return (
    <section
      id="galaxia"
      className="relative overflow-hidden bg-black px-6 py-28"
    >
      <div className="star-field absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7c3aed33,transparent_38%)]" />

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
            <span className="text-gradient">
              estrelas
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Uma seção com atmosfera de mapa espacial, planetas animados e
            detalhes visuais para elevar a experiência da landing page.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="relative min-h-[520px] rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
            <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

            <motion.div
              className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-200 to-orange-500 shadow-[0_0_90px_rgba(251,191,36,0.7)]"
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

            {planets.map((planet, index) => {
              const positions = [
                "left-[8%] top-[18%]",
                "right-[9%] top-[16%]",
                "left-[14%] bottom-[14%]",
                "right-[12%] bottom-[12%]",
              ];

              return (
                <motion.div
                  key={planet.name}
                  className={`absolute ${positions[index]} ${planet.size} rounded-full bg-gradient-to-br ${planet.color} shadow-[0_0_60px_rgba(255,255,255,0.25)]`}
                  animate={{
                    y: [0, -18, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    y: {
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: {
                      duration: 20 + index * 4,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                >
                  <div className="absolute inset-3 rounded-full bg-white/20 blur-sm" />
                </motion.div>
              );
            })}
          </motion.div>

          <div className="grid gap-5">
            {planets.map((planet, index) => (
              <motion.article
                key={planet.name}
                className="glass-card rounded-3xl p-6"
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
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-purple-300">
                  {planet.type}
                </p>

                <h3 className="mb-3 text-2xl font-black text-white">
                  {planet.name}
                </h3>

                <p className="text-sm leading-7 text-white/60">
                  {planet.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}