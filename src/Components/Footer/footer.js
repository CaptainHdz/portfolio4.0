import React from "react";
import "./style.css";
import "@fortawesome/fontawesome-free";

const Footer = () => {
  return (
    <div id="footer">
      <footer className="page-footer black">
        <div className="footer-copyright black">
          <div className="container">
            <div className="left">© 2021 Mauricio Hernandez</div>
            <a className="grey-text" href="https://github.com/Mauro-hdz" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github-alt github small right"></i>
            </a>
            <a className="grey-text" href="https://www.linkedin.com/in/mauricio-hernandez-54170617b/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin linked-in small right"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
