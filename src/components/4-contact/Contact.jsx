import React from "react";
import "./contact.css";
import { ValidationError, useForm } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animations/done.json";
import contactAnimation from "../../../public/animations/contact.json";

function Contact() {
  const [state, handleSubmit] = useForm("xyyrjrol");

  return (
    <section className="contact" id="Contact">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veniam
        blanditiis exercitationem?
      </p>
      <div className="contact-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              type="email"
              id="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded && (
            <p className="succeeded">
              {" "}
              <Lottie
                style={{ height: 55, width: 35 }}
                animationData={doneAnimation}
                loop={false}
              />{" "}
              your message has been sent successfully
            </p>
          )}
        </form>
        <div className="animation">
          {" "}
          <Lottie
            className="contactAnimation"
            animationData={contactAnimation}
            style={{ height: 355 }}
            loop={true}
          />{" "}
        </div>
      </div>
    </section>
  );
}

export default Contact;
