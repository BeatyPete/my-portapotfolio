import React from "react";

function Nav(props) {
    const {
        sectionSelected,
        setSectionSelected
    } = props;

  return (
      <nav>
          <ul>
              <li>
                  <a 
                    onClick={() => setSectionSelected("About")}
                    className={`${sectionSelected === 'About' && 'nav-active'}`}
                  >About Me</a>
              </li>
              <li>
                  <a 
                  onClick={() => setSectionSelected("Project")}
                  className={`${sectionSelected === 'Project' && 'nav-active'}`}
                  >Portfolio</a>
              </li>
              <li>
                  <a 
                  onClick={() => setSectionSelected("Contact")}
                  className={`${sectionSelected === 'Contact' && 'nav-active'}`}
                  >Contact</a>
              </li>
              <li>
                  <a 
                  onClick={() => setSectionSelected("Resume")}
                  className={`${sectionSelected === 'Resume' && 'nav-active'}`}
                  >Resume</a>
              </li>
          </ul>
      </nav>
  );
}

export default Nav;