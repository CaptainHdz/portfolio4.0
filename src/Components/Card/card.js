import React from 'react';
import './style.css';

 
const Card = (props) => {
return (
    <div className="project-card col s12 m6">
        <div className="card-container waves-effect waves-block waves-light">
            <img className="card-image activator" src={props.image} alt="project img" />
            <div className="card-overlay white-text">
                <h3 className="card-header">{props.text}</h3>
                <h5 className="cyan-text text-lighten-1">{props.techStack}</h5>
                <a href={props.link} target="_blank" rel="noopener noreferrer" id="card-button" className="btn-large z-depth-0 waves-effect">Learn More</a>
            </div>
        </div>
    </div>
)
};

export default Card;