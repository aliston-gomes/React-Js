import React, { useReducer } from "react";

const UseReducer = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{count}</h1>
      <button
        type="button"
        onClick={() => {
          dispatch("increment");
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch("decrement");
        }}
      >
        -
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch("reset");
        }}
      >
        {" "}
        0{" "}
      </button>
    </div>
  );
};

export default UseReducer;
