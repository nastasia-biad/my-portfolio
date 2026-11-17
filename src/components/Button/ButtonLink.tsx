import type { ReactNode } from 'react'
import './ButtonLink.css'

type ButtonLinkProps = {
  variant: 'primary' | 'secondary'
  href: string
  children: ReactNode
}

export function ButtonLink({ variant, href, children }: ButtonLinkProps) {
  return (
    <a className={`btn btn--${variant}`} href={href}>
      {variant === 'primary' ? <span className="btn__pip" aria-hidden="true" /> : null}
      {children}
    </a>
  )
}
