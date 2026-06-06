export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 text-white">
      
      {/* GLOW BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,20,241,0.15),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">

        {/* TOP GRID */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-extrabold tracking-tight">
              Gabriel Christe
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
              Création de sites haut de gamme, pensés pour convertir et marquer les esprits.
            </p>

            <div className="mt-6 flex gap-2 text-[11px] text-white/30">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Next.js
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                React
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                UI/UX
              </span>
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              Navigation
            </p>

            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#projets" className="hover:text-white transition">
              Projets
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* CONTACT / CTA */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              Contact
            </p>

            <p className="mt-3 text-sm text-white/60">
              Disponible pour nouveaux projets
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-80"
            >
              Travaillons ensemble →
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center">

          <p>
            © {new Date().getFullYear()} Gabriel Christe. Tous droits réservés.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}