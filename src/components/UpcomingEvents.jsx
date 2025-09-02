import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const { t } = useLanguage();

  return (
    <section id="events" className="upcoming-events">
      <div className="container">
        <div className="terminal-window">
          <div className="window-header">
            <div className="window-controls">
              <span className="control close"></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <span className="window-title">upcoming_events.json</span>
          </div>
          
          <div className="window-content">
            <div className="events-header">
              <div className="terminal-line">
                <span className="prompt">~/devotion/events$</span> ls -la
              </div>
              <div className="terminal-output">
                <h2 className="events-title">{t('events.title')}</h2>
                <p className="events-subtitle">{t('events.subtitle')}</p>
              </div>
            </div>

            <div className="events-grid">
              <div className="event-card featured">
                <div className="event-status">
                  <span className="status-badge registration">{t('events.status.registration')}</span>
                </div>
                
                <div className="event-content">
                  <div className="event-header">
                    <div className="event-icon">
                      <span className="hack-icon">#</span>
                    </div>
                    <div className="event-meta">
                      <h3 className="event-title">
                        <span className="hash">#</span>HACK<span className="year">2025</span>
                        <span className="location">Guatemala</span>
                      </h3>
                      <div className="event-date">
                        <span className="date-icon">📅</span>
                        {t('hack2025.date')}
                      </div>
                    </div>
                  </div>

                  <div className="event-description">
                    <p>{t('hack2025.tagline')}</p>
                    <div className="event-highlights">
                      <div className="highlight-item">
                        <span className="highlight-icon">🌍</span>
                        <span>Hackathón global para misiones digitales</span>
                      </div>
                      <div className="highlight-item">
                        <span className="highlight-icon">💻</span>
                        <span>Desarrolladores, diseñadores y misioneros</span>
                      </div>
                      <div className="highlight-item">
                        <span className="highlight-icon">🏆</span>
                        <span>Soluciones innovadoras para el Reino</span>
                      </div>
                    </div>
                  </div>

                  <div className="event-actions">
                    <Link to="/hack2025" className="event-btn primary">
                      <span className="btn-icon">🔍</span>
                      Ver Detalles
                    </Link>
                    <Link to="/hack2025" className="event-btn secondary">
                      <span className="btn-icon">📝</span>
                      Registro
                    </Link>
                  </div>
                </div>

                <div className="event-glow"></div>
              </div>

              <div className="event-placeholder">
                <div className="terminal-window small">
                  <div className="window-header">
                    <div className="window-controls">
                      <span className="control close"></span>
                      <span className="control minimize"></span>
                      <span className="control maximize"></span>
                    </div>
                    <span className="window-title">coming_soon.txt</span>
                  </div>
                  <div className="window-content">
                    <div className="coming-soon">
                      <div className="loading-animation">
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                      </div>
                      <h4>Más Eventos Próximamente</h4>
                      <p>Estamos preparando más oportunidades increíbles para que puedas impactar el Reino de Dios.</p>
                      <div className="terminal-cursor">_</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="events-footer">
              <div className="terminal-line">
                <span className="prompt">~/devotion/events$</span> echo "Mantente conectado para más eventos"
              </div>
              <div className="terminal-output">
                <span className="output-text">Mantente conectado para más eventos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;