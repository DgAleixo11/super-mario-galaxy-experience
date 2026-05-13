"use client";

import { motion } from "framer-motion";

const characters = [
  {
    name: "Mario",
    role: "Herói principal",
    description:
      "Corajoso, determinado e sempre pronto para atravessar qualquer galáxia para salvar o dia.",
    color: "from-red-500/40 to-yellow-400/30",
    power: "Salto Galáctico",
    level: "95%",
  },
  {
    name: "Luigi",
    role: "Herói parceiro",
    description:
      "Leal, carismático e essencial em qualquer missão, mesmo quando a aventura parece grande demais.",
    color: "from-green-500/40 to-emerald-300/30",
    power: "Agilidade Cósmica",
    level: "88%",
  },
  {
    name: "Rosalina",
    role: "Guardiã das estrelas",
    description:
      "Misteriosa, elegante e conectada aos segredos mais profundos do universo.",
    color: "from-cyan-400/40 to-blue-500/30",
    power: "Energia Estelar",
    level: "99%",
  },
  {
    name: "Luma",
    role: "Companheiro estelar",
    description:
      "Pequeno, brilhante e cheio de energia, guiando os heróis pelos caminhos da galáxia.",
    color: "from-yellow-300/40 to-orange-400/30",
    power: "Luz Cósmica",
    level: "91%",
  },
];

export function CharactersSection() {
  return (
    <section
      id="personagens"
      className="relative overflow-hidden bg-[#050816] px-6 py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb22,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Personagens
          </p>

          <h2 className="mb-5 text-4xl font-black text-white md:text-6xl">
            Heróis da{" "}
            <span className="text-gradient">
              Galáxia
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Cada personagem foi pensado como um card de portfólio: visual forte,
            informações organizadas e interação moderna.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {characters.map((character, index) => (
            <motion.article
              key={character.name}
              className="group glass-card relative overflow-hidden rounded-3xl p-6"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${character.color} opacity-60 transition group-hover:opacity-90`}
              />

              <div className="relative z-10">
                <div className="mb-6 flex h-44 items-center justify-center rounded-3xl border border-white/10 bg-black/30 backdrop-blur">
                  <span className="text-7xl font-black text-white drop-shadow-2xl">
                    {character.name[0]}
                  </span>
                </div>

                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-white/60">
                  {character.role}
                </p>

                <h3 className="mb-3 text-2xl font-black text-white">
                  {character.name}
                </h3>

                <p className="mb-6 min-h-24 text-sm leading-7 text-white/70">
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
                    <div
                      className="h-full rounded-full bg-white"
                      style={{ width: character.level }}
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