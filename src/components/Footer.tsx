import { Link } from 'react-router-dom'

interface FooterLink {
  label: string
  to: string
  desc?: string
}

const footerLinks: Record<string, FooterLink[]> = {
  Counselling: [
    { label: 'Individual Counselling', to: '/services/individual-counselling', desc: 'A safe space to talk & heal' },
    { label: 'Relationship & Family', to: '/services/relationship-counselling', desc: 'Rebuild connection & trust' },
    { label: 'Career & Academic', to: '/services/career-academic-counselling', desc: 'Clarity for study & work' },
    { label: 'Grief, Trauma & Crisis', to: '/services/grief-counselling', desc: 'Support through hard moments' },
    { label: 'Youth & Teen', to: '/services/youth-counselling', desc: 'Guidance for young minds' },
  ],
  'Side Associations': [
    { label: 'Life Coaching', to: '/services/life-coaching', desc: 'Clarity, purpose & direction' },
    { label: 'Career Coaching', to: '/services/career-coaching', desc: 'CVs, interviews & advancement' },
    { label: 'Health Coaching', to: '/services/health-coaching', desc: 'Sustainable energy & habits' },
    { label: 'World Business Coaching', to: '/services/world-coaching', desc: 'Strategy, systems & leadership' },
    { label: 'Wellness Technology', to: '/services/wellness-tech', desc: 'EEG & biofeedback insights' },
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
              Professional counselling at the heart of everything we do —
              individual, relationship, career, grief, and youth counselling,
              supported by health and therapeutic services. Online worldwide
              and across Nigeria.
            </p>
            <div className="footer__contact">
              <a href="https://wa.me/2347010744142" target="_blank" rel="noopener noreferrer noreferrer">
                +234 701 074 4142
              </a>
              <a href="https://wa.me/2349052933182" target="_blank" rel="noopener noreferrer noreferrer">
                +234 905 293 3182
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
                      {link.desc && <span className="footer__link-desc">{link.desc}</span>}
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
