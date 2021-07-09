import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NavBar from "../NavBar/NavBar";
import "./Header.scss";

const Header = () => {
  const [imageOne, setImageOne] = useState(true);
  const [imageTwo, setImageTwo] = useState(true);
  const [imageThree, setImageThree] = useState(true);

  //function to create slideshow
  useEffect(() => {
    const setImage = () => {
      setTimeout(() => {
        setImageOne(true);
        setImageTwo(false);
        setImageThree(false);
      }, 0);

      setTimeout(() => {
        setImageOne(false);
        setImageTwo(true);
        setImageThree(false);
      }, 7000);

      setTimeout(() => {
        setImageOne(false);
        setImageTwo(false);
        setImageThree(true);
      }, 14000);
    };

    setImage();

    setInterval(() => {
      setImage();
    }, 21000);
  }, []);

  return (
    <TransitionGroup>
      <CSSTransition classNames="transition" timeout={300}>
        <div
          className={
            imageOne
              ? "imageOne"
              : imageTwo
              ? " imageTwo"
              : imageThree
              ? "imageThree"
              : "header"
          }
        >
          <NavBar />
          <div className="header-text-container">
            {imageOne ? (
              <div className="header__text">
                <h1 className="header__text--main">
                  Shoot for <br /> the hoop!
                </h1>
                <h4 className="header__text--sub">
                  Aiming low is not an option.
                </h4>
              </div>
            ) : imageTwo ? (
              <div className="header__text">
                <h1 className="header__text--main">
                  The meaning <br /> of life?
                </h1>
                <h4 className="header__text--sub">to give life meaning.</h4>
              </div>
            ) : imageThree ? (
              <div className="header__text">
                <h1 className="header__text--main">
                  Love for all. <br /> Hatred for none!
                </h1>
              </div>
            ) : (
              <div className="header__text">
                <h1 className="header__text--main">
                  Die with <br /> memories
                </h1>
                <h4 className="header__text--sub">not dreams.</h4>
              </div>
            )}
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Header;
