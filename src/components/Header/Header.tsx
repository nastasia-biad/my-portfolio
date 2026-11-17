import { useEffect, useId, useRef, useState, type MouseEvent } from 'react'
import { useLanguage } from '../../i18n/useLanguage.ts'
import { LanguageSwitch } from '../LanguageSwitch/LanguageSwitch.tsx'
import './Header.css'

export function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const navId = useId()

  const menuIsVisible = () => {
    const button = menuButtonRef.current
    return !!button && getComputedStyle(button).display !== 'none'
  }

  const items = [
    { id: 'about', label: t.navAbout, href: '#about' },
    { id: 'projects', label: t.navProjects, href: '#projects' },
    { id: 'skills', label: t.navSkills, href: '#skills' },
    { id: 'experience', label: t.navExperience, href: '#experience' },
    { id: 'contact', label: t.navContact, href: '#contact' },
  ]

  useEffect(() => {
    if (!open) return

    const nav = navRef.current
    const button = menuButtonRef.current
    nav?.querySelector('a')?.focus()

    const restoreMenuFocus = () => {
      if (button && getComputedStyle(button).display !== 'none') button.focus()
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      restoreMenuFocus()
    }

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target
      if (!(target instanceof Node)) return
      if (nav?.contains(target)) return
      if (button?.contains(target)) return
      const focusInsideNav = nav?.contains(document.activeElement) ?? false
      setOpen(false)
      if (focusInsideNav) restoreMenuFocus()
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 901px)').matches) setOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const onNavigate = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false)
    const target = document.getElementById(href.slice(1))
    if (!target) return
    event.preventDefault()
    target.focus({ preventScroll: true })
    target.scrollIntoView()
    window.history.pushState(null, '', href)
  }

  return (
    <header className="header">
      <a className="header__name" href="#hero" onClick={(event) => onNavigate(event, '#hero')}>
        <span className="header__mark" aria-hidden="true" />
        {t.name}
      </a>

      <div className="header__tools">
        <nav
          ref={navRef}
          id={navId}
          className={open ? 'header__nav is-open' : 'header__nav'}
          aria-label={t.navLabel}
          onKeyDown={(event) => {
            if (event.key !== 'Tab' || !event.shiftKey || !menuIsVisible()) return
            const first = navRef.current?.querySelector('a')
            if (document.activeElement !== first) return
            event.preventDefault()
            menuButtonRef.current?.focus()
          }}
        >
          {items.map((item) => (
            <a key={item.id} href={item.href} onClick={(event) => onNavigate(event, item.href)}>
              {item.label}
            </a>
          ))}
        </nav>
        <LanguageSwitch />
        <button
          ref={menuButtonRef}
          type="button"
          className="header__menu"
          aria-expanded={open}
          aria-controls={navId}
          onClick={() => setOpen((value) => !value)}
          onKeyDown={(event) => {
            if (!open || event.key !== 'Tab' || event.shiftKey || !menuIsVisible()) return
            event.preventDefault()
            navRef.current?.querySelector('a')?.focus()
          }}
        >
          <span className="header__menu-icon" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="visually-hidden">{open ? t.menuClose : t.menuOpen}</span>
        </button>
      </div>
    </header>
  )
}
