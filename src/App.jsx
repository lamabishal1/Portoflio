import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Navbar />
      <Hero  />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;