import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gabrielchriste.fr/'),

  title: 'Gabriel Christe, Développeur web freelance',
  description:
    "Du site vitrine pour l'entrepreneur local au e-commerce premium, des interfaces qui convertissent et qui marquent.",

  openGraph: {
    title: 'Gabriel Christe, Développeur web freelance',
    description: 'Des interfaces qui convertissent et qui marquent.',
    url: 'https://www.gabrielchriste.fr/',
    siteName: 'Gabriel Christe',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/projects/portfolio-gabrel-christe.png',
        width: 1200,
        height: 630,
        alt: 'Preview du site Gabriel Christe',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Christe, Développeur web freelance',
    description: 'Des interfaces qui convertissent et qui marquent.',
    images: ['/projects/portfolio-gabrel-christe.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={syne.variable}>
      <body className="font-syne bg-background text-white antialiased">
        {children}
      </body>
    </html>
  )
}