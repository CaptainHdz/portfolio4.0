import React, {Component} from 'react';
import './style.css';
import Particles from 'react-particles-js';
import JSON from '../../particlesjs-config.json';

class Home extends Component {
    state = {
        sentence1: "Building The World.",
        sentence2: " One Line Of Code At A Time.",
    }

    componentDidMount() {
        const incrementCounter = () => {
            counter++;
            if (counter === len) {
                console.log('All images loaded!');
            }
        }
        var imgs = document.images,
            len = imgs.length,
            counter = 0;

        [].forEach.call(imgs, (img) => {
            if (img.complete)
                incrementCounter();
            else
                img.addEventListener('load', incrementCounter, false);
        });


        const downArrow = document.getElementById('down-arrow');
        downArrow.addEventListener('click', () => {
            const about = document.getElementById('about');
            about.scrollIntoView({behavior: 'smooth'})
        })
                
    }

   
    render(){
        return (
            <div id="home" data-aos="zoom-in"  data-aos-duration="1200" >
                <Particles id="particles" params={JSON} />
                <h1 id="headline" >
                    <span id="sentence1">{this.state.sentence1}</span>
                    <span id="sentence2">{this.state.sentence2}</span>
                </h1>
                <i id="down-arrow" className="material-icons large white-text col s12">keyboard_arrow_down</i>
            </div>

        );
    };
 
}

export default Home