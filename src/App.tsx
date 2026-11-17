import { About } from './components/About/About.tsx'
import { Contact } from './components/Contact/Contact.tsx'
import { Experience } from './components/Experience/Experience.tsx'
import { Header } from './components/Header/Header.tsx'
import { Hero } from './components/Hero/Hero.tsx'
import { Projects } from './components/Projects/Projects.tsx'
import { Skills } from './components/Skills/Skills.tsx'
import { LanguageProvider } from './i18n/LanguageProvider.tsx'
import { useLanguage } from './i18n/useLanguage.ts'

function Site() {
  const { t } = useLanguage()

  return (
    <div className="site">
      <a className="skip-link" href="#hero">
        {t.skip}
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  )
}

export default App
