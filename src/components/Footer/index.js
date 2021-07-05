import React from 'react';
import ghlogo from '../../assets/logos/GitHub.png';
import lilogo from '../../assets/logos/LI.png';


function Footer() {
  return (
    <footer className="flex-row px-1">
      
      <div className="logoFooter">
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" target="blank" href="https://github.com/DevinPask/">
            <img
            src={ ghlogo }
            alt=""
            className="img-thumbnail mx-1 logo" />
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="portfoio" target="blank" href="https://www.linkedin.com/in/devin-pask-2492b388/">
            <img
            src={ lilogo }
            alt=""
            className="img-thumbnail mx-1 logo" />
            </a>
          </li>
          
        </ul>
      </div>
    </footer>
  );
}

export default Footer;