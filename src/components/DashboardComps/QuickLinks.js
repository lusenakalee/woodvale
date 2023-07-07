import React from "react";
import { PrinterIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import AddResidentAccordion from "./AddResidentAccordion";

function QuickLinks() {
  return (
    <div className="flex space-x-6">
      <Link>
      <button
        type="button"
        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
        <PrinterIcon
            className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
        />
        Export
      </button>
      </Link>
      <Link to="/NewLog">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <PlusCircleIcon
            className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          New Log
        </button>
      </Link>
      <AddResidentAccordion/>
    </div>
  );
}

export default QuickLinks;
