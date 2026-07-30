const footerLinks = {
  Services: ['Life Coaching', 'Career Coaching', 'Health Coaching', 'Business Coaching', 'Brain Training'],
  Programs: ['8-Week Life Transform', 'Career Accelerator', 'Health Reset', 'Business Scale-Up', 'Neurofeedback Basics'],
  Resources: ['Blog', 'Podcast', 'Free Discovery Call', 'EEG Guide', 'Coaching FAQ'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'HIPAA Compliance', 'Data Security'],
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
              Empowering growth in life, health, career, and business.
              Personalized coaching to help you achieve balance, confidence,
              and lasting success — powered by real-time brain data.
            </p>
            <div className="footer__contact">
              <p>+234 701 074 4142</p>
              <p>Iberealenterprise@gmail.com</p>
            </div>
            <div className="footer__social">
              {['WhatsApp', 'Instagram', 'LinkedIn', 'Twitter'].map((platform) => (
                <a
                  key={platform}
                  href={platform === 'WhatsApp' ? 'https://wa.me/2347010744142' : `https://${platform.toLowerCase()}.com/coachandheal`}
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
            &copy; {new Date().getFullYear()} Coach & Heal by Coach Ibe. All rights reserved.
          </p>
          <p className="footer__disclaimer">
            Coach & Heal is not a substitute for professional medical advice,
            diagnosis, or treatment. EEG features require BrainBit or Mindo headband.
            Always consult a qualified health provider regarding medical or mental
            health concerns.
          </p>
        </div>
      </div>
    </footer>
  )
}
