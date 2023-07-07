import React from "react";
import { Form, json, redirect } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";

function ActivityForm({ activity, method, title }) {
  return (
    <React.Fragment>
        {title}
        <Form method={method}>

        </Form>
    </React.Fragment>
  );
}

export default ActivityForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();

  const activityData = {
    name: data.get("name"),
    description: data.get("description"),
    event_date: data.get("event_date"),
  };
  let url = "/activity";
  if (method === "POST") {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(activityData),
    });
    if (response.status === 400) {
      return response;
    }
    if (!response.ok) {
      throw json({ message: "Failed to save the activity" }, { status: 500 });
    }

    return redirect("/login/activity");
  } else {
    const id = params.id;
    url = "/activity/" + id;
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(activityData),
    });
    if (!response.ok) {
      window.alert("failed update");
      throw json({ message: "Failed to update the resident" }, { status: 500 });
    }

    return redirect("/login/activity");
  }
}
