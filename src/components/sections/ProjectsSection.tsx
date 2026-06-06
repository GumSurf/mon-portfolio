'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { PROJECTS } from '@/lib/data'
import type { Project } from '@/types'

const chipStyles = {
  green: 'bg-teal-accent/10 text-teal-accent',
  blue: 'bg-blue-400/10 text-blue-400',
  gold: 'bg-gold/10 text-gold',
}

// Layout mobile — card complète avec image visible
function ProjectCardMobile({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <motion.div
      ref={ref}
      className="border-t border-white/8"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Screenshot en haut */}
      <div className="relative w-full aspect-[16/10] bg-[#111] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-10 bg-[#111] px-3.5 py-2 flex items-center gap-2 border-b border-white/6">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#febc2e]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 bg-white/5 rounded px-2 py-0.5 text-[9px] text-white/25 truncate">
            {project.url.replace('https://', '')}
          </div>
        </div>
        <Image
          src={project.screenshot}
          alt={`Capture d'écran de ${project.name}`}
          fill
          className="object-cover object-top pt-7"
          sizes="100vw"
        />
      </div>

      {/* Infos en dessous */}
      <div className="px-6 py-8 flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[11px] text-white/20 tracking-widest block mb-2">{project.index} —</span>
            <h3 className="font-syne font-black text-3xl tracking-tighter leading-tight">
              {project.name}
            </h3>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 text-xl mt-1"
          >
            ↗
          </a>
        </div>

        <p className="text-sm text-white/35 leading-relaxed">
          {project.description}
        </p>

        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] text-white/30 border border-white/8 rounded-full px-2.5 py-1 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          {project.chips.map((chip) => (
            <span key={chip.label} className={`text-[11px] rounded-full px-2.5 py-1 ${chipStyles[chip.color]}`}>
              {chip.label}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-1.5 pt-2 border-t border-white/6">
          {[
            { label: 'Stack', value: project.stack },
            { label: 'Année', value: project.year },
            { label: 'Secteur', value: project.sector },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-3">
              <span className="text-[11px] text-white/20 uppercase tracking-wider w-14">{row.label}</span>
              <span className="text-xs text-white/45">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(headerRef, { once: true })
  const [hovered, setHovered] = useState<string | null>(null)
  const activeProject = PROJECTS.find((p) => p.slug === hovered) ?? PROJECTS[0]

  return (
    <section id="projets" className="pt-24">
      <motion.div
        ref={headerRef}
        className="px-8 md:px-10 pb-16 flex items-end justify-between gap-8"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div>
          <p className="text-[11px] text-white/25 uppercase tracking-widest2 mb-4">
            Derniers travaux
          </p>
          <h2 className="font-syne font-black text-5xl tracking-tightest leading-none mb-3">
            Ce qu&apos;on<br />a construit.
          </h2>
          <p className="text-sm text-white/25 italic">
            Bientôt le vôtre ?
          </p>
          <span className="text-sm text-white/20 shrink-0 md:hidden">
            {String(PROJECTS.length).padStart(2, '0')} projets
          </span>
        </div>
        <span className="text-sm text-white/20 shrink-0 hidden md:block">
          {String(PROJECTS.length).padStart(2, '0')} projets
        </span>
      </motion.div>

      {/* Mobile — cards classiques */}
      <div className="md:hidden">
        {PROJECTS.map((project, i) => (
          <ProjectCardMobile key={project.slug} project={project} index={i} />
        ))}
      </div>

      {/* Desktop — liste + image sticky */}
      <div className="hidden md:grid md:grid-cols-2 min-h-[600px]">
        <div>
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.slug}
              className="border-t border-white/8 group cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(project.slug)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="px-8 md:px-10 py-10 flex flex-col gap-5 transition-colors duration-300 hover:bg-white/[0.02]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-[11px] text-white/20 tracking-widest shrink-0">
                      {project.index} —
                    </span>
                    <h3 className={`font-syne font-black text-3xl md:text-4xl tracking-tighter leading-tight transition-colors duration-300 ${
                      hovered === project.slug ? 'text-white' : 'text-white/60'
                    }`}>
                      {project.name}
                    </h3>
                  </div>
                  <motion.span
                    className="text-white/30 mt-1 shrink-0"
                    animate={{ x: hovered === project.slug ? 4 : 0, opacity: hovered === project.slug ? 1 : 0.3 }}
                    transition={{ duration: 0.2 }}
                  >
                    ↗
                  </motion.span>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-white/30 border border-white/8 rounded-full px-2.5 py-1 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-white/30 leading-relaxed max-w-sm">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.chips.map((chip) => (
                      <span key={chip.label} className={`text-[11px] rounded-full px-2.5 py-1 ${chipStyles[chip.color]}`}>
                        {chip.label}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs text-white/30 border border-white/10 rounded-full px-3 py-1.5 hover:text-white hover:border-white/30 transition-all"
                  >
                    Voir le site →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/8" />
        </div>

        {/* Image sticky desktop */}
        <div className="flex sticky top-24 self-start items-center justify-center p-10 h-[calc(100vh-6rem)] max-h-[600px]">
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.slug}
                className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.97, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bg-[#111] px-3.5 py-2.5 flex items-center gap-2 border-b border-white/6">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 bg-white/5 rounded px-2.5 py-1 text-[10px] text-white/25 truncate">
                    {activeProject.url.replace('https://', '')}
                  </div>
                </div>
                <div className="relative w-full h-full bg-[#1a1a1a]">
                  <Image
                    src={activeProject.screenshot}
                    alt={`Capture d'écran de ${activeProject.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="50vw"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="border-t border-white/6 px-8 md:px-10 py-8 flex items-center justify-between">
        <p className="text-xs text-white/15 max-w-sm">
          Chaque projet est un case study complet avec contexte, process et résultats.
        </p>
        
        <a
          href="#apropos"
          className="text-sm text-white/35 border border-white/10 rounded-full px-5 py-2.5 hover:text-white/70 hover:border-white/20 transition-all"
        >
          En savoir plus →
        </a>
      </div>
    </section>
  )
}