'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Scene3D } from '@/components/ui/Scene3D'

const STATS = [
  { value: '2+', label: 'Ans d\'expérience' },
  { value: '10+', label: 'Projets livrés' },
  { value: '96', label: 'Score Lighthouse moyen' },
  { value: '24h', label: 'Délai de réponse max' },
]

const STACK = ['Next.js', 'TypeScript', 'React', 'GSAP', 'Framer Motion', 'Tailwind']

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="apropos" className="px-8 md:px-10 py-24 border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] text-white/25 uppercase tracking-widest mb-4">À propos</p>
          <h2 className="font-syne font-black text-5xl tracking-tightest leading-none mb-8">
            Je crois que<br />
            chaque secteur<br />
            mérite mieux<br />
            <span className="text-stroke">qu&apos;un template.</span>
          </h2>

          <div className="flex flex-col gap-4 text-sm text-white/45 leading-relaxed max-w-md">
            <p>
              Restaurant gastronomique, cabinet d&apos;architectes, couvreur artisan, institut de beauté, peu importe le secteur, le niveau d&apos;exigence visuelle ne devrait pas changer.
            </p>
            <p>
              Je construis des interfaces sur-mesure qui donnent à chaque marque l&apos;identité digitale qu&apos;elle mérite. Pas de template recyclé, pas de junior affecté en sous-main, juste du travail propre, livré à temps.
            </p>
            <p>
              Basé en Bretagne, je travaille avec des clients partout en France qui partagent une conviction : un bon site n&apos;est pas une dépense, c&apos;est un investissement.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-10">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="text-[11px] text-white/35 border border-white/8 rounded-full px-3 py-1.5 uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <div className="hidden md:block w-full h-[400px]">
            <Scene3D />
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-white/[0.02] border border-white/6 rounded-xl p-5"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              >
                <p className="font-syne font-black text-3xl tracking-tightest text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-white/30 uppercase tracking-wider leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
