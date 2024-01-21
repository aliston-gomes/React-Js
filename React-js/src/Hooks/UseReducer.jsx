import React, { useReducer } from "react";

const UseReducer = () => {
  const initialCount = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        if (state > 0) {
          return state - 1;
        } else {
          return (state = 0);
        }
      case "reset":
        return (state = initialCount);
      default:
        return (state = "0");
    }
  };
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <React.Fragment>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Incremen
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
    </React.Fragment>
  );
};
export default UseReducer;
