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

      <div className="">
        <Outlet />
      </div>
    </React.Fragment>
  );
}

export default ResidentsRoot;
