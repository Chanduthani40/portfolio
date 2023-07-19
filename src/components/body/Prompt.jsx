import React, { useState } from "react";
import Modal from "react-modal";
import "./prompt.css";
import CloseIcon from "@mui/icons-material/Close";
import Forms from "../common/Form";

Modal.setAppElement("#root"); // Set the root element for accessibility

function PromptDialog({ isOpen, onClose, toggleCommentBox }) {
  const [input1, setInput1] = useState("");

  const handleName = (event) => {
    setInput1(event.target.value);
  };

  const handleBox = (event) => {
    console.log("the name is:", input1);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      {/* <button onClick={toggleCommentBox}>
        <CloseIcon />
      </button> */}

      <Forms></Forms>
    </Modal>
  );
}

export default PromptDialog;
