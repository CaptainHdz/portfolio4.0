import React from 'react';
import './style.css';

 
const Card = (props) => {
return (
    <div className="project-card col m4">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator card-image" src={props.image} alt="project img" />
        </div>
    </div>
)
};

export default Card;