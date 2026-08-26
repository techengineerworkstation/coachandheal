import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function WorldBusinessCoachingPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="service-page">
      <section className="service-hero">
        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Team reviewing charts and strategy reports — world business coaching"
          className="service-hero__img"
        />
        <div className="service-hero__overlay" />
        <div className="container service-hero__content">
          <span className="section-label">Our Services</span>
          <h1 className="services-hero__title">
            World Business Coaching
          </h1>
          <p className="services-hero__subtitle">Expand Your Impact with Strategy</p>
          <div className="service-hero__meta">
            <span>12–16 weeks</span>
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
              Creating impact is rewarding — but it can also be isolating and exhausting. Whether you're
              just starting out or looking to scale, we'll help you build the strategy, systems, and
              leadership skills to grow sustainably — without losing yourself in the process.
            </p>

            <p className="service-page__story">
              Growth does not have to mean burnout. We map your vision into clear milestones, build
              simple systems that run without you, and sharpen the leadership habits that keep teams
              inspired. Whether you are launching or scaling, you will leave with a plan grounded in
              your numbers — and the clarity to act on it.
            </p>

            <div className="service-page__section">
              <h2>What We'll Explore Together</h2>
              <ul className="service-page__list">
                <li>Your vision and where the real opportunities are</li>
                <li>Marketing and client acquisition that actually converts</li>
                <li>Leadership skills that inspire your team</li>
                <li>Financial clarity — knowing your numbers and profit margins</li>
                <li>Systems and processes that free up your time</li>
              </ul>
            </div>

            <div className="service-page__section">
              <h2>What You'll Walk Away With</h2>
              <ul className="service-page__list service-page__list--green">
                <li>A clear growth strategy and growth plan</li>
                <li>Marketing and client acquisition systems that work</li>
                <li>Leadership and team management skills</li>
                <li>Financial clarity and improved profitability</li>
                <li>The confidence to lead without burnout</li>
              </ul>
            </div>

            <div className="service-page__ideal">
              <strong>Ideal for:</strong> Entrepreneurs and small visionaries ready to grow strategically
              and build something that lasts.
            </div>

            <div className="service-page__cta">
              <a
                href="https://wa.me/2347010744142?text=Hello%2C%20I%27m%20interested%20in%20World%20Business%20Coaching."
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Discovery Call
              </a>
              <a
                href="https://wa.me/2349052933182?text=Hello%2C%20I%27m%20interested%20in%20World%20Business%20Coaching."
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
