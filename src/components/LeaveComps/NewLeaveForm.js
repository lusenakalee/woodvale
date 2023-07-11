import React from 'react'
import { Form, json, redirect } from 'react-router-dom';
import { getAuthToken } from '../../util/Auth';

function NewLeaveForm({method, leave}) {
  return (
    <React.Fragment>
    <Form method={method}></Form>
  </React.Fragment>
  )
}

export default NewLeaveForm

export async function action({ request, params }) {
    const method = request.method;
    const data = await request.formData();
    const token = getAuthToken();
    const id = params.id;
    const incidentData = {
      leave_date: data.get("leave_date"),
      return_date: data.get("return_date"),
      actions_taken: data.get("actions_taken"),
      person_responsible: data.get("person_responsible"),
      person_reporting: data.get("person_reporting"),
      relationship: data.get("relationship"),
      contact: data.get("contact"),
      reason: data.get("reason"),
      resident_id: id,
    };
    let url = "/leave-records";
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