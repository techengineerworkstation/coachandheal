import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Real-Time EEG Brainwave Visualization',
    description:
      'Sync your BrainBit or Mindo headband via Bluetooth and watch your brain activity live. See alpha, beta, theta, and gamma waves rendered in high-fidelity graphs as you work, rest, or meditate.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Focus, Relaxation & Engagement Metrics',
    description:
      'Get instant quantitative scores for your concentration depth, relaxation state, and cognitive engagement. Set benchmarks and track improvement over weeks, months, and years.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'AI-Powered Neural Pattern Analysis',
    description:
      'Our sophisticated AI models build custom montages to detect data irregularities and map your unique neural patterns. All analysis happens on-device — your brain data never leaves your phone.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: '1-on-1 Expert Coaching',
    description:
      'Connect with certified wellness coaches who review your brain data and guide your journey. Personalized sessions for stress management, emotional regulation, performance optimization, and habit change.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Privacy-First Architecture',
    description:
      'Your brain data is the most private information you have. No cloud uploads, no server transfers. All AI processing happens locally on your device. You own your data — period.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Before & After Neurofeedback',
    description:
      'Run "Before & After" sessions to see exactly how meditation, sleep, breathwork, or coaching impacts your brain in real time. Quantitative proof that your habits work — or don\'t.',
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
            Brain Data Meets
            <br />
            <span className="gradient-text">Expert Coaching</span>
          </h2>
          <p className="section-subtitle">
            Professional-grade EEG insights paired with personalized coaching
            — the complete toolkit for mastering your mind and transforming
            your life.
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
