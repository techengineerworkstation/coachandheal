import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'

export default function ContactMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.1)

  return (
    <section className="contact-map" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Find Us</span>
          <h2 className="section-title">
            Let's Connect
            <br />
            <span className="gradient-text">Wherever You Are</span>
          </h2>
          <p className="section-subtitle">
            Available for online coaching worldwide, with in-person sessions
            at partner locations across Lagos, Nigeria.
          </p>
        </motion.div>

        <motion.div
          className="contact-map__content"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="contact-map__info">
            <div className="contact-map__card">
              <h3>Get in Touch</h3>
              <div className="contact-map__details">
                <div className="contact-map__item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <div>
                    <strong>Phone / WhatsApp</strong>
                    <a href="https://wa.me/2347010744142" target="_blank" rel="noopener noreferrer noreferrer">
                      +234 701 074 4142
                    </a>
                  </div>
                </div>
                <div className="contact-map__item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:Iberealenterprise@gmail.com">Iberealenterprise@gmail.com</a>
                  </div>
                </div>
                <div className="contact-map__item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <strong>Location</strong>
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>
              </div>
              <div className="contact-map__actions">
                <a
                  href="https://wa.me/2347010744142"
                  className="btn btn--primary btn--sm"
                  target="_blank"
                  rel="noopener noreferrer noreferrer"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="https://t.me/coachandheal"
                  className="btn btn--ghost btn--sm"
                  target="_blank"
                  rel="noopener noreferrer noreferrer"
                >
                  Message on Telegram
                </a>
              </div>
            </div>
          </div>

          <div className="contact-map__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127063.53507502225!2d3.2180026!3d6.5480162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b4a8c2837d1%3A0x54de1e8e89677026!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1722336000000!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coach & Heal - Lagos, Nigeria"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
