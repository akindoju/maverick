import "./Stats.scss";

const Stats = () => {
  return (
    <div className="statsContainer">
      <div className="stats">
        <h1 className="stats__head">342</h1>
        <h4 className="stats__details">Cups of Coffee</h4>
      </div>

      <div>
        <h1 className="stats__head">756</h1>
        <h4 className="stats__details">Bicycle kilometres</h4>
      </div>

      <div>
        <h1 className="stats__head">419</h1>
        <h4 className="stats__details">Brainstorm sessions</h4>
      </div>

      <div>
        <h1 className="stats__head">284</h1>
        <h4 className="stats__details">Video Hours</h4>
      </div>
    </div>
  );
};

export default Stats;
