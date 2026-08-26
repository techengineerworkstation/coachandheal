import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function IndividualCounsellingPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="service-page">
      <section className="service-hero">
        <img
          src="https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="One-on-one counselling conversation in a calm, private setting"
          className="service-hero__img"
        />
        <div className="service-hero__overlay" />
        <div className="container service-hero__content">
          <span className="section-label">Counselling — Our Core</span>
          <h1 className="services-hero__title">Individual Counselling</h1>
          <p className="services-hero__subtitle">A Safe Space to Talk, Heal &amp; Grow</p>
          <div className="service-hero__meta">
            <span>Ongoing</span>
            <span className="service-detail__meta-dot" />
            <span>One-on-one &amp; online</span>
          </div>
        </div>
      </section>

      <section className="service-page__body">
        <div className="container">
          <motion.div
            className="service-page__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="service-page__lead">
              Anxiety, stress, low mood, loneliness, or simply feeling overwhelmed —
              whatever you're carrying, you don't have to carry it alone. Individual
              counselling gives you a confidential, judgment-free space to talk things
              through with a professional who genuinely listens.
            </p>

            <p className="service-page__story">
              Every session moves at your pace. We listen first, then work with you to
              make sense of your thoughts and feelings, develop practical coping
              strategies, and rebuild your sense of balance. Many clients tell us the
              simple act of being truly heard was the beginning of their healing.
            </p>

            <div className="service-page__section">
              <h2>What We'll Explore Together</h2>
              <ul className="service-page__list">
                <li>What's weighing on your mind — in your words, without judgment</li>
                <li>Patterns of thinking and behaviour that keep you stuck</li>
                <li>Practical coping strategies for stress, anxiety, and low mood</li>
                <li>Healthy boundaries in relationships, work, and family</li>
                <li>Small, realistic steps toward the life you want</li>
              </ul>
            </div>

            <div className="service-page__section">
              <h2>What You'll Walk Away With</h2>
              <ul className="service-page__list service-page__list--green">
                <li>A confidential space where you feel genuinely heard</li>
                <li>Practical tools for managing difficult thoughts and emotions</li>
                <li>Greater self-understanding and self-compassion</li>
                <li>Renewed confidence in facing everyday challenges</li>
                <li>A trusted professional relationship, built over time</li>
              </ul>
            </div>

            <div className="service-page__ideal">
              <strong>Ideal for:</strong> Anyone experiencing stress, anxiety, low mood,
              burnout, loneliness, or a difficult life transition — online worldwide or
              in person across Lagos.
            </div>

            <div className="service-page__cta">
              <a
                href="https://wa.me/2347010744142?text=Hello%2C%20I%27d%20like%20to%20arrange%20Individual%20Counselling."
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arrange a Session
              </a>
              <a
                href="https://wa.me/2349052933182?text=Hello%2C%20I%27d%20like%20to%20arrange%20Individual%20Counselling."
                className="btn btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp (Line 2)
              </a>
              <Link to="/services" className="btn btn--ghost">← All Services</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
