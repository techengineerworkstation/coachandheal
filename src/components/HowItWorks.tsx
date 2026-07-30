import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'

const steps = [
  {
    step: '01',
    title: 'Download & Sign Up',
    description:
      'Get the app in seconds. Create your profile with a quick wellness assessment so we can personalize your experience.',
    color: '#6366f1',
  },
  {
    step: '02',
    title: 'Set Your Goals',
    description:
      'Choose what matters most — stress relief, better sleep, emotional balance, or physical vitality. Your path, your pace.',
    color: '#a855f7',
  },
  {
    step: '03',
    title: 'Start Your Journey',
    description:
      'Follow your customized daily plan. Guided sessions, breathing exercises, journaling prompts, and movement routines.',
    color: '#ec4899',
  },
  {
    step: '04',
    title: 'Grow & Heal',
    description:
      'Watch your progress unfold. Celebrate milestones, unlock new content, and connect with coaches who support your growth.',
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
            Four Steps to a
            <br />
            <span className="gradient-text">Better You</span>
          </h2>
          <p className="section-subtitle">
            Getting started is simple. In just a few minutes, you'll have your
            personalized wellness plan ready.
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
