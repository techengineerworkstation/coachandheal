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
          Available for Online Coaching Worldwide
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Empowering Growth in
          <br />
          <span className="hero__title-gradient">Life, Health & Business</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Certified life, health, career & business coaching combined with
          real-time EEG brainwave analysis. Personalized programs to help you
          achieve balance, confidence, and lasting success — without burnout.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#download" className="btn btn--primary">
            <svg className="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Book a Session
          </a>
          <a href="#services" className="btn btn--ghost">
            Explore Services
          </a>
        </motion.div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="hero__stat">
            <span className="hero__stat-number">500+</span>
            <span className="hero__stat-label">Clients Transformed</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">4</span>
            <span className="hero__stat-label">Coaching Programs</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">100%</span>
            <span className="hero__stat-label">On-Device Privacy</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
