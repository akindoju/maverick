import "./Brief.scss";

const Brief = () => {
  return (
    <div className="briefContainer">
      <div className="brief__item--1" />
      <div className="brief__item--2">
        <h1 className="brief__item--heading">
          Creative <br /> & Fresh
        </h1>
        <h4 className="brief__item--sub-heading">Our digital agency</h4>
        <p className="brief__item--text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sequi
          ipsa reprehenderit accusantium consequuntur harum, alias ea eveniet
          soluta mollitia consectetur assumenda quas expedita at, praesentium
          tenetur quibusdam. Molestias quod laborum, assumenda, nam soluta non
          quibusdam iure, itaque atque facilis numquam debitis cupiditate nulla
          consequuntur temporibus vero voluptatibus fuga maxime dolor?
          Necessitatibus quis unde voluptates libero.
        </p>
        <button className="brief__item--btn">View Portfolio</button>
      </div>

      <div className="brief__item--3">
        <h1 className="brief__item--heading">
          Hip <br /> & Funky
        </h1>
        <h4 className="brief__item--sub-heading">Try new things</h4>
        <p className="brief__item--text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sequi
          ipsa reprehenderit accusantium consequuntur harum, alias ea eveniet
          soluta mollitia consectetur assumenda quas expedita at, praesentium
          tenetur quibusdam. Molestias quod laborum, assumenda, nam soluta non
          quibusdam iure, itaque atque facilis numquam debitis cupiditate nulla
          consequuntur temporibus vero voluptatibus fuga maxime dolor?
          Necessitatibus quis unde voluptates libero.
        </p>
        <button className="brief__item--btn">Our Services</button>
      </div>

      <div className="brief__item--4" />
    </div>
  );
};

export default Brief;
