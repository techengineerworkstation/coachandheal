import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'

const steps = [
  {
    step: '01',
    title: 'Connect Your Headband',
    description:
      'Pair your BrainBit or Mindo EEG headband via Bluetooth. The app auto-detects your device and calibrates sensors in seconds. No wires, no hassle — just seamless brain-computer interface.',
    color: '#6366f1',
  },
  {
    step: '02',
    title: 'Measure Your Brain State',
    description:
      'Start a session and watch your real-time brainwave visualization. Our AI maps your focus, relaxation, and engagement levels with clinical-grade accuracy. See your neural patterns like never before.',
    color: '#a855f7',
  },
  {
    step: '03',
    title: 'Train with Neurofeedback',
    description:
      'Follow personalized neurofeedback exercises guided by your live brain data. Adjust your meditation, breathing, or focus techniques in the moment — and see the impact on your EEG instantly.',
    color: '#ec4899',
  },
  {
    step: '04',
    title: 'Grow with Expert Coaching',
    description:
      'Your coach reviews your brain data trends and tailors your program. Get personalized guidance on sleep optimization, stress management, cognitive endurance, and emotional regulation.',
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
            From Brainwaves to
            <br />
            <span className="gradient-text">Breakthrough</span>
          </h2>
          <p className="section-subtitle">
            Four simple steps to transform your mental performance with
            real data, not guesses.
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
