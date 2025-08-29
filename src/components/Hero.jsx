import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const { t } = useLanguage();
  const fullText = t('hero.subtitle');
  
  useEffect(() => {
    setDisplayText('');
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-main-content fade-in-up">
            <div className="terminal-prompt">
              <span className="prompt-symbol terminal-text">user@devotion:~$ </span>
              <span className="command">./mission --start</span>
            </div>
            
            <div className="hero-title">
              <img src="./logo.png" alt="Devotion" className="hero-logo" />
              <h1 className="hero-title-text">
                <span className="dev-green">dev</span><span className="otion-white">otion</span>
              </h1>
            </div>
            
            <div className="subtitle">
              <span className="typing-text">{displayText}</span>
              <span className="blinking-cursor"></span>
            </div>
            
            <p className="hero-description">
              {t('hero.description')}
            </p>
            
            <div className="hero-buttons">
              <button className="terminal-button primary">
                <span>{t('hero.button1')}</span>
              </button>
              <button className="terminal-button">
                <span>{t('hero.button2')}</span>
              </button>
            </div>
            
            <div className="terminal-output">
              <div className="output-line">
                <span className="terminal-text">></span> {t('hero.output1')}
              </div>
              <div className="output-line">
                <span className="terminal-text">></span> {t('hero.output2')}
              </div>
              <div className="output-line">
                <span className="terminal-text">></span> {t('hero.output3')}
              </div>
            </div>
          </div>

          <div className="hero-sidebar fade-in-right">
            <div className="events-sidebar">
              <div className="terminal-window sidebar-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control close"></span>
                    <span className="control minimize"></span>
                    <span className="control maximize"></span>
                  </div>
                  <span className="window-title">upcoming_events.json</span>
                </div>
                
                <div className="window-content">
                  <div className="sidebar-header">
                    <h3 className="sidebar-title">{t('events.title')}</h3>
                  </div>

                  <div className="event-card-sidebar">
                    <div className="event-status-badge-sidebar">
                      <span className="status-dot"></span>
                      {t('events.status.registration')}
                    </div>
                    
                    <div className="event-info-sidebar">
                      <div className="event-title-sidebar">
                        <span className="hash-sidebar">#</span>HACK<span className="year-sidebar">2025</span>
                        <span className="location-sidebar">Guatemala</span>
                      </div>
                      <div className="event-date-sidebar">
                        <span className="date-icon-sidebar">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                            <line x1="16" x2="16" y1="2" y2="6"/>
                            <line x1="8" x2="8" y1="2" y2="6"/>
                            <line x1="3" x2="21" y1="10" y2="10"/>
                          </svg>
                        </span>
                        {t('hack2025.date')}
                      </div>
                      <div className="event-description-sidebar">
                        {t('hack2025.tagline')}
                      </div>
                    </div>

                    <div className="event-actions-sidebar">
                      <Link to="/hack2025" className="event-btn-sidebar primary">
                        <span className="btn-icon-sidebar">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.35-4.35"/>
                          </svg>
                        </span>
                        Detalles
                      </Link>
                      <Link to="/hack2025" className="event-btn-sidebar secondary">
                        <span className="btn-icon-sidebar">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14,2 14,8 20,8"/>
                            <line x1="16" x2="8" y1="13" y2="13"/>
                            <line x1="16" x2="8" y1="17" y2="17"/>
                            <polyline points="10,9 9,9 8,9"/>
                          </svg>
                        </span>
                        Registro
                      </Link>
                    </div>
                  </div>

                  <div className="coming-soon-sidebar">
                    <div className="loading-dots">
                      <span className="dot">.</span>
                      <span className="dot">.</span>
                      <span className="dot">.</span>
                    </div>
                    <p>Más eventos próximamente...</p>
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

export default Hero;