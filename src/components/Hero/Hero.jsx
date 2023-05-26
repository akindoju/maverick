import NavBar from "../NavBar/NavBar";
import "./Hero.scss";
import Carousel from "../Carousel/Carousel";

const Header = () => {
  return (
    <div className="hero">
      <NavBar />
      <Carousel />
    </div>
  );
};

export default Header;
