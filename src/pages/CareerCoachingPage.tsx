import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CareerCoachingPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="service-page">
      <section className="service-hero">
        <img
          src="https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Two professionals in a mentoring session — career clarity and growth"
          className="service-hero__img"
        />
        <div className="service-hero__overlay" />
        <div className="container service-hero__content">
          <span className="section-label">Our Services</span>
          <h1 className="services-hero__title">
            Career Coaching
          </h1>
          <p className="services-hero__subtitle">Navigate Your Career with Confidence</p>
          <div className="service-hero__meta">
            <span>6–10 weeks</span>
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
              Whether you're eyeing a promotion, thinking about a career change, or returning to work
              after a break — navigating your professional path can feel overwhelming. We'll work together
              to find clarity, build your strategy, and give you the tools to move forward with confidence.
            </p>

            <p className="service-page__story">
              Your career is a marathon of decisions — which role, which leap, which negotiation. We turn
              those moments from guesswork into strategy. From rewriting your CV to rehearsing the interview
              room, you will practice until confidence becomes muscle memory, and opportunities stop feeling
              out of reach.
            </p>

            <div className="service-page__section">
              <h2>What We'll Explore Together</h2>
              <ul className="service-page__list">
                <li>Where you are now versus where you want to be</li>
                <li>Your unique strengths and how to leverage them</li>
                <li>The skills and experiences that make you stand out</li>
                <li>How to position yourself for the opportunities you want</li>
                <li>Building confidence through preparation and practice</li>
              </ul>
            </div>

            <div className="service-page__section">
              <h2>What You'll Walk Away With</h2>
              <ul className="service-page__list service-page__list--green">
                <li>Clear career goals and a step-by-step roadmap</li>
                <li>A professional CV and LinkedIn profile that gets noticed</li>
                <li>Interview preparation and salary negotiation skills</li>
                <li>Confidence to make career transitions smoothly</li>
                <li>A network strategy that opens doors</li>
              </ul>
            </div>

            <div className="service-page__ideal">
              <strong>Ideal for:</strong> Professionals seeking advancement, career changers, those
              returning to work, or anyone who wants more from their career.
            </div>

            <div className="service-page__cta">
              <a
                href="https://wa.me/2347010744142?text=Hello%2C%20I%27m%20interested%20in%20Career%20Coaching."
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Discovery Call
              </a>
              <a
                href="https://wa.me/2349052933182?text=Hello%2C%20I%27m%20interested%20in%20Career%20Coaching."
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
