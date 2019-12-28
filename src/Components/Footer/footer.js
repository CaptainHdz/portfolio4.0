import React from 'react';
import './style.css';


const Footer = () => {
    return (
      <div id="footer">
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2019 Mauricio Hernandez
              <a className="grey-text text-lighten-4 right" href="#!">
                More Links
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
}


export default Footer;