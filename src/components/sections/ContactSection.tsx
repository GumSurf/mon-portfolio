'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Remplace par ton endpoint (Resend, Formspree, etc.)
    setSent(true)
  }

  return (
    <section id="contact" className="px-8 md:px-10 py-24 border-t border-white/5">
      <motion.div
        ref={ref}
        className="max-w-2xl"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[11px] text-white/25 uppercase tracking-widest mb-4">Contact</p>
        <h2 className="font-syne font-black text-5xl tracking-tightest leading-none mb-4">
          On démarre<br />quelque chose ?
        </h2>
        <p className="text-sm text-white/40 mb-12 leading-relaxed">
          Décrivez votre projet, je vous réponds sous 24h.
        </p>

        {sent ? (
          <div className="border border-teal-accent/30 bg-teal-accent/5 rounded-2xl p-8 text-center">
            <p className="text-teal-accent font-bold text-lg mb-2">Message envoyé ✓</p>
            <p className="text-sm text-white/40">Je reviens vers vous rapidement.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Votre nom"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-white/4 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/25 transition-colors"
              />
              <input
                type="email"
                placeholder="Votre email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-white/4 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/25 transition-colors"
              />
            </div>
            <textarea
              placeholder="Décrivez votre projet..."
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-white/4 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/25 transition-colors resize-none"
            />
            <button
              type="submit"
              className="self-start inline-flex items-center gap-2 bg-white text-background text-sm font-bold px-7 py-3.5 rounded-full hover:opacity-85 transition-opacity"
            >
              Envoyer →
            </button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
