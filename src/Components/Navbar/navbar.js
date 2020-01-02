import React from 'react';
import './style.css';
import {HashLink as Link} from 'react-router-hash-link';

const Navbar = () => {
    //Set screen to top
    window.onload = () => {
        const menu = document.getElementById('menu-icon');
        const links = document.getElementById('nav-links');

        menu.addEventListener('click', () => {
            links.classList.toggle('active');
        })

        const home = document.getElementById('home-link');
        home.addEventListener('click', () => {
            window.scrollTo(0, 0)
        })
          
    };

       

    return (
        <div id="navbar" className="z-depth-0 navbar-fixed">
            
            <nav className="no-shadow">
                <div className="nav-wrapper">
                <a href="#mobile" data-target="mobile-menu" id="menu"><i id="menu-icon" className="material-icons large">menu</i></a>
                <span className="name hide-on-med-and-down right">Mauricio Hernandez</span>
                <ul id="nav-links" className="left">
                    <li><Link id="home-link" to="/">Home</Link></li>
                    <li><Link to="/#about">About</Link></li>    
                    <li><Link to="/portfolio#portfolio">Portfolio</Link></li>
                    <li><Link to="/portfolio#contact">Contact</Link></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;