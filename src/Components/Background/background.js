import React, {Component} from 'react';
import './style.css';
import Particles from 'react-particles-js';
import JSON from '../../particlesjs-config.json';

class Background extends Component {
    state = {
        sentence1: "Hi!",
        sentence2: " I'm Mauricio Hernandez.",
        sentence3: " I'm A Full Stack Software Developer."
    }

    componentDidMount() {
        
        // const stringArr = ["What's Up! ", "I'm Mauricio Hernandez. ", "I'm A Full Stack Software Developer."];
        
                
    }

   
    render(){
        return (
            <div id="background" data-aos="zoom-in"  data-aos-duration="1200" >
                    <h1 id="headline" >
                        <span id="sentence1">{this.state.sentence1}</span><br/>
                        <span id="sentence2">{this.state.sentence2}</span><br/>
                        <span id="sentence3">{this.state.sentence3}</span>
                    </h1>

                    <Particles params={JSON} />
            </div>

        );
    };
 
}

export default Background