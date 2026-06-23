import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales, Gabriel Christe',
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
          'Nom : Gabriel Christe',
          'Statut : Auto-entrepreneur',
          'SIRET : 98342235300018',
          'Adresse : contact@gabrielchriste.fr',
          'Email : contact@gabrielchriste.fr',
          'Téléphone : +33 6 38 87 05 62',
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
          "L'ensemble du contenu présent sur ce site (textes, images, éléments graphiques, code source et réalisations) est la propriété de Gabriel Christe.",
          "Toute reproduction, représentation ou utilisation sans autorisation préalable est interdite.",
        ],
      },
    ],
  },
  {
    id: 'confidentialite',
    title: 'Politique de confidentialité',
    content: [
      {
        subtitle: 'Collecte des données',
        text: [
          "Ce site ne collecte pas directement de données personnelles via un formulaire de contact.",
          "Toutefois, un service de prise de rendez-vous externe, Calendly, est intégré au site afin de permettre aux visiteurs de réserver un échange.",
        ],
      },
      {
        subtitle: 'Données traitées via Calendly',
        text: [
          "Lors de la prise de rendez-vous via Calendly, certaines données peuvent être collectées :",
          "• Nom et prénom",
          "• Adresse email",
          "• Informations renseignées lors de la réservation",
          "• Informations liées au rendez-vous choisi",
          "Ces données sont traitées par Calendly conformément à leur politique de confidentialité.",
        ],
      },
      {
        subtitle: 'Finalité du traitement',
        text: [
          "Les données collectées via Calendly sont utilisées uniquement pour organiser les rendez-vous, préparer les échanges et répondre aux demandes des visiteurs.",
          "Elles ne sont pas vendues ni utilisées à des fins commerciales sans consentement.",
        ],
      },
      {
        subtitle: 'Cookies',
        text: [
          "L'intégration de Calendly peut nécessiter l'utilisation de cookies ou technologies similaires pour assurer le fonctionnement du service.",
          "Pour plus d'informations, consultez la politique de confidentialité de Calendly.",
        ],
      },
      {
        subtitle: 'Hébergement et services tiers',
        text: [
          "Le site est hébergé par Vercel Inc.",
          "Certains services tiers peuvent traiter des données techniques nécessaires au fonctionnement du site.",
        ],
      },
      {
        subtitle: 'Vos droits',
        text: [
          "Conformément au RGPD, vous disposez des droits suivants :",
          "• Droit d'accès à vos données",
          "• Droit de rectification",
          "• Droit à l'effacement",
          "• Droit d'opposition",
          "Pour exercer vos droits concernant vos données personnelles, contactez : contact@gabrielchriste.fr",
        ],
      },
      {
        subtitle: 'Réclamation',
        text: [
          "Vous pouvez adresser une réclamation auprès de la CNIL :",
          "https://www.cnil.fr",
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
