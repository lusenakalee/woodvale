import React, { useState } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import {
  ChevronLeftIcon,
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
  DeltaType,
  Card,
  LineChart,
} from "@tremor/react";
import Papa from "papaparse";

function AllLogs({ logs }) {
  const { resident } = useRouteLoaderData("resident-detail");
  const [selectedLogDate, setSelectedLogDate] = useState([]);

  const isLogSelected = (log) =>
    selectedLogDate.includes(log.creation_date) || selectedLogDate.length === 0;

  const filteredLogs = logs.filter(isLogSelected);

  const routeLoaderData = useRouteLoaderData("root");
  const { healthData } = routeLoaderData;

  const handleExportCSV = () => {
    const csvData = Papa.unparse(filteredLogs);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "logs.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Prepare the chart data
  const chartData = logs.map((log) => ({
    date: log.creation_date,
    "Heart Rate": log.heart_rate,
    "Blood Pressure": log.blood_pressure,
    Weight: log.weight,
  }));


  const LOGS_PER_PAGE = 10; // Set the number to display per page
  const [currentPage, setCurrentPage] = useState(1); // Current page number
    // Calculate pagination
    const totalLogs = filteredLogs.length;
    const totalPages = Math.ceil(totalLogs / LOGS_PER_PAGE);
  
    // Get the slice to display based on the current page
    const startIndex = (currentPage - 1) * LOGS_PER_PAGE;
    const endIndex = startIndex + LOGS_PER_PAGE;
    const logsToShow = filteredLogs.slice(startIndex, endIndex);







  return (
    <React.Fragment>
      <div className="py-4">
        <Card>
          <div>
            <div className="font-bold text-lg">
              {resident.first_name}
              {"  "}
              {resident.last_name} Vitals records
            </div>
            <Title>
              {" "}
              {"  "}Blood pressure, Heart Rate, and Weight Comparison
            </Title>
          </div>
          <LineChart
            className="mt-6"
            data={chartData}
            index="date"
            categories={["Heart Rate", "Blood Pressure", "Weight"]}
            colors={["emerald", "gray", "indigo"]}
            yAxisWidth={40}
          />
        </Card>
      </div>
      <div>
        <Flex
          className="space-x-0.5"
          justifyContent="start"
          alignItems="center"
        >
          <Title>Logs</Title>
          <Icon
            icon={InformationCircleIcon}
            variant="simple"
            tooltip="Shows log history"
          />
        </Flex>
      </div>
      <div className="flex space-x-2">
        <MultiSelect
          className="max-w-full sm:max-w-xs"
          onValueChange={setSelectedLogDate}
          placeholder="Search date..."
        >
          {logs.map((item) => (
            <MultiSelectItem
              key={item.creation_date}
              value={item.creation_date}
            >
              {item.creation_date}
            </MultiSelectItem>
          ))}
        </MultiSelect>

        <Link to="..">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <ChevronLeftIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Back to Resident
          </button>
        </Link>
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

      <Table className="mt-6 pb-24">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Creation Date</TableHeaderCell>
            <TableHeaderCell className="text-left">B.P</TableHeaderCell>
            <TableHeaderCell className="text-left">Heart Rate</TableHeaderCell>
            <TableHeaderCell className="text-left">Weight</TableHeaderCell>
            <TableHeaderCell className="text-left">Voiding</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logsToShow.map((log) => (
            <TableRow key={log.id} className="hover:bg-white">
              <Link to={`./${log.id}`}>
                <TableCell className="w-auto hover:text-indigo-600 hover:underline">
                  {log.creation_date}
                </TableCell>
              </Link>
              <TableCell className="text-left">{log.blood_pressure}</TableCell>
              <TableCell className="text-left">{log.heart_rate}</TableCell>
              <TableCell className="text-left">{log.weight}</TableCell>
              <TableCell className="text-left">{log.voiding}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


       {/* Pagination */}
       <ol className="flex justify-center pb-24 gap-1 text-xs font-medium mt-4">
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

export default AllLogs;
