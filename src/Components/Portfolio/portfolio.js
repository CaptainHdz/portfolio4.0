import React, { Component } from 'react';
import './style.css';
import Card from '../Card/card';
import Modal from '../Modal/Modal';
//Thumbnails for each project
import ClickyGameIMG from './Images/clicky-game-zoom.png';
import GiphyIMG from './Images/GIPHY.png';
import ScraperIMG from './Images/Dollar-Scrape.PNG';
import TradedIMG from './Images/TradED.png';
import PowerListIMG from './Images/power-list.PNG';
import BookTasticIMG from './Images/Book-Finder2-screenshot.jpg';
//Project video
import Pokememory from './video/Pokememory.mp4';
import BookTastic from './video/BookTastic.mp4';
import WorldFinance from './video/World-Finance-Report.mp4';
import TradED from './video/TradED.mp4';
import GifMachine from './video/GIF-Demo.mp4';
import PowerList from './video/Power-List.mp4';


class Portfolio extends Component {
    state = {
        title: '',
        stack: '',
        video: '',
        projectLink: '',
        modal: false
    };

    modal = (id) => {
        //We need the following things:
        //A title-done
        //techStack-done
        //A project link-done
        //A github link
        //A description
        //A video showing the project in action-done
        document.body.style.position = 'auto';
        document.body.style.overflow = 'hidden';
        const card = document.getElementById(id);
        const title = card.children[0].children[1].children[0].innerHTML;
        const techStack = card.children[0].children[1].children[1].innerHTML;
        const video = card.getAttribute('video');
        const projectLink = card.getAttribute('deployedLink')
        this.setState({
            title: title,
            stack: techStack,
            video: video,
            projectLink: projectLink,
            modal: true
        });
    };

    closeModal = () => {
        this.setState({
            modal: false,
            title: '',
            stack: '',
            video: '',
            project: '',

        })
		document.body.style.overflow = '';
	};

    render() {
        return (
            <div id="portfolio" className="grey darken-4">
                <h2 id="portfolio-header" className="row" data-aos="fade-down" data-aos-duration="500" data-aos-delay="500">Check Out My Work</h2>
                <hr className="divider" />
                <Modal
                 title={this.state.title}
                 video={this.state.video}
                 project={this.state.projectLink}
                 projectStack={this.state.stack}
                 open={this.state.modal}
                 closeModal={this.closeModal}
                 />
                <div id="portfolio-container" className="container row" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                    <Card
                    id={1}
                    click={this.modal}
                    image={BookTasticIMG}
                    video={BookTastic}
                    text="Book-Tastic"
                    techStack="React.JS | Sequelize/SQL | Express.js"
                    link="https://book-finder2.herokuapp.com/"
                    />                 
                    <Card
                    id={2}
                    click={this.modal}
                    image={ScraperIMG}
                    video={WorldFinance}
                    text="World Finance Report"
                    techStack="Handlebars.JS | Node.JS | MongoDB"
                    link="https://tranquil-denali-preserve-30101.herokuapp.com/"
                    />
                    <Card
                    id={3}
                    click={this.modal}
                    image={ClickyGameIMG}
                    video={Pokememory}
                    text="Pokememory"
                    techStack="React.JS | HTML5 | CSS3"
                    link="https://captainhdz.github.io/clicky-pokemonsters/"
                    />
                    <Card
                    id={4}
                    click={this.modal}
                    image={TradedIMG}
                    video={TradED}
                    text="TradED"
                    techStack="React.JS | Node.JS | MongoDB"
                    link="https://traded1.herokuapp.com/"
                    />
                    <Card
                    id={5}
                    click={this.modal}
                    image={PowerListIMG}
                    video={PowerList}
                    text="The Power List"
                    techStack="React.JS | Node.JS | MongoDB"
                    link="https://obscure-shelf-60013.herokuapp.com/"
                    />
                    <Card
                    id={6}
                    click={this.modal}
                    image={GiphyIMG}
                    video={GifMachine}
                    text="GIF Machine"
                    techStack="jQuery | HTML5 | CSS3"
                    link="https://captainhdz.github.io/giphy-app/"
                    />                            
                </div>
            </div>
        )
    }
};

export default Portfolio;