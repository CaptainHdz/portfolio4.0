import React from 'react';
import './style.css';

 
const Card = (props) => {
return (
    <div
     id={props.id} 
     video={props.video} 
     githublink={props.github} 
     deployedlink={props.link}
     techstack={props.allTech} 
     description={props.description} 
     className="project-card col s12 m6"
     >
        <div className="card-container">
            <img className="card-image activator" src={props.image} alt="project img" />
            <div className="card-overlay white-text">
                <h3 className="card-header">{props.text}</h3>
                <h5 className="cyan-text text-lighten-1">{props.tech}</h5>
                <button id="card-button" className="btn-large z-depth-0" onClick={() => props.click(props.id)}>Learn More</button>
            </div>
        </div>
    </div>
)
};

export default Card;