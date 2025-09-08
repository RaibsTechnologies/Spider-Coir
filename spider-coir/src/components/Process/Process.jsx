import React from 'react';
import './Process.css';

const Process = () => {
  return (
    <section id="process" className="process">
      <h2>Our Process</h2>
      <div className="process-steps">
        <div className="step">
          <div className="step-number">1</div>
          <h3>Harvesting</h3>
          <p>Coconuts are harvested and husks are separated.</p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3>Retting</h3>
          <p>Husks are soaked to loosen the fibers.</p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3>Extraction</h3>
          <p>Fibers are extracted from the husks.</p>
        </div>
        <div className="step">
          <div className="step-number">4</div>
          <h3>Processing</h3>
          <p>Fibers are dried, cleaned, and processed into various products.</p>
        </div>
      </div>
    </section>
  );
};

export default Process;