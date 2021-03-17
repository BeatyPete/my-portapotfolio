import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

function Project() {
  const [itemFocused, setItemFocused] = useState('');  

  return (
    <main>
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
      <div className="project-container">
        <section id='1'>
          <div onMouseEnter={() => setItemFocused('1')} onMouseLeave={() => setItemFocused('')}>
            <h2>The Bookfast Club</h2>
          </div>
        </section>
        
        <section id='2'>
          <div onMouseEnter={() => setItemFocused('2')} onMouseLeave={() => setItemFocused('')}>
            <h2>The Bookfast Club</h2>
          </div>
        </section>
        <section id='3'>
          <div onMouseEnter={() => setItemFocused('3')} onMouseLeave={() => setItemFocused('')}>
            <h2>The Bookfast Club</h2>
          </div>
        </section>
      </div>
      </motion.div>
      
    </main>
  );
}

export default Project;