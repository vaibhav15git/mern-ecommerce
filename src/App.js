import React from "react";

import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./features/auth/components/Login";
import SignupPage from "./pages/SignupPage";


function App() {
  return (
    <div className="App">
      <Home/>
      <LoginPage/>
      {/* <SignupPage/> */}
    </div>
  );
}

export default App;
