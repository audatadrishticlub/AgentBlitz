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
      <Footer />
    </div>
  );
}

export default App;
