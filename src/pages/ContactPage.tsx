import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="contact-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Contact Us</span>
            <h1 className="contact-hero__title">
              We'd Love to
              <br />
              <span className="gradient-text">Hear From You</span>
            </h1>
            <p className="contact-hero__subtitle">
              Whether you have a question, want to learn more about our services,
              or are ready to begin your journey — reach out. We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-content__grid">
            <motion.div
              className="contact-content__cards"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <h3>Phone / WhatsApp</h3>
                <a href="https://wa.me/2347010744142" target="_blank" rel="noopener noreferrer noreferrer">
                  +234 701 074 4142
                </a>
                <p>Available Monday — Saturday, 8am — 8pm WAT</p>
              </div>

              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h3>Email</h3>
                <a href="mailto:Ibe@coachandheal.store">Ibe@coachandheal.store</a>
                <p>We typically respond within 24 hours</p>
              </div>

              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                </div>
                <h3>Telegram</h3>
                <a href="https://t.me/coachandheal" target="_blank" rel="noopener noreferrer noreferrer">
                  @coachandheal
                </a>
                <p>Send us a message anytime</p>
              </div>

              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3>Location</h3>
                <span>Lagos, Nigeria</span>
                <p>Available for online coaching worldwide</p>
              </div>
            </motion.div>

            <motion.div
              className="contact-content__map"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2>Find Us</h2>
              <p>
                We're based in Lagos, Nigeria — but our reach is nationwide
                and worldwide. Whether you're in Abuja, Port Harcourt, Ibadan,
                or anywhere else, we can work with you online.
              </p>
              <div className="contact-content__map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127063.53507502225!2d3.2180026!3d6.5480162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b4a8c2837d1%3A0x54de1e8e89677026!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1722336000000!5m2!1sen!2s"
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Coach & Heal - Lagos, Nigeria"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <motion.div
            className="contact-cta__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>Ready to Begin?</h2>
            <p>
              The first step is always the hardest — but you don't have to take
              it alone. Book a free discovery call and let's explore how we can
              support your journey.
            </p>
            <div className="contact-cta__actions">
              <a
                href="https://wa.me/2347010744142?text=Hello%2C%20I%27d%20like%20to%20book%20a%20free%20discovery%20call."
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer noreferrer"
              >
                Book Free Discovery Call
              </a>
              <a
                href="mailto:Ibe@coachandheal.store?subject=Discovery%20Call%20Request"
                className="btn btn--ghost"
              >
                Send Us an Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
