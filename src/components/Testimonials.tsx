import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Marketing Executive',
    avatar: 'SM',
    rating: 5,
    text: 'Coach & Heal completely transformed my approach to stress management. The daily sessions helped me find calm in the chaos of corporate life. I sleep better, think clearer, and feel more present with my family.',
    color: '#6366f1',
  },
  {
    name: 'Dr. James Okafor',
    role: 'Physician & Wellness Advocate',
    avatar: 'JO',
    rating: 5,
    text: 'As a doctor, I appreciate the evidence-based approach. The AI insights are remarkably accurate, and the coaching quality rivals in-person sessions. I recommend this to all my patients.',
    color: '#a855f7',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Yoga Instructor',
    avatar: 'ER',
    rating: 5,
    text: 'Even as a wellness professional, I needed support for my own mental health. The community here is incredibly supportive, and the personalized plans have deepened my own practice.',
    color: '#ec4899',
  },
  {
    name: 'Marcus Chen',
    role: 'Software Engineer',
    avatar: 'MC',
    rating: 5,
    text: 'The 5-minute breathing exercises between coding sessions are a game-changer. My focus has improved by 40% according to my own tracking. The progress dashboard keeps me motivated.',
    color: '#06b6d4',
  },
  {
    name: 'Amara Williams',
    role: 'Entrepreneur',
    avatar: 'AW',
    rating: 5,
    text: 'Building a startup nearly broke me. Coach & Heal gave me the tools to manage anxiety, maintain balance, and lead from a place of clarity. Every founder needs this app.',
    color: '#8b5cf6',
  },
  {
    name: 'David Park',
    role: 'Teacher',
    avatar: 'DP',
    rating: 5,
    text: 'Teaching during challenging times took a toll on my well-being. The journaling prompts and mood tracking helped me identify patterns I never noticed before. Life-changing.',
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
            Loved by
            <br />
            <span className="gradient-text">Millions Worldwide</span>
          </h2>
          <p className="section-subtitle">
            Real stories from real people who transformed their lives with
            Coach & Heal.
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
