import React, { Component } from 'react';
import './style.css';
import Card from '../Card/card';
import Modal from '../Modal/Modal';
import ClickyGame from './Images/clicky-game-zoom.png';
import Giphy from './Images/GIPHY.png';
import Scraper from './Images/Dollar-Scrape.PNG';
import Traded from './Images/TradED.png';
import PowerList from './Images/power-list.PNG';
import BookTastic from './Images/Book-Finder2-screenshot.jpg';


class Portfolio extends Component {
    state = {
        modal: false,
        title: '',
        stack: ''

    };

    modal = (id) => {
        //We need the following things:
        //A title
        //A project link
        //A github link
        //A description
        //A gif showing the project in action
        console.log(id)
        document.body.style.position = 'auto';
        document.body.style.overflow = 'hidden';
        const card = document.getElementById(id);
        const title = card.children[0].children[1].children[0].innerHTML;
        const techStack = card.children[0].children[1].children[1].innerHTML;
        this.setState({
            modal: true,
            title: title,
            stack: techStack
        });
    };

    closeModal = () => {
        this.setState({modal: false})
		document.body.style.overflow = '';
	};

    render() {
        return (
            <div id="portfolio" className="grey darken-4">
                <h2 id="portfolio-header" className="row" data-aos="fade-down" data-aos-duration="500" data-aos-delay="500">Check Out My Work</h2>
                <hr className="divider" />
                <Modal
                 title={this.state.title}
                 open={this.state.modal}
                 closeModal={this.closeModal}
                 projectStack={this.state.stack}
                 />
                <div id="portfolio-container" className="container row" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                    <Card
                    id={1}
                    click={this.modal}
                    image={BookTastic}
                    text="Book-Tastic"
                    techStack="React.JS | Sequelize/SQL | Express.js"
                    link="https://book-finder2.herokuapp.com/"
                    />                 
                    <Card
                    id={2}
                    click={this.modal}
                    image={Scraper}
                    text="World Finance Report"
                    techStack="Handlebars.JS | Node.JS | MongoDB"
                    link="https://tranquil-denali-preserve-30101.herokuapp.com/"
                    />
                    <Card
                    id={3}
                    click={this.modal}
                    image={ClickyGame}
                    text="Pokememory"
                    techStack="React.JS | HTML5 | CSS3"
                    link="https://captainhdz.github.io/clicky-pokemonsters/"
                    />
                    <Card
                    id={4}
                    click={this.modal}
                    image={Traded}
                    text="TradED"
                    techStack="React.JS | Node.JS | MongoDB"
                    link="https://traded1.herokuapp.com/"
                    />
                    <Card
                    id={5}
                    click={this.modal}
                    image={PowerList}
                    text="The Power List"
                    techStack="React.JS | Node.JS | MongoDB"
                    link="https://obscure-shelf-60013.herokuapp.com/"
                    />
                    <Card
                    id={6}
                    click={this.modal}
                    image={Giphy}
                    text="GIF Machine"
                    techStack="Javascript | jQuery | HTML5 | CSS3"
                    link="https://captainhdz.github.io/giphy-app/"
                    />                            
                </div>
            </div>
        )
    }
};

export default Portfolio;