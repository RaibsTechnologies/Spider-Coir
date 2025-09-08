import React, { useState, useEffect } from "react";
import "./Hero.css";
const slides = [
  { id: 1, video: "/src/assets/slider1.mp4" },
  { id: 2, video: "/src/assets/slider1.mp4" },
  { id: 3, video: "/src/assets/slider1.mp4" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000); // 3s
    return () => clearInterval(interval);
  }, []);

  // Prev/Next functions
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  return (
<<<<<<< HEAD
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
=======
    <div className="hero-slider">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
        >
          {index === current && (
            <video
              src={slide.video}
              autoPlay
              loop
              muted
              playsInline
              className="slide-video"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </div>
      ))}
>>>>>>> d5d347471501924bf2e86b40708ba9b4a7d60edd

      {/* Static content */}
      <div className="hero-content">
        <h1>Top Cocopeat Suppliers</h1>
        <p>Transforming the Coir Industry</p>
        <div className="button-row">

          <a href="/tour" className="cta-button-filled">
            Tour the platform
          </a>
          <a href="/demo" className="cta-button-outline">
            Book a demo
          </a>
          </div>
        </div>
      </div>

      // {/* Left & Right Controls */}
      // <button className="carousel-control left" onClick={prevSlide}>
      //   &#10094;
      // </button>
      // <button className="carousel-control right" onClick={nextSlide}>
      //   &#10095;
      // </button>

//       {/* Dots */}
//       <div className="dots"></div>
//         {slides.map((_, index) => (
//           <span
//             key={index}
//             className={`dot ${index === current ? "active" : ""}`}
//             onClick={() => setCurrent(index)}
//           ></span>
//         ))}
//       </div>
//     </div>
  );
}