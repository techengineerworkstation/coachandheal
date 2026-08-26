import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function WellnessTechPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="service-page">
      <section className="service-hero">
        <img
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Digital brain scan with data streams — wellness technology and biofeedback"
          className="service-hero__img"
        />
        <div className="service-hero__overlay" />
        <div className="container service-hero__content">
          <span className="section-label">Our Services</span>
          <h1 className="services-hero__title">
            Wellness Technology
          </h1>
          <p className="services-hero__subtitle">See What's Happening Inside</p>
          <div className="service-hero__meta">
            <span>Ongoing</span>
            <span className="service-detail__meta-dot" />
            <span>In-person &amp; online sessions</span>
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
              Imagine being able to see how your body responds to stress, focus, or relaxation — in real
              time. Our wellness technology uses gentle, non-invasive sensors to give you a clear view of
              your body's natural rhythms — helping you understand yourself better and make smarter choices
              about your well-being.
            </p>

            <p className="service-page__story">
              Using clinical-grade EEG and biofeedback tools, we translate your body's signals — heart
              rhythm, breath, brainwaves — into simple, visual insights. Watch how your mind settles during
              breathing exercises, discover your focus patterns, and track your progress session by session.
              Science becomes your personal wellness companion.
            </p>

            <div className="service-page__section">
              <h2>What We'll Explore Together</h2>
              <ul className="service-page__list">
                <li>How your body naturally responds to different activities</li>
                <li>What happens to your focus during work versus rest</li>
                <li>How meditation, breathing, or movement affects you personally</li>
                <li>Your unique patterns over time — not generic averages</li>
                <li>Practical ways to use this knowledge in daily life</li>
              </ul>
            </div>

            <div className="service-page__section">
              <h2>What You'll Walk Away With</h2>
              <ul className="service-page__list service-page__list--green">
                <li>Real-time feedback on your body's natural rhythms</li>
                <li>A personal baseline of your wellness patterns</li>
                <li>Data-backed insights to optimize your daily routine</li>
                <li>Proof that your habits are working (or need adjustment)</li>
                <li>A deeper connection between mind and body</li>
              </ul>
            </div>

            <div className="service-page__ideal">
              <strong>Ideal for:</strong> Curious minds who want to understand their body better and make
              informed decisions about their well-being.
            </div>

            <div className="service-page__cta">
              <a
                href="https://wa.me/2347010744142?text=Hello%2C%20I%27m%20interested%20in%20Wellness%20Technology."
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Discovery Call
              </a>
              <a
                href="https://wa.me/2349052933182?text=Hello%2C%20I%27m%20interested%20in%20Wellness%20Technology."
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
