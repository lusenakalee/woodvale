import React, { useState } from "react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  PrinterIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
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
} from "@tremor/react";

function ViewLeaves({ leaves, title }) {



      // Calculate pagination
      const [currentPage, setCurrentPage] = useState(1); // Current page number

      const LEAVES_PER_PAGE = 10; // Set the number of residents to display per page
      const totalLeaves = leaves.length;
      const totalPages = Math.ceil(totalLeaves/ LEAVES_PER_PAGE);
    
      // Get the slice of residents to display based on the current page
      const startIndex = (currentPage - 1) * LEAVES_PER_PAGE;
      const endIndex = startIndex + LEAVES_PER_PAGE;
      const leavesToShow = leaves.slice(startIndex, endIndex);






  return (
    <React.Fragment>
      <div>
        <Flex
          className="space-x-0.5"
          justifyContent="start"
          alignItems="center"
        >
          <Title>{title}</Title>
          <Icon
            icon={InformationCircleIcon}
            variant="simple"
            tooltip="Shows applied leaves"
          />
        </Flex>
      </div>

      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Resident Name</TableHeaderCell>
            <TableHeaderCell>Leave Date</TableHeaderCell>
            <TableHeaderCell>Return Date</TableHeaderCell>
          
            <TableHeaderCell className="text-right">
              Approval Status
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Person responsible
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
             Contact 
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leavesToShow.map((item) => (
            <TableRow key={item.id}>
              <Link to={`/login/residents/${item.resident_id}/leaves/${item.id}`}>
                <TableCell>
                  {item.resident.first_name} {item.resident.last_name}
                </TableCell>
              </Link>
              <TableCell>{item.leave_date}</TableCell>
              <TableCell>{item.return_date}</TableCell>
             
              <TableCell className="text-right">
                {item.approval_status}
              </TableCell>
              <TableCell className="text-right">
                {item.person_responsible}
              </TableCell>
              <TableCell className="text-right" >{item.contact}</TableCell>
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

export default ViewLeaves;
