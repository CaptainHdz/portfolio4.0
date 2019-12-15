import React from "react";
import "./style.css";
// import 'materialize-css'
import IMG from './IMG_5620.jpg';

const About = () => {
  return (
    <div id="about" className="grey darken-4">
      
    <h2 data-aos="zoom-in" data-aos-duration="1000" id="who" className="row">Who Am I?</h2>
    <hr className="divider" />
    <div className="container">
    <div id="about-row-1" className="row">
        <div id="left" data-aos="fade-right" data-aos-duration="500" className="col s12 m6 white-text">
          <h3 id="introduction"  >
              <span id="">Hi!</span><br/>
              <span id="sentence2-about">I'm Mauricio Hernandez.</span><br/>
              <span id="">I'm A Full Stack Software Developer.</span>
          </h3>
          <div id="picture-card" className="card z-depth-5">
            <div id="imgcontainer" className="card-image">
              <img alt="Mauro" id="picture" src={IMG} />
              <span id="overlay"></span>
            </div>
          </div>
        </div>
        <p data-aos="fade-left" data-aos-duration="2000" id="summary" className="col s12 m6 white-text right-align">
       <span id="summ-intro"> I am a dedicated software developer</span> that takes pride in creating excellent products. I have a real fascination for bringing ideas to life. Nothing is more rewarding than seeing the final outcome of every brick being layed. I am tailored in some of the latest technology to deliver cutting edge results to your screen. All the way from Houston, Texas, this developer is ready to serve and bring a smile to everyone, from small projects, to big business. Let's build something together.  
        </p>
      </div>
    </div>
      
    </div>
  );
};

export default About;
