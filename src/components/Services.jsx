import { useLanguage } from '../contexts/LanguageContext';
import './Services.css';

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      command: 'web-development',
      key: 'web'
    },
    {
      command: 'mobile-apps',
      key: 'mobile'
    },
    {
      command: 'ministry-tools',
      key: 'ministry'
    },
    {
      command: 'evangelism-platforms',
      key: 'evangelism'
    },
    {
      command: 'data-analytics',
      key: 'analytics'
    },
    {
      command: 'tech-consulting',
      key: 'consulting'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <div className="terminal-prompt">
            <span className="terminal-text">user@devotion:~$ </span>
            <span>ls -la services/</span>
          </div>
          <h2>{t('services.title')}</h2>
          <p className="section-subtitle">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card terminal-border">
              <div className="service-header">
                <div className="service-command">
                  <span className="terminal-text">$ ./run </span>
                  <span className="command-name">{service.command}</span>
                </div>
              </div>
              
              <div className="service-content">
                <h3>{t(`services.list.${service.key}.title`)}</h3>
                <p>{t(`services.list.${service.key}.desc`)}</p>
                
                <div className="service-features">
                  <div className="features-header">
                    <span className="terminal-text">Features:</span>
                  </div>
                  <ul>
                    {t(`services.list.${service.key}.features`).map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <span className="terminal-text">></span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="service-footer">
                <button className="terminal-button small">
                  {t('services.button')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <div className="terminal-window">
            <div className="window-header">
              <div className="window-controls">
                <span className="control close"></span>
                <span className="control minimize"></span>
                <span className="control maximize"></span>
              </div>
              <span className="window-title">project_proposal.sh</span>
            </div>
            <div className="window-content">
              <div className="cta-content">
                <h3>{t('services.cta.title')}</h3>
                <p>
                  {t('services.cta.desc')}
                </p>
                <button className="terminal-button primary">
                  {t('services.cta.button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;