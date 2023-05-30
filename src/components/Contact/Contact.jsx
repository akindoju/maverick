import { useEffect, useState, useRef } from "react";
import WOW from "wowjs";
import "./Contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const emailHandler = (e) => {
    e.preventDefault();

    console.log({ form: form.current });

    emailjs
      .sendForm(
        "service_vvu3zrl",
        "template_molc9ut",
        form.current,
        "9gXZ5j3SZnCA-h5Zp"
      )
      .then(
        (result) => {
          console.log({ result });
        },
        (error) => {
          console.log({ error });
        }
      );
  };

  return (
    <div className="contact" id="writeToMe">
      <div className="contact__heading">
        <h1 className="wow fadeInDown">Contact Us</h1>
        <h4 className="wow fadeInDown" data-wow-delay="1s">
          Let's connect!
        </h4>
      </div>

      {/* <p className="contact__msg">Message sent!</p> */}

      <form ref={form} onSubmit={emailHandler} className="contact__form">
        <div className="contact__form--contact">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>

        <div className="contact__form--contact">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" />
        </div>

        <div className="contact__form--contact">
          <label htmlFor="msg">Your message</label>
          <textarea name="message" />
        </div>

        <input type="submit" className="contact__form--btn" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
