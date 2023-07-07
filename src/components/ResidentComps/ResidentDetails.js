import React from "react";
import ResidentDetailsList from "./ResidentDetailsList";
import Nav from "../RootComps/Nav";
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";
import {
  PrinterIcon,
  PlusCircleIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import { HashLink } from "react-router-hash-link";
import CarePlan from "./CarePlan";

function ResidentDetails({ resident }) {
  const token = useRouteLoaderData("root");
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }
  return (
    <>
      <React.Fragment>
        <p>Resident detail page</p>
        {resident.first_name}
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
    </>
  );
}

export default ResidentDetails;
