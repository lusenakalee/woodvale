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
      <Form method={method}>
        <div className="col-span-full">
          <label
            htmlFor="condition"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Condition
          </label>
          <div className="mt-2">
            <textarea
              id="condition"
              required
              name="condition"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Write about the resident's condition.
          </p>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="allergies"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            allergies
          </label>
          <div className="mt-2">
            <textarea
              id="allergies"
              required
              name="allergies"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Write about the resident's allergies.
          </p>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="medication"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            medication
          </label>
          <div className="mt-2">
            <textarea
              id="medication"
              required
              name="medication"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Write about the resident's medication.
          </p>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="feeding_method"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Feeding method
          </label>
          <div className="mt-2">
            <select
              id="feeding_method"
              name="feeding_method"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>Dependent</option>
              <option>Independent</option>
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="immunization_records"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Immunization records
          </label>
          <div className="mt-2">
            <textarea
              id="immunization_records"
              required
              name="immunization_records"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Write about the resident's medication.
          </p>
        </div>

        <div className="sm:col-span-4 pt-10">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            physician contact
          </label>
          <div className="mt-2">
            <input
              id="physician_contact"
              name="physician_contact"
              autoComplete="physician_contact"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="flex justify-between sm:col-span-4">
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
        </div>
      </Form>
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
