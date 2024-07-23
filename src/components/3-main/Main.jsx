import React, { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

function Main() {
  const buttonsTitle = [
    "all projects",
    "HTML & CSS",
    "Javascript",
    "React",
    "bootstrap",
  ];
  const [activeBtn, setActiveBtn] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState(myProjects);

  function handleButtonClicked(index) {
    setActiveBtn(index);
    if (index === 0) {
      setFilteredProjects(myProjects);
    } else if (index === 1) {
      const filteerdProjects = myProjects.filter(
        (project) => project.category === "html&css"
      );
      setFilteredProjects(filteerdProjects);
    } else if (index === 2) {
      const filteerdProjects = myProjects.filter(
        (project) => project.category === "javascript"
      );
      setFilteredProjects(filteerdProjects);
    } else if (index === 3) {
      const filteerdProjects = myProjects.filter(
        (project) => project.category === "react"
      );
      setFilteredProjects(filteerdProjects);
    } else {
      const filteerdProjects = myProjects.filter(
        (project) => project.category === "bootstrap"
      );
      setFilteredProjects(filteerdProjects);
    }
  }
  return (
    <main className="main" id="Projects">
      <div className="left-section">
        {buttonsTitle.map((btnTitle, index) => (
          <button
            onClick={() => handleButtonClicked(index)}
            className={`${activeBtn === index ? "active" : ""}`}
            key={index}
          >
            {btnTitle}
          </button>
        ))}
      </div>
      <motion.div className="right-section">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{
                duration:0.3,
                type: "spring",
                damping: 8,
                stiffness: 50,
              }}
              className="card"
              key={project.projectTitle}
            >
              <motion.img src={project.imgPath} alt={project.projectTitle} />
              <motion.div className="card-content">
                <motion.h1 className="title">{project.projectTitle}</motion.h1>
                <motion.p className="sub-title">{project.info}</motion.p>
              </motion.div>
              <motion.div className="card-links">
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.span className="icon-link"></motion.span>
                </motion.a>
                <motion.a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.span className="icon-github"></motion.span>
                </motion.a>
              </motion.div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}

export default Main;
