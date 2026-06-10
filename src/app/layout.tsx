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
  title: 'Gabriel Christe, Développeur web freelance',
  description:
    'Du site vitrine pour l\'entrepreneur local au e-commerce premium, des interfaces qui convertissent et qui marquent.',
  openGraph: {
    title: 'Gabriel Christe, Développeur web freelance',
    description: 'Des interfaces qui convertissent et qui marquent.',
    type: 'website',
    images: [
      {
        url: "/public/projects/portfolio-gabrel-christe.png",
        width: 1200,
        height: 630,
        alt: "Preview du site",
      },
    ],
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
