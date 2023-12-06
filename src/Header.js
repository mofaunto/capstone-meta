import React from "react";
import Nav from "./Nav";
import Logo from "./icons_assets/Logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="navigation">
          <Nav />
        </div>
      </header>
    </>
  );
}

export default Header;
