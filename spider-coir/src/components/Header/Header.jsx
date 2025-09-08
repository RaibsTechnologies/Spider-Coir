import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => (document.body.style.overflow = '');
  }, [isOpen]);

  // 🔥 Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setShrink(true);
      else setShrink(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((o) => !o);

  return (
   <header className={`header-wrap ${shrink ? 'shrink' : ''}`}>
  <div className={`header ${shrink ? 'shrink' : ''}`}>
        <div className="logo">G</div>

        <nav className={`header-nav ${isOpen ? 'active' : ''}`}>
          <ul className="header-nav-list">
            <li><a href="#why-choose-us">Why Choose Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#applications">Applications</a></li>
            <li><a href="#trust">Trust</a></li>
            <li><a href="#process">Our Process</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>

        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-panel ${isOpen ? 'show' : ''}`}
        onClick={() => setIsOpen(false)}
      >
        <ul className="mobile-list" onClick={(e) => e.stopPropagation()}>
          <li><a href="#why-choose-us">Why Choose Us</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#applications">Applications</a></li>
          <li><a href="#trust">Trust</a></li>
          <li><a href="#process">Our Process</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
