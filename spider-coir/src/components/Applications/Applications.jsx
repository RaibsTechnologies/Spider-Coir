import React from 'react';
import './Applications.css';

const Applications = () => {
  return (
    <section id="applications" className="applications">
      <h2>Applications of Coir</h2>
      <div className="application-list">
        <div className="application-item">
          <h3>Horticulture</h3>
          <p>Used as a growing medium in hydroponics and potting mixes.</p>
        </div>
        <div className="application-item">
          <h3>Geotextiles</h3>
          <p>Coir is used for erosion control and soil stabilization.</p>
        </div>
        <div className="application-item">
          <h3>Upholstery</h3>
          <p>Used as filling for mattresses, car seats, and furniture.</p>
        </div>
        <div className="application-item">
          <h3>Insulation</h3>
          <p>Provides natural and effective insulation for buildings.</p>
        </div>
      </div>
    </section>
  );
};

export default Applications;