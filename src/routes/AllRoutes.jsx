import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import CartPage from "../pages/CartPage";
import Checkout from "../pages/Checkout";
import ProductDetailPage from "../pages/ProductDetailPage";

const ALlRoutes = () => {
  return (
    <div>
      {/* <Home/> */}
      {/* <LoginPage/> */}
      {/* <SignupPage/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
};

export default ALlRoutes;
