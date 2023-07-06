import React from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function NewLogForm() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
           Vital signs and daily  checks
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
           Fill in correct information .
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Search Resident Here
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="HeartRate"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Heart Rate
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="HeartRate"
                  id="HeartRate"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="Weight"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Weight
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="Weight"
                  id="Weight"
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
              <label
                htmlFor="bowel"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Bowel Movement
              </label>
              <div className="mt-2">
                <select
                  id="bowel"
                  name="bowel"
                  autoComplete="bowel-movement"
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
              <label
                htmlFor="Voiding"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Voiding
              </label>
              <div className="mt-2">
                <select
                  id="Voiding"
                  name="Voiding"
                  autoComplete="Voiding"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Continent</option>
                  <option>Incontinent</option>
                  <option>Catheter</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="Eating"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Eating
              </label>
              <div className="mt-2">
                <select
                  id="Eating"
                  name="Eating"
                  autoComplete="Eating"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Dependent</option>
                  <option>Independent</option>
                </select>
              </div>
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
                  id="Mood"
                  name="Mood"
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
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="Pain"
                    name="Pain"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="Pain" className="font-medium text-gray-900">
                    Pain
                  </label>
                  <p className="text-gray-500">
                    Check the box if there are any reports of pain.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="Pain"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pain Description (Optional)
              </label>
              <div className="mt-2">
                <textarea
                  id="Pain"
                  name="Pain"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Briefly describe Resident's Pain .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
