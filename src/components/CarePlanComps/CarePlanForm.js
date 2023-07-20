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

function CarePlanForm({ carePlan, method, title }) {
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
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Kindly fill in correct details
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="diet"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Dietary requirements
                </label>
                <div className="mt-2">
                  <textarea
                    id="diet"
                    name="diet"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={carePlan ? carePlan.dietary_requirements : ""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about the Dietary requirements.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="mobility"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mobility assistance
                </label>
                <div className="mt-2">
                  <textarea
                    id="mobility"
                    name="mobility"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={carePlan ? carePlan.mobility_assistance : ""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about the resident's mobility.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="medication"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Medication administration
                </label>
                <div className="mt-2">
                  <textarea
                    id="medication"
                    name="medication"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={carePlan ? carePlan.medication_administration : ""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about the medication.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="hygiene"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Personal hygiene
                </label>
                <div className="mt-2">
                  <textarea
                    id="hygiene"
                    name="hygiene"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={carePlan ? carePlan.personal_hygiene : ""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Describe the personal hygiene.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="activity"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Activity schedule
                </label>
                <div className="mt-2">
                  <textarea
                    id="activity"
                    name="activity"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={carePlan ? carePlan.activity_schedule : ""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about resident's activity schedule.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="instructions"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Instructions
                </label>

                <div className="mt-2">
                  <textarea
                    id="instructions"
                    name="instructions"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={carePlan ? carePlan.instructions : ""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about the instructons.
                </p>
              </div>

            </div>
          </div>
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
  let url = "https://homes-test.onrender.com/care-plan";
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
    return redirect(`/login/residents/${id}/care-plan`);
  }
}
