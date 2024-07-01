import React from "react";
import { Link } from "react-router-dom";
import "./SuccessPop.css";

const SuccessPopUp = ({ successMessage, route }) => {
  return (
    <div
      id="success-popUp"
      className="z-50 w-2/6 h-4/6 bg-white flex flex-col rounded-xl overflow-hidden"
    >
      <div className="top w-full h-full bg-green-400 flex flex-col gap-5 items-center justify-center">
        <div className="rounded-full border-2 border-white flex items-center justify-center w-[60px] h-[60px]">
          <i className="fa-solid fa-check text-5xl font-extrabold text-white"></i>
        </div>
        <h1 className="text-3xl font-bold text-white">Success</h1>
      </div>
      <div className="bottom w-full h-full">
        <p className="py-4 px-5 text-center font-medium text-xl">
          {successMessage}
        </p>
        <div className="continue-btn w-full flex items-center justify-center pt-4">
          <Link to={route}>
            <button className="bg-orange-600 py-2 px-5 rounded-full text-white font-medium text-xl">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopUp;
