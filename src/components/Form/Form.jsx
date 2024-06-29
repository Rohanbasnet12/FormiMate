import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  function handleClick() {
    alert("Button is clicked");
  }

  // Variable that holds property to make my form background
  const boxStyle = {
    background: "rgba(255, 255, 255, 0.35)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(9px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "10px",
    border: "2px solid rgba(255, 255, 255, 0.4)",
  };

  return (
    <div id="Form" className="p-4 w-2/6 h-3/5" style={boxStyle}>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-slate-800 text-4xl font-extrabold pb-3">
          Login
        </h1>
        <div className="email-inputField">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-b-2 border-black bg-transparent w-full"
          />
        </div>
        <div className="password-inputField">
          <label htmlFor="password">Email</label>
          <input
            type="text"
            name="password"
            id="password"
            className="border-b-2 border-black bg-transparent w-full"
          />
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
