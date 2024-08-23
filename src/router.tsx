import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayouts from "@/layouts/AppLayouts";
import DashBoardView from "@/views/DashBoardView";
import CreateProjectView from "./views/projects/CreateProjectView";
import EditProjectView from "./views/projects/EditProjectView";
import ProjectDetailsView from "./views/projects/ProjectDetailsView";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayouts />}>
          <Route path="/" element={<DashBoardView />} index />
          <Route path="/projects/create" element={<CreateProjectView />} />
          <Route path="/projects/:projectId" element={<ProjectDetailsView />} />
          <Route
            path="/projects/:projectId/edit"
            element={<EditProjectView />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
