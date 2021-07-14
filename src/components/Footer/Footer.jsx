import { useEffect } from "react";
import WOW from "wowjs";
import "./Footer.scss";

const Footer = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <div className="footerContainer">
      <div className="navBar__akindoju wow fadeInDown">Akindoju</div>

      <div className="footer__item footer__item--menu">
        <h1>Menu</h1>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="footer__item footer__item--address">
        <h1>Address</h1>
        <ul>
          <li>Corer Estate III</li>
          <li>Lugbe</li>
          <li>Abuja</li>
          <li>Nigeria</li>
        </ul>
      </div>

      <div className="footer__item footer__item--contact">
        <h1>Contact</h1>
        <ul>
          <li>GH:github.com/akindoju</li>
          <li>E:davidd.akindoju@gmail.com</li>
          <li>T:08123456789</li>
          <li>F:09009090909</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
