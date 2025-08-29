import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitVolunteerApplication } from '../lib/supabase';
import './VolunteersPage.css';

const VolunteersPage = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
    experience: '',
    availability: '',
    motivation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const result = await submitVolunteerApplication(formData);
    
    if (result.success) {
      setSubmitStatus({
        type: 'success',
        message: '¡Aplicación enviada exitosamente! Te contactaremos pronto para conocer más sobre tu interés en ser voluntario.'
      });
      setFormData({
        name: '',
        email: '',
        skills: '',
        experience: '',
        availability: '',
        motivation: ''
      });
    } else {
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error al enviar tu aplicación. Por favor, inténtalo de nuevo.'
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="volunteers-page">
      <div className="container">
        <div className="page-header">
          <div className="terminal-prompt">
            <span className="terminal-text">user@devotion:~$ </span>
            <span>cd volunteers && ./join_community</span>
          </div>
          <h1>{t('volunteers.title')}</h1>
          <p className="page-subtitle">
            {t('volunteers.subtitle')}
          </p>
        </div>

        <div className="page-content">
          <div className="volunteers-info">
            <div className="terminal-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control close"></span>
                  <span className="control minimize"></span>
                  <span className="control maximize"></span>
                </div>
                <span className="window-title">volunteer_benefits.md</span>
              </div>
              <div className="window-content">
                <h3 className="terminal-text">{t('volunteers.benefits.title')}</h3>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                      </svg>
                    </div>
                    <div className="benefit-content">
                      <h4>{t('volunteers.benefits.purpose')}</h4>
                      <p>Cada línea de código que escribes tiene propósito eterno y contribuye al Reino de Dios</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="m22 21-3-3 1.5-1.5a2.121 2.121 0 0 0 0-3L16.5 9.5"/>
                      </svg>
                    </div>
                    <div className="benefit-content">
                      <h4>{t('volunteers.benefits.community')}</h4>
                      <p>Únete a una comunidad de desarrolladores que comparten tu fe y valores</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="22,6 13.5,14.5 8.5,9.5 2,16"/>
                        <polyline points="16,6 22,6 22,12"/>
                      </svg>
                    </div>
                    <div className="benefit-content">
                      <h4>{t('volunteers.benefits.growth')}</h4>
                      <p>Desarrolla tanto tus habilidades técnicas como tu crecimiento espiritual</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="m4.93 4.93 4.24 4.24"/>
                        <path d="m14.83 9.17 4.24-4.24"/>
                        <path d="m14.83 14.83 4.24 4.24"/>
                        <path d="m9.17 14.83-4.24 4.24"/>
                      </svg>
                    </div>
                    <div className="benefit-content">
                      <h4>{t('volunteers.benefits.impact')}</h4>
                      <p>Ve tu trabajo transformar organizaciones y amplificar el impacto del evangelio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="available-roles">
            <h3 className="terminal-text">{t('volunteers.roles.title')}</h3>
            <div className="roles-grid">
              <div className="role-card">
                <div className="role-header">
                  <div className="role-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                      <path d="m15 14 5-5-5-5"/>
                    </svg>
                  </div>
                  <h4>{t('volunteers.roles.developer.title')}</h4>
                </div>
                <p>{t('volunteers.roles.developer.desc')}</p>
                <ul>
                  <li>React, Vue, Angular</li>
                  <li>Node.js, Python, Java</li>
                  <li>React Native, Flutter</li>
                  <li>APIs y Bases de datos</li>
                </ul>
              </div>
              <div className="role-card">
                <div className="role-header">
                  <div className="role-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.64 16.2a2 2 0 0 1-2.83-2.83l8.49-8.49"/>
                    </svg>
                  </div>
                  <h4>{t('volunteers.roles.designer.title')}</h4>
                </div>
                <p>{t('volunteers.roles.designer.desc')}</p>
                <ul>
                  <li>UI/UX Design</li>
                  <li>Diseño gráfico</li>
                  <li>Branding y identidad</li>
                  <li>Figma, Adobe Creative Suite</li>
                </ul>
              </div>
              <div className="role-card">
                <div className="role-header">
                  <div className="role-icon">📋</div>
                  <h4>{t('volunteers.roles.pm.title')}</h4>
                </div>
                <p>{t('volunteers.roles.pm.desc')}</p>
                <ul>
                  <li>Gestión de proyectos</li>
                  <li>Coordinación de equipos</li>
                  <li>Metodologías ágiles</li>
                  <li>Comunicación con clientes</li>
                </ul>
              </div>
              <div className="role-card">
                <div className="role-header">
                  <div className="role-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                      <path d="m15 5 4 4"/>
                    </svg>
                  </div>
                  <h4>{t('volunteers.roles.content.title')}</h4>
                </div>
                <p>{t('volunteers.roles.content.desc')}</p>
                <ul>
                  <li>Documentación técnica</li>
                  <li>Copywriting</li>
                  <li>Marketing digital</li>
                  <li>Creación de contenido</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="volunteer-form-section">
            <div className="terminal-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control close"></span>
                  <span className="control minimize"></span>
                  <span className="control maximize"></span>
                </div>
                <span className="window-title">volunteer_application.js</span>
              </div>
              <div className="window-content">
                <h3 className="terminal-text">{t('contact.volunteer.title')}</h3>
                <p className="form-subtitle">{t('contact.volunteer.subtitle')}</p>
                
                {submitStatus.message && (
                  <div className={`status-message ${submitStatus.type}`} style={{
                    padding: '10px',
                    margin: '10px 0',
                    border: `1px solid ${submitStatus.type === 'success' ? '#00ff41' : '#ff4444'}`,
                    backgroundColor: submitStatus.type === 'success' ? 'rgba(0, 255, 65, 0.1)' : 'rgba(255, 68, 68, 0.1)',
                    color: submitStatus.type === 'success' ? '#00ff41' : '#ff4444',
                    fontSize: '14px',
                    fontFamily: 'JetBrains Mono, monospace'
                  }}>
                    <span style={{ marginRight: '8px' }}>
                      {submitStatus.type === 'success' ? '✅' : '❌'}
                    </span>
                    {submitStatus.message}
                  </div>
                )}
                
                <form className="volunteer-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>{t('contact.volunteer.form.name')}</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.volunteer.form.name')}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>{t('contact.volunteer.form.email')}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.volunteer.form.email')}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>{t('contact.volunteer.form.skills')}</label>
                    <input 
                      type="text" 
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      placeholder={t('contact.volunteer.form.skills')}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>{t('contact.volunteer.form.experience')}</label>
                    <select 
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona tu nivel</option>
                      <option value="beginner">Principiante (0-2 años)</option>
                      <option value="intermediate">Intermedio (2-5 años)</option>
                      <option value="advanced">Avanzado (5+ años)</option>
                      <option value="expert">Experto/Senior (10+ años)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>{t('contact.volunteer.form.availability')}</label>
                    <select 
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Horas por semana</option>
                      <option value="1-5">1-5 horas</option>
                      <option value="5-10">5-10 horas</option>
                      <option value="10-20">10-20 horas</option>
                      <option value="20+">20+ horas</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>{t('contact.volunteer.form.motivation')}</label>
                    <textarea 
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      rows="5" 
                      placeholder={t('contact.volunteer.form.motivation')}
                      required
                    />
                  </div>
                  
                  <div className="terminal-output">
                    <div className="terminal-line">
                      <span className="terminal-text">volunteer@devotion:~$ </span>
                      <span>./submit_application --execute</span>
                    </div>
                  </div>
                  
                  <button type="submit" className="terminal-button primary" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>⏳ Enviando...</>
                    ) : (
                      t('contact.volunteer.form.button')
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteersPage;