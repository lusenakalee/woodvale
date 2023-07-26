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
import { UserCircleIcon } from "@heroicons/react/24/outline";
import abstractUser from "../../components/assets/images/abstractUser.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


let id;
function EditProfile({ method, user, title }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const [file, setFile] = useState(null);
  const data = useActionData();
  const [imageUrl, setImageUrl] = useState("");
  const imgToken = getAuthToken();

  if (data && data.errors) {
    Object.values(data.errors).forEach((err) => {
      toast.error(err);
    });
  }

  //modal
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

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
    handleCloseModal();
    const bearerToken = getAuthToken();

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`https://homes-test.onrender.com/${user.id}/upload`, {
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
        window.confirm("File uploaded successfully");
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
        const response = await fetch(`https://homes-test.onrender.com/upload/${user.id}`, {
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
  }, [user]);

  return (
    <React.Fragment>
      <main>
      <ToastContainer />
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div>
            <button
              type="button"
              onClick={handleOpenModal}
              className="inline-flex opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <UserCircleIcon
                className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Upload Picture
            </button>
          </div>
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 bg-white rounded-md w-96">
                <form onSubmit={handleSubmit}>
                  <div className="p-6">
                    <h1 className="text-lg font-bold">Profile Pic Upload</h1>
                    <div className="mt-4">
                      <label
                        htmlFor="formFileSm"
                        className="block font-semibold"
                      >
                        Upload Your Image
                      </label>
                      <input
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        id="formFileSm"
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-gray-100 flex items-center justify-end gap-x-4">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="text-sm font-semibold text-gray-900"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
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
                  {data && data.message && <p>{data.message}</p>}

                </p>
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={abstractUser}
                    className="h-24 rounded-lg"
                  />
                )}
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
              </div>
              {data && data.message && <p>{data.message}</p>}

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
        </div>
      </main>
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
  const response = await fetch("https://homes-test.onrender.com/user/" + id, {
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
