import { useLanguage } from '../../i18n/useLanguage.ts'
import './Projects.css'

const STACK = ['React', 'TypeScript', 'TanStack Start', 'Tailwind CSS'] as const

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title" tabIndex={-1}>
      <header className="projects__head">
        <p className="projects__kicker">
          <span className="projects__mark" aria-hidden="true" />
          {t.projectsKicker}
        </p>
        <h2 id="projects-title" className="projects__title">
          {t.projectsTitle}
        </h2>
      </header>

      <article className="project" aria-labelledby="project-nord-clean">
        <div className="project__copy">
          <p className="project__meta">
            <span className="project__index">01</span>
            <span>{t.projectCategory}</span>
          </p>
          <h3 id="project-nord-clean" className="project__name">
            <span>Nord</span>
            <span className="project__name-accent">Clean</span>
          </h3>
          <p className="project__description">{t.projectDescription}</p>
          <ul className="project__stack" aria-label={t.projectStackLabel}>
            {STACK.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="project__status">{t.projectStatus}</p>
        </div>

        <figure className="project__figure">
          <div className="project__poster" aria-hidden="true">
            <div className="project__sheet">
              <p className="project__poster-index">01</p>
              <p className="project__stamp">Happy chaos</p>
              <div className="project__bars">
                <span />
                <span />
                <span />
              </div>
              <span className="project__ring" />
              <p className="project__poster-name">
                Nord
                <span>Clean</span>
              </p>
            </div>
          </div>
          <figcaption className="project__caption">{t.projectVisual}</figcaption>
        </figure>
      </article>

      <p className="projects__more">{t.projectsNext}</p>
    </section>
  )
}
