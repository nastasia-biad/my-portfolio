import { useState } from 'react'
import { useLanguage } from '../../i18n/useLanguage.ts'
import './Projects.css'

const DEMO_URL = 'https://nastasia-biad-happy-chaos-refresh.nastu6ka1703.workers.dev/'
const FORMA_DEMO_URL = 'https://forma-store-en0.pages.dev/'

const STACK = ['React', 'TypeScript', 'TanStack Start', 'Tailwind CSS'] as const
const FORMA_STACK = ['React', 'TypeScript', 'React Router', 'Vite'] as const

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

const FORMA_SHOTS = [
  {
    id: 'home',
    src: '/images/projects/forma/forma-home.webp',
    width: 2426,
    height: 12494,
  },
  {
    id: 'catalog',
    src: '/images/projects/forma/forma-catalog.webp',
    width: 2426,
    height: 3692,
  },
  {
    id: 'product',
    src: '/images/projects/forma/forma-product.webp',
    width: 2426,
    height: 3964,
  },
  {
    id: 'journal',
    src: '/images/projects/forma/forma-journal.webp',
    width: 2426,
    height: 6328,
  },
  {
    id: 'about',
    src: '/images/projects/forma/forma-about.webp',
    width: 2426,
    height: 9568,
  },
] as const

type ProjectShot = {
  id: string
  src: string
  width: number
  height: number
}

type ShotCopy = {
  label: string
  alt: string
  action: string
}

function ProjectGallery({
  shots,
  shotCopy,
  galleryLabel,
  thumbsClassName = 'project__thumbs',
}: {
  shots: readonly ProjectShot[]
  shotCopy: readonly ShotCopy[]
  galleryLabel: string
  thumbsClassName?: string
}) {
  const [active, setActive] = useState(0)
  const [previous, setPrevious] = useState<number | null>(null)
  const current = shots[active]
  const currentCopy = shotCopy[active]
  const previousShot = previous === null ? null : shots[previous]
  const previousCopy = previous === null ? null : shotCopy[previous]

  const showShot = (index: number) => {
    if (index === active) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setPrevious(reduceMotion ? null : active)
    setActive(index)
  }

  return (
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
      <div className={thumbsClassName} role="group" aria-label={galleryLabel}>
        {shots.map((shot, index) => {
          const copy = shotCopy[index]
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
              <img src={shot.src} alt={copy.alt} width={shot.width} height={shot.height} />
            </button>
          )
        })}
      </div>
      <figcaption className="project__caption">{currentCopy.label}</figcaption>
    </figure>
  )
}

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

        <ProjectGallery shots={SHOTS} shotCopy={t.projectShots} galleryLabel={t.projectGallery} />
      </article>

      <article className="project" id="forma" aria-labelledby="project-forma">
        <div className="project__copy">
          <p className="project__meta">
            <span className="project__index">02</span>
            <span>{t.formaCategory}</span>
          </p>
          <h3 id="project-forma" className="project__name">
            <span>Forma</span>
          </h3>
          <p className="project__description">{t.formaDescription}</p>
          <ul className="project__stack" aria-label={t.projectStackLabel}>
            {FORMA_STACK.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            className="project__demo"
            href={FORMA_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.projectDemo}. ${t.contactNewTab}`}
          >
            {t.projectDemo}
          </a>
        </div>

        <ProjectGallery
          shots={FORMA_SHOTS}
          shotCopy={t.formaShots}
          galleryLabel={t.formaGallery}
          thumbsClassName="project__thumbs project__thumbs--five"
        />

        <div className="project__details">
          <section className="project__detail">
            <h4 className="project__detail-title">{t.formaAboutTitle}</h4>
            <p className="project__detail-text">{t.formaAbout}</p>
          </section>
          <section className="project__detail">
            <h4 className="project__detail-title">{t.formaGoalsTitle}</h4>
            <ul className="project__points">
              {t.formaGoals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="project__detail">
            <h4 className="project__detail-title">{t.formaRoleTitle}</h4>
            <p className="project__detail-text">{t.formaRole}</p>
          </section>
          <section className="project__detail project__detail--wide">
            <h4 className="project__detail-title">{t.formaFeaturesTitle}</h4>
            <ul className="project__points">
              {t.formaFeatures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      <p className="projects__more">{t.projectsNext}</p>
    </section>
  )
}
