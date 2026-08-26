import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useScrollPosition'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
    title: 'Individual Counselling',
    description:
      'A safe, confidential space to talk through stress, anxiety, low mood, or feeling stuck — with a professional who genuinely listens and practical support that lasts.',
    duration: 'One-on-one & online',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Relationship & Family Counselling',
    description:
      'Rebuild trust, communication, and connection. Whether you come as a couple, a family, or on your own — we help you move from conflict to understanding.',
    duration: 'Couples & families',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: 'Career & Academic Counselling',
    description:
      'Choosing a course, changing careers, or returning after a break — make life-shaping decisions with clarity, self-knowledge, and a realistic roadmap.',
    duration: 'Students & professionals',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: 'Grief, Trauma & Crisis Counselling',
    description:
      'Gentle, confidential support through loss, trauma, and sudden crisis — at your pace, without judgment, honoring your story every step of the way.',
    duration: 'Sensitive & confidential',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Youth & Teen Counselling',
    description:
      'School pressure, friendships, self-esteem, and growing up — a respectful space for ages 10–19 to be heard, with parent guidance that supports lasting change.',
    duration: 'Ages 10–19',
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
            Counselling That Meets You
            <br />
            <span className="gradient-text">Wherever You Are</span>
          </h2>
          <p className="section-subtitle">
            Counselling is our core — every service flows from it. Confidential,
            compassionate, and professional support, with health and therapeutic
            services alongside.
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
            Explore Our Counselling Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
