import { Link } from 'react-router-dom'

const footerLinks = {
  Services: [
    { label: 'Life Coaching', to: '/services#life-coaching' },
    { label: 'Career Coaching', to: '/services#career-coaching' },
    { label: 'Health Coaching', to: '/services#health-coaching' },
    { label: 'Business Coaching', to: '/services#business-coaching' },
    { label: 'Wellness Technology', to: '/services#wellness-tech' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Privacy Policy', to: '/terms' },
  ],
  Resources: [
    { label: 'Free Discovery Call', to: '/contact' },
    { label: 'Find a Venue', to: '/services#venues' },
    { label: 'Equipment Guide', to: '/services#equipment' },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="navbar__logo" aria-label="Coach & Heal Home">
              <img src="/logo.svg" alt="" className="navbar__logo-img" />
              <span className="navbar__logo-text">Coach & Heal</span>
            </Link>
            <p className="footer__tagline">
              Empowering growth in life, health, career, and business.
              Personalized coaching to help you achieve balance, confidence,
              and lasting success — available online and across Nigeria.
            </p>
            <div className="footer__contact">
              <a href="https://wa.me/2347010744142" target="_blank" rel="noopener noreferrer noreferrer">
                +234 701 074 4142
              </a>
              <a href="mailto:Ibe@coachandheal.store">Ibe@coachandheal.store</a>
            </div>
            <div className="footer__social">
              <a
                href="https://wa.me/2347010744142"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer noreferrer"
                aria-label="WhatsApp"
              >
                W
              </a>
              <a
                href="https://t.me/coachandheal"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer noreferrer"
                aria-label="Telegram"
              >
                T
              </a>
              <a
                href="https://instagram.com/coachandheal"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer noreferrer"
                aria-label="Instagram"
              >
                I
              </a>
              <a
                href="https://linkedin.com/company/coachandheal"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer noreferrer"
                aria-label="LinkedIn"
              >
                L
              </a>
            </div>
          </div>

          <div className="footer__links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer__link-group">
                <h4 className="footer__link-title">{category}</h4>
                <ul className="footer__link-list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="footer__link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Coach & Heal by Coach Ibe / Ibereal Enterprise. All rights reserved.
          </p>
          <p className="footer__disclaimer">
            Our services are for personal and professional development. They are not
            a substitute for professional medical or psychological advice. Always
            consult a qualified healthcare provider for medical concerns.
          </p>
        </div>
      </div>
    </footer>
  )
}
