import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Donate.css';

const Donate = () => {
  const { t } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('paypal');

  const suggestedAmounts = [
    { value: 10, label: t('donate.amounts.supporter') },
    { value: 25, label: t('donate.amounts.partner') },
    { value: 50, label: t('donate.amounts.sponsor') },
    { value: 'custom', label: t('donate.amounts.custom') }
  ];

  const donationMethods = [
    { id: 'paypal', name: t('donate.methods.paypal'), icon: '💳' },
    { id: 'stripe', name: t('donate.methods.stripe'), icon: '💎' },
    { id: 'bank', name: t('donate.methods.bank'), icon: '🏦' },
    { id: 'crypto', name: t('donate.methods.crypto'), icon: '₿' }
  ];

  const handleAmountChange = (amount) => {
    setSelectedAmount(amount);
    if (amount !== 'custom') {
      setCustomAmount('');
    }
  };

  const getFinalAmount = () => {
    return selectedAmount === 'custom' ? parseFloat(customAmount) || 0 : selectedAmount;
  };

  return (
    <section id="donate" className="donate">
      <div className="container">
        <div className="section-header">
          <div className="terminal-prompt">
            <span className="terminal-text">user@devotion:~$ </span>
            <span>./support --mission</span>
          </div>
          <h2>{t('donate.title')}</h2>
          <p className="section-subtitle">
            {t('donate.subtitle')}
          </p>
        </div>

        <div className="donate-content">
          <div className="donate-grid">
            <div className="why-donate">
              <div className="terminal-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control close"></span>
                    <span className="control minimize"></span>
                    <span className="control maximize"></span>
                  </div>
                  <span className="window-title">mission_impact.md</span>
                </div>
                <div className="window-content">
                  <h3 className="terminal-text">{t('donate.why.title')}</h3>
                  <div className="why-list">
                    <div className="why-item">
                      <div className="why-icon terminal-text">💻</div>
                      <div className="why-content">
                        <h4>{t('donate.why.development')}</h4>
                        <p>Permite crear más aplicaciones y sitios web gratuitos para organizaciones cristianas</p>
                      </div>
                    </div>
                    <div className="why-item">
                      <div className="why-icon terminal-text">🌐</div>
                      <div className="why-content">
                        <h4>{t('donate.why.hosting')}</h4>
                        <p>Mantiene nuestros servicios funcionando 24/7 para servir a la comunidad</p>
                      </div>
                    </div>
                    <div className="why-item">
                      <div className="why-icon terminal-text">🛠️</div>
                      <div className="why-content">
                        <h4>{t('donate.why.tools')}</h4>
                        <p>Financia las herramientas profesionales necesarias para desarrollo</p>
                      </div>
                    </div>
                    <div className="why-item">
                      <div className="why-icon terminal-text">🚀</div>
                      <div className="why-content">
                        <h4>{t('donate.why.growth')}</h4>
                        <p>Expande nuestro impacto para alcanzar más organizaciones</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="donation-form">
              <div className="terminal-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control close"></span>
                    <span className="control minimize"></span>
                    <span className="control maximize"></span>
                  </div>
                  <span className="window-title">donation_processor.js</span>
                </div>
                <div className="window-content">
                  <h3 className="terminal-text">{t('donate.amounts.title')}</h3>
                  
                  <div className="amount-selector">
                    {suggestedAmounts.map((amount) => (
                      <button
                        key={amount.value}
                        className={`amount-btn ${selectedAmount === amount.value ? 'selected' : ''}`}
                        onClick={() => handleAmountChange(amount.value)}
                      >
                        <div className="amount-value">
                          {amount.value === 'custom' ? '?' : `$${amount.value}`}
                        </div>
                        <div className="amount-label">{amount.label}</div>
                      </button>
                    ))}
                  </div>

                  {selectedAmount === 'custom' && (
                    <div className="custom-amount">
                      <label className="terminal-text">Cantidad personalizada:</label>
                      <div className="amount-input-container">
                        <span className="currency">$</span>
                        <input
                          type="number"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder="0"
                          min="1"
                          className="amount-input"
                        />
                      </div>
                    </div>
                  )}

                  <div className="payment-methods">
                    <h4 className="terminal-text">{t('donate.methods.title')}</h4>
                    <div className="methods-grid">
                      {donationMethods.map((method) => (
                        <button
                          key={method.id}
                          className={`method-btn ${selectedMethod === method.id ? 'selected' : ''}`}
                          onClick={() => setSelectedMethod(method.id)}
                        >
                          <span className="method-icon">{method.icon}</span>
                          <span className="method-name">{method.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="donation-summary">
                    <div className="terminal-output">
                      <div className="terminal-line">
                        <span className="terminal-text">donation@devotion:~$ </span>
                        <span>./process --amount ${getFinalAmount()} --method {selectedMethod}</span>
                      </div>
                      <div className="terminal-line output">
                        <span className="terminal-text">></span> Procesando donación de ${getFinalAmount()} via {selectedMethod}...
                      </div>
                    </div>
                    
                    <button className="donate-btn terminal-button primary" disabled={getFinalAmount() <= 0}>
                      {t('donate.button')} ${getFinalAmount()}
                    </button>

                    <div className="security-info">
                      <div className="security-item">
                        <span className="terminal-text">🔒</span> {t('donate.secure')}
                      </div>
                      <div className="security-item">
                        <span className="terminal-text">📄</span> {t('donate.tax')}
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

export default Donate;