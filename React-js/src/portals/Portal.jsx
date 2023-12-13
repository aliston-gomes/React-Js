import { useState } from "react";
import ReactDom from "react-dom";

const Portal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(prev_state => !prev_state);
  };
  const ModalElement = document.getElementById("my-portal");
  const Modal = props => {
    console.log(props.modalData);
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          background: "#2d4f45",
        }}
      >
        <h1>This is a Modal created by portal</h1>
        <button onClick={props.modalData}>Close Modal</button>
      </div>
    );
  };
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen == true &&
        ReactDom.createPortal(<Modal modalData={openModal} />, ModalElement)}
    </div>
  );
};

export default Portal;
