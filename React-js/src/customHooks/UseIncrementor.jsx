import React, { useEffect, useState } from "react";

const useIncrementor = (forward = true) => {
  const [count, setCount] = useState(7);
  useEffect(() => {
    const interval = setInterval(() => {
      if (forward === true) {
        setCount(prev => prev + 1);
      } else {
        setCount(prev => prev - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [forward]);
  return count;
};

export default useIncrementor;
