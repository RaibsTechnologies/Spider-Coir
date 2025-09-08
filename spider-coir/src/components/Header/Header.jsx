import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">G</div>
      <nav className={`header-nav ${isOpen ? 'active' : ''}`}>
        <ul className="header-nav-list">
          <li className="header-nav-item"><a href="#why-choose-us">Why Choose Us</a></li>
          <li className="header-nav-item"><a href="#products">Products</a></li>
          <li className="header-nav-item"><a href="#applications">Applications</a></li>
          <li className="header-nav-item"><a href="#trust">Trust</a></li>
          <li className="header-nav-item"><a href="#process">Our Process</a></li>
          <li className="header-nav-item"><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
};

export default Header;