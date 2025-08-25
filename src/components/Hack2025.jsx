import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Hack2025.css';

const Hack2025 = () => {
  const { t } = useLanguage();

  return (
    <section id="hack2025" className="hack2025">
      <div className="container">
        <div className="terminal-window">
          <div className="window-header">
            <div className="window-controls">
              <span className="control close"></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <span className="window-title">hack2025.exe</span>
          </div>
          
          <div className="window-content">
            <div className="hack-header">
              <div className="terminal-line">
                <span className="prompt">~/devotion/events$</span> cat hack2025.info
              </div>
              <div className="terminal-output">
                <div className="hack-title">
                  <span className="hash">#</span>HACK<span className="year">2025</span> <span className="location">Guatemala</span>
                </div>
                <div className="hack-subtitle">{t('hack2025.subtitle')}</div>
                <div className="hack-date">{t('hack2025.date')}</div>
                <div className="hack-tagline">{t('hack2025.tagline')}</div>
              </div>
            </div>

            <div className="hack-content">
              <div className="hack-grid">
                <div className="hack-info">
                  <div className="info-section">
                    <h3>{t('hack2025.what.title')}</h3>
                    <p>{t('hack2025.what.description')}</p>
                    
                    <div className="goals-list">
                      <div className="goal-item">
                        <span className="goal-icon">🎯</span>
                        <span>{t('hack2025.what.goals.identify')}</span>
                      </div>
                      <div className="goal-item">
                        <span className="goal-icon">⚡</span>
                        <span>{t('hack2025.what.goals.develop')}</span>
                      </div>
                      <div className="goal-item">
                        <span className="goal-icon">🌍</span>
                        <span>{t('hack2025.what.goals.create')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="info-section">
                    <h3>{t('hack2025.participants.title')}</h3>
                    <div className="participants-grid">
                      <div className="participant-type">
                        <span className="participant-icon">👨‍💻</span>
                        <span>{t('hack2025.participants.developers')}</span>
                      </div>
                      <div className="participant-type">
                        <span className="participant-icon">🎨</span>
                        <span>{t('hack2025.participants.designers')}</span>
                      </div>
                      <div className="participant-type">
                        <span className="participant-icon">🚀</span>
                        <span>{t('hack2025.participants.entrepreneurs')}</span>
                      </div>
                      <div className="participant-type">
                        <span className="participant-icon">🌐</span>
                        <span>{t('hack2025.participants.missionaries')}</span>
                      </div>
                      <div className="participant-type">
                        <span className="participant-icon">✨</span>
                        <span>{t('hack2025.participants.creatives')}</span>
                      </div>
                      <div className="participant-type">
                        <span className="participant-icon">❤️</span>
                        <span>{t('hack2025.participants.anyone')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hack-guatemala">
                  <div className="terminal-window small">
                    <div className="window-header">
                      <div className="window-controls">
                        <span className="control close"></span>
                        <span className="control minimize"></span>
                        <span className="control maximize"></span>
                      </div>
                      <span className="window-title">guatemala.json</span>
                    </div>
                    <div className="window-content">
                      <div className="guatemala-info">
                        <h3>{t('hack2025.guatemala.title')}</h3>
                        <div className="guatemala-details">
                          <div className="detail-item">
                            <span className="detail-label">📅 Fecha:</span>
                            <span className="detail-value">{t('hack2025.guatemala.date')}</span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">📍 Lugar:</span>
                            <span className="detail-value">{t('hack2025.guatemala.location')}</span>
                          </div>
                        </div>
                        <p>{t('hack2025.guatemala.description')}</p>
                        <div className="updates-note">
                          <span className="updates-icon">🔔</span>
                          <span>{t('hack2025.guatemala.updates')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hack-cta">
                <div className="cta-grid">
                  <div className="cta-item">
                    <div className="terminal-window cta">
                      <div className="window-header">
                        <div className="window-controls">
                          <span className="control close"></span>
                          <span className="control minimize"></span>
                          <span className="control maximize"></span>
                        </div>
                        <span className="window-title">pre-register.sh</span>
                      </div>
                      <div className="window-content">
                        <h4>{t('hack2025.cta.preregister.title')}</h4>
                        <p>{t('hack2025.cta.preregister.subtitle')}</p>
                        <Link to="/hack2025" className="hack-btn primary">
                          <span className="btn-icon">📝</span>
                          {t('hack2025.cta.preregister.button')}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="cta-item">
                    <div className="terminal-window cta">
                      <div className="window-header">
                        <div className="window-controls">
                          <span className="control close"></span>
                          <span className="control minimize"></span>
                          <span className="control maximize"></span>
                        </div>
                        <span className="window-title">volunteer.sh</span>
                      </div>
                      <div className="window-content">
                        <h4>{t('hack2025.cta.volunteer.title')}</h4>
                        <p>{t('hack2025.cta.volunteer.subtitle')}</p>
                        <Link to="/hack2025" className="hack-btn secondary">
                          <span className="btn-icon">🙋‍♂️</span>
                          {t('hack2025.cta.volunteer.button')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hack2025;