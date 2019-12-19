import React, {Component} from 'react';
import './style.css';
import Particles from 'react-particles-js';
import JSON from '../../particlesjs-config.json';

class Background extends Component {
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
        // const stringArr = ["What's Up! ", "I'm Mauricio Hernandez. ", "I'm A Full Stack Software Developer."];
        var imgs = document.images,
            len = imgs.length,
            counter = 0;

        [].forEach.call(imgs, (img) => {
            if (img.complete)
                incrementCounter();
            else
                img.addEventListener('load', incrementCounter, false);
        });


                
    }

   
    render(){
        return (
            <div id="background" data-aos="zoom-in"  data-aos-duration="1200" >

        

                <h1 id="headline" >
                    <span id="sentence1">{this.state.sentence1}</span>
                    <span id="sentence2">{this.state.sentence2}</span>
                </h1>

                    <Particles params={JSON} />
            </div>

        );
    };
 
}

export default Background