import { useEffect } from "react";
import WOW from "wowjs";
import "./Stats.scss";

const Stats = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <div className="statsContainer">
      <div className="stats wow fadeIn">
        <h1 className="stats__head">342</h1>
        <h4 className="stats__details">Cups of Coffee</h4>
      </div>

      <div className="stats wow fadeIn" data-wow-delay="0.4s">
        <h1 className="stats__head">756</h1>
        <h4 className="stats__details">Bicycle kilometres</h4>
      </div>

      <div className="stats wow fadeIn" data-wow-delay="0.8s">
        <h1 className="stats__head">419</h1>
        <h4 className="stats__details">Brainstorm sessions</h4>
      </div>

      <div className="stats wow fadeIn" data-wow-delay="1.2s">
        <h1 className="stats__head">284</h1>
        <h4 className="stats__details">Video Hours</h4>
      </div>
    </div>
  );
};

export default Stats;
