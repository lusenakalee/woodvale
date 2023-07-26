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
  Title,
  Flex,
  Select,
  SelectItem,
  MultiSelect,
  MultiSelectItem,
} from "@tremor/react";
import Papa from "papaparse";

function UserList({ users }) {
  const [selectedNames, setSelectedNames] = useState([]);

  const isUserSelected = (user) =>
    selectedNames.includes(user.first_name) || 
    selectedNames.length === 0;

  const filteredUsers = users.filter(isUserSelected);

  const handleExportCSV = () => {
    const csvData = Papa.unparse(filteredUsers);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "users.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const USERS_PER_PAGE = 10; // Set the number of USERSs to display per page
  const [currentPage, setCurrentPage] = useState(1); // Current page number
    // Calculate pagination
    const totalUsers = filteredUsers.length;
    const totalPages = Math.ceil(totalUsers / USERS_PER_PAGE);
  
    // Get the slice of USERSs to display based on the current page
    const startIndex = (currentPage - 1) * USERS_PER_PAGE;
    const endIndex = startIndex + USERS_PER_PAGE;
    const usersToShow = filteredUsers.slice(startIndex, endIndex);






  return (
    <React.Fragment>
      <div>
        <Flex
          className="space-x-0.5"
          justifyContent="start"
          alignItems="center"
        >
          <Title>Staff</Title>
          <Icon
            icon={InformationCircleIcon}
            variant="simple"
            tooltip="Shows general staff information"
          />
          <Title></Title>
        </Flex>
      </div>
      <div className="flex space-x-2">
        <MultiSelect
          className="max-w-full sm:max-w-xs"
          onValueChange={setSelectedNames}
          placeholder="Search by name..."
        >
          {users.map((item) => (
            <MultiSelectItem key={item.first_name} value={item.first_name}>
              {item.first_name}
            </MultiSelectItem>
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
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>First Name</TableHeaderCell>
            <TableHeaderCell className="text-left">Last Name</TableHeaderCell>
            <TableHeaderCell className="text-left">Username</TableHeaderCell>
            <TableHeaderCell className="text-left">User Type</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {usersToShow.map((item) => (
            <TableRow key={item.id} className="hover:bg-white">
              <TableCell className="w-auto hover:text-indigo-600 hover:underline">
                <Link to={`./${item.id}`}>{item.first_name}</Link>
              </TableCell>
              <TableCell className="text-left">{item.last_name}</TableCell>
              <TableCell className="text-left">{item.username}</TableCell>
              <TableCell className="text-left">
                {item.is_admin === true ? "Admin" : "User"}
              </TableCell>
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



    </React.Fragment>
  );
}

export default UserList;
