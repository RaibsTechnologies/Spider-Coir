import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Cultivating Tomorrow's Harvest Today</h1>
        <p>Leading the way in sustainable agriculture with premium organic fertilizers and eco-friendly solutions that nurture both crops and the environment.</p>
        <button className="cta-button">Our Products</button>
      </div>
    </section>
  );
};

export default Hero;