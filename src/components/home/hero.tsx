"use client";

import { motion } from "framer-motion";

export default function Hero() {
 
  return (
    <section className="relative overflow-hidden rounded-2xl">

      {/* HERO CONTENT */}
      <div className="relative z-20 px-10 py-12">
        
        {/* TAG */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/50">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#5DCAA5]" />
          Disponible pour nouveaux projets
        </div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl text-[clamp(42px,7vw,64px)] font-extrabold leading-[1] tracking-tight"
        >
          On construit des <br />
          sites qui font{" "}
          <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.35)]">
            bouger
          </span>{" "}
          <br />
          les chiffres.
        </motion.h1>

        {/* TEXT */}
        <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
          Du site vitrine pour l'entrepreneur local au e-commerce premium — des interfaces qui convertissent et qui marquent.
        </p>

        {/* ACTIONS */}
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-80">
            Voir les projets →
          </button>

          <button className="text-sm text-white/50 hover:text-white">
            Voir les services →
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div className="relative z-20 flex items-center justify-between border-t border-white/10 px-10 py-8">
        <div className="flex gap-2 text-[11px] text-white/30">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Next.js</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">React</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">GSAP</span>
        </div>

        <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-white/20">
          <div className="h-[1px] w-8 bg-white/20" />
          Scroll
        </div>
      </div>
    </section>
  );
}