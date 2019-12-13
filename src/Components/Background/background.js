import React, {Component} from 'react';
import './style.css';
import Particles from 'react-particles-js';
import JSON from '../../particlesjs-config.json';
import Typist from 'react-typist';


class Background extends Component {
    state = {
        sentence1: "What's Up!",
        sentence2: " I'm Mauricio Hernandez.",
        sentence3: " I'm A Full Stack Software Developer."
    }

    componentDidMount() {
        
        // const stringArr = ["What's Up! ", "I'm Mauricio Hernandez. ", "I'm A Full Stack Software Developer."];
        
                
    }

   
    render(){
        return (
            <div id="background" className="ui container">
                <Typist>
                    <h1 id="headline" className="ui container">
    <span id="sentence1" className="row centered" >{this.state.sentence1}</span><br/>
                    <Typist.Delay ms={500} />
        <span id="sentence2" className="row centered" >{this.state.sentence2}</span><br/>
                      <Typist.Delay ms={500} />
        <span id="sentence3" className="centered" >{this.state.sentence3}</span>
                    </h1>
                   
                </Typist>
                <Particles params={JSON} />
            </div>

        );
    };
 
}

export default Background