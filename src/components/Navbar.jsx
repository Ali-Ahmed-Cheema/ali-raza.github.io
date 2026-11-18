import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/profile.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-mist/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.slice(1).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cobalt"
            >
              Get in touch
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line/70 py-3.5 text-base font-medium last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
