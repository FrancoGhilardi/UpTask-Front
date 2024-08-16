import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const AppLayouts: React.FC = () => {
  return (
    <Fragment>
      <div>haolaaa</div>
      <Outlet />
    </Fragment>
  );
};

export default AppLayouts;
