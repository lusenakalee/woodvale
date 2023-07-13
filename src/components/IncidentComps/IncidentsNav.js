import { ChevronLeftIcon, LifebuoyIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { NavLink } from "react-router-dom";

function IncidentsNav() {
  return (
    <React.Fragment>
      <header className="pb-16">
        <div className="mx-auto max-w-7xl flex space-x-6 px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold  pr-10 tracking-tight text-gray-900">
            Incidents
          </h1>
          <div className="flex space-x-6">
            <NavLink to="../">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <ChevronLeftIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Back to Resident
              </button>
            </NavLink>
            <NavLink to=".">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <LifebuoyIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                View all
              </button>
            </NavLink>

            <NavLink to="./new">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <PlusCircleIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Add Incident
              </button>
            </NavLink>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default IncidentsNav;
