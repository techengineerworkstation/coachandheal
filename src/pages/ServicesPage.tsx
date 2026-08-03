import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'
import EquipmentSection from '../components/EquipmentSection'
import BodyWellnessSection from '../components/BodyWellnessSection'
import VenuesSection from '../components/VenuesSection'
import ContactMap from '../components/ContactMap'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

const services = [
  {
    id: 'life-coaching',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: 'Life Coaching',
    subtitle: 'Find Your Purpose, Live Your Best Life',
    color: '#6366f1',
    duration: '8–12 weeks',
    format: 'One-on-one sessions',
    description: `Sometimes life feels like you're going through the motions without really knowing why. You might feel stuck, uncertain about your direction, or like something is missing — even when things look fine on the outside. That's completely normal, and you don't have to figure it all out alone.`,
    whatWeExplore: [
      'What truly matters to you — your core values, passions, and purpose',
      'The beliefs and habits that have been holding you back',
      'How to make decisions with clarity and confidence',
      'Building emotional resilience for life\'s inevitable challenges',
      'Creating a lifestyle that feels balanced and meaningful',
    ],
    whatYouGain: [
      'Deep self-awareness and a clear sense of direction',
      'Stronger decision-making skills you can trust',
      'Better emotional resilience — bouncing back from setbacks',
      'A life that feels aligned, purposeful, and genuinely fulfilling',
      'Practical tools you\'ll use for years to come',
    ],
    idealFor: 'Anyone feeling stuck, seeking clarity, or ready for a meaningful change in their personal life.',
  },
  {
    id: 'career-coaching',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: 'Career Coaching',
    subtitle: 'Navigate Your Career with Confidence',
    color: '#a855f7',
    duration: '6–10 weeks',
    format: 'One-on-one sessions',
    description: `Whether you're eyeing a promotion, thinking about a career change, or returning to work after a break — navigating your professional path can feel overwhelming. We'll work together to find clarity, build your strategy, and give you the tools to move forward with confidence.`,
    whatWeExplore: [
      'Where you are now versus where you want to be',
      'Your unique strengths and how to leverage them',
      'The skills and experiences that make you stand out',
      'How to position yourself for the opportunities you want',
      'Building confidence through preparation and practice',
    ],
    whatYouGain: [
      'Clear career goals and a step-by-step roadmap',
      'A professional CV and LinkedIn profile that gets noticed',
      'Interview preparation and salary negotiation skills',
      'Confidence to make career transitions smoothly',
      'A network strategy that opens doors',
    ],
    idealFor: 'Professionals seeking advancement, career changers, those returning to work, or anyone who wants more from their career.',
  },
  {
    id: 'health-coaching',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Health Coaching',
    subtitle: 'Feel Better, Naturally',
    color: '#ec4899',
    duration: '8–12 weeks',
    format: 'One-on-one sessions',
    description: `True well-being isn't about extreme diets or pushing yourself to exhaustion. It's about finding sustainable habits that give you more energy, better sleep, and a clearer mind — without the burnout. We'll help you feel better in your body and mind, one step at a time.`,
    whatWeExplore: [
      'Your current habits and what\'s working (and what isn\'t)',
      'Simple, realistic changes that fit your busy lifestyle',
      'How stress affects you personally — and what to do about it',
      'Movement and nutrition that feels good, not forced',
      'Sleep, energy, and mental clarity improvements',
    ],
    whatYouGain: [
      'Personalized nutrition and movement plans that actually work',
      'Stress and anxiety management techniques for daily life',
      'Sustainable healthy habits — no crash diets, no extremes',
      'More energy, better sleep, and a clearer mind',
      'A healthier relationship with your body and well-being',
    ],
    idealFor: 'Busy professionals who want to feel better in body and mind — without giving up their life to do it.',
  },
  {
    id: 'world-coaching',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'World Business Coaching',
    subtitle: 'Expand Your Impact with Strategy',
    color: '#06b6d4',
    duration: '12–16 weeks',
    format: 'One-on-one sessions',
    description: `Creating impact is rewarding — but it can also be isolating and exhausting. Whether you're just starting out or looking to scale, we'll help you build the strategy, systems, and leadership skills to grow sustainably — without losing yourself in the process.`,
    whatWeExplore: [
      'Your vision and where the real opportunities are',
      'Marketing and client acquisition that actually converts',
      'Leadership skills that inspire your team',
      'Financial clarity — knowing your numbers and profit margins',
      'Systems and processes that free up your time',
    ],
    whatYouGain: [
      'A clear growth strategy and growth plan',
      'Marketing and client acquisition systems that work',
      'Leadership and team management skills',
      'Financial clarity and improved profitability',
      'The confidence to lead without burnout',
    ],
    idealFor: 'Entrepreneurs and small visionaries ready to grow strategically and build something that lasts.',
  },
  {
    id: 'wellness-tech',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Wellness Technology',
    subtitle: 'See What\'s Happening Inside',
    color: '#8b5cf6',
    duration: 'Ongoing',
    format: 'In-person & online sessions',
    description: `Imagine being able to see how your body responds to stress, focus, or relaxation — in real time. Our wellness technology uses gentle, non-invasive sensors to give you a window into your body's natural rhythms. It's like having a mirror for your inner world — helping you understand yourself better and make smarter choices about your well-being.`,
    whatWeExplore: [
      'How your body naturally responds to different activities',
      'What happens to your focus during work versus rest',
      'How meditation, breathing, or movement affects you personally',
      'Your unique patterns over time — not generic averages',
      'Practical ways to use this knowledge in daily life',
    ],
    whatYouGain: [
      'Real-time feedback on your body\'s natural rhythms',
      'A personal baseline of your wellness patterns',
      'Data-backed insights to optimize your daily routine',
      'Proof that your habits are working (or need adjustment)',
      'A deeper connection between mind and body',
    ],
    idealFor: 'Curious minds who want to understand their body better and make informed decisions about their well-being.',
  },
  {
    id: 'privacy-wellness',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Complete Privacy',
    subtitle: 'Your Data Stays Yours',
    color: '#f59e0b',
    duration: 'Always',
    format: 'Built into every session',
    description: `Your most personal information — your health data, your thoughts, your progress — deserves the highest level of protection. We've built our entire system with privacy at its core. Your data never leaves your device. There are no cloud servers, no third-party access, and no surprises. You own everything, always.`,
    whatThisMeans: [
      'All personal data stays on your device — nowhere else',
      'No accounts or profiles stored on external servers',
      'You can delete everything at any time, instantly',
      'No selling, sharing, or analytics on your information',
      'Transparent about what we collect (almost nothing)',
    ],
    whatYouGain: [
      'Complete peace of mind about your personal data',
      'Confidence to share openly in coaching sessions',
      'No worry about data breaches or third-party access',
      'A coaching relationship built on trust and transparency',
      'Full control over your information at all times',
    ],
    idealFor: 'Everyone. Privacy isn\'t a feature — it\'s a fundamental right.',
  },
]

export default function ServicesPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, 0.1)

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero" ref={heroRef}>
        <div className="container">
          <motion.div
            className="services-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Our Services</span>
            <h1 className="services-hero__title">
              Everything You Need to
              <br />
              <span className="gradient-text">Thrive in Every Area of Life</span>
            </h1>
            <p className="services-hero__subtitle">
              We believe true success comes when all areas of life are in harmony.
              Whether you're looking for personal growth, career advancement,
              better health, or lasting success — we're here to walk alongside you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, i) => (
        <ServiceDetail key={service.id} service={service} index={i} />
      ))}

      {/* Complete Body Wellness */}
      <BodyWellnessSection />

      {/* Equipment */}
      <EquipmentSection />

      {/* Venues */}
      <VenuesSection />

      {/* Contact & Map */}
      <ContactMap />
    </div>
  )
}

function ServiceDetail({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.1)
  const isEven = index % 2 === 0

  return (
    <section
      id={service.id}
      className={`service-detail ${isEven ? 'service-detail--light' : ''}`}
      ref={ref}
    >
      <div className="container">
        <motion.div
          className="service-detail__inner"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="service-detail__header">
            <div className="service-detail__icon" style={{ color: service.color }}>
              {service.icon}
            </div>
            <div>
              <h2 className="service-detail__title">{service.title}</h2>
              <p className="service-detail__subtitle" style={{ color: service.color }}>
                {service.subtitle}
              </p>
              <div className="service-detail__meta">
                <span>{service.duration}</span>
                <span className="service-detail__meta-dot" />
                <span>{service.format}</span>
              </div>
            </div>
          </div>

          <p className="service-detail__description">{service.description}</p>

          <div className="service-detail__grid">
            <div className="service-detail__list">
              <h3 className="service-detail__list-title">
                {service.id === 'privacy-wellness' ? 'How We Protect You' : 'What We\'ll Explore Together'}
              </h3>
              <ul>
                {(('whatThisMeans' in service && service.whatThisMeans) ? service.whatThisMeans : service.whatWeExplore).map((item, j) => (
                  <li key={j}>
                    <span className="service-detail__check" style={{ background: service.color }}>&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="service-detail__list">
              <h3 className="service-detail__list-title">What You'll Walk Away With</h3>
              <ul>
                {service.whatYouGain.map((item, j) => (
                  <li key={j}>
                    <span className="service-detail__check" style={{ background: service.color }}>&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="service-detail__ideal">
            <strong>Ideal for:</strong> {service.idealFor}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
