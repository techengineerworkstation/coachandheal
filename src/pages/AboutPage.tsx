import { motion } from 'framer-motion'
import { useEffect } from 'react'

const values = [
  {
    title: 'Whole-Person Approach',
    description: 'We don\'t just focus on one area of your life. True well-being comes when your personal growth, health, career, and relationships are all moving in the right direction.',
    icon: '🌱',
  },
  {
    title: 'Safe & Supportive Space',
    description: 'Everyone deserves a place where they can be honest without judgment. We create that space — whether you\'re sharing your struggles or celebrating your wins.',
    icon: '🤝',
  },
  {
    title: 'Data-Informed, Not Data-Driven',
    description: 'We use technology as a tool to support you, not replace human connection. Your comfort and trust always come first.',
    icon: '💡',
  },
  {
    title: 'Respect for Your Privacy',
    description: 'Your personal information and session details are sacred. We protect them fiercely — no exceptions, no compromises.',
    icon: '🔒',
  },
  {
    title: 'Results You Can Feel',
    description: 'We don\'t deal in vague promises. Our clients see real, measurable changes in how they feel, think, and show up in their lives.',
    icon: '✨',
  },
  {
    title: 'Accessible to All',
    description: 'Quality coaching shouldn\'t be a luxury. We offer flexible options and work with you to find what fits your budget and schedule.',
    icon: '🌍',
  },
]

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">About Us</span>
            <h1 className="about-hero__title">
              We Believe Everyone Deserves
              <br />
              <span className="gradient-text">a Chance to Thrive</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <motion.div
            className="about-story__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Our Story</h2>
            <p>
              Coach & Heal was born from a simple observation: too many people
              are struggling in silence. They feel stuck in their careers,
              overwhelmed by stress, disconnected from their bodies, or unsure
              about their next step — and they don't know where to turn.
            </p>
            <p>
              We are passionate and results-driven coaches committed to helping
              individuals achieve holistic success. With years of experience, we
              specialize in guiding people through meaningful transformations in
              their personal life, health, career, and world.
            </p>
            <p>
              Our approach is holistic and personalized. We believe true success
              comes when all areas of life are in harmony. Whether you feel
              stuck, overwhelmed, or ready for the next big leap — we create a
              supportive space for you to gain clarity, build confidence, and
              take consistent action.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="about-mission__grid">
            <motion.div
              className="about-mission__card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2>Our Mission</h2>
              <p>
                To empower ambitious individuals to live with purpose, maintain
                vibrant health, advance in their careers, and build thriving
                clients — without burnout. We want to be part of your journey
                to a life that feels both successful and fulfilling.
              </p>
            </motion.div>
            <motion.div
              className="about-mission__card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h2>Our Vision</h2>
              <p>
                A world where everyone has access to the support they need to
                grow — where seeking help is celebrated as a sign of strength,
                and where personal development is not a luxury but a way of life.
                We envision communities of people who are emotionally healthy,
                professionally fulfilled, and personally at peace.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Values</span>
            <h2 className="section-title">
              What We
              <br />
              <span className="gradient-text">Stand For</span>
            </h2>
          </motion.div>
          <div className="about-values__grid">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="about-value-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <div className="about-value-card__icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-coach">
        <div className="container">
          <motion.div
            className="about-coach__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2>Meet Coach Ibe</h2>
            <p>
              Certified Life, Health, Career & World Coach. When not
              coaching, you'll find us reading, exercising, or spending quality
              time with family. We believe in practicing what we preach.
            </p>
            <p>
              With a passion for helping people unlock their potential, Coach Ibe
              combines proven coaching methodologies with modern wellness
              technology to deliver results that last. Every session is tailored
              to your unique needs, pace, and goals.
            </p>
            <div className="about-coach__cta">
              <a
                href="https://wa.me/2347010744142"
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer noreferrer"
              >
                Start a Conversation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
