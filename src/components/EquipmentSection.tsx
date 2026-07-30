import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'

const medicalEquipment = [
  {
    name: 'Consumer EEG Headset',
    tagline: 'Brainwave Monitoring & Neurofeedback Training',
    description: 'A consumer-grade EEG headset designed for brainwave monitoring and neurofeedback training. Great for home use — it connects to your phone and gives you real-time feedback on your brain activity during focus, relaxation, or meditation sessions.',
    specs: [
      'Non-invasive brainwave monitoring',
      'Real-time neurofeedback feedback',
      'Connects to phone via Bluetooth',
      'Comfortable for extended home use',
      'Session tracking and progress history',
    ],
    price: 'Available on inquiry',
    color: '#6366f1',
  },
  {
    name: 'FDA-Registered Neurofeedback Headband',
    tagline: 'Focus, Stress Management & Cognitive Support',
    description: 'An FDA-registered neurofeedback headband specifically designed for focus improvement, stress management, and cognitive support. Used in professional clinical settings with proven results across a wide range of conditions.',
    specs: [
      'FDA-registered for clinical use',
      'Advanced brainwave pattern analysis',
      'Targeted protocols for focus, sleep, and clarity',
      'Real-time training feedback',
      'Professional-grade signal quality',
    ],
    price: 'Available on inquiry',
    color: '#a855f7',
  },
  {
    name: 'Professional Biofeedback Machine',
    tagline: 'Non-Linear Analysis & Health Diagnostics',
    description: 'An advanced non-linear analysis system for comprehensive health diagnostics and biofeedback therapy. This machine monitors your body\'s physiological signals — heart rate, skin temperature, muscle tension, and more — helping you learn to regulate them naturally.',
    specs: [
      'Non-linear analysis for comprehensive diagnostics',
      'Multi-channel physiological monitoring',
      'Heart rate, skin conductance, temperature tracking',
      'Real-time visual feedback displays',
      'Customizable training protocols',
    ],
    price: 'Available on inquiry',
    color: '#ec4899',
  },
  {
    name: 'EMG Biofeedback Unit',
    tagline: 'Dual-Channel EMG with Electrical Stimulation',
    description: 'A professional dual-channel EMG biofeedback unit with electrical stimulation for rehabilitation. Used for muscle re-education, pain management, and physical recovery — helping you regain control over muscles that have been affected by injury or stress.',
    specs: [
      'Dual-channel EMG monitoring',
      'Built-in electrical stimulation',
      'Muscle re-education protocols',
      'Pain management applications',
      'Rehabilitation and recovery support',
    ],
    price: 'Available on inquiry',
    color: '#06b6d4',
  },
]

const ayurvedicEquipment = [
  {
    name: 'Panchakarma Treatment Table',
    description: 'A specialized wooden table with built-in drainage designed specifically for Panchakarma treatments and Abhyanga massage. The traditional design allows for comfortable positioning during oil-based therapies.',
    color: '#8b5cf6',
  },
  {
    name: 'Shirodhara Stand',
    description: 'A traditional copper or brass stand used for Shirodhara oil pouring therapy. Warm herbal oil is continuously poured onto the forehead in a steady stream — deeply calming for the nervous system.',
    color: '#f59e0b',
  },
  {
    name: 'Herbal Steam Chamber',
    description: 'A portable steam chamber for Swedana (herbal steam therapy). Herbal-infused steam opens the pores, helps release toxins, and deeply relaxes the muscles and nervous system.',
    color: '#10b981',
  },
  {
    name: 'Ayurvedic Oil Collection',
    description: 'A set of traditional Ayurvedic oils formulated for different dosha types (body constitutions) and treatments. Each oil is carefully selected and prepared for specific therapeutic purposes.',
    color: '#f43f5e',
  },
]

const herbalSuppliers = [
  {
    name: 'Planet Ayurveda',
    description: 'Official outlet for Planet Ayurveda herbal supplements and Ayurvedic medicines in Nigeria. World-renowned for high-quality, certified organic herbal formulations.',
    location: 'Nigeria (official distributor)',
    color: '#6366f1',
  },
  {
    name: 'Abiola Herbal Centre',
    description: 'Established 1996. A WHO-recognised herbal wellness centre with deep expertise in African traditional medicine. Combines decades of indigenous knowledge with modern wellness standards.',
    location: 'Nigeria (est. 1996)',
    color: '#a855f7',
  },
  {
    name: 'Ayurvedic Herb Hub',
    description: 'Premium Ayurvedic herbs and treatments with delivery within 24-48 hours in Lagos. A wide range of authentic herbs, formulations, and wellness products.',
    location: 'Lagos, Nigeria (24-48hr delivery)',
    color: '#ec4899',
  },
  {
    name: 'Faforlife / Superlife / Multistream',
    description: 'Distributor of Faforlife, Superlife, and Multistream herbal health products and supplements. Trusted brands in the herbal wellness space.',
    location: 'Nigeria distributor',
    color: '#06b6d4',
  },
]

const conditions = [
  { category: 'Brain & Cognitive', items: ['Difficulty concentrating', 'Brain fog', 'Memory concerns', 'Learning challenges', 'ADHD support', 'Cognitive decline'] },
  { category: 'Sleep & Rest', items: ['Insomnia', 'Poor sleep quality', 'Difficulty falling asleep', 'Restless sleep', 'Sleep-wake cycle issues'] },
  { category: 'Stress & Emotions', items: ['Chronic stress', 'Anxiety', 'Depression', 'Emotional overwhelm', 'Burnout', 'Mood swings'] },
  { category: 'Pain & Body', items: ['Chronic pain', 'Headaches & migraines', 'Muscle tension', 'Back pain', 'Neck & shoulder pain'] },
  { category: 'Digestion & Gut', items: ['Digestive discomfort', 'Bloating', 'Gut-brain connection', 'Irritable bowel support'] },
  { category: 'Heart & Energy', items: ['Heart function support', 'Low energy', 'Fatigue', 'Hormonal balance', 'Immune support'] },
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
          <span className="section-label">Equipment & Treatments</span>
          <h2 className="section-title">
            Advanced Technology &
            <br />
            <span className="gradient-text">Ancient Wisdom Combined</span>
          </h2>
          <p className="section-subtitle">
            NeuroWell Performance Clinic combines cutting-edge medical
            technology with ancient Ayurvedic wisdom and certified herbal
            medicine. We treat every organ system — not just symptoms.
          </p>
        </motion.div>

        {/* Conditions We Address */}
        <motion.div
          className="equipment__conditions"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="equipment__conditions-title">What We Help With</h3>
          <p className="equipment__conditions-subtitle">
            Our treatments address a wide spectrum of conditions — from brain
            performance to gut health, sleep to stress, pain to energy. We treat
            the whole person, not just individual symptoms.
          </p>
          <div className="equipment__conditions-grid">
            {conditions.map((cat, i) => (
              <div key={i} className="equipment__condition-card">
                <h4>{cat.category}</h4>
                <ul>
                  {cat.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Medical & Neurofeedback Equipment */}
        <h3 className="equipment__section-title">Medical & Neurofeedback Equipment</h3>
        <div className="equipment__grid">
          {medicalEquipment.map((item, i) => (
            <motion.div
              key={i}
              className="equipment-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="equipment-card__badge" style={{ background: item.color }}>
                {item.price}
              </div>
              <h4 className="equipment-card__name">{item.name}</h4>
              <p className="equipment-card__tagline">{item.tagline}</p>
              <p className="equipment-card__description">{item.description}</p>
              <ul className="equipment-card__features">
                {item.specs.map((f, j) => (
                  <li key={j}>
                    <span className="equipment-card__check" style={{ background: item.color }}>&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Ayurvedic Treatment Equipment */}
        <h3 className="equipment__section-title">Ayurvedic Treatment Equipment</h3>
        <div className="equipment__grid equipment__grid--4">
          {ayurvedicEquipment.map((item, i) => (
            <motion.div
              key={i}
              className="equipment-card equipment-card--compact"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="equipment-card__dot" style={{ background: item.color }} />
              <h4 className="equipment-card__name">{item.name}</h4>
              <p className="equipment-card__description">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Herbal Medicine Suppliers */}
        <h3 className="equipment__section-title">Certified Herbal Medicine Suppliers</h3>
        <p className="equipment__section-subtitle">
          All herbs are certified organic and prescribed by qualified herbalists.
          We work with trusted suppliers across Nigeria to bring you authentic,
          high-quality herbal medicine.
        </p>
        <div className="equipment__grid equipment__grid--4">
          {herbalSuppliers.map((item, i) => (
            <motion.div
              key={i}
              className="equipment-card equipment-card--compact"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="equipment-card__dot" style={{ background: item.color }} />
              <h4 className="equipment-card__name">{item.name}</h4>
              <p className="equipment-card__description">{item.description}</p>
              <p className="equipment-card__location">{item.location}</p>
            </motion.div>
          ))}
        </div>

        {/* Treatments Overview */}
        <motion.div
          className="equipment__treatments"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="equipment__conditions-title">Our Full Range of Treatments</h3>
          <div className="equipment__treatments-grid">
            <div className="equipment__treatment-item">
              <strong>Neurofeedback</strong> — EEG-based brain training for focus, sleep, and clarity
            </div>
            <div className="equipment__treatment-item">
              <strong>Biofeedback</strong> — Learning to regulate your body's physiological signals
            </div>
            <div className="equipment__treatment-item">
              <strong>CES Neurostimulation</strong> — FDA-recognized non-invasive treatment for anxiety, insomnia, and depression
            </div>
            <div className="equipment__treatment-item">
              <strong>Panchakarma</strong> — Ancient Ayurvedic detoxification and rejuvenation
            </div>
            <div className="equipment__treatment-item">
              <strong>Abhyanga</strong> — Therapeutic full-body massage using warm herbal oils
            </div>
            <div className="equipment__treatment-item">
              <strong>Shirodhara</strong> — Continuous warm herbal oil stream on the forehead
            </div>
            <div className="equipment__treatment-item">
              <strong>Swedana</strong> — Herbal steam therapy for detoxification
            </div>
            <div className="equipment__treatment-item">
              <strong>Herbal Medicine</strong> — Custom-compounded organic herbal formulations
            </div>
            <div className="equipment__treatment-item">
              <strong>Pranayama</strong> — Advanced breathing techniques for stress reduction
            </div>
            <div className="equipment__treatment-item">
              <strong>Hydrotherapy</strong> — Therapeutic use of water for pain relief and wellness
            </div>
            <div className="equipment__treatment-item">
              <strong>Light & Sound Therapy</strong> — Advanced frequency-based treatments
            </div>
            <div className="equipment__treatment-item">
              <strong>Comprehensive Stress Management</strong> — Combining multiple modalities
            </div>
          </div>
        </motion.div>

        <div className="equipment__note">
          <p>
            <strong>Ready to explore?</strong> Book a free consultation and we'll
            help you discover the perfect combination of treatments for your
            unique needs. We combine medical, Ayurvedic, and herbal approaches
            for faster, lasting results.
          </p>
          <a
            href="https://wa.me/2347010744142?text=Hello%2C%20I%27d%20like%20to%20book%20a%20free%20consultation."
            className="btn btn--primary btn--sm"
            target="_blank"
            rel="noopener noreferrer noreferrer"
            style={{ marginTop: '16px' }}
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
