import { useEffect } from "react";
import WOW from "wowjs";
import "./Preview.scss";
import Stats from "../Stats/Stats";
import services from "../../Images/services.webp";
import contact from "../../Images/contact.jpeg";

const Preview = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <div className="previewContainer">
      <div className="preview">
        {/* <div className="preview__item--1" /> */}
        <img
          src={services}
          alt="book on desk"
          className="preview__img preview__img--1"
        />

        <div className="preview__item--container">
          <h1 className="preview__item--heading wow fadeInDown">
            Creative <br /> & Fresh
          </h1>
          <h4 className="preview__item--sub-heading wow fadeInLeft">
            Try new things
          </h4>
          <p className="preview__item--text">
            Unleash your creativity with fresh ideas. Our portfolio showcases
            captivating designs and innovative experiences that leave a lasting
            impression. From stunning visuals to seamless user interfaces, we
            bring a unique perspective to every project. Step into a world of
            creativity. Let's make something remarkable together.
          </p>
          <button className="preview__item--btn">Our Services</button>
        </div>
      </div>

      <Stats />

      <div className="preview">
        <div className="preview__item--container">
          <h1 className="preview__item--heading wow fadeInUp">
            Things <br />
            to do
          </h1>
          <h4 className="preview__item--sub-heading wow fadeInLeft">
            Exist to create
          </h4>
          <p className="preview__item--text">
            Discover endless possibilities and embark on remarkable journeys. At
            Maverick, we believe in the power of creation. Our passion is to
            curate extraordinary experiences that inspire and captivate. From
            stunning visuals to immersive designs, we craft moments that leave a
            lasting impression. With a focus on pushing boundaries and embracing
            innovation, we exist to create. Step into a world of limitless
            potential. Let's bring your ideas to life.
          </p>
          <button className="preview__item--btn">Get In Touch</button>
        </div>

        <img
          src={contact}
          alt="staffs in a meeting"
          className="preview__img preview__img--2"
        />
        {/* <div className="preview__item--2" /> */}
      </div>
    </div>
  );
};

export default Preview;
