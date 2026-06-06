import type { Project, Service, NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Projets', href: '#projets' },
  { label: 'Projets', href: '#projets' },
  { label: 'À propos', href: '#apropos' },
]

export const PROJECTS: Project[] = [
  {
    index: '01',
    name: 'Lady Beauté',
    slug: 'lady-beaute',
    tags: ['Site vitrine', 'Next.js', 'Institut beauté'],
    description:
      'Site vitrine pour un institut de beauté à Lanester. Carousel de soins, prise de rendez-vous en ligne, design chaud et élégant qui reflète l\'univers de la marque.',
    stack: 'Next.js · Tailwind · Fresha API',
    year: '2025',
    sector: 'Beauté & bien-être',
    url: 'https://www.ladybeaute.fr',
    chips: [
      { label: '+40% de RDV en ligne', color: 'green' },
      { label: 'Score Perf. 96/100', color: 'blue' },
    ],
    screenshot: '/projects/lady-beaute.png',
  },
  {
    index: '02',
    name: 'Corrignan',
    slug: 'corrignan',
    tags: ['Site vitrine', 'Next.js', 'Couverture'],
    description:
      'Site vitrine pour une entreprise de couverture en Morbihan. Direction artistique noir & or, mise en valeur du savoir-faire artisanal et génération de devis en ligne.',
    stack: 'Next.js · Tailwind · TypeScript',
    year: '2025',
    sector: 'Artisanat BTP',
    url: 'https://corrignan.fr',
    chips: [
      { label: 'Image premium', color: 'gold' },
      { label: 'Leads qualifiés', color: 'green' },
    ],
    screenshot: '/projects/corrignan.png',
  },
]

export const SERVICES: Service[] = [
  {
    name: 'Site vitrine',
    description: 'Pour les entrepreneurs locaux qui veulent une présence en ligne sérieuse et efficace.',
    price: 'À partir de 800€',
    includes: [
      'Design sur-mesure',
      'Responsive mobile-first',
      'SEO de base',
      'Formulaire de contact',
      'Livraison en 2-3 semaines',
    ],
  },
  {
    name: 'Site e-commerce',
    description: 'Pour les marques qui veulent vendre en ligne avec une expérience utilisateur premium.',
    price: 'À partir de 2 500€',
    includes: [
      'Design premium awwwards-ready',
      'Shopify ou solution custom',
      'Animations GSAP / Framer',
      'Optimisation conversions',
      'SEO avancé',
      'Livraison en 4-6 semaines',
    ],
    highlighted: true,
  },
  {
    name: 'Refonte & optimisation',
    description: 'Votre site existe déjà mais ne convertit pas ? On repart sur une base saine.',
    price: 'Sur devis',
    includes: [
      'Audit complet',
      'Redesign UI/UX',
      'Migration technique',
      'Optimisation performances',
      'Suivi 1 mois inclus',
    ],
  },
]
