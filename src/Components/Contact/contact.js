import React from 'react';
import './style.css'


const Contact = () => {
    return (
      <div id="contact" className="grey darken-4">
        <h2 id="contact-header" data-aos="fade-left" data-aos-duration="1000">Ready To Work Together?</h2>
        <hr className="contact-divider divider" />
        <div id="form-container" className="container">        
          <form action="https://formspree.io/mayqdarw" method="POST" className="row">
            {/* <label>Your email:</label> */}
            <input className="col s12 offset-m3 m6 white-text" type="text" placeholder="Email" name="_replyto" />

            {/* <label>Your Name:</label> */}
            <input className="col s12 m6 offset-m3 white-text" placeholder="Your Name" type="text" name="name" />

            {/* <label>Your message:</label> */}
            <textarea id="form-textbox" className="col s12 m6 offset-m3 white-text" placeholder="Your Message" name="message"></textarea>

            <button id="form-button" type="submit" className="col s10 offset-s1 m4 offset-m4 btn-large waves-effect waves-light">Send</button>
          </form>
        </div>
      </div>
    );
}

export default Contact;


