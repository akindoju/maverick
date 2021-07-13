import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import "./Brief.scss";

const Brief = () => {
  const [isBriefOneVisible, setIsBriefOneVisible] = useState(false);
  const [isBriefTwoVisible, setIsBriefTwoVisible] = useState(false);

  return (
    <div
      className="briefContainer"
      onScroll={() => {
        console.log("true");
      }}
    >
      <div className="brief__item--1" />
      <div className="item__container">
        <ScrollTrigger onEnter={() => setIsBriefOneVisible(true)}>
          <h1
            className={
              isBriefOneVisible ? "item--heading moveInDown" : "item--heading"
            }
          >
            Creative <br /> & Fresh
          </h1>
        </ScrollTrigger>
        <ScrollTrigger onEnter={() => setIsBriefOneVisible(true)}>
          <h4
            className={
              isBriefOneVisible
                ? "item--sub-heading moveInLeft"
                : "item--sub-heading"
            }
          >
            Try new things
          </h4>
        </ScrollTrigger>
        <p className="item--text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sequi
          ipsa reprehenderit accusantium consequuntur harum, alias ea eveniet
          soluta mollitia consectetur assumenda quas expedita at, praesentium
          tenetur quibusdam. Molestias quod laborum, assumenda, nam soluta non
          quibusdam iure, itaque atque facilis numquam debitis cupiditate nulla
          consequuntur temporibus vero voluptatibus fuga maxime dolor?
          Necessitatibus quis unde voluptates libero.
        </p>
        <button className="item--btn">View Portfolio</button>
      </div>

      <div className="item__container">
        <ScrollTrigger onEnter={() => setIsBriefTwoVisible(true)}>
          <h1
            className={
              isBriefTwoVisible ? "item--heading moveInDown" : "item--heading"
            }
          >
            Hip <br /> & Funky
          </h1>
        </ScrollTrigger>
        <ScrollTrigger onEnter={() => setIsBriefTwoVisible(true)}>
          <h4
            className={
              isBriefTwoVisible
                ? "item--sub-heading moveInLeft"
                : "item--sub-heading"
            }
          >
            Be Different
          </h4>
        </ScrollTrigger>
        <p className="item--text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sequi
          ipsa reprehenderit accusantium consequuntur harum, alias ea eveniet
          soluta mollitia consectetur assumenda quas expedita at, praesentium
          tenetur quibusdam. Molestias quod laborum, assumenda, nam soluta non
          quibusdam iure, itaque atque facilis numquam debitis cupiditate nulla
          consequuntur temporibus vero voluptatibus fuga maxime dolor?
          Necessitatibus quis unde voluptates libero.
        </p>
        <button className="item--btn">Our Services</button>
      </div>

      <div className="brief__item--4" />
    </div>
  );
};

export default Brief;
