"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
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
import { useState } from "react";
import { Link } from "react-router-dom";
export type SalesPerson = {
  name: string;
  residents: number;
  sales: string;
  quota: string;
  Occupation: string;
  department: string;
  status: string;
};

export const salesPeople: SalesPerson[] = [
  {
    name: "Peter Doe",
    residents: 45,
    sales: "1,000,000",
    quota: "1,200,000",
    Occupation: "Care Giver",
    department: "department A",
    status: "onduty",
  },
  {
    name: "Lena Whitehouse",
    residents: 35,
    sales: "900,000",
    quota: "1,000,000",
    Occupation: "Care Giver",
    department: "department B",
    status: "onLeave",
  },
  {
    name: "Phil Less",
    residents: 52,
    sales: "930,000",
    quota: "1,000,000",
    Occupation: "Physician",
    department: "department C",
    status: "offduty",
  },
  {
    name: "John Camper",
    residents: 22,
    sales: "390,000",
    quota: "250,000",
    Occupation: "Care Giver",
    department: "department A",
    status: "onduty",
  },
  {
    name: "Max Balmoore",
    residents: 49,
    sales: "860,000",
    quota: "750,000",
    Occupation: "Care Giver",
    department: "department B",
    status: "onduty",
  },
];

const deltaTypes: { [key: string]: DeltaType } = {
  onLeave: "unchanged",
  onduty: "moderateIncrease",
  offduty: "moderateDecrease",
};

export default function TeamList() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedNames, setSelectedNames] = useState([]);

  const isSalesPersonSelected = (salesPerson: SalesPerson) =>
    (salesPerson.status === selectedStatus || selectedStatus === "all") &&
    (selectedNames.includes(salesPerson.name) || selectedNames.length === 0);

  return (
    <>
      <div>
        <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
          <Title> Team members</Title>
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
          onValueChange={setSelectedNames}
          placeholder="Select Team member..."
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
          <SelectItem value="all">All </SelectItem>
          <SelectItem value="onduty">onduty</SelectItem>
          <SelectItem value="onLeave">onLeave</SelectItem>
          <SelectItem value="offduty">offduty</SelectItem>
        </Select>
      </div>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell className="text-right">residents</TableHeaderCell>
      
            <TableHeaderCell className="text-right">Occupation</TableHeaderCell>
            <TableHeaderCell className="text-right">department</TableHeaderCell>
            <TableHeaderCell className="text-right">Status</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {salesPeople
            .filter((item) => isSalesPersonSelected(item))
            .map((item) => (
                <TableRow key={item.name}>
                  <Link to="/ResidentDetail">
                <TableCell>{item.name}</TableCell>
              </Link>
                <TableCell className="text-right">{item.residents}</TableCell>
                
                <TableCell className="text-right">{item.Occupation}</TableCell>
                <TableCell className="text-right">{item.department}</TableCell>
                <TableCell className="text-right">
                  <BadgeDelta deltaType={deltaTypes[item.status]} size="xs">
                    {item.status}
                  </BadgeDelta>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}