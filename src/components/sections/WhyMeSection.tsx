'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const MY_ADVANTAGES = [
  'Interlocuteur unique du brief à la livraison',
  'Design premium, niveau awwwards',
  'Code propre, performant, maintenable',
  'Délais tenus et transparence totale',
  'SEO technique intégré dès le départ',
  'Réactivité : réponse sous 24h garantie',
  'Tarifs freelance sans les marges agence',
  'Suivi post-livraison inclus',
]

const AGENCY_CONS = [
  'Junior affecté à votre projet sans vous prévenir',
  'Design template recyclé entre clients',
  'Code externalisé offshore parfois',
  'Délais glissants, surcoûts fréquents',
  'SEO vendu en option payante',
  'Account manager = filtre entre vous et le dev',
  'Marges importantes sur chaque prestation',
  'Suivi facturé au temps passé',
]

const FREELANCE_CONS = [
  'Compétences souvent limitées à une seule techno',
  'Design basique ou sous-traité',
  'Peu ou pas de rigueur sur le code',
  'Disponibilité imprévisible selon les missions',
  'SEO rarement maîtrisé',
  'Communication irrégulière',
  'Prix bas = valeur perçue faible',
  'Disparaît après la livraison',
]

type Column = {
  title: string
  subtitle: string
  items: string[]
  type: 'me' | 'agency' | 'freelance'
}

const COLUMNS: Column[] = [
  {
    title: 'Grandes agences',
    subtitle: 'Ce que vous obtenez vraiment',
    items: AGENCY_CONS,
    type: 'agency',
  },
  {
    title: 'Gabriel Christe',
    subtitle: 'Ce que vous obtenez avec moi',
    items: MY_ADVANTAGES,
    type: 'me',
  },
  {
    title: 'Freelances classiques',
    subtitle: 'Ce que vous obtenez souvent',
    items: FREELANCE_CONS,
    type: 'freelance',
  },
]

export function WhyMeSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="pourquoi" className="px-8 md:px-10 py-24 border-t border-white/5">
      <motion.div
        ref={ref}
        className="mb-16"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[11px] text-white/25 uppercase tracking-widest mb-4">Pourquoi moi</p>
        <h2 className="font-syne font-black text-5xl tracking-tightest leading-none">
          Pas juste un dev.<br />
          <span className="text-stroke">Un partenaire.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4 items-start">
        {COLUMNS.map((col, i) => (
          <motion.div
            key={col.title}
            className={`rounded-2xl p-7 border ${
              col.type === 'me'
                ? 'border-gold/30 bg-gold/[0.03] md:-mt-4 md:pb-11'
                : 'border-white/6 bg-white/1.5'
            }`}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="mb-6">
              {col.type === 'me' && (
                <span className="inline-block text-[10px] bg-gold text-background font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  Meilleur choix
                </span>
              )}
              <h3 className={`font-syne font-black text-xl mb-1 ${col.type === 'me' ? 'text-white' : 'text-white/50'}`}>
                {col.title}
              </h3>
              <p className="text-xs text-white/30 uppercase tracking-wider">{col.subtitle}</p>
            </div>

            <ul className="flex flex-col gap-3">
              {col.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className={`mt-0.5 text-sm shrink-0 ${
                    col.type === 'me' ? 'text-gold' : 'text-white/20'
                  }`}>
                    {col.type === 'me' ? '✓' : '✕'}
                  </span>
                  <span className={`text-sm leading-snug ${
                    col.type === 'me' ? 'text-white/70' : 'text-white/30'
                  }`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
