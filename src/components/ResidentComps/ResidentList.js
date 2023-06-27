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
  age: number;
  sales: string;
  quota: string;
  condition: string;
  group: string;
  status: string;
};

export const salesPeople: SalesPerson[] = [
  {
    name: "Peter Doe",
    age: 45,
    sales: "1,000,000",
    quota: "1,200,000",
    condition: "Diabetic",
    group: "group A",
    status: "senior",
  },
  {
    name: "Lena Whitehouse",
    age: 35,
    sales: "900,000",
    quota: "1,000,000",
    condition: "asmatic",
    group: "group B",
    status: "Stable",
  },
  {
    name: "Phil Less",
    age: 52,
    sales: "930,000",
    quota: "1,000,000",
    condition: "None",
    group: "group C",
    status: "critical",
  },
  {
    name: "John Camper",
    age: 22,
    sales: "390,000",
    quota: "250,000",
    condition: "Diabetic",
    group: "group A",
    status: "senior",
  },
  {
    name: "Max Balmoore",
    age: 49,
    sales: "860,000",
    quota: "750,000",
    condition: "None",
    group: "group B",
    status: "senior",
  },
];

const deltaTypes: { [key: string]: DeltaType } = {
  Stable: "unchanged",
  senior: "moderateIncrease",
  critical: "moderateDecrease",
};

export default function ResidentList() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedNames, setSelectedNames] = useState([]);

  const isSalesPersonSelected = (salesPerson: SalesPerson) =>
    (salesPerson.status === selectedStatus || selectedStatus === "all") &&
    (selectedNames.includes(salesPerson.name) || selectedNames.length === 0);

  return (
    <>
      <div>
        <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
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
          onValueChange={setSelectedNames}
          placeholder="Select resident..."
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
          <SelectItem value="senior">senior</SelectItem>
          <SelectItem value="Stable">Stable</SelectItem>
          <SelectItem value="critical">critical</SelectItem>
        </Select>
      </div>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell className="text-right">age</TableHeaderCell>
            <TableHeaderCell className="text-right">condition</TableHeaderCell>
            <TableHeaderCell className="text-right">group</TableHeaderCell>
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
                <TableCell className="text-right">{item.age}</TableCell>
                <TableCell className="text-right">{item.condition}</TableCell>
                <TableCell className="text-right">{item.group}</TableCell>
                <TableCell className="text-right">
                    {item.status}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}