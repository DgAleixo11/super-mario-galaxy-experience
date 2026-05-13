export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <span className="text-lg font-black text-white">
          Mario Galaxy
        </span>

        <nav className="hidden gap-8 text-sm font-medium text-white/70 md:flex">
          <a href="#personagens" className="hover:text-white">Personagens</a>
          <a href="#galaxia" className="hover:text-white">Galáxia</a>
          <a href="#trailer" className="hover:text-white">Trailer</a>
          <a href="#estreia" className="hover:text-white">Estreia</a>
        </nav>
      </div>
    </header>
  );
}