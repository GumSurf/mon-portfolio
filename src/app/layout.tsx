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
  metadataBase: new URL('https://gabrielchriste.fr'),

  title: 'Gabriel Christe, Développeur web freelance',

  description:
    "Du site vitrine pour l'entrepreneur local au e-commerce premium, des interfaces qui convertissent et qui marquent.",

  openGraph: {
    title: 'Gabriel Christe, Développeur web freelance',
    description: 'Des interfaces qui convertissent et qui marquent.',
    type: 'website',
    locale: 'fr_FR',
  },

  twitter: {
    card: 'summary_large_image',
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