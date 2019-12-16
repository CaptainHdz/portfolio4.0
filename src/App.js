import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Background from './Components/Background/background';
import About from './Components/About/about';
import Navbar from './Components/Navbar/navbar';
import AOS from 'aos';

function App() {

  AOS.init();
  return (
    <div className="App">
      <Navbar/>
      <Background/>
      <About />
    </div>
  );
}

export default App;
