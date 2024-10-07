import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';

function App() {
  return (
    <div className="font-sans bg-gray-100">
      <Header />
      <main className="pt-16">
        <Hero />
        <About/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
