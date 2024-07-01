import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/schema";
import PasswordInput from "../PasswordInput/PasswordInput";
import "./LoginForm.css";

const LoginForm = ({ onLoginSuccess }) => {
  const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 500));
    actions.resetForm();
    onLoginSuccess(); // Call the function passed via props to indicate a successful login
  };

  // Destructure formik helpers and state values
  const { values, handleBlur, handleChange, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  // Redirect user to Register form page
  function handleRegisterRender() {}

  return (
    <div id="Login-Form" className="z-40 py-4 px-6 w-2/6">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-4xl font-bold py-4">Login</h1>
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
        <PasswordInput
          value={values.password}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.password}
          touched={touched.password}
        />
        <button
          type="submit"
          className="w-full bg-slate-800 text-white font-medium text-xl rounded-md py-2 my-5"
        >
          Login
        </button>
        <p className="text-center w-full font-medium text-md">
          Don't have an account?
          <span
            className="font-bold cursor-pointer"
            onClick={handleRegisterRender}
          >
            {" "}
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
