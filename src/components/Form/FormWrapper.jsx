import React from "react";
import Form from "./Form.jsx";

const FormWrapper = () => {
  return (
    <div
      id="Form-wrapper"
      className="w-full h-screen flex items-center justify-center fixed top-0 left-0"
    >
      <Form />
    </div>
  );
};

export default FormWrapper;
