import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import './Volunteers.css';

const Volunteers = () => {
  const { t } = useLanguage();

  return (
    <section id="volunteers" className="volunteers">
      <div className="container">
        <div className="section-header">
          <div className="terminal-prompt">
            <span className="terminal-text">user@devotion:~$ </span>
            <span>./find --volunteers</span>
          </div>
          <h2>{t('volunteers.title')}</h2>
          <p className="section-subtitle">
            {t('volunteers.subtitle')}
          </p>
        </div>

        <div className="volunteers-content">
          <div className="volunteers-summary">
            <div className="summary-text">
              <h3 className="terminal-text">{t('volunteers.summary.title')}</h3>
              <p>{t('volunteers.summary.description')}</p>
              
              <div className="roles-list">
                <span className="terminal-text">Roles:</span>
                <span className="roles-text">{t('volunteers.summary.roles')}</span>
              </div>
            </div>
            
            <div className="volunteer-cta-compact">
              <div className="cta-terminal">
                <div className="terminal-line">
                  <span className="terminal-text">user@devotion:~$ </span>
                  <span>./join --volunteer</span>
                </div>
              </div>
              <Link to="/volunteers" className="terminal-button primary">
                {t('volunteers.cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteers;