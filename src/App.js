import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [sectionSelected, setSectionSelected] = useState("About");

  return (
    <div>
      <Header 
        sectionSelected={sectionSelected}
        setSectionSelected={setSectionSelected}
      />
      { sectionSelected === 'About' && <About />}
      { sectionSelected === 'Project' && <Project />}
      { sectionSelected === 'Contact' && <Contact />}
      { sectionSelected === 'Resume' && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
