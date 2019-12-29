import React from 'react';
import './style.css'


const Contact = () => {
    return (
      <div id="contact" className="grey darken-3">
        <h2 id="contact-header" data-aos="fade-left" data-aos-duration="1000">Ready To Work Together?</h2>
        <hr className="contact-divider divider" />
        <div id="form-container" className="container">        
          <form action="https://formspree.io/mayqdarw" method="POST" className="row">
            {/* <label>Your email:</label> */}
            <input className="col s8 offset-s2 white-text" type="text" placeholder="Email" name="_replyto" />

            {/* <label>Your Name:</label> */}
            <input className="col s8 offset-s2 white-text" placeholder="Your Name" type="text" name="name" />

            {/* <label>Your message:</label> */}
            <textarea id="form-textbox" className="col s12 offset-s3 white-text" placeholder="Your Message" name="message"></textarea>

            <button id="form-button" type="submit" className="col s2 offset-s5 btn waves-effect waves-light">Send</button>
          </form>
        </div>
      </div>
    );
}

export default Contact;


