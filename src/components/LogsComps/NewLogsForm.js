import React from "react";
import { getAuthToken } from "../../util/Auth";
import { Form, json, redirect } from "react-router-dom";

function NewLogsForm({method, title, log}) {
  return (
    <React.Fragment>
      <Form method={method}>

      </Form>
    </React.Fragment>
  );
}

export default NewLogsForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();
  const id = params.id;
  const carePlanData = {
    bowel_movement: data.get("bowel_movement"),
    behavior: data.get("behavior"),
    voiding: data.get("voiding"),
    continence_type: data.get("continence_type"),
    incontinence_type: data.get("incontinence_type"),
    catheter_output: data.get("catheter_output"),
    heart_rate: data.get("heart_rate"),
    blood_pressure: data.get("blood_pressure"),
    locomotion_outside: data.get("locomotion_outside"),
    locomotion_in_room: data.get("locomotion_in_room"),
    pain_description: data.get("pain_description"),
    weight: data.get("weight"),
    height: data.get("height"),
    pain_noted: data.get("pain_noted"),
    mood: data.get("mood"),
    walking_outside: data.get("walking_outside"),
    walking_in_room: data.get("walking_in_room"),
    shower: data.get("shower"),
    resident_id: id,
  };
  let url = "/daily-records";
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
      throw json({ message: "Failed to save the daily log." }, { status: 500 });
    }
    return redirect(`/login/residents/${id}/logs`);
  }
}
