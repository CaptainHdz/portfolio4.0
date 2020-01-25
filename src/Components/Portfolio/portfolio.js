import React from 'react';
import './style.css';
import Card from '../Card/card';
import ClickyGame from './Images/clicky-game-zoom.png';
import Giphy from './Images/GIPHY.png';
import Scraper from './Images/Dollar-Scrape.PNG';
import Traded from './Images/TradED.png';
import PowerList from './Images/power-list.PNG';
import BookTastic from './Images/Book-Finder2-screenshot.jpg';


const Portfolio = () => {
    return (
        <div id="portfolio" className="grey darken-4">
            <h2 id="portfolio-header" className="row" data-aos="fade-down" data-aos-duration="500" data-aos-delay="500">Check Out My Work</h2>
            <hr className="divider" />
            <div id="portfolio-container" className="container row" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                <div className="">
                <Card
                image={BookTastic}
                text="Book-Tastic"
                techStack="React.JS | Sequelize/SQL | Express.js"
                link="https://book-finder2.herokuapp.com/"
                />                 
                <Card
                image={Scraper}
                text="Financial News"
                techStack="Handlebars.JS | Node.JS | MongoDB"
                link="https://tranquil-denali-preserve-30101.herokuapp.com/"
                />
                <Card
                image={ClickyGame}
                text="Pokememory"
                techStack="React.JS | HTML5 | CSS3"
                link="https://captainhdz.github.io/clicky-pokemonsters/"
                />
                <Card
                image={Traded}
                text="Traded"
                techStack="React.JS | Node.JS | MongoDB"
                link="https://traded1.herokuapp.com/"
                />
                <Card
                image={PowerList}
                text="The Power List"
                techStack="React.JS | Node.JS | MongoDB"
                link="https://obscure-shelf-60013.herokuapp.com/"
                />
                <Card
                image={Giphy}
                text="GIF Machine"
                techStack="Javascript | jQuery | HTML5 | CSS3"
                link="https://captainhdz.github.io/giphy-app/"
                />                            
                </div>
            </div>

        </div>
    )
};

export default Portfolio;