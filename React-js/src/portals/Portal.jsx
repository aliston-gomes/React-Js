import { useState } from "react";
import ReactDom from "react-dom";
const Portal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openPortal = () => {
    setModalOpen(!isModalOpen);
  };
  const poralElement = document.getElementById("my-portal");
  //todo  ACTUAL MODAL
  const Modal = () => {
    return (
      <section
        style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          right: "0",
          left: "0",
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "6",
          background: "rgba(247, 247, 247, 0.05)",
        }}
      >
        <div
          style={{
            height: "20vh",
            width: "30vw",
            background: "#efefef",
            borderRadius: "9px",
          }}
        >
          <h1>This Is a modal created by Portal</h1>
          <button onClick={openPortal}>Close Modal</button>
        </div>
      </section>
    );
  };
  return (
    <div>
      {isModalOpen &&
        ReactDom.createPortal(<Modal modal={openPortal} />, poralElement)}
      <button onClick={openPortal}>Open Portal</button>
    </div>
  );
};

export default Portal;
