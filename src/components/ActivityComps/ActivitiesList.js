import React, { useState } from "react";
import {
  InformationCircleIcon,
  PrinterIcon,
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
  Select,
  SelectItem,
  MultiSelect,
  MultiSelectItem,
} from "@tremor/react";

function ActivitiesList({ activities }) {
  const [selectedDates, setSelectedDates] = useState([]);

  const isActivitySelected = (activity) =>
    selectedDates.includes(activity.event_date) || selectedDates.length === 0;

  const filteredActivities = activities.filter(isActivitySelected);

  return (
    <React.Fragment>
      <div>
        <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
          <Title>Activities</Title>
          <Icon
            icon={InformationCircleIcon}
            variant="simple"
            tooltip="Shows Planned Activities"
          />
        </Flex>
      </div>
      <div className="flex space-x-2">
        <MultiSelect
          className="max-w-full sm:max-w-xs"
          onValueChange={setSelectedDates}
          placeholder="Search by date..."
        >
          {activities.map((item) => (
            <MultiSelectItem key={item.event_date} value={item.event_date}>
              {item.event_date}
            </MultiSelectItem>
          ))}
        </MultiSelect>
        <Select className="max-w-full sm:max-w-xs" defaultValue="all">
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="name">Event name</SelectItem>
        </Select>
        <button
          type="button"
          className="inline-flex items-center  rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <PrinterIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          Export
        </button>
      </div>

      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Event Date</TableHeaderCell>
            <TableHeaderCell className="text-right">Event Name</TableHeaderCell>
            <TableHeaderCell className="text-right">Approval status</TableHeaderCell>
            <TableHeaderCell className="text-right">Description</TableHeaderCell>
            <TableHeaderCell className="text-right">Approve</TableHeaderCell>
            <TableHeaderCell className="text-right">Reject</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredActivities.map((item) => (
            <TableRow key={item.id}>
              <Link to={`./${item.id}`}>
                <TableCell>{item.event_date}</TableCell>
              </Link>
              <TableCell className="text-right">{item.name}</TableCell>
              <TableCell className="text-right">
                {item.approved === true ? "Approved" : "Not Approved"}
              </TableCell>
              <TableCell className="text-right">{item.description}</TableCell>
              <TableCell className="text-right"><button className="btn btn-success">Approve Event</button></TableCell>
              <TableCell className="text-right"><button className="btn btn-danger">Reject Event</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default ActivitiesList;
