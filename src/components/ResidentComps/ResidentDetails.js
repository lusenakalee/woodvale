import React, { useEffect, useState, useRef } from "react";
import { getAuthToken } from "../../util/Auth";
import Nav from "../RootComps/Nav";
import {
  Link,
  useNavigate,
  useNavigation,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import {
  PrinterIcon,
  PlusCircleIcon,
  ClipboardDocumentListIcon,
  PaperClipIcon,
  HomeIcon,
  PlusIcon,
  ClipboardDocumentIcon,
  ArrowRightOnRectangleIcon,
  LifebuoyIcon,
  UserCircleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { HashLink } from "react-router-hash-link";

function ResidentDetails({ resident }) {
  const [open, setOpen] = useState(true);

  // modal
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const cancelButtonRef = useRef(null);

  const token = useRouteLoaderData("root");
  const submit = useSubmit();
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const imgToken = getAuthToken();
  const isSubmitting = navigation.state === "submitting";
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
      const response = await fetch(`/residents/${resident.id}/upload`, {
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
        window.confirm(
          "File uploaded successfully! Do you want to go to the resident page?"
        );
      } else {
        window.alert("failed to upload");
      }
    } catch (error) {
      window.alert("Network error", error);
    }
  };

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`/residents/img/${resident.id}`, {
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
    <>
      <React.Fragment>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0 flex  justify-between">
              <div className="flex gap-x-4">
                {imageUrl && (
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={imageUrl}
                    alt="Profile"
                  />
                )}
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {resident.first_name}'s Information
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {" "}
                    General details and Information.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 ">
                <Link to="./logs">
                  <div>
                    <button
                      type="button"
                      className="inline-flex opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <ClipboardDocumentIcon
                        className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      View Logs
                    </button>
                  </div>
                </Link>
                <div>
                  <Link to="./new-log">
                    <button
                      type="button"
                      className="inline-flex  opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <PlusIcon
                        className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Add Logs
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="./care-plan">
                    <button
                      type="button"
                      className="inline-flex  opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <ClipboardDocumentListIcon
                        className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Care Plan
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="./med-recs">
                    <button
                      type="button"
                      className="inline-flex  opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <ClipboardDocumentListIcon
                        className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Medical Records
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="./incident">
                    <button
                      type="button"
                      className="inline-flex  opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <LifebuoyIcon
                        className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Incident Report
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="./leaves">
                    <button
                      type="button"
                      className="inline-flex  opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <ArrowRightOnRectangleIcon
                        className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Leave application
                    </button>
                  </Link>
                </div>
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
                    Upload Patient Picture
                  </button>
                </div>

                {isOpen && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 bg-white rounded-md w-96">
                      <form onSubmit={handleSubmit}>
                        <div className="p-6">
                          <h1 className="text-lg font-bold">
                            Profile Pic Upload
                          </h1>
                          <div className="mt-4">
                            <label
                              htmlFor="formFileSm"
                              className="block font-semibold"
                            >
                              Upload Patient Image
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
                            Save changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {resident.first_name} {resident.middle_name}{" "}
                    {resident.last_name}
                  </dd>
                </div>
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Gender
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {resident.gender}
                  </dd>
                </div>
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Date Registered
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {resident.date_registered}
                  </dd>
                </div>
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Date Of Birth
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {" "}
                    Age:{resident.age}years {"  "}D.O.B:{" "}
                    {resident.date_of_birth}{" "}
                  </dd>
                </div>
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {resident.contact_email}
                  </dd>
                </div>
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {resident.contact_phone_no}{" "}
                  </dd>
                </div>
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Address
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {" "}
                    {resident.state} {resident.city} {resident.zip}
                  </dd>
                </div>

                <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Emergency contact name
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {resident.emergency_contact_name}
                  </dd>
                </div>
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Emergency contact number/email
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {resident.emergency_contact_number}
                  </dd>
                </div>
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Emergency contact 2 name
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {resident.emergency_contact_name_2}
                  </dd>
                </div>
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Emergency contact 2 number/email
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {" "}
                    {resident.emergency_contact_number_2}
                  </dd>
                </div>

                <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Resident registered by{" "}
                  </dt>
                  {/* MAYBE A LINK TO GO TO CARE GIVER DETAILS PAGE */}

                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {resident.registered_by.first_name}{" "}
                    {resident.registered_by.last_name}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Attachments
                  </dt>
                  <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <ul
                      role="list"
                      className="divide-y divide-gray-100 rounded-md border border-gray-200"
                    >
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                          <PaperClipIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">
                              Physician_letter.pdf
                            </span>
                            <span className="flex-shrink-0 text-gray-400">
                              2.4mb
                            </span>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Download
                          </a>
                        </div>
                      </li>
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                          <PaperClipIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">
                              medications.pdf
                            </span>
                            <span className="flex-shrink-0 text-gray-400">
                              4.5mb
                            </span>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Download
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
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
          </div>
        </main>
      </React.Fragment>
    </>
  );
}

export default ResidentDetails;
