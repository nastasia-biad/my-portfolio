import { useState } from 'react'
import { useLanguage } from '../../i18n/useLanguage.ts'
import './Projects.css'

const DEMO_URL = 'https://nastasia-biad-happy-chaos-refresh.nastu6ka1703.workers.dev/'

const STACK = ['React', 'TypeScript', 'TanStack Start', 'Tailwind CSS'] as const

const SHOTS = [
  {
    id: 'home',
    src: '/images/projects/nord-clean/nord-clean-home.webp',
    width: 2082,
    height: 8394,
  },
  {
    id: 'services',
    src: '/images/projects/nord-clean/nord-clean-services.webp',
    width: 2082,
    height: 5092,
  },
  {
    id: 'pricing',
    src: '/images/projects/nord-clean/nord-clean-pricing.webp',
    width: 2082,
    height: 3162,
  },
  {
    id: 'contact',
    src: '/images/projects/nord-clean/nord-clean-contact.webp',
    width: 2082,
    height: 2652,
  },
] as const

export function Projects() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const [previous, setPrevious] = useState<number | null>(null)
  const current = SHOTS[active]
  const currentCopy = t.projectShots[active]
  const previousShot = previous === null ? null : SHOTS[previous]
  const previousCopy = previous === null ? null : t.projectShots[previous]

  const showShot = (index: number) => {
    if (index === active) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setPrevious(reduceMotion ? null : active)
    setActive(index)
  }

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
          <a
            className="project__demo"
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.projectDemo}. ${t.contactNewTab}`}
          >
            {t.projectDemo}
          </a>
        </div>

        <figure className="project__figure">
          <div className="project__stage">
            {previousShot && previousCopy ? (
              <img
                className="project__shot"
                src={previousShot.src}
                alt=""
                width={previousShot.width}
                height={previousShot.height}
              />
            ) : null}
            <img
              key={current.id}
              className={previousShot ? 'project__shot project__shot--enter' : 'project__shot'}
              src={current.src}
              alt={currentCopy.alt}
              width={current.width}
              height={current.height}
              onAnimationEnd={() => setPrevious(null)}
            />
          </div>
          <div className="project__thumbs" role="group" aria-label={t.projectGallery}>
            {SHOTS.map((shot, index) => {
              const copy = t.projectShots[index]
              const selected = index === active
              return (
                <button
                  key={shot.id}
                  type="button"
                  className="project__thumb"
                  aria-pressed={selected}
                  aria-label={copy.action}
                  onClick={() => showShot(index)}
                >
                  <img
                    src={shot.src}
                    alt={copy.alt}
                    width={shot.width}
                    height={shot.height}
                  />
                </button>
              )
            })}
          </div>
          <figcaption className="project__caption">{currentCopy.label}</figcaption>
        </figure>
      </article>

      <p className="projects__more">{t.projectsNext}</p>
    </section>
  )
}
