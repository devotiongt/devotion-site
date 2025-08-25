import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <button 
        className={`lang-btn ${language === 'es' ? 'active' : ''}`}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>
      <span className="lang-separator terminal-text">|</span>
      <button 
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;