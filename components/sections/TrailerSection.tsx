export function TrailerSection() {
  return (
    <section id="trailer" className="bg-[#050816] px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-300">
          Trailer
        </p>

        <h2 className="mb-8 text-4xl font-black text-white">
          Assista à prévia da aventura
        </h2>

        <div className="aspect-video rounded-3xl border border-white/10 bg-black" />
      </div>
    </section>
  );
}