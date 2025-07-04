import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "../../pages";

const mainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default mainRoutes;
