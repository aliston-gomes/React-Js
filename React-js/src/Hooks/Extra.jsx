import { memo, useMemo } from "react";

const Extra = ({ state }) => {
  let statx = useMemo(() => {}, []);
  console.log("renderd Child Component");
  return (
    <div>
      <h1>{state}</h1>
    </div>
  );
};

export default memo(Extra);
Extra.defaultProps = { state: "asd" };
