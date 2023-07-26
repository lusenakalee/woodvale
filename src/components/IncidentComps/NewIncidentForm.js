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

function NewIncidentForm({ method, incident }) {
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
      {data && data.message && <p>{data.message}</p>}
      <Form method={method}>
        <div className="sm:col-span-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Incident Date
          </label>
          <div className="mt-2">
            <input
              id="incident_date"
              name="incident_date"
              type="date"
              defaultValue={incident ? incident.incident_date : ""}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="about"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Incident description
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              name="description"
              required
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={incident ? incident.description : ""}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Write a few sentences about the Incident.
          </p>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="actions_taken"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Actions Taken
          </label>
          <div className="mt-2">
            <textarea
              id="actions_taken"
              name="actions_taken"
              required
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={incident ? incident.actions_taken : ""}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Write a few sentences about the Incident.
          </p>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="location"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Location of Incident
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="location"
              defaultValue={incident ? incident.location : ""}
              id="location"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="person_reporting"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Person reporting
          </label>
          <div className="mt-2">
            <input
              required
              type="text"
              name="person_reporting"
              defaultValue={incident ? incident.person_reporting : ""}
              id="person_reporting"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Person notified
          </label>
          <div className="mt-2">
            <select
              id="person_notified"
              defaultValue={incident ? incident.person_notified : ""}
              name="person_notified"
              autoComplete="person_notified"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>911</option>
              <option>Case Manager</option>
              <option>MD</option>
              <option>Family</option>
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="witnesses"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Witnesses
          </label>
          <div className="mt-2">
            <textarea
              id="witnesses"
              name="witnesses"
              required
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={incident ? incident.witnesses : ""}
            />
          </div>
        </div>

        <div className="col-span-full">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Antecedent
          </label>
          <div className="mt-2">
            <textarea
              id="antecedent"
              name="antecedent"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={incident ? incident.antecedent : ""}
            />
          </div>
        </div>

        <div className="flex justify-between py-5 sm:col-span-4">
          <button
            onClick={cancelHandler}
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isSubmitting ? "Submitting..." : "Save"}
          </button>
        </div>
      </Form>
    </React.Fragment>
  );
}

export default NewIncidentForm;
export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();
  const id = params.id;
  const incidentId = params.incidentId;
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
  const incidentUpdateData = {
    incident_date: data.get("incident_date"),
    description: data.get("description"),
    actions_taken: data.get("actions_taken"),
    location: data.get("location"),
    person_reporting: data.get("person_reporting"),
    person_notified: data.get("person_notified"),
    witnesses: data.get("witnesses"),
    antecedent: data.get("antecedent"),
  }
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
    return redirect(`/login/residents/${id}/incident`);
  }else{
    url = `/incident-reports/${incidentId}`;
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(incidentUpdateData),
    });
    if (response.status === 400) {
      return response;
    }
    if (!response.ok) {
      throw json({ message: "Failed to update the incident" }, { status: 500 });
    }
    return redirect(`/login/residents/${id}/incident`);
  }
}
