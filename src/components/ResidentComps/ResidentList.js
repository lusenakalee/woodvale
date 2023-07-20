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

export default function ResidentList({ residentsList }) {
  const [selectedResidentNames, setSelectedResidentNames] = useState([]);

  const isResidentSelected = (resident) =>
    selectedResidentNames.includes(resident.first_name) ||
    selectedResidentNames.length === 0;

  const filteredResidents = residentsList.filter(isResidentSelected);

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
        <Select className="max-w-full sm:max-w-xs" defaultValue="all">
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="first_name">First Name</SelectItem>
          <SelectItem value="last_name">Last Name</SelectItem>
          <SelectItem value="age">Age</SelectItem>
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
      <Table className="mt-6 table w-full">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="w-auto">First Name</TableHeaderCell>
            <TableHeaderCell className="w-auto text-right">
              Last Name
            </TableHeaderCell>
            <TableHeaderCell className="w-auto text-right">Age</TableHeaderCell>
            <TableHeaderCell className="w-auto text-right">
              Date Registered
            </TableHeaderCell>
            <TableHeaderCell className="w-auto text-right">
              Gender
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredResidents.map((item) => (
            <TableRow key={item.id} className="hover:bg-white">
              <TableCell className="w-auto hover:text-indigo-600 hover:underline">
                <Link to={`./${item.id}`}>{item.first_name}</Link>
              </TableCell>
              <TableCell className="w-auto text-right">
                {item.last_name}
              </TableCell>
              <TableCell className="w-auto text-right">{item.age}</TableCell>
              <TableCell className="w-auto text-right">
                {item.date_registered}
              </TableCell>
              <TableCell className="w-auto text-right">{item.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
