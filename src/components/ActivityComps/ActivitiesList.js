import React, { useEffect, useState } from "react";
import {
  InformationCircleIcon,
  PrinterIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { Link, json, useActionData, useSubmit } from "react-router-dom";
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
import { getAuthToken } from "../../util/Auth";
import { StopCircleIcon } from "@heroicons/react/24/outline";

function ActivitiesList({ activities }) {
  const submit = useSubmit();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleOpenModal1 = () => {
    setIsOpen(true);
  };

  const handleCloseModal1 = () => {
    setIsOpen(false);
  };

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
          className="inline-flex items-center  rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
                <Button
                  type="button"
                  onClick={() => handleApprove({ id: item.id })}
                  onClick={handleOpenModal1}
                  variant="secondary"
                  icon={CheckCircleIcon}
                >
                  Approve
                </Button>
                {isOpen1 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 bg-white rounded-md w-96">
                      <form>
                        <div className="p-6">
                          <h1 className="text-lg font-bold">Event Approval</h1>
                          <p>
                            Are you sure you want to reject this event :
                            {item.name}?
                            {data && data.errors && (
                              <ul>
                                {Object.values(data.errors).map((err) => (
                                  <li key={err}>{err}</li>
                                ))}
                              </ul>
                            )}{" "}
                          </p>
                        </div>
                        <div className="px-6 py-4 bg-gray-100 flex items-center justify-end gap-x-4">
                          <button
                            type="button"
                            onClick={handleCloseModal1}
                            className="text-sm font-semibold text-gray-900"
                          >
                            Close
                          </button>
                          <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                          >
                            Save changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </TableCell>
              <TableCell className="text-right">
                <Button
                  type="button"
                  onClick={() => handleReject({ id: item.id })}
                  onClick={handleOpenModal}
                  className="btn btn-primary"
                  variant="secondary"
                  icon={XCircleIcon}>
                  Reject
                </Button>
                {isOpen && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 bg-white rounded-md w-96">
                      <form>
                        <div className="p-6">
                          <h1 className="text-lg font-bold">Event Rejection</h1>
                          <p>
                            Are you sure you want to reject this event :
                            {item.name}?
                            {data && data.errors && (
                              <ul>
                                {Object.values(data.errors).map((err) => (
                                  <li key={err}>{err}</li>
                                ))}
                              </ul>
                            )}{" "}
                          </p>
                        </div>
                        <div className="px-6 py-4 bg-gray-100 flex items-center justify-end gap-x-4">
                          <button
                            type="button"
                            onClick={handleCloseModal}
                            className="text-sm font-semibold text-gray-900"
                          >
                            Close
                          </button>
                          <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                          >
                            Save changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default ActivitiesList;
