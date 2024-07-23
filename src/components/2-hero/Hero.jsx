import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import developerAnimation from "../../../public/animations/developer.json";
import { motion, MotionConfig } from "framer-motion";

function Hero() {
  return (
    <section className="hero flex" id="About">
      <MotionConfig>
        <motion.div
          className="left-section"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.div className="img-profile">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring", damping: 7 }}
              src="/images/hero-profile.jpg"
              alt="profile"
              className="avatar"
            />
            <motion.div className="icon-verified"></motion.div>
          </motion.div>
          <motion.div
            initial={{ x: -220 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, type: "tween" }}
          >
            <motion.h1 className="title">
              FrontEnd Developer <br /> create websites and web applications
            </motion.h1>
            <motion.p className="sub-title">
              I am a web developer with React, passionate about coding and
              creating clean, efficient code. I focus on providing websites
              that meet customers' needs and improve designs for usability and
              functionality. As a CS student, I'm constantly learning and
              exploring new technologies to improve my skills.
            </motion.p>
          </motion.div>
          <motion.div
            className="all-icons flex"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              staggerChildren: 0.2, // stagger animation by 0.2 seconds
              delayChildren: 0.5, // delay the start of the animation by 0.5 seconds
            }}
          >
            <motion.a
              href="https://github.com/Amr-Kamall"
              target="_blank"
              rel="noreferrer"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div className="icon-github"></motion.div>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/developer-amr-kamal/"
              target="_blank"
              rel="noreferrer"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.69 }}
            >
              <motion.div className="icon-linkedin"></motion.div>
            </motion.a>
            <motion.div
              className="icon-twitter"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7 }}
            ></motion.div>
            <motion.div
              className="icon-instagram"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.79 }}
            ></motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="right-section">
          <Lottie
            animationData={developerAnimation}
            className="developer-animation"
            loop={true}
          />
        </motion.div>
      </MotionConfig>
    </section>
  );
}

export default Hero;
