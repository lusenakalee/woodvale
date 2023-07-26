import React, { useState } from "react";
import { json, redirect, useSubmit } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";
import {
  InformationCircleIcon,
  PrinterIcon,
  ArrowDownTrayIcon,
  TrashIcon,
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
  DownloadIcon,
  Text, // Step 1: Import the DownloadIcon
} from "@tremor/react";
import { Link } from "react-router-dom";

function AttachmentList({ attachments }) {
  async function startDeleteHandler(resident_id, id) {
    const proceed = window.confirm("Are you sure?");
    const token = getAuthToken();
    if (proceed) {
      const response = await fetch(
        `https://homes-test.onrender.com/resident/upload/${resident_id}/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        throw json(
          { message: "Could not delete attachment." },
          {
            status: 500,
          }
        );
      }
      return redirect(`/login/residents/${resident_id}/attachment`);
    }
  }

  // Step 2: Function to handle download action
  function handleDownloadClick(path) {
    // You can create a hidden anchor element and trigger a click on it to initiate the download
    const downloadLink = document.createElement("a");
    downloadLink.href = path;
    downloadLink.target = "_blank"; // Opens the link in a new tab
    downloadLink.download = path.substring(path.lastIndexOf("/") + 1); // Set the desired file name
    downloadLink.click();
  }

  const ATTACHMENTS_PER_PAGE = 10; // Set the number of residents to display per page
  const [currentPage, setCurrentPage] = useState(1); // Current page number
    // Calculate pagination
    const totalAttachments = attachments.length;
    const totalPages = Math.ceil(totalAttachments / ATTACHMENTS_PER_PAGE);
  
    // Get the slice of residents to display based on the current page
    const startIndex = (currentPage - 1) * ATTACHMENTS_PER_PAGE;
    const endIndex = startIndex + ATTACHMENTS_PER_PAGE;
    const residentsToShow = attachments.slice(startIndex, endIndex);


  return (
    <React.Fragment>
      <Table className="mt-6 table w-full">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="">Upload Date</TableHeaderCell>
            <TableHeaderCell className=" text-left">Attachment</TableHeaderCell>
            <TableHeaderCell className=" text-left">Download</TableHeaderCell>
            <TableHeaderCell className=" text-left">Delete</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attachments.map((attachment) => (
            <TableRow key={attachment.id} className="hover:bg-white">
              <TableCell className=" hover:text-indigo-600 hover:underline">
                <Link to={`./${attachment.id}`}>{attachment.upload_date}</Link>
              </TableCell>
              <TableCell className=" text-left">
                {attachment.description}
              </TableCell>
              <TableCell className=" text-left">
                <div
                  onClick={() => handleDownloadClick(attachment.path)}
                  className="flex space-x-1 cursor-pointer hover:text-indigo-600 hover:underline"
                >
                  {/* Step 3: Download link */}
                  <ArrowDownTrayIcon className="h-4 " />
                  <Text>Download {attachment.description}</Text>
                </div>
              </TableCell>
              <div className="flex space-x-2 hover:underline hover:text-indigo-600 cursor-pointer">
                <TrashIcon className="h-4 " />
                <Text>Delete {attachment.description}</Text>
              </div>
              <TableCell></TableCell>
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

export default AttachmentList;
