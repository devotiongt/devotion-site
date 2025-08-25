import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <div className="terminal-prompt">
            <span className="terminal-text">root@devotion:~$ </span>
            <span>cat about.md</span>
          </div>
          <h2>{t('about.title')}</h2>
        </div>
        
        <div className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <div className="terminal-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control close"></span>
                    <span className="control minimize"></span>
                    <span className="control maximize"></span>
                  </div>
                  <span className="window-title">mission.txt</span>
                </div>
                <div className="window-content">
                  <p>
                    <span className="terminal-text">#!/bin/bash</span><br/>
                    <span className="comment"># Devotion - Where Faith Meets Code</span>
                  </p>
                  <p>
                    {t('about.mission')}
                  </p>
                  <p>
                    {t('about.description')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="about-stats">
              <div className="stat-item terminal-border">
                <div className="stat-number terminal-text">∞</div>
                <div className="stat-label">{t('about.stats.love')}</div>
              </div>
              <div className="stat-item terminal-border">
                <div className="stat-number terminal-text">100%</div>
                <div className="stat-label">{t('about.stats.dedication')}</div>
              </div>
            </div>
          </div>
          
          <div className="values-section">
            <h3 className="terminal-text">{t('about.values.title')}</h3>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon terminal-text">{'>'}</div>
                <div className="value-content">
                  <h4>{t('about.values.faith.title')}</h4>
                  <p>{t('about.values.faith.desc')}</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon terminal-text">{'>'}</div>
                <div className="value-content">
                  <h4>{t('about.values.excellence.title')}</h4>
                  <p>{t('about.values.excellence.desc')}</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon terminal-text">{'>'}</div>
                <div className="value-content">
                  <h4>{t('about.values.impact.title')}</h4>
                  <p>{t('about.values.impact.desc')}</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon terminal-text">{'>'}</div>
                <div className="value-content">
                  <h4>{t('about.values.service.title')}</h4>
                  <p>{t('about.values.service.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;