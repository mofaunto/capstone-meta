import logo from "./icons_assets/Logo.svg";

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
            <a href="/" className="navlink">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="navlink">
              About
            </a>
          </li>
          <li>
            <a href="/menu" className="navlink">
              Menu
            </a>
          </li>
          <li>
            <a href="/reservations" className="navlink">
              Reservations
            </a>
          </li>
          <li>
            <a href="/order" className="navlink">
              Order Online
            </a>
          </li>
          <li>
            <a href="/login" className="navlink">
              Log in
            </a>
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
