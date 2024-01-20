import React, { createContext, useState } from "react";

export const Context = createContext();
const ContextStore = ({ children }) => {
  const [name, setName] = useState("aliston");
  const change_Name = () => {
    setName("Priyanka");
  };
  return (
    <Context.Provider value={{ setName, name, change_Name }}>
      {children}
    </Context.Provider>
  );
};

export default ContextStore;
