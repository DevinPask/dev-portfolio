import React from 'react';


function Footer() {
  return (
    <footer className="flex-row px-1">
      
      <div className="logoFooter">
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About Me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="portfoio" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="resume" href="#resume">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;