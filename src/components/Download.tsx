import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'

export default function Download() {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.1)

  return (
    <section id="download" className="download" ref={ref}>
      <div className="container">
        <motion.div
          className="download__content"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="download__text">
            <span className="section-label">Get Started Today</span>
            <h2 className="download__title">
              Your Healing Journey
              <br />
              <span className="gradient-text">Starts with One Tap</span>
            </h2>
            <p className="download__description">
              Join over 2 million people who have already transformed their
              lives. Download Coach & Heal for free and take the first step
              toward a healthier, happier you.
            </p>
            <div className="download__buttons">
              <a
                href="https://apps.apple.com"
                className="store-btn"
                target="_blank"
                rel="noopener noreferrer noreferrer"
                aria-label="Download on the App Store"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </div>
              </a>
              <a
                href="https://play.google.com"
                className="store-btn"
                target="_blank"
                rel="noopener noreferrer noreferrer"
                aria-label="Get it on Google Play"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M3.18 23.04c.84.49 1.88.15 2.27-.62l7.73-8.68L3.18.58C2.68-.02 1.79-.25 1.2.23L12 12 1.2 23.77c.22.18.5.27.78.27.4 0 .8-.16 1.2-.5v.5zm14.36-7.74l-3.07 3.44-3.07-3.44 3.07-3.44 3.07 3.44zM3.18 23.04l10.29-5.84-2.57-2.89L3.18 23.04zm15.64-13.1l3.67 2.1c.77.44.77 1.54 0 1.98l-3.67 2.1-3.3-3.7 3.3-3.48z" />
                </svg>
                <div>
                  <small>Get it on</small>
                  <strong>Google Play</strong>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            className="download__visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="phone-mockup">
              <div className="phone-mockup__screen">
                <div className="phone-mockup__header">
                  <div className="phone-mockup__greeting">Good Morning</div>
                  <div className="phone-mockup__name">Welcome Back</div>
                </div>
                <div className="phone-mockup__card">
                  <div className="phone-mockup__card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div className="phone-mockup__card-title">Today's Progress</div>
                  <div className="phone-mockup__card-value">87%</div>
                </div>
                <div className="phone-mockup__actions">
                  <div className="phone-mockup__action">
                    <div className="phone-mockup__action-dot" style={{ background: '#6366f1' }} />
                    Morning Meditation
                  </div>
                  <div className="phone-mockup__action">
                    <div className="phone-mockup__action-dot" style={{ background: '#a855f7' }} />
                    Breathwork Session
                  </div>
                  <div className="phone-mockup__action">
                    <div className="phone-mockup__action-dot" style={{ background: '#ec4899' }} />
                    Evening Journal
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
