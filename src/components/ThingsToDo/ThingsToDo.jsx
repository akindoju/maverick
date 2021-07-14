import { useEffect } from "react";
import WOW from "wowjs";
import "./ThingsToDo.scss";

const ThingsToDo = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <div className="thingsToDoContainer">
      <div className="thingsToDo">
        <div className="thingsToDo__img" />

        <div className="thingsToDo__details item__container">
          <h1 className="item--heading wow fadeInRight">
            Things <br />
            to do
          </h1>
          <h4 className="item--sub-heading wow fadeInLeft">Exist to create</h4>
          <p className="item--text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            sequi ipsa reprehenderit accusantium consequuntur harum, alias ea
            eveniet soluta mollitia consectetur assumenda quas expedita at,
            praesentium tenetur quibusdam. Molestias quod laborum, assumenda,
            nam soluta non quibusdam iure, itaque atque facilis numquam debitis
            cupiditate nulla consequuntur temporibus vero voluptatibus fuga
            maxime dolor? Necessitatibus quis unde voluptates libero.
          </p>
          <button className="item--btn">Get In Touch</button>
        </div>
      </div>

      <div className="thingsToDo__sub-grid">
        <div className="thingsToDo__sub-grid--1 item__container wow fadeInUp">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="32"
            viewBox="0 0 40 32"
          >
            <title>embed2</title>
            <path d="M26 23l3 3 10-10-10-10-3 3 7 7z"></path>
            <path d="M14 9l-3-3-10 10 10 10 3-3-7-7z"></path>
            <path d="M21.916 4.704l2.171 0.592-6 22.001-2.171-0.592 6-22.001z"></path>
          </svg>

          <h1>Web Design</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            dolor dolorem quos animi similique quod repudiandae eum
            exercitationem nulla sunt, saepe aliquid libero, expedita totam
            molestiae possimus repellat nihil quibusdam?
          </p>
        </div>
        <div
          className="thingsToDo__sub-grid--2 item__container wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>pencil2</title>
            <path d="M12 20l4-2 14-14-2-2-14 14-2 4zM9.041 27.097c-0.989-2.085-2.052-3.149-4.137-4.137l3.097-8.525 4-2.435 12-12h-6l-12 12-6 20 20-6 12-12v-6l-12 12-2.435 4z"></path>
          </svg>

          <h1>Graphic Design</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            dolor dolorem quos animi similique quod repudiandae eum
            exercitationem nulla sunt, saepe aliquid libero, expedita totam
            molestiae possimus repellat nihil quibusdam?
          </p>
        </div>
        <div
          className="thingsToDo__sub-grid--3 item__container wow fadeInUp"
          data-wow-delay="1s"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>business_center</title>
            <path d="M14.016 6.984v-1.969h-4.031v1.969h4.031zM20.016 6.984q0.797 0 1.383 0.609t0.586 1.406v3q0 0.797-0.586 1.406t-1.383 0.609h-6v-2.016h-4.031v2.016h-6q-0.844 0-1.406-0.586t-0.563-1.43v-3q0-0.797 0.586-1.406t1.383-0.609h3.984v-1.969l2.016-2.016h3.984l2.016 2.016v1.969h4.031zM9.984 15.984h4.031v-0.984h6.984v3.984q0 0.844-0.586 1.43t-1.43 0.586h-13.969q-0.844 0-1.43-0.586t-0.586-1.43v-3.984h6.984v0.984z"></path>
          </svg>

          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            dolor dolorem quos animi similique quod repudiandae eum
            exercitationem nulla sunt, saepe aliquid libero, expedita totam
            molestiae possimus repellat nihil quibusdam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThingsToDo;
