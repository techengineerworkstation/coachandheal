import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HealthCoachingPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="service-page">
      <section className="service-hero">
        <img
          src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Woman meditating with candles and incense — natural wellness and calm"
          className="service-hero__img"
        />
        <div className="service-hero__overlay" />
        <div className="container service-hero__content">
          <span className="section-label">Our Services</span>
          <h1 className="services-hero__title">
            Health Coaching
          </h1>
          <p className="services-hero__subtitle">Feel Better, Naturally</p>
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
              True well-being isn't about extreme diets or pushing yourself to exhaustion. It's about
              finding sustainable habits that give you more energy, better sleep, and a clearer mind —
              without the burnout. We'll help you feel better in your body and mind, one step at a time.
            </p>

            <p className="service-page__story">
              Small shifts, repeated daily, change everything. Together we will design a routine around
              your real life — your work hours, your family, your energy patterns — blending gentle
              movement, nourishing food, and stress-care into something you can actually sustain. No
              extremes, no guilt, just steady progress you can feel.
            </p>

            <div className="service-page__section">
              <h2>What We'll Explore Together</h2>
              <ul className="service-page__list">
                <li>Your current habits and what's working (and what isn't)</li>
                <li>Simple, realistic changes that fit your busy lifestyle</li>
                <li>How stress affects you personally — and what to do about it</li>
                <li>Movement and nutrition that feels good, not forced</li>
                <li>Sleep, energy, and mental clarity improvements</li>
              </ul>
            </div>

            <div className="service-page__section">
              <h2>What You'll Walk Away With</h2>
              <ul className="service-page__list service-page__list--green">
                <li>Personalized nutrition and movement plans that actually work</li>
                <li>Stress and anxiety management techniques for daily life</li>
                <li>Sustainable healthy habits — no crash diets, no extremes</li>
                <li>More energy, better sleep, and a clearer mind</li>
                <li>A healthier relationship with your body and well-being</li>
              </ul>
            </div>

            <div className="service-page__ideal">
              <strong>Ideal for:</strong> Busy professionals who want to feel better in body and mind —
              without giving up their life to do it.
            </div>

            <div className="service-page__cta">
              <a
                href="https://wa.me/2347010744142?text=Hello%2C%20I%27m%20interested%20in%20Health%20Coaching."
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Discovery Call
              </a>
              <a
                href="https://wa.me/2349052933182?text=Hello%2C%20I%27m%20interested%20in%20Health%20Coaching."
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
