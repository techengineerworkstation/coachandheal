import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Download from './components/Download'
import Footer from './components/Footer'
import { preventClickjacking, setSecurityHeaders, logSecurityEvent } from './utils/security'

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
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Download />
      </main>
      <Footer />
    </div>
  )
}
