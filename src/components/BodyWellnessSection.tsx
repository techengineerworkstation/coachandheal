import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from '../hooks/useScrollPosition'

const solutions = [
  {
    icon: '🧠',
    title: 'Brain & Neurological',
    description: 'EEG neurofeedback, cognitive optimization, and neurological wellness.',
    color: '#6366f1',
  },
  {
    icon: '❤️',
    title: 'Cardiovascular',
    description: 'Heart health monitoring, blood pressure optimization.',
    color: '#ef4444',
  },
  {
    icon: '🫁',
    title: 'Respiratory',
    description: 'Pulmonary function optimization and breathing therapy.',
    color: '#06b6d4',
  },
  {
    icon: '🫄',
    title: 'Digestive System',
    description: 'Gut health restoration and metabolic optimization.',
    color: '#10b981',
  },
  {
    icon: '👁️',
    title: 'Vision & Eyes',
    description: 'Vision optimization and ocular wellness treatments.',
    color: '#8b5cf6',
  },
  {
    icon: '🦴',
    title: 'Skeletal & Muscular',
    description: 'Bone density optimization and joint health.',
    color: '#f59e0b',
  },
  {
    icon: '🩸',
    title: 'Blood & Lymphatic',
    description: 'Blood circulation and immune system support.',
    color: '#ec4899',
  },
  {
    icon: '♀️',
    title: "Women's Health",
    description: 'Hormonal balance and reproductive wellness.',
    color: '#d946ef',
  },
  {
    icon: '♂️',
    title: "Men's Health",
    description: 'Testosterone optimization and men wellness.',
    color: '#3b82f6',
  },
  {
    icon: '👶',
    title: 'Pediatric Wellness',
    description: 'Child development and growth optimization.',
    color: '#14b8a6',
  },
  {
    icon: '🧬',
    title: 'Cellular & Genetic',
    description: 'Cellular regeneration and anti-aging treatments.',
    color: '#a855f7',
  },
  {
    icon: '🧘',
    title: 'Mind-Body Integration',
    description: 'Holistic wellness connecting mind and body.',
    color: '#f43f5e',
  },
]

function FlipCard({ solution, index }: { solution: typeof solutions[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="flip-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsFlipped(!isFlipped) }}
      tabIndex={0}
      role="button"
      aria-label={`${solution.title} - click to ${isFlipped ? 'close' : 'learn more'}`}
    >
      <div className={`flip-card__inner ${isFlipped ? 'flip-card__inner--flipped' : ''}`}>
        <div className="flip-card__front" style={{ borderColor: solution.color }}>
          <div className="flip-card__icon">{solution.icon}</div>
          <h3 className="flip-card__title">{solution.title}</h3>
          <p className="flip-card__description">{solution.description}</p>
          <div className="flip-card__tap-hint">Tap to learn more</div>
        </div>
        <div className="flip-card__back" style={{ background: `linear-gradient(135deg, ${solution.color}22, ${solution.color}08)`, borderColor: solution.color }}>
          <div className="flip-card__icon">{solution.icon}</div>
          <h3 className="flip-card__title">{solution.title}</h3>
          <p className="flip-card__back-text">
            Our {solution.title.toLowerCase()} wellness programs combine advanced
            diagnostics with personalized treatment protocols. We address the
            root cause, not just symptoms — using neurofeedback, biofeedback,
            Ayurvedic, and herbal approaches tailored to your unique needs.
          </p>
          <a
            href="https://wa.me/2347010744142?text=Hello%2C%20I%27m%20interested%20in%20your%20wellness%20program."
            className="flip-card__cta"
            target="_blank"
            rel="noopener noreferrer noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Inquire Now &rarr;
          </a>
          <div className="flip-card__tap-hint">Tap to go back</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function BodyWellnessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.1)

  return (
    <section className="body-wellness" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Complete Wellness</span>
          <h2 className="section-title">
            Complete Body Wellness
            <br />
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="section-subtitle">
            We offer comprehensive wellness treatments for every organ system
            in your body
          </p>
        </motion.div>

        <div className="body-wellness__grid">
          {solutions.map((solution, i) => (
            <FlipCard key={i} solution={solution} index={i} />
          ))}
        </div>

        <motion.div
          className="body-wellness__meditation"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="body-wellness__meditation-icon">🧘</div>
          <h3>Wellness Meditation</h3>
          <h4>Holistic Healing for Mind, Body & Spirit</h4>
          <p>
            Combining ancient wisdom with modern science for complete wellness
          </p>
          <a
            href="https://wa.me/2347010744142?text=Hello%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20wellness%20programs."
            className="btn btn--primary btn--sm"
            target="_blank"
            rel="noopener noreferrer noreferrer"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  )
}
