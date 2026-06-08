'use client'

import { motion } from 'framer-motion'
import { useGrain } from '@/hooks/useGrain'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export function HeroSection() {
  const grainRef = useGrain()

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <canvas
        ref={grainRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-55"
      />

      <div
        className="absolute -top-48 -right-40 w-120 h-120 rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(93,202,165,0.07) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-24 -left-20 w-75 h-75 rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(127,119,221,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-20 flex-1 flex flex-col justify-center px-8 md:px-10 pt-32 pb-0">
        <motion.div
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-10 w-fit"
          {...fadeUp(0.2)}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#5DCAA5]" />
          <span className="text-xs text-white/50 uppercase tracking-widest">
            Disponible pour de nouveaux projets
          </span>
        </motion.div>

        <motion.h1
          className="font-syne font-black text-[clamp(42px,7vw,72px)] leading-none tracking-tightest mb-6 max-w-3xl"
          {...fadeUp(0.35)}
        >
          Je construit des<br />
          sites qui font{' '}
          <span className="text-stroke">bouger</span>
          <br />
          les chiffres.
        </motion.h1>

        <motion.p
          className="text-[15px] text-white/40 leading-relaxed max-w-md mb-10"
          {...fadeUp(0.5)}
        >
          Du site vitrine pour l&apos;entrepreneur local au e-commerce premium,
          des interfaces qui convertissent et qui marquent.
        </motion.p>

        <motion.div
          className="flex items-center gap-4"
          {...fadeUp(0.65)}
        >
          <a
            href="#projets"
            className="inline-flex items-center gap-2 border border-white/15 px-5 py-2.5 rounded-sm text-sm font-bold text-white hover:border-white/30 hover:bg-white/5 transition-all"
          >
            Voir les projets
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M7 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-bold text-white transition-all"
          >
            Voir les services
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hidden md:flex relative z-20 items-center justify-between px-8 md:px-10 py-8 mt-16 border-t border-white/5"
        {...fadeUp(0.8)}
      >
        <div className="flex gap-2 flex-wrap">
          {['Next.js', 'TypeScript', 'React', 'GSAP', 'Framer Motion', 'Tailwind', 'Node.js'].map((tech) => (
            <span
              key={tech}
              className="text-[11px] text-white/25 border border-white/8 rounded-full px-3 py-1 uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-[11px] text-white/20 uppercase tracking-widest">
          <span className="w-8 h-px bg-white/15" />
          Scroll
        </div>
      </motion.div>
    </section>
  )
}
