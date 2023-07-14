import React from "react";
import { Link } from "react-router-dom";
import { useSubmit } from "react-router-dom";

function LogItem({ log }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }
  return (
    <React.Fragment>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Weight
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {log.weight}
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Blood Pressure
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {log.blood_pressure}
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Behavior
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {log.behavior}
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Bowel movement
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {log.bowel_movement}
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Catheter Output
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {log.catheter_output}
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Continence type
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {log.continence_type}
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Heart Rate
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {log.heart_rate}
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Incontinence type
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {log.incontinence_type}
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Locomotion
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {log.locomotion}
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Mood</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {log.mood}
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Pain description
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {log.pain_description}
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Voiding
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {log.voiding}
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Registered by
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {log.registered_by.first_name}
        </dd>
      </div>

      <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <button
                  onClick={startDeleteHandler}
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Delete
                </button>
              </dt>
              <dd>
                <Link to={`./edit`}>
                  <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Edit
                  </button>
                </Link>
              </dd>
            </div>
    </React.Fragment>
  );
}

export default LogItem;
