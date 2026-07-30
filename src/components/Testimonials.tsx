import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Neuroscientist & Biohacker',
    avatar: 'SC',
    rating: 5,
    text: 'As a neuroscientist, I was skeptical of consumer EEG. But the AI montage analysis in Coach & Heal is genuinely impressive. I use it to track how my meditation practice rewires my default mode network. The data doesn\'t lie.',
    color: '#6366f1',
  },
  {
    name: 'Marcus Rivera',
    role: 'Startup Founder',
    avatar: 'MR',
    rating: 5,
    text: 'I was burning out running my company. The coaching sessions combined with brain data showed me exactly when my focus peaks and crashes. I restructured my entire workday based on my EEG. Productivity up 40%, stress down to manageable levels.',
    color: '#a855f7',
  },
  {
    name: 'Amara Williams',
    role: 'Olympic Athlete',
    avatar: 'AW',
    rating: 5,
    text: 'The Before & After sessions changed everything. I can see exactly how my pre-competition breathing routine affects my neural engagement. My coach uses my brain data to fine-tune my mental game plan. Gold-medal level focus.',
    color: '#ec4899',
  },
  {
    name: 'David Park',
    role: 'Software Engineer',
    avatar: 'DP',
    rating: 5,
    text: 'The real-time EEG visualization is addictive. I actually watch my theta waves spike during flow states now. The app taught me to enter flow on command. My code quality improved and I ship faster than ever.',
    color: '#06b6d4',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Meditation Teacher',
    avatar: 'ER',
    rating: 5,
    text: 'I recommend Coach & Heal to every student. Seeing your brainwaves during meditation removes all the guesswork. The AI detects subtle patterns I\'d miss manually. This is the future of contemplative practice.',
    color: '#8b5cf6',
  },
  {
    name: 'James Okafor',
    role: 'Clinical Psychologist',
    avatar: 'JO',
    rating: 5,
    text: 'The privacy-first approach sold me. All processing happens on-device — no cloud, no risk. I use this with clients struggling with anxiety and ADHD. The neurofeedback data gives us objective markers to track treatment progress.',
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
            Trusted by
            <br />
            <span className="gradient-text">Scientists & Seekers</span>
          </h2>
          <p className="section-subtitle">
            From neuroscientists to athletes to everyday people — real stories
            from users who transformed their minds with brain data.
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
