import React from "react";
import UserNav from "../../components/UserComps/UserNav";
import { Outlet } from "react-router-dom";

function UserRoot() {
  return (
    <React.Fragment>
      <UserNav />
      <Outlet />
    </React.Fragment>
  );
}

export default UserRoot;
