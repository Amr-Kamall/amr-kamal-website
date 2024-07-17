import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import developerAnimation from "../../../public/animations/developer.json";

function Hero() {
  return (
    <section className="hero flex" id="About">
      <div className="left-section">
        <div className="img-profile">
          <img
            src="/images/hero-profile.jpg"
            alt="profile"
            className="avatar"
          />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">
          FrontEnd Developer <br /> create websites and web applications
        </h1>
        <p className="sub-title">
          I am a web developer with React , passionate about coding and creating
          clean, efficient code . I am focus on providing websites that meet
          customers needs and improve designs for usability and functionality ,
          As a CS student, I'm constantly learning and exploring new
          technologies to improve my skills
        </p>
        <div className="all-icons flex">
          <a
            href="https://github.com/Amr-Kamall"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-github"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/developer-amr-kamal/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-linkedin"></div>
          </a>
          <a
            href="https://www.instagram.com/amro.kamal1/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-instagram"></div>
          </a>
          <div className="icon-twitter"></div>
        </div>
      </div>
      <div className="right-section">
        <Lottie
          animationData={developerAnimation}
          className="developer-animation"
          loop={true}
        />
      </div>
    </section>
  );
}

export default Hero;
