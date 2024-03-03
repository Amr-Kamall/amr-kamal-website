import React from "react";
import "./main.css";

function Main() {
  return (
    <main className="main">
      <div className="left-section">
        <button className="active">all projects</button>
        <button>HTML & CSS</button>
        <button>Javascript</button>
        <button>React</button>
      </div>

      <div className="right-section">
        {Array.from({ length: 5 }, (v, i) => (
          <article className="card" key={i}>
            <img src="/project-2.jpg" alt="final" />
            <div className="card-content">
              <h1 className="title">landing page 1</h1>
              <p className="sub-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                exercitationem?
              </p>
            </div>
            <div className="card-links">
              <span className="icon-link"></span>
              <span className="icon-github"></span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Main;
