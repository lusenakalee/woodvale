import React from "react";
import AttachmentNav from "../../components/AttachmentComps/AttachmentNav";
import { Outlet } from "react-router-dom";

function AttachmentRoot() {
  return (
    <React.Fragment>
      <AttachmentNav />
      <Outlet />
    </React.Fragment>
  );
}

export default AttachmentRoot;
