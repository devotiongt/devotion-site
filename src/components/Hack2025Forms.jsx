import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitHack2025PreRegistration, submitHack2025VolunteerApplication } from '../lib/supabase';
import './Hack2025Forms.css';

const Hack2025Forms = () => {
  const { t } = useLanguage();
  const [activeForm, setActiveForm] = useState('preregister');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });
  
  const [preRegisterData, setPreRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    motivation: '',
    updates: true
  });

  const [volunteerData, setVolunteerData] = useState({
    name: '',
    email: '',
    phone: '',
    areas: '',
    availability: '',
    experience: '',
    motivation: ''
  });

  const handlePreRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPreRegisterData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleVolunteerChange = (e) => {
    const { name, value } = e.target;
    setVolunteerData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePreRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const result = await submitHack2025PreRegistration(preRegisterData);
    
    if (result.success) {
      setSubmitStatus({
        type: 'success',
        message: '¡Pre-registro enviado exitosamente! Pronto recibirás actualizaciones sobre el evento.'
      });
      
      setPreRegisterData({
        name: '',
        email: '',
        phone: '',
        role: '',
        experience: '',
        motivation: '',
        updates: true
      });
    } else {
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error al enviar tu pre-registro. Por favor, inténtalo de nuevo.'
      });
    }
    
    setIsSubmitting(false);
  };

  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const result = await submitHack2025VolunteerApplication(volunteerData);
    
    if (result.success) {
      setSubmitStatus({
        type: 'success',
        message: '¡Aplicación de voluntario enviada exitosamente! Te contactaremos pronto con más información.'
      });
      
      setVolunteerData({
        name: '',
        email: '',
        phone: '',
        areas: '',
        availability: '',
        experience: '',
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
    <div className="hack2025-forms">
      <div className="container">
        <div className="forms-header">
          <div className="terminal-window">
            <div className="window-header">
              <div className="window-controls">
                <span className="control close"></span>
                <span className="control minimize"></span>
                <span className="control maximize"></span>
              </div>
              <span className="window-title">hack2025_registration.exe</span>
            </div>
            <div className="window-content">
              <div className="form-selector">
                <button 
                  className={`selector-btn ${activeForm === 'preregister' ? 'active' : ''}`}
                  onClick={() => setActiveForm('preregister')}
                >
                  <span className="selector-icon">📝</span>
                  <span>{t('hack2025.cta.preregister.title')}</span>
                </button>
                <button 
                  className={`selector-btn ${activeForm === 'volunteer' ? 'active' : ''}`}
                  onClick={() => setActiveForm('volunteer')}
                >
                  <span className="selector-icon">🙋‍♂️</span>
                  <span>{t('hack2025.cta.volunteer.title')}</span>
                </button>
              </div>
              
              {/* Status Message */}
              {submitStatus.message && (
                <div className={`status-message ${submitStatus.type}`}>
                  <span className="status-icon">
                    {submitStatus.type === 'success' ? '✅' : '❌'}
                  </span>
                  <span>{submitStatus.message}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="forms-content">
          {activeForm === 'preregister' && (
            <div className="form-section">
              <div className="terminal-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control close"></span>
                    <span className="control minimize"></span>
                    <span className="control maximize"></span>
                  </div>
                  <span className="window-title">pre_register.json</span>
                </div>
                <div className="window-content">
                  <div className="form-header">
                    <h2>{t('hack2025.form.preregister.title')}</h2>
                    <p>Completa este formulario para recibir actualizaciones sobre el evento</p>
                  </div>

                  <form onSubmit={handlePreRegisterSubmit} className="hack-form">
                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="name">{t('hack2025.form.preregister.name')}</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={preRegisterData.name}
                          onChange={handlePreRegisterChange}
                          required
                          className="form-input"
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="email">{t('hack2025.form.preregister.email')}</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={preRegisterData.email}
                          onChange={handlePreRegisterChange}
                          required
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="phone">{t('hack2025.form.preregister.phone')}</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={preRegisterData.phone}
                          onChange={handlePreRegisterChange}
                          className="form-input"
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="role">{t('hack2025.form.preregister.role')}</label>
                        <select
                          id="role"
                          name="role"
                          value={preRegisterData.role}
                          onChange={handlePreRegisterChange}
                          required
                          className="form-input"
                        >
                          <option value="">Selecciona tu rol</option>
                          <option value="developer">{t('hack2025.form.roles.developer')}</option>
                          <option value="designer">{t('hack2025.form.roles.designer')}</option>
                          <option value="entrepreneur">{t('hack2025.form.roles.entrepreneur')}</option>
                          <option value="missionary">{t('hack2025.form.roles.missionary')}</option>
                          <option value="creative">{t('hack2025.form.roles.creative')}</option>
                          <option value="student">{t('hack2025.form.roles.student')}</option>
                          <option value="other">{t('hack2025.form.roles.other')}</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="experience">{t('hack2025.form.preregister.experience')}</label>
                      <select
                        id="experience"
                        name="experience"
                        value={preRegisterData.experience}
                        onChange={handlePreRegisterChange}
                        required
                        className="form-input"
                      >
                        <option value="">Selecciona tu nivel</option>
                        <option value="beginner">{t('hack2025.form.experience_levels.beginner')}</option>
                        <option value="intermediate">{t('hack2025.form.experience_levels.intermediate')}</option>
                        <option value="advanced">{t('hack2025.form.experience_levels.advanced')}</option>
                        <option value="expert">{t('hack2025.form.experience_levels.expert')}</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="motivation">{t('hack2025.form.preregister.motivation')}</label>
                      <textarea
                        id="motivation"
                        name="motivation"
                        value={preRegisterData.motivation}
                        onChange={handlePreRegisterChange}
                        required
                        rows="4"
                        className="form-input"
                        placeholder="Comparte tu motivación para participar en #HACK2025..."
                      />
                    </div>

                    <div className="form-field checkbox-field">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="updates"
                          checked={preRegisterData.updates}
                          onChange={handlePreRegisterChange}
                          className="form-checkbox"
                        />
                        <span className="checkmark"></span>
                        {t('hack2025.form.preregister.updates')}
                      </label>
                    </div>

                    <button type="submit" className="form-submit" disabled={isSubmitting}>
                      <span className="submit-icon">{isSubmitting ? '⏳' : '📝'}</span>
                      {isSubmitting ? 'Enviando...' : t('hack2025.form.preregister.button')}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {activeForm === 'volunteer' && (
            <div className="form-section">
              <div className="terminal-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control close"></span>
                    <span className="control minimize"></span>
                    <span className="control maximize"></span>
                  </div>
                  <span className="window-title">volunteer_application.json</span>
                </div>
                <div className="window-content">
                  <div className="form-header">
                    <h2>{t('hack2025.form.volunteer.title')}</h2>
                    <p>Únete al equipo organizador de #HACK2025 Guatemala</p>
                  </div>

                  <form onSubmit={handleVolunteerSubmit} className="hack-form">
                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="v-name">{t('hack2025.form.volunteer.name')}</label>
                        <input
                          type="text"
                          id="v-name"
                          name="name"
                          value={volunteerData.name}
                          onChange={handleVolunteerChange}
                          required
                          className="form-input"
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="v-email">{t('hack2025.form.volunteer.email')}</label>
                        <input
                          type="email"
                          id="v-email"
                          name="email"
                          value={volunteerData.email}
                          onChange={handleVolunteerChange}
                          required
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="v-phone">{t('hack2025.form.volunteer.phone')}</label>
                      <input
                        type="tel"
                        id="v-phone"
                        name="phone"
                        value={volunteerData.phone}
                        onChange={handleVolunteerChange}
                        required
                        className="form-input"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="areas">{t('hack2025.form.volunteer.areas')}</label>
                      <textarea
                        id="areas"
                        name="areas"
                        value={volunteerData.areas}
                        onChange={handleVolunteerChange}
                        required
                        rows="3"
                        className="form-input"
                        placeholder="Ej: Logística, marketing, tecnología, registro de participantes..."
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="availability">{t('hack2025.form.volunteer.availability')}</label>
                      <textarea
                        id="availability"
                        name="availability"
                        value={volunteerData.availability}
                        onChange={handleVolunteerChange}
                        required
                        rows="3"
                        className="form-input"
                        placeholder="Describe tu disponibilidad de tiempo para ayudar..."
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="v-experience">{t('hack2025.form.volunteer.experience')}</label>
                      <textarea
                        id="v-experience"
                        name="experience"
                        value={volunteerData.experience}
                        onChange={handleVolunteerChange}
                        rows="3"
                        className="form-input"
                        placeholder="Cuéntanos sobre tu experiencia organizando eventos..."
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="v-motivation">{t('hack2025.form.volunteer.motivation')}</label>
                      <textarea
                        id="v-motivation"
                        name="motivation"
                        value={volunteerData.motivation}
                        onChange={handleVolunteerChange}
                        required
                        rows="4"
                        className="form-input"
                        placeholder="¿Por qué quieres ser voluntario en #HACK2025?"
                      />
                    </div>

                    <button type="submit" className="form-submit" disabled={isSubmitting}>
                      <span className="submit-icon">{isSubmitting ? '⏳' : '🙋‍♂️'}</span>
                      {isSubmitting ? 'Enviando...' : t('hack2025.form.volunteer.button')}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hack2025Forms;