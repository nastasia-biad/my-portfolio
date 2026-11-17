import { useLanguage } from '../../i18n/useLanguage.ts'
import './InterfaceStage.css'

export function InterfaceStage() {
  const { t } = useLanguage()

  return (
    <div className="stage" aria-hidden="true">
      <p className="stage__figure">{t.figure}</p>
      <span className="stage__bracket stage__bracket--tl" />
      <span className="stage__bracket stage__bracket--br" />
      <span className="stage__ring" />
      <span className="stage__bar" />
      <span className="stage__diamond" />

      <div className="stage__item stage__item--layout">
        <div className="stage__float stage__float--a">
          <div className="stage-card stage-card--layout">
            <div className="stage-card__bar">
              <span className="stage-card__dots">
                <span />
                <span />
                <span />
              </span>
              <span className="stage-card__label">{t.cardLayout}</span>
              <span className="stage-card__meta">{t.cardGrid}</span>
            </div>
            <div className="wire">
              <div className="wire__banner" />
              <div className="wire__split">
                <div className="wire__panel" />
                <div className="wire__notes">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="wire__footer">
                <span className="wire__pill" />
                <span className="wire__pill wire__pill--ghost" />
                <span className="wire__square" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stage__item stage__item--code">
        <div className="stage__float stage__float--b">
          <div className="stage-card stage-card--code">
            <div className="stage-card__bar">
              <span className="stage-card__label">{t.cardSnippet}</span>
              <span className="stage-card__meta">css</span>
            </div>
            <pre className="snippet" translate="no">
              <code>
                <span className="snippet__sel">.display</span>
                <span className="snippet__punct">{' {'}</span>
                {'\n  '}
                <span className="snippet__prop">color</span>
                <span className="snippet__punct">: </span>
                <span className="snippet__val">#f4f1ea</span>
                <span className="snippet__punct">;</span>
                {'\n  '}
                <span className="snippet__prop">font-weight</span>
                <span className="snippet__punct">: </span>
                <span className="snippet__val">800</span>
                <span className="snippet__punct">;</span>
                {'\n}'}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="stage__item stage__item--type">
        <div className="stage__float stage__float--c">
          <div className="stage-card stage-card--type">
            <p className="specimen__mark">Aa</p>
            <div className="specimen__row">
              <span>{t.cardType}</span>
              <span>800</span>
            </div>
            <ul className="swatches">
              <li>
                <span className="swatches__chip swatches__chip--violet" />
              </li>
              <li>
                <span className="swatches__chip swatches__chip--mint" />
              </li>
              <li>
                <span className="swatches__chip swatches__chip--pink" />
              </li>
            </ul>
            <p className="swatches__hexes">
              <span>#A78BFA</span>
              <span>#55E6C1</span>
              <span>#F15BB5</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
