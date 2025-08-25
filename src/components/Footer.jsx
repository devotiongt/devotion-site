import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-logo">
                <img src="./logo.png" alt="Devotion" className="footer-logo-image" />
                <span className="footer-logo-text">
                  <span className="dev-green">dev</span><span className="otion-white">otion</span>
                </span>
              </div>
              <p className="footer-tagline">
                {t('footer.tagline')}
              </p>
              <div className="footer-verse">
                <span className="terminal-text">"</span>
                {t('footer.verse')}
                <span className="terminal-text">"</span>
                <div className="verse-ref">{t('footer.verseRef')}</div>
              </div>
            </div>

            {/* <div className="footer-section">
              <h4>{t('footer.services.title')}</h4>
              <ul className="footer-links">
                <li><a href="#services">{t('footer.services.web')}</a></li>
                <li><a href="#services">{t('footer.services.mobile')}</a></li>
                <li><a href="#services">{t('footer.services.ministry')}</a></li>
                <li><a href="#services">{t('footer.services.consulting')}</a></li>
              </ul>
            </div> */}

            <div className="footer-section">
              <h4>{t('footer.organization.title')}</h4>
              <ul className="footer-links">
                <li><a href="#about">{t('footer.organization.mission')}</a></li>
                <li><a href="#about">{t('footer.organization.values')}</a></li>
                <li><a href="#contact">{t('footer.organization.contact')}</a></li>
                {/* <li><a href="#">{t('footer.organization.testimonials')}</a></li> */}
              </ul>
            </div>

            <div className="footer-section">
              <h4>{t('footer.connect')}</h4>
              <ul className="footer-links social">
                <li>
                  <a href="#" className="social-link">
                    <span className="terminal-text">></span> Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <span className="terminal-text">></span> WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <span className="terminal-text">></span> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <span className="terminal-text">></span> Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <span className="terminal-text">></span> GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-terminal">
            <div className="terminal-line">
              <span className="terminal-text">user@devotion:~$ </span>
              <span>{t('footer.terminal.command')}</span>
            </div>
            <div className="terminal-output">
              <span>{t('footer.terminal.output')}</span>
            </div>
          </div>
          
          <div className="footer-copyright">
            <div className="copyright-text">
              © {currentYear} Devotion. {t('footer.copyright')}
            </div>
            <div className="footer-tech">
              <span className="terminal-text">Powered by:</span> {t('footer.tech')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;