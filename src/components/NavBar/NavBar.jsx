import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import WOW from "wowjs";
import "./NavBar.scss";

const NavBar = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      //remove event listener to avoid memory leak
      return window.removeEventListener("resize", handleWindowResize);
    }, [width]);

    //returning an object with width in it
    return { width };
  };

  const { width } = useViewport();

  const breakPoint = 500;

  return (
    <div className="navBar">
      <div className="navBar__akindoju wow fadeInDown">Akindoju</div>
      {width <= breakPoint ? (
        <button>More</button>
      ) : (
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
      )}
    </div>
  );
};

export default NavBar;
