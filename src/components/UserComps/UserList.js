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
  Title,
  Flex,
  Select,
  SelectItem,
  MultiSelect,
  MultiSelectItem,
} from "@tremor/react";

function UserList({ users }) {
  




  const [selectedNames, setSelectedNames] = useState([]);

  const isUserSelected = (user) =>
    selectedNames.includes(user.first_name) || selectedNames.length === 0;

  const filteredUsers = users.filter(isUserSelected);

  return (
    <React.Fragment>
      <div>
        <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
          <Title>Staff</Title>
          <Icon
            icon={InformationCircleIcon}
            variant="simple"
            tooltip="Shows general staff information"
          />
          <Title></Title>
        </Flex>
      </div>
      <div className="flex space-x-2">
        <MultiSelect
          className="max-w-full sm:max-w-xs"
          onValueChange={setSelectedNames}
          placeholder="Search by name..."
        >
          {users.map((item) => (
            <MultiSelectItem key={item.first_name} value={item.first_name}>
              {item.first_name}
            </MultiSelectItem>
          ))}
        </MultiSelect>
        <Select className="max-w-full sm:max-w-xs" defaultValue="all">
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="first_name">First Name</SelectItem>
          <SelectItem value="last_name">Last Name</SelectItem>
          <SelectItem value="username">Username</SelectItem>
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
            <TableHeaderCell>First Name</TableHeaderCell>
            <TableHeaderCell className="text-left">Last Name</TableHeaderCell>
            <TableHeaderCell className="text-left">Username</TableHeaderCell>
            <TableHeaderCell className="text-left">User Type</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredUsers.map((item) => (
            <TableRow key={item.id} className="hover:bg-white">
             <TableCell className="w-auto hover:text-indigo-600 hover:underline">
                <Link to={`./${item.id}`}>{item.first_name}</Link>
              </TableCell>
              <TableCell className="text-left">{item.last_name}</TableCell>
              <TableCell className="text-left">{item.username}</TableCell>
              <TableCell className="text-left">
                {item.is_admin === true ? "Admin" : "User"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default UserList;
