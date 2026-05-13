"use client";

import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";

const releaseDate = "2026-12-25T00:00:00";

function formatNumber(value: number) {
  return String(value).padStart(2, "0");
}

export function CountdownSection() {
  const { days, hours, minutes, seconds, isFinished } =
    useCountdown(releaseDate);

  const countdownItems = [
    {
      label: "Dias",
      value: days,
    },
    {
      label: "Horas",
      value: hours,
    },
    {
      label: "Minutos",
      value: minutes,
    },
    {
      label: "Segundos",
      value: seconds,
    },
  ];

  return (
    <section
      id="estreia"
      className="relative overflow-hidden bg-black px-6 py-28"
    >
      <div className="star-field absolute inset-0 opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#eab30833,transparent_36%)]" />

      <div className="relative mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
            Estreia
          </p>

          <h2 className="mb-5 text-4xl font-black text-white md:text-6xl">
            Contagem regressiva para a{" "}
            <span className="text-gradient">
              aventura
            </span>
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-white/60">
            O contador atualiza em tempo real e muda automaticamente quando a
            data de lançamento chegar.
          </p>
        </motion.div>

        {isFinished ? (
          <motion.div
            className="glass-card mx-auto max-w-3xl rounded-[2rem] p-10"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-black text-white">
              Já está nos cinemas!
            </h3>

            <p className="mt-4 text-white/60">
              A aventura começou. Prepare-se para explorar a galáxia.
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {countdownItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="glass-card rounded-[2rem] p-6"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
              >
                <strong className="block text-5xl font-black text-white md:text-6xl">
                  {formatNumber(item.value)}
                </strong>

                <span className="mt-4 block text-xs font-bold uppercase tracking-[0.25em] text-white/50">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}