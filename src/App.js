import React from 'react';
import './App.css';
import Background from './Components/Background/background';
import About from './Components/About/about';
import AOS from 'aos';

function App() {

  AOS.init();
  return (
    <div className="App">
                      <div id="navbar" className="z-depth-0 navbar-fixed">
                    <nav className="no-shadow">
                    <div className="nav-wrapper">
                      <span id="name" className="right">Mauricio Hernandez</span>
                        <ul className="left hide-on-med-and-down">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/work">Work</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    </nav>
                </div>
      <Background/>
      <About />
    </div>
  );
}

export default App;
