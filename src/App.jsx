import "./App.css";
import Background from "./components/Background/Background";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <>
      <Background />
      <div className="form-wrapper flex items-center justify-center w-full h-screen">
        <LoginForm />
      </div>
    </>
  );
}

export default App;
