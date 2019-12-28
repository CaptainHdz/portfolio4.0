import React from 'react';
import './style.css'


const Contact = () => {
    return (
      <div id="contact" className="grey darken-3">
        <h2 id="contact-header" data-aos="fade-left" data-aos-duration="1000">Ready To Work Together?</h2>
        <hr className="contact-divider" />
        <div className="container">        
          <form action="https://formspree.io/mayqdarw" method="POST">
            {/* <label>Your email:</label> */}
            <input className="form-width" type="text" placeholder="Email" name="_replyto" />

            {/* <label>Your Name:</label> */}
            <input className="form-width" placeholder="Your Name" type="text" name="name" />

            {/* <label>Your message:</label> */}
            <textarea id="form-textbox" placeholder="Your Message" name="message"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
}

export default Contact;


