import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import WOW from "wowjs";
import "./Header.scss";

const Header = () => {
  // const [imageOne, setImageOne] = useState(true);
  // const [imageTwo, setImageTwo] = useState(false);
  // const [imageThree, setImageThree] = useState(false);

  //function to create slideshow
  // useEffect(() => {
  //   const setImage = () => {
  //     setTimeout(() => {
  //       setImageOne(true);
  //       setImageTwo(false);
  //       setImageThree(false);
  //     }, 0);

  //     setTimeout(() => {
  //       setImageOne(false);
  //       setImageTwo(true);
  //       setImageThree(false);
  //     }, 7000);

  //     setTimeout(() => {
  //       setImageOne(false);
  //       setImageTwo(false);
  //       setImageThree(true);
  //     }, 14000);
  //   };

  //   setImage();

  //   setInterval(() => {
  //     setImage();
  //   }, 21000);
  // }, []);

  const sliderImages = [
    {
      image:
        "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55299e51264213136f7d6a43_hoop.jpg",
      alt: "basketball hoop",
      imageTextOne: "Shoot for",
      imageTextTwo: "the hoop!",
      imageSubText: "Aiming low is not an option.",
    },

    {
      image:
        "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/5527a395e02754bb57746389_slider1.jpg",
      alt: "mountains",
      imageTextOne: "The meaning",
      imageTextTwo: "of life?",
      imageSubText: "to give life meaning.",
    },

    {
      image:
        "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "city by beach",
      imageTextOne: "Love for all.",
      imageTextTwo: "Hatred for none",
    },
  ];

  const [currentCount, setCurrentCount] = useState(0);
  const length = sliderImages.length;

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  if (!Array.isArray(sliderImages) || length <= 0) {
    return null;
  }

  //creating slideshow
  setTimeout(() => {
    setCurrentCount(currentCount === length - 1 ? 0 : currentCount + 1);
  }, 7000);

  return (
    <div className="header">
      <NavBar />
      <div className="header__slider">
        {sliderImages.map((slide, index) => {
          return (
            <div
              className={index === currentCount ? "slide active " : "slide "}
              key={index}
            >
              {index === currentCount && (
                <div>
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="header__slider--image"
                  />
                  <div className="header__slider--text">
                    <h1 className="header__slider--text--main">
                      {slide.imageTextOne} <br /> {slide.imageTextTwo}
                    </h1>
                    <h4 className="header__slider--text--sub">
                      {slide.imageSubText}
                    </h4>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;

/* <div className="header-text-container">
        {imageOne ? (
          <div className="header__text wow fadeInRight">
            <h1 className="header__text--main">
              Shoot for <br /> the hoop!
            </h1>
            <h4 className="header__text--sub">Aiming low is not an option.</h4>
          </div>
        ) : imageTwo ? (
          <div className="header__text">
            <h1 className="header__text--main">
              The meaning <br /> of life?
            </h1>
            <h4 className="header__text--sub">to give life meaning.</h4>
          </div>
        ) : imageThree ? (
          <div className="header__text ">
            <h1 className="header__text--main">
              Love for all. <br /> Hatred for none!
            </h1>
          </div>
        ) : (
          <div className="header__text wow fadeInRight">
            <h1 className="header__text--main">
              If the world was blind <br /> how many people would you impress?
            </h1>
          </div>
        )}
      </div> */
