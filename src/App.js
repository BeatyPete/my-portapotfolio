import React, { useState } from 'react';
/* import { CSSTransition } from 'react-transition-group' */
import { motion, AnimatePresence } from "framer-motion"
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
      <AnimatePresence>
      { sectionSelected === 'About' && <About key='wi'/>}
      
      { sectionSelected === 'Project' && <Project key='wii'/>}
      { sectionSelected === 'Contact' && <Contact key='wiii'/>}
      { sectionSelected === 'Resume' && <Resume key='wiv'/>}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

export default App;
