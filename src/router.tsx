import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayouts from "./layouts/AppLayouts";
import DashBoardView from "./views/DashBoardView";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayouts />}>
          <Route path="/" element={<DashBoardView />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
