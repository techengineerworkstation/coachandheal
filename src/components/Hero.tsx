import { motion } from 'framer-motion'
import ParticleCanvas from './ParticleCanvas'

export default function Hero() {
  return (
    <section className="hero">
      <ParticleCanvas />
      <div className="hero__overlay" />
      <div className="hero__content">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="hero__badge-dot" />
          Now Available on iOS & Android
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transform Your Mind.
          <br />
          <span className="hero__title-gradient">Heal Your Body.</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Expert-guided coaching for mental clarity, emotional resilience, and
          physical wellness — all in one app. Your journey to a better self
          starts here.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#download" className="btn btn--primary">
            <svg className="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            Download Free
          </a>
          <a href="#how-it-works" className="btn btn--ghost">
            See How It Works
          </a>
        </motion.div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="hero__stat">
            <span className="hero__stat-number">2M+</span>
            <span className="hero__stat-label">Active Users</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">4.9</span>
            <span className="hero__stat-label">App Rating</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">500+</span>
            <span className="hero__stat-label">Expert Coaches</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
