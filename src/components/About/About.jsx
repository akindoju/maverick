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
      <div className="about__title">
        <p>About</p>
        <span className={`about__title--${turn}`}>Maverick</span>
      </div>

      <p className="about__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        dolorem, vel error doloremque hic eaque quis, esse ratione fuga
        repellendus rerum ullam saepe, a deserunt exercitationem facilis ducimus
        ipsa cum molestiae qui distinctio quidem soluta? Architecto
        reprehenderit molestiae nesciunt delectus!
      </p>
    </div>
  );
};

export default About;
