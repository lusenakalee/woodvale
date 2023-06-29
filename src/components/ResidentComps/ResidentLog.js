import React from "react";
import Nav from "../Nav";
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
import { InformationCircleIcon , PrinterIcon} from "@heroicons/react/24/outline";
import { useState } from "react";
import ResidentWeightChart from "./ResidentWeightChart";

export type SalesPerson = {
  date: string,
  hr: number,
  weight: string,
  temp: string,
  variance: string,
  initials: string,
  status: string,
};

export const salesPeople: SalesPerson[] = [
  {
    date: "27-06-2023",
    hr: 45,
    weight: "100",
    temp: "36",
    variance: "low",
    initials: "CM",
    status: "overperforming",
  },
  {
    date: "26-06-2023",
    hr: 35,
    weight: "90",
    temp: "54",
    variance: "low",
    initials: "BR ",
    status: "average",
  },
  {
    date: "25-06-2023",
    hr: 52,
    weight: "93",
    temp: "100",
    variance: "medium",
    initials: "RC",
    status: "underperforming",
  },
  {
    date: "24-06-2023",
    hr: 22,
    weight: "39",
    temp: "50",
    variance: "low",
    initials: "RA",
    status: "overperforming",
  },
  {
    date:  "23-06-2023",
    hr: 49,
    weight: "860",
    temp: "70",
    variance: "low",
    initials: "RB",
    status: "overperforming",
  },
];

const deltaTypes: { [key: string]: DeltaType } = {
  average: "unchanged",
  overperforming: "moderateIncrease",
  underperforming: "moderateDecrease",
};

function ResidentLog() {
  const [selectedStatus, setselectedStatus] = useState("all");
  const [selectedDates, setSelectedDates] = useState([]);

  const isSalesPersonSelected = (salesPerson: SalesPerson) =>
    (salesPerson.status === selectedStatus || selectedStatus === "all") &&
    (selectedDates.includes(salesPerson.Date) || selectedDates.length === 0);

  return (
    <div>
      <Nav />

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Resident Health Log
          </h1>
        </div>
      </header>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div>
        <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
          <Title> Performance History </Title>
          <Icon
            icon={InformationCircleIcon}
            variant="simple"
            tooltip="Shows sales performance per employee"
          />
        </Flex>
      </div>
      <div className="flex space-x-2">
        <MultiSelect
          className="max-w-full sm:max-w-xs"
          onValueChange={setSelectedDates}
          placeholder="Select Date..."
        >
          {salesPeople.map((item) => (
            <MultiSelectItem key={item.date} value={item.date}>
              {item.date}
            </MultiSelectItem>
          ))}
        </MultiSelect>
        <Select
          className="max-w-full sm:max-w-xs"
          defaultValue="all"
          onValueChange={setselectedStatus}
        >
          <SelectItem value="all">All Performances</SelectItem>
          <SelectItem value="overperforming">Overperforming</SelectItem>
          <SelectItem value="average">Average</SelectItem>
          <SelectItem value="underperforming">Underperforming</SelectItem>
        </Select>
        <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PrinterIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Export
          </button>
      </div>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell className="text-right">H R</TableHeaderCell>
            <TableHeaderCell className="text-right">Weight (Kg)</TableHeaderCell>
            <TableHeaderCell className="text-right">Temp (c)</TableHeaderCell>
            <TableHeaderCell className="text-right">C.G  Initials</TableHeaderCell>
            <TableHeaderCell className="text-right">Status</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {salesPeople
            .filter((item) => isSalesPersonSelected(item))
            .map((item) => (
              <TableRow key={item.date}>
                <TableCell>{item.date}</TableCell>
                <TableCell className="text-right">{item.hr}</TableCell>
                <TableCell className="text-right">{item.weight}</TableCell>
                <TableCell className="text-right">{item.temp}</TableCell>
                <TableCell className="text-right">{item.initials}</TableCell>
                <TableCell className="text-right">
                  <BadgeDelta deltaType={deltaTypes[item.status]} size="xs">
                    {item.status}
                  </BadgeDelta>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="pt-10">
      <ResidentWeightChart/>
      </div>


      </div>
      </div>
  );
}

export default ResidentLog;
