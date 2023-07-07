import React from 'react'
import ResidentDetailsList from './ResidentDetailsList'
import Nav from '../RootComps/Nav';
import { Link } from 'react-router-dom';
import {  PrinterIcon, PlusCircleIcon } from "@heroicons/react/24/outline";


function ResidentDetails() {
  return (
    <>
      
      <div className="min-h-full">
        <Nav/>
      

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* Insert selected Resident's name instead of resident details */}
            <h1 className="text-3xl font-bold space-x-6  tracking-tight text-gray-900">
              <text className='pr-16'>
              Resident Details</text>
              <button
            type="button"
            className="inline-flex items-center  rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PrinterIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Export
          </button>
          <Link to="/NewLog">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PlusCircleIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            New Log
          </button>
          </Link>
              </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <ResidentDetailsList/>
            </div>
        </main>
      </div>
    </>
  )
}

export default ResidentDetails;