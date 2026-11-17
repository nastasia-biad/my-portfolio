import { useLanguage } from '../../i18n/useLanguage.ts'
import './Contact.css'

const LINKS = [
  {
    id: 'email',
    href: 'mailto:nastu6ka97@mail.ru',
    value: 'nastu6ka97@mail.ru',
    external: false,
  },
  {
    id: 'github',
    href: 'https://github.com/nastasia-biad',
    value: 'github.com/nastasia-biad',
    external: true,
  },
  {
    id: 'telegram',
    href: 'https://t.me/nastasia_biad',
    value: '@nastasia_biad',
    external: true,
  },
] as const

export function Contact() {
  const { t } = useLanguage()
  const labels = {
    email: t.contactEmail,
    github: t.contactGithub,
    telegram: t.contactTelegram,
  } as const

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="contact__top">
        <div className="contact__intro">
          <p className="contact__kicker">
            <span className="contact__mark" aria-hidden="true" />
            {t.navContact}
          </p>
          <h2 id="contact-title" className="contact__title">
            {t.contactLines.map((line) => (
              <span key={line.text} className={line.accent ? 'contact__line contact__line--accent' : 'contact__line'}>
                {line.text}
                {line.accent ? <span className="contact__period">.</span> : null}
              </span>
            ))}
          </h2>
        </div>
        <p className="contact__lead">{t.contactLead}</p>
      </div>

      <div className="contact__panel">
        <p className="contact__cta">{t.contactCta}</p>
        <ul className="contact__list">
          {LINKS.map((link, index) => {
            const label = labels[link.id]
            const name = link.external
              ? `${label}. ${link.value}. ${t.contactNewTab}`
              : `${label}. ${link.value}`

            return (
              <li key={link.id}>
                <a
                  className="contact__link"
                  href={link.href}
                  aria-label={name}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <span className="contact__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="contact__body">
                    <span className="contact__label">{label}</span>
                    <span className="contact__value">{link.value}</span>
                  </span>
                  <span className="contact__arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
