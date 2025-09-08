import React, { useEffect, useRef, useState } from 'react';
import './WhyChooseUs.css';

const cardData = [
  {
    icon: (
      // Mission icon
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
    ),
    title: "Our Mission",
    description: "Sustainable agriculture that feeds the world while protecting our planet",
  },
  {
    icon: (
      // Quality icon
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
    ),
    title: "Quality Assured",
    description: "OMRI listed and certified organic products for your peace of mind",
  },
  {
    icon: (
      // Support icon
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
    ),
    title: "Expert Support",
    description: "Dedicated agronomists ready to help optimize your growing success",
  },
];

const featureData = [
  {
    icon: (
      // Checkmark icon
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
    ),
    text: "100% Organic & Natural Products",
  },
  {
    icon: (
      // Bullseye icon
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
    ),
    text: "Scientifically Proven Formulations",
  },
  {
    icon: (
      // People/eco icon
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
    ),
    text: "Environmentally Sustainable Practices",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-choose-us"
      className={`why-choose-us ${isVisible ? 'visible' : 'hidden'}`}
      ref={sectionRef}
    >
      <h2 className="wcu-header">
  Why Choose <span className="highlight-text">Spider-Coir</span>
</h2>

      <div className="wcu-layout">
        <div className="wcu-left">
          <div className="wcu-left-inner">
            <p>
              As one of the most trusted and leading compost suppliers in Seri Menanti, we are dedicated to providing and exporting high-quality, eco-friendly coir pith and cooer feel products that serve a variety of purposes. With a rich history rooted in a passion for coco peat, we specialize in supplying a wide range of coconut husk products, including coco peat briquettes, coir pots, coco tubes, coco chips, coco blocks, and grow bags. We supply big blocks, 500g, 5 block briquettes, and Cocopeat grow bags. All our peat is dried and processed to produce the finest blocks, namely blocks, cubes, briquettes, etc.
            </p>
            <div className="wcu-features">
              {featureData.map((f) => (
                <div className="wcu-feature" key={f.text}>
                  <span className="wcu-feature-icon">{f.icon}</span>
                  <span className="wcu-feature-text">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="wcu-right">
          <div className="wcu-cards">
            {cardData.map((card) => (
              <div className="wcu-card" key={card.title}>
                <div className="wcu-icon">{card.icon}</div>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
