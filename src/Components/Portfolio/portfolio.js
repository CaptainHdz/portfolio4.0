import React from 'react';
import './style.css';
import Card from '../ProjectCard/card';
import ClickyGame from './Images/clicky-game-zoom.png';
import Giphy from './Images/GIPHY.png';
import Scraper from './Images/Dollar-Scrape.PNG';
import Traded from './Images/TradED.png';
import ComingSoon from './Images/coming-soon.png';
import BookTastic from './Images/Book-Finder2-screenshot.jpg';


const Portfolio = () => {
    return (
        <div id="portfolio" className="grey darken-4">
            <h2 id="portfolio-header" className="row" data-aos="fade-down" data-aos-duration="100" data-aos-delay="500">Check Out My Work</h2>
            <hr className="divider" />
            <div id="portfolio-container" className="container row" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="400">
                <div className="">
                <Card
                image={ClickyGame}
                text="Simple and Fun Memory Game"
                link="https://captainhdz.github.io/clicky-pokemonsters/"
                buttonClass="btn-large waves-effect"
                />
                
                <Card
                image={Scraper}
                text="Save, and Read Financial News"
                link="https://tranquil-denali-preserve-30101.herokuapp.com/"
                buttonClass="btn-large waves-effect"
                />
                <Card
                image={Traded}
                text="Educative Stock Market Platform"
                link="https://traded1.herokuapp.com/"
                buttonClass="btn-large waves-effect"
                />
                <Card
                image={Giphy}
                text="Web App that Searches for GIFs"
                link="https://captainhdz.github.io/giphy-app/"
                buttonClass="btn-large waves-effect"
                />
                <Card
                image={BookTastic}
                text="Search A Huge Variety Of Books"
                link="https://book-finder2.herokuapp.com/"
                buttonClass="btn-large waves-effect"
                />
                <Card
                image={ComingSoon}
                text="More Apps Coming Soon"
                buttonClass="btn-large disabled btn-disabled"
                />
                </div>
            </div>

        </div>
    )
};

export default Portfolio;