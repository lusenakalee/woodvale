import React from "react";
import { json, redirect, useSubmit } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";
import {
  InformationCircleIcon,
  PrinterIcon,
  ArrowDownTrayIcon,
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

  return (
    <React.Fragment>
      <Table className="mt-6 table w-full">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="">Upload Date</TableHeaderCell>
            <TableHeaderCell className=" text-left">Attachment</TableHeaderCell>
            <TableHeaderCell className=" text-left">Download</TableHeaderCell>
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
                  <Text>Download {" "}{attachment.description}</Text>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default AttachmentList;
