'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/lib/data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-white/5'
          : ''
      }`}
    >
      <nav className="flex items-center justify-between px-8 md:px-10 py-6">
        <motion.a
          href="#"
          className="font-syne font-black text-lg tracking-tightest text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Gabriel Christe
        </motion.a>

        <motion.ul
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs text-white/40 hover:text-white/90 transition-colors uppercase tracking-widest2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-bold border border-white/20 text-background px-5 py-2.5 rounded-sm hover:border-white/40 transition-all"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Contact ↗
        </motion.a>

        <button
          className="md:hidden text-white/60 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h14M4 11h14M4 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          className="md:hidden bg-background border-t border-white/5 px-8 py-6 flex flex-col gap-6"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/50 hover:text-white transition-colors uppercase tracking-widest"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-bold bg-white text-background px-5 py-3 rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </motion.div>
      )}
    </header>
  )
}
