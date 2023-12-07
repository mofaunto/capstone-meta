import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import Logo from "../../icons_assets/Logo.svg";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-wrapper global-max-width">
          <div className="logo-wrapper">
            <NavLink to="/">
              {<img className="logo-img" src={Logo} alt="Little Lemon logo" />}
            </NavLink>
          </div>
          <Nav />
        </div>
      </header>
    </>
  );
}

export default Header;
