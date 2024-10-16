import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Packages from './Components/Packages/Packages';
import Gallery from './Components/Gallery/Gallery';
import Team from './Components/Team/Team';
import Usp from './Components/Usp/Usp';
import WhyUs from './Components/WhyUs/WhyUs';
import Testimonials from './Components/Testimonials/Testimonials';
import Faq from './Components/Faq/Faq';
import Instagram from './Components/Instagram/Instagram';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className='main'>
        <About />
        <Packages />
        <Gallery />
        <Team />
        <Usp />
        <WhyUs />
        <Testimonials />
        <Faq />
      </main>
      <Instagram />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
