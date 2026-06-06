'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealOptions {
  y?: number
  duration?: number
  delay?: number
  stagger?: number
}

export function useGsapReveal<T extends HTMLElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll('[data-reveal]')
    const elements = targets.length > 0 ? targets : [el]

    gsap.fromTo(
      elements,
      { y: options.y ?? 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: options.duration ?? 0.9,
        delay: options.delay ?? 0,
        stagger: options.stagger ?? 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [options.delay, options.duration, options.stagger, options.y])

  return ref
}
