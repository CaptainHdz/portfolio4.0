import React from 'react';
import './App.css';
import Background from './Components/Background/background';
import About from './Components/About/about';
import AOS from 'aos';

function App() {

  AOS.init();
  return (
    <div className="App">
      <Background/>
      <About />
    </div>
  );
}

export default App;
