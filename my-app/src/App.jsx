import Histogram from "./Histogram";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="balance">
          My balance <span className="amount">$921.48</span>
        </div>
        <svg
          className="logo"
          width="72"
          height="48"
          viewBox="0 0 72 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <circle fill="#382314" cx="48" cy="24" r="24" />
            <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
          </g>
        </svg>
      </div>
      <div className="chart-card-container">
        <h1>Spending - Last 7 days</h1>
        <div className="chart-container">
          <Histogram />
        </div>
        <hr />
        <div className="chart-card-footer">
          <div className="total-wastes">
            Total this month <br /> <span className="tital-price">$478.33</span>
          </div>
          <div className="total-last-moth">
            <span style={{ color: "hsl(25, 47%, 15%)", fontWeight: "700" }}>
              +2.4%
            </span>{" "}
            <br /> from last month
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
