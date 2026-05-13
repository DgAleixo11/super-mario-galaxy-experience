"use client";

import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  {
    label: "Personagens",
    href: "#personagens",
  },
  {
    label: "Galáxia",
    href: "#galaxia",
  },
  {
    label: "Trailer",
    href: "#trailer",
  },
  {
    label: "Estreia",
    href: "#estreia",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <motion.header
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/35 backdrop-blur-2xl"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.25)] transition group-hover:scale-105">
            <Sparkles className="h-5 w-5" />
          </div>

          <div>
            <span className="block text-sm font-black uppercase tracking-[0.2em] text-white">
              Mario
            </span>

            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              Galaxy
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#trailer"
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition hover:scale-105 hover:bg-blue-100 md:inline-flex"
        >
          Assistir trailer
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t border-white/10 bg-black/90 px-6 pb-6 pt-2 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-bold text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#trailer"
                onClick={closeMenu}
                className="mt-2 rounded-2xl bg-white px-4 py-3 text-center text-sm font-black text-black"
              >
                Assistir trailer
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}