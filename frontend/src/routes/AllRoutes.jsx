import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home_Page } from "../pages/Home_Page";
import { Jobs_Page } from "../pages/Jobs_Page";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home_Page />}></Route>
      <Route path="/jobs" element={<Jobs_Page />}></Route>
    </Routes>
  );
};
