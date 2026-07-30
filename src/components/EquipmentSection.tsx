import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'

const equipment = [
  {
    name: 'BrainBit Headband',
    tagline: 'Wearable EEG Headband for Neurofeedback & Research',
    description: 'A lightweight, flexible EEG headband with dry electrodes that requires no gel or shaving. It records your brain\'s electrical activity using 4 channels placed at the O1, O2, T3, T4 positions — giving you real-time insight into your mental states during coaching, meditation, or daily activities.',
    specs: [
      '4 EEG channels (O1, O2, T3, T4) — the standard 10-20 placement system',
      'Dry golden-plated spring-loaded electrodes — no conductive gel needed',
      'Wireless Bluetooth LE connection to your phone or computer',
      '250 Hz sampling rate for precise, reliable data',
      'Up to 12 hours of continuous use on a single charge',
      'Soft, flexible design — comfortable for adults and children',
      'Removable battery unit for easy charging',
      'Compatible with iOS, Android, Windows, macOS, and Linux',
    ],
    software: [
      'NeuroFit PRO — guided neurofeedback with 38 training games',
      'EEG Waves App — real-time brainwave visualization',
      'BrainBit Neurofeedback App — simple mobile training',
      'Free SDK for Java, Python, Swift, C++, Unity, and more',
    ],
    price: '$499',
    bestFor: 'Coaching sessions, professional wellness programs, research, and personal development tracking',
    color: '#6366f1',
    link: 'https://brainbit.com/hardware-solutions/brainbit-headband/',
  },
  {
    name: 'MINDO Headband',
    tagline: 'Wireless Neurofeedback Headband for Home Training',
    description: 'Designed for everyday personal use, MINDO is a soft, fabric-based EEG headband that makes neurofeedback accessible and fun. With 36 built-in training games and a free mobile app, it turns brain training into an engaging daily routine — no experience needed.',
    specs: [
      '4 EEG channels (O1, O2, T3, T4) — same clinical-grade placement',
      'Dry golden-plated electrodes with 25 pins per position',
      'Soft fabric design — no hard plastic, comfortable for daily wear',
      '5 adjustable band sizes for adults and teens',
      'Magnetic USB charger — quick and convenient',
      'Up to 12 hours of continuous use',
      'Bluetooth LE connection to iOS and Android devices',
      'FCC Declaration and CE Certificate',
    ],
    software: [
      'BrainBit Neurofeedback App — free, with 36 games and training sessions',
      'Real-time brain activity tracking',
      'Session history and progress trends',
      'Protocols for focus, relaxation, sleep, and stress management',
    ],
    price: 'From $200',
    bestFor: 'Personal wellness routines, students, professionals, home practice between coaching sessions',
    color: '#a855f7',
    link: 'https://brainbit.com/hardware-solutions/mindo-headband/',
  },
  {
    name: 'BrainBit Headphones',
    tagline: 'Wireless Audio + EEG in One Comfortable Headset',
    description: 'Combines high-quality wireless audio with 5-channel EEG sensing. Listen to music, guided meditations, or coaching sessions while the headphones gently monitor how your body responds — making wellness tracking seamless and effortless.',
    specs: [
      '5 EEG channels for broader brain activity coverage',
      'High-quality wireless audio playback',
      'Dry electrodes — no gel, no preparation',
      'Real-time data streaming alongside audio',
      'Export sessions in CSV and EDF+ formats',
      'Compatible with BrainBit SDK for custom integrations',
    ],
    software: [
      'Attune — EEG meditation and mental wellness app',
      'Live waveforms and band-power display',
      'Guided sessions with real-time feedback',
      'Progress tracking across meditation sessions',
    ],
    price: 'From $499',
    bestFor: 'Music lovers, meditation practitioners, sound-driven neurofeedback, coaching sessions with audio guidance',
    color: '#ec4899',
    link: 'https://brainbit.com/hardware-solutions/brainbit-headphones/',
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
            that help you understand yourself better. All devices use dry
            electrodes, meaning no gel or shaving is required.
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
              <p className="equipment-card__tagline">{item.tagline}</p>
              <p className="equipment-card__description">{item.description}</p>

              <div className="equipment-card__section">
                <h4>Key Features</h4>
                <ul className="equipment-card__features">
                  {item.specs.map((f, j) => (
                    <li key={j}>
                      <span className="equipment-card__check" style={{ background: item.color }}>&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="equipment-card__section">
                <h4>Companion Software</h4>
                <ul className="equipment-card__features">
                  {item.software.map((s, j) => (
                    <li key={j}>
                      <span className="equipment-card__check" style={{ background: item.color }}>&#10003;</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="equipment-card__best-for">
                <strong>Best for:</strong> {item.bestFor}
              </div>

              <div className="equipment-card__actions">
                <a
                  href={item.link}
                  className="btn btn--primary btn--sm"
                  target="_blank"
                  rel="noopener noreferrer noreferrer"
                >
                  View on BrainBit
                </a>
                <a
                  href="https://wa.me/2347010744142?text=Hello%2C%20I%27m%20interested%20in%20the%20equipment."
                  className="btn btn--ghost btn--sm"
                  target="_blank"
                  rel="noopener noreferrer noreferrer"
                >
                  Inquire Locally
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="equipment__note">
          <p>
            <strong>Don't have a device yet?</strong> No problem! Our coaching
            sessions work perfectly without any equipment. The wellness technology
            is an optional enhancement for those who want deeper insights into
            their mental patterns. You can also book a demo session at any of our
            partner locations across Nigeria to try the equipment before you buy.
          </p>
        </div>
      </div>
    </section>
  )
}
