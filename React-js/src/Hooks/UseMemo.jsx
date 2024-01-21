import { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [minusCount, setMinusCount] = useState(100);
  const multipliedCount = useMemo(() => {
    console.log("MULTIPLIED FUNCTION CALLED");
    return count * 100;
  }, [count]);
  return (
    <div>
      <h1>Count:{count}</h1>
      <br />
      <h1>Minus Count:{minusCount}</h1>
      <br />
      <h1>Multiplied Count:{multipliedCount}</h1>
      <br />
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          ADD
        </button>
        <button
          onClick={() => {
            setMinusCount(minusCount - 1);
          }}
        >
          SUB
        </button>
      </div>
    </div>
  );
};

export default UseMemo;
