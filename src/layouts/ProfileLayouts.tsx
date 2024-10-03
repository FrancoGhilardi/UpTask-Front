import Tabs from "@/components/profile/Tabs";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const ProfileLayouts: React.FC = () => {
  return (
    <Fragment>
      <Tabs />
      <Outlet />
    </Fragment>
  );
};
export default ProfileLayouts;
