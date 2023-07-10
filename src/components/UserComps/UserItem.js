import React from "react";
import { Link, useActionData } from "react-router-dom";
import { useRouteLoaderData, useSubmit } from "react-router-dom";

function UserItem({ user }) {
  const token = useRouteLoaderData("root");
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
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <div className="">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          User Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          {user.first_name} details and Information.
        </p>
      </div>

      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Full name
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {user.first_name} {user.last_name}
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Username
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {user.username} 
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          User type
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {user.is_admin=== true ? "Admin": "Care Giver"} 
        </dd>
      </div>
      {token && (
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">
            <button onClick={startDeleteHandler}>Delete</button>
          </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <Link to="edit">Edit</Link>
          </dd>
        </div>
      )}
    </React.Fragment>
  );
}

export default UserItem;
