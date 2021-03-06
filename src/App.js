import React, { useState } from 'react';
import devLogo from './assets/logos/devLogoWhite@0.5x.png';
import Resume from './components/Resume';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [ currentPage, setCurrentPage ] = useState('Portfolio');

  const renderPage = () => {
    switch(currentPage) {
      case "Portfolio":
        return <Portfolio/>;
        case "About":
        return <About/>;
        case "Resume":
        return <Resume/>;
        case "Contact":
        return <ContactForm/>;
        default:
          return <h1>404 not found</h1>;
    }
  };


  return (
    <div>
      <header className="flex-row px-1">
      <div className="devLogoContainer">
        <a data-testid="link" href="/" onClick={()=> setCurrentPage('Portfolio')}>
        <img
            src={ devLogo }
            alt=""
            className="devLogo" />
        </a>
      </div>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={()=> setCurrentPage('About')}>
              About Me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="portfoio" href="#portfolio" onClick={()=> setCurrentPage('Portfolio')}>
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="resume" href="#resume" onClick={()=> setCurrentPage('Resume')}>
              Resume
            </a>
          </li>
          <li className="mx-2">
          <a data-testid="contact" href="#contact" onClick={()=> setCurrentPage('Contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
      <main>
        { renderPage() }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;