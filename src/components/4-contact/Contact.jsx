import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section className="contact">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veniam
        blanditiis exercitationem?
      </p>
      <div className="contact-content">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea name="" id="message" required></textarea>
          </div>
          <button className="submit">submit</button>
        </form>
        <div className="animation">animation</div>
      </div>
    </section>
  );
}

export default Contact;
