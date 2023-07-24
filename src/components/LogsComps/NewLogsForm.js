import React, { useState } from "react";
import { getAuthToken } from "../../util/Auth";
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
function NewLogsForm({ method, title, log }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();
  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }
  //  checkbox state
  const [isChecked, setIsChecked] = useState(false);
  // voiding options
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedContinentOption, setSelectedContinentOption] = useState("");
  const [selectedIncontinentOption, setSelectedIncontinentOption] =
    useState("");
  const [selectedCatheterOption, setSelectedCatheterOption] = useState("");

  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedContinentOption("");
    setSelectedIncontinentOption("");
    setSelectedCatheterOption("");
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleContinentOptionChange = (e) => {
    setSelectedContinentOption(e.target.value);
  };

  const handleIncontinentOptionChange = (e) => {
    setSelectedIncontinentOption(e.target.value);
  };

  const handleCatheterOptionChange = (e) => {
    setSelectedCatheterOption(e.target.value);
  };

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
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Vital signs and daily checks
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Fill in correct information .
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Heart Rate(B.P.M)
                </label>
                <div className="mt-2">
                  <input
                    defaultValue={log ? log.heart_rate : ""}
                    type="number"
                    name="heart_rate"
                    id="heart_rate"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Weight(Kgs)
                </label>
                <div className="mt-2">
                  <input
                    defaultValue={log ? log.weight : ""}
                    type="number"
                    name="weight"
                    id="weight"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="Height"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Blood Pressure(mmHg)
                </label>
                <div className="mt-2">
                  <input
                    defaultValue={log ? log.blood_pressure : ""}
                    type="number"
                    name="blood_pressure"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Bowel Movement
                </label>
                <div className="mt-2">
                  <select
                    defaultValue={log ? log.bowel_movement : ""}
                    id="bowel_movement"
                    name="bowel_movement"
                    autoComplete="bowel_movement"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Liquid</option>
                    <option>Loose</option>
                    <option>Soft</option>
                    <option>Soft</option>
                    <option>Hard</option>
                    <option>Formed</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Voiding
                </label>
                <div className="mt-2">
                  <select
                    id="voiding"
                    name="voiding"
                    defaultValue={log ? log.voiding : ""}
                    value={selectedOption}
                    onChange={handleSelectionChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="">Select an option</option>
                    <option value="continent">Continent</option>
                    <option value="incontinent">Incontinent</option>
                    <option value="catheter">Catheter</option>
                  </select>
                </div>

                {selectedOption === "continent" && (
                  <div className="mt-2">
                    <select
                      id="ContinentOptions"
                      name="continent"
                      defaultValue={log ? log.continence_type : ""}
                      autoComplete="ContinentOptions"
                      value={selectedContinentOption}
                      onChange={handleContinentOptionChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="">Select a continent option</option>
                      <option value="Toilet">Toilet</option>
                      <option value="Bedside">Bedside</option>
                      <option value="Commode">Commode</option>
                    </select>
                  </div>
                )}

                {selectedOption === "incontinent" && (
                  <div className="mt-2">
                    <select
                      id="IncontinentOptions"
                      name="incontinent"
                      defaultValue={log ? log.incontinence_type : ""}
                      autoComplete="IncontinentOptions"
                      value={selectedIncontinentOption}
                      onChange={handleIncontinentOptionChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="">Select an incontinent option</option>
                      <option value="Brief">Brief</option>
                      <option value="PullUp">Pull Up</option>
                      <option value="Pericare">Pericare</option>
                    </select>
                  </div>
                )}

                {selectedOption === "catheter" && (
                  <div className="mt-2">
                    <label className="block text-sm  leading-6 text-gray-900">
                      Type in the catheter output in cc
                    </label>
                    <input
                      type="number"
                      id="CatheterInput"
                      name="catheter"
                      defaultValue={log ? log.catheter_output : ""}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900"></h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Kindly fill in brief descriptions in the fields below.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="behavior"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Behavior
                </label>
                <div className="mt-2">
                  <textarea
                    id="behavior"
                    defaultValue={log ? log.behavior : ""}
                    name="behavior"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences to describe behavior.
                </p>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="Locomotion"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Locomotion
                </label>
                <div className="mt-2">
                  <textarea
                    id="Locomotion"
                    name="locomotion"
                    defaultValue={log ? log.locomotion : ""}
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Briefly describe Locomotion in the room and outside.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="Mood"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mood
                </label>
                <div className="mt-2">
                  <textarea
                    id="mood"
                    name="mood"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={log ? log.mood : ""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Briefly describe Resident's Mood .
                </p>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="pain_noted"
                          name="pain_noted"
                          type="checkbox"
                          value={isChecked ? "true" : "false"}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          checked={isChecked}
                          onChange={(e) => setIsChecked(e.target.checked)}
                          defaultValue={log ? log.pain_noted : ""}
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="Pain"
                          className="font-medium text-gray-900"
                        >
                          Pain
                        </label>
                        <p className="text-gray-500">
                          Check the box if there are any reports of pain.
                        </p>
                      </div>
                    </div>
                  </div>

                  {isChecked && (
                    <div className="col-span-full">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Pain Description (Optional)
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="pain_description"
                          name="pain_description"
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={log ? log.pain_description : ""}
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        Briefly describe Resident's Pain.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
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

export default NewLogsForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();
  const logId = params.logID;
  const id = params.id;
  const logData = {
    bowel_movement: data.get("bowel_movement"),
    behavior: data.get("behavior"),
    voiding: data.get("voiding"),
    continence_type: data.get("continent"),
    incontinence_type: data.get("incontinent"),
    catheter_output: data.get("catheter"),
    heart_rate: data.get("heart_rate"),
    blood_pressure: data.get("blood_pressure"),
    locomotion: data.get("locomotion"),
    pain_description: data.get("pain_description"),
    weight: data.get("weight"),
    pain_noted: data.get("pain_noted"),
    mood: data.get("mood"),
    walk_location: data.get("walk"),
    shower: data.get("shower"),
    resident_id: id,
  };
  const logUpdateData = {
    bowel_movement: data.get("bowel_movement"),
    behavior: data.get("behavior"),
    voiding: data.get("voiding"),
    continence_type: data.get("continent"),
    incontinence_type: data.get("incontinent"),
    catheter_output: data.get("catheter"),
    heart_rate: data.get("heart_rate"),
    blood_pressure: data.get("blood_pressure"),
    locomotion: data.get("locomotion"),
    pain_description: data.get("pain_description"),
    weight: data.get("weight"),
    pain_noted: data.get("pain_noted"),
    mood: data.get("mood"),
    walk_location: data.get("walk"),
    shower: data.get("shower"),
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
      body: JSON.stringify(logData),
    });
    if (response.status === 400) {
      return response;
    }
    if (!response.ok) {
      throw json({ message: "Failed to save the daily vitals." }, { status: 500 });
    }
    return redirect(`/login/residents/${id}/logs`);
  }else{
    url = `/daily-records/${id}`
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(logUpdateData),
    });
    if (response.status === 400) {
      return response;
    }
    if (!response.ok) {
      throw json({ message: "Failed to update the daily vitals." }, { status: 500 });
    }
    return redirect(`/login/residents/${id}/logs`);
  }
}
