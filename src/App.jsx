import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Agenda from './components/Agenda';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Agenda />
      <FAQ />
      <div style={{ textAlign: 'center', margin: '4rem 0 2rem' }}>
        <a href="https://forms.cloud.microsoft/r/wTDC9YC597" className="btn-light">
          SECURE YOUR SPOT
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
