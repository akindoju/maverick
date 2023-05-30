import { useEffect } from "react";
import WOW from "wowjs";
import "./Services.scss";

const Services = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <div className="services" id="services">
      <h1 className="services__title">Our Services</h1>

      <div className="services__sub-grid">
        <div className="services__sub-grid--item services__sub-grid--item-1 wow fadeInUp">
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

          <h1>Software Development</h1>
          <p>
            We specialize in creating custom software solutions tailored to your
            unique needs. From web applications to mobile apps, with us, you'll
            have a product that's as smooth and user-friendly as a well-designed
            game level — no cheat codes needed!
          </p>
        </div>

        <div
          className="services__sub-grid--item services__sub-grid--item-2 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          {/* <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>pencil2</title>
            <path d="M12 20l4-2 14-14-2-2-14 14-2 4zM9.041 27.097c-0.989-2.085-2.052-3.149-4.137-4.137l3.097-8.525 4-2.435 12-12h-6l-12 12-6 20 20-6 12-12v-6l-12 12-2.435 4z"></path>
          </svg> */}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>connect_without_contact</title>
            <path d="M11.016 14.016h-2.016q0-1.875 0.703-3.516t1.945-2.859 2.859-1.922 3.492-0.703v1.969q-1.453 0-2.719 0.563t-2.227 1.523-1.5 2.227-0.539 2.719zM18 11.016v-2.016q-1.359 0-2.508 0.68t-1.828 1.805-0.68 2.531h2.016q0-0.844 0.398-1.523t1.078-1.078 1.523-0.398zM6.984 3.984q0-0.797-0.586-1.383t-1.383-0.586q-0.844 0-1.43 0.586t-0.586 1.383q0 0.844 0.586 1.43t1.43 0.586q0.797 0 1.383-0.586t0.586-1.43zM11.438 4.5h-1.969q-0.188 1.078-1.008 1.781t-1.945 0.703h-3q-0.656 0-1.078 0.445t-0.422 1.055v2.531h6v-2.297q1.359-0.422 2.32-1.57t1.102-2.648zM18.984 17.016q0.844 0 1.43-0.586t0.586-1.43-0.586-1.43-1.43-0.586q-0.797 0-1.383 0.586t-0.586 1.43 0.586 1.43 1.383 0.586zM20.484 18h-3q-1.125 0-1.945-0.727t-1.008-1.758h-1.969q0.141 1.5 1.102 2.648t2.32 1.57v2.25h6v-2.484q0-0.609-0.422-1.055t-1.078-0.445z"></path>
          </svg>

          <h1>Virtual Collaboration</h1>
          <p>
            Digital Connections, Real Results: Say goodbye to handshakes and
            hello to high-fives in the digital realm. Our contactless networking
            services bring people together from afar, creating meaningful
            connections without the need for physical contact.
          </p>
        </div>

        <div
          className="services__sub-grid--item services__sub-grid--item-3 wow fadeInUp"
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

          <h1>Branding & Identity</h1>
          <p>
            We help businesses build a strong and memorable brand identity. Our
            branding experts work closely with you to develop a cohesive brand
            strategy, including logo design, brand guidelines, and messaging
            that resonates with your target audience. Let us work our magic, and
            your message will be as addictive as the latest viral trend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
