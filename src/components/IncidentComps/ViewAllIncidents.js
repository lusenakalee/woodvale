import React from "react";
import { useSubmit } from "react-router-dom";
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

function ViewAllIncidents({ incidents }) {
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
          <Title>Incidents</Title>
          <Icon
            icon={InformationCircleIcon}
            variant="simple"
            tooltip="Shows incidents"
          />
        </Flex>
      </div>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Resident Name</TableHeaderCell>
            <TableHeaderCell>Incident Date</TableHeaderCell>
            <TableHeaderCell className="text-right">
              Person Reporting
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Person notified
            </TableHeaderCell>
            <TableHeaderCell className="text-right">location</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incidents.map((item) => (
            <TableRow key={item.id}>
              <Link to={`/login/resident/${item.resident.id}`}>
                <TableCell>{item.resident.first_name} {item.resident.last_name}</TableCell>
              </Link>
              <TableCell className="text-right">
                {item.incident_date}
              </TableCell>
              <TableCell className="text-right">
                {item.person_reporting}
              </TableCell>
              <TableCell className="text-right">
                {item.person_notified}
              </TableCell>
              <TableCell className="text-right">{item.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      
    </React.Fragment>
  );
}

export default ViewAllIncidents;
