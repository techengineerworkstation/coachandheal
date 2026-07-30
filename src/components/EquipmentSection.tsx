import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'

const equipment = [
  {
    name: 'BrainBit Headband',
    description: 'A lightweight, comfortable headband that gently measures your body\'s natural electrical signals. Think of it as a friendly guide that helps you understand how your body responds throughout the day — during work, rest, or relaxation.',
    features: [
      '4 gentle sensors that sit comfortably on your head',
      'Wireless — no cords, no hassle',
      'Connects to your phone via Bluetooth',
      'Works with our coaching app for real-time feedback',
      'Adjustable fit for all head sizes',
    ],
    price: 'From $399',
    bestFor: 'Coaching sessions, workplace wellness, personal development tracking',
    color: '#6366f1',
  },
  {
    name: 'MINDO Headband',
    description: 'A beginner-friendly option designed for everyday wellness. Perfect if you\'re just starting your journey and want a simple, approachable way to understand your body\'s patterns. It comes with guided exercises that make the whole experience feel like a game.',
    features: [
      '38 guided wellness exercises and activities',
      'Real-time feedback on your phone or tablet',
      'Comfortable enough for daily use',
      'No prior experience needed',
      'Tracks your progress over time',
    ],
    price: 'From $200',
    bestFor: 'Daily wellness practice, stress management, focus improvement',
    color: '#a855f7',
  },
  {
    name: 'BrainBit Headphones',
    description: 'Combines everything you love about music with gentle wellness tracking. Listen to your favorite songs or guided sessions while the headband quietly monitors how your body responds. It\'s wellness that fits seamlessly into your existing routine.',
    features: [
      'High-quality wireless audio',
      'Built-in wellness sensors',
      'Listen to music while tracking your well-being',
      'Perfect for meditation and focus sessions',
      'Premium comfort for extended use',
    ],
    price: 'From $499',
    bestFor: 'Music lovers, meditation practitioners, focus enthusiasts',
    color: '#ec4899',
  },
]

export default function EquipmentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.1)

  return (
    <section className="equipment" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Equipment</span>
          <h2 className="section-title">
            Gentle Technology for
            <br />
            <span className="gradient-text">Everyday Wellness</span>
          </h2>
          <p className="section-subtitle">
            Our wellness devices are designed to feel natural and comfortable.
            No clinical setups, no complicated procedures — just simple tools
            that help you understand yourself better.
          </p>
        </motion.div>

        <div className="equipment__grid">
          {equipment.map((item, i) => (
            <motion.div
              key={i}
              className="equipment-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div className="equipment-card__badge" style={{ background: item.color }}>
                {item.price}
              </div>
              <h3 className="equipment-card__name">{item.name}</h3>
              <p className="equipment-card__description">{item.description}</p>
              <ul className="equipment-card__features">
                {item.features.map((f, j) => (
                  <li key={j}>
                    <span className="equipment-card__check" style={{ background: item.color }}>&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="equipment-card__best-for">
                <strong>Best for:</strong> {item.bestFor}
              </div>
              <a
                href="https://wa.me/2347010744142"
                className="btn btn--primary btn--sm"
                target="_blank"
                rel="noopener noreferrer noreferrer"
              >
                Inquire About This Device
              </a>
            </motion.div>
          ))}
        </div>

        <p className="equipment__note">
          Don't have a device yet? No problem! Our coaching sessions work perfectly
          without any equipment. The wellness technology is an optional enhancement
          for those who want deeper insights.
        </p>
      </div>
    </section>
  )
}
