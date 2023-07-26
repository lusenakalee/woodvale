import React from "react";
import AttachmentNav from "../../components/AttachmentComps/AttachmentNav";
import { Outlet } from "react-router-dom";
import AllAttachmentsPage from "./AllAttachmentsPage";

function AttachmentRoot() {
  return (
    <React.Fragment>
      <AttachmentNav />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Outlet/>
          <AllAttachmentsPage />
        </div>
      </main>
    </React.Fragment>
  );
}

export default AttachmentRoot;
