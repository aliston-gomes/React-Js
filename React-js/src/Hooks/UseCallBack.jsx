import React, { useCallback, useEffect, useState } from "react";
import Extra from "./Extra";

const UseCallBack = () => {
  //   console.log("component Rendered");
  const [bg, setBG] = useState(false);
  const [number, setNumber] = useState(0);
  useEffect(() => {}, []);
  const increment = useCallback(() => {
    setNumber(prev => prev + 1);
  }, []);
 const handleIncrement = useCallback(() => {
   increment();
 }, [increment]);
  const toggleBG = useCallback(() => {
    setBG(prev => !prev);
  }, []);
  return (
    <div style={{ background: bg ? "red" : "green", height: "20vh" }}>
      <Extra data={"hello"} increment={handleIncrement} />
      <h1>{number}</h1>
      <button onClick={toggleBG}>Toggle BG</button>
      <button onClick={increment}>Increment Number</button>
    </div>
  );
};

export default UseCallBack;
