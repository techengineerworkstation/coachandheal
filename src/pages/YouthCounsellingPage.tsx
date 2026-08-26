import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function YouthCounsellingPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="service-page">
      <section className="service-hero">
        <img
          src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Counsellor engaging a group of children in a warm, supportive session"
          className="service-hero__img"
        />
        <div className="service-hero__overlay" />
        <div className="container service-hero__content">
          <span className="section-label">Counselling — Our Core</span>
          <h1 className="services-hero__title">Youth &amp; Teen Counselling</h1>
          <p className="services-hero__subtitle">Guidance for Young Minds</p>
          <div className="service-hero__meta">
            <span>Ongoing</span>
            <span className="service-detail__meta-dot" />
            <span>Ages 10–19 · In-person &amp; online</span>
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
              School pressure, social media comparison, friendship struggles, family
              changes, or simply the turbulence of growing up — young people carry more
              than adults often realize. Youth counselling gives teens a safe, respectful
              space to be heard without lecture or judgment.
            </p>

            <p className="service-page__story">
              We build trust first. Sessions are conversational and age-appropriate,
              helping young people name what they feel, understand themselves, and
              develop confidence and coping skills they'll carry into adulthood. Parents
              receive supportive guidance too — so progress at home matches progress in
              session.
            </p>

            <div className="service-page__section">
              <h2>What We'll Explore Together</h2>
              <ul className="service-page__list">
                <li>Academic pressure, exam stress, and motivation struggles</li>
                <li>Friendship difficulties, bullying, and social anxiety</li>
                <li>Self-esteem, identity, and confidence</li>
                <li>Family changes — separation, relocation, new siblings</li>
                <li>Healthy habits for screen time, sleep, and emotions</li>
              </ul>
            </div>

            <div className="service-page__section">
              <h2>What You'll Walk Away With</h2>
              <ul className="service-page__list service-page__list--green">
                <li>A trusted adult who listens without judgment</li>
                <li>Words and tools for big, confusing feelings</li>
                <li>Stronger confidence and resilience at school and home</li>
                <li>Healthier friendships and boundaries</li>
                <li>Parent guidance sessions that support lasting change</li>
              </ul>
            </div>

            <div className="service-page__ideal">
              <strong>Ideal for:</strong> Young people aged 10–19 navigating school
              stress, social pressures, family transitions, or emotional struggles —
              with parental consent and involvement where appropriate.
            </div>

            <div className="service-page__cta">
              <a
                href="https://wa.me/2347010744142?text=Hello%2C%20I%27d%20like%20to%20arrange%20Youth%20%26%20Teen%20Counselling."
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arrange a Session
              </a>
              <a
                href="https://wa.me/2349052933182?text=Hello%2C%20I%27d%20like%20to%20arrange%20Youth%20%26%20Teen%20Counselling."
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
