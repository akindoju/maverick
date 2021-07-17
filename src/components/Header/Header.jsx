import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import WOW from "wowjs";
import "./Header.scss";

const Header = () => {
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
  }, 700000);

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
