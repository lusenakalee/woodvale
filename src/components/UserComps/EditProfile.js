import React, { useEffect, useState } from "react";
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { getAuthToken } from "../../util/Auth";
import { LifebuoyIcon } from "@heroicons/react/24/outline";

let id;
function EditProfile({ method, user, title }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const [file, setFile] = useState(null);
  const data = useActionData();
  const [imageUrl, setImageUrl] = useState("");
  const imgToken = getAuthToken();

  id = user.id;
  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const bearerToken = getAuthToken();

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`/${user.id}/upload`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + bearerToken,
        },
        body: formData,
      });
      if (response.status === 400) {
        window.alert("Only Image attachment are allowed!!");
      }
      if (response.ok) {
        const confirmed = window.confirm(
          "File uploaded successfully! Do you want to go to the user page?"
        );
        if (confirmed) {
          navigate("..");
        }
      } else {
        window.alert("failed to upload");
      }
    } catch (error) {
      window.alert("Network error", error);
    }
  };
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`/upload/${user.id}`, {
          headers: {
            Authorization: "Bearer " + imgToken,
          },
        });

        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
        } else {
          console.error("Error fetching image:", response.status);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <React.Fragment>
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          type="button"
          className="inline-flex  opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <LifebuoyIcon
            className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Upload Patient Picture
        </button>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form onSubmit={handleSubmit}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Profile Pic Upload
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {" "}
                <label htmlFor="formFileSm" className="form-label">
                  Upload Your Image
                </label>
                <input
                  className="form-control form-control-sm"
                  id="formFileSm"
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Form method={method}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Kindly fill in correct details
              {data && data.errors && (
                <ul>
                  {Object.values(data.errors).map((err) => (
                    <li key={err}>{err}</li>
                  ))}
                </ul>
              )}
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {imageUrl && <img src={imageUrl} alt="Profile" />}
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

export default EditProfile;
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
  };
  const response = await fetch("/user/" + id, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(signupData),
  });
  if (response.status === 400) {
    return response;
  }
  if (response.status === 409) {
    return response;
  }

  if (response.status === 417) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could edit user" }, { status: 500 });
  }

  return redirect("/login/profile");
}