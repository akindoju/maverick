import { useEffect, useState, useRef } from "react";
import WOW from "wowjs";
import "./Contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const emailHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vvu3zrl",
        "template_molc9ut",
        form.current,
        "9gXZ5j3SZnCA-h5Zp"
      )
      .then(
        (result) => {
          setIsDisabled(false);
          if (result.text === "OK") {
            setIsSuccessful(true);
            form.current.reset();

            const timeout = setTimeout(() => {
              setIsSuccessful(false);
            }, 3000);

            return () => clearTimeout(timeout);
          }
        },
        () => {
          setIsFailed(true);
          setIsDisabled(false);
        }
      );
  };

  return (
    <div className="container">
      <div className="contact" id="contact">
        <div className="contact__heading">
          <h1 className="wow fadeInDown">Contact Us</h1>
          <h4 className="wow fadeInDown" data-wow-delay="1s">
            Let's connect!
          </h4>
        </div>

        <div className="contact__msg">
          {isSuccessful ? (
            <p className="contact__msg--success">Message sent!</p>
          ) : isFailed ? (
            <p className=" contact__msg--failed">Oops! Something went wrong</p>
          ) : (
            <p className=" contact__msg--failed" />
          )}
        </div>

        <form
          ref={form}
          onSubmit={(e) => {
            setIsDisabled(true);
            emailHandler(e);
          }}
          className="contact__form"
        >
          <div className="contact__form--wrapper">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className="contact__form--wrapper">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" />
          </div>

          <div className="contact__form--wrapper">
            <label htmlFor="msg">Your message</label>
            <textarea name="message" />
          </div>

          <input
            type="submit"
            className="contact__form--btn"
            value="Send"
            disabled={isDisabled}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
