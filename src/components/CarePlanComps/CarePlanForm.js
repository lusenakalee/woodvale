import React from "react";
import { getAuthToken } from "../../util/Auth";
import { json, redirect, Form } from "react-router-dom";

function CarePlanForm({ method, title }) {
  return <Form method={method}></Form>;
}

export default CarePlanForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();
  const id = params.id;
  const carePlanData = {
    dietary_requirements: data.get("diet"),
    mobility_assistance: data.get("mobility"),
    medication_administration: data.get("medication"),
    personal_hygiene: data.get("hygiene"),
    activity_schedule: data.get("activity"),
    instructions: data.get("instructions"),
    resident_id: id,
  };
  let url = "/care-plan";
  if (method === "POST") {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(carePlanData),
    });
    if (response.status === 400) {
      return response;
    }
    if (!response.ok) {
      throw json({ message: "Failed to save the care plan" }, { status: 500 });
    }
    const new_url = '/login/resident' + id
    return redirect(new_url);
  } 
}
