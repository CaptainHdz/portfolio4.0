import React from 'react';
import './style.css';
import M from 'materialize-css';
import {HashLink as Link} from 'react-router-hash-link';

const Navbar = () => {
    //Set screen to top
    window.onload = () => {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);

        // menu.addEventListener('click', () => {
        //     links.classList.toggle('active');
        // });

        const home = document.getElementById('home-link');

        home.addEventListener('click', () => {
            window.scrollTo(0, 0)
        });
    };

       

    return (
        <div id="navbar" className="z-depth-0 navbar-fixed">   
            <nav className="no-shadow">
                <div className="nav-wrapper">
                    <div data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></div>
                    <span className="name right">Mauricio Hernandez</span>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link id="home-link" to="/">Home</Link></li>
                        <li><Link to="/#about">About</Link></li>    
                        <li><Link to="/portfolio#portfolio">Portfolio</Link></li>
                        <li><Link to="/portfolio#contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
            {/* Only Shows up on mobile */}
            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/portfolio#portfolio">Portfolio</Link></li>
                <li><Link to="portfolio#contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;