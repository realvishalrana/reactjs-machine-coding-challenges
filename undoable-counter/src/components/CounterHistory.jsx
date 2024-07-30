import React from "react";

const CounterHistory = ({ state }) => {
  return (
    <div className="scrollbar">
      <h2>History</h2>
      <ul>
        {state.history.length > 0
          ? state.history.map((entry, index) => <li key={index}>{entry}</li>)
          : "-"}
      </ul>
    </div>
  );
};

export default CounterHistory;
