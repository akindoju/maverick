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
    // <div className="footer">
    <div className="footer">
      <div className="navBar__akindoju wow fadeInDown">Maverick</div>

      <div className="footer__item footer__item-menu">
        <h1>MENU</h1>

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

      <div className="footer__item footer__item-address">
        <h1>ADDRESS</h1>

        <ul>
          <li>Abuja, Nigeria</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
