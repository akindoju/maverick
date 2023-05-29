import { useEffect, useState } from "react";
import "./About.scss";

const About = () => {
  const [turn, setTurn] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (turn === 4) {
        setTurn(1);
      } else {
        setTurn((turn) => turn + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [turn]);

  return (
    <div className="about">
      <p className="about__title">About Us</p>

      <p className="about__text">
        Who are we? We are a dedicated team of tech aficionados and design
        experts on a mission to revolutionize the digital landscape. At
        Maverick, we bring together the power of cutting-edge technology and the
        artistry of design to create remarkable online experiences. Think of us
        as the Justice League of the digital world, combining our skills and
        expertise to tackle any challenge that comes our way.
      </p>

      <p className="about__text">
        Our mission is to harness the latest technologies, wield the tools of
        design, and weave a touch of magic into each digital masterpiece we
        create. From crafting sleek websites that captivate your audience to
        developing robust software solutions that streamline your operations,
        we're here to make your digital dreams a reality.
      </p>

      <p className="about__text">
        But it's not all about the work. We're a team that knows how to have fun
        too. You might catch us engaging in friendly debates or organizing
        thrilling office trivia inspired by random topics.
      </p>

      <p className="about__text">
        So, whether you're a small startup venturing into the digital frontier
        or an established enterprise seeking to elevate your online presence,
        join forces with us. Together, we'll embark on a digital adventure that
        will leave a lasting impact in the ever-evolving world of technology.
      </p>
    </div>
  );
};

export default About;
