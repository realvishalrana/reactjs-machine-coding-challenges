import React from "react";
import useCounter from "../hooks/useCounter";
import CounterHistory from "./CounterHistory";
import DisplayCounter from "./DisplayCounter";

const Counter = () => {
  const props = useCounter();

  const { state } = props;

  return (
    <div className="grid-container">
      <CounterHistory state={state} />
      <DisplayCounter {...props} />
    </div>
  );
};

export default Counter;
