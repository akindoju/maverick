import "./ThingsToDo.scss";

const ThingsWeDo = () => {
  return (
    <div className="thingsWeDoContainer">
      <div className="thingsWeDo__img" />

      <div className="item__container">
        <h1 className="item--heading">
          Things <br />
          to do
        </h1>
        <h4 className="item--sub-heading">Exist to create</h4>
        <p className="item--text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sequi
          ipsa reprehenderit accusantium consequuntur harum, alias ea eveniet
          soluta mollitia consectetur assumenda quas expedita at, praesentium
          tenetur quibusdam. Molestias quod laborum, assumenda, nam soluta non
          quibusdam iure, itaque atque facilis numquam debitis cupiditate nulla
          consequuntur temporibus vero voluptatibus fuga maxime dolor?
          Necessitatibus quis unde voluptates libero.
        </p>
        <button className="item--btn">Get In Touch</button>
      </div>
    </div>
  );
};

export default ThingsWeDo;
