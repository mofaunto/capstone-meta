import logo from "../../icons_assets/FooterLogo.png";
import "./Footer.css";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container global-max-width">
          <div className="footer-des">
            <img src={logo} alt="Little Lemon logo" />
            <div className="opening-times">
              <h5>OPENING TIMES</h5>
              <ul>
                <li>Mon - Wed: 10:30AM - 12:00AM</li>
                <li>Fri: 12:00PM - 1:00AM</li>
                <li>Sat - Sun: 10:30AM - 12:00AM</li>
              </ul>
            </div>

            <div className="contact">
              <h5>CONTACT US</h5>
              <ul>
                <li>Tel: 123456789</li>
                <li>Email: johndoe@littlelemon.com</li>
              </ul>
            </div>

            <div className="locations">
              <h5>LOCATIONS</h5>
              <ul>
                <li>100 Blv, Boston MA</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
