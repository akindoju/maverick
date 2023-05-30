import { useEffect } from "react";
import WOW from "wowjs";
import { Link } from "react-scroll";
import "./Footer.scss";

const Footer = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="navBar__akindoju wow fadeInDown">Maverick</div>

        <div className="footer__item footer__item--menu">
          <ul>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__item footer__item--address">
          <ul>
            <li>Abuja, Nigeria</li>
          </ul>
        </div>
      </div>

      <p className="footerContainer__credit">Design by Olusola Akindoju</p>
    </div>
  );
};

export default Footer;
