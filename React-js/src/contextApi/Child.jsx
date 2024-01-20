import React, { useContext } from "react";
import ContextStore, { Context } from "./ContextStore";

const Child = () => {
  const { name, change_Name } = useContext(Context);

  return (
    <div>
      <p>{name}</p>
      <button onClick={change_Name}>Change Name</button>
    </div>
  );
};

export default Child;
