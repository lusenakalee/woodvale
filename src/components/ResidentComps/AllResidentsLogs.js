"use client";

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
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Nav from "../Nav";



export type SalesPerson = {
  name: string;
  leads: number;
  sales: string;
  quota: string;
  variance: string;
  region: string;
  status: string;
};

export const salesPeople: SalesPerson[] = [
  {
    name: "Peter Doe",
    leads: 45,
    sales: "1,000,000",
    quota: "1,200,000",
    variance: "low",
    region: "Region A",
    status: "overperforming",
  },
  {
    name: "Lena Whitehouse",
    leads: 35,
    sales: "900,000",
    quota: "1,000,000",
    variance: "low",
    region: "Region B",
    status: "average",
  },
  {
    name: "Phil Less",
    leads: 52,
    sales: "930,000",
    quota: "1,000,000",
    variance: "medium",
    region: "Region C",
    status: "underperforming",
  },
  {
    name: "John Camper",
    leads: 22,
    sales: "390,000",
    quota: "250,000",
    variance: "low",
    region: "Region A",
    status: "overperforming",
  },
  {
    name: "Max Balmoore",
    leads: 49,
    sales: "860,000",
    quota: "750,000",
    variance: "low",
    region: "Region B",
    status: "overperforming",
  },
];

const deltaTypes: { [key: string]: DeltaType } = {
  average: "unchanged",
  overperforming: "moderateIncrease",
  underperforming: "moderateDecrease",
};

export default function AllResidentsLogs() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedNames, setSelectedNames] = useState([]);

  const isSalesPersonSelected = (salesPerson: SalesPerson) =>
    (salesPerson.status === selectedStatus || selectedStatus === "all") &&
    (selectedNames.includes(salesPerson.name) || selectedNames.length === 0);

  return (
    <>


<div className="min-h-full">
        <Nav/>
      

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Team</h1>
          </div>
        </header>
        <main>
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
          onValueChange={setSelectedNames}
          placeholder="Select Salespeople..."
        >
          {salesPeople.map((item) => (
            <MultiSelectItem key={item.name} value={item.name}>
              {item.name}
            </MultiSelectItem>
          ))}
        </MultiSelect>
        <Select
          className="max-w-full sm:max-w-xs"
          defaultValue="all"
          onValueChange={setSelectedStatus}
        >
          <SelectItem value="all">All Performances</SelectItem>
          <SelectItem value="overperforming">Overperforming</SelectItem>
          <SelectItem value="average">Average</SelectItem>
          <SelectItem value="underperforming">Underperforming</SelectItem>
        </Select>
      </div>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell className="text-right">Leads</TableHeaderCell>
            <TableHeaderCell className="text-right">Sales ($)</TableHeaderCell>
            <TableHeaderCell className="text-right">Quota ($)</TableHeaderCell>
            <TableHeaderCell className="text-right">Variance</TableHeaderCell>
            <TableHeaderCell className="text-right">Region</TableHeaderCell>
            <TableHeaderCell className="text-right">Status</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {salesPeople
            .filter((item) => isSalesPersonSelected(item))
            .map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.leads}</TableCell>
                <TableCell className="text-right">{item.sales}</TableCell>
                <TableCell className="text-right">{item.quota}</TableCell>
                <TableCell className="text-right">{item.variance}</TableCell>
                <TableCell className="text-right">{item.region}</TableCell>
                <TableCell className="text-right">
                  <BadgeDelta deltaType={deltaTypes[item.status]} size="xs">
                    {item.status}
                  </BadgeDelta>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>            </div>
        </main>
      </div>










    </>
  );
}