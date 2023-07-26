import { useSubmit } from "react-router-dom";
import React, { useState } from "react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  PrinterIcon,
  XCircleIcon,
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
  Button,
} from "@tremor/react";

function ViewLeavesForm({ leaves, title }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <React.Fragment>
      <div>
        <Flex
          className="space-x-0.5"
          justifyContent="start"
          alignItems="center"
        >
          <Title>Leave Applications</Title>
          <Icon
            icon={InformationCircleIcon}
            variant="simple"
            tooltip="Shows applied leaves"
          />
        </Flex>
      </div>

      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Leave Date</TableHeaderCell>
            <TableHeaderCell className="text-left">
              Duration(Days)
            </TableHeaderCell>
            <TableHeaderCell className="text-left">
              Approval Status
            </TableHeaderCell>
            <TableHeaderCell className="text-left">
              Person responsible
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaves.map((item) => (
            <TableRow key={item.id}>
              <Link to={`./${item.id}`}>
                <TableCell className="hover:underline hover:text-indigo-600">{item.leave_date}</TableCell>
              </Link>
              <TableCell className="text-left">{item.duration}</TableCell>
              <TableCell className="text-left">
                {item.approval_status}
              </TableCell>
              <TableCell className="text-left">
                {item.person_responsible}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default ViewLeavesForm;
