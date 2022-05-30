import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import AllCategory from "../pages/AllCategory";
import User from "../pages/User";
import Cart from "../pages/Cart";
import Product from "../pages/Product";

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" index element={<Home />} />
      <Route path="/category" element={<AllCategory />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/settings" element={<User />}></Route>
      <Route path="/product" element={<Product />}></Route>
    </Routes>
  );
}
