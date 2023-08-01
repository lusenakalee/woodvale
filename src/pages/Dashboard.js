import React, { useState } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import {
  Card,
  Text,
  Metric,
  Button,
  ListItem,
  Grid,
  CategoryBar,
  Flex,
  ProgressBar,
  BadgeDelta,
  List,
  Bold,
  DonutChart,
  Divider,
  Tab,
  TabGroup,
  Title,
  TabList,
  Icon,
} from "@tremor/react";
import Updates from "../components/DashboardComps/Updates";
import {
  PlusCircleIcon,
  ArrowRightIcon,
  ChartPieIcon,
  QueueListIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const routeLoaderData = useRouteLoaderData("root");
  const {
    user,
    totalResidents,
    totalIncidents,
    leaves,
    activities,
    dailyRecords,
    usersCount,
  } = routeLoaderData;

  const leavesChart = [
    {
      name: "Pending Leave Approval",
      value: leaves.pending_approval_leaves,
      path: "/login/pending-approval",
    },
    {
      name: "Pending Return Approval",
      value: leaves.pending_approval_return,
      path: "/login/pending-return",
    },
    {
      name: "Approved leaves",
      value: leaves.approved_leaves,
      path: "/login/approved-leaves",
    },
    {
      name: "Pending Return ",
      value: leaves.pending_return,
      path: "/login/pending-return",
    },
    {
      name: "Overdue Leaves ",
      value: leaves.overdue_leaves,
      path: "/login/overdue-leaves",
    },
    {
      name: "Rejected Leaves ",
      value: leaves.rejected_leaves,
      path: "/login/rejected-leaves",
    },
  ];

  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Welcome {user ? user.first_name : ""} {user ? user.last_name : ""}
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="flex ">
              <Icon
                icon={InformationCircleIcon}
                variant="simple"
                tooltip="customizable quick links to access other parts of the system"
              />
            </div>
            <div className="flex pl-10 space-x-6">
              <Link to="/login/residents/new">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <PlusCircleIcon
                    className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Add Resident
                </button>
              </Link>
            </div>


            <div className="flex justify-center ">
              <Icon
                icon={InformationCircleIcon}
                variant="simple"
                tooltip="Brief comprehensive dashboard analytics and reports"
              />
            </div>

            <div class="grid grid-cols-2 gap-2 py-4">
              
              <div>
                <Card className="max-w-lg mx-auto">
                  <Card>
                    <Flex>
                      <Text className="truncate">
                        Records taken so far today
                      </Text>
                    </Flex>
                    <Flex
                      justifyContent="start"
                      alignItems="baseline"
                      className="space-x-1"
                    >
                      <Metric>
                        {dailyRecords
                          ? dailyRecords.residents_with_records
                          : ""}
                      </Metric>
                      <Text>
                        /{totalResidents ? totalResidents.count : ""} residents
                      </Text>
                    </Flex>
                    <CategoryBar
                      values={[10, 25, 45, 20]}
                      colors={["emerald", "yellow", "orange", "red"]}
                      markerValue={
                        (dailyRecords.residents_with_records * 100) /
                        totalResidents.count
                      }
                      tooltip={`${
                        (dailyRecords.residents_with_records /
                          totalResidents.count) *
                        100
                      }%`}
                      className="mt-2"
                    />
                  </Card>

                  <Grid numItemsSm={2} className="mt-4 gap-4">
                    <Link to="/login/residents">
                      <Card className="hover:bg-gray-50">
                        <Metric className="mt-2 truncate">
                          {totalResidents.count}
                        </Metric>
                        <Text>Number of residents</Text>
                      </Card>
                    </Link>
                    <Link to="/login/incidents-today">
                      <Card className="hover:bg-gray-50">
                        <Metric className="mt-2 truncate">
                          {totalIncidents.incidents}
                        </Metric>
                        <Text>Total incidents</Text>
                      </Card>
                    </Link>
                    <Link to="/login/pending-return">
                      <Card className="hover:bg-gray-50">
                        <Metric className="mt-2 truncate">
                          {leaves.on_leave }
                        </Metric>
                        <Text>Residents on leave</Text>
                      </Card>
                    </Link>
                    {user && user.is_admin === true ? (
  <Link to="/login/staff">
    <Card className="hover:bg-gray-50">
      <Metric className="mt-2 truncate">
        {usersCount?.admin_count + usersCount?.user_count} Staff
      </Metric>
      <Text>
        {usersCount?.admin_count} Admins and {usersCount?.user_count} Care Givers
      </Text>
    </Card>
  </Link>
) : null}

                
                  </Grid>
                </Card>
              </div>
              <div>
                <Card className="max-w-md mx-auto">
                  <Flex
                    className="space-x-8"
                    justifyContent="between"
                    alignItems="center"
                  >
                    <Title>Leaves Overview</Title>
                    <TabGroup
                      index={selectedIndex}
                      onIndexChange={setSelectedIndex}
                    >
                      <TabList variant="solid">
                        <Tab icon={ChartPieIcon}>Chart</Tab>
                        <Tab icon={QueueListIcon}>List</Tab>
                      </TabList>
                    </TabGroup>
                  </Flex>
                  <Text className="mt-8">Total Leaves applied</Text>
                  <Metric>
                    {leaves.pending_approval_leaves + leaves.approved_leaves}
                  </Metric>
                  <Divider />
                  <Text className="mt-4">
                    <Bold>Leaves partition</Bold>
                  </Text>

                  {selectedIndex === 0 ? (
                    <DonutChart
                      data={leavesChart}
                      showAnimation={false}
                      category="value"
                      index="name"
                      className="mt-6"
                    />
                  ) : (
                    <>
                      <Flex className="mt-8" justifyContent="between">
                        <Text className="truncate">
                          <Bold>leaves</Bold>
                        </Text>
                        <Text>Number</Text>
                      </Flex>
                      <List className="mt-4">
                        {leavesChart.map((item) => (
                          <ListItem key={item.name}>
                            <Link to={item.path}>
                              <Text className="hover:text-indigo-600 hover:underline">
                                {item.name}
                              </Text>
                            </Link>
                            <Flex justifyContent="end" className="space-x-2">
                              <Text> {item.value}</Text>
                            </Flex>
                          </ListItem>
                        ))}
                      </List>
                    </>
                  )}
                </Card>
              </div>
            </div>
            <div className="pt-5">
              <div className="flex justify-center">
                <Icon
                  icon={InformationCircleIcon}
                  variant="simple"
                  tooltip="Live customizable updates such as resident incident reports and new residents"
                />
              </div>
              <Updates />
            </div>
            <Updates />
          </div>
        </main>
      </div>
    </>
  );
}



