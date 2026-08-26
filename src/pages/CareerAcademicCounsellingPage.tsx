import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CareerAcademicCounsellingPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="service-page">
      <section className="service-hero">
        <img
          src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Professional career counselling consultation across a desk"
          className="service-hero__img"
        />
        <div className="service-hero__overlay" />
        <div className="container service-hero__content">
          <span className="section-label">Counselling — Our Core</span>
          <h1 className="services-hero__title">Career &amp; Academic Counselling</h1>
          <p className="services-hero__subtitle">Clarity for Your Path, Study &amp; Work</p>
          <div className="service-hero__meta">
            <span>Ongoing</span>
            <span className="service-detail__meta-dot" />
            <span>Students &amp; professionals</span>
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
              Choosing a course of study, changing careers, returning to work after a
              break, or feeling stuck in the wrong role — these decisions carry real
              weight. Career and academic counselling helps you make them with clarity
              instead of pressure.
            </p>

            <p className="service-page__story">
              We combine structured career assessments with honest, one-on-one
              conversation about your strengths, values, and circumstances. Together we
              map realistic pathways — whether that means pursuing further study,
              repositioning your career, or building the confidence to take the next
              step.
            </p>

            <div className="service-page__section">
              <h2>What We'll Explore Together</h2>
              <ul className="service-page__list">
                <li>Your strengths, interests, and natural aptitudes</li>
                <li>Course and subject choices aligned with real career paths</li>
                <li>Career transitions — promotions, pivots, and comebacks</li>
                <li>Interview readiness and workplace confidence</li>
                <li>Managing academic pressure, exam stress, and motivation</li>
              </ul>
            </div>

            <div className="service-page__section">
              <h2>What You'll Walk Away With</h2>
              <ul className="service-page__list service-page__list--green">
                <li>A clear, realistic education or career roadmap</li>
                <li>Confidence in your decisions — backed by self-knowledge</li>
                <li>A CV and profile that reflect your true strengths</li>
                <li>Strategies for exam stress and performance anxiety</li>
                <li>Ongoing support as you act on your plan</li>
              </ul>
            </div>

            <div className="service-page__ideal">
              <strong>Ideal for:</strong> Secondary and university students choosing
              paths, graduates entering the workforce, and professionals seeking
              change, advancement, or a confident return to work.
            </div>

            <div className="service-page__cta">
              <a
                href="https://wa.me/2347010744142?text=Hello%2C%20I%27d%20like%20to%20arrange%20Career%20%26%20Academic%20Counselling."
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arrange a Session
              </a>
              <a
                href="https://wa.me/2349052933182?text=Hello%2C%20I%27d%20like%20to%20arrange%20Career%20%26%20Academic%20Counselling."
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
