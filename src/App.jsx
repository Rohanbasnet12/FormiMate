import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Background from "./components/Background/Background";
import LoginForm from "./components/LoginForm/LoginForm";
import SuccessPopUp from "./components/SuccessPopUp/SuccessPopUp";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginForm />,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/register",
      element: <RegisterForm />,
    },
  ]);

  return (
    <div>
      <Background />
      <div className="form-wrapper flex items-center justify-center w-full h-screen">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
