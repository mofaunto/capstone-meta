import logo from "./icons_assets/FooterLogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Footer logo" />
      </div>
      <div className="footer-nav">
        <ul>
          <h5>Navigation</h5>
          <li>
            <Link href="/" className="navlink">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="navlink">
              About
            </Link>
          </li>
          <li>
            <Link href="/menu" className="navlink">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/reservations" className="navlink">
              Reservations
            </Link>
          </li>
          <li>
            <Link href="/order" className="navlink">
              Order Online
            </Link>
          </li>
          <li>
            <Link href="/login" className="navlink">
              Log in
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <ul>
          <h5>Contact</h5>
          <li>
            <a id="nav" href="#">
              Phone Number
            </a>
          </li>
          <li>
            <a id="nav" href="#">
              Email
            </a>
          </li>
          <li>
            <a id="nav" href="#">
              Address
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-socials">
        <ul>
          <h5>Social Media</h5>

          <li>
            <a id="nav" href="#">
              Instagram
            </a>
          </li>
          <li>
            <a id="nav" href="#">
              LinkedIn
            </a>
          </li>
          <li>
            <a id="nav" href="#">
              Pinterest
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
