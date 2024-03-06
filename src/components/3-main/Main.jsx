import React, { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";

function Main() {
  const buttonsTitle = [
    "all projects",
    "HTML & CSS",
    "Javascript",
    "React",
    "Bootstrab",
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
        (project) => project.category === "bootstrab"
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
      <div className="right-section">
        {filteredProjects.map((project) => (
          <article className="card" key={project.projectTitle}>
            <img src={project.imgPath} alt={project.projectTitle} />
            <div className="card-content">
              <h1 className="title">{project.projectTitle}</h1>
              <p className="sub-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                exercitationem?
              </p>
            </div>
            <div className="card-links">
              <a href={project.liveDemo} target="_blank" rel="noreferrer">
                <span className="icon-link"></span>
              </a>
              <a href={project.githubRepo} target="_blank" rel="noreferrer">
                <span className="icon-github"></span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Main;
