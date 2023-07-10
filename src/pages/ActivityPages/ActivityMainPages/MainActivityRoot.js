import React from "react";
import ActivityMainNav from "../../../components/ActivityComps/ActivityMainNav";
import { Outlet } from "react-router-dom";

function MainActivityRoot() {
  return (
    <React.Fragment>
      <ActivityMainNav />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </React.Fragment>
  );
}

export default MainActivityRoot;
