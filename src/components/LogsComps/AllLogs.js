import React from "react";
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

function AllLogs({ logs }) {
  const {resident} = useRouteLoaderData("resident-detail");

  const routeLoaderData = useRouteLoaderData("root");
  const { healthData } = routeLoaderData;

  // Prepare the chart data
  const chartData = logs.map((log) => ({
    date: log.creation_date,
    "Heart Rate": log.heart_rate,
    "Blood Pressure": log.blood_pressure,
    Weight: log.weight,
  }));

  return (
    <React.Fragment>

  <div  className="py-4">
          <Card >
            <div>
              <div className="font-bold text-lg">{resident.first_name}{"  "}{resident.last_name} Vitals records</div>
            <Title >  {"  "}Blood pressure, Heart Rate, and Weight Comparison</Title>
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
        <Select className="max-w-full sm:max-w-xs" defaultValue="all">
          <SelectItem value="all">All </SelectItem>
          <SelectItem value="creation_date">creation date</SelectItem>
        </Select>
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
            <TableHeaderCell>Creation Date</TableHeaderCell>
            <TableHeaderCell className="text-left">B.P</TableHeaderCell>
            <TableHeaderCell className="text-left">Heart Rate</TableHeaderCell>
            <TableHeaderCell className="text-left">Weight</TableHeaderCell>
            <TableHeaderCell className="text-left">Voiding</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((log) => (
            <TableRow key={log.id} className="hover:bg-white">
              <Link to={`./${log.id}`}>
                <TableCell className="w-auto hover:text-indigo-600 hover:underline">{log.creation_date}</TableCell>
              </Link>
              <TableCell className="text-left">{log.blood_pressure}</TableCell>
              <TableCell className="text-left">{log.heart_rate}</TableCell>
              <TableCell className="text-left">{log.weight}</TableCell>
              <TableCell className="text-left">{log.voiding}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default AllLogs;
