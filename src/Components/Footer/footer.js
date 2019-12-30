import React from 'react';
import './style.css';
import '@fortawesome/fontawesome-free';
import Github from './Icons/Github-icon.png';
import LinkedIn from './Icons/LinkedIN-icon.png';


const Footer = () => {
    return (
      <div id="footer">
        <footer className="page-footer black">
          {/* <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                
              </div>
            </div>
          </div> */}
          <div className="footer-copyright black">
            <div className="container">
             <div className="left">© 2019 Mauricio Hernandez</div> 
              <i className="fa fa-github-alt github small right"></i>
              <i class="fa fa-linkedin linked-in small right"></i>
             </div>
          </div>
        </footer>
      </div>
    );
}


export default Footer;