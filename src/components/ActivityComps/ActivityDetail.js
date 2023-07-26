import React from "react";
import { getAuthToken } from "../../util/Auth";
import { json, redirect, useActionData, useRouteLoaderData, useSubmit } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function ActivityDetail({ activity }) {
  const {token} = useRouteLoaderData("root");
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }
  const data = useActionData();
  return (
    <React.Fragment>
    <ToastContainer/>

      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Event name
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {activity.name}
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Event Date
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {activity.event_date}
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Event Description
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {activity.description}
        </dd>
      </div>

      {token && (
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  <button
                    onClick={startDeleteHandler}
                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Delete
                  </button>
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <Link to="edit">
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Edit
                    </button>
                  </Link>
                </dd>
              </div>
            )}
    </React.Fragment>
  );
}

export default ActivityDetail;

export async function loader({ request, params }) {
  let url = "https://homes-test.onrender.com/activity/";
  const token = getAuthToken();
  const id = params.id;
  const response = await fetch(url + id, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (response.status === 400) {
    return response;
  }
  if (response.status === 404) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Server error" }, { status: 500 });
  }

  const resData = await response.json();
  return resData;
}

export async function action({ request, params }) {
  const token = getAuthToken();

  const id = params.id;
  const response = await fetch("https://homes-test.onrender.com/activity/" + id, {
    method: request.method,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (response.status === 400) {
    return response;
  }
  if (!response.ok) {
    throw json(
      { message: "Could not delete activity." },
      {
        status: 500,
      }
    );
  }
  return redirect("/login/activity");
}
