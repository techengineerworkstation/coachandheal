import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollPosition } from '../hooks/useScrollPosition'

export default function Navbar() {
  const scrollY = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)
  const isScrolled = scrollY > 50

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Download', href: '#download' },
  ]

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" aria-label="Coach & Heal Home">
          <div className="navbar__logo-icon">C&H</div>
          <span className="navbar__logo-text">Coach & Heal</span>
        </a>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </div>

        <a href="#download" className="navbar__cta">
          Get the App
        </a>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#download" className="navbar__cta navbar__cta--mobile" onClick={() => setMenuOpen(false)}>
              Get the App
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
