export interface Project {
  index: string
  name: string
  slug: string
  tags: string[]
  description: string
  stack: string
  year: string
  sector: string
  url: string
  chips: { label: string; color: 'green' | 'blue' | 'gold' }[]
  screenshot: string
}

export interface Service {
  name: string
  description: string
  price: string
  includes: string[]
  highlighted?: boolean
}

export interface NavLink {
  label: string
  href: string
}
