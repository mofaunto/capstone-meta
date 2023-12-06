import React from "react";
import Nav from "./Nav";
import Logo from "./icons_assets/Logo.svg";

function Header() {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo" />
        <h1>Testing</h1>
      </header>
      <div>
        <Nav></Nav>
      </div>
    </>
  );
}

export default Header;
