import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Nav from "../components/RootComps/Nav";
import DashReports from "../components/DashboardComps/DashReports";
import Updates from "../components/DashboardComps/Updates";
import SummaryTable from "../components/DashboardComps/SummaryTable";
import AddResidentForm from "../components/ResidentComps/AddResidentForm";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Link, useLoaderData, useRouteLoaderData } from "react-router-dom";
import {
  BadgeDelta,
  Card,
  DeltaType,
  DonutChart,
  Select,
  SelectItem,
  Flex,
  Legend,
  List,
  ListItem,
  Title,
  Text,
  Metric,
} from "@tremor/react";
import { getAuthToken } from "../util/Auth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Dashboard() {
  const [isFormVisible, setIsFormVisible] = useState(false);
 

  const { user, pendingLeaves, pendingReturn, approvedLeaves, totalIncidents ,  totalResidents  } = useRouteLoaderData("root");


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
              <p>Total Incidents: {totalIncidents}</p>
              <p>Pending Approval Leaves: {pendingLeaves}</p>
              <p>Pending Return Leaves: {pendingReturn}</p>
              <p>Approved Leaves: {approvedLeaves}</p>
            </div>
            <div className="flex pt-5">
              <div>
                
              </div>
              <div className=" px-5 grid-cols-4 grid  gap-4">
                <div>
                  <Card
                    className="max-w-xs mx-auto"
                    decoration="top"
                    decorationColor="indigo"
                  >
                    <Text>Total residents</Text>
                    <Metric>{""}</Metric>
                  </Card>
                </div>
                <div>
                  <Card
                    className="max-w-xs mx-auto"
                    decoration="top"
                    decorationColor="indigo"
                  >
                    <Text>Total incidents</Text>
                    <Metric>{totalIncidents}</Metric>
                  </Card>
                </div>
                <div>
                  <Card
                    className="max-w-xs mx-auto"
                    decoration="top"
                    decorationColor="indigo"
                  >
                    <Text>Total incidents</Text>
                    <Metric>{totalIncidents}</Metric>
                  </Card>
                </div>
              </div>
            </div>
            <Updates />
          </div>
        </main>
      </div>
    </>
  );
}
