import React, { useEffect, useState } from "react";
import "./header.css";

const mobileLinks = ["Home", "About", "Projects", "Contact"];

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(function () {
    const storedValue = localStorage.getItem("Mode");
    return storedValue || "dark";
  });

  useEffect(
    function () {
      if (theme === "light") {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      } else if (theme === "dark") {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      }
    },
    [theme]
  );
  return (
    <header className="flex" id="Home">
      <button
        onClick={() => setShowModal((showModal) => !showModal)}
        className="icon-menu"
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem("Mode", theme === "dark" ? "light" : "dark");
          setTheme(localStorage.getItem("Mode"));
        }}
        className="mode"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>
      {showModal && (
        <div className="fixed border">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => setShowModal(false)}
              />
            </li>
            {mobileLinks.map((link) => (
              <li key={link} onClick={() => setShowModal(false)}>
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
