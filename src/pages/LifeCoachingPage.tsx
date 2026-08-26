import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function LifeCoachingPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="service-page">
      <section className="service-hero">
        <img
          src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Person meditating at sunrise — finding purpose and inner clarity"
          className="service-hero__img"
        />
        <div className="service-hero__overlay" />
        <div className="container service-hero__content">
          <span className="section-label">Our Services</span>
          <h1 className="services-hero__title">
            Life Coaching
          </h1>
          <p className="services-hero__subtitle">Find Your Purpose, Live Your Best Life</p>
          <div className="service-hero__meta">
            <span>8–12 weeks</span>
            <span className="service-detail__meta-dot" />
            <span>One-on-one sessions</span>
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
              Sometimes life feels like you're going through the motions without really knowing why.
              You might feel stuck, uncertain about your direction, or like something is missing — even
              when things look fine on the outside. That's completely normal, and you don't have to
              figure it all out alone.
            </p>

            <p className="service-page__story">
              Every transformation begins with a single honest conversation. Over our weeks together,
              you will untangle the noise of expectations and rediscover what genuinely energizes you —
              then build steady, practical habits that carry you toward it. Many clients describe the
              experience as finally hearing their own voice again.
            </p>

            <div className="service-page__section">
              <h2>What We'll Explore Together</h2>
              <ul className="service-page__list">
                <li>What truly matters to you — your core values, passions, and purpose</li>
                <li>The beliefs and habits that have been holding you back</li>
                <li>How to make decisions with clarity and confidence</li>
                <li>Building emotional resilience for life's inevitable challenges</li>
                <li>Creating a lifestyle that feels balanced and meaningful</li>
              </ul>
            </div>

            <div className="service-page__section">
              <h2>What You'll Walk Away With</h2>
              <ul className="service-page__list service-page__list--green">
                <li>Deep self-awareness and a clear sense of direction</li>
                <li>Stronger decision-making skills you can trust</li>
                <li>Better emotional resilience — bouncing back from setbacks</li>
                <li>A life that feels aligned, purposeful, and genuinely fulfilling</li>
                <li>Practical tools you'll use for years to come</li>
              </ul>
            </div>

            <div className="service-page__ideal">
              <strong>Ideal for:</strong> Anyone feeling stuck, seeking clarity, or ready for a meaningful
              change in their personal life.
            </div>

            <div className="service-page__cta">
              <a
                href="https://wa.me/2347010744142?text=Hello%2C%20I%27m%20interested%20in%20Life%20Coaching."
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Discovery Call
              </a>
              <a
                href="https://wa.me/2349052933182?text=Hello%2C%20I%27m%20interested%20in%20Life%20Coaching."
                className="btn btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp (Line 2)
              </a>
              <Link to="/services" className="btn btn--ghost">
                ← All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
