import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: 'Life Coaching',
    description:
      'Discover your true purpose, overcome limiting beliefs, and build a fulfilling life aligned with your values. Gain deep self-awareness, stronger decision-making skills, better emotional resilience, and a meaningful balanced lifestyle.',
    duration: '8–12 weeks (1:1 sessions)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: 'Career Coaching',
    description:
      'Advance your career, negotiate better opportunities, prepare for interviews, or successfully change paths. Get clear career goals, professional CV & LinkedIn optimization, interview prep, and confidence in career transitions.',
    duration: '6–10 weeks (1:1 sessions)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Health Coaching',
    description:
      'Create sustainable habits for better energy, mental clarity, stress reduction, and long-term wellbeing. Personalized nutrition & movement plans, stress and anxiety management techniques, and increased energy — without extreme diets or burnout.',
    duration: '8–12 weeks (1:1 sessions)',
    ideal: 'Busy professionals who want to feel better in body and mind',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Business Coaching',
    description:
      'Scale your business strategically, improve leadership skills, boost revenue, and achieve entrepreneurial freedom. Business strategy & growth planning, marketing systems, leadership skills, and financial clarity.',
    duration: '12–16 weeks (1:1 sessions)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Real-Time EEG Brainwave Analysis',
    description:
      'Sync your BrainBit or Mindo headband via Bluetooth and watch your brain activity live. See alpha, beta, theta, and gamma waves rendered in high-fidelity graphs as you work, rest, or meditate.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Privacy-First Neurofeedback',
    description:
      'Your brain data never leaves your phone. All AI analysis happens on-device with no cloud uploads. Focus, relaxation, and engagement metrics tracked locally — total ownership of your most private data.',
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
          <span className="section-label">Services</span>
          <h2 className="section-title">
            Coaching Meets
            <br />
            <span className="gradient-text">Brain Science</span>
          </h2>
          <p className="section-subtitle">
            Holistic coaching for life, health, career, and business — powered
            by real-time EEG brainwave data. True success comes when all areas
            of life are in harmony.
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
              {'duration' in feature && feature.duration && (
                <div className="feature-card__meta">
                  <span className="feature-card__duration">{feature.duration}</span>
                  {'ideal' in feature && feature.ideal && (
                    <span className="feature-card__ideal">{feature.ideal}</span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
