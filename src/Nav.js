import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" className="navlink">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="navlink">
            About
          </Link>
        </li>
        <li>
          <Link href="/" className="navlink">
            Menu
          </Link>
        </li>
        <li>
          <Link href="/reservations" className="navlink">
            Reservations
          </Link>
        </li>
        <li>
          <Link href="/" className="navlink">
            Order Online
          </Link>
        </li>
        <li>
          <Link href="/" className="navlink">
            Log in
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
