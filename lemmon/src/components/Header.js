import React from "react";
import Nav from "./Nav";
import logo from "../assets/img/Logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="navigation">
        <Nav />
      </div>
    </header>
  );
}

export default Header;
