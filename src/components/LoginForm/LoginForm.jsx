import React, { useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/schema";
import "./LoginForm.css";

const LoginForm = () => {
  const onSubmit = () => {
    alert("Form submitted");
  };

  const { values, handleBlur, handleChange, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  // State to manage password visibility toggle
  const [seePass, setSeePass] = useState(false);
  // State to track if password input has been focused
  const [passwordFocused, setPasswordFocused] = useState(false);

  // Function to handle password input focus
  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  // Function to toggle password visibility
  const handleEyeClick = () => {
    setSeePass((prevState) => !prevState);
  };

  return (
    <div id="Login-Form" className="z-50 py-4 px-5 w-2/6">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-3xl font-extrabold py-4">Login</h1>
        <div className="email-input pt-4">
          <label htmlFor="email">Email</label>
          <div className="border-b-2 border-zinc-600">
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.email && touched.email && (
            <div className="error">
              <p className="text-red-500 pt-1">{errors.email}</p>
            </div>
          )}
        </div>
        <div className="password-input py-4">
          <label htmlFor="password">Password</label>
          <div className="flex border-b-2 border-zinc-600">
            <input
              type={seePass ? "text" : "password"}
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handlePasswordFocus}
            />
            {/* Conditionally render eye icon if password input is focused */}
            {passwordFocused && (
              <span onClick={handleEyeClick} className="cursor-pointer">
                {seePass ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </span>
            )}
          </div>
          {errors.password && touched.password && (
            <div className="error">
              <p className="text-red-500 pt-1">{errors.password}</p>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-slate-800 text-white font-medium text-xl rounded-md py-2 my-5"
        >
          Login
        </button>

        <p className="text-center w-full font-medium text-md">
          Don't have an account?{" "}
          <span className="font-bold cursor-pointer">Register</span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
