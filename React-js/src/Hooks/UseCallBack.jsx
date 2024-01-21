import { useCallback, useState } from "react";
import Extra from "./Extra";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [Minuscount, setMinuscount] = useState(100);
  const testFunction = useCallback(() => {
    console.log("op");
  }, [count]);
  return (
    <div>
      <Extra testFunction={testFunction} state={count} />
      <h1>Count:{count}</h1>
      <h1>Minus-Count :{Minuscount}</h1>
      <div>
        <button
          onClick={() => {
            setCount(prev => prev + 1);
          }}
        >
          Increment Count
        </button>
        <button
          onClick={() => {
            setMinuscount(prev => prev - 1);
          }}
        >
          Decrement Count
        </button>
      </div>
    </div>
  );
};

export default UseCallBack;
