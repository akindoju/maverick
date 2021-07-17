import { useEffect } from "react";
import { Link } from "react-scroll";
import WOW from "wowjs";
import "./NavBar.scss";

const NavBar = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <div className="navBar">
      <div className="navBar__akindoju wow fadeInDown">Akindoju</div>
      <div>
        <ul className="navBar__items">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>
            <Link to="writeToMe" duration={1200} smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
