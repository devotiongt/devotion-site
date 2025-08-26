import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitOrganizationRequest } from '../lib/supabase';
import './OrganizationsPage.css';

const OrganizationsPage = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    organizationType: '',
    website: '',
    needs: '',
    timeline: '',
    budget: ''
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

    const result = await submitOrganizationRequest(formData);
    
    if (result.success) {
      setSubmitStatus({
        type: 'success',
        message: '¡Solicitud de partnership enviada exitosamente! Te contactaremos pronto para discutir cómo podemos ayudar a tu organización.'
      });
      setFormData({
        organizationName: '',
        contactName: '',
        email: '',
        organizationType: '',
        website: '',
        needs: '',
        timeline: '',
        budget: ''
      });
    } else {
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.'
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="organizations-page">
      <div className="container">
        <div className="page-header">
          <div className="terminal-prompt">
            <span className="terminal-text">organization@ministry:~$ </span>
            <span>./request_partnership --start</span>
          </div>
          <h1>{t('organizations.title')}</h1>
          <p className="page-subtitle">
            {t('organizations.subtitle')}
          </p>
        </div>

        <div className="page-content">
          <div className="services-detailed">
            <div className="terminal-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control close"></span>
                  <span className="control minimize"></span>
                  <span className="control maximize"></span>
                </div>
                <span className="window-title">services_catalog.json</span>
              </div>
              <div className="window-content">
                <h3 className="terminal-text">{t('organizations.services.title')}</h3>
                <div className="services-grid">
                  <div className="service-card">
                    <div className="service-header">
                      <div className="service-icon">🌐</div>
                      <h4>{t('organizations.services.web.title')}</h4>
                    </div>
                    <p>{t('organizations.services.web.desc')}</p>
                    <ul>
                      <li>Sitios web responsivos</li>
                      <li>Sistemas de donaciones</li>
                      <li>Plataformas de eventos</li>
                      <li>Portales de miembros</li>
                    </ul>
                  </div>
                  <div className="service-card">
                    <div className="service-header">
                      <div className="service-icon">📱</div>
                      <h4>{t('organizations.services.mobile.title')}</h4>
                    </div>
                    <p>{t('organizations.services.mobile.desc')}</p>
                    <ul>
                      <li>Apps para congregaciones</li>
                      <li>Notificaciones push</li>
                      <li>Contenido offline</li>
                      <li>Streaming integrado</li>
                    </ul>
                  </div>
                  <div className="service-card">
                    <div className="service-header">
                      <div className="service-icon">⚙️</div>
                      <h4>{t('organizations.services.systems.title')}</h4>
                    </div>
                    <p>{t('organizations.services.systems.desc')}</p>
                    <ul>
                      <li>CRM ministerial</li>
                      <li>Gestión de voluntarios</li>
                      <li>Sistemas de seguimiento</li>
                      <li>Reportes automáticos</li>
                    </ul>
                  </div>
                  <div className="service-card">
                    <div className="service-header">
                      <div className="service-icon">📊</div>
                      <h4>{t('organizations.services.consulting.title')}</h4>
                    </div>
                    <p>{t('organizations.services.consulting.desc')}</p>
                    <ul>
                      <li>Arquitectura de sistemas</li>
                      <li>Migración a la nube</li>
                      <li>Seguridad y privacidad</li>
                      <li>Optimización de procesos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="partnership-details">
            <h3 className="terminal-text">{t('organizations.partnership.title')}</h3>
            <div className="partnership-grid">
              <div className="partnership-card">
                <div className="partnership-icon">💝</div>
                <h4>{t('organizations.partnership.free')}</h4>
                <p>No cobramos por desarrollo. Creemos que la tecnología debe estar al alcance de todas las organizaciones que sirven al Reino de Dios.</p>
              </div>
              <div className="partnership-card">
                <div className="partnership-icon">🤝</div>
                <h4>{t('organizations.partnership.support')}</h4>
                <p>Soporte técnico continuo, actualizaciones y mantenimiento incluido para que tu organización siempre esté funcionando óptimamente.</p>
              </div>
              <div className="partnership-card">
                <div className="partnership-icon">🔧</div>
                <h4>{t('organizations.partnership.maintenance')}</h4>
                <p>Mantenimiento preventivo, actualizaciones de seguridad y mejoras continuas sin costos adicionales.</p>
              </div>
              <div className="partnership-card">
                <div className="partnership-icon">📚</div>
                <h4>{t('organizations.partnership.training')}</h4>
                <p>Capacitación completa para tu equipo en el uso de las herramientas y sistemas que desarrollemos.</p>
              </div>
            </div>
          </div>

          <div className="target-organizations">
            <h3 className="terminal-text">{t('organizations.target.title')}</h3>
            <div className="target-grid">
              <div className="target-card">
                <div className="target-icon">⛪</div>
                <h4>{t('organizations.target.churches.title')}</h4>
                <p>{t('organizations.target.churches.desc')}</p>
                <div className="examples">
                  <span>Ejemplos:</span>
                  <ul>
                    <li>Sistema de registro de miembros</li>
                    <li>Plataforma de streaming para servicios</li>
                    <li>App para la congregación</li>
                  </ul>
                </div>
              </div>
              <div className="target-card">
                <div className="target-icon">🤝</div>
                <h4>{t('organizations.target.ngos.title')}</h4>
                <p>{t('organizations.target.ngos.desc')}</p>
                <div className="examples">
                  <span>Ejemplos:</span>
                  <ul>
                    <li>Plataforma de recaudación de fondos</li>
                    <li>Sistema de gestión de beneficiarios</li>
                    <li>Portal de transparencia</li>
                  </ul>
                </div>
              </div>
              <div className="target-card">
                <div className="target-icon">📖</div>
                <h4>{t('organizations.target.ministries.title')}</h4>
                <p>{t('organizations.target.ministries.desc')}</p>
                <div className="examples">
                  <span>Ejemplos:</span>
                  <ul>
                    <li>Plataforma de cursos bíblicos</li>
                    <li>Sistema de discipulado</li>
                    <li>Comunidad online para ministerio</li>
                  </ul>
                </div>
              </div>
              <div className="target-card">
                <div className="target-icon">🌍</div>
                <h4>{t('organizations.target.missions.title')}</h4>
                <p>{t('organizations.target.missions.desc')}</p>
                <div className="examples">
                  <span>Ejemplos:</span>
                  <ul>
                    <li>Apps multiidioma para el campo</li>
                    <li>Sistema de comunicación con soporte</li>
                    <li>Herramientas de traducción bíblica</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="organization-form-section">
            <div className="terminal-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control close"></span>
                  <span className="control minimize"></span>
                  <span className="control maximize"></span>
                </div>
                <span className="window-title">partnership_request.js</span>
              </div>
              <div className="window-content">
                <h3 className="terminal-text">{t('contact.organization.title')}</h3>
                <p className="form-subtitle">{t('contact.organization.subtitle')}</p>
                
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
                
                <form className="organization-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>{t('contact.organization.form.organizationName')}</label>
                      <input 
                        type="text" 
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleChange}
                        placeholder={t('contact.organization.form.organizationName')}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>{t('contact.organization.form.contactName')}</label>
                      <input 
                        type="text" 
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        placeholder={t('contact.organization.form.contactName')}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>{t('contact.organization.form.email')}</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.organization.form.email')}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>{t('contact.organization.form.organizationType')}</label>
                      <select 
                        name="organizationType"
                        value={formData.organizationType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecciona el tipo</option>
                        <option value="church">Iglesia</option>
                        <option value="ngo">ONG</option>
                        <option value="ministry">Ministerio</option>
                        <option value="mission">Misión</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>{t('contact.organization.form.website')}</label>
                    <input 
                      type="url" 
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder={t('contact.organization.form.website')}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>{t('contact.organization.form.needs')}</label>
                    <textarea 
                      name="needs"
                      value={formData.needs}
                      onChange={handleChange}
                      rows="5" 
                      placeholder={t('contact.organization.form.needs')}
                      required
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>{t('contact.organization.form.timeline')}</label>
                      <select 
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Tiempo estimado</option>
                        <option value="urgent">Urgente (1-3 meses)</option>
                        <option value="normal">Normal (3-6 meses)</option>
                        <option value="flexible">Flexible (6+ meses)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>{t('contact.organization.form.budget')}</label>
                      <select 
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="">Presupuesto (opcional)</option>
                        <option value="none">Sin presupuesto</option>
                        <option value="small">Pequeño (donación simbólica)</option>
                        <option value="medium">Mediano (gastos de hosting/herramientas)</option>
                        <option value="large">Amplio (puede cubrir algunos recursos)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="terminal-output">
                    <div className="terminal-line">
                      <span className="terminal-text">organization@ministry:~$ </span>
                      <span>./submit_partnership_request --execute</span>
                    </div>
                  </div>
                  
                  <button type="submit" className="terminal-button primary" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>⏳ Enviando...</>
                    ) : (
                      t('contact.organization.form.button')
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

export default OrganizationsPage;