import React, { Fragment, useRef, useState } from "react";
import {
  ProgressBar,
  Card,
  Flex,
  Text,
  Metric,
  TabList,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
  List,
  ListItem,
} from "@tremor/react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import AddResidentForm from "../ResidentComps/AddResidentForm";

function QuickLinks() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <div className="sm:px-4">
      <TabGroup>
        <TabList className="mt-8 flex items-right ">
          <Tab onClick={() => setOpen(true)}>Add resident</Tab>
          <Tab>Resident Logs</Tab>
          <Tab>Forms</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Transition.Root show={open} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={() => setOpen(false)}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      enterTo="opacity-100 translate-y-0 sm:scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                          <div className="sm:flex sm:items-start">
                            <div className="mt-3  sm:ml-4 sm:mt-0 sm:text-left">
                              <Dialog.Title
                                as="h3"
                                className="text-base font-semibold leading-6 text-gray-900"
                              >
                                Resident Registration Form
                              </Dialog.Title>
                              <div className="mt-2">
                                <AddResidentForm />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            onClick={() => setOpen(false)}
                          >
                            Submit
                          </button>
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                          >
                            Cancel
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </TabPanel>
          <TabPanel>
            <List>
              <Link to="/NewLog">
                <ListItem>
                  <span>Add</span>
                  <span> Add A new Log</span>
                </ListItem>
              </Link>
              <Link to="/Residents">
                <ListItem>
                  <span>View</span>
                  <span>Check taken results for all residents</span>
                </ListItem>
              </Link>
            </List>
          </TabPanel>
          <TabPanel>
            <List>
              <ListItem>
                <span>Report</span>
                <span> Incident Report Form </span>
              </ListItem>
              <ListItem>
                <span>Leave Application</span>
                <span>Leave Absence Form</span>
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default QuickLinks;
