import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type Theme = 'default' | 'bronze' | 'teal'

const themes: { id: Theme; label: string; colors: string[] }[] = [
  { id: 'default', label: 'Indigo', colors: ['#6366f1', '#a855f7', '#ec4899'] },
  { id: 'bronze', label: 'Bronze', colors: ['#cd7f32', '#b87333', '#daa520'] },
  { id: 'teal', label: 'Teal', colors: ['#14b8a6', '#06b6d4', '#5eead4'] },
]

export default function ThemeSwitcher() {
  const [current, setCurrent] = useState<Theme>('default')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('coachheal-theme') as Theme | null
    if (saved && themes.some((t) => t.id === saved)) {
      setCurrent(saved)
      document.documentElement.setAttribute('data-theme', saved)
    }
  }, [])

  const switchTheme = (theme: Theme) => {
    setCurrent(theme)
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('coachheal-theme', theme)
    setIsOpen(false)
  }

  const cycleTheme = () => {
    const idx = themes.findIndex((t) => t.id === current)
    const next = themes[(idx + 1) % themes.length]
    switchTheme(next.id)
  }

  const currentTheme = themes.find((t) => t.id === current)!

  return (
    <div className="theme-switcher">
      {isOpen && (
        <motion.div
          className="theme-switcher__panel"
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div className="theme-switcher__title">Choose Theme</div>
          {themes.map((theme) => (
            <button
              key={theme.id}
              className={`theme-switcher__option ${current === theme.id ? 'theme-switcher__option--active' : ''}`}
              onClick={() => switchTheme(theme.id)}
            >
              <div className="theme-switcher__swatch">
                {theme.colors.map((color, i) => (
                  <span
                    key={i}
                    className="theme-switcher__dot"
                    style={{ background: color }}
                  />
                ))}
              </div>
              <span className="theme-switcher__label">{theme.label}</span>
              {current === theme.id && <span className="theme-switcher__check">✓</span>}
            </button>
          ))}
        </motion.div>
      )}

      <motion.button
        className="theme-switcher__toggle"
        onClick={() => setIsOpen(!isOpen)}
        onDoubleClick={cycleTheme}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Change theme"
        title="Click to choose · Double-click to cycle"
      >
        <div
          className="theme-switcher__icon"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.colors[0]}, ${currentTheme.colors[2]})`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </div>
      </motion.button>
    </div>
  )
}
