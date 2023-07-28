import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import Checkout from "./pages/Checkout";




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
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
