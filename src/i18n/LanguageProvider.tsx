import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { copy, type Language } from './copy.ts'
import { LanguageContext } from './language-context.ts'

const STORAGE_KEY = 'portfolio-language'

function readStoredLanguage(): Language {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (value === 'en' || value === 'ru') return value
  } catch {
    return 'en'
  }

  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(readStoredLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    document.title = copy[language].metaTitle

    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute('content', copy[language].metaDescription)

    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      /* Storage can be unavailable in private browsing. */
    }
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: copy[language],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
