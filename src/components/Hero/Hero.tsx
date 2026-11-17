import { ButtonLink } from '../Button/ButtonLink.tsx'
import { InterfaceStage } from '../InterfaceStage/InterfaceStage.tsx'
import { useLanguage } from '../../i18n/useLanguage.ts'
import './Hero.css'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="hero__copy">
        <p className="hero__eyebrow">
          <span className="hero__mark" aria-hidden="true" />
          <span>{t.eyebrow}</span>
        </p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__line">{t.line1}</span>
          <span className="hero__line hero__line--accent">{t.line2}</span>
          <span className="hero__line">
            {t.line3}
            <span className="hero__period">.</span>
          </span>
        </h1>
        <p className="hero__description">{t.description}</p>
        <div className="hero__actions">
          <ButtonLink variant="primary" href="#projects">
            {t.primaryCta}
          </ButtonLink>
          <ButtonLink variant="secondary" href="#contact">
            {t.secondaryCta}
          </ButtonLink>
        </div>
      </div>
      <InterfaceStage />
    </section>
  )
}
