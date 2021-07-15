import { useEffect } from "react";
import WOW from "wowjs";
import "./Form.scss";

const Form = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <div className="formContainer" id="writeToMe">
      <div className="form__heading">
        <h1 className="wow fadeInDown">Write to me</h1>
        <h4 className="wow fadeInDown" data-wow-delay="1s">
          I'd appreciate
        </h4>
      </div>

      <div>
        <div className="form__form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>

        <div className="form__form">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your Email Address"
          />
        </div>

        <div className="form__form">
          <label htmlFor="msg">Your message</label>
          <textarea type="text" id="msg" placeholder="Enter your Message" />
        </div>
      </div>

      <button className="form__btn">Send</button>
    </div>
  );
};

export default Form;
