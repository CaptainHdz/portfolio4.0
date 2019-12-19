import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Background from './Components/Background/background';
import About from './Components/About/about';
import Navbar from './Components/Navbar/navbar';
import Portfolio from './Components/Portfolio/portfolio';
import AOS from 'aos';

function App() {

  AOS.init();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Background />
            <About />
          </Route>

          {/* <Route path="/about" component={About} /> */}
          <Route exact path="/portfolio"><Portfolio/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
