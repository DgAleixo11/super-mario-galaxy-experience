import Link from "next/link";

const footerLinks = [
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

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-12">
      <div className="star-field absolute inset-0 opacity-10" />

      <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Link href="#" className="mb-4 inline-block">
            <span className="block text-xl font-black uppercase tracking-[0.2em] text-white">
              Super Mario
            </span>

            <span className="block text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
              Galaxy Experience
            </span>
          </Link>

          <p className="max-w-xl text-sm leading-7 text-white/55">
            Projeto conceitual criado para fins educacionais e de portfólio,
            com foco em front-end moderno, animações, componentização e
            experiência visual.
          </p>

          <p className="mt-4 max-w-xl text-xs leading-6 text-white/35">
            Super Mario, Super Mario Galaxy e personagens relacionados pertencem
            à Nintendo. Este projeto não possui vínculo oficial com a Nintendo.
          </p>
        </div>

        <div className="md:text-right">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            Navegação
          </p>

          <nav className="flex flex-wrap gap-4 md:justify-end">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white/60 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
              Desenvolvido por
            </p>

            <p className="mt-2 text-lg font-black text-white">
              Diogo Aleixo
            </p>

            <p className="mt-1 text-sm text-white/45">
              Front-end project feito com Next.js, TypeScript e Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}