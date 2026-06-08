'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// Remplace par ton lien Calendly
const CALENDLY_URL = 'https://calendly.com/gabriel-christe/30min'

export function CalendlySection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (loaded) return
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => setLoaded(true)
    document.head.appendChild(script)
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script)
    }
  }, [loaded])

  return (
    <section id="contact" className="px-8 md:px-10 py-24 border-t border-white/5">

      {/* Style pour masquer la scrollbar du widget Calendly */}
      <style>{`
        .calendly-inline-widget iframe {
          scrollbar-width: none !important;
        }
        .calendly-inline-widget iframe::-webkit-scrollbar {
          display: none !important;
        }
        .calendly-wrapper {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .calendly-wrapper::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Colonne gauche, texte */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] text-white/25 uppercase tracking-widest mb-4">Démarrer</p>
          <h2 className="font-syne font-black text-5xl tracking-tightest leading-none mb-6">
            Je démarre<br />
            <span className="text-stroke">quelque chose ?</span>
          </h2>
          <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-sm">
            Réservez un appel découverte de 30 minutes. Je parle de votre projet,
            de vos objectifs, et je vous donne une première estimation sans engagement.
          </p>

          <ul className="flex flex-col gap-3 mb-10">
            {[
              '30 minutes, sans engagement',
              'Estimation budgétaire en direct',
              'Conseils concrets même si on ne travaille pas ensemble',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/50">
                <span className="text-gold">✓</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Fallback mobile, bouton direct */}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden inline-flex items-center gap-2 bg-gold text-background text-sm font-bold px-7 py-3.5 rounded-full hover:opacity-85 transition-opacity mb-6"
          >
            Réserver un appel
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <p className="text-xs text-white/20">
            Vous préférez un email ?{' '}
            <a
              href="mailto:contact@gabrielchriste.fr"
              className="text-white/40 hover:text-white/70 transition-colors underline underline-offset-2"
            >
              contact@gabrielchriste.fr
            </a>
          </p>
        </motion.div>

        {/* Colonne droite, widget Calendly habillé */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hidden md:block relative rounded-2xl border border-white/8 overflow-hidden"
          style={{ background: '#0c0c0c' }}
        >
          {/* Barre de titre custom */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse" />
              <span className="text-xs text-white/30 uppercase tracking-widest">
                Disponibilités en temps réel
              </span>
            </div>
            <span className="text-xs text-white/15">calendly.com</span>
          </div>

          {/* Loader */}
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-background/80">
              <div className="flex flex-col items-center gap-3">
                <div className="w-6 h-6 border border-white/20 border-t-gold rounded-full animate-spin" />
                <span className="text-xs text-white/20 uppercase tracking-widest">Chargement…</span>
              </div>
            </div>
          )}

          {/* Widget */}
          <div className="calendly-wrapper overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&hide_event_type_details=0&background_color=0c0c0c&text_color=ffffff&primary_color=c4a050`}
              style={{
                width: '100%',
                height: '600px',
                overflow: 'hidden',
              }}
            />
          </div>

          {/* Ligne déco gold en bas */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </motion.div>

      </div>
    </section>
  )
}
