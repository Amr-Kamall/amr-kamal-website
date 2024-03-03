import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Articles">Articles</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Speaking">Speaking</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <p className="footer-para">
        &copy; 2024 spencer sharp. All right reserved
      </p>
    </footer>
  );
}

export default Footer;
