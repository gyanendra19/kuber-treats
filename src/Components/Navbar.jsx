import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyLogo</div>
      <ul className="navbar-links">
        <li>
          <a href="#home">ABOUT US</a>
        </li>
        <li>
          <a href="#about">JOURNAL</a>
        </li>
        <li>
          <a href="#services">SERVICES</a>
        </li>
        <li>
          <a href="#contact">PORTFOLIO</a>
        </li>
      </ul>
      <div className="navbar-button">
        <button>CONTACT</button>
      </div>
    </nav>
  );
};

export default Navbar;
