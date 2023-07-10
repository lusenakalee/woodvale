import React from "react";
import { Outlet } from "react-router-dom";
import ResidentNav from "../../components/ResidentComps/ResidentNav";

function ResidentsRoot() {
  return (
    <React.Fragment>
      <div>
        {" "}
        <ResidentNav />
      </div>

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <Outlet />
      </div>
      </main>
    </React.Fragment>
  );
}

export default ResidentsRoot;
