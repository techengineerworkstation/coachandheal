import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'

const testimonials = [
  {
    name: 'Adaeze O.',
    role: 'Life Coaching Client',
    avatar: 'AO',
    rating: 5,
    text: 'Coach Ibe helped me gain clarity I\'d been searching for years. After 10 weeks of life coaching, I left a toxic job, rebuilt my confidence, and now I wake up with purpose every day. The holistic approach changed everything.',
    color: '#6366f1',
  },
  {
    name: 'Kemi A.',
    role: 'Health Coaching Client',
    avatar: 'KA',
    rating: 5,
    text: 'The health coaching program helped me build sustainable habits — not crash diets. I have more energy, better sleep, and my stress levels dropped dramatically. The brain data showed me exactly what was working.',
    color: '#a855f7',
  },
  {
    name: 'Tunde M.',
    role: 'Career Coaching Client',
    avatar: 'TM',
    rating: 5,
    text: 'I went from being stuck in a job I hated to landing my dream role in 8 weeks. The LinkedIn optimization, interview prep, and salary negotiation coaching gave me the edge I needed. Best investment I ever made.',
    color: '#ec4899',
  },
  {
    name: 'Ngozi E.',
    role: 'Business Coaching Client',
    avatar: 'NE',
    rating: 5,
    text: 'My revenue doubled in 4 months. Coach Ibe helped me build marketing systems, improve my leadership, and get financial clarity. The business strategy sessions are pure gold for any entrepreneur.',
    color: '#06b6d4',
  },
  {
    name: 'Chidi U.',
    role: 'EEG Brain Training User',
    avatar: 'CU',
    rating: 5,
    text: 'Seeing my brainwaves in real time was a game-changer. The AI detected patterns in my focus I never knew existed. I now use neurofeedback before every important meeting. My cognitive performance is on another level.',
    color: '#8b5cf6',
  },
  {
    name: 'Fatima B.',
    role: 'Life & Health Client',
    avatar: 'FB',
    rating: 5,
    text: 'Combining coaching with brain data is genius. My coach uses my EEG trends to tailor each session. I\'ve never felt more understood or supported. This is the future of personal development.',
    color: '#f59e0b',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.05)

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            Real People,
            <br />
            <span className="gradient-text">Real Transformations</span>
          </h2>
          <p className="section-subtitle">
            Hear from clients who transformed their lives through our coaching
            programs and brain training technology.
          </p>
        </motion.div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonial-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="testimonial-card__stars">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="star-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-card__text">"{t.text}"</p>
              <div className="testimonial-card__author">
                <div
                  className="testimonial-card__avatar"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
