import React from "react";
import { getAuthToken } from "../../util/Auth";
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

function MedicalRecordForm({ record, method, title }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();
  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }

  return (
    <React.Fragment>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <Form method={method}></Form>
    </React.Fragment>
  );
}

export default MedicalRecordForm;

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
    resident_id: id,
  };
  let url = "/medical-records";
  if (method === "POST") {
    const response = await fetch(url, {
      method: method,
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
    if (!response.ok) {
      throw json(
        { message: "Failed to save the medical record." },
        { status: 500 }
      );
    }
    return redirect(`/login/residents/${id}/med-recs`);
  }
}
