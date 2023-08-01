import React, { useState } from "react";
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { getAuthToken } from "../../util/Auth";

function UserForm({ method, user, title }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const data = useActionData();
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }

  return (
    <React.Fragment>
      <Form method={method}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Kindly fill in correct details
            </p>
            {data && data.errors && (
              <ul>
                {Object.values(data.errors).map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            )}
            {data && data.message && <p>{data.message}</p>}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first_name"
                    id="first-name"
                    autoComplete="given-name"
                    required
                    defaultValue={user ? user.first_name : " "}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    required
                    defaultValue={user ? user.last_name : " "}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Set user name
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="username"
                    id="username"
                    required
                    autoComplete="family-name"
                    defaultValue={user ? user.username : " "}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="password1"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Set password
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    required
                    name="password1"
                    id="password1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="password2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm password
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="password2"
                    required
                    id="password2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 space-y-10 space-x-5">
              <fieldset className="mt-10 space-y-10 space-x-5">
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Is the user you are adding an Admin?
                </legend>
                <label>
                  <input
                    type="radio"
                    name="is-admin"
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
            <div className="mt-10 space-y-10 space-x-5">
              <fieldset className="mt-10 space-y-10 space-x-5">
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Deactivate this user
                </legend>
                <label>
                  <input
                    type="radio"
                    name="is-active"
                    value="true"
                    checked={selectedOption === "true"}
                    onChange={handleOptionChange}
                  />
                  True
                </label>
                <label>
                  <input
                    type="radio"
                    name="is-active"
                    value="false"
                    checked={selectedOption === "false"}
                    onChange={handleOptionChange}
                  />
                  False
                </label>
              </fieldset>
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

export default UserForm;
export async function action({ request, params }) {
  const data = await request.formData();
  const method = request.method;
  const token = getAuthToken();
  const signupData = {
    username: data.get("username"),
    password1: data.get("password1"),
    password2: data.get("password2"),
    first_name: data.get("first_name"),
    last_name: data.get("last_name"),
    home_name: "",
    is_active: data.get("is_active"),
    is_admin: data.get("is-admin"), //boolean field should be a dropdown of true or false
  };
  if (method === "POST") {
    const response = await fetch("https://woodvale-test-2.onrender.com/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(signupData),
    });
    if (response.status === 409) {
      return response;
    }

    if (response.status === 417) {
      return response;
    }
    if (!response.ok) {
      throw json({ message: "Could not register user" }, { status: 500 });
    }

    return redirect("/login/team");
  } else {
    const id = params.id;
    const response = await fetch("https://woodvale-test-2.onrender.com/user/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(signupData),
    });
    if (response.status === 409) {
      return response;
    }

    if (response.status === 417) {
      return response;
    }
    if (!response.ok) {
      throw json({ message: "Could not update user" }, { status: 500 });
    }

    return redirect("/login/team");
  }
}
