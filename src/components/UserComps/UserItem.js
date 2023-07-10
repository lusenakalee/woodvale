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
      {user.username}
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
