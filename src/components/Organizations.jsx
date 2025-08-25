import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import './Organizations.css';

const Organizations = () => {
  const { t } = useLanguage();

  return (
    <section id="organizations" className="organizations">
      <div className="container">
        <div className="section-header">
          <div className="terminal-prompt">
            <span className="terminal-text">user@devotion:~$ </span>
            <span>./help --organizations</span>
          </div>
          <h2>{t('organizations.title')}</h2>
          <p className="section-subtitle">
            {t('organizations.subtitle')}
          </p>
        </div>

        <div className="organizations-content">
          <div className="organizations-summary">
            <div className="summary-text">
              <h3 className="terminal-text">{t('organizations.summary.title')}</h3>
              <p>{t('organizations.summary.description')}</p>
              
              <div className="offer-list">
                <span className="terminal-text">Incluye:</span>
                <span className="offer-text">{t('organizations.summary.offer')}</span>
              </div>
            </div>
            
            <div className="organization-cta-compact">
              <div className="cta-terminal">
                <div className="terminal-line">
                  <span className="terminal-text">organization@ministry:~$ </span>
                  <span>./request --partnership</span>
                </div>
              </div>
              <Link to="/organizations" className="terminal-button primary">
                {t('organizations.cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizations;