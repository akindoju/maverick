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
      <div className="stats wow fadeIn" data-wow-delay="0.8s">
        <h1 className="stats__head">293</h1>
        <h4 className="stats__details">Creative Ideas Generated</h4>
      </div>

      <div className="stats wow fadeIn" data-wow-delay="0.4s">
        <h1 className="stats__head">564</h1>
        <h4 className="stats__details">Clients Served</h4>
      </div>

      <div className="stats wow fadeIn">
        <h1 className="stats__head">87</h1>
        <h4 className="stats__details">Projects Completed</h4>
      </div>

      <div className="stats wow fadeIn" data-wow-delay="1.2s">
        <h1 className="stats__head">512</h1>
        <h4 className="stats__details">Hours of Design Excellence</h4>
      </div>
    </div>
  );
};

export default Stats;
