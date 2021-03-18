import React, { useState } from 'react';
import { motion } from "framer-motion"

function Project() {
  const [itemFocused, setItemFocused] = useState('');  

  return (
    <main>
      <motion.div 
        className='project-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        
          <section id='book' className='big-proj'>
            <div onMouseEnter={() => setItemFocused('1')} onMouseLeave={() => setItemFocused('')}>
              <h2>The Bookfast Club</h2>
            </div>
          </section>
        
        
          <section id='movie' className='big-proj'>
            <div onMouseEnter={() => setItemFocused('1')} onMouseLeave={() => setItemFocused('')}>
              <h2>MovieHub</h2>
            </div>
          </section>
          <section id='3'>
            <div onMouseEnter={() => setItemFocused('1')} onMouseLeave={() => setItemFocused('')}>
              <h2>The Bookfast Club</h2>
            </div>
          </section>
          
          <section id='4'>
            <div onMouseEnter={() => setItemFocused('1')} onMouseLeave={() => setItemFocused('')}>
              <h2>The Bookfast Club</h2>
            </div>
          </section>
          <section id='5'>
            <div onMouseEnter={() => setItemFocused('1')} onMouseLeave={() => setItemFocused('')}>
              <h2>The Bookfast Club</h2>
            </div>
          </section>
          <section id='6'>
            <div onMouseEnter={() => setItemFocused('1')} onMouseLeave={() => setItemFocused('')}>
              <h2>The Bookfast Club</h2>
            </div>
          </section>
      </motion.div>
      
    </main>
  );
}

export default Project;