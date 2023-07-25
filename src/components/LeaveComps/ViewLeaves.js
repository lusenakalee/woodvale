import React from "react";
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
} from "@tremor/react";

function ViewLeaves({ leaves, title }) {
  return (
    <React.Fragment>
      <div>
        <Flex
          className="space-x-0.5"
          justifyContent="start"
          alignItems="center"
        >
          <Title>{title}</Title>
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
            <TableHeaderCell>Resident Name</TableHeaderCell>
            <TableHeaderCell>Leave Date</TableHeaderCell>
            <TableHeaderCell>Return Date</TableHeaderCell>
            <TableHeaderCell className="text-right">
              Duration(Days)
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Approval Status
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Person responsible
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaves.map((item) => (
            <TableRow key={item.id}>
              <Link to={`/login/resident/${item.resident.id}`}>
                <TableCell>
                  {item.resident.first_name} {item.resident.last_name}
                </TableCell>
              </Link>
              <TableCell>{item.leave_date}</TableCell>
              <TableCell>{item.return_date}</TableCell>
              <TableCell className="text-right">{item.duration}</TableCell>
              <TableCell className="text-right">
                {item.approval_status}
              </TableCell>
              <TableCell className="text-right">
                {item.person_responsible}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default ViewLeaves;
