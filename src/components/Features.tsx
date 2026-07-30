import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
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
      'Sometimes you just need someone to help you find clarity. We\'ll work together to uncover your purpose, overcome the beliefs holding you back, and build a life that feels meaningful — on your terms.',
    duration: '8–12 weeks',
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
      'Whether you\'re eyeing a promotion, thinking about a change, or coming back after a break — we\'ll help you find your footing and move forward with confidence and a clear plan.',
    duration: '6–10 weeks',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Health Coaching',
    description:
      'Feeling run down, stressed, or out of sync? We\'ll help you build small, sustainable habits that give you more energy, better sleep, and a clearer mind — without extreme diets or burnout.',
    duration: '8–12 weeks',
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
      'Running a business is rewarding — but it can also be lonely. We\'ll help you build the strategy, systems, and leadership skills to grow sustainably, without losing yourself in the process.',
    duration: '12–16 weeks',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Wellness Technology',
    description:
      'Want to see what\'s happening inside? Our gentle, non-invasive sensors give you a window into your body\'s natural rhythms — helping you understand yourself better and make smarter choices.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Complete Privacy',
    description:
      'Your most personal information stays yours. No cloud uploads, no third-party access, no surprises. We\'ve built our entire system with your privacy at its core.',
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
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">
            Coaching That Meets You
            <br />
            <span className="gradient-text">Wherever You Are</span>
          </h2>
          <p className="section-subtitle">
            Every person's journey is different. That's why we offer a range of
            services — all designed to help you grow, heal, and thrive in the
            areas that matter most to you.
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
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="features__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/services" className="btn btn--primary">
            Learn More About Each Service
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
