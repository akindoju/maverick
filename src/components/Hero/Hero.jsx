import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import WOW from "wowjs";
import "./Hero.scss";
import Carousel from "../Carousel/Carousel";

const Header = () => {
  // const [currentCount, setCurrentCount] = useState(0);
  // const length = sliderImages.length;

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  // if (!Array.isArray(sliderImages) || length <= 0) {
  //   return null;
  // }

  //creating slideshow
  // setTimeout(() => {
  //   setCurrentCount(currentCount === length - 1 ? 0 : currentCount + 1);
  // }, 3000);

  return (
    <div className="hero">
      <NavBar />
      <Carousel />
    </div>
  );
};

export default Header;
