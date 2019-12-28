import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Background from './Components/Background/background';
import About from './Components/About/about';
import Portfolio from './Components/Portfolio/portfolio';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
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
            <Footer />
          </Route>

          {/* <Route path="/about" component={About} /> */}
          <Route exact path="/portfolio">
            <Portfolio />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
