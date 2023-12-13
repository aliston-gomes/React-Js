import { useRef, useState } from "react";

const Refs = () => {
  const [userData, setUserData] = useState({ name: "", pass: "" });
  const userName = useRef();
  const passWord = useRef();
  const getUserData = () => {
    setUserData(() => {
      userData.name = userName.current.value;
      userData.pass = passWord.current.value;
      console.log(userData);
    });
  };
  return (
    <div>
      <input type="text" ref={userName} placeholder="Enter UserName" />
      <input type="text" ref={passWord} placeholder="Enter PassWord" />
      <button onClick={getUserData}>Submit</button>
    </div>
  );
};

export default Refs;
