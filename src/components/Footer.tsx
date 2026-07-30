const footerLinks = {
  Product: ['Features', 'Pricing', 'For Teams', 'For Coaches', 'Enterprise'],
  Company: ['About Us', 'Careers', 'Blog', 'Press', 'Partners'],
  Resources: ['Help Center', 'Community', 'Webinars', 'Research', 'API'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'HIPAA', 'Security'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="navbar__logo" aria-label="Coach & Heal Home">
              <div className="navbar__logo-icon">C&H</div>
              <span className="navbar__logo-text">Coach & Heal</span>
            </a>
            <p className="footer__tagline">
              Empowering millions to heal their minds, strengthen their bodies,
              and live their fullest lives.
            </p>
            <div className="footer__social">
              {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform.toLowerCase()}.com/coachandheal`}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer noreferrer"
                  aria-label={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer__link-group">
                <h4 className="footer__link-title">{category}</h4>
                <ul className="footer__link-list">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer__link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Coach & Heal. All rights reserved.
          </p>
          <p className="footer__disclaimer">
            Coach & Heal is not a substitute for professional medical advice,
            diagnosis, or treatment. Always seek the advice of your physician
            or other qualified health provider.
          </p>
        </div>
      </div>
    </footer>
  )
}
