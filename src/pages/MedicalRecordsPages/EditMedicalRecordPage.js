import React from "react";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";
import MedicalRecordForm from "../../components/MedicalRecordsComs/MedRecordsForm";

function EditMedicalRecordPage() {
  const record = useRouteLoaderData("med-recs");
  return (
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <MedicalRecordForm
          record={record}
          method="patch"
          title="Edit Care Plan"
        />
      </div>
    </main>
  );
}

export default EditMedicalRecordPage;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();
  const id = params.id;
  const recordData = {
    condition: data.get("condition"),
    allergies: data.get("allergies"),
    medications: data.get("medication"),
    feeding_method: data.get("feeding_method"),
    immunization_records: data.get("immunization_records"),
    physician_contact: data.get("physician_contact"),
  };
  let url = "https://homes-test.onrender.com/medical-records/"+id;
  if (method === "PATCH") {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(recordData),
    });
    if (response.status === 400) {
      return response;
    }
    if (response.status === 404) {
        return response;
      }
    if (!response.ok) {
      throw json(
        { message: "Failed to update the medical record" },
        { status: 500 }
      );
    }
    return redirect(`/login/residents/${id}/med-recs`);
  }
}