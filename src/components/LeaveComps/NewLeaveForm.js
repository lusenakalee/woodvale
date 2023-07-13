import React from "react";
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { getAuthToken } from "../../util/Auth";

function NewLeaveForm({ method, leave }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();
  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }

  return (
    <React.Fragment>
      <Form method={method}>
        <div className="sm:col-span-3">
          <label
            htmlFor="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Leave Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="leave_date"
              id="leave_date"
              defaultValue={" "}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Return Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="return_date"
              id="return_date"
              defaultValue={" "}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Person Responsible
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="person_responsible"
              id="person_responsible"
              defaultValue={" "}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Relationship
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="relationship"
              id="relationship"
              defaultValue={" "}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Contact of the person
          </label>
          <div className="mt-2">
            <input
              name="contact"
              id="contact"
              defaultValue={" "}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Reason
          </label>
          <div className="mt-2">
            <textarea
              id="reason"
              name="reason"
              required
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Describe the reason.
          </p>
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

export default NewLeaveForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();
  const id = params.id;
  const incidentData = {
    leave_date: data.get("leave_date"),
    return_date: data.get("return_date"),
    person_responsible: data.get("person_responsible"),
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
    return redirect(`/login/residents/${id}/leaves`);
  }
}
