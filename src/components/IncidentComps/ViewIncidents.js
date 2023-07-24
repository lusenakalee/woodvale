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

function ViewIncidents({ incidents }) {
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
            <TableHeaderCell>Incident Date</TableHeaderCell>
            <TableHeaderCell className="text-left">
              Person Reporting
            </TableHeaderCell>
            <TableHeaderCell className="text-left">
              Person notified
            </TableHeaderCell>
            <TableHeaderCell className="text-left">location</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incidents.map((item) => (
            <TableRow key={item.id}>
              <Link to={`./${item.id}`}>
                <TableCell>{item.incident_date}</TableCell>
              </Link>
              <TableCell className="text-left">
                {item.person_reporting}
              </TableCell>
              <TableCell className="text-left">
                {item.person_notified}
              </TableCell>
              <TableCell className="text-left">{item.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      
    </React.Fragment>
  );
}

export default ViewIncidents;
