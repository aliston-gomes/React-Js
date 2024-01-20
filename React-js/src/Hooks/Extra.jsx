import React, { useCallback, useEffect } from "react";

const Extra = ({ data, increment }) => {
  const handleClick = useCallback(() => {
    increment();
  }, [increment]);
  console.log("renderd Extra Component");
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Extra;
