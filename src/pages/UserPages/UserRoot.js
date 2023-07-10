import React from "react";
import UserNav from "../../components/UserComps/UserNav";
import { Outlet } from "react-router-dom";

function UserRoot() {
  return (
    <React.Fragment>
      <UserNav />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </React.Fragment>
  );
}

export default UserRoot;
