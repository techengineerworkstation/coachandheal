import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'

const steps = [
  {
    step: '01',
    title: 'Book a Free Discovery Call',
    description:
      'Start with a conversation. Share your goals, challenges, and vision. We\'ll assess where you are and design a personalized coaching roadmap across life, health, career, or business.',
    color: '#6366f1',
  },
  {
    step: '02',
    title: 'Connect Your EEG Headband',
    description:
      'Pair your BrainBit or Mindo headband via Bluetooth. The app calibrates in seconds and starts visualizing your brainwaves in real time — alpha, beta, theta, and gamma bands.',
    color: '#a855f7',
  },
  {
    step: '03',
    title: 'Train Your Brain with Data',
    description:
      'Follow personalized neurofeedback exercises guided by live brain data. See how meditation, breathwork, or focus techniques impact your neural patterns — and adjust in the moment.',
    color: '#ec4899',
  },
  {
    step: '04',
    title: 'Achieve Lasting Transformation',
    description:
      'Your coach reviews your brain data trends and refines your program. Get accountability, clarity, and measurable progress in every area of your life — without burnout.',
    color: '#06b6d4',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.1)

  return (
    <section id="how-it-works" className="how-it-works" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">How It Works</span>
          <h2 className="section-title">
            Your Transformation
            <br />
            <span className="gradient-text">Starts Here</span>
          </h2>
          <p className="section-subtitle">
            Four simple steps from where you are to where you want to be —
            backed by real brain data and expert guidance.
          </p>
        </motion.div>

        <div className="how-it-works__timeline">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="timeline-step"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="timeline-step__number" style={{ color: step.color }}>
                {step.step}
              </div>
              <div className="timeline-step__content">
                <h3 className="timeline-step__title">{step.title}</h3>
                <p className="timeline-step__description">{step.description}</p>
              </div>
              <div
                className="timeline-step__line"
                style={{ background: `linear-gradient(180deg, ${step.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
