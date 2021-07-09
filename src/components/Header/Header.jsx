import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.scss";

const Header = () => {
  const [imageOne, setImageOne] = useState(true);
  const [imageTwo, setImageTwo] = useState(false);
  const [imageThree, setImageThree] = useState(false);

  return (
    <div
      className={
        imageOne
          ? "imageOne "
          : imageTwo
          ? " imageTwo "
          : imageThree
          ? "  imageThree "
          : "header"
      }
    >
      <NavBar />
      <div className="header-text-container">
        <div className="header__text">
          <h1 className="header__text--main">
            Shoot for <br /> the hoop!
          </h1>
          <h4 className="header__text--sub">Aiming low is not an option.</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
