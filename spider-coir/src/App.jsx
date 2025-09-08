import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Products from './components/Products/Products';
import Applications from './components/Applications/Applications';
import Process from './components/Process/Process';
import Trust from './components/Trust/Trust';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Products />
      <Applications />
      <Process />
      <Trust />
      <Footer />
    </div>
  );
}

export default App;
