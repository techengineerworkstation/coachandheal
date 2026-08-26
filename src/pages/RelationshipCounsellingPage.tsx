import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function RelationshipCounsellingPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="service-page">
      <section className="service-hero">
        <img
          src="https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Family walking together, guiding a child on a bike — rebuilding connection"
          className="service-hero__img"
        />
        <div className="service-hero__overlay" />
        <div className="container service-hero__content">
          <span className="section-label">Counselling — Our Core</span>
          <h1 className="services-hero__title">Relationship &amp; Family Counselling</h1>
          <p className="services-hero__subtitle">Rebuild Connection &amp; Understanding</p>
          <div className="service-hero__meta">
            <span>Ongoing</span>
            <span className="service-detail__meta-dot" />
            <span>Couples, families &amp; individuals</span>
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
              Every relationship hits hard seasons — miscommunication, trust wounds,
              parenting strain, or the quiet drift that happens when life gets busy.
              Relationship and family counselling helps you understand each other again
              and rebuild the connection that brought you together.
            </p>

            <p className="service-page__story">
              Whether you come as a couple, a family, or on your own, we create a
              balanced space where every voice is heard. We help you move from blame to
              understanding, from silence to honest conversation, and from conflict to
              practical agreements that actually hold.
            </p>

            <div className="service-page__section">
              <h2>What We'll Explore Together</h2>
              <ul className="service-page__list">
                <li>Communication patterns that help — and those that hurt</li>
                <li>Trust, forgiveness, and repairing after conflict</li>
                <li>Parenting alignment and healthy family roles</li>
                <li>Intimacy, respect, and emotional safety</li>
                <li>Practical agreements for moving forward together</li>
              </ul>
            </div>

            <div className="service-page__section">
              <h2>What You'll Walk Away With</h2>
              <ul className="service-page__list service-page__list--green">
                <li>Tools for calm, honest, and respectful communication</li>
                <li>A deeper understanding of each other's needs</li>
                <li>Concrete strategies for resolving conflict without damage</li>
                <li>Stronger bonds — as partners and as a family</li>
                <li>Renewed hope and a shared plan for the future</li>
              </ul>
            </div>

            <div className="service-page__ideal">
              <strong>Ideal for:</strong> Couples preparing for marriage, partners facing
              conflict or distance, parents and teens struggling to connect, and families
              navigating change.
            </div>

            <div className="service-page__cta">
              <a
                href="https://wa.me/2347010744142?text=Hello%2C%20I%27d%20like%20to%20arrange%20Relationship%20%26%20Family%20Counselling."
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arrange a Session
              </a>
              <a
                href="https://wa.me/2349052933182?text=Hello%2C%20I%27d%20like%20to%20arrange%20Relationship%20%26%20Family%20Counselling."
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
