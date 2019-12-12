import React, {Component} from 'react';
import './style.css';
import Particles from 'react-particles-js';
// import JSON from '../../particlesjs-config.json';

 const partObj = {
        particles: {
            number: {
                value: 115
            },
            shape: {
                type: 'triangle'
            }
        }
    };
  

class Background extends Component {

   
    render(){
        return (
            <div id="background">
                <Particles params={partObj} />
            </div>

        );
    };
 
}

export default Background