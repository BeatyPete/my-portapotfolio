import React from "react";
import Nav from '../Nav';

function Header(props) {
  const {
    sectionSelected,
    setSectionSelected
  } = props;

  return (
    <header className="headContainer">
      <h1>Lernantino</h1>
      <Nav sectionSelected={sectionSelected} 
      setSectionSelected={setSectionSelected}/>
    </header>
  );
}

export default Header;