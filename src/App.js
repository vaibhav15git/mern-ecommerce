import React from "react";

import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./features/auth/components/Login";
import SignupPage from "./pages/SignupPage";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <LoginPage/> */}
      {/* <SignupPage/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
