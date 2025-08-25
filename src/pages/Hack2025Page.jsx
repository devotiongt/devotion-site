
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { subscribeToNewsletter } from '../lib/supabase';
import Hack2025Forms from '../components/Hack2025Forms';
import './Hack2025Page.css';

const Hack2025Page = () => {
  const { t } = useLanguage();
  const [showForms, setShowForms] = useState(false);
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState({ type: null, message: '' });

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setNewsletterStatus({ type: null, message: '' });
    const result = await subscribeToNewsletter(email);
    
    if (result.success) {
      setNewsletterStatus({
        type: 'success',
        message: '¡Suscrito exitosamente! Recibirás actualizaciones sobre el evento.'
      });
      setEmail('');
    } else {
      setNewsletterStatus({
        type: 'error',
        message: 'Error al suscribirse. Por favor, inténtalo de nuevo.'
      });
    }
  };

  if (showForms) {
    return <Hack2025Forms />;
  }

  return (
    <div className="hack2025-page">
      <div className="container">
        {/* HERO SECTION */}
        <section className="hero-modern">
          <div className="hack-title-large">
            <span className="hash">#</span>HACK<span className="year">2025</span>
            <br />
            <span className="location">Guatemala</span>
          </div>
          <div className="hack-subtitle-large">{t('hack2025.subtitle')}</div>
          <div className="hack-tagline-large">{t('hack2025.tagline')}</div>
          <div className="hero-actions">
            <button className="reg-btn participant" onClick={() => setShowForms(true)}>
              <span className="reg-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4 20c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
              <div className="reg-content">
                <h4>Pre-regístrate</h4>
                <p>¡Reserva tu lugar!</p>
              </div>
            </button>
          </div>
        </section>

        {/* INFO GRID */}
        <div className="modern-grid">
          <section className="info-section">
            <h2>{t('hack2025.what.title')}</h2>
            <p className="description">{t('hack2025.what.description')}</p>
            <div className="global-event-info">
              <h3>Parte de Indigitous #HACK</h3>
              <p>
                HACK2025 Guatemala forma parte de <a href="https://hack.indigitous.org/" target="_blank" rel="noopener noreferrer">Indigitous #HACK</a>, 
                una iniciativa internacional que conecta a personas apasionadas por usar la tecnología y la creatividad 
                para enfrentar desafíos del Reino de Dios. El evento es organizado por <a href="https://indigitous.org" target="_blank" rel="noopener noreferrer">Indigitous</a>, 
                una red mundial dedicada a transformar vidas a través de la innovación digital y el evangelio.
              </p>
            </div>
            <div className="goals-list-modern">
              <div className="goal-modern">
                <span className="goal-number">01</span>
                <div>
                  <h4>Identificar Brechas Misioneras</h4>
                  <p>{t('hack2025.what.goals.identify')}</p>
                </div>
              </div>
              <div className="goal-modern">
                <span className="goal-number">02</span>
                <div>
                  <h4>Desarrollar Soluciones</h4>
                  <p>{t('hack2025.what.goals.develop')}</p>
                </div>
              </div>
              <div className="goal-modern">
                <span className="goal-number">03</span>
                <div>
                  <h4>Crear Estrategias Digitales</h4>
                  <p>{t('hack2025.what.goals.create')}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="participants-section">
            <h2>{t('hack2025.participants.title')}</h2>
            <div className="participants-modern-grid">
              <div className="participant-modern">
                <span className="participant-icon-large">👨‍💻</span>
                <h4>{t('hack2025.participants.developers')}</h4>
                <p>Frontend, backend, full-stack, mobile developers que quieren usar sus habilidades para misiones.</p>
              </div>
              <div className="participant-modern">
                <span className="participant-icon-large">🎨</span>
                <h4>{t('hack2025.participants.designers')}</h4>
                <p>Diseñadores UI/UX, gráficos y de experiencia que crean interfaces atractivas y funcionales.</p>
              </div>
              <div className="participant-modern">
                <span className="participant-icon-large">🚀</span>
                <h4>{t('hack2025.participants.entrepreneurs')}</h4>
                <p>Emprendedores sociales con visión para crear soluciones sostenibles y escalables.</p>
              </div>
              <div className="participant-modern">
                <span className="participant-icon-large">🌐</span>
                <h4>{t('hack2025.participants.missionaries')}</h4>
                <p>Trabajadores misioneros que conocen las necesidades del campo y pueden guiar el desarrollo.</p>
              </div>
              <div className="participant-modern">
                <span className="participant-icon-large">✨</span>
                <h4>{t('hack2025.participants.creatives')}</h4>
                <p>Profesionales creativos en marketing, contenido, video, fotografía y comunicaciones.</p>
              </div>
              <div className="participant-modern">
                <span className="participant-icon-large">❤️</span>
                <h4>{t('hack2025.participants.anyone')}</h4>
                <p>Cualquier persona apasionada por las misiones y que quiera contribuir al Reino de Dios.</p>
              </div>
            </div>
          </section>

          <section className="guatemala-section">
            <h2>{t('hack2025.guatemala.title')}</h2>
            <div className="guatemala-info-modern">
              <div>
                <span className="info-icon">📅</span>
                <strong>Fecha</strong>
                <p>{t('hack2025.guatemala.date')}</p>
              </div>
              <div>
                <span className="info-icon">📍</span>
                <strong>Ubicación</strong>
                <p>{t('hack2025.guatemala.location')}</p>
              </div>
              <div>
                <span className="info-icon">🏆</span>
                <strong>Premio</strong>
                <p>Reconocimientos y oportunidades de implementación</p>
              </div>
              <div>
                <span className="info-icon">🎯</span>
                <strong>Equipos</strong>
                <p>3-5 personas por equipo multidisciplinario</p>
              </div>
            </div>
            <div className="updates-box-modern">
              <h4>Actualizaciones</h4>
              <p>{t('hack2025.guatemala.updates')}</p>
              {newsletterStatus.message && (
                <div style={{
                  padding: '8px',
                  margin: '8px 0',
                  border: `1px solid ${newsletterStatus.type === 'success' ? '#00ff41' : '#ff4444'}`,
                  backgroundColor: newsletterStatus.type === 'success' ? 'rgba(0, 255, 65, 0.1)' : 'rgba(255, 68, 68, 0.1)',
                  color: newsletterStatus.type === 'success' ? '#00ff41' : '#ff4444',
                  fontSize: '12px',
                  fontFamily: 'JetBrains Mono, monospace',
                  borderRadius: '4px'
                }}>
                  {newsletterStatus.message}
                </div>
              )}
              <form onSubmit={handleNewsletterSubmit} className="newsletter-signup">
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="subscribe-btn">Suscribirse</button>
              </form>
            </div>
          </section>

          <section className="timeline-section-modern">
            <h2>Cronograma del Evento</h2>
            <div className="timeline-modern">
              <div className="timeline-item-modern">
                <span className="timeline-marker-modern"></span>
                <div>
                  <h4>Día 1 - Viernes</h4>
                  <p>Inauguración, presentación de desafíos, formación de equipos y inicio del desarrollo.</p>
                </div>
              </div>
              <div className="timeline-item-modern">
                <span className="timeline-marker-modern"></span>
                <div>
                  <h4>Día 2 - Sábado</h4>
                  <p>Desarrollo intensivo, mentoría, workshops y refinamiento de soluciones.</p>
                </div>
              </div>
              <div className="timeline-item-modern">
                <span className="timeline-marker-modern"></span>
                <div>
                  <h4>Día 3 - Domingo</h4>
                  <p>Presentaciones finales, evaluación por jueces, premiación y cierre.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="sponsors-section">
            <div className="sponsors-content">
              <h2>Con el apoyo de</h2>
              <div className="sponsors-grid">
                <a href="https://indigitous.org" target="_blank" rel="noopener noreferrer" className="sponsor-item">
                  <img src="./sponsors/indigitous.webp" alt="Indigitous" />
                </a>
                <div className="sponsor-item">
                  <img src="./sponsors/Atemporal-02.png" alt="Atemporal" />
                </div>
                <div className="sponsor-item">
                  <img src="./sponsors/LOGO IBA.png" alt="IBA" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hack2025Page;