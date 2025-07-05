import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, MainApp, Register } from "../../pages";

const mainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/*" element={<MainApp />}></Route>
      </Routes>
    </Router>
  );
};

export default mainRoutes;
