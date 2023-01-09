import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navItems">
      <ul>
        <li className="singleItems">
          <Link to="/">Home</Link>
        </li>
        <li className="singleItems">
          <a href="#about">About</a>
        </li>
        <li className="singleItems">
          <Link to="/bookingPage">Reservations</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
