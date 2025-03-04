import React, { useState } from "react";
import "./RegisterForm.css";
import { useFormik } from "formik";
import { registrationSchema } from "../../schemas/RegistrationSchema";
import PasswordInput from "../PasswordInput/PasswordInput";
import { Link } from "react-router-dom";
import SuccessPopUp from "../SuccessPopUp/SuccessPopUp"; // Import SuccessPopUp component

/**
 * RegisterForm component renders a registration form using Formik for form state management and validation.
 */
const RegisterForm = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSuccessMessage(
      "Congratulations! Your account has been successfully created!"
    );
    actions.resetForm();
  };

  // Destructure formik helpers and state values
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
      },
      validationSchema: registrationSchema,
      onSubmit,
    });

  return (
    <>
      {successMessage ? (
        <SuccessPopUp successMessage={successMessage} route={"/"} />
      ) : (
        <div id="Register-Form" className="z-40 py-4 px-6 w-2/6">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center text-4xl font-bold py-4">Register</h1>
            <div className="username">
              <label htmlFor="username">Username</label>
              <div className="border-b-2 border-zinc-600">
                <input
                  type="text"
                  value={values.username}
                  id="username"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.username && touched.username && (
                <div className="error">
                  <p className="text-red-500 pt-1">{errors.username}</p>
                </div>
              )}
            </div>
            <div className="email pt-3">
              <label htmlFor="email">Email</label>
              <div className="border-b-2 border-zinc-600">
                <input
                  type="text"
                  value={values.email}
                  id="email"
                  name="email"
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
              Register
            </button>
            <p className="text-center w-full font-medium text-md">
              Already have an account?
              <Link to="/login">
                <span className="font-bold cursor-pointer"> Login</span>
              </Link>
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default RegisterForm;
