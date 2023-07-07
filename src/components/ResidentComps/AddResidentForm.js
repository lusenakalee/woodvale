import { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Form, json, redirect } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";
import React
 from "react";
export default function ResidentForm({ resident, title, method }) {

  return(
    <React.Fragment>
      {title}
      <Form method={method}> 
      </Form>
    </React.Fragment>
  )

}

export async function residentAction({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();

  const residentData = {
    first_name: data.get("first-name"),
    last_name: data.get("last-name"),
    middle_name: data.get("middle-name"),
    age: data.get("age"),
    gender: data.get("gender"),
    file: data.get("file-upload"),
    emergency_contact_name: data.get("contact"),
    emergency_contact_number: data.get("contact-number"),
    emergency_contact_name_2: data.get("contact-2"),
    emergency_contact_number_2: data.get("contact-number-2"),
    address: data.get("address"),
    city: data.get("city"),
    state: data.get("state"),
    zip: data.get("zip"),
    contact_email: data.get("email"),
    contact_phone_no: data.get("phone-no")
  };
  let url = "/residents";
  if (method === "POST") {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(residentData),
    });
    if (response.status === 404) {
      return response;
    }
    if (response.status === 409) {
      return response;
    }
    if (response.status === 500) {
      return response;
    }
    if (!response.ok) {
      throw json({ message: "Failed to save the resident" }, { status: 500 });
    }

    return redirect("/login/residents");
  } else {
    const id = params.id;
    url = "/residents/" + id;
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(residentData),
    });
    if (!response.ok) {
      window.alert("failed update");
      throw json({ message: "Failed to update the resident" }, { status: 500 });
    }

    return redirect("/login/residents");
  }
}
