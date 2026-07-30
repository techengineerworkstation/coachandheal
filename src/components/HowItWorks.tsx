import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'

const steps = [
  {
    step: '01',
    title: 'Let\'s Talk',
    description:
      'It all starts with a conversation — no commitment, no pressure. We\'ll listen to where you are, what you\'re going through, and what you\'d love to change. From there, we\'ll map out a path that feels right for you.',
    color: '#6366f1',
  },
  {
    step: '02',
    title: 'Find Your Direction',
    description:
      'Together, we\'ll explore what\'s been holding you back and what\'s possible when those barriers start to shift. You\'ll gain clarity on your goals and a sense of what\'s ahead.',
    color: '#a855f7',
  },
  {
    step: '03',
    title: 'Grow at Your Pace',
    description:
      'Through regular one-on-one sessions, you\'ll build new habits, develop stronger skills, and start seeing real changes in how you feel and show up. We move at your speed — never rushing, always supporting.',
    color: '#ec4899',
  },
  {
    step: '04',
    title: 'Thrive in Every Area',
    description:
      'As your confidence grows and your habits solidify, you\'ll start to notice the ripple effect — better relationships, more energy, clearer decisions, and a life that feels aligned with who you really are.',
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
            Your Journey With Us
            <br />
            <span className="gradient-text">Starts Simple</span>
          </h2>
          <p className="section-subtitle">
            No complicated onboarding, no overwhelming programs. Just a
            straightforward path from where you are to where you want to be.
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
