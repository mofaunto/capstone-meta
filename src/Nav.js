import React from "react";
// import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/" className="navlink">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="navlink">
            About
          </a>
        </li>
        <li>
          <a href="/" className="navlink">
            Menu
          </a>
        </li>
        <li>
          <a href="/" className="navlink">
            Reservations
          </a>
        </li>
        <li>
          <a href="/" className="navlink">
            Order Online
          </a>
        </li>
        <li>
          <a href="/" className="navlink">
            Log in
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
