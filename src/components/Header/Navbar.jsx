import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        {/* Logo on the left */}
        <div className="logo">
          <h6>INNOVATION TECHNOLOGIES</h6>
        </div>

        {/* Nav links on the right */}
        <nav className="nav-links">
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/clients">Client</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
