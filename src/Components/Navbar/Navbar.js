import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div class="menu-container">
      <input type="checkbox" id="openmenu" class="hamburger-checkbox" />

      <div class="hamburger-icon">
        <label
          style={{ cursor: "pointer" }}
          for="openmenu"
          id="hamburger-label"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="menu-pane">
        <nav>
          <ul class="menu-links">
            <li>
              <Link to="/home">Ahanaf Abdullah</Link>
              <span id="DC-info">
                <p>+088 01706044801</p>
              </span>
            </li>

            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
