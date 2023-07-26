import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  InformationCircleIcon,
  PrinterIcon,
} from "@heroicons/react/24/outline";
import {
  Icon,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  Title,
  Flex,
  Select,
  SelectItem,
  MultiSelect,
  MultiSelectItem,
} from "@tremor/react";
import Papa from "papaparse";


export default function ResidentList({ residentsList }) {
  const [selectedResidentNames, setSelectedResidentNames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  
  const isResidentSelected = (resident) =>
  selectedResidentNames.includes(resident.first_name) ||
  selectedResidentNames.length === 0;
  
  const filteredResidents = residentsList.filter(isResidentSelected);
  
  const handleExportCSV = () => {
    const csvData = Papa.unparse(filteredResidents);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "residents.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Calculate pagination
  const RESIDENTS_PER_PAGE = 10; // Set the number of residents to display per page
  const totalResidents = filteredResidents.length;
  const totalPages = Math.ceil(totalResidents / RESIDENTS_PER_PAGE);

  // Get the slice of residents to display based on the current page
  const startIndex = (currentPage - 1) * RESIDENTS_PER_PAGE;
  const endIndex = startIndex + RESIDENTS_PER_PAGE;
  const residentsToShow = filteredResidents.slice(startIndex, endIndex);

  return (
    <>
      <div>
        <Flex
          className="space-x-0.5"
          justifyContent="start"
          alignItems="center"
        >
          <Title>Residents</Title>
          <Icon
            icon={InformationCircleIcon}
            variant="simple"
            tooltip="Shows general employee information"
          />
        </Flex>
      </div>
      <div className="flex space-x-2">
        <MultiSelect
          className="max-w-full sm:max-w-xs"
          onValueChange={setSelectedResidentNames}
          placeholder="Select resident..."
        >
          {residentsList.map((item) => (
            <MultiSelectItem
              key={item.first_name}
              value={item.first_name}
              label={`${item.first_name} ${item.last_name}`}
            />
          ))}
        </MultiSelect>

        <button
          type="button"
          onClick={handleExportCSV}
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <PrinterIcon
            className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Export
        </button>
      </div>
      <Table className="mt-6 table w-full">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="">First Name</TableHeaderCell>
            <TableHeaderCell className=" text-left">Last Name</TableHeaderCell>
            <TableHeaderCell className=" text-left">Age</TableHeaderCell>
            <TableHeaderCell className=" text-left">
              Date Registered
            </TableHeaderCell>
            <TableHeaderCell className=" text-left">Gender</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {residentsToShow.map((item) => (
            <TableRow key={item.id} className="hover:bg-white">
              <TableCell className=" hover:text-indigo-600 hover:underline">
                <Link to={`./${item.id}`}>{item.first_name}</Link>
              </TableCell>
              <TableCell className=" text-left">{item.last_name}</TableCell>
              <TableCell className=" text-left">{item.age}</TableCell>
              <TableCell className=" text-left">
                {item.date_registered}
              </TableCell>
              <TableCell className=" text-left">{item.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <ol className="flex justify-center gap-1 text-xs font-medium mt-4">
        {currentPage > 1 && (
          <li>
            <a
              href="#"
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        )}

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNum) => (
            <li key={pageNum}>
              <a
                href="#"
                onClick={() => setCurrentPage(pageNum)}
                className={`${
                  pageNum === currentPage
                    ? "block h-8 w-8 rounded border-blue-600 bg-indigo-600 text-center leading-8 text-white"
                    : "block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                }`}
              >
                {pageNum}
              </a>
            </li>
          )
        )}

        {currentPage < totalPages && (
          <li>
            <a
              href="#"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        )}
      </ol>
    </>
  );
}
