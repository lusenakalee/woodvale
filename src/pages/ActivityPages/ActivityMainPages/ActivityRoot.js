import React from "react";
import ActivityNav from "../../../components/ActivityComps/ActivityNav";
import { Outlet } from "react-router-dom";

function ActivityRoot() {
  return (
    <React.Fragment>
      <ActivityNav />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </React.Fragment>
  );
}

export default ActivityRoot;
