import React from "react";
import "./Header.css";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        {/* Logo on the left */}
        <div className="logo">
          <img src="/assets/images/logo.png" alt="Finer Palate Logo" />
          <span className="logo-text">
            FINER <strong>PALATE</strong>
          </span>
        </div>

        {/* Nav links on the right */}
        <nav className="nav-links">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#menus">Menus</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
