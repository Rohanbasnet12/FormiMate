import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Background from "./components/Background/Background";
import LoginForm from "./components/LoginForm/LoginForm";
import SuccessPopUp from "./components/SuccessPopUp/SuccessPopUp";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleContinue = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Background />
      <div className="form-wrapper flex items-center justify-center w-full h-screen">
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <SuccessPopUp onContinue={handleContinue} />
              ) : (
                <LoginForm onLoginSuccess={handleLoginSuccess} />
              )
            }
          />
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <SuccessPopUp onContinue={handleContinue} />
              ) : (
                <LoginForm onLoginSuccess={handleLoginSuccess} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
