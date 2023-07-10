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

  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <React.Fragment>
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
                  Heart Rate
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="heart_rate"
                    id="heart_rate"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Weight
                </label>
                <div className="mt-2">
                  <input
                    type="text"
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
                  Height
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Height"
                    id="Height"
                    autoComplete="Height"
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
                    id="Voiding"
                    name="Voiding"
                    autoComplete="Voiding"
                    value={selectedOption}
                    onChange={handleSelectionChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="">Select an option</option>
                    <option value="Continent">Continent</option>
                    <option value="Incontinent">Incontinent</option>
                    <option value="Catheter">Catheter</option>
                  </select>
                </div>

                {selectedOption === "Continent" && (
                  <div className="mt-2">
                    <select
                      id="ContinentOptions"
                      name="ContinentOptions"
                      autoComplete="ContinentOptions"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Toilet</option>
                      <option>Bedside</option>
                      <option>Commode</option>
                    </select>
                  </div>
                )}

                {selectedOption === "Incontinent" && (
                  <div className="mt-2">
                    <select
                      id="IncontinentOptions"
                      name="IncontinentOptions"
                      autoComplete="IncontinentOptions"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Brief</option>
                      <option>Pull up</option>
                      <option>Pericare</option>
                    </select>
                  </div>
                )}

                {selectedOption === "Catheter" && (
                  <div className="mt-2">
                     <label className="block text-sm  leading-6 text-gray-900">
                  Type in the catheter output in cc
                </label>
                    <input
                      type="number"
                      id="CatheterInput"
                      name="CatheterInput"
                      autoComplete="CatheterInput"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                )}
              </div>
            
              
              <div className="sm:col-span-2">
              <fieldset  className="mt-10 space-y-10 space-x-5">
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Did resident take a shower?
                </legend>
                <label>
                  <input
                    type="radio"
                    name="shower"
                    value="true"
                    checked={selectedOption === "true"}
                    onChange={handleOptionChange}
                  />
                  True
                </label>
                <label>
                  <input
                    type="radio"
                    name="is-admin"
                    value="false"
                    checked={selectedOption === "false"}
                    onChange={handleOptionChange}
                  />
                  False
                </label>
              </fieldset>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900"></h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Kindly fill in brief desccriptions in the fields below.
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
                    name="behavior"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences to describe behavior.
                </p>
              </div>

              {/* No need for different fields for locomotion in room and outside */}

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
                    name="Locomotion"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
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
                    defaultValue={""}
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
                          id="Pain_noted"
                          name="Pain_noted"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          checked={isChecked}
                          onChange={(e) => setIsChecked(e.target.checked)}
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
                      <label
                        htmlFor="PainDescription"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Pain Description (Optional)
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="pain_description"
                          name="pain_description"
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
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
