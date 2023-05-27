import { useState } from "react";
import { Link } from "react-scroll";
import NavBarOptions from "../NavBarOptions/NavBarOptions";
import "./NavBar.scss";

const NavBar = () => {
  const [isNavBarOptionsBtnClicked, setIsNavBarOptionsBtnClicked] =
    useState(false);

  return (
    <div className={"navBar"}>
      {isNavBarOptionsBtnClicked && (
        <NavBarOptions
          setIsNavBarOptionsBtnClicked={setIsNavBarOptionsBtnClicked}
        />
      )}
      <div className="navBar__akindoju">Maverick</div>

      <svg
        className="navBar__svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onClick={() => setIsNavBarOptionsBtnClicked(true)}
      >
        <title>menu</title>
        <path d="M3 6h18v2.016h-18v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 18v-2.016h18v2.016h-18z"></path>
      </svg>

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
  );
};

export default NavBar;
