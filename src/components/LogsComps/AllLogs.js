import React from "react";
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
  DeltaType,
} from "@tremor/react";

function AllLogs({ logs }) {
  return (
    <React.Fragment>
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
            <TableHeaderCell className="text-right">B.P</TableHeaderCell>
            <TableHeaderCell className="text-right">Heart Rate</TableHeaderCell>
            <TableHeaderCell className="text-right">Weight</TableHeaderCell>
            <TableHeaderCell className="text-right">Voiding</TableHeaderCell>
          </TableRow>
        </TableHead>  
        <TableBody>
          {logs.map((log) => (
            <TableRow key={log.id}>
              <Link to={`./${log.id}`}>
                <TableCell>{log.creation_date}</TableCell>
              </Link>
              <TableCell className="text-right">{log.blood_pressure}</TableCell>
              <TableCell className="text-right">{log.heart_rate}</TableCell>
              <TableCell className="text-right">{log.weight}</TableCell>
              <TableCell className="text-right">{log.voiding}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    </React.Fragment>
  );
}

export default AllLogs;
