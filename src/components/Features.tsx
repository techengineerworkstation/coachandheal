import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Daily Wellness Sessions',
    description:
      'Personalized 10-20 minute sessions tailored to your goals. Build consistency with guided meditation, breathwork, and mindful movement.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: '1-on-1 Coaching',
    description:
      'Connect with certified wellness coaches via video, voice, or chat. Get personalized guidance from professionals who understand your journey.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Progress Tracking',
    description:
      'Monitor your mental and physical wellness with intuitive dashboards. Track mood, sleep, stress levels, and milestone achievements.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Safe & Confidential',
    description:
      'Your data is encrypted end-to-end. We never sell personal information. HIPAA-compliant platform with SOC 2 Type II certification.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: 'Community Support',
    description:
      'Join thousands of like-minded individuals in moderated support groups. Share experiences, celebrate wins, and grow together.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'AI-Powered Insights',
    description:
      'Advanced AI analyzes your patterns to suggest optimal session times, techniques, and lifestyle adjustments for maximum wellness impact.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.1)

  return (
    <section id="features" className="features" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Features</span>
          <h2 className="section-title">
            Everything You Need to
            <br />
            <span className="gradient-text">Thrive & Heal</span>
          </h2>
          <p className="section-subtitle">
            A complete wellness ecosystem designed by experts, powered by
            technology, and built around you.
          </p>
        </motion.div>

        <motion.div
          className="features__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="feature-card__icon">{feature.icon}</div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
