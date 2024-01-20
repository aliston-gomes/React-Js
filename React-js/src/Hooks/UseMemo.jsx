import React, { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const func = n => {
    for (let i = n; i < 10000; i++) {
      console.log("Processing");
    }
  };
  const Loop = useMemo(() => {
    return func(number);
  }, [number]);
  const [isTrue, setIsTrue] = useState(false);
  return (
    <div style={{ background: isTrue ? "red" : "green" }}>
      <input
        type="number"
        onChange={e => {
          setNumber(e.target.value);
          console.log(number);
        }}
      />
      <div>{Loop}</div>
      <button
        type="submit"
        value={number}
        onClick={() => {
          setIsTrue(prev => !prev);
        }}
      >
        Button
      </button>
    </div>
  );
};

export default UseMemo;
