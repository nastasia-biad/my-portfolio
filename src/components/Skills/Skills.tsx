import { useLanguage } from '../../i18n/useLanguage.ts'
import './Skills.css'

export function Skills() {
  const { t } = useLanguage()
  const [core, tools, extra] = t.skillsGroups

  return (
    <section id="skills" className="skills" aria-labelledby="skills-title" tabIndex={-1}>
      <header className="skills__head">
        <div>
          <p className="skills__kicker">
            <span className="skills__mark" aria-hidden="true" />
            {t.skillsKicker}
          </p>
          <h2 id="skills-title" className="skills__title">
            {t.skillsTitle}
          </h2>
        </div>
        <p className="skills__lead">{t.skillsLead}</p>
      </header>

      <div className="skills__core">
        <div className="skills__label">
          <span className="skills__index">01</span>
          <div>
            <h3 id="skills-core" className="skills__group">
              {core.title}
            </h3>
            <p className="skills__note">{core.note}</p>
          </div>
        </div>
        <ul className="skills__words" aria-labelledby="skills-core">
          {core.items.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="skills__split">
        <div className="skills__tools">
          <div className="skills__label">
            <span className="skills__index">02</span>
            <div>
              <h3 id="skills-tools" className="skills__group">
                {tools.title}
              </h3>
              <p className="skills__note">{tools.note}</p>
            </div>
          </div>
          <ul className="skills__rows" aria-labelledby="skills-tools">
            {tools.items.map((item) => (
              <li key={item}>
                <span className="skills__dash" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="skills__extra">
          <div className="skills__label">
            <span className="skills__index">03</span>
            <div>
              <h3 id="skills-extra" className="skills__group">
                {extra.title}
              </h3>
              <p className="skills__note">{extra.note}</p>
            </div>
          </div>
          <ul className="skills__stack" aria-labelledby="skills-extra">
            {extra.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
