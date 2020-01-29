import React from 'react';
import './style.css';

 
const Card = (props) => {
return (
    <div id={props.id} video={props.video} githubLink={props.github} deployedLink={props.link} className="project-card col s12 m6">
        <div className="card-container">
            <img className="card-image activator" src={props.image} alt="project img" />
            <div className="card-overlay white-text">
                <h3 className="card-header">{props.text}</h3>
                <h5 className="cyan-text text-lighten-1">{props.techStack}</h5>
                <button id="card-button" className="btn-large z-depth-0 modal-trigger" onClick={() => props.click(props.id)}>Learn More</button>
            </div>
        </div>
    </div>
)
};

export default Card;