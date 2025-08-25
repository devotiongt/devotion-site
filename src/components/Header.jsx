import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector/LanguageSelector';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first, then scroll
      window.location.href = `/devotion-site/#${sectionId}`;
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <img src="./logo.png" alt="Devotion" className="logo-image" />
            <span className="logo-text">
              <span className="dev-green">dev</span><span className="otion-white">otion</span>
              <span className="blinking-cursor"></span>
            </span>
          </Link>
          
          <div className={`nav-container ${isMenuOpen ? 'nav-open' : ''}`}>
            <nav className="nav">
              <button onClick={() => scrollToSection('home')} className="nav-link">{t('nav.home')}</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">{t('nav.about')}</button>
              <Link to="/volunteers" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('nav.volunteers')}</Link>
              <Link to="/organizations" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('nav.organizations')}</Link>
              <Link to="/hack2025" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('nav.hack2025')}</Link>
              {/* <button onClick={() => scrollToSection('donate')} className="nav-link nav-link-donate">{t('nav.donate')}</button> */}
              <button onClick={() => scrollToSection('contact')} className="nav-link">{t('nav.contact')}</button>
            </nav>
            
            <LanguageSelector />
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;