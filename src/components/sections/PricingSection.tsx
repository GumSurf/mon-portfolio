'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const OFFERS = [
  {
    name: 'Site vitrine',
    from: '800€',
    description: 'Pour les marques qui veulent une présence en ligne soignée, rapide et qui convertit.',
    examples: 'Restaurant, cabinet, artisan, institut…',
    delay: 0,
  },
  {
    name: 'E-commerce',
    from: '2 500€',
    description: 'Pour les marques qui veulent vendre en ligne avec une expérience utilisateur premium.',
    examples: 'Boutique mode, épicerie fine, marque lifestyle…',
    highlight: true,
    delay: 0.1,
  },
  {
    name: 'Refonte',
    from: 'Sur devis',
    description: 'Votre site existe mais ne reflète plus votre niveau. On repart sur une base saine.',
    examples: 'Audit + redesign + migration technique',
    delay: 0.2,
  },
]

export function PricingSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="services" className="px-8 md:px-10 py-24 border-t border-white/5">
      <motion.div
        ref={ref}
        className="mb-12"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[11px] text-white/25 uppercase tracking-widest mb-4">Tarifs</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-syne font-black text-5xl tracking-tightest leading-none">
            Une idée<br />du budget.
          </h2>
          <p className="text-sm text-white/35 max-w-xs leading-relaxed">
            Chaque projet est unique. Ces fourchettes donnent un repère — on affine ensemble lors d&apos;un appel de 30 min.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        {OFFERS.map((offer) => (
          <motion.div
            key={offer.name}
            className={`rounded-2xl p-7 border flex flex-col gap-5 transition-colors ${
              offer.highlight
                ? 'border-gold/25 bg-gold/[0.03]'
                : 'border-white/6 bg-white/[0.015] hover:bg-white/[0.03]'
            }`}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: offer.delay }}
          >
            <div className="flex items-start justify-between">
              <h3 className="font-syne font-black text-lg text-white">{offer.name}</h3>
              {offer.highlight && (
                <span className="text-[10px] bg-gold text-background font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Populaire
                </span>
              )}
            </div>

            <div>
              <p className="text-[11px] text-white/25 uppercase tracking-widest mb-1">À partir de</p>
              <p className={`font-syne font-black text-3xl tracking-tightest ${offer.highlight ? 'text-gold' : 'text-white'}`}>
                {offer.from}
              </p>
            </div>

            <p className="text-sm text-white/40 leading-relaxed flex-1">
              {offer.description}
            </p>

            <p className="text-xs text-white/20 italic border-t border-white/5 pt-4">
              {offer.examples}
            </p>

            <a
              href="#contact"
              className={`text-sm font-bold text-center py-3 rounded-full transition-all ${
                offer.highlight
                  ? 'bg-gold text-background hover:opacity-85'
                  : 'border border-white/12 text-white/50 hover:text-white hover:border-white/25'
              }`}
            >
              En discuter →
            </a>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-xs text-white/15 text-center mt-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Ces tarifs s&apos;entendent HT. Acompte de 50% au démarrage, solde à la livraison.
      </motion.p>
    </section>
  )
}
