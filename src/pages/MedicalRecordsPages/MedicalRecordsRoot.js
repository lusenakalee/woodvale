import React from "react";
import { Outlet } from "react-router-dom";
import MedRecordsNav from "../../components/MedicalRecordsComs/MedRecordsNav";

function MedRecRoot() {
  return (
    <React.Fragment>
      <MedRecordsNav />

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </React.Fragment>
  );
}

export default MedRecRoot;
