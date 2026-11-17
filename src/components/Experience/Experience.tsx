import { useLanguage } from '../../i18n/useLanguage.ts'
import './Experience.css'

function Point({ text }: { text: string }) {
  const parts = text.split(/(\{\{[^}]+\}\})/g)

  return parts.map((part, index) => {
    const token = part.match(/^\{\{(.+)\}\}$/)
    if (!token) return part

    return (
      <span className="experience__tech" key={`${token[1]}-${index}`}>
        {token[1]}
      </span>
    )
  })
}

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="experience" aria-labelledby="experience-title" tabIndex={-1}>
      <header className="experience__head">
        <div>
          <p className="experience__kicker">
            <span className="experience__mark" aria-hidden="true" />
            {t.experienceKicker}
          </p>
          <h2 id="experience-title" className="experience__title">
            {t.experienceTitle}
          </h2>
        </div>
        <p className="experience__year">
          <span className="experience__year-figure">
            1<span className="experience__plus">+</span>
          </span>
          <span className="experience__year-label">{t.experienceYear}</span>
        </p>
      </header>

      <div className="experience__role">
        <div className="experience__identity">
          <p className="experience__position">{t.experienceRole}</p>
          <p className="experience__company">{t.experienceCompany}</p>
          <p className="experience__product">
            <span>{t.experienceProduct}</span>
            <span aria-hidden="true"> · </span>
            {t.experienceProductNote}
          </p>
        </div>
        <p className="experience__scope">{t.experienceScope}</p>
      </div>

      <div className="experience__stack-block">
        <p className="experience__stack-label" id="experience-stack">
          {t.experienceStackLabel}
        </p>
        <ul className="experience__stack" aria-labelledby="experience-stack">
          {t.experienceStack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="experience__areas">
        {t.experienceAreas.map((area, index) => (
          <article className="experience__area" key={area.title} aria-labelledby={`experience-area-${index + 1}`}>
            <p className="experience__index">{String(index + 1).padStart(2, '0')}</p>
            <h3 id={`experience-area-${index + 1}`} className="experience__area-title">
              {area.title}
            </h3>
            <ul className="experience__points">
              {area.points.map((point) => (
                <li key={point}>
                  <span className="experience__point">
                    <Point text={point} />
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
