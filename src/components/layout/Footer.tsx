import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-8 md:px-10 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-syne font-black text-base tracking-tightest text-white">
          Gabriel Christe
        </span>

        <div className="flex items-center gap-6">
          <Link
            href="/mentions-legales"
            className="text-xs text-white/20 hover:text-white/50 transition-colors uppercase tracking-widest"
          >
            Mentions légales
          </Link>
          <Link
            href="/mentions-legales#confidentialite"
            className="text-xs text-white/20 hover:text-white/50 transition-colors uppercase tracking-widest"
          >
            Confidentialité
          </Link>
        </div>

        <p className="text-xs text-white/15">
          © {new Date().getFullYear()} Gabriel Christe. — Fait avec Next.js & GSAP
        </p>
      </div>
    </footer>
  )
}
