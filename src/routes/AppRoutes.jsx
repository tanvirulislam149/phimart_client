import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="products" element={<Products />} /> */}
        {/* <Route path="about" element={<About />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
