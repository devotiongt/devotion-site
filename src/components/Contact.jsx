import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitContactForm } from '../lib/supabase';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const result = await submitContactForm(formData);
    
    if (result.success) {
      setSubmitStatus({
        type: 'success',
        message: t('contact.form.successMessage') || 'Message sent successfully! We will contact you soon.'
      });
      setFormData({ name: '', email: '', organization: '', message: '' });
    } else {
      setSubmitStatus({
        type: 'error',
        message: t('contact.form.errorMessage') || 'There was an error sending your message. Please try again.'
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <div className="terminal-prompt">
            <span className="terminal-text">user@devotion:~$ </span>
            <span>./connect --ministry</span>
          </div>
          <h2>{t('contact.title')}</h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="terminal-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control close"></span>
                    <span className="control minimize"></span>
                    <span className="control maximize"></span>
                  </div>
                  <span className="window-title">contact_info.json</span>
                </div>
                <div className="window-content">
                  <div className="contact-details">
                    <div className="contact-item">
                      <div className="contact-label terminal-text">email:</div>
                      <div className="contact-value">"{t('contact.info.email')}"</div>
                    </div>
                    <div className="contact-item">
                      <div className="contact-label terminal-text">response_time:</div>
                      <div className="contact-value">"{t('contact.info.responseTime')}"</div>
                    </div>
                    <div className="contact-item">
                      <div className="contact-label terminal-text">availability:</div>
                      <div className="contact-value">"{t('contact.info.availability')}"</div>
                    </div>
                    <div className="contact-item">
                      <div className="contact-label terminal-text">languages:</div>
                      <div className="contact-value">{t('contact.info.languages')}</div>
                    </div>
                  </div>
                  
                  <div className="social-links">
                    <h4 className="terminal-text">{t('contact.social')}</h4>
                    <div className="social-grid">
                      <a href="#" className="social-link">
                        <span className="terminal-text">></span> Discord
                      </a>
                      <a href="#" className="social-link">
                        <span className="terminal-text">></span> WhatsApp
                      </a>
                      <a href="#" className="social-link">
                        <span className="terminal-text">></span> Facebook
                      </a>
                      <a href="#" className="social-link">
                        <span className="terminal-text">></span> Instagram
                      </a>
                      <a href="#" className="social-link">
                        <span className="terminal-text">></span> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="terminal-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control close"></span>
                    <span className="control minimize"></span>
                    <span className="control maximize"></span>
                  </div>
                  <span className="window-title">contact_form.php</span>
                </div>
                <div className="window-content">
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
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">
                        <span className="terminal-text">$name = </span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('contact.form.name')}
                        required
                        className="terminal-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">
                        <span className="terminal-text">$email = </span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.form.email')}
                        required
                        className="terminal-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="organization">
                        <span className="terminal-text">$organization = </span>
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder={t('contact.form.organization')}
                        className="terminal-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">
                        <span className="terminal-text">$message = </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('contact.form.message')}
                        rows="6"
                        required
                        className="terminal-input"
                      ></textarea>
                    </div>

                    <button type="submit" className="terminal-button primary" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>⏳ Sending...</>
                      ) : (
                        t('contact.form.button')
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;