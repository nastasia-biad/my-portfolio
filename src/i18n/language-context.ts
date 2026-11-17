import { createContext } from 'react'
import type { Copy, Language } from './copy.ts'

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: Copy
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
