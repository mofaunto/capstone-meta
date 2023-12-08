import logo from "../../icons_assets/FooterLogo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container global-max-width">
          <div className="footer-des">
            <img src={logo} alt="Little Lemon logo" />
            <div className="footer-nav">
              <h5>Site Navigation</h5>
              <ul>
                <li>
                  <Link href="/" className="footerlink">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="footerlink">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="footerlink">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/reservation" className="footerlink">
                    Reservations
                  </Link>
                </li>
                <li>
                  <Link href="/order" className="footerlink">
                    Order Online
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="footerlink">
                    Login
                  </Link>
                </li>
              </ul>
            </div>

            <div className="contact">
              <h5>Contacts</h5>
              <ul>
                <li>Tel: 123456789</li>
                <li>Email: info@littlelemon.com</li>
                <li>240 Blv, Chicago Downtown</li>
              </ul>
            </div>

            <div className="socials">
              <h5>Socials</h5>
              <ul>
                <li>
                  <Link href="/" className="footerlink">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="/" className="footerlink">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="/" className="footerlink">
                    Pinterest
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>© 2023 Little Lemon Inc.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
