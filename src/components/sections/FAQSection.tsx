'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const FAQ = [
  {
    q: 'Quels types de projets prenez-vous en charge ?',
    a: 'Sites vitrines, e-commerces, landing pages, refontes et optimisations. Je travaille aussi bien avec des entrepreneurs locaux qui démarrent qu\'avec des marques e-commerce qui veulent passer au niveau supérieur.',
  },
  {
    q: 'Combien coûte un site web ?',
    a: 'Un site vitrine démarre à partir de 800€, un e-commerce à partir de 2 500€. Chaque projet est unique — je préfère échanger 30 min sur votre besoin avant de chiffrer pour vous donner un prix juste, pas un devis au doigt mouillé.',
  },
  {
    q: 'Quels sont vos délais habituels ?',
    a: 'Comptez 2 à 3 semaines pour un site vitrine, 4 à 6 semaines pour un e-commerce. Ces délais incluent les allers-retours de validation. Je tiens mes deadlines — c\'est non-négociable.',
  },
  {
    q: 'Je n\'ai pas encore de logo ni de charte graphique, est-ce un problème ?',
    a: 'Pas du tout. Je peux vous accompagner sur l\'identité visuelle avant de démarrer le développement, ou m\'adapter à votre existant si vous en avez déjà une.',
  },
  {
    q: 'Mon site sera-t-il optimisé pour Google ?',
    a: 'Oui, le SEO technique est intégré dès le départ : balises, performances, structure des URLs, données structurées. Ce n\'est pas une option, c\'est une base. Pour le SEO éditorial (rédaction, stratégie de mots-clés), on peut en discuter.',
  },
  {
    q: 'Que se passe-t-il après la livraison ?',
    a: 'Un mois de suivi est inclus pour corriger les éventuels bugs et répondre à vos questions. Au-delà, je propose des forfaits de maintenance mensuelle si vous avez besoin d\'un suivi régulier.',
  },
  {
    q: 'Puis-je modifier mon site moi-même après livraison ?',
    a: 'Oui. Selon votre profil, j\'intègre un CMS headless (Sanity, Notion, ou autre) qui vous permet de gérer vos contenus sans toucher au code. Je forme aussi mes clients à l\'utilisation.',
  },
]

function FAQItem({ item, index }: { item: typeof FAQ[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="border-b border-white/6"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-6 group"
        onClick={() => setOpen(!open)}
      >
        <span className={`text-sm font-medium transition-colors ${open ? 'text-white' : 'text-white/60 group-hover:text-white/90'}`}>
          {item.q}
        </span>
        <span className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
          open ? 'border-gold/50 text-gold rotate-45' : 'border-white/15 text-white/30'
        }`}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-white/40 leading-relaxed pb-5 max-w-2xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="faq" className="px-8 md:px-10 py-24 border-t border-white/5">
      <div className="max-w-3xl">
        <motion.div
          ref={ref}
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] text-white/25 uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="font-syne font-black text-5xl tracking-tightest leading-none">
            Les questions<br />qu&apos;on me pose.
          </h2>
        </motion.div>

        {inView && FAQ.map((item, i) => (
          <FAQItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
