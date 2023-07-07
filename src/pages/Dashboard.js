import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Nav from "../components/RootComps/Nav";
import DashReports from "../components/DashboardComps/DashReports";
import Updates from "../components/DashboardComps/Updates";
import SummaryTable from "../components/DashboardComps/SummaryTable";
import AddResidentForm from "../components/ResidentComps/AddResidentForm";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="flex space-x-6">
              <Link to="/login/residents/new">
                <button
                  type="button"
                  onClick={toggleFormVisibility}
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <PlusCircleIcon
                    className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Add Resident
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
            </div>
            {isFormVisible && (
              <div className="py-10">
                <AddResidentForm />
              </div>
            )}
            <Updates />
          </div>
        </main>
      </div>
    </>
  );
}
