import React, { useEffect, useState } from "react";
import {
  InformationCircleIcon,
  PrinterIcon,
} from "@heroicons/react/24/outline";
import { Link, json, useActionData } from "react-router-dom";
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
import { getAuthToken } from "../../util/Auth";

function ActivitiesList({ activities }) {
  const [selectedDates, setSelectedDates] = useState([]);
  const data = useActionData();
  const isActivitySelected = (activity) =>
    selectedDates.includes(activity.event_date) || selectedDates.length === 0;

  const filteredActivities = activities.filter(isActivitySelected);
  const token = getAuthToken();

  async function handleApprove({ id }) {
    const response = await fetch("/activity/approve/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 400) {
      return response;
    }
    if (response.status === 404) {
      return response;
    }
    if (!response.ok) {
      throw json({ message: "Server Error" }, { status: 500 });
    }
    if (response.ok) {
      return;
    }
  }
  async function handleReject({ id }) {
    const response = await fetch("/activity/disapprove/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 400) {
      return response;
    }
    if (response.status === 404) {
      return response;
    }
    if (!response.ok) {
      throw json({ message: "Server Error" }, { status: 500 });
    }
    if (response.ok) {
      return;
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
          <Title>Activities</Title>
          <Icon
            icon={InformationCircleIcon}
            variant="simple"
            tooltip="Shows Planned Activities"
          />
        </Flex>
      </div>
      <div className="flex space-x-2">
        <MultiSelect
          className="max-w-full sm:max-w-xs"
          onValueChange={setSelectedDates}
          placeholder="Search by date..."
        >
          {activities.map((item) => (
            <MultiSelectItem key={item.event_date} value={item.event_date}>
              {item.event_date}
            </MultiSelectItem>
          ))}
        </MultiSelect>
        <Select className="max-w-full sm:max-w-xs" defaultValue="all">
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="name">Event name</SelectItem>
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

      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Event Date</TableHeaderCell>
            <TableHeaderCell className="text-right">Event Name</TableHeaderCell>
            <TableHeaderCell className="text-right">
              Approval status
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Description
            </TableHeaderCell>
            <TableHeaderCell className="text-right">Approve</TableHeaderCell>
            <TableHeaderCell className="text-right">Reject</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredActivities.map((item) => (
            <TableRow key={item.id}>
              <Link to={`./${item.id}`}>
                <TableCell>{item.event_date}</TableCell>
              </Link>
              <TableCell className="text-right">{item.name}</TableCell>
              <TableCell className="text-right">
                {item.approved === true ? "Approved" : "Not Approved"}
              </TableCell>
              <TableCell className="text-right">{item.description}</TableCell>
              <TableCell className="text-right">
                <button
                  type="button"
                  onClick={() => handleApprove({ id: item.id })}
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  Approve Event
                </button>
                <div
                  className="modal fade"
                  id="exampleModal1"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Event Approval
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Are you sure you want to approve this event:{item.name}?
                        {data && data.errors && (
                          <ul>
                            {Object.values(data.errors).map((err) => (
                              <li key={err}>{err}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <button
                  type="button"
                  onClick={() => handleReject({ id: item.id })}
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Reject Event
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Event Rejection
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Are you sure you want to reject this event:{item.name}?
                        {data && data.errors && (
                          <ul>
                            {Object.values(data.errors).map((err) => (
                              <li key={err}>{err}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default ActivitiesList;
