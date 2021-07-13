import "./Footer.scss";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="footerContainer">
      <ScrollTrigger onEnter={() => setIsVisible(true)}>
        <div
          className={
            isVisible ? "navBar__akindoju moveInDown" : "navBar__akindoju"
          }
        >
          Akindoju
        </div>
      </ScrollTrigger>

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
