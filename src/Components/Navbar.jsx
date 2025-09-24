import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyLogo</div>
      <ul className="navbar-links">
        <li><a href="#home">About Us</a></li>
        <li><a href="#about">Journal</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Portfolio</a></li>
      </ul>
      <div className="navbar-button">
        <button>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
