import React from 'react';
import './style.css';
import Card from '../ProjectCard/card';
import clickyGame from './Images/clicky-game-zoom.png';
import Giphy from './Images/GIPHY.png';
import Scraper from './Images/Dollar-Scrape.PNG';
import Traded from './Images/TradED.png';
import ComingSoon from './Images/coming-soon.png';


const Portfolio = () => {
    return (
        <div id="portfolio" className="grey darken-4">
            <h2 id="portfolio-header" className="row" data-aos="fade-down" data-aos-delay="500">Check Out My Work</h2>
            <hr className="divider" />
            <div id="portfolio-container" className="container" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="400">
                <div className="row">
                <Card
                image={clickyGame}
                />
                <Card
                image={Giphy}
                />
                <Card
                image={Scraper}
                />
                <Card
                image={Traded}
                />
                <Card
                image={ComingSoon}
                />
                <Card
                image={ComingSoon}
                />
                </div>
            </div>

        </div>
    )
};

export default Portfolio;