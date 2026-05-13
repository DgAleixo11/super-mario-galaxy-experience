"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { assetPath } from "@/lib/assetPath";

export function HeroSection() {
  const { scrollYProgress } = useScroll();

  const planetScale = useTransform(scrollYProgress, [0, 0.35], [1, 2.4]);
  const planetY = useTransform(scrollYProgress, [0, 0.35], [0, 220]);
  const planetOpacity = useTransform(scrollYProgress, [0, 0.4], [0.95, 0.25]);

  const marioY = useTransform(scrollYProgress, [0, 0.25], [0, -80]);
  const marioScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.15]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#020617] px-6 pt-24">
      <Image
        src={assetPath("/assets/images/nebulosa-quad.webp")}
        alt=""
        fill
        priority
        className="object-cover opacity-40"
      />

      <div className="star-field absolute inset-0 opacity-45" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1d4ed866,transparent_35%),linear-gradient(90deg,#020617_0%,#020617dd_38%,#02061755_100%)]" />

      <motion.div
        style={{
          scale: planetScale,
          y: planetY,
          opacity: planetOpacity,
        }}
        className="absolute -bottom-56 left-1/2 h-[560px] w-[560px] -translate-x-1/2 overflow-hidden rounded-full md:-bottom-72 md:h-[820px] md:w-[820px]"
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={assetPath("/assets/images/nebulosa-quad.webp")}
        >
          <source
            src={assetPath("/assets/videos/planet-3d-alpha.webm")}
            type="video/webm"
          />
          <source
            src={assetPath("/assets/videos/planet-3d-min.mp4")}
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.22),transparent_28%),linear-gradient(115deg,transparent_0%,transparent_48%,rgba(0,0,0,0.35)_82%)]" />
      </motion.div>

      <motion.div
        className="absolute right-[4%] top-[16%] hidden md:block"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={assetPath("/assets/images/estrela-min.webp")}
          alt="Estrela"
          width={90}
          height={90}
          className="drop-shadow-[0_0_35px_rgba(250,204,21,0.8)]"
        />
      </motion.div>

      <motion.div
        className="absolute right-[10%] top-[22%] hidden lg:block"
        animate={{
          y: [0, 28, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={assetPath("/assets/images/luigi.webp")}
          alt="Luigi"
          width={170}
          height={240}
          className="drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
        />
      </motion.div>

      <motion.div
        className="absolute right-[24%] bottom-[24%] hidden xl:block"
        animate={{
          y: [0, -22, 0],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={assetPath("/assets/images/rosalina.webp")}
          alt="Rosalina"
          width={155}
          height={240}
          className="drop-shadow-[0_30px_60px_rgba(0,0,0,0.75)]"
        />
      </motion.div>

      <motion.div
        className="absolute left-[6%] bottom-[18%] hidden lg:block"
        animate={{
          y: [0, -24, 0],
          rotate: [0, -4, 0],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={assetPath("/assets/images/yoshi-perso.webp")}
          alt="Yoshi"
          width={150}
          height={220}
          className="drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
        />
      </motion.div>

      <motion.div
        className="absolute left-[20%] top-[18%] hidden xl:block"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={assetPath("/assets/images/peach.webp")}
          alt="Peach"
          width={145}
          height={230}
          className="drop-shadow-[0_30px_60px_rgba(0,0,0,0.75)]"
        />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{
            opacity: 0,
            x: -44,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          className="text-center md:text-left"
        >
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-200 backdrop-blur">
            Uma aventura entre mundos
          </div>

          <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl lg:text-8xl">
            Super Mario{" "}
            <span className="text-gradient">
              Galaxy
            </span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
            Uma experiência web cinematográfica inspirada no universo de Mario,
            com personagens, atmosfera espacial, animações e efeito de
            profundidade no scroll.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row md:items-start">
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
          </div>
        </motion.div>

        <motion.div
          style={{
            y: marioY,
            scale: marioScale,
          }}
          className="relative z-20 mx-auto flex min-h-[420px] items-end justify-center md:min-h-[600px]"
          initial={{
            opacity: 0,
            x: 60,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          <motion.div
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute bottom-8 left-1/2 h-32 w-72 -translate-x-1/2 rounded-full bg-blue-500/30 blur-3xl" />

            <video
              className="relative z-10 max-h-[520px] w-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.85)] md:max-h-[680px]"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src={assetPath("/assets/videos/mario-clip-alpha.webm")}
                type="video/webm"
              />
              <source
                src={assetPath("/assets/videos/mario-clip-min.mp4")}
                type="video/mp4"
              />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}