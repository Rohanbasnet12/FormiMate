import React, { useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/schema";

const Form = () => {
  const onSubmit = () => {
    console.log("Submitted!");
  };

  // Initialize formik with initial form values
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  // State to manage the checkbox/radio button
  const [isChecked, setChecked] = useState(false);

  // Function to handle checkbox/radio button toggle
  const handleRadioBtn = () => {
    setChecked((prevValue) => !prevValue);
  };

  // Function to handle button click
  function handleClick() {
    alert("Button is clicked");
  }

  // Inline style for the form container
  const boxStyle = {
    background: "rgba(255, 255, 255, 0.35)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(9px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "10px",
    border: "2px solid rgba(255, 255, 255, 0.4)",
  };

  return (
    <div id="Form" className="p-4 w-2/6" style={boxStyle}>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-slate-800 text-4xl font-extrabold pb-3">
          Login
        </h1>
        <div className="email-inputField py-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border-b-2 border-black bg-transparent w-full outline-none px-3"
          />
        </div>
        <div className="password-inputField py-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border-b-2 border-black bg-transparent w-full outline-none px-3"
          />
        </div>
        <div className="pass-reset flex justify-between items-center my-3">
          <div className="remember-meSection flex gap-3 items-center">
            <div
              className="check-box border bg-white flex cursor-pointer"
              onClick={handleRadioBtn}
            >
              {isChecked ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                <span className="opacity-0 flex">
                  <i className="fa-solid fa-check"></i>
                </span>
              )}
            </div>
            <p>Remember me</p>
          </div>
          <div className="reset-passSection">
            <p className="cursor-pointer">Forgot Password?</p>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleClick}
          className="w-full bg-slate-800 my-4 py-3 text-white text-xl font-medium rounded-md"
        >
          Login
        </button>
        <p className="w-full text-center text-zinc-800 text-l font-medium">
          Don't have an account?{" "}
          <span className="text-slate-900 font-semibold cursor-pointer">
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Form;
