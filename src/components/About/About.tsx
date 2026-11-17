import { useLanguage } from '../../i18n/useLanguage.ts'
import './About.css'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="about" aria-labelledby="about-title" tabIndex={-1}>
      <div className="about__layout">
        <p className="about__stat">
          <span className="about__figure">
            1<span className="about__plus">+</span>
          </span>
          <span className="about__figure-label">{t.aboutStatLabel}</span>
        </p>

        <div className="about__copy">
          <p className="about__kicker">
            <span className="about__mark" aria-hidden="true" />
            {t.aboutKicker}
          </p>
          <h2 id="about-title" className="about__title">
            {t.aboutTitle}
          </h2>
          <p className="about__role">{t.aboutRole}</p>
          <div className="about__text">
            {t.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <ul className="about__tracks">
        {t.aboutTracks.map((track, index) => (
          <li key={track.title} className="about__track">
            <p className="about__track-index">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="about__track-title">{track.title}</h3>
            <p className="about__track-text">{track.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
