// import { useRef } from "react";
import React from "react";
import { init, Form,FormContext } from "@feathery/react";

const Forms = () => {
  init("e95b0179-7c5d-4996-9a89-4fe863088e99");
  const value = (event) => {
    console.log(event.target.value)
  }

  return <Form formName="contact" OnClick={value} />;
};

export default Forms;

