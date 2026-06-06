import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales — Gabriel Christe',
  description: 'Mentions légales et politique de confidentialité de Gabriel Christe.',
  robots: { index: false },
}

const SECTIONS = [
  {
    id: 'mentions',
    title: 'Mentions légales',
    content: [
      {
        subtitle: 'Éditeur du site',
        text: [
          'Nom : [TON NOM COMPLET]',
          'Statut : Auto-entrepreneur / [TON STATUT JURIDIQUE]',
          'SIRET : [TON NUMÉRO SIRET]',
          'Adresse : [TON ADRESSE]',
          'Email : contact@gabrielchriste.fr',
          'Téléphone : [TON NUMÉRO]',
        ],
      },
      {
        subtitle: 'Hébergement',
        text: [
          'Vercel Inc.',
          '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
          'https://vercel.com',
        ],
      },
      {
        subtitle: 'Propriété intellectuelle',
        text: [
          "L'ensemble du contenu de ce site (textes, visuels, code) est la propriété exclusive de [TON NOM]. Toute reproduction, même partielle, est interdite sans autorisation préalable.",
        ],
      },
    ],
  },
  {
    id: 'confidentialite',
    title: 'Politique de confidentialité',
    content: [
      {
        subtitle: 'Données collectées',
        text: [
          'Ce site collecte les données suivantes dans le cadre de la prise de contact :',
          '• Nom et prénom',
          '• Adresse email',
          '• Contenu du message',
          'Ces données sont collectées via le formulaire de contact et/ou Calendly (calendly.com).',
        ],
      },
      {
        subtitle: 'Finalité du traitement',
        text: [
          'Les données collectées sont utilisées uniquement pour répondre à vos demandes de contact et gérer les rendez-vous. Elles ne sont ni vendues, ni transmises à des tiers à des fins commerciales.',
        ],
      },
      {
        subtitle: 'Base légale',
        text: [
          'Le traitement est basé sur votre consentement explicite lors de la prise de contact (RGPD, art. 6.1.a).',
        ],
      },
      {
        subtitle: 'Durée de conservation',
        text: [
          'Les données sont conservées 3 ans à compter du dernier contact, conformément aux recommandations de la CNIL.',
        ],
      },
      {
        subtitle: 'Vos droits',
        text: [
          "Conformément au RGPD, vous disposez des droits suivants :",
          "• Droit d'accès à vos données",
          "• Droit de rectification",
          "• Droit à l'effacement ('droit à l'oubli')",
          "• Droit d'opposition",
          "Pour exercer ces droits, contactez : contact@gabrielchriste.fr",
        ],
      },
      {
        subtitle: 'Cookies',
        text: [
          "Ce site n'utilise pas de cookies à des fins publicitaires ou de tracking. Calendly peut déposer ses propres cookies lors de l'utilisation du widget de réservation — consultez leur politique de confidentialité sur calendly.com.",
        ],
      },
      {
        subtitle: 'Réclamation',
        text: [
          'En cas de litige, vous pouvez contacter la CNIL : www.cnil.fr',
        ],
      },
    ],
  },
]

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-background text-white font-syne">
      {/* Nav minimaliste */}
      <div className="px-8 md:px-10 py-6 border-b border-white/5 flex items-center justify-between">
        <Link
          href="/"
          className="font-black text-lg tracking-tightest hover:opacity-70 transition-opacity"
        >
          Gabriel Christe
        </Link>
        <Link
          href="/"
          className="text-xs text-white/35 hover:text-white/70 transition-colors flex items-center gap-2 uppercase tracking-widest"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12 7H2M7 2L2 7l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Retour
        </Link>
      </div>

      <div className="px-8 md:px-10 py-16 max-w-3xl">
        <p className="text-[11px] text-white/25 uppercase tracking-widest mb-4">Légal</p>
        <h1 className="font-black text-4xl tracking-tightest leading-none mb-4">
          Mentions légales &<br />Confidentialité
        </h1>
        <p className="text-sm text-white/30 mb-16">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
        </p>

        {/* Ancres rapides */}
        <div className="flex gap-4 mb-16 border-b border-white/5 pb-8">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs text-white/35 hover:text-white/70 transition-colors uppercase tracking-widest"
            >
              {s.title}
            </a>
          ))}
        </div>

        {SECTIONS.map((section) => (
          <section key={section.id} id={section.id} className="mb-16">
            <h2 className="font-black text-2xl tracking-tightest mb-8 pb-4 border-b border-white/6">
              {section.title}
            </h2>
            <div className="flex flex-col gap-8">
              {section.content.map((block) => (
                <div key={block.subtitle}>
                  <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider mb-3">
                    {block.subtitle}
                  </h3>
                  <div className="flex flex-col gap-1.5">
                    {block.text.map((line, i) => (
                      <p key={i} className="text-sm text-white/35 leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
