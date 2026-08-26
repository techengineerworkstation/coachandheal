import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function TermsPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="terms-page">
      <section className="terms-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Legal</span>
            <h1 className="terms-hero__title">Terms of Service</h1>
            <p className="terms-hero__date">Last updated: July 30, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <motion.div
            className="terms-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Coach & Heal platform, website, or
              services (collectively, the "Services"), you agree to be bound
              by these Terms of Service. If you do not agree to these terms,
              please do not use our Services.
            </p>

            <h2>2. Who We Are</h2>
            <p>
              Coach & Heal is a coaching and wellness platform operated by Coach
              Ibe / Ibereal Enterprise, based in Lagos, Nigeria. We provide
              certified life, health, career, and world business coaching services,
              both online and in-person through partner wellness centers across
              Nigeria.
            </p>

            <h2>3. Our Services</h2>
            <p>We offer the following coaching programs:</p>
            <ul>
              <li><strong>Life Coaching:</strong> 8–12 week programs focused on personal growth, purpose, and fulfillment</li>
              <li><strong>Career Coaching:</strong> 6–10 week programs for career advancement, transitions, and professional development</li>
              <li><strong>Health Coaching:</strong> 8–12 week programs for sustainable wellness habits and lifestyle improvement</li>
              <li><strong>World Business Coaching:</strong> 12–16 week programs for entrepreneurs and world business owners seeking growth</li>
              <li><strong>Wellness Technology Sessions:</strong> Optional sessions using non-invasive wellness devices for additional insights</li>
            </ul>
            <p>
              All coaching services are delivered on a one-on-one basis unless
              otherwise specified. Group programs may be offered from time to time.
            </p>

            <h2>4. Booking and Payment</h2>
            <p>
              Sessions and programs can be booked through our website, WhatsApp,
              email, or phone. Payment terms will be discussed and agreed upon
              before the start of any program. We offer flexible payment options
              to make our services accessible.
            </p>

            <h2>5. Cancellation and Refund Policy</h2>
            <p>
              We understand that circumstances change. If you need to cancel or
              reschedule a session, please give us at least 24 hours' notice.
              Refund policies for multi-week programs will be outlined in your
              individual coaching agreement.
            </p>

            <h2>6. Confidentiality</h2>
            <p>
              Everything you share in coaching sessions is treated with the
              utmost confidentiality. We will not disclose any personal
              information, session content, or progress details to any third
              party without your explicit written consent, except where required
              by law.
            </p>

            <h2>7. Your Privacy and Data</h2>
            <p>
              Your privacy is fundamental to us. We collect minimal personal
              information — only what's necessary to deliver our services and
              communicate with you. If you choose to use our wellness technology
              features, your biometric data is processed entirely on your device
              and is never uploaded to our servers. For full details, please see
              our Privacy Policy.
            </p>

            <h2>8. Not a Substitute for Professional Advice</h2>
            <p>
              Our coaching services are designed for personal and professional
              development. They are not a substitute for professional medical,
              psychological, psychiatric, or therapeutic advice, diagnosis, or
              treatment. If you are experiencing a medical or mental health
              emergency, please contact emergency services or a qualified
              healthcare provider immediately.
            </p>

            <h2>9. Wellness Technology Disclaimer</h2>
            <p>
              Any wellness technology or devices referenced or used in our
              sessions are non-invasive and designed for general wellness
              purposes. They are not medical devices and are not intended to
              diagnose, treat, cure, or prevent any medical condition. Results
              may vary from person to person.
            </p>

            <h2>10. Intellectual Property</h2>
            <p>
              All content on the Coach & Heal website, including text, graphics,
              logos, and digital materials, is the property of Coach & Heal /
              Ibereal Enterprise and is protected by copyright law. You may not
              reproduce, distribute, or create derivative works without our
              written permission.
            </p>

            <h2>11. Limitation of Liability</h2>
            <p>
              Coach & Heal shall not be liable for any indirect, incidental,
              special, or consequential damages arising from your use of our
              Services. Our total liability shall not exceed the amount paid by
              you for the specific service giving rise to the claim.
            </p>

            <h2>12. Changes to These Terms</h2>
            <p>
              We may update these Terms of Service from time to time. Any
              changes will be posted on this page with an updated effective
              date. Continued use of our Services after changes constitutes
              acceptance of the updated terms.
            </p>

            <h2>13. Contact Us</h2>
            <p>If you have questions about these Terms, please contact us:</p>
            <ul>
              <li>WhatsApp: <a href="https://wa.me/2347010744142">+234 701 074 4142</a> / <a href="https://wa.me/2349052933182">+234 905 293 3182</a></li>
              <li>Email: <a href="mailto:Ibe@coachandheal.store">Ibe@coachandheal.store</a></li>
              <li>Location: Lagos, Nigeria</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
