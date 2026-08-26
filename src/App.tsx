import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import MusicPlayer from './components/MusicPlayer'
import ThemeSwitcher from './components/ThemeSwitcher'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import TermsPage from './pages/TermsPage'
import LifeCoachingPage from './pages/LifeCoachingPage'
import CareerCoachingPage from './pages/CareerCoachingPage'
import HealthCoachingPage from './pages/HealthCoachingPage'
import WorldBusinessCoachingPage from './pages/WorldBusinessCoachingPage'
import WellnessTechPage from './pages/WellnessTechPage'
import { preventClickjacking, setSecurityHeaders, logSecurityEvent } from './utils/security'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  useEffect(() => {
    preventClickjacking()
    setSecurityHeaders()
    logSecurityEvent('App initialized')

    const handleContextMenu = (e: MouseEvent) => {
      if (import.meta.env.PROD) {
        e.preventDefault()
        logSecurityEvent('Right-click blocked in production')
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (import.meta.env.PROD) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
          e.preventDefault()
          logSecurityEvent('Dev tools shortcut blocked in production')
        }
      }
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/life-coaching" element={<LifeCoachingPage />} />
          <Route path="/services/career-coaching" element={<CareerCoachingPage />} />
          <Route path="/services/health-coaching" element={<HealthCoachingPage />} />
          <Route path="/services/world-coaching" element={<WorldBusinessCoachingPage />} />
          <Route path="/services/wellness-tech" element={<WellnessTechPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
      <MusicPlayer />
      <ThemeSwitcher />
    </div>
  )
}
