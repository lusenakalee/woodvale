import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Nav from "../components/RootComps/Nav";
import DashReports from "../components/DashboardComps/DashReports";
import Updates from "../components/DashboardComps/Updates";
import QuickLinks from "../components/DashboardComps/QuickLinks";
import SummaryTable from "../components/DashboardComps/SummaryTable";
import AddResidentAccordion from "../components/DashboardComps/AddResidentAccordion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">

              Dashboard
              <AddResidentAccordion/>
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <QuickLinks />
            <div className="py-10">
              <SummaryTable />
            </div>
            <Updates />
          </div>
        </main>
      </div>
    </>
  );
}
