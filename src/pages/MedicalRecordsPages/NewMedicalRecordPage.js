import React from "react";
import MedicalRecordForm from "../../components/MedicalRecordsComs/MedRecordsForm";


function NewMedicalRecordPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <MedicalRecordForm method="post" title="New Care Plan" />
      </div>
    </main>
  );
}

export default NewMedicalRecordPage;