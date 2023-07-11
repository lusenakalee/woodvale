import React from "react";
import { getAuthToken } from "../../util/Auth";
import { Form, json, redirect } from "react-router-dom";

function NewIncidentForm({ method, incident }) {
  return (
    <React.Fragment>
      <Form method={method}></Form>
    </React.Fragment>
  );
}

export default NewIncidentForm;
export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();
  const id = params.id;
  const incidentData = {
    incident_date: data.get("incident_date"),
    description: data.get("description"),
    actions_taken: data.get("actions_taken"),
    location: data.get("location"),
    person_reporting: data.get("person_reporting"),
    person_notified: data.get("person_notified"),
    witnesses: data.get("witnesses"),
    antecedent: data.get("antecedent"),
    resident_id: id,
  };
  let url = "/incident-reports";
  if (method === "POST") {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(incidentData),
    });
    if (response.status === 400) {
      return response;
    }
    if (!response.ok) {
      throw json({ message: "Failed to save the incident" }, { status: 500 });
    }
    return redirect(`/login/residents/${id}/incidents`);
  }
}
