import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Nav from "../components/RootComps/Nav";
import DashReports from "../components/DashboardComps/DashReports";
import Updates from "../components/DashboardComps/Updates";
import SummaryTable from "../components/DashboardComps/SummaryTable";
import AddResidentForm from "../components/ResidentComps/AddResidentForm";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Link, useLoaderData, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../util/Auth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [totalResidents, setTotalResidents] = useState(0);
  const [pendingLeaves, setPendingLeaves] = useState(0);
  const [pendingReturn, setPendingReturn] = useState(0);
  const [approvedLeaves, setApprovedLeaves] = useState(0);

  const { user } = useRouteLoaderData("root");

  useEffect(() => {
    const fetchTotalResidents = async () => {
      try {
        const response = await fetch("/dashboard/residents", {
          headers: {
            Authorization: "Bearer " + getAuthToken(),
            "Access-Control-Allow-Origin": "*",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setTotalResidents(data.count);
        } else {
          throw new Error("Failed to fetch total residents");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchPendingLeaves = async () => {
      try {
        const response = await fetch("/dashboard/leaves", {
          headers: {
            Authorization: "Bearer " + getAuthToken(),
            "Access-Control-Allow-Origin": "*",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setPendingLeaves(data.pending_approval_leaves);
        } else {
          throw new Error("Failed to fetch pending leaves");
        }
      } catch (error) {
        console.error(error);
      }
    };
    const fetchPendingReturn = async () => {
      try {
        const response = await fetch("/dashboard/leaves", {
          headers: {
            Authorization: "Bearer " + getAuthToken(),
            "Access-Control-Allow-Origin": "*",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setPendingReturn(data.pending_return_leaves);
        } else {
          throw new Error("Failed to fetch pending leaves");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchApprovedLeaves = async () => {
      try {
        const response = await fetch("/dashboard/leaves", {
          headers: {
            Authorization: "Bearer " + getAuthToken(),
            "Access-Control-Allow-Origin": "*",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setApprovedLeaves(data.approved_leaves_count);
        } else {
          throw new Error("Failed to fetch pending leaves");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalResidents();
    fetchPendingLeaves();
    fetchPendingReturn();
    fetchApprovedLeaves();
  }, []);



  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Welcome {user.first_name} {user.last_name}
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="flex space-x-6">
              <Link to="/login/residents/new">
                <button
                  type="button"
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
              <p>Total Residents: {totalResidents}</p>
              <p>Pending Approval Leaves: {pendingLeaves}</p>
              <p  >Pending Return Leaves: {pendingReturn}</p>
              <p  >Approved Leaves: {approvedLeaves}</p>
            </div>
            <Updates />
          </div>
        </main>
      </div>
    </>
  );
}
