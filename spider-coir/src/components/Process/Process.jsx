import React from 'react';
import './Process.css';

// Data array for the timeline steps
const processData = [
  {
    id: 1,
    title: 'Raw Material Sourcing',
    description: 'We carefully select premium organic materials from certified suppliers, ensuring purity and sustainability from the very beginning.',
    icon: (
      <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="24" 
  height="24" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  stroke-width="2" 
  stroke-linecap="round" 
  stroke-linejoin="round"
>
  <path d="M3 20h18" />
  <path d="M6 20c0-2.5 1.5-4.5 4-5.5s4-1.5 6 0c2.5 1 4 3 4 5.5" />
  <circle cx="12" cy="8" r="1" />
  <circle cx="15" cy="6" r="1" />
  <circle cx="9" cy="10" r="0.5" />
</svg>
    ),
  },
  {
    id: 2,
    title: 'Scientific Formulation',
    description: 'Our team of agricultural scientists develops precise formulations using advanced research and field testing methodologies.',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M10 2v7.31" />
        <path d="M14 9.3V1.99" />
        <path d="M8.5 2h7" />
        <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
        <path d="M5.99 14.87A6.5 6.5 0 0 0 14 21.5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Quality Manufacturing',
    description: 'State-of-the-art production facilities maintain strict quality control standards throughout the manufacturing process.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Rigorous Testing',
    description: 'Every batch undergoes comprehensive testing for purity, potency, and safety before receiving final approval for distribution.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Sustainable Packaging',
    description: 'Environmentally responsible packaging solutions that protect product integrity while minimizing environmental impact.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <path d="M12 9v12"/>
        <path d="M8 3v6"/>
        <path d="M16 3v6"/>
        <path d="M7 15h4"/>
        <path d="M13 15h4"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Expert Support',
    description: 'Ongoing technical support and agronomic guidance to help customers achieve optimal results with our products.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
            <rect x="3" y="4" width="18" height="18" rx="2"></rect>
            <circle cx="12" cy="10" r="2"></circle>
            <line x1="8" y1="2" x2="8" y2="4"></line>
            <line x1="16" y1="2" x2="16" y2="4"></line>
        </svg>
    ),
  },
];


const Process = () => {
  return (
    <section className="process" aria-labelledby="process-heading">
      <div className="process__header">
        <p id="process-heading">Our Quality Process</p>
        <h2>
          From sourcing raw materials to delivering finished products, every step in our process is designed to ensure the highest quality and environmental standards.
        </h2>
      </div>
      <div className="timeline" aria-label="Quality process timeline">
        <div className="timeline__spine"></div>
        <ol className="timeline__steps">
          {processData.map((step, index) => (
            <li key={step.id} className={`step ${index % 2 === 0 ? 'step--left' : 'step--right'}`}>
              <div className="step__node" aria-hidden="true">
                {step.icon}
                <div className="step__num">{step.id}</div>
              </div>
              <div className="step__card">
                <h3 className="step__title">{step.title}</h3>
                <p className="step__body">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;