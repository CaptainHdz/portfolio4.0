import React from 'react';
import './style.css';

 
const Card = (props) => {
return (
    <div className="project-card col s12 m4">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator card-image" src={props.image} alt="project img" />
            <div className="card-overlay white-text">
                <h3 className="card-header">{props.text}</h3>
                <a href={props.link} target="_blank" rel="noopener noreferrer" id="card-button" className={props.buttonClass}>Visit</a>
            </div>
        </div>
    </div>
)
};

export default Card;