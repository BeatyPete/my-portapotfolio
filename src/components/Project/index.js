import React, { useState } from 'react';

function Project() {
  const [itemFocused, setItemFocused] = useState(1);  

  return (
    <main>
      <div className="project-container">
        <section className={`${itemFocused != 1 ? 'hidden': 'visible'}`} id='1' /* onMouseEnter */>
          <div>
            <h2>The Bookfast Club</h2>
          </div>
        </section>
        <section id='2'>
        <div>
            <h2>The Bookfast Club</h2>
          </div>
        </section>
        <section id='3'>
        <div>
            <h2>The Bookfast Club</h2>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Project;