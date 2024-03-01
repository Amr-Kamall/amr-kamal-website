import React, { useState } from "react";
import "./header.css";

function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className="flex">
      <button onClick={() => setShow((show) => !show)} className="icon-menu" />

      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="mode">
        <span className="icon-moon-o"></span>
      </button>
      {show && (
        <div className="fixed border">
          <ul className="modal">
            <li>
              <button className="icon-close" onClick={() => setShow(false)} />
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#articles">Articles </a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Speaking">Speaking</a>
            </li>
            <li>
              <a href="#Uses">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
