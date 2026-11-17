import { useLanguage } from '../../i18n/useLanguage.ts'
import './LanguageSwitch.css'

export function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="lang" role="group" aria-label={t.languageLabel}>
      <button
        type="button"
        className="lang__btn"
        lang="ru"
        aria-pressed={language === 'ru'}
        aria-label="Русский"
        onClick={() => setLanguage('ru')}
      >
        RU
      </button>
      <button
        type="button"
        className="lang__btn"
        lang="en"
        aria-pressed={language === 'en'}
        aria-label="English"
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  )
}
