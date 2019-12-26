import React from 'react';
import './style.css';
import {HashLink as Link} from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div id="navbar" className="z-depth-0 navbar-fixed">
            
            <nav className="no-shadow">
                <div className="nav-wrapper">
                    <span id="name" className="right">Mauricio Hernandez</span>
                <ul className="left hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/#about">About</Link></li>    
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/portfolio#contact">Contact</Link></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;