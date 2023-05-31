import NavBar from "../NavBar/NavBar";
import "./Hero.scss";
import Carousel from "../Carousel/Carousel";

const Header = () => {
  return (
    <div className="container">
      <div className="hero">
        <NavBar />
        <Carousel />
      </div>
    </div>
  );
};

export default Header;
