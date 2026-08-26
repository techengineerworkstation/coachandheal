import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function GriefCounsellingPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="service-page">
      <section className="service-hero">
        <img
          src="https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Hands joined together in a circle — solidarity and support through hard times"
          className="service-hero__img"
        />
        <div className="service-hero__overlay" />
        <div className="container service-hero__content">
          <span className="section-label">Counselling — Our Core</span>
          <h1 className="services-hero__title">Grief, Trauma &amp; Crisis Counselling</h1>
          <p className="services-hero__subtitle">Support Through Life's Hardest Moments</p>
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
              Losing someone you love, surviving a traumatic experience, or facing a
              sudden crisis can shake everything you thought was steady. Grief has no
              timetable, and healing isn't about "moving on" — it's about learning to
              carry loss in a way that lets you live again.
            </p>

            <p className="service-page__story">
              In these sessions, you set the pace. We provide a gentle, confidential
              space to speak honestly about what happened and what you're feeling —
              anger, guilt, numbness, disbelief, or anything in between. Step by step,
              we work toward acceptance, meaning, and quiet strength for the days
              ahead.
            </p>

            <div className="service-page__section">
              <h2>What We'll Explore Together</h2>
              <ul className="service-page__list">
                <li>Your experience of loss or trauma — told your way, at your pace</li>
                <li>The emotions that come with grief, and why they're all normal</li>
                <li>Healthy ways to remember, honour, and process</li>
                <li>Managing anniversaries, triggers, and difficult days</li>
                <li>Finding meaning and steady ground again</li>
              </ul>
            </div>

            <div className="service-page__section">
              <h2>What You'll Walk Away With</h2>
              <ul className="service-page__list service-page__list--green">
                <li>A compassionate space where nothing you feel is "wrong"</li>
                <li>Tools to navigate grief waves without being swept away</li>
                <li>Relief from isolation — you don't have to do this alone</li>
                <li>Renewed capacity for rest, connection, and daily life</li>
                <li>Hope that honors your loss while opening the future</li>
              </ul>
            </div>

            <div className="service-page__ideal">
              <strong>Ideal for:</strong> Anyone bereaved, survivors of traumatic
              experiences, and those navigating sudden crisis or life-shattering
              change — handled with utmost confidentiality and care.
            </div>

            <div className="service-page__cta">
              <a
                href="https://wa.me/2347010744142?text=Hello%2C%20I%27d%20like%20to%20arrange%20Grief%20%26%20Crisis%20Counselling."
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arrange a Session
              </a>
              <a
                href="https://wa.me/2349052933182?text=Hello%2C%20I%27d%20like%20to%20arrange%20Grief%20%26%20Crisis%20Counselling."
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
