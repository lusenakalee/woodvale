import React from "react";
import { getAuthToken } from "../../util/Auth";
import { json, redirect, useActionData, useSubmit } from "react-router-dom";
import { Link } from "react-router-dom";

function ActivityDetail({ activity }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }
  const data = useActionData()
  return (
    <React.Fragment>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      {activity.name}
      <Link to={`./edit`}>
        <button>Edit</button>
      </Link>
      <button
        onClick={startDeleteHandler}
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Delete
      </button>
    </React.Fragment>
  );
}

export default ActivityDetail;

export async function loader({ request, params }) {
  let url = "/activity/";
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
    throw json({ message: "Wrong Url" }, { status: 500 });
  }

  const resData = await response.json();
  console.log(resData);
  return resData;
}

export async function action({ request, params }) {
  const token = getAuthToken();

  const id = params.id;
  const response = await fetch("/activity/" + id, {
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
